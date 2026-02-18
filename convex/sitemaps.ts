import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

// Site configuration for Sitemaps
const SITE_URL = process.env.SITE_URL || "https://hirenest.ai";

// Escape XML special characters
function escapeXml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

// Generate the main sitemap for static pages, tags, and authors
export const mainSitemap = httpAction(async (ctx) => {
    const pages = await ctx.runQuery(api.pages.getAllPages);
    const tags = await ctx.runQuery(api.posts.getAllTags);
    const authors = await ctx.runQuery(api.posts.getAllAuthors);

    const today = new Date().toISOString().split("T")[0];

    const urls = [
        // Homepage
        `  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`,

        // Pages
        ...pages.map(
            (page) => `  <url>
    <loc>${SITE_URL}/${page.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
        ),

        // Tags
        ...tags.map(
            (tagInfo) => `  <url>
    <loc>${SITE_URL}/blog/tag/${encodeURIComponent(tagInfo.tag.toLowerCase())}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
        ),

        // Authors
        ...authors.map(
            (author) => `  <url>
    <loc>${SITE_URL}/blog/author/${encodeURIComponent(author.slug)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
        ),
    ];

    console.log(`[Sitemap] mainSitemap: pages=${pages.length}, tags=${tags.length}, authors=${authors.length}, totalLinks=${urls.length}`);

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
});

// Generate the sitemap index for paginated posts
export const sitemapPostsIndex = httpAction(async (ctx) => {
    const totalCount = await ctx.runQuery(api.posts.getSitemapPostsCount);
    const postsPerPage = 20;
    const totalPages = Math.ceil(totalCount / postsPerPage);

    console.log(`[Sitemap] sitemapPostsIndex: totalPosts=${totalCount}, filesGenerated=${totalPages}`);

    const today = new Date().toISOString().split("T")[0];
    const sitemapUrls = [];

    // Ensure we always have at least one sitemap file referenced
    const loopCount = Math.max(1, totalPages);
    for (let i = 1; i <= loopCount; i++) {
        sitemapUrls.push(
            `  <sitemap>
    <loc>${SITE_URL}/sitemap-posts-${i}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
        );
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join("\n")}
</sitemapindex>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=7200",
        },
    });
});

// Generate a specific page of the paginated posts sitemap
export const sitemapPostsPage = httpAction(async (ctx, request) => {
    const url = new URL(request.url);
    const pathMatch = url.pathname.match(/\/sitemap-posts-(\d+)\.xml$/);

    if (!pathMatch) {
        return new Response("Invalid sitemap page format", { status: 400 });
    }

    const pageNum = parseInt(pathMatch[1], 10);
    if (isNaN(pageNum) || pageNum < 1) {
        return new Response("Invalid page number", { status: 400 });
    }

    const postsPerPage = 20;
    const targetStart = (pageNum - 1) * postsPerPage;
    const targetEnd = pageNum * postsPerPage;

    let currentCursor: string | null = null;
    let allPublishedPosts: any[] = [];
    let isDone = false;

    // Collect published posts until we have enough for the requested page
    // We fetch in chunks of 50 to minimize cross-context overhead
    while (allPublishedPosts.length < targetEnd && !isDone) {
        const result: any = await ctx.runQuery(api.posts.getSitemapPostsBatch, {
            cursor: currentCursor,
            numItems: 50
        });

        // Filter for published and listed posts in the collected batch
        const filtered = result.posts.filter((p: any) => p.published && !p.unlisted);
        allPublishedPosts.push(...filtered);

        currentCursor = result.continueCursor;
        isDone = result.isDone;

        // Safety break
        if (allPublishedPosts.length > 5000) break;
    }

    const targetPosts = allPublishedPosts.slice(targetStart, targetEnd);

    console.log(`[Sitemap] sitemapPostsPage: serving file sitemap-posts-${pageNum}.xml with ${targetPosts.length} links (collected ${allPublishedPosts.length} total)`);

    const today = new Date().toISOString().split("T")[0];

    const urls = targetPosts.map(
        (post) => `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    );

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
});
