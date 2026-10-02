import { NextResponse } from 'next/server';
import { enabledJobTitles } from '../lib/programmatic-seo/enabled-job-titles';
import { LOCATION_JOB_BOARDS, SUPPORTED_LOCATIONS } from '../lib/programmatic-seo/job-board';

// Force Node.js runtime to avoid edge runtime module loading issues with large imports
export const runtime = 'nodejs';
export const dynamic = 'force-static';

const PAGE_SIZE = 50000;

/**
 * Generate paginated sitemap for job board pages
 * Includes:
 * - /jobs (hub page)
 * - /jobs/[location] (location-specific pages)
 * - /jobs/roles/[slug] (role-specific job pages)
 * - /jobs/[location]/[job] (location-specific job pages)
 */
export async function GET(request: Request) {
    const url = new URL(request.url);
    const pageParam = url.searchParams.get('page');
    const page = pageParam ? Math.max(0, parseInt(pageParam) - 1) : 0;
    const baseUrl = 'https://hirenest.ai';
    const currentDate = new Date().toISOString().split('T')[0];

    // Collect all URLs
    const allUrls: Array<{
        url: string;
        lastModified: string;
        changeFrequency: 'daily' | 'weekly' | 'monthly';
        priority: number;
    }> = [
            // Hub page
            {
                url: `${baseUrl}/jobs`,
                lastModified: currentDate,
                changeFrequency: 'daily',
                priority: 1,
            },
            // Location-specific pages (jobs by location)
            ...SUPPORTED_LOCATIONS.map((location) => ({
                url: `${baseUrl}/jobs/${location.slug}`,
                lastModified: currentDate,
                changeFrequency: 'daily' as const,
                priority: 0.95,
            })),
            // Role-specific job pages
            ...enabledJobTitles.map((job) => ({
                url: `${baseUrl}/jobs/roles/${job.slug}`,
                lastModified: currentDate,
                changeFrequency: 'daily' as const,
                priority: 0.9,
            })),
        ];

    // Location + Job combination pages (only for existing LOCATION_JOB_BOARDS entries)
    for (const locationJob of LOCATION_JOB_BOARDS) {
        allUrls.push({
            url: `${baseUrl}/jobs/${locationJob.locationSlug}/${locationJob.jobSlug}`,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 0.8,
        });
    }

    // Calculate pagination
    const offset = page * PAGE_SIZE;
    const paginatedUrls = allUrls.slice(offset, offset + PAGE_SIZE);
    const totalPages = Math.ceil(allUrls.length / PAGE_SIZE);

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paginatedUrls
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
        'X-Sitemap-Urls': String(paginatedUrls.length),
        'X-Sitemap-Total': String(allUrls.length),
    };

    return new NextResponse(xmlContent, { headers });
}
