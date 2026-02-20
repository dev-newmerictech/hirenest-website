import { MetadataRoute } from 'next';

// Force Node.js runtime to avoid edge runtime module loading issues
export const runtime = 'nodejs';

export async function GET() {
    const baseUrl = 'https://hirenest.ai';
    const currentDate = new Date().toISOString().split('T')[0];

    // Main website pages (core pages, features, company, legal)
    const routes = [
        // Home
        { url: '', lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
        // Main pages
        { url: '/job-seeker', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
        { url: '/job-provider', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
        // AI Features
        { url: '/ai-resume-builder', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: '/ai-candidate-ranking', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: '/smart-job-matching', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: '/career-insights', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: '/profile-optimization', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
        // Assessment & Screening
        { url: '/skill-assessments', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
        { url: '/custom-assessments', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
        { url: '/quick-screening', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
        { url: '/verified-candidates', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
        // Other Features
        { url: '/hiring-analytics', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
        { url: '/team-collaboration', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
        { url: '/fast-track-applications', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
        // Company
        { url: '/about', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
        { url: '/careers', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.6 },
        { url: '/security', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
        // Legal
        { url: '/legal', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.4 },
        { url: '/privacy-policy', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.4 },
        { url: '/terms-of-service', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.4 },
        { url: '/cookie-policy', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.4 },
        { url: '/refund-policy', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.4 },
    ];

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
            .map(
                (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
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
