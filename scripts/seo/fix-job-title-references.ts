// scripts/seo/fix-job-title-references.ts
/**
 * Fix job title slug references in data files
 * Updates references like 'paralegal-2' to 'paralegal' based on the cleaned job-titles.ts
 */

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

async function main() {
    // Import the cleaned job titles
    const { jobTitles } = await import('../../app/lib/programmatic-seo/job-titles')

    // Create a mapping of old numbered slugs to clean slugs
    const slugMap = new Map<string, string>()

    for (const job of jobTitles) {
        const baseSlug = job.slug.replace(/-\d+$/, '')
        if (baseSlug !== job.slug) {
            // This job still has a number, skip
            continue
        }
        // Map any numbered variant to this base
        for (let i = 2; i <= 10; i++) {
            slugMap.set(`${baseSlug}-${i}`, job.slug)
        }
    }

    console.log(`Built slug map with ${slugMap.size} entries`)
    console.log('Sample mappings:', Array.from(slugMap.entries()).slice(0, 5))

    // Files to fix
    const filesToFix = [
        'app/lib/programmatic-seo/resume-keywords.ts',
        'app/lib/programmatic-seo/interview-questions.ts'
    ]

    for (const filePath of filesToFix) {
        const fullPath = join(process.cwd(), filePath)
        let content = readFileSync(fullPath, 'utf-8')
        let modified = false
        let changes = 0

        // Replace job title references in jobTitles arrays
        const originalContent = content
        content = content.replace(/jobTitles:\s*\[([^\]]*(?:\[[^\]]*\][^,\]]*,?\s*)*)\]/g, (match) => {
            // Extract the array content
            const arrayMatch = match.match(/jobTitles:\s*\[(.*)\]/s)
            if (!arrayMatch) return match

            const arrayContent = arrayMatch[1]
            const slugs = arrayContent.match(/'([^']+)'/g)

            if (!slugs) return match

            const newSlugs = slugs.map(slugRef => {
                const slug = slugRef.slice(1, -1) // Remove quotes
                if (slugMap.has(slug)) {
                    modified = true
                    changes++
                    return `'${slugMap.get(slug)}'`
                }
                return slugRef
            })

            return `jobTitles: [${newSlugs.join(', ')}]`
        })

        if (modified) {
            writeFileSync(fullPath, content, 'utf-8')
            console.log(`✅ Fixed ${changes} references in ${filePath}`)
        } else {
            console.log(`No changes needed in ${filePath}`)
        }
    }
}

main().catch(console.error)
