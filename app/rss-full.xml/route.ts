import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";
const SITE_TITLE = "Hirenest.ai";
const SITE_DESCRIPTION =
    "Get 30 SEO-optimized articles published automatically each month, with your authentic brand voice intact.";

function escapeXml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export async function GET() {
    try {
        const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

        // Fetch 20 posts with full content using paginated batch query
        const targetCount = 20;
        let currentCursor: string | null = null;
        let allPosts: any[] = [];
        let isDone = false;

        while (allPosts.length < targetCount && !isDone) {
            const result: any = await client.query(api.posts.getRSSPostsBatch, {
                cursor: currentCursor,
                numItems: 10,
                includeContent: true,
            });

            const filtered = result.posts.filter(
                (p: any) => p.published && !p.unlisted
            );
            allPosts.push(...filtered);
            currentCursor = result.continueCursor;
            isDone = result.isDone;

            if (allPosts.length > 50) break;
        }

        const posts = allPosts.slice(0, targetCount);

        const items = posts
            .map((post: any) => {
                const url = `${SITE_URL}/blog/${post.slug}`;
                const pubDate = new Date(post.date).toUTCString();
                const categories = (post.tags || [])
                    .map((tag: string) => `<category>${escapeXml(tag)}</category>`)
                    .join("\n      ");

                return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <content:encoded><![CDATA[${post.content || post.description}]]></content:encoded>
      ${categories}
    </item>`;
            })
            .join("");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE_TITLE)} - Full Content</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)} Full article content for readers and AI.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss-full.xml" rel="self" type="application/rss+xml"/>${items}
  </channel>
</rss>`;

        return new Response(xml, {
            headers: {
                "Content-Type": "application/rss+xml; charset=utf-8",
                "Cache-Control": "public, max-age=3600, s-maxage=7200",
                "X-Robots-Tag": "noindex",
            },
        });
    } catch (error) {
        console.error("[rss-full.xml] Failed to generate RSS feed:", error);
        return new Response("RSS feed unavailable", { status: 500 });
    }
}
