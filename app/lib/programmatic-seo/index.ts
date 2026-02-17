// Programmatic SEO Library Index
// Exports all programmatic SEO data and utilities for easy importing

export { jobTitles, getJobBySlug, getJobsByCategory, searchJobs } from './job-titles'
export { resumeKeywords, getKeywordsForJob, getKeywordsByCategory } from './resume-keywords'
export {
    interviewQuestions,
    getQuestionsForJob,
    getQuestionsByCategory
} from './interview-questions'

export type {
    JobTitle,
    JobCategory,
    Location,
    InterviewQuestion,
    QuestionCategory,
    ResumeKeyword,
    KeywordCategory,
    CareerComparison,
    PageMetadata
} from './types'
