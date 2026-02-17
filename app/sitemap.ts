import { MetadataRoute } from 'next';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hirenest.ai';

    // Return a sitemap index that points to individual sitemaps
    return [
        {
            url: `${baseUrl}/main-sitemap.xml`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/interview-questions-sitemap.xml`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/resume-keywords-sitemap.xml`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/salary-sitemap.xml`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/cover-letter-sitemap.xml`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/job-description-sitemap.xml`,
            lastModified: new Date(),
        },
    ];
}
