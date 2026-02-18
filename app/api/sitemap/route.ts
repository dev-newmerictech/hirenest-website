import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";

function getClient(): ConvexHttpClient {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL;
    if (!url) throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
    return new ConvexHttpClient(url);
}

export async function GET() {
    const client = getClient();
    const [pages, tags, authors] = await Promise.all([
        client.query(api.pages.getAllPages),
        client.query(api.posts.getAllTags),
        client.query(api.posts.getAllAuthors),
    ]);

    const urls = [
        `  <url>\n    <loc>${SITE_URL}/</loc>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>`,
        ...pages.map(
            (page: { slug: string }) =>
                `  <url>\n    <loc>${SITE_URL}/${page.slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
        ),
        ...tags.map(
            (t: { tag: string }) =>
                `  <url>\n    <loc>${SITE_URL}/blog/tag/${encodeURIComponent(t.tag.toLowerCase())}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`
        ),
        ...authors.map(
            (a: { slug: string }) =>
                `  <url>\n    <loc>${SITE_URL}/blog/author/${encodeURIComponent(a.slug)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`
        ),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=7200",
        },
    });
}