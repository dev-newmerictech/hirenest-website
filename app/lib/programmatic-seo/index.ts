// Programmatic SEO Library Index
// Exports all programmatic SEO data and utilities for easy importing

export { jobTitles, getJobBySlug, getJobsByCategory, searchJobs } from './job-titles'
export { resumeKeywords, getKeywordsForJob, getKeywordsByCategory } from './resume-keywords'
export {
    interviewQuestions,
    getQuestionsForJob,
    getQuestionsByCategory
} from './interview-questions'

// Job board module
export {
    getJobListingsBySlug,
    getFilteredJobListings,
    getJobStatistics,
    getFeaturedJobs,
    getAllJobBoardPages,
    getJobBoardPageBySlug,
    getJobBoardPagesByCategory,
    LOCATION_JOB_BOARDS,
    INDUSTRY_JOB_BOARDS,
    SUPPORTED_LOCATIONS
} from './job-board'

export type {
    JobTitle,
    JobCategory,
    Location,
    InterviewQuestion,
    QuestionCategory,
    ResumeKeyword,
    KeywordCategory,
    CareerComparison,
    PageMetadata,
    JobListing,
    JobLocation,
    SalaryRange,
    JobType,
    ExperienceLevel,
    JobFilters,
    JobListingsResponse,
    JobBoardPage,
    LocationJobBoard,
    IndustryJobBoard,
    JobStatistics
} from './types'
