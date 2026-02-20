// scripts/seo/clean-resume-keywords.ts
/**
 * Clean up resume-keywords.ts
 * 1. Remove duplicate keyword entries
 * 2. Remove numbered suffixes from IDs
 * 3. Merge jobTitles arrays for duplicate keywords
 */

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const filePath = join(process.cwd(), 'app/lib/programmatic-seo/resume-keywords.ts')

// Read and parse the file
const content = readFileSync(filePath, 'utf-8')

// Find the array
const pattern = /export const resumeKeywords: ResumeKeyword\[] = \[/
const match = content.match(pattern)

if (!match) {
    console.error('Could not find resumeKeywords array')
    process.exit(1)
}

const exportStart = content.indexOf(match[0])
const arrayStart = exportStart + match[0].length - 1 // Position of [

// Find matching closing bracket
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

const arrayString = content.substring(arrayStart, arrayEnd + 1)
const parseFn = new Function('return ' + arrayString) as () => any[]
const keywords = parseFn()

console.log(`Total entries before cleanup: ${keywords.length}`)

// Clean up: merge duplicate keywords, clean IDs
const seen = new Map<string, any>()
const cleaned: any[] = []
const removed: any[] = []

for (const kw of keywords) {
    const key = kw.keyword.toLowerCase()

    if (seen.has(key)) {
        // Merge jobTitles
        const existing = seen.get(key)
        const newJobs = [...new Set([...existing.jobTitles, ...kw.jobTitles])]
        existing.jobTitles = newJobs
        removed.push(kw)
        continue
    }

    // Clean the ID by removing -2, -3, etc. suffixes (but keep legitimate ones like 3d-modeling)
    let cleanId = kw.id
    if (kw.id.match(/-\d+$/) && !kw.id.match(/^(3d|10-key|series-\d+|a-b-testing|four-year)/)) {
        cleanId = kw.id.replace(/-\d+$/, '')
    }

    const cleanedKw = { ...kw, id: cleanId }

    seen.set(key, cleanedKw)
    cleaned.push(cleanedKw)
}

console.log(`Total entries after cleanup: ${cleaned.length}`)
console.log(`Removed ${removed.length} duplicate entries`)

// Show some examples of removed duplicates
console.log('\nSample of removed duplicates:')
removed.slice(0, 5).forEach(kw => {
    console.log(`  - ${kw.keyword} (${kw.id})`)
})

// Generate new content
function formatEntry(kw: any): string {
    const jobs = kw.jobTitles.map((j: string) => `'${j}'`).join(', ')
    const parts = [
        `id: '${kw.id}'`,
        `keyword: '${kw.keyword}'`,
        `category: '${kw.category}'`,
        `jobTitles: [${jobs}]`
    ]
    if (kw.context) {
        parts.push(`context: '${kw.context}'`)
    }
    return `    { ${parts.join(', ')} }`
}

const newContent = `import { ResumeKeyword } from './types'

export const resumeKeywords: ResumeKeyword[] = [
${cleaned.map(formatEntry).join(',\n')}
];
`

writeFileSync(filePath, newContent, 'utf-8')

console.log('\n✅ Successfully cleaned resume-keywords.ts')
