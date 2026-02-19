import { MetadataRoute } from 'next';

// Force static generation for optimal performance
export const dynamic = 'force-static';

/**
 * Sitemap Index
 * This file exports a function that generates a sitemap index.
 * However, Next.js automatically generates sitemap.xml at the root.
 * We need to create a custom route handler instead.
 */

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hirenest.ai';

    // Return main site URLs - the programmatic SEO sitemaps are handled separately
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/interview-questions`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resume-keywords`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/salary`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/cover-letter`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/job-description`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];
}
