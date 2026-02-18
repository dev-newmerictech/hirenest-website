import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";
const SITE_NAME = "Hirenest AI";

function getClient(): ConvexHttpClient {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL;
    if (!url) throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
    return new ConvexHttpClient(url);
}

function escapeXml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export async function GET() {
    const client = getClient();

    let cursor: string | null = null;
    let allPosts: { title: string; description: string; slug: string; date: string }[] = [];
    let isDone = false;

    while (!isDone) {
        const result: {
            posts: { title: string; description: string; slug: string; date: string; published: boolean; unlisted: boolean }[];
            continueCursor: string;
            isDone: boolean;
        } = await client.query(api.posts.getRSSPostsBatch, {
            cursor,
            numItems: 100,
            includeContent: false,
        });
        const filtered = result.posts.filter(
            (p) => p.published && !p.unlisted
        );
        allPosts.push(...filtered);
        cursor = result.continueCursor;
        isDone = result.isDone;
        if (allPosts.length > 5000) break;
    }

    allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const items = allPosts
        .map(
            (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
    </item>`
        )
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>Latest posts from ${escapeXml(SITE_NAME)}</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=7200",
        },
    });
}