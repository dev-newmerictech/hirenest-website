// app/lib/seo/models/link-graph.ts

/**
 * Link Graph Types for Internal Linking System
 * Defines the structure for building internal link relationships
 */

export interface LinkNode {
    id: string
    url: string
    title: string
    type: 'hub' | 'spoke' | 'orphan'
    authority: number           // 0-1, calculated from inbound links
    hubId?: string              // Parent hub if spoke
    category: string            // JobCategory for grouping
    template: PageTemplate
    depth: number               // Distance from homepage
}

export interface LinkEdge {
    from: string
    to: string
    type: LinkType
    anchorText: string
    weight: number              // 0-1, relevance score
}

export type LinkType = 'hierarchy' | 'related' | 'contextual' | 'breadcrumb'

export interface LinkGraph {
    nodes: Map<string, LinkNode>
    edges: LinkEdge[]
    lastBuilt: Date
}

export type PageTemplate =
    | 'interview-questions'
    | 'resume-keywords'
    | 'salary-guide'
    | 'cover-letter'
    | 'job-description'
    | 'category-hub'
    | 'location-page'

export interface InternalLink {
    url: string
    title: string
    anchorText: string
    type: LinkType
    relevanceScore?: number
}

export interface HubConfiguration {
    hubPageId: string
    hubSlug: string
    hubTitle: string
    spokePageIds: string[]
    maxSpokesPerHub: number
    crossLinkSpokes: boolean
    category: string
}

/**
 * Page template metadata
 */
export interface PageTemplateMeta {
    id: PageTemplate
    name: string
    path: string
    hubTitle: string
    priority: number
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

/**
 * All page templates with their metadata
 */
export const PAGE_TEMPLATES: PageTemplate[] = [
    'interview-questions',
    'resume-keywords',
    'salary-guide',
    'cover-letter',
    'job-description',
    'category-hub',
    'location-page'
]

/**
 * Page template metadata mapping
 */
export const PAGE_TEMPLATE_META: Record<PageTemplate, PageTemplateMeta> = {
    'interview-questions': {
        id: 'interview-questions',
        name: 'Interview Questions',
        path: '/interview-questions',
        hubTitle: 'Interview Questions & Answers',
        priority: 0.8,
        changeFrequency: 'monthly'
    },
    'resume-keywords': {
        id: 'resume-keywords',
        name: 'Resume Keywords',
        path: '/resume-keywords',
        hubTitle: 'Resume Keywords & Skills',
        priority: 0.8,
        changeFrequency: 'monthly'
    },
    'salary-guide': {
        id: 'salary-guide',
        name: 'Salary Guides',
        path: '/salary',
        hubTitle: 'Salary Guides',
        priority: 0.7,
        changeFrequency: 'weekly'
    },
    'cover-letter': {
        id: 'cover-letter',
        name: 'Cover Letter Examples',
        path: '/cover-letter',
        hubTitle: 'Cover Letter Examples & Templates',
        priority: 0.7,
        changeFrequency: 'monthly'
    },
    'job-description': {
        id: 'job-description',
        name: 'Job Descriptions',
        path: '/job-description',
        hubTitle: 'Job Descriptions',
        priority: 0.7,
        changeFrequency: 'monthly'
    },
    'category-hub': {
        id: 'category-hub',
        name: 'Categories',
        path: '/categories',
        hubTitle: 'Browse by Category',
        priority: 0.6,
        changeFrequency: 'weekly'
    },
    'location-page': {
        id: 'location-page',
        name: 'Locations',
        path: '/locations',
        hubTitle: 'Browse by Location',
        priority: 0.5,
        changeFrequency: 'monthly'
    }
}
