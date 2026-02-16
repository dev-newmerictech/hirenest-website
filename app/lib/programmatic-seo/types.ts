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
