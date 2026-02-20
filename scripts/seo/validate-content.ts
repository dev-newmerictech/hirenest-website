// scripts/seo/validate-content.ts

/**
 * Build-time content validation script
 * Run this to validate all programmatic SEO pages before deployment
 */

import { getContentValidator } from '../../app/lib/seo/validation'
import { jobTitles } from '../../app/lib/programmatic-seo/job-titles'
import { jobTitleToSEOPageEntity, ContentBlock } from '../../app/lib/seo/models'

// Generate sample content blocks for a job
function generateSampleContent(jobTitle: string): ContentBlock[] {
    return [
        {
            id: 'heading-1',
            type: 'heading',
            content: `${jobTitle} Interview Questions`
        },
        {
            id: 'intro',
            type: 'paragraph',
            content: `Preparing for a ${jobTitle} interview requires thorough research and practice. This comprehensive guide covers the most commonly asked questions and provides expert-approved answers to help you succeed.`
        },
        {
            id: 'common-questions',
            type: 'qa',
            question: `What are the most common ${jobTitle} interview questions?`,
            answer: `The most common ${jobTitle} interview questions include "Tell me about yourself," "What are your strengths and weaknesses?" and "Why do you want to work here?" This guide covers all of these questions with detailed answers.`
        },
        {
            id: 'qa-2',
            type: 'qa',
            question: `How should I prepare for a ${jobTitle} interview?`,
            answer: `To prepare for your ${jobTitle} interview, research the company thoroughly, practice your answers using the STAR method, prepare questions to ask the interviewer, and review common technical questions relevant to the role.`
        },
        {
            id: 'qa-3',
            type: 'qa',
            question: `What technical skills are required for ${jobTitle} roles?`,
            answer: `${jobTitle} roles typically require strong technical skills in the relevant domain. This may include proficiency with specific tools, programming languages, or methodologies depending on the industry and company.`
        },
        {
            id: 'qa-4',
            type: 'qa',
            question: `What is the salary range for ${jobTitle} positions?`,
            answer: `${jobTitle} salaries vary based on experience, location, and industry. Research the market rate for your area and consider the total compensation package including benefits and bonuses.`
        },
        {
            id: 'qa-5',
            type: 'qa',
            question: `How do I stand out in a ${jobTitle} interview?`,
            answer: `To stand out in your ${jobTitle} interview, demonstrate specific examples of your accomplishments, show genuine enthusiasm for the company and role, ask thoughtful questions, and follow up with a thank-you note after the interview.`
        },
        {
            id: 'preparation-tips',
            type: 'heading',
            content: `${jobTitle} Interview Preparation Tips`
        },
        {
            id: 'tips-content',
            type: 'paragraph',
            content: `Use the STAR method (Situation, Task, Action, Result) to structure your behavioral interview answers. Research the company's products, services, culture, and recent news before your interview. Prepare a list of thoughtful questions to ask the interviewer about the role, team, and company. Practice your answers out loud to improve your delivery and confidence.`
        }
    ]
}

async function validateAllContent() {
    const validator = getContentValidator()

    console.log('🔍 Validating SEO pages...\n')

    // Generate page entities for all jobs
    const pages = jobTitles.map(job =>
        jobTitleToSEOPageEntity(
            job,
            'interview-questions',
            generateSampleContent(job.title)
        )
    )

    console.log(`📊 Analyzing ${pages.length} pages...\n`)

    const results = await validator.validateAllPages(pages)

    // Print summary
    console.log('='.repeat(50))
    console.log('VALIDATION SUMMARY')
    console.log('='.repeat(50))
    console.log(`✅ Valid:   ${results.valid}`)
    console.log(`❌ Invalid: ${results.invalid}`)
    console.log(`🔄 Orphans: ${results.orphans.length}`)
    console.log(`📈 Avg Score: ${Math.round(results.averageScore)}/100`)
    console.log('='.repeat(50))

    // Find critical issues
    const criticalPages = await validator.findCriticalPages(pages)

    if (criticalPages.length > 0) {
        console.log('\n⚠️  CRITICAL ISSUES FOUND:\n')
        for (const { page, issues } of criticalPages) {
            console.log(`  ${page.title} (${page.id})`)
            for (const issue of issues) {
                console.log(`    [${issue.severity.toUpperCase()}] ${issue.message}`)
            }
            console.log('')
        }
    }

    // Show validation warnings for sample pages
    if (results.invalid > 0) {
        console.log('\n⚠️  VALIDATION WARNINGS:\n')

        let shownWarnings = 0
        const maxWarnings = 5

        for (const [id, result] of results.results) {
            if (!result.isValid && shownWarnings < maxWarnings) {
                const page = pages.find(p => p.id === id)
                console.log(`  ${page?.title || id}:`)
                for (const issue of result.issues) {
                    console.log(`    [${issue.severity}] ${issue.code}: ${issue.message}`)
                }
                shownWarnings++
                console.log('')
            }
        }

        if (results.invalid > maxWarnings) {
            console.log(`  ... and ${results.invalid - maxWarnings} more pages with issues\n`)
        }
    }

    // Category breakdown
    console.log('\n📁 PAGES BY CATEGORY:\n')
    const byCategory = new Map<string, number>()
    for (const page of pages) {
        const cat = page.category || 'unknown'
        byCategory.set(cat, (byCategory.get(cat) || 0) + 1)
    }

    for (const [category, count] of Array.from(byCategory.entries()).sort((a, b) => b[1] - a[1])) {
        console.log(`  ${category}: ${count}`)
    }

    // Exit with error if critical issues found
    if (criticalPages.length > 0) {
        console.log('\n❌ Validation failed! Please fix critical issues before deploying.\n')
        process.exit(1)
    }

    if (results.invalid > 0) {
        console.log('\n⚠️  Some pages have validation issues. Review and improve content quality.\n')
        process.exit(1)
    }

    console.log('\n✅ All pages validated successfully!\n')
}

// Run validation
validateAllContent().catch(error => {
    console.error('Error running validation:', error)
    process.exit(1)
})
