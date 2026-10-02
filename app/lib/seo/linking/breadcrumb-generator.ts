// app/lib/seo/linking/breadcrumb-generator.ts

import { LinkNode, LinkGraph, PageTemplate } from '../models/link-graph'
import { PAGE_TEMPLATE_META } from '../models/link-graph'
import { SEO_CONFIG } from '../core/constants'

export interface BreadcrumbItem {
    name: string
    url: string
    position: number
}

/**
 * Dynamic breadcrumb generator
 */
export class BreadcrumbGenerator {
    private graph: LinkGraph

    constructor(graph: LinkGraph) {
        this.graph = graph
    }

    /**
     * Generate breadcrumbs for a page node
     */
    generateBreadcrumbs(nodeId: string): BreadcrumbItem[] {
        const node = this.graph.nodes.get(nodeId)
        if (!node) {
            return this.getDefaultBreadcrumbs()
        }

        const crumbs: BreadcrumbItem[] = []
        let position = 1

        // Home
        crumbs.push({
            name: 'Home',
            url: SEO_CONFIG.BASE_URL,
            position: position++
        })

        // Template hub (if spoke page)
        if (node.type === 'spoke') {
            const templateHubId = `hub:${node.template}`
            const templateHub = this.graph.nodes.get(templateHubId)

            if (templateHub) {
                crumbs.push({
                    name: this.formatTemplateHubName(node.template),
                    url: templateHub.url,
                    position: position++
                })
            } else {
                // Fallback to direct URL
                const meta = PAGE_TEMPLATE_META[node.template]
                if (meta) {
                    crumbs.push({
                        name: meta.name,
                        url: `${SEO_CONFIG.BASE_URL}${meta.path}`,
                        position: position++
                    })
                }
            }

            // Category hub (if exists)
            if (node.category && node.category !== 'all') {
                const categoryHubId = `hub:${node.template}:${node.category}`
                const categoryHub = this.graph.nodes.get(categoryHubId)

                if (categoryHub) {
                    crumbs.push({
                        name: this.formatCategoryName(node.category),
                        url: categoryHub.url,
                        position: position++
                    })
                }
            }
        }

        // Current page
        crumbs.push({
            name: node.title,
            url: node.url,
            position: position++
        })

        return crumbs
    }

    /**
     * Generate breadcrumb for schema.org structured data
     */
    generateSchemaBreadcrumbs(nodeId: string): Array<{
        '@type': string
        position: number
        name: string
        item?: string
    }> {
        const crumbs = this.generateBreadcrumbs(nodeId)

        return crumbs.map(crumb => ({
            '@type': 'ListItem',
            position: crumb.position,
            name: crumb.name,
            ...(crumb.url && { item: crumb.url })
        }))
    }

    /**
     * Generate breadcrumb from URL path (fallback method)
     */
    generateBreadcrumbsFromPath(path: string, title?: string): BreadcrumbItem[] {
        const crumbs: BreadcrumbItem[] = []
        let position = 1

        // Home
        crumbs.push({
            name: 'Home',
            url: SEO_CONFIG.BASE_URL,
            position: position++
        })

        // Split path and build breadcrumbs
        const segments = path.split('/').filter(Boolean)
        let urlBuilder = SEO_CONFIG.BASE_URL

        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i]
            urlBuilder += `/${segment}`

            // Check if it's a known template
            const template = Object.values(PAGE_TEMPLATE_META).find(
                meta => meta.path === `/${segment}`
            )

            if (template) {
                crumbs.push({
                    name: template.name,
                    url: urlBuilder,
                    position: position++
                })
            } else if (i === segments.length - 1 && title) {
                // Last segment - use provided title
                crumbs.push({
                    name: title,
                    url: urlBuilder,
                    position: position++
                })
            } else {
                // Format segment
                const formatted = this.formatSlugToTitle(segment)
                crumbs.push({
                    name: formatted,
                    url: urlBuilder,
                    position: position++
                })
            }
        }

        return crumbs
    }

    private getDefaultBreadcrumbs(): BreadcrumbItem[] {
        return [
            { name: 'Home', url: SEO_CONFIG.BASE_URL, position: 1 }
        ]
    }

    private formatTemplateHubName(template: PageTemplate): string {
        const meta = PAGE_TEMPLATE_META[template]
        return meta?.name || template
    }

    private formatCategoryName(category: string): string {
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
}

/**
 * Generate breadcrumbs for a page (convenience function)
 */
export async function generateBreadcrumbs(
    graph: LinkGraph,
    nodeId: string
): Promise<BreadcrumbItem[]> {
    const generator = new BreadcrumbGenerator(graph)
    return generator.generateBreadcrumbs(nodeId)
}

/**
 * Generate schema breadcrumbs for structured data
 */
export async function generateSchemaBreadcrumbs(
    graph: LinkGraph,
    nodeId: string
): Promise<Array<{ '@type': string; position: number; name: string; item?: string }>> {
    const generator = new BreadcrumbGenerator(graph)
    return generator.generateSchemaBreadcrumbs(nodeId)
}
