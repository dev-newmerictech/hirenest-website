// app/lib/seo/linking/internal-linking-engine.ts

import {
    LinkNode,
    LinkEdge,
    LinkGraph,
    InternalLink,
    LinkType,
    PageTemplate,
    PAGE_TEMPLATE_META
} from '../models/link-graph'
import { JobTitle, JobCategory } from '../../programmatic-seo/types'
import { SEO_CONFIG } from '../core/constants'

/**
 * Internal Linking Engine
 * Builds and manages the internal link graph for programmatic SEO pages
 */
export class InternalLinkingEngine {
    private graph: LinkGraph
    private readonly maxLinksPerPage: number
    private readonly minRelevanceScore: number

    constructor() {
        this.graph = {
            nodes: new Map(),
            edges: [],
            lastBuilt: new Date()
        }
        this.maxLinksPerPage = SEO_CONFIG.MAX_INTERNAL_LINKS_PER_PAGE
        this.minRelevanceScore = SEO_CONFIG.MIN_RELEVANCE_SCORE
    }

    /**
     * Build the link graph from job titles and page configurations
     */
    async buildLinkGraph(
        jobTitles: JobTitle[],
        pageTemplates: PageTemplate[]
    ): Promise<LinkGraph> {
        // Create nodes for each job title x template combination
        for (const job of jobTitles) {
            for (const template of pageTemplates) {
                // Skip category-hub and location-page for individual jobs
                if (template === 'category-hub' || template === 'location-page') continue

                const nodeId = this.createNodeId(job.slug, template)
                const url = this.createUrl(job.slug, template)

                const node: LinkNode = {
                    id: nodeId,
                    url,
                    title: this.generatePageTitle(job.title, template),
                    type: 'spoke',
                    authority: this.calculateInitialAuthority(job),
                    category: job.category,
                    template,
                    depth: 2
                }

                this.graph.nodes.set(nodeId, node)
            }
        }

        // Create hub nodes
        await this.createHubNodes(pageTemplates)

        // Create category hub nodes
        await this.createCategoryHubNodes(jobTitles, pageTemplates)

        // Build hierarchy edges
        this.buildHierarchyEdges()

        // Build related edges based on category and aliases
        this.buildRelatedEdges(jobTitles)

        this.graph.lastBuilt = new Date()
        return this.graph
    }

    /**
     * Get internal links for a specific page
     */
    async getLinksForPage(
        pageId: string,
        linkTypes: LinkType[] = ['hierarchy', 'related', 'contextual']
    ): Promise<InternalLink[]> {
        const node = this.graph.nodes.get(pageId)
        if (!node) return []

        const links: InternalLink[] = []

        // Get hierarchy links (parent, siblings)
        if (linkTypes.includes('hierarchy')) {
            links.push(...this.getHierarchyLinks(node))
        }

        // Get related links by category
        if (linkTypes.includes('related')) {
            links.push(...this.getRelatedLinks(node, 5))
        }

        // Get contextual links (same job, different template)
        if (linkTypes.includes('contextual')) {
            links.push(...this.getContextualLinks(node, 3))
        }

        // Sort by relevance and limit
        return links
            .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
            .slice(0, this.maxLinksPerPage)
    }

    /**
     * Generate breadcrumbs for a page
     */
    async generateBreadcrumbs(pageId: string): Promise<Array<{ name: string; url: string }>> {
        const node = this.graph.nodes.get(pageId)
        if (!node) return []

        const breadcrumbs: Array<{ name: string; url: string }> = [
            { name: 'Home', url: SEO_CONFIG.BASE_URL }
        ]

        // Add template hub
        const templateMeta = PAGE_TEMPLATE_META[node.template]
        if (templateMeta) {
            breadcrumbs.push({
                name: templateMeta.name,
                url: `${SEO_CONFIG.BASE_URL}${templateMeta.path}`
            })
        }

        // Add category hub if exists
        if (node.category && node.category !== 'all') {
            const categoryHubId = `hub:${node.template}:${node.category}`
            if (this.graph.nodes.has(categoryHubId)) {
                breadcrumbs.push({
                    name: this.formatCategoryName(node.category),
                    url: `${SEO_CONFIG.BASE_URL}${PAGE_TEMPLATE_META[node.template].path}/${node.category}`
                })
            }
        }

        // Add current page
        breadcrumbs.push({
            name: node.title,
            url: node.url
        })

        return breadcrumbs
    }

    /**
     * Find orphan pages (no inbound links)
     */
    async findOrphanPages(): Promise<LinkNode[]> {
        const nodesWithInbound = new Set<string>()

        for (const edge of this.graph.edges) {
            nodesWithInbound.add(edge.to)
        }

        const orphans: LinkNode[] = []
        for (const [id, node] of this.graph.nodes) {
            if (!nodesWithInbound.has(id) && node.type !== 'hub') {
                orphans.push(node)
            }
        }

        return orphans
    }

