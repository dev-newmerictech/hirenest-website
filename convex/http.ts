/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
// import { components } from "./_generated/api"; // ConvexFS disabled
import { rssFeed, rssFullFeed } from "./rss";
import { mainSitemap, sitemapPostsIndex, sitemapPostsPage } from "./sitemaps";
import { llmsTxt } from "./llmsTxt";
import { streamResponse, streamResponseOptions } from "./askAI.node";
// ConvexFS disabled
// import { registerRoutes } from "convex-fs";
// import { fs } from "./fs";
const http = httpRouter();

// Site configuration  - update these for your site (or run npm run configure)
const SITE_URL = process.env.SITE_URL || "https://hirenest.ai";
const SITE_NAME = "Hirenest AI";

/* -----------------------------------------------------
 * RSS FEEDS
 * --------------------------------------------------- */

// RSS feed (descriptions only)
http.route({
  path: "/rss.xml",
  method: "GET",
  handler: rssFeed,
});

// Full RSS feed (full content for LLMs)
http.route({
  path: "/rss-full.xml",
  method: "GET",
  handler: rssFullFeed,
});

/* -----------------------------------------------------
 * SITEMAP
 * --------------------------------------------------- */

http.route({
  path: "/sitemap.xml",
  method: "GET",
  handler: mainSitemap,
});

// Posts-only sitemap index
http.route({
  path: "/sitemap-posts.xml",
  method: "GET",
  handler: sitemapPostsIndex,
});

// Paginated posts sitemap (sitemap-posts-1.xml, sitemap-posts-2.xml, etc.)
http.route({
  path: "/sitemap-posts-*",
  method: "GET",
  handler: sitemapPostsPage,
});

/* -----------------------------------------------------
 * LLMS.TXT
 * --------------------------------------------------- */

http.route({
  path: "/llms.txt",
  method: "GET",
  handler: llmsTxt,
});

/* -----------------------------------------------------
 * POSTS API
 * --------------------------------------------------- */

