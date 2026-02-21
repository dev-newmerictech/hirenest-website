// app/lib/seo/helpers.ts

/**
 * Helper functions for SEO feature integration
 * Provides utilities to get internal links and related pages
 */

import { enabledJobTitles } from '../programmatic-seo/enabled-job-titles'
import { SEO_CONFIG } from './core/constants'

export interface RelatedPage {
    url: string
    title: string
    description?: string
    category?: string
}

/**
 * Get related pages for a job based on category and aliases
 * Only links to job titles that exist in jobTitles database (no 404s)
 */
export function getRelatedPages(
    jobSlug: string,
    template: 'interview-questions' | 'resume-keywords' | 'salary' | 'cover-letter' | 'job-description' = 'interview-questions',
    limit: number = 6
): RelatedPage[] {
    const job = enabledJobTitles.find(j => j.slug === jobSlug)
    if (!job) return []

    const related: RelatedPage[] = []

    // Add pages for aliases that exist as actual job titles (no 404s)
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

    // Add pages from same category (excluding current job)
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

    return related.slice(0, limit)
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
 */
export function getPopularPages(
    template: 'interview-questions' | 'resume-keywords' | 'salary' | 'cover-letter' | 'job-description' = 'interview-questions',
    limit: number = 10
): RelatedPage[] {
    // Sort by growth rate and salary as proxy for popularity
    const sorted = [...enabledJobTitles]
        .sort((a, b) => {
            const scoreA = (a.growthRate || 0) + (a.averageSalary ? a.averageSalary / 10000 : 0)
            const scoreB = (b.growthRate || 0) + (b.averageSalary ? b.averageSalary / 10000 : 0)
            return scoreB - scoreA
        })
        .slice(0, limit)

    return sorted.map(job => ({
        url: `${SEO_CONFIG.BASE_URL}/${template}/${job.slug}`,
        title: `${job.title} ${formatTemplateName(template)}`,
        description: getShortDescription(job.title, template),
        category: job.category
    }))
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
