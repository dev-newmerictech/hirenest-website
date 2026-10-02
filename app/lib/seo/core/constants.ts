// app/lib/seo/core/constants.ts

import { PageTemplate } from '../models/link-graph'

/**
 * SEO Configuration Constants
 */

const BASE_URL = 'https://hirenest.ai'

/**
 * Site-wide SEO configuration
 */
export const SEO_CONFIG = {
    BASE_URL,
    SITE_NAME: 'Hirenest',
    DEFAULT_OG_IMAGE: '/og-image.png',
    DEFAULT_LOGO: '/HpLogo.svg',
    TWITTER_HANDLE: '@hirenest',

    // Default meta tags
    DEFAULT_TITLE: 'Hirenest - Connect Job Seekers with Employers',
    DEFAULT_DESCRIPTION: 'AI-powered platform connecting job seekers with top employers. Find your dream job or discover exceptional talent.',

    // Contact
    SUPPORT_EMAIL: 'support@hirenest.com',
    SALES_EMAIL: 'sales@hirenest.com',

    // Social links
    SOCIAL_LINKS: [
        'https://twitter.com/hirenest',
        'https://linkedin.com/company/hirenest',
        'https://facebook.com/hirenest'
    ] as const,

    // Content thresholds
    MIN_WORD_COUNT: 500,
    TARGET_WORD_COUNT: 800,
    MAX_WORD_COUNT: 3000,

    MIN_FAQ_COUNT: 3,
    TARGET_FAQ_COUNT: 5,

    // Internal linking
    MAX_INTERNAL_LINKS_PER_PAGE: 15,
    MIN_INTERNAL_LINKS_PER_PAGE: 3,
    MIN_RELEVANCE_SCORE: 0.3,

    // Duplicate detection
    DUPLICATE_SIMILARITY_THRESHOLD: 0.9,

    // Sitemap
    MAX_URLS_PER_SITEMAP: 50000,
    SITEMAP_CHANGE_FREQ: 'monthly' as const,
    SITEMAP_PRIORITY: 0.8,

    // Caching
    CACHE_TTL_SECONDS: 86400, // 24 hours
    STALE_WHILE_REVALIDATE_SECONDS: 3600, // 1 hour
} as const

/**
 * Page type configurations
 */
export const PAGE_TYPE_CONFIG = {
    'interview-questions': {
        path: '/interview-questions',
        title: 'Interview Questions',
        description: 'Prepare for your job interview with our comprehensive collection of interview questions and answers.',
        priority: 0.8,
        changeFrequency: 'monthly' as const,
        minWordCount: 800,
        minFAQCount: 5
    },
    'resume-keywords': {
        path: '/resume-keywords',
        title: 'Resume Keywords',
        description: 'Discover the best resume keywords and skills for your job. Optimize your resume for ATS.',
        priority: 0.8,
        changeFrequency: 'monthly' as const,
        minWordCount: 600,
        minFAQCount: 3
    },
    'salary-guide': {
        path: '/salary',
        title: 'Salary Guides',
        description: 'Browse comprehensive salary guides for thousands of job titles.',
        priority: 0.7,
        changeFrequency: 'weekly' as const,
        minWordCount: 700,
        minFAQCount: 4
    },
    'cover-letter': {
        path: '/cover-letter',
        title: 'Cover Letter Examples',
        description: 'Browse cover letter examples and templates for every job title.',
        priority: 0.7,
        changeFrequency: 'monthly' as const,
        minWordCount: 500,
        minFAQCount: 3
    },
    'job-description': {
        path: '/job-description',
        title: 'Job Descriptions',
        description: 'Browse comprehensive job descriptions for thousands of career paths.',
        priority: 0.7,
        changeFrequency: 'monthly' as const,
        minWordCount: 600,
        minFAQCount: 3
    },
    'category-hub': {
        path: '/categories',
        title: 'Browse by Category',
        description: 'Explore job opportunities by industry category.',
        priority: 0.6,
        changeFrequency: 'weekly' as const,
        minWordCount: 400,
        minFAQCount: 0
    },
    'location-page': {
        path: '/locations',
        title: 'Browse by Location',
        description: 'Find job opportunities near you.',
        priority: 0.5,
        changeFrequency: 'monthly' as const,
        minWordCount: 400,
        minFAQCount: 0
    }
} as const

/**
 * Validation issue codes
 */
export const ISSUE_CODES = {
    THIN_CONTENT: 'THIN_CONTENT',
    INSUFFICIENT_FAQS: 'INSUFFICIENT_FAQS',
    MISSING_SECTION: 'MISSING_SECTION',
    DUPLICATE_CONTENT: 'DUPLICATE_CONTENT',
    KEYWORD_CANNIBALIZATION: 'KEYWORD_CANNIBALIZATION',
    MISSING_SCHEMA: 'MISSING_SCHEMA',
    BROKEN_LINKS: 'BROKEN_LINKS',
    ORPHAN_PAGE: 'ORPHAN_PAGE',
    SHORT_TITLE: 'SHORT_TITLE',
    SHORT_DESCRIPTION: 'SHORT_DESCRIPTION',
    MISSING_INTERNAL_LINKS: 'MISSING_INTERNAL_LINKS'
} as const

export type IssueCode = typeof ISSUE_CODES[keyof typeof ISSUE_CODES]

/**
 * Validation severity levels
 */
export type IssueSeverity = 'critical' | 'error' | 'warning'

/**
 * Get page configuration by template
 */
export function getPageConfig(template: PageTemplate) {
    return PAGE_TYPE_CONFIG[template]
}

/**
 * Get sitemap priority by page type
 */
export function getSitemapPriority(template: PageTemplate): number {
    return PAGE_TYPE_CONFIG[template].priority
}

/**
 * Get change frequency by page type
 */
export function getChangeFrequency(template: PageTemplate) {
    return PAGE_TYPE_CONFIG[template].changeFrequency
}
