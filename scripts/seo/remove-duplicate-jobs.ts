// scripts/seo/remove-duplicate-jobs.ts
/**
 * Remove duplicate job titles with numbered slugs from job-titles.ts
 * Keeps only the first occurrence of each unique job title
 * Also removes numbered suffixes from slugs and IDs
 */

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const filePath = join(process.cwd(), 'app/lib/programmatic-seo/job-titles.ts')

// Read the file
const content = readFileSync(filePath, 'utf-8')

// Find the start of the array - look for "export const jobTitles: JobTitle[] = ["
const pattern = /export const jobTitles: JobTitle\[\] = \[/
const match = content.match(pattern)

if (!match) {
    console.error('Could not find jobTitles array in file')
    process.exit(1)
}

const exportStart = content.indexOf(match[0])
const arrayStart = exportStart + match[0].length - 1 // Position of the [

// Find the matching closing bracket
let bracketCount = 0
let arrayEnd = 0

for (let i = arrayStart; i < content.length; i++) {
    if (content[i] === '[') bracketCount++
    else if (content[i] === ']') {
        bracketCount--
        if (bracketCount === 0) {
            arrayEnd = i
            break
        }
    }
}

// Extract just the array string
const arrayString = content.substring(arrayStart, arrayEnd + 1)

// Parse using Function constructor
const parseArray = new Function('return ' + arrayString) as () => any[]
const jobTitles = parseArray()

console.log(`Total entries before deduplication: ${jobTitles.length}`)

// Track seen titles and slug conflicts
const seen = new Set<string>()
const seenSlugs = new Set<string>()
const cleanedJobs: any[] = []
const removed: any[] = []

// Function to clean a slug by removing numbered suffix
function cleanSlug(slug: string): string {
    return slug.replace(/-\d+$/, '')
}

// Function to clean an ID by removing numbered suffix
function cleanId(id: string): string {
    return id.replace(/-\d+$/, '')
}

// Build cleaned array - keep first occurrence of each title
for (const job of jobTitles) {
    const normalisedTitle = job.title.toLowerCase().trim()
    const cleanedSlug = cleanSlug(job.slug)

    // Skip if this title was already seen
    if (seen.has(normalisedTitle)) {
        removed.push(job)
        continue
    }

    // Clean up the slug and ID
    const cleanedJob = {
        ...job,
        id: cleanId(job.id),
        slug: cleanedSlug
    }

    // Check for slug conflicts after cleaning
    if (seenSlugs.has(cleanedSlug)) {
        // Add a suffix to make it unique
        let counter = 2
        let newSlug = cleanedSlug
        while (seenSlugs.has(newSlug)) {
            newSlug = `${cleanedSlug}-${counter}`
            counter++
        }
        cleanedJob.slug = newSlug
        cleanedJob.id = newSlug
    }

    seen.add(normalisedTitle)
    seenSlugs.add(cleanedJob.slug)
    cleanedJobs.push(cleanedJob)
}

console.log(`Total entries after deduplication: ${cleanedJobs.length}`)
console.log(`Removed ${removed.length} duplicate entries`)

// Show some examples of removed duplicates
console.log('\nSample of removed duplicates (first 10):')
removed.slice(0, 10).forEach(job => {
    const slugSuffix = job.slug.match(/-\d+$/) ? job.slug.match(/-\d+$/)![0] : ''
    console.log(`  - ${job.title} (${job.slug}) [suffix: ${slugSuffix || 'none'}]`)
})

// Show jobs that had their slugs cleaned
const cleanedSlugs = cleanedJobs.filter(j => j.slug !== j.slug.replace(/-\d+$/, '') && j.slug.match(/-\d+$/))
if (cleanedSlugs.length > 0) {
    console.log(`\nEntries with slug conflicts that needed renumbering (${cleanedSlugs.length}):`)
    cleanedSlugs.slice(0, 5).forEach(job => {
        console.log(`  - ${job.title} (${job.slug})`)
    })
}

// Generate the new file content
function formatJobEntry(job: any): string {
    const aliases = job.aliases.map((a: string) => `'${a}'`).join(', ')
    const avgSalary = job.averageSalary ?? 'undefined'
    const growth = job.growthRate ?? 'undefined'
    return `    {
        id: '${job.id}',
        title: '${job.title}',
        slug: '${job.slug}',
        category: '${job.category}',
        aliases: [${aliases}],
        averageSalary: ${avgSalary},
        growthRate: ${growth}
    }`
}

// Find the end of the array to preserve content after it
const endMarker = '];\n\nexport function'
const endMarkerIndex = content.indexOf(endMarker)

let afterArray = ''
if (endMarkerIndex !== -1) {
    afterArray = content.substring(endMarkerIndex + 2) // Skip "];"
} else {
    // Fallback: just take everything after the array closing bracket
    afterArray = content.substring(arrayEnd + 1)
}

const newContent = `import { JobTitle } from './types'

export const jobTitles: JobTitle[] = [
${cleanedJobs.map(formatJobEntry).join(',\n')}
];

${afterArray}
`

// Write the cleaned file
writeFileSync(filePath, newContent, 'utf-8')

console.log('\n✅ Successfully cleaned job-titles.ts')
console.log(`   Removed ${removed.length} duplicate entries`)
console.log(`   Kept ${cleanedJobs.length} unique job titles`)
console.log(`   Cleaned numbered suffixes from slugs and IDs`)
