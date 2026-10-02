import { NextResponse } from 'next/server';
import { enabledJobTitles } from '../lib/programmatic-seo/enabled-job-titles';

// Force Node.js runtime to avoid edge runtime module loading issues with large imports
export const runtime = 'nodejs';
export const dynamic = 'force-static';

const PAGE_SIZE = 50000;

/**
 * Generate paginated sitemap for interview questions
 * Only includes job titles that have actual content pages
 * Supports pagination via ?page=N query parameter
 */
export async function GET(request: Request) {
    const url = new URL(request.url);
    const pageParam = url.searchParams.get('page');
    const page = pageParam ? Math.max(0, parseInt(pageParam) - 1) : 0;
    const baseUrl = 'https://hirenest.ai';
    const currentDate = new Date().toISOString().split('T')[0];

    // Calculate pagination
    const offset = page * PAGE_SIZE;
    const paginatedJobs = enabledJobTitles.slice(offset, offset + PAGE_SIZE);
    const totalPages = Math.ceil(enabledJobTitles.length / PAGE_SIZE);

    // Build URLs
    const urls = [
        // Include hub page on first sitemap
        ...(page === 0 ? [{
            url: `${baseUrl}/interview-questions`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 1,
        }] : []),
        // Job pages
        ...paginatedJobs.map((job) => ({
            url: `${baseUrl}/interview-questions/${job.slug}`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
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

    // Add pagination info to response headers for debugging
    const headers: HeadersInit = {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600',
        'X-Sitemap-Page': String(page + 1),
        'X-Sitemap-Pages': String(totalPages),
        'X-Sitemap-Urls': String(urls.length),
    };

    return new NextResponse(xmlContent, { headers });
}
