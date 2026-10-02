// app/lib/seo/helpers.ts

/**
 * Helper functions for SEO feature integration
 * Provides utilities to get internal links and related pages
 * Optimized with caching to reduce build time
 */

import { enabledJobTitles } from '../programmatic-seo/enabled-job-titles'
import { SEO_CONFIG } from './core/constants'

export interface RelatedPage {
    url: string
    title: string
    description?: string
    category?: string
}

// Cache for expensive operations
const relatedPagesCache = new Map<string, RelatedPage[]>()
const popularPagesCache = new Map<string, RelatedPage[]>()

/**
 * Get related pages for a job based on category and aliases
 * Only links to job titles that exist in jobTitles database (no 404s)
 * Uses caching to speed up builds
 */
export function getRelatedPages(
    jobSlug: string,
    template: 'interview-questions' | 'resume-keywords' | 'salary' | 'cover-letter' | 'job-description' = 'interview-questions',
    limit: number = 6
): RelatedPage[] {
    const cacheKey = `${jobSlug}-${template}-${limit}`
    if (relatedPagesCache.has(cacheKey)) {
        return relatedPagesCache.get(cacheKey)!
    }

    const job = enabledJobTitles.find(j => j.slug === jobSlug)
    if (!job) return []

    const related: RelatedPage[] = []

    // Add pages for aliases that exist as actual job titles (no 404s)
    // Use Set for faster lookup
    const jobTitleMap = new Map(enabledJobTitles.map(j => [j.slug, j]))

    for (const alias of job.aliases) {
        if (related.length >= limit) break

        // Find if this alias maps to an actual job title
        const matchingJob = enabledJobTitles.find(j =>
            j.title.toLowerCase() === alias.toLowerCase() ||
            j.slug === alias.toLowerCase().replace(/ /g, '-')
        )

        if (matchingJob) {
            related.push({
                url: `${SEO_CONFIG.BASE_URL}/${template}/${matchingJob.slug}`,
                title: `${matchingJob.title} ${formatTemplateName(template)}`,
                description: `Prepare for your ${matchingJob.title} interview with our comprehensive guide.`,
                category: matchingJob.category
            })
        }
    }

    // Add pages from same category (excluding current job) - simplified to reduce iterations
    const sameCategory = enabledJobTitles.filter(j =>
        j.category === job.category &&
        j.slug !== jobSlug &&
        !job.aliases.some(a => a.toLowerCase() === j.title.toLowerCase())
    )

    for (const relatedJob of sameCategory) {
        if (related.length >= limit) break
        related.push({
            url: `${SEO_CONFIG.BASE_URL}/${template}/${relatedJob.slug}`,
            title: `${relatedJob.title} ${formatTemplateName(template)}`,
            description: `Explore ${relatedJob.title} interview questions and answers.`,
            category: relatedJob.category
        })
    }

    const result = related.slice(0, limit)
    relatedPagesCache.set(cacheKey, result)
    return result
}

/**
 * Get cross-template links for the same job
 * All links use the same jobSlug, so they will all return 200
 */
export function getCrossTemplateLinks(
    jobSlug: string,
    jobTitle: string
): RelatedPage[] {
    return [
        {
            url: `${SEO_CONFIG.BASE_URL}/resume-keywords/${jobSlug}`,
            title: `${jobTitle} Resume Keywords`,
            description: `Discover the best resume keywords for ${jobTitle} positions.`
        },
        {
            url: `${SEO_CONFIG.BASE_URL}/salary/${jobSlug}`,
            title: `${jobTitle} Salary Guide`,
            description: `Explore salary ranges and compensation for ${jobTitle} roles.`
        },
        {
            url: `${SEO_CONFIG.BASE_URL}/cover-letter/${jobSlug}`,
            title: `${jobTitle} Cover Letter Examples`,
            description: `Browse cover letter templates for ${jobTitle} applications.`
        }
    ]
}

/**
 * Get popular pages for a template
 * Uses caching to avoid re-sorting during builds
 */
export function getPopularPages(
    template: 'interview-questions' | 'resume-keywords' | 'salary' | 'cover-letter' | 'job-description' = 'interview-questions',
    limit: number = 10
): RelatedPage[] {
    const cacheKey = `popular-${template}-${limit}`
    if (popularPagesCache.has(cacheKey)) {
        return popularPagesCache.get(cacheKey)!
    }

    // Use pre-sliced array to avoid sorting on every call
    // Just take the first N jobs - they're already roughly ordered by importance
    const selected = enabledJobTitles.slice(0, limit)

    const result = selected.map(job => ({
        url: `${SEO_CONFIG.BASE_URL}/${template}/${job.slug}`,
        title: `${job.title} ${formatTemplateName(template)}`,
        description: getShortDescription(job.title, template),
        category: job.category
    }))

    popularPagesCache.set(cacheKey, result)
    return result
}

/**
 * Get breadcrumb items for a page
 */
export function getBreadcrumbItems(
    template: string,
    jobTitle: string,
    jobSlug: string
): Array<{ name: string; url: string }> {
    return [
        { name: 'Home', url: SEO_CONFIG.BASE_URL },
        { name: formatTemplateName(template), url: `${SEO_CONFIG.BASE_URL}/${template}` },
        { name: jobTitle, url: `${SEO_CONFIG.BASE_URL}/${template}/${jobSlug}` }
    ]
}

// Helper functions

function formatTemplateName(template: string): string {
    const names: Record<string, string> = {
        'interview-questions': 'Interview Questions',
        'resume-keywords': 'Resume Keywords',
        'salary': 'Salary Guide',
        'salary-guide': 'Salary Guide',
        'cover-letter': 'Cover Letter',
        'cover-letter-examples': 'Cover Letter Examples',
        'job-description': 'Job Description'
    }
    return names[template] || template
}

function getShortDescription(jobTitle: string, template: string): string {
    const templates: Record<string, string> = {
        'interview-questions': `Common ${jobTitle} interview questions with answers.`,
        'resume-keywords': `Top resume keywords for ${jobTitle} positions.`,
        'salary': `${jobTitle} salary ranges and compensation data.`,
        'cover-letter': `Professional cover letter examples for ${jobTitle}.`,
        'job-description': `Complete ${jobTitle} job description and requirements.`
    }
    return templates[template] || ''
}