    /**
     * Suggest related pages based on category, intent, and keywords
     */
    async suggestRelatedPages(
        pageId: string,
        limit: number = 6
    ): Promise<InternalLink[]> {
        const node = this.graph.nodes.get(pageId)
        if (!node) return []

        const relatedNodes: Array<{ node: LinkNode; score: number }> = []

        for (const [id, candidate] of this.graph.nodes) {
            if (id === pageId) continue
            if (candidate.type === 'hub') continue

            let score = 0

            // Same category = high relevance
            if (candidate.category === node.category) {
                score += 0.5
            }

            // Same template = medium relevance
            if (candidate.template === node.template) {
                score += 0.2
            }

            // Cross-template relevance
            if (this.areTemplatesRelated(node.template, candidate.template)) {
                score += 0.3
            }

            if (score >= this.minRelevanceScore) {
                relatedNodes.push({ node: candidate, score })
            }
        }

        return relatedNodes
            .sort((a, b) => b.score - a.score)
            .slice(0, limit)
            .map(({ node, score }) => ({
                url: node.url,
                title: node.title,
                anchorText: node.title,
                type: 'related' as LinkType,
                relevanceScore: score
            }))
    }

    /**
     * Get links for a specific template
     */
    async getLinksForTemplate(
        template: PageTemplate,
        limit: number = 50
    ): Promise<InternalLink[]> {
        const links: InternalLink[] = []

        for (const [id, node] of this.graph.nodes) {
            if (node.template === template && node.type === 'spoke') {
                links.push({
                    url: node.url,
                    title: node.title,
                    anchorText: node.title,
                    type: 'hierarchy'
                })
            }
        }

        return links.slice(0, limit)
    }

    // Private helper methods

    private createNodeId(slug: string, template: PageTemplate): string {
        return `${template}:${slug}`
    }

    private createUrl(slug: string, template: PageTemplate): string {
        const meta = PAGE_TEMPLATE_META[template]
        return `${SEO_CONFIG.BASE_URL}${meta.path}/${slug}`
    }

    private generatePageTitle(jobTitle: string, template: PageTemplate): string {
        const meta = PAGE_TEMPLATE_META[template]
        return `${jobTitle} ${meta.name}`.trim()
    }

    private calculateInitialAuthority(job: JobTitle): number {
        let authority = 0.1

        // Growth rate bonus
        if (job.growthRate && job.growthRate > 20) {
            authority += 0.1
        } else if (job.growthRate && job.growthRate > 10) {
            authority += 0.05
        }

        // Salary bonus
        if (job.averageSalary && job.averageSalary > 100000) {
            authority += 0.05
        }

        return Math.min(authority, 0.5) // Cap at 0.5 for initial authority
    }

    private async createHubNodes(pageTemplates: PageTemplate[]): Promise<void> {
        for (const template of pageTemplates) {
            const hubId = `hub:${template}`
            const meta = PAGE_TEMPLATE_META[template]

            const hubNode: LinkNode = {
                id: hubId,
                url: `${SEO_CONFIG.BASE_URL}${meta.path}`,
                title: meta.hubTitle,
                type: 'hub',
                authority: 0.8,
                category: 'all',
                template,
                depth: 1
            }
            this.graph.nodes.set(hubId, hubNode)
        }
    }

    private async createCategoryHubNodes(
        jobTitles: JobTitle[],
        pageTemplates: PageTemplate[]
    ): Promise<void> {
        const categories = new Set(jobTitles.map(j => j.category))

        for (const template of pageTemplates) {
            if (template === 'category-hub' || template === 'location-page') continue

            for (const category of categories) {
                const hubId = `hub:${template}:${category}`
                const meta = PAGE_TEMPLATE_META[template]

                const hubNode: LinkNode = {
                    id: hubId,
                    url: `${SEO_CONFIG.BASE_URL}${meta.path}/${category}`,
                    title: `${this.formatCategoryName(category)} ${meta.name}`,
                    type: 'hub',
                    authority: 0.7,
                    category,
                    template,
                    depth: 1
                }
                this.graph.nodes.set(hubId, hubNode)
            }
        }
    }

    private buildHierarchyEdges(): void {
        for (const [id, node] of this.graph.nodes) {
            if (node.type === 'spoke') {
                const hubId = `hub:${node.template}`
                const hub = this.graph.nodes.get(hubId)
                if (hub) {
                    this.graph.edges.push({
                        from: hubId,
                        to: id,
                        type: 'hierarchy',
                        anchorText: node.title,
                        weight: 1.0
                    })
                }

                // Also link to category hub
                if (node.category && node.category !== 'all') {
                    const categoryHubId = `hub:${node.template}:${node.category}`
                    const categoryHub = this.graph.nodes.get(categoryHubId)
                    if (categoryHub) {
                        this.graph.edges.push({
                            from: categoryHubId,
                            to: id,
                            type: 'hierarchy',
                            anchorText: node.title,
                            weight: 0.9
                        })
                    }
                }
            }
        }
    }

