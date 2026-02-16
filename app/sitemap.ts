import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.hirenest.ai';

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
    ];
}
