"use node";

import { httpAction, action } from "./_generated/server";
import { internal, api } from "./_generated/api";
import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { v } from "convex/values";

// System prompt for RAG-based Q&A
const RAG_SYSTEM_PROMPT = `You are a helpful assistant that answers questions about this website's content.

Guidelines:
- Answer questions based ONLY on the provided context
- If the context doesn't contain relevant information, say so honestly
- Cite sources by mentioning the page/post title when referencing specific content
- Be concise but thorough
- Format responses in markdown when appropriate
- Do not make up information not present in the context`;

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// HTTP action for streaming AI responses
export const streamResponse = httpAction(async (ctx, request) => {
  let body: { streamId?: string };

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const { streamId } = body;

  if (!streamId) {
    return new Response(JSON.stringify({ error: "Missing streamId" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  // Get the question and model from the database
  const session = await ctx.runQuery(internal.askAI.getSessionByStreamId, { streamId });

  if (!session) {
    return new Response(JSON.stringify({ error: "Session not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const { question, model } = session;

  // Pre-fetch search results
  let searchResults: Array<{ title: string; slug: string; type: string; content: string }> = [];

  try {
    const postResults = await ctx.runQuery(api.search.searchPosts, {
      query: question.trim(),
      limit: 5,
    });

    const pageResults = await ctx.runQuery(api.search.searchPages, {
      query: question.trim(),
      limit: 5,
    });

    for (const post of postResults) {
      searchResults.push({
        title: post.title,
        slug: post.slug,
        type: "post",
        content: post.content || post.description,
      });
    }

    for (const page of pageResults) {
      searchResults.push({
        title: page.title,
        slug: page.slug,
        type: "page",
        content: page.content,
      });
    }

    searchResults = searchResults.slice(0, 5);
  } catch (error) {
    console.error("Search error:", error);
    return new Response(JSON.stringify({ error: "Search failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  if (searchResults.length === 0) {
    const msg = "I couldn't find any relevant content to answer your question.";
    await ctx.runMutation(internal.askAI.appendToStream, { streamId, text: msg });
    return new Response(JSON.stringify({ success: true, text: msg }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  // Build context
  const contextParts = searchResults.map(
    (r) => `## ${r.title}\nURL: /${r.slug}\n\n${r.content.slice(0, 2000)}`
  );
  const context = contextParts.join("\n\n---\n\n");

  const fullPrompt = `Based on the following content from the website, answer this question: "${question}"

CONTEXT:
${context}

Please provide a helpful answer based on the context above.`;

  // Generate response with selected model
  let responseText = "";

  try {
    if (model === "gpt-4o") {
      const openaiApiKey = process.env.OPENAI_API_KEY;
      if (!openaiApiKey) {
        const errMsg = "**Error:** OPENAI_API_KEY not configured.";
        await ctx.runMutation(internal.askAI.appendToStream, { streamId, text: errMsg });
        return new Response(JSON.stringify({ success: true, text: errMsg }), {
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }

      const openai = new OpenAI({ apiKey: openaiApiKey });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: RAG_SYSTEM_PROMPT },
          { role: "user", content: fullPrompt },
        ],
      });

      responseText = completion.choices[0]?.message?.content || "";
    } else {
      const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
      if (!anthropicApiKey) {
        const errMsg = "**Error:** ANTHROPIC_API_KEY not configured.";
        await ctx.runMutation(internal.askAI.appendToStream, { streamId, text: errMsg });
        return new Response(JSON.stringify({ success: true, text: errMsg }), {
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }

      const anthropic = new Anthropic({ apiKey: anthropicApiKey });
      const response = await anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2048,
        system: RAG_SYSTEM_PROMPT,
        messages: [{ role: "user", content: fullPrompt }],
      });

      for (const block of response.content) {
        if (block.type === "text") {
          responseText += block.text;
        }
      }
    }

    // Add source citations
    responseText += "\n\n---\n\n**Sources:**\n";
    for (const source of searchResults) {
      responseText += `- [${source.title}](/${source.slug})\n`;
    }

    // Store full response in DB
    await ctx.runMutation(internal.askAI.appendToStream, { streamId, text: responseText });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Generation error:", error);
    await ctx.runMutation(internal.askAI.appendToStream, { streamId, text: `**Error:** ${errorMessage}` });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
});

// CORS preflight handler
export const streamResponseOptions = httpAction(async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
});

// Check if Ask AI is properly configured
export const checkConfiguration = action({
  args: {},
  returns: v.object({
    configured: v.boolean(),
    hasOpenAI: v.boolean(),
    hasAnthropic: v.boolean(),
    missingKeys: v.array(v.string()),
  }),
  handler: async () => {
    const hasOpenAI = !!process.env.OPENAI_API_KEY;
    const hasAnthropic = !!process.env.ANTHROPIC_API_KEY;

    const missingKeys: string[] = [];
    if (!hasOpenAI) missingKeys.push("OPENAI_API_KEY");
    if (!hasAnthropic) missingKeys.push("ANTHROPIC_API_KEY");

    const configured = hasOpenAI && (hasAnthropic || hasOpenAI);

    return { configured, hasOpenAI, hasAnthropic, missingKeys };
  },
});