    private buildRelatedEdges(jobTitles: JobTitle[]): void {
        // Group by category
        const byCategory = new Map<JobCategory, JobTitle[]>()
        for (const job of jobTitles) {
            if (!byCategory.has(job.category)) {
                byCategory.set(job.category, [])
            }
            byCategory.get(job.category)!.push(job)
        }

        // Create edges between related jobs in same category
        for (const [category, jobs] of byCategory) {
            for (let i = 0; i < jobs.length; i++) {
                for (let j = i + 1; j < jobs.length; j++) {
                    const jobA = jobs[i]
                    const jobB = jobs[j]

                    // Check for alias overlap
                    const isRelated = jobA.aliases.some(a =>
                        jobB.aliases.some(b =>
                            a.toLowerCase().includes(b.toLowerCase()) ||
                            b.toLowerCase().includes(a.toLowerCase())
                        )
                    )

                    if (isRelated || jobA.category === jobB.category) {
                        for (const template of ['interview-questions', 'resume-keywords', 'salary-guide'] as const) {
                            const nodeAId = this.createNodeId(jobA.slug, template)
                            const nodeBId = this.createNodeId(jobB.slug, template)

                            if (this.graph.nodes.has(nodeAId) && this.graph.nodes.has(nodeBId)) {
                                this.graph.edges.push({
                                    from: nodeAId,
                                    to: nodeBId,
                                    type: 'related',
                                    anchorText: jobB.title,
                                    weight: 0.7
                                })
                            }
                        }
                    }
                }
            }
        }
    }

    private getHierarchyLinks(node: LinkNode): InternalLink[] {
        const links: InternalLink[] = []

        // Link to parent hub
        const hubId = `hub:${node.template}`
        const hub = this.graph.nodes.get(hubId)
        if (hub) {
            links.push({
                url: hub.url,
                title: hub.title,
                anchorText: hub.title,
                type: 'hierarchy',
                relevanceScore: 1
            })
        }

        return links
    }

    private getRelatedLinks(node: LinkNode, limit: number): InternalLink[] {
        const links: InternalLink[] = []

        for (const edge of this.graph.edges) {
            if (edge.from === node.id && edge.type === 'related') {
                const targetNode = this.graph.nodes.get(edge.to)
                if (targetNode && targetNode.type !== 'hub') {
                    links.push({
                        url: targetNode.url,
                        title: targetNode.title,
                        anchorText: edge.anchorText,
                        type: 'related',
                        relevanceScore: edge.weight
                    })
                }
            }
        }

        return links.slice(0, limit)
    }

    private getContextualLinks(node: LinkNode, limit: number): InternalLink[] {
        const links: InternalLink[] = []
        const jobSlug = node.id.split(':')[1]

        const templates: PageTemplate[] = ['interview-questions', 'resume-keywords', 'salary-guide', 'cover-letter', 'job-description']

        for (const template of templates) {
            if (template === node.template) continue

            const targetId = this.createNodeId(jobSlug, template)
            const targetNode = this.graph.nodes.get(targetId)

            if (targetNode && targetNode.type !== 'hub') {
                links.push({
                    url: targetNode.url,
                    title: targetNode.title,
                    anchorText: targetNode.title,
                    type: 'contextual',
                    relevanceScore: 0.8
                })
            }
        }

        return links.slice(0, limit)
    }

    private areTemplatesRelated(templateA: PageTemplate, templateB: PageTemplate): boolean {
        const relatedPairs: Array<[PageTemplate, PageTemplate]> = [
            ['interview-questions', 'resume-keywords'],
            ['interview-questions', 'salary-guide'],
            ['interview-questions', 'cover-letter'],
            ['resume-keywords', 'job-description'],
            ['salary-guide', 'job-description']
        ]

        return relatedPairs.some(([a, b]) =>
            (a === templateA && b === templateB) || (a === templateB && b === templateA)
        )
    }

    private formatCategoryName(category: string): string {
        return category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    /**
     * Get the current link graph
     */
    getGraph(): LinkGraph {
        return this.graph
    }

    /**
     * Get node count statistics
     */
    getStats() {
        const nodes = Array.from(this.graph.nodes.values())
        return {
            totalNodes: nodes.length,
            hubs: nodes.filter(n => n.type === 'hub').length,
            spokes: nodes.filter(n => n.type === 'spoke').length,
            orphans: nodes.filter(n => n.type === 'orphan').length,
            edges: this.graph.edges.length,
            avgAuthority: nodes.reduce((sum, n) => sum + n.authority, 0) / nodes.length || 0
        }
    }
}

/**
 * Singleton instance for the application
 */
let engineInstance: InternalLinkingEngine | null = null

export async function getLinkingEngine(): Promise<InternalLinkingEngine> {
    if (!engineInstance) {
        engineInstance = new InternalLinkingEngine()
    }
    return engineInstance
}
