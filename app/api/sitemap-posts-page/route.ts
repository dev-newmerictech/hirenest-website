import { fetchBlogPosts } from "@/lib/blog-data";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";
const POSTS_PER_PAGE = 1000;

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

    const allPosts = await fetchBlogPosts();
    const targetStart = (pageNum - 1) * POSTS_PER_PAGE;
    const targetEnd = pageNum * POSTS_PER_PAGE;

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