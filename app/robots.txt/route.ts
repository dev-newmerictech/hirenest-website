
import { NextResponse } from 'next/server';

// Force Node.js runtime to avoid edge runtime module loading issues
export const runtime = 'nodejs';
export const dynamic = 'force-static';

export async function GET() {
    const baseUrl = 'https://hirenest.ai';

    const robotsTxt = `# =============================================================================
# Robots.txt for HireNest
# AI-Powered Recruitment Platform
# Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
# =============================================================================

# -----------------------------------------------------------------------------
# GLOBAL RULES (All Crawlers)
# -----------------------------------------------------------------------------
User-agent: *
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /tmp/
Disallow: /cdn-cgi/

# Allow important assets (Next.js safe)
Allow: /_next/static/
Allow: /_next/image/
Allow: /favicon.ico
Allow: /favicon.svg



# -----------------------------------------------------------------------------
# SITEMAPS
# -----------------------------------------------------------------------------
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/interview-questions-sitemap.xml
Sitemap: ${baseUrl}/resume-keywords-sitemap.xml
Sitemap: ${baseUrl}/job-description-sitemap.xml
Sitemap: ${baseUrl}/salary-sitemap.xml
Sitemap: ${baseUrl}/cover-letter-sitemap.xml

# =============================================================================
# END
# =============================================================================
`;

    return new NextResponse(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}
