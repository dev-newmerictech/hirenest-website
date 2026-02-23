import type { Id } from "../../convex/_generated/dataModel";

// Lightweight post type for sitemaps (only what we need from getSitemapPosts query)
export interface SitemapPost {
  slug: string;
  date: string;
  published: boolean;
}

// Full post type for RSS (needs title, description, tags)
export interface Post {
  _id: Id<"posts">;
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
}

export interface Page {
  _id: Id<"pages">;
  slug: string;
  title: string;
}

export interface TagInfo {
  tag: string;
}

export interface Author {
  slug: string;
}

// Get site URL from window.location in browser, or env in Node.js
function getSiteUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "https://hirenest.ai";
}

// Overload for different post types
export function generateSitemapXML(
  posts: SitemapPost[],
  pages: Page[],
  tags: TagInfo[],
  authors: Author[]
): string;
export function generateSitemapXML(
  posts: Post[],
  pages: Page[],
  tags: TagInfo[],
  authors: Author[]
): string;
export function generateSitemapXML(
  posts: (SitemapPost | Post)[],
  pages: Page[],
  tags: TagInfo[],
  authors: Author[]
): string {
  const SITE_URL = getSiteUrl();
  const today = new Date().toISOString().split("T")[0];
  const urls = [
    // Homepage
    `  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`,

    // Jobs Board
    `  <url>
    <loc>${SITE_URL}/jobs</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`,

    // Posts
    ...posts
      .filter((post) => post.published)
      .map(
        (post) => `  <url>
    <loc>${SITE_URL}/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
      ),

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

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}

// Overload for different post types
export function generatePostsSitemapXML(posts: SitemapPost[]): string;
export function generatePostsSitemapXML(posts: Post[]): string;
export function generatePostsSitemapXML(posts: (SitemapPost | Post)[]): string {
  const SITE_URL = getSiteUrl();
  const urls = posts
    .filter((post) => post.published)
    .map(
      (post) => `  <url>
    <loc>${SITE_URL}/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}

export function generateRSSXML(posts: Post[]): string {
  const SITE_URL = getSiteUrl();
  const items = posts
    .filter((post) => post.published)
    .map(
      (post) => `  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${SITE_URL}/${post.slug}</link>
    <description><![CDATA[${post.description}]]></description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <guid>${SITE_URL}/${post.slug}</guid>
  </item>`
    );

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title><![CDATA[Hirenest AI]]></title>
    <link>${SITE_URL}/</link>
    <description><![CDATA[An open-source publishing framework built for AI agents and developers to ship websites, docs, or blogs.]]></description>
    <language>en-us</language>
${items.join("\n")}
  </channel>
</rss>`;
}
