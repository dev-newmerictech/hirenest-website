import { MetadataRoute } from 'next'
import { jobTitles } from '../lib/programmatic-seo/job-titles'

// Force Node.js runtime to avoid edge runtime module loading issues with large imports
export const runtime = 'nodejs'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.hirenest.ai'

    const jobUrls = jobTitles.map((job) => ({
        url: `${baseUrl}/cover-letter/${job.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: `${baseUrl}/cover-letter`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...jobUrls,
    ]
}
