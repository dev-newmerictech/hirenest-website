import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.hirenest.ai';
    const currentDate = new Date();

    // Define all static pages with their priorities and change frequencies
    const routes = [
        {
            url: '',
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        // Main feature pages
        {
            url: '/job-seeker',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: '/job-provider',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        // AI Features
        {
            url: '/ai-resume-builder',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: '/ai-candidate-ranking',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: '/smart-job-matching',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: '/career-insights',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: '/profile-optimization',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        // Assessment & Screening Features
        {
            url: '/skill-assessments',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: '/custom-assessments',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: '/quick-screening',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: '/verified-candidates',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        // Other Features
        {
            url: '/hiring-analytics',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: '/team-collaboration',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: '/fast-track-applications',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        // Company pages
        {
            url: '/about',
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: '/careers',
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        },
        {
            url: '/security',
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        // Legal pages
        {
            url: '/legal',
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.4,
        },
        {
            url: '/privacy-policy',
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.4,
        },
        {
            url: '/terms-of-service',
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.4,
        },
        {
            url: '/cookie-policy',
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.4,
        },
        {
            url: '/refund-policy',
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.4,
        },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
