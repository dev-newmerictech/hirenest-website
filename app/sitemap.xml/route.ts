import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
    const baseUrl = 'https://hirenest.ai'
    const lastMod = new Date().toISOString().split('T')[0]

    // Build the sitemap index XML
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>${baseUrl}/main-sitemap.xml</loc>
        <lastmod>${lastMod}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${baseUrl}/jobs-sitemap.xml</loc>
        <lastmod>${lastMod}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${baseUrl}/sitemap-posts.xml</loc>
        <lastmod>${lastMod}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${baseUrl}/interview-questions-sitemap.xml</loc>
        <lastmod>${lastMod}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${baseUrl}/resume-keywords-sitemap.xml</loc>
        <lastmod>${lastMod}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${baseUrl}/salary-sitemap.xml</loc>
        <lastmod>${lastMod}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${baseUrl}/cover-letter-sitemap.xml</loc>
        <lastmod>${lastMod}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${baseUrl}/job-description-sitemap.xml</loc>
        <lastmod>${lastMod}</lastmod>
    </sitemap>
</sitemapindex>`

    return new NextResponse(sitemapIndex, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    })
}
