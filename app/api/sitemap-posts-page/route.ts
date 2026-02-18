import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";
const POSTS_PER_PAGE = 20;

function getClient(): ConvexHttpClient {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL;
    if (!url) throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
    return new ConvexHttpClient(url);
}

/** Single paginated sitemap page: /sitemap-posts-N.xml */
export async function GET(request: Request) {
    const url = new URL(request.url);
    let page = url.searchParams.get("page");

    // Fallback: extract from path if not in query (e.g. /sitemap-posts-2.xml)
    if (!page) {
        const match = url.pathname.match(/sitemap-posts-(\d+)\.xml/);
        if (match) {
            page = match[1];
        }
    }

    const pageNum = parseInt(page || "1", 10);
    if (isNaN(pageNum) || pageNum < 1) {
        return new Response("Invalid page parameter", { status: 400 });
    }

    const client = getClient();
    const targetStart = (pageNum - 1) * POSTS_PER_PAGE;
    const targetEnd = pageNum * POSTS_PER_PAGE;

    // Collect published posts via cursor pagination
    let cursor: string | null = null;
    let allPosts: { slug: string; date: string }[] = [];
    let isDone = false;

    while (allPosts.length < targetEnd && !isDone) {
        const result: {
            continueCursor: string;
            isDone: boolean;
            posts: {
                slug: string;
                date: string;
                published: boolean;
                unlisted: boolean;
            }[];
        } = await client.query(api.posts.getSitemapPostsBatch, {
            cursor,
            numItems: 50,
        });
        const filtered = result.posts.filter(
            (p: { published: boolean; unlisted: boolean }) => p.published && !p.unlisted
        );
        allPosts.push(...filtered);
        cursor = result.continueCursor;
        isDone = result.isDone;
        if (allPosts.length > 5000) break;
    }

    const pagePosts = allPosts.slice(targetStart, targetEnd);
    const today = new Date().toISOString().split("T")[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pagePosts.forEach((post) => {
        xml += `
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.date || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    xml += `
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=7200",
        },
    });
}