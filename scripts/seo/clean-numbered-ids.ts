// scripts/seo/clean-numbered-ids.ts
/**
 * Clean numbered IDs from data files
 * Removes -2, -3, etc. suffixes from IDs while preserving legitimate ones
 */

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Files to clean
const files = [
    'app/lib/programmatic-seo/resume-keywords.ts',
    'app/lib/programmatic-seo/interview-questions.ts'
]

// Legitimate IDs that contain numbers but aren't duplicates
const legitimatePatterns = [
    /^3d/,
    /^10-key/,
    /^series-\d+$/,
    /^a-b-testing/,
    /^four-year/,
    /^c\+\+/,
    /^c-sharp/,
    /^node-js/,
    /^css\d+/,
    /^html\d+/,
    /^ipv4/,
    /^ipv6/,
    /^type-\d+$/,
    /^level-\d+$/,
    /^phase-\d+$/,
    /^step-\d+$/,
    /^part-\d+$/,
    /^q\d+/  // Like q1, q2, q3 for questions
]

function isLegitimateId(id: string): boolean {
    return legitimatePatterns.some(pattern => pattern.test(id))
}

function cleanId(id: string): string {
    // Check if this is a legitimate ID with numbers
    if (isLegitimateId(id)) {
        return id
    }
    // Remove -2, -3, etc. suffix
    return id.replace(/-\d+$/, '')
}

for (const filePath of files) {
    const fullPath = join(process.cwd(), filePath)
    let content = readFileSync(fullPath, 'utf-8')

    let originalContent = content
    let changes = 0

    // Replace IDs with numbered suffixes (but not legitimate ones)
    content = content.replace(/id:\s*'([^']*-\d+)'/g, (match, id) => {
        const cleaned = cleanId(id)
        if (cleaned !== id) {
            changes++
            return `id: '${cleaned}'`
        }
        return match
    })

    if (changes > 0) {
        writeFileSync(fullPath, content, 'utf-8')
        console.log(`✅ Cleaned ${changes} ID(s) in ${filePath}`)
    } else {
        console.log(`No changes needed in ${filePath}`)
    }
}

console.log('\n✅ ID cleanup complete')
