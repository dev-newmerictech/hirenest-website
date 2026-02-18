import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";
const POSTS_PER_PAGE = 1000;

function getClient(): ConvexHttpClient {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL;
    if (!url) throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
    return new ConvexHttpClient(url);
}

/** Sitemapindex listing all sitemap-posts-N.xml files */
export async function GET() {
    const client = getClient();
    const totalCount = await client.query(api.posts.getSitemapPostsCount);
    const totalPages = Math.max(1, Math.ceil(totalCount / POSTS_PER_PAGE));
    const today = new Date().toISOString().split("T")[0];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    for (let i = 1; i <= totalPages; i++) {
        sitemap += `
  <sitemap>
    <loc>${SITE_URL}/sitemap-posts-${i}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`;
    }

    sitemap += `
</sitemapindex>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=7200",
        },
    });
}