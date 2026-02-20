import { NextResponse } from 'next/server';
import { jobTitles } from '../lib/programmatic-seo/job-titles';

// Force Node.js runtime to avoid edge runtime module loading issues with large imports
export const runtime = 'nodejs';

export async function GET() {
    const baseUrl = 'https://hirenest.ai';
    const currentDate = new Date().toISOString().split('T')[0];

    const urls = [
        {
            url: `${baseUrl}/job-description`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...jobTitles.map((job) => ({
            url: `${baseUrl}/job-description/${job.slug}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        })),
    ];

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                (url) => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
            )
            .join('\n')}
</urlset>`;

    return new NextResponse(xmlContent, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