// List all posts (JSON for agents / LLMs)
http.route({
  path: "/api/posts",
  method: "GET",
  handler: httpAction(async (ctx) => {
    const posts = await ctx.runQuery(api.posts.getAllPosts);

    const response = {
      site: SITE_NAME,
      url: SITE_URL,
      description:
        "Get 30 SEO-optimized articles published automatically each month, with your authentic brand voice intact—for less than what you'd pay a freelancer for one post.",
      posts: posts.map(
        (post: {
          title: string;
          slug: string;
          description: string;
          date: string;
          readTime?: string;
          tags: string[];
        }) => ({
          title: post.title,
          slug: post.slug,
          description: post.description,
          date: post.date,
          readTime: post.readTime,
          tags: post.tags,
          url: `${SITE_URL}/${post.slug}`,
          markdownUrl: `${SITE_URL}/api/post?slug=${post.slug}`,
        })
      ),
    };

    return new Response(JSON.stringify(response, null, 2), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=600",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }),
});

// Single post (JSON or Markdown)
http.route({
  path: "/api/post",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const url = new URL(request.url);
    const slug = url.searchParams.get("slug");
    const format = url.searchParams.get("format") || "json";

    if (!slug) {
      return new Response(JSON.stringify({ error: "Missing slug parameter" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const post = await ctx.runQuery(api.posts.getPostBySlug, { slug });

    if (!post) {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (format === "markdown" || format === "md") {
      const markdown = `# ${post.title}

> ${post.description}

**Published:** ${post.date}${post.readTime ? ` | **Read time:** ${post.readTime}` : ""}
**Tags:** ${post.tags.join(", ")}
**URL:** ${SITE_URL}/${post.slug}

---

${post.content}`;

      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, max-age=300, s-maxage=600",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response(
      JSON.stringify(
        {
          title: post.title,
          slug: post.slug,
          description: post.description,
          date: post.date,
          readTime: post.readTime,
          tags: post.tags,
          url: `${SITE_URL}/${post.slug}`,
          content: post.content,
        },
        null,
        2
      ),
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "public, max-age=300, s-maxage=600",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }),
});

// Export all posts (full content)
http.route({
  path: "/api/export",
  method: "GET",
  handler: httpAction(async (ctx) => {
    const posts = await ctx.runQuery(api.posts.getAllPosts);

    const fullPosts = await Promise.all(
      posts.map(async (post: any) => {
        const fullPost = await ctx.runQuery(api.posts.getPostBySlug, {
          slug: post.slug,
        });
        return {
          ...post,
          url: `${SITE_URL}/${post.slug}`,
          content: fullPost?.content || "",
        };
      })
    );

    return new Response(
      JSON.stringify(
        {
          site: SITE_NAME,
          url: SITE_URL,
          exportedAt: new Date().toISOString(),
          totalPosts: fullPosts.length,
          posts: fullPosts,
        },
        null,
        2
      ),
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "public, max-age=300, s-maxage=600",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }),
});

/* -----------------------------------------------------
 * RAW MARKDOWN
 * --------------------------------------------------- */

http.route({
  path: "/raw/*",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const url = new URL(request.url);
    // Extract slug from path: /raw/my-post.md → my-post
    const rawPath = url.pathname.replace(/^\/raw\//, "");
    const slug = rawPath.replace(/\.md$/, "");

    if (!slug) {
      return new Response("Missing slug", { status: 400 });
    }

    const post = await ctx.runQuery(api.posts.getPostBySlug, { slug });

    if (!post) {
      return new Response("Post not found", { status: 404 });
    }

    // Build YAML frontmatter
    const frontmatter = [
      '---',
      `title: "${post.title.replace(/"/g, '\\"')}"`,
      `description: "${post.description.replace(/"/g, '\\"')}"`,
      `date: ${post.date}`,
      `tags: [${post.tags.join(', ')}]`,
      ...(post.readTime ? [`readTime: ${post.readTime}`] : []),
      ...(post.authorName ? [`authorName: ${post.authorName}`] : []),
      'type: post',
      `slug: ${post.slug}`,
      `url: ${SITE_URL}/blog/${post.slug}`,
      '---',
    ].join('\n');

    const markdown = `${frontmatter}\n\n${post.content}`;

    return new Response(markdown, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=600",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }),
});

/* -----------------------------------------------------
 * OPEN GRAPH / META
 * --------------------------------------------------- */

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function generateMetaHtml(content: any, path?: string) {
  const siteUrl = SITE_URL;
  // Use provided path if available, otherwise fall back to slug-based URL
  const canonicalUrl = path ? `${siteUrl}${path}` : `${siteUrl}/${content.slug}`;
  const image = content.image
    ? content.image.startsWith("http")
      ? content.image
      : `${siteUrl}${content.image}`
    : `${siteUrl}/images/Data.png`;

  return `<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>${escapeHtml(content.title)} | ${SITE_NAME}</title>
<meta name="description" content="${escapeHtml(content.description)}" />
<link rel="canonical" href="${canonicalUrl}" />

<link rel="alternate" hreflang="en-us" href="${canonicalUrl}" />
<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />

<meta property="og:type" content="article" />
<meta property="og:title" content="${escapeHtml(content.title)}" />
<meta property="og:description" content="${escapeHtml(content.description)}" />
<meta property="og:image" content="${image}" />
<meta property="og:url" content="${canonicalUrl}" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(content.title)}" />
<meta name="twitter:description" content="${escapeHtml(content.description)}" />
<meta name="twitter:image" content="${image}" />

<script>
  setTimeout(() => (window.location.href = ${JSON.stringify(canonicalUrl).replace(/</g, '\\u003c')}), 100);
</script>
</head>
<body>
Redirecting...
</body>
</html>`;
}

http.route({
  path: "/meta/post",
  method: "GET",
  handler: httpAction(async (ctx, req) => {
    const slug = new URL(req.url).searchParams.get("slug");
    const path = new URL(req.url).searchParams.get("path"); // Get full path if provided
    if (!slug) return new Response("Missing slug", { status: 400 });

    const post = await ctx.runQuery(api.posts.getPostBySlug, { slug });
    if (!post) return new Response("Not found", { status: 404 });

    return new Response(generateMetaHtml(post, path || undefined), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }),
});

/* -----------------------------------------------------
 * ASK AI (STREAMING)
 * --------------------------------------------------- */

http.route({
  path: "/ask-ai-stream",
  method: "POST",
  handler: streamResponse,
});

http.route({
  path: "/ask-ai-stream",
  method: "OPTIONS",
  handler: streamResponseOptions,
});
// ConvexFS routes disabled
// if (fs) {
//   registerRoutes(http, components.fs, fs, {
//     pathPrefix: "/fs",
//     uploadAuth: async () => {
//       return true;
//     },
//     downloadAuth: async () => {
//       return true;
//     },
//   });
// }


export default http;
