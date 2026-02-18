import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

// Site configuration for RSS feed
const SITE_URL = process.env.SITE_URL || "https://hirenest.ai";
const SITE_TITLE = "Hirenest.ai";
const SITE_DESCRIPTION =
  "Get 30 SEO-optimized articles published automatically each month, with your authentic brand voice intact—for less than what you'd pay a freelancer for one post.";

// Escape XML special characters
function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Generate RSS XML from posts (description only)
function generateRssXml(
  posts: Array<{
    title: string;
    description: string;
    slug: string;
    date: string;
  }>,
  feedPath: string = "/rss.xml",
): string {
  const items = posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      const url = `${SITE_URL}/blog/${post.slug}`;

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}${feedPath}" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}

// Generate RSS XML with full content (for LLMs and readers)
function generateFullRssXml(
  posts: Array<{
    title: string;
    description: string;
    slug: string;
    date: string;
    content?: string;
    tags: string[];
  }>,
): string {
  const items = posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      const url = `${SITE_URL}/blog/${post.slug}`;

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <content:encoded><![CDATA[${post.content || post.description}]]></content:encoded>
      ${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("\n      ")}
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE_TITLE)} - Full Content</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)} Full article content for readers and AI.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss-full.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}

// HTTP action to serve RSS feed (descriptions only)
export const rssFeed = httpAction(async (ctx) => {
  const targetCount = 100;
  let currentCursor: string | null = null;
  let allPosts: any[] = [];
  let isDone = false;

  while (allPosts.length < targetCount && !isDone) {
    const result: any = await ctx.runQuery(api.posts.getRSSPostsBatch, {
      cursor: currentCursor,
      numItems: 50,
      includeContent: false
    });

    const filtered = result.posts.filter((p: any) => p.published && !p.unlisted);
    allPosts.push(...filtered);
    currentCursor = result.continueCursor;
    isDone = result.isDone;

    if (allPosts.length > 500) break;
  }

  const posts = allPosts.slice(0, targetCount);

  const xml = generateRssXml(posts);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=7200",
    },
  });
});

// HTTP action to serve full RSS feed (with complete content)
export const rssFullFeed = httpAction(async (ctx) => {
  const targetCount = 20; // Lower count for full content to avoid huge responses
  let currentCursor: string | null = null;
  let allPosts: any[] = [];
  let isDone = false;

  while (allPosts.length < targetCount && !isDone) {
    const result: any = await ctx.runQuery(api.posts.getRSSPostsBatch, {
      cursor: currentCursor,
      numItems: 10, // Fetch fewer items at once when including content
      includeContent: true
    });

    const filtered = result.posts.filter((p: any) => p.published && !p.unlisted);
    allPosts.push(...filtered);
    currentCursor = result.continueCursor;
    isDone = result.isDone;

    if (allPosts.length > 50) break;
  }

  const posts = allPosts.slice(0, targetCount);
  const xml = generateFullRssXml(posts);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=7200",
    },
  });
});
