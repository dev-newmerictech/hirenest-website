import { MetadataRoute } from 'next';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hirenest.ai';

    // Return a sitemap index that points to individual sitemaps
    return [
        {
            url: `${baseUrl}/main-sitemap.xml`,
            lastModified: '2026-02-17',
        },
        {
            url: `${baseUrl}/interview-questions-sitemap.xml`,
            lastModified: '2026-02-17',
        },
        {
            url: `${baseUrl}/resume-keywords-sitemap.xml`,
            lastModified: '2026-02-17',
        },
        {
            url: `${baseUrl}/salary-sitemap.xml`,
            lastModified: '2026-02-17',
        },
        {
            url: `${baseUrl}/cover-letter-sitemap.xml`,
            lastModified: '2026-02-17',
        },
        {
            url: `${baseUrl}/job-description-sitemap.xml`,
            lastModified: '2026-02-17',
        },
    ];
}
