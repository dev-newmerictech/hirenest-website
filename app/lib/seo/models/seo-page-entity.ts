// app/lib/seo/models/seo-page-entity.ts

import { JobCategory } from '../../programmatic-seo/types'
import { PageTemplate } from './link-graph'

/**
 * Enhanced Page Entity Model
 * Represents a complete SEO page with all metadata for programmatic generation
 */

export type SearchIntent =
    | 'informational'
    | 'transactional'
    | 'navigational'

export type SchemaType =
    | 'Article'
    | 'FAQPage'
    | 'WebPage'
    | 'BreadcrumbList'
    | 'Organization'
    | 'WebSite'
    | 'HowTo'
    | 'JobPosting'

export type ContentBlockType =
    | 'heading'
    | 'paragraph'
    | 'qa'
    | 'list'
    | 'card'
    | 'section'
    | 'stats'

export interface ContentBlock {
    id: string
    type: ContentBlockType
    content?: string
    question?: string  // For qa type
    answer?: string    // For qa type
    items?: string[]   // For list type
    props?: Record<string, any>
}

export interface SEOPageEntity {
    // Identity
    id: string
    slug: string
    template: PageTemplate

    // Content
    title: string
    description: string
    content: ContentBlock[]

    // SEO Metadata
    intent: SearchIntent
    primaryKeyword: string
    secondaryKeywords: string[]
    targetWordCount: number
    actualWordCount: number

    // Structure
    parentHub?: string
    relatedPages: string[]
    siblingPages: string[]

    // Schema
    schemaTypes: SchemaType[]

    // Lifecycle
    createdAt: Date
    updatedAt: Date
    lastReviewed: Date
    contentHash: string
    status: 'draft' | 'active' | 'deprecated'

    // Additional metadata
    category?: JobCategory
    noindex?: boolean
    canonicalOverride?: string
}

/**
 * Content depth requirements by template
 */
export interface ContentDepthRequirements {
    minWordCount: number
    minFAQCount: number
    requiredSections: string[]
    minMediaItems: number
}

export const CONTENT_DEPTH_REQUIREMENTS: Record<PageTemplate, ContentDepthRequirements> = {
    'interview-questions': {
        minWordCount: 800,
        minFAQCount: 5,
        requiredSections: ['common-questions', 'preparation-tips'],
        minMediaItems: 0
    },
    'resume-keywords': {
        minWordCount: 600,
        minFAQCount: 3,
        requiredSections: ['skills-section', 'keywords-list'],
        minMediaItems: 0
    },
    'salary-guide': {
        minWordCount: 700,
        minFAQCount: 4,
        requiredSections: ['salary-range', 'factors'],
        minMediaItems: 0
    },
    'cover-letter': {
        minWordCount: 500,
        minFAQCount: 3,
        requiredSections: ['template', 'tips'],
        minMediaItems: 0
    },
    'job-description': {
        minWordCount: 600,
        minFAQCount: 3,
        requiredSections: ['responsibilities', 'requirements'],
        minMediaItems: 0
    },
    'category-hub': {
        minWordCount: 400,
        minFAQCount: 0,
        requiredSections: [],
        minMediaItems: 0
    },
    'location-page': {
        minWordCount: 400,
        minFAQCount: 0,
        requiredSections: [],
        minMediaItems: 0
    }
}

/**
 * Helper function to get keyword suffix for template
 */
export function getKeywordSuffix(template: PageTemplate): string {
    const suffixes: Record<PageTemplate, string> = {
        'interview-questions': 'interview questions',
        'resume-keywords': 'resume keywords',
        'salary-guide': 'salary',
        'cover-letter': 'cover letter',
        'job-description': 'job description',
        'category-hub': '',
        'location-page': ''
    }
    return suffixes[template] || ''
}

/**
 * Generate page title for template
 */
export function generatePageTitle(jobTitle: string, template: PageTemplate): string {
    const templates: Record<PageTemplate, string> = {
        'interview-questions': `${jobTitle} Interview Questions & Answers`,
        'resume-keywords': `${jobTitle} Resume Keywords & Skills`,
        'salary-guide': `${jobTitle} Salary Guide 2026`,
        'cover-letter': `${jobTitle} Cover Letter Examples`,
        'job-description': `${jobTitle} Job Description`,
        'category-hub': '',
        'location-page': ''
    }
    return templates[template] || jobTitle
}

/**
 * Generate page description for template
 */
export function generatePageDescription(jobTitle: string, template: PageTemplate): string {
    const templates: Record<PageTemplate, string> = {
        'interview-questions': `Prepare for your ${jobTitle} interview with commonly asked questions and expert answers. Get proven strategies to ace your ${jobTitle} interview.`,
        'resume-keywords': `Discover the best resume keywords and skills for ${jobTitle} positions. Optimize your resume for ATS and impress recruiters.`,
        'salary-guide': `Explore ${jobTitle} salary ranges by experience, location, and industry. Get negotiation tips and compensation insights.`,
        'cover-letter': `Browse ${jobTitle} cover letter examples and templates. Learn how to write a compelling cover letter for your ${jobTitle} application.`,
        'job-description': `View complete ${jobTitle} job description including responsibilities, requirements, skills, and career path information.`,
        'category-hub': '',
        'location-page': ''
    }
    return templates[template] || ''
}

/**
 * Get search intent for template
 */
