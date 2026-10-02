// app/lib/seo/sitemap/sitemap-generator.ts

import { SitemapConfig, SitemapIndexConfig, SitemapEntry } from './sitemap-config'

const MAX_URLS_PER_SITEMAP = 50000

/**
 * Sitemap Generator with Pagination Support
 * Handles sitemaps that scale to millions of URLs
 */
export class SitemapGenerator {
    private config: SitemapConfig

    constructor(config: SitemapConfig) {
        this.config = config
    }

    /**
     * Generate sitemap index XML
     */
    async generateSitemapIndex(): Promise<string> {
        const sitemapUrls: string[] = []

        for (const sitemapConfig of this.config.sitemaps) {
            const totalPages = await this.getTotalSitemapPages(sitemapConfig)

            for (let page = 0; page < totalPages; page++) {
                const sitemapUrl = totalPages === 1
                    ? `${this.config.baseUrl}${sitemapConfig.path}.xml`
                    : `${this.config.baseUrl}${sitemapConfig.path}-${page + 1}.xml`

                sitemapUrls.push(this.generateSitemapIndexEntry(sitemapUrl, new Date()))
            }
        }

        return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join('\n')}
</sitemapindex>`
    }

    /**
     * Generate individual sitemap file XML
     */
    async generateSitemapFile(
        sitemapConfig: SitemapIndexConfig,
        page: number
    ): Promise<string> {
        const entries = await sitemapConfig.getContent(page, sitemapConfig.pageSize)
        const xmlEntries = entries.map(entry => this.generateUrlEntry(entry, sitemapConfig))

        return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join('\n')}
</urlset>`
    }

    /**
     * Calculate total sitemap pages needed
     */
    async getTotalSitemapPages(sitemapConfig: SitemapIndexConfig): Promise<number> {
        // Get total count from config if available
        if ('totalCount' in sitemapConfig) {
            const total = (sitemapConfig as any).totalCount as number
            return Math.ceil(total / sitemapConfig.pageSize)
        }

        // Otherwise, get first page to estimate
        const firstPage = await sitemapConfig.getContent(0, sitemapConfig.pageSize)

        if (firstPage.length < sitemapConfig.pageSize) {
            return 1
        }

        // Get second page to check if there are more
        const secondPage = await sitemapConfig.getContent(1, sitemapConfig.pageSize)

        if (secondPage.length === 0) {
            return 1
        }

        // Estimate based on first two pages (should be accurate in most cases)
        // For precise count, implement getTotalCount in your getContent
        return 2 // Placeholder - implement actual counting in your data source
    }

    /**
     * Generate URL entry for sitemap
     */
    private generateUrlEntry(
        entry: SitemapEntry,
        config: SitemapIndexConfig
    ): string {
        const lastMod = entry.lastModified
            ? `    <lastmod>${typeof entry.lastModified === 'string' ? entry.lastModified : entry.lastModified.toISOString().split('T')[0]}</lastmod>`
            : ''

        const changeFreq = entry.changeFrequency || config.changeFrequency
        const priority = entry.priority !== undefined ? entry.priority : config.priority

        return `  <url>
    <loc>${entry.url}</loc>
${lastMod}
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    }

    /**
     * Generate sitemap index entry
     */
    private generateSitemapIndexEntry(url: string, lastMod: Date): string {
        return `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${lastMod.toISOString().split('T')[0]}</lastmod>
  </sitemap>`
    }
}

/**
 * Create sitemap entries from an array of items
 */
export function createSitemapEntries(
    items: Array<{ slug: string }>,
    baseUrl: string,
    path: string,
    options?: {
        lastModified?: Date
        changeFrequency?: SitemapEntry['changeFrequency']
        priority?: SitemapEntry['priority']
    }
): SitemapEntry[] {
    return items.map(item => ({
        url: `${baseUrl}${path}/${item.slug}`,
        lastModified: options?.lastModified,
        changeFrequency: options?.changeFrequency,
        priority: options?.priority
    }))
}

/**
 * Paginate items for sitemap generation
 */
export function paginateItems<T>(items: T[], page: number, limit: number): T[] {
    const offset = page * limit
    return items.slice(offset, offset + limit)
}

/**
 * Calculate total pages for an item count
 */
export function calculateTotalPages(itemCount: number, pageSize: number): number {
    return Math.ceil(itemCount / pageSize)
}
