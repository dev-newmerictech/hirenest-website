// scripts/extract-urls.ts
/**
 * Extract all URLs from the HireNest website
 * Generates a list of all URLs including main pages and programmatic SEO pages
 */

import { enabledJobTitles } from '../app/lib/programmatic-seo/enabled-job-titles'
import { writeFileSync } from 'fs'
import { join } from 'path'

const BASE_URL = 'https://hirenest.ai'

// Main pages from main-sitemap.xml/route.ts
const mainPages = [
  '',
  '/job-seeker',
  '/job-provider',
  '/ai-resume-builder',
  '/ai-candidate-ranking',
  '/smart-job-matching',
  '/career-insights',
  '/profile-optimization',
  '/skill-assessments',
  '/custom-assessments',
  '/quick-screening',
  '/verified-candidates',
  '/hiring-analytics',
  '/team-collaboration',
  '/fast-track-applications',
  '/about',
  '/careers',
  '/security',
  '/legal',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  '/refund-policy',
  // SEO sitemap page
  '/seo-sitemap',
  // Hub pages
  '/interview-questions',
  '/resume-keywords',
  '/salary',
  '/cover-letter',
  '/job-description',
]

// Programmatic SEO pages
const programmaticPages: string[] = []

console.log(`Generating URLs for ${enabledJobTitles.length} job titles...`)

enabledJobTitles.forEach(job => {
  programmaticPages.push(`/interview-questions/${job.slug}`)
  programmaticPages.push(`/resume-keywords/${job.slug}`)
  programmaticPages.push(`/salary/${job.slug}`)
  programmaticPages.push(`/cover-letter/${job.slug}`)
  programmaticPages.push(`/job-description/${job.slug}`)
})

// Combine all URLs
const allUrls = [
  ...mainPages.map(p => `${BASE_URL}${p}`),
  ...programmaticPages.map(p => `${BASE_URL}${p}`)
]

// Write to file
const outputPath = join(process.cwd(), 'scripts', 'all-urls.txt')
writeFileSync(outputPath, allUrls.join('\n'))

console.log(`\nExtracted ${allUrls.length} URLs`)
console.log(`  - Main pages: ${mainPages.length}`)
console.log(`  - Programmatic SEO pages: ${programmaticPages.length}`)
console.log(`\nSaved to: ${outputPath}`)
