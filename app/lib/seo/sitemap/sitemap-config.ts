// app/lib/seo/sitemap/sitemap-config.ts

import { enabledJobTitles } from '../../programmatic-seo/enabled-job-titles'
import { PageTemplate } from '../models/link-graph'
import { LOCATION_JOB_BOARDS } from '../../programmatic-seo/job-board'

const BASE_URL = 'https://hirenest.ai'

/**
 * Sitemap entry interface
 */
export interface SitemapEntry {
    url: string
    lastModified?: string | Date
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority?: number
}

export interface SitemapConfig {
    baseUrl: string
    sitemaps: SitemapIndexConfig[]
}

export interface SitemapIndexConfig {
    name: string
    path: string
    pageSize: number
    priority: '0.1' | '0.2' | '0.3' | '0.4' | '0.5' | '0.6' | '0.7' | '0.8' | '0.9' | '1.0'
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    getContent: (page: number, limit: number) => Promise<SitemapEntry[]>
    totalCount?: number
}

/**
 * Create sitemap config for a page template
 */
export function createTemplateSitemapConfig(
    template: PageTemplate,
    path: string,
    options?: {
        priority?: SitemapIndexConfig['priority']
        changeFrequency?: SitemapIndexConfig['changeFrequency']
        pageSize?: number
    }
): SitemapIndexConfig {
    const priority = options?.priority || '0.8'
    const changeFrequency = options?.changeFrequency || 'monthly'
    const pageSize = options?.pageSize || 50000

    return {
        name: template,
        path,
        pageSize,
        priority,
        changeFrequency,
        totalCount: enabledJobTitles.length,
        getContent: async (page: number, limit: number) => {
            const offset = page * limit
            const jobs = enabledJobTitles.slice(offset, offset + limit)

            return jobs.map(job => ({
                url: `${BASE_URL}${path}/${job.slug}`,
                lastModified: new Date(),
                changeFreq: changeFrequency,
                priority: parseFloat(priority)
            }))
        }
    }
}

/**
 * HireNest Sitemap Configuration
 */
export const hirenestSitemapConfig: SitemapConfig = {
    baseUrl: BASE_URL,
    sitemaps: [
        {
            name: 'jobs',
            path: '/jobs-sitemap',
            pageSize: 50000,
            priority: '0.9',
            changeFrequency: 'daily',
            totalCount: enabledJobTitles.length + LOCATION_JOB_BOARDS.length,
            getContent: async (page: number, limit: number) => {
                const offset = page * limit

                // Combine regular job pages and location-specific pages
                const jobPages = enabledJobTitles.map(job => ({
                    url: `${BASE_URL}/jobs/${job.slug}`,
                    lastModified: new Date(),
                    changeFreq: 'daily' as const,
                    priority: 0.9
                }))

                const locationPages = LOCATION_JOB_BOARDS.map(loc => ({
                    url: `${BASE_URL}/jobs/${loc.jobSlug}/${loc.locationSlug}`,
                    lastModified: new Date(),
                    changeFreq: 'daily' as const,
                    priority: 0.8
                }))

                const allPages = [...jobPages, ...locationPages]
                return allPages.slice(offset, offset + limit)
            }
        },
        {
            name: 'interview-questions',
            path: '/interview-questions-sitemap',
            pageSize: 50000,
            priority: '0.8',
            changeFrequency: 'monthly',
            totalCount: enabledJobTitles.length,
            getContent: async (page: number, limit: number) => {
                const offset = page * limit
                const jobs = enabledJobTitles.slice(offset, offset + limit)

                return jobs.map(job => ({
                    url: `${BASE_URL}/interview-questions/${job.slug}`,
                    lastModified: new Date(),
                    changeFreq: 'monthly',
                    priority: 0.8
                }))
            }
        },
        {
            name: 'resume-keywords',
            path: '/resume-keywords-sitemap',
            pageSize: 50000,
            priority: '0.8',
            changeFrequency: 'monthly',
            totalCount: enabledJobTitles.length,
            getContent: async (page: number, limit: number) => {
                const offset = page * limit
                const jobs = enabledJobTitles.slice(offset, offset + limit)

                return jobs.map(job => ({
                    url: `${BASE_URL}/resume-keywords/${job.slug}`,
                    lastModified: new Date(),
                    changeFreq: 'monthly',
                    priority: 0.8
                }))
            }
        },
        {
            name: 'salary-guides',
            path: '/salary-sitemap',
            pageSize: 50000,
            priority: '0.7',
            changeFrequency: 'weekly',
            totalCount: enabledJobTitles.length,
            getContent: async (page: number, limit: number) => {
                const offset = page * limit
                const jobs = enabledJobTitles.slice(offset, offset + limit)

                return jobs.map(job => ({
                    url: `${BASE_URL}/salary/${job.slug}`,
                    lastModified: new Date(),
                    changeFreq: 'weekly',
                    priority: 0.7
                }))
            }
        },
        {
            name: 'cover-letters',
            path: '/cover-letter-sitemap',
            pageSize: 50000,
            priority: '0.7',
            changeFrequency: 'monthly',
            totalCount: enabledJobTitles.length,
            getContent: async (page: number, limit: number) => {
                const offset = page * limit
                const jobs = enabledJobTitles.slice(offset, offset + limit)

                return jobs.map(job => ({
                    url: `${BASE_URL}/cover-letter/${job.slug}`,
                    lastModified: new Date(),
                    changeFreq: 'monthly',
                    priority: 0.7
                }))
            }
        },
        {
            name: 'job-descriptions',
            path: '/job-description-sitemap',
            pageSize: 50000,
            priority: '0.7',
            changeFrequency: 'monthly',
            totalCount: enabledJobTitles.length,
            getContent: async (page: number, limit: number) => {
                const offset = page * limit
                const jobs = enabledJobTitles.slice(offset, offset + limit)

                return jobs.map(job => ({
                    url: `${BASE_URL}/job-description/${job.slug}`,
                    lastModified: new Date(),
                    changeFreq: 'monthly',
                    priority: 0.7
                }))
            }
        }
    ]
}

/**
 * Get all sitemap configurations
 */
export function getAllSitemapConfigs(): SitemapIndexConfig[] {
    return hirenestSitemapConfig.sitemaps
}

/**
 * Get sitemap config by name
 */
export function getSitemapConfig(name: string): SitemapIndexConfig | undefined {
    return hirenestSitemapConfig.sitemaps.find(config => config.name === name)
}
