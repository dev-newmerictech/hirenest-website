import { v } from "convex/values";
import { mutation, query, internalQuery, internalMutation } from "./_generated/server";

// Create a new Ask AI session
export const createSession = mutation({
  args: {
    question: v.string(),
    model: v.optional(v.string()),
  },
  returns: v.object({
    sessionId: v.id("askAISessions"),
    streamId: v.string(),
  }),
  handler: async (ctx, { question, model }) => {
    // Use session ID as streamId (simple unique identifier)
    const sessionId = await ctx.db.insert("askAISessions", {
      question,
      streamId: "", // Will be set to sessionId string below
      model: model || "claude-sonnet-4-20250514",
      createdAt: Date.now(),
    });
    const streamId = sessionId;
    await ctx.db.patch(sessionId, { streamId });
    return { sessionId, streamId };
  },
});

// Get stream body (response text) for the session
export const getStreamBody = query({
  args: {
    streamId: v.string(),
  },
  handler: async (ctx, { streamId }) => {
    const session = await ctx.db
      .query("askAISessions")
      .withIndex("by_stream", (q) => q.eq("streamId", streamId))
      .first();
    if (!session) return null;
    return (session as any).responseText || "";
  },
});

// Internal query to get session by streamId (used by HTTP action)
export const getSessionByStreamId = internalQuery({
  args: {
    streamId: v.string(),
  },
  returns: v.union(
    v.object({
      question: v.string(),
      model: v.optional(v.string()),
    }),
    v.null()
  ),
  handler: async (ctx, { streamId }) => {
    const session = await ctx.db
      .query("askAISessions")
      .withIndex("by_stream", (q) => q.eq("streamId", streamId))
      .first();
    if (!session) return null;
    return { question: session.question, model: session.model };
  },
});

// Internal mutation to append text to session response
export const appendToStream = internalMutation({
  args: {
    streamId: v.string(),
    text: v.string(),
  },
  handler: async (ctx, { streamId, text }) => {
    const session = await ctx.db
      .query("askAISessions")
      .withIndex("by_stream", (q) => q.eq("streamId", streamId))
      .first();
    if (!session) return;
    const current = (session as any).responseText || "";
    await ctx.db.patch(session._id, { responseText: current + text } as any);
  },
});

// Re-export checkConfiguration action from the node file
export { checkConfiguration } from "./askAI.node";
