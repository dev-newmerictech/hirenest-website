import { jobTitles } from '../lib/programmatic-seo/job-titles';

export async function GET() {
    const baseUrl = 'https://www.hirenest.ai';
    const currentDate = new Date();

    const routes = [
        // Index page
        { url: '/interview-questions', lastModified: currentDate },
        // All job-specific pages
        ...jobTitles.map((job) => ({
            url: `/interview-questions/${job.slug}`,
            lastModified: currentDate,
        })),
    ];

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
        (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastModified.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

    return new Response(xmlContent, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
