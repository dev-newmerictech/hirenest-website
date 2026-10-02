/**
 * All job titles that have content pages.
 * Since all 1,102 job titles in the database have content,
 * we export all of them for sitemap, RSS, and page generation.
 */

import { jobTitles, getJobBySlug, getJobsByCategory } from './job-titles';

/**
 * All job titles have content pages.
 * Exporting all 1,102 job titles for sitemap and page generation.
 */
export const enabledJobTitles = jobTitles;

// Re-export utility functions from job-titles
export { getJobBySlug, getJobsByCategory };

/**
 * Get all enabled job slugs as a Set for quick lookup.
 */
export const enabledJobSlugs = new Set(jobTitles.map(job => job.slug));

/**
 * Check if a job title slug has a content page.
 * All job titles are enabled.
 */
export function isJobSlugEnabled(slug: string): boolean {
    return enabledJobSlugs.has(slug);
}

/**
 * Get all jobs by category (for index pages).
 */
export function getEnabledJobsByCategory(category: string) {
    return jobTitles.filter(job => job.category === category);
}

/**
 * Get all jobs grouped by category.
 */
export function getEnabledJobsByCategoryGrouped() {
    const grouped: Record<string, typeof jobTitles> = {};
    for (const job of jobTitles) {
        if (!grouped[job.category]) {
            grouped[job.category] = [];
        }
        grouped[job.category].push(job);
    }
    return grouped;
}

/**
 * Total counts
 */
export const TOTAL_JOB_TITLES = jobTitles.length;
export const TOTAL_PROGRAMMATIC_PAGES = jobTitles.length * 5; // 5 templates per job
