// app/lib/seo/linking/hub-spoke-builder.ts

import { LinkNode, HubConfiguration, PageTemplate, InternalLink } from '../models/link-graph'
import { JobTitle, JobCategory } from '../../programmatic-seo/types'
import { SEO_CONFIG } from '../core/constants'

const MAX_SPOKES_PER_HUB = 100
const DEFAULT_CROSS_LINK = true

/**
 * Hub and Spoke Builder
 * Automatically builds hub-and-spoke structure from flat pages
 */
export class HubSpokeBuilder {
    private hubConfigurations: Map<string, HubConfiguration> = new Map()

    /**
     * Build hub configurations from job titles by category and template
     */
    async buildHubs(
        jobTitles: JobTitle[],
        templates: PageTemplate[]
    ): Promise<HubConfiguration[]> {
        const configs: HubConfiguration[] = []

        // Create template-level hubs
        for (const template of templates) {
            if (template === 'category-hub' || template === 'location-page') continue
            configs.push(await this.buildTemplateHub(template, jobTitles))
        }

        // Create category-level hubs within templates
        for (const template of templates) {
            if (template === 'category-hub' || template === 'location-page') continue
            const categoryHubs = await this.buildCategoryHubs(template, jobTitles)
            configs.push(...categoryHubs)
        }

        // Store configurations
        for (const config of configs) {
            this.hubConfigurations.set(config.hubPageId, config)
        }

        return configs
    }

    /**
     * Assign pages to appropriate hubs based on category/intent
     */
    async assignPagesToHubs(
        jobTitles: JobTitle[],
        template: PageTemplate
    ): Promise<Map<string, string[]>> {
        const assignment = new Map<string, string[]>()

        // Group by category
        const byCategory = new Map<JobCategory, JobTitle[]>()
        for (const job of jobTitles) {
            if (!byCategory.has(job.category)) {
                byCategory.set(job.category, [])
            }
            byCategory.get(job.category)!.push(job)
        }

        // Assign to category hubs
        for (const [category, jobs] of byCategory) {
            const hubKey = `${template}:${category}`
            assignment.set(hubKey, jobs.map(j => j.slug))
        }

        return assignment
    }

    /**
     * Generate hub page entity
     */
    async generateHubPage(config: HubConfiguration): Promise<Partial<LinkNode>> {
        return {
            id: config.hubPageId,
            url: `${SEO_CONFIG.BASE_URL}/${config.hubSlug}`,
            title: config.hubTitle,
            type: 'hub',
            authority: 0.8,
            depth: 1,
            category: config.category,
            template: 'category-hub' as PageTemplate
        }
    }

    /**
     * Generate cross-link suggestions between spoke pages
     */
    async generateSpokeCrossLinks(
        hubConfig: HubConfiguration,
        maxLinks: number = 5
    ): Promise<Array<{ from: string; to: string; anchorText: string }>> {
        const crossLinks: Array<{ from: string; to: string; anchorText: string }> = []
        const spokes = hubConfig.spokePageIds

        // Generate links between related spokes (limit to avoid O(n^2))
        const maxSpokesToProcess = Math.min(spokes.length, 50)

        for (let i = 0; i < maxSpokesToProcess; i++) {
            for (let j = i + 1; j < maxSpokesToProcess; j++) {
                if (crossLinks.length >= maxLinks) break

                crossLinks.push({
                    from: spokes[i],
                    to: spokes[j],
                    anchorText: `Related: ${spokes[j].split(':')[1]?.replace(/-/g, ' ') || 'position'}`
                })
            }
        }

        return crossLinks.slice(0, maxLinks)
    }

    /**
     * Get links for a hub page (to display on hub page)
     */
    async getHubPageLinks(hubId: string): Promise<InternalLink[]> {
        const config = this.hubConfigurations.get(hubId)
        if (!config) return []

        const links: InternalLink[] = []

        for (const spokeId of config.spokePageIds.slice(0, MAX_SPOKES_PER_HUB)) {
            const [template, slug] = spokeId.split(':')
            links.push({
                url: `${SEO_CONFIG.BASE_URL}/${template}/${slug}`,
                title: this.formatSlugToTitle(slug),
                anchorText: this.formatSlugToTitle(slug),
                type: 'hierarchy',
                relevanceScore: 0.9
            })
        }

        return links
    }

    // Private methods

    private async buildTemplateHub(
        template: PageTemplate,
        jobTitles: JobTitle[]
    ): Promise<HubConfiguration> {
        const hubId = `hub:${template}`
        const hubSlug = template
        const hubTitle = this.getTemplateHubTitle(template)

        return {
            hubPageId: hubId,
            hubSlug,
            hubTitle,
            spokePageIds: jobTitles.map(j => `${template}:${j.slug}`),
            maxSpokesPerHub: MAX_SPOKES_PER_HUB,
            crossLinkSpokes: DEFAULT_CROSS_LINK,
            category: 'all'
        }
    }

    private async buildCategoryHubs(
        template: PageTemplate,
        jobTitles: JobTitle[]
    ): Promise<HubConfiguration[]> {
        const hubs: HubConfiguration[] = []

        // Group by category
        const byCategory = new Map<JobCategory, JobTitle[]>()
        for (const job of jobTitles) {
            if (!byCategory.has(job.category)) {
                byCategory.set(job.category, [])
            }
            byCategory.get(job.category)!.push(job)
        }

        // Create hub for each category
        for (const [category, jobs] of byCategory) {
            const hubId = `hub:${template}:${category}`
            const hubSlug = `${template}/${category}`
            const hubTitle = `${this.formatCategory(category)} ${this.getTemplateHubTitle(template)}`

            hubs.push({
                hubPageId: hubId,
                hubSlug,
                hubTitle,
                spokePageIds: jobs.map(j => `${template}:${j.slug}`),
                maxSpokesPerHub: MAX_SPOKES_PER_HUB,
                crossLinkSpokes: DEFAULT_CROSS_LINK,
                category
            })
        }

        return hubs
    }

    private getTemplateHubTitle(template: PageTemplate): string {
        const titles: Record<PageTemplate, string> = {
            'interview-questions': 'Interview Questions & Answers',
            'resume-keywords': 'Resume Keywords & Skills',
            'salary-guide': 'Salary Guides',
            'cover-letter': 'Cover Letter Examples',
            'job-description': 'Job Descriptions',
            'category-hub': 'Categories',
            'location-page': 'Locations'
        }
        return titles[template] || template
    }

    private formatCategory(category: string): string {
        return category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    private formatSlugToTitle(slug: string): string {
        return slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    /**
     * Get all hub configurations
     */
    getHubConfigurations(): HubConfiguration[] {
        return Array.from(this.hubConfigurations.values())
    }

    /**
     * Get hub configuration by ID
     */
    getHubConfiguration(hubId: string): HubConfiguration | undefined {
        return this.hubConfigurations.get(hubId)
    }

    /**
     * Get hub configuration by slug
     */
    getHubConfigurationBySlug(slug: string): HubConfiguration | undefined {
        return Array.from(this.hubConfigurations.values()).find(
            config => config.hubSlug === slug || slug.startsWith(config.hubSlug)
        )
    }
}

/**
 * Singleton instance
 */
let hubBuilderInstance: HubSpokeBuilder | null = null

export function getHubSpokeBuilder(): HubSpokeBuilder {
    if (!hubBuilderInstance) {
        hubBuilderInstance = new HubSpokeBuilder()
    }
    return hubBuilderInstance
}