export function getTemplateIntent(template: PageTemplate): SearchIntent {
    const intents: Record<PageTemplate, SearchIntent> = {
        'interview-questions': 'informational',
        'resume-keywords': 'informational',
        'salary-guide': 'informational',
        'cover-letter': 'informational',
        'job-description': 'informational',
        'category-hub': 'navigational',
        'location-page': 'navigational'
    }
    return intents[template] || 'informational'
}

/**
 * Generate secondary keywords
 */
export function generateSecondaryKeywords(
    jobTitle: string,
    template: PageTemplate,
    category: JobCategory
): string[] {
    const baseKeywords = [
        jobTitle.toLowerCase(),
        `${jobTitle} ${getKeywordSuffix(template)}`,
        ...getVariations(jobTitle, template)
    ]

    // Add category-specific keywords
    const categoryKeywords: Record<JobCategory, string[]> = {
        'technology': ['tech jobs', 'it careers', 'software jobs'],
        'marketing': ['marketing careers', 'digital marketing jobs'],
        'sales': ['sales careers', 'business development'],
        'healthcare': ['medical jobs', 'healthcare careers'],
        'finance': ['financial careers', 'banking jobs'],
        'hr': ['human resources jobs', 'hr careers'],
        'admin': ['administrative jobs', 'office jobs'],
        'customer-service': ['customer service jobs', 'support careers'],
        'design': ['design careers', 'creative jobs'],
        'engineering': ['engineering jobs', 'engineer careers'],
        'legal': ['legal careers', 'law jobs'],
        'education': ['teaching jobs', 'education careers'],
        'real-estate': ['real estate careers', 'property jobs'],
        'skilled-trades': ['trade jobs', 'skilled labor'],
        'hospitality': ['hospitality jobs', 'service industry'],
        'transportation': ['transportation jobs', 'logistics careers']
    }

    return [...baseKeywords, ...(categoryKeywords[category] || [])]
}

/**
 * Get keyword variations for template
 */
function getVariations(jobTitle: string, template: PageTemplate): string[] {
    const variations: Record<PageTemplate, string[]> = {
        'interview-questions': [
            `how to prepare for ${jobTitle} interview`,
            `${jobTitle} interview tips`,
            `${jobTitle} interview answers`
        ],
        'resume-keywords': [
            `${jobTitle} skills for resume`,
            `resume keywords for ${jobTitle}`,
            `${jobTitle} resume tips`
        ],
        'salary-guide': [
            `${jobTitle} average salary`,
            `how much does a ${jobTitle} make`,
            `${jobTitle} pay scale`
        ],
        'cover-letter': [
            `${jobTitle} cover letter template`,
            `how to write ${jobTitle} cover letter`,
            `${jobTitle} cover letter examples`
        ],
        'job-description': [
            `${jobTitle} responsibilities`,
            `${jobTitle} requirements`,
            `${jobTitle} job duties`
        ],
        'category-hub': [],
        'location-page': []
    }

    return variations[template] || []
}

/**
 * Count words in content blocks
 */
export function countContentWords(content: ContentBlock[]): number {
    return content.reduce((total, block) => {
        let text = ''
        if (block.content) text += block.content
        if (block.question) text += ` ${block.question}`
        if (block.answer) text += ` ${block.answer}`
        if (block.items) text += ` ${block.items.join(' ')}`
        return total + text.split(/\s+/).filter(w => w.length > 0).length
    }, 0)
}

/**
 * Generate content hash
 */
export function generateContentHash(content: ContentBlock[]): string {
    const normalized = JSON.stringify(content)
    let hash = 0
    for (let i = 0; i < normalized.length; i++) {
        const char = normalized.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash
    }
    return hash.toString(36)
}

/**
 * Get schema types for template
 */
export function getTemplateSchemas(template: PageTemplate): SchemaType[] {
    const schemas: Record<PageTemplate, SchemaType[]> = {
        'interview-questions': ['Article', 'FAQPage', 'WebPage', 'BreadcrumbList'],
        'resume-keywords': ['Article', 'FAQPage', 'WebPage', 'BreadcrumbList'],
        'salary-guide': ['Article', 'FAQPage', 'WebPage', 'BreadcrumbList'],
        'cover-letter': ['Article', 'FAQPage', 'WebPage', 'BreadcrumbList'],
        'job-description': ['Article', 'WebPage', 'BreadcrumbList'],
        'category-hub': ['WebPage', 'BreadcrumbList'],
        'location-page': ['WebPage', 'BreadcrumbList']
    }
    return schemas[template] || ['WebPage']
}

/**
 * Convert JobTitle to SEOPageEntity
 */
export function jobTitleToSEOPageEntity(
    job: { id: string; title: string; slug: string; category: JobCategory },
    template: PageTemplate,
    content: ContentBlock[]
): SEOPageEntity {
    const primaryKeyword = `${job.title} ${getKeywordSuffix(template)}`.trim()

    return {
        id: `${template}:${job.slug}`,
        slug: job.slug,
        template,
        title: generatePageTitle(job.title, template),
        description: generatePageDescription(job.title, template),
        content,
        intent: getTemplateIntent(template),
        primaryKeyword,
        secondaryKeywords: generateSecondaryKeywords(job.title, template, job.category),
        targetWordCount: CONTENT_DEPTH_REQUIREMENTS[template].minWordCount,
        actualWordCount: countContentWords(content),
        parentHub: template,
        relatedPages: [],
        siblingPages: [],
        schemaTypes: getTemplateSchemas(template),
        createdAt: new Date(),
        updatedAt: new Date(),
        lastReviewed: new Date(),
        contentHash: generateContentHash(content),
        status: 'active',
        category: job.category
    }
}
