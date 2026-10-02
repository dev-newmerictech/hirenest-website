// Programmatic SEO Types

export interface JobTitle {
    id: string
    title: string
    slug: string
    category: JobCategory
    aliases: string[]
    averageSalary?: number
    growthRate?: number
}

export type JobCategory =
    | 'technology'
    | 'marketing'
    | 'sales'
    | 'healthcare'
    | 'finance'
    | 'hr'
    | 'admin'
    | 'customer-service'
    | 'design'
    | 'engineering'
    | 'legal'
    | 'education'
    | 'real-estate'
    | 'skilled-trades'
    | 'hospitality'
    | 'transportation'

export interface Location {
    id: string
    name: string
    slug: string
    state: string
    stateCode: string
    country: string
    type: 'city' | 'state'
    population?: number
}

export interface InterviewQuestion {
    id: string
    question: string
    answer: string
    category: QuestionCategory
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    jobTitles: string[] // Array of job title slugs
}

export type QuestionCategory =
    | 'behavioral'
    | 'technical'
    | 'situational'
    | 'background'
    | 'company-fit'
    | 'general'

export interface ResumeKeyword {
    id: string
    keyword: string
    category: KeywordCategory
    jobTitles: string[] // Array of job title slugs
    context?: string
}

export type KeywordCategory =
    | 'hard-skill'
    | 'soft-skill'
    | 'tool'
    | 'certification'
    | 'action-verb'
    | 'industry-term'

export interface CareerComparison {
    roleA: string
    roleB: string
    differences: string[]
    similarities: string[]
    salaryComparison: string
    careerPath: string
}

export interface PageMetadata {
    title: string
    description: string
    keywords: string[]
    heading: string
    subheading?: string
}

// Job Board Types

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
 * Job type classification
 */
export type JobType =
    | 'full-time'
    | 'part-time'
    | 'contract'
    | 'temporary'
    | 'internship'
    | 'freelance'

/**
 * Experience level categories
 */
export type ExperienceLevel =
    | 'entry-level'
    | 'mid-level'
    | 'senior-level'
    | 'lead'
    | 'executive'

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
