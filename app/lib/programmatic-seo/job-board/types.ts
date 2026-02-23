// Job Board Types for Programmatic SEO

import { ExperienceLevel, JobCategory, JobType } from '../types'

// Re-export types from parent types to avoid duplication
export type {
    JobCategory,
    JobType,
    ExperienceLevel
} from '../types'

/**
 * Job Listing interface for individual job postings
 */
export interface JobListing {
    id: string
    title: string
    slug: string
    companyName: string
    companySlug: string
    location: JobLocation
    jobType: JobType
    experienceLevel: ExperienceLevel
    salaryRange?: SalaryRange
    description: string
    requirements: string[]
    benefits: string[]
    skills: string[]
    postedDate: string
    applicationUrl?: string
    isRemote: boolean
    featured?: boolean
    category: JobCategory
}

/**
 * Job location with support for remote and hybrid
 */
export interface JobLocation {
    city?: string
    state?: string
    country: string
    isRemote: boolean
    isHybrid: boolean
}

/**
 * Salary range for job listings
 */
export interface SalaryRange {
    min: number
    max: number
    currency: string
    period: 'hourly' | 'monthly' | 'yearly'
}

/**
 * Job filter options for search functionality
 */
export interface JobFilters {
    category?: JobCategory
    jobType?: JobType
    experienceLevel?: ExperienceLevel
    location?: string
    isRemote?: boolean
    salaryMin?: number
    salaryMax?: number
    keyword?: string
}

/**
 * Paginated job listings response
 */
export interface JobListingsResponse {
    jobs: JobListing[]
    total: number
    page: number
    pageSize: number
    hasMore: boolean
}

/**
 * Job board page metadata
 */
export interface JobBoardPage {
    slug: string
    title: string
    description: string
    category: JobCategory
    totalJobs: number
    featuredJobs: number
    seoKeywords: string[]
}

/**
 * Location-specific job board page
 */
export interface LocationJobBoard {
    locationSlug: string
    locationName: string
    jobSlug: string
    jobTitle: string
    totalJobs: number
}

/**
 * Industry-specific job board page
 */
export interface IndustryJobBoard {
    industrySlug: string
    industryName: string
    jobs: Array<{
        slug: string
        title: string
        count: number
    }>
}

/**
 * Job posting statistics for display
 */
export interface JobStatistics {
    totalActiveJobs: number
    newJobsThisWeek: number
    companiesHiring: number
    averageSalary?: {
        min: number
        max: number
    }
}
