
import { NextResponse } from 'next/server';

// Force Node.js runtime to avoid edge runtime module loading issues
export const runtime = 'nodejs';
export const dynamic = 'force-static';

export async function GET() {
    const baseUrl = 'https://hirenest.ai';

    const robotsTxt = `# =============================================================================
# Robots.txt for HireNest
# AI-Powered Recruitment Platform
# Updated: February 2026
# =============================================================================

# Allow LinksIndexerBot for automated indexing
User-agent: LinksIndexerBot
Allow: /

# Default for all other bots
User-agent: *

# Block system & private routes
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /tmp/
Disallow: /cdn-cgi/

# Block query parameter URLs to protect crawl budget
Disallow: /*?*

# -----------------------------------------------------------------------------
# SITEMAPS
# -----------------------------------------------------------------------------
Sitemap: https://hirenest.ai/sitemap.xml
Sitemap: https://hirenest.ai/interview-questions-sitemap.xml
Sitemap: https://hirenest.ai/resume-keywords-sitemap.xml
Sitemap: https://hirenest.ai/job-description-sitemap.xml
Sitemap: https://hirenest.ai/salary-sitemap.xml
Sitemap: https://hirenest.ai/cover-letter-sitemap.xml

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
