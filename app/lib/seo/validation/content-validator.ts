// app/lib/seo/validation/content-validator.ts

import { SEOPageEntity, ContentBlock } from '../models/seo-page-entity'
import { ValidationIssue, ValidationWarning, ContentValidationResult, getValidationThreshold } from './validation-rules'
import { ISSUE_CODES } from '../core/constants'

/**
 * Content Quality Validator
 * Validates programmatic SEO pages meet minimum quality standards
 */
export class ContentValidator {
    private readonly defaultMinWordCount = 800
    private readonly defaultMinFAQCount = 5
    private readonly duplicateThreshold = 0.9 // 90% similarity

    /**
     * Validate page content meets minimum requirements
     */
    async validateContentDepth(page: SEOPageEntity): Promise<ContentValidationResult> {
        const issues: ValidationIssue[] = []
        const warnings: ValidationWarning[] = []

        const thresholds = getValidationThreshold(page.template)

        // Check word count
        const wordCount = this.countWords(page.content)
        if (wordCount < thresholds.minWordCount) {
            issues.push({
                severity: 'critical',
                code: ISSUE_CODES.THIN_CONTENT,
                message: `Page has only ${wordCount} words. Minimum: ${thresholds.minWordCount}`,
                affectedField: 'content',
                suggestion: `Add ${thresholds.minWordCount - wordCount} more words of quality content`
            })
        }

        // Check FAQ count
        const faqCount = page.content.filter(block => block.type === 'qa').length
        if (faqCount < thresholds.minFAQCount) {
            issues.push({
                severity: 'error',
                code: ISSUE_CODES.INSUFFICIENT_FAQS,
                message: `Page has only ${faqCount} FAQs. Minimum: ${thresholds.minFAQCount}`,
                affectedField: 'content',
                suggestion: `Add ${thresholds.minFAQCount - faqCount} more FAQs`
            })
        }

        // Check required sections
        const sections = page.content.map(block => block.id)
        for (const required of thresholds.requiredSections) {
            if (!sections.includes(required)) {
                issues.push({
                    severity: 'error',
                    code: ISSUE_CODES.MISSING_SECTION,
                    message: `Missing required section: ${required}`,
                    affectedField: 'content',
                    suggestion: `Add the ${required} section to this page`
                })
            }
        }

        // Check title length
        if (page.title.length < thresholds.minTitleLength) {
            issues.push({
                severity: 'error',
                code: ISSUE_CODES.SHORT_TITLE,
                message: `Title is only ${page.title.length} chars. Minimum: ${thresholds.minTitleLength}`,
                affectedField: 'title',
                suggestion: 'Expand title with more descriptive keywords'
            })
        }

        // Check description length
        if (page.description.length < thresholds.minDescriptionLength) {
            issues.push({
                severity: 'error',
                code: ISSUE_CODES.SHORT_DESCRIPTION,
                message: `Description is only ${page.description.length} chars. Minimum: ${thresholds.minDescriptionLength}`,
                affectedField: 'description',
                suggestion: 'Expand description with more detail about the page content'
            })
        }

        // Check schema presence
        if (page.schemaTypes.length === 0) {
            warnings.push({
                severity: 'warning',
                code: ISSUE_CODES.MISSING_SCHEMA,
                message: 'Page has no structured data schema',
                affectedField: 'schema',
                suggestion: 'Add FAQPage and Article schemas'
            })
        }

        // Check internal links
        if (page.relatedPages.length < thresholds.minInternalLinks) {
            warnings.push({
                severity: 'warning',
                code: ISSUE_CODES.MISSING_INTERNAL_LINKS,
                message: `Page has only ${page.relatedPages.length} internal links. Recommended: ${thresholds.minInternalLinks}`,
                affectedField: 'links',
                suggestion: 'Add more related page links'
            })
        }

        const score = this.calculateQualityScore(page, issues, warnings)

        return {
            isValid: issues.filter(i => i.severity === 'critical').length === 0,
            score,
            issues,
            warnings
        }
    }

    /**
     * Detect near-duplicate pages using content hashing
     */
    async detectDuplicates(
        page: SEOPageEntity,
        allPages: SEOPageEntity[]
    ): Promise<{
        duplicates: Array<{ page: SEOPageEntity; similarity: number }>
        canonical: SEOPageEntity | null
    }> {
        const pageHash = this.generateContentHash(page.content)
        const duplicates: Array<{ page: SEOPageEntity; similarity: number }> = []

        for (const candidate of allPages) {
            if (candidate.id === page.id) continue

            const candidateHash = this.generateContentHash(candidate.content)
            const similarity = this.calculateSimilarity(pageHash, candidateHash)

            if (similarity >= this.duplicateThreshold) {
                duplicates.push({ page: candidate, similarity })
            }
        }

        // Determine canonical (earliest created, highest authority)
        let canonical: SEOPageEntity | null = null
        if (duplicates.length > 0) {
            const allDuplicates = [page, ...duplicates.map(d => d.page)]
            canonical = allDuplicates.sort((a, b) =>
                a.createdAt.getTime() - b.createdAt.getTime()
            )[0]
        }

        return { duplicates, canonical }
    }

    /**
     * Detect keyword cannibalization
     */
    async detectKeywordCannibalization(
        page: SEOPageEntity,
        allPages: SEOPageEntity[]
    ): Promise<Array<{ page: SEOPageEntity; overlappingKeywords: string[] }>> {
        const conflicts: Array<{ page: SEOPageEntity; overlappingKeywords: string[] }> = []

        for (const candidate of allPages) {
            if (candidate.id === page.id) continue
            if (candidate.template !== page.template) continue

            // Check primary keyword overlap
            const primaryOverlap = this.getKeywordOverlap(
                [page.primaryKeyword],
                [candidate.primaryKeyword]
            )

            // Check secondary keyword overlap
            const secondaryOverlap = this.getKeywordOverlap(
                page.secondaryKeywords,
                candidate.secondaryKeywords
            )

            const allOverlapping = [...primaryOverlap, ...secondaryOverlap]

            if (allOverlapping.length > 0) {
                conflicts.push({
                    page: candidate,
                    overlappingKeywords: allOverlapping
                })
            }
        }

        return conflicts
    }

    /**
     * Calculate content quality score (0-100)
     */
    calculateQualityScore(
        page: SEOPageEntity,
        issues: ValidationIssue[] = [],
        warnings: ValidationIssue[] = []
    ): number {
        let score = 100

        // Deduct points for issues
        for (const issue of issues) {
            switch (issue.severity) {
                case 'critical':
                    score -= 30
                    break
                case 'error':
                    score -= 15
                    break
                case 'warning':
                    score -= 5
                    break
            }
        }

        // Deduct for warnings
        score -= warnings.length * 3

        // Bonus for content depth
        const wordCount = this.countWords(page.content)
        if (wordCount > 1500) score += 5
        if (wordCount > 2500) score += 5

        // Bonus for FAQ count
        const faqCount = page.content.filter(block => block.type === 'qa').length
        if (faqCount > 10) score += 5

        // Bonus for internal links
        if (page.relatedPages.length > 10) score += 5

        return Math.max(0, Math.min(100, score))
    }

    /**
     * Validate all pages and return report
     */
    async validateAllPages(pages: SEOPageEntity[]): Promise<{
        valid: number
        invalid: number
        results: Map<string, ContentValidationResult>
        orphans: SEOPageEntity[]
        averageScore: number
    }> {
        const results = new Map<string, ContentValidationResult>()
        let valid = 0
        let invalid = 0
        let totalScore = 0

        for (const page of pages) {
            const result = await this.validateContentDepth(page)
            results.set(page.id, result)
            totalScore += result.score

            if (result.isValid) {
                valid++
            } else {
                invalid++
            }
        }

        // Find orphans (no internal links)
        const orphans = pages.filter(page => page.relatedPages.length === 0)

        return {
            valid,
            invalid,
            results,
            orphans,
            averageScore: pages.length > 0 ? totalScore / pages.length : 0
        }
    }

    /**
     * Find pages with critical issues
     */
    async findCriticalPages(pages: SEOPageEntity[]): Promise<Array<{
        page: SEOPageEntity
        issues: ValidationIssue[]
    }>> {
        const critical: Array<{ page: SEOPageEntity; issues: ValidationIssue[] }> = []

        for (const page of pages) {
            const result = await this.validateContentDepth(page)
            const criticalIssues = result.issues.filter(i => i.severity === 'critical')

            if (criticalIssues.length > 0) {
                critical.push({ page, issues: criticalIssues })
            }
        }

        return critical
    }

    // Private helper methods

    private countWords(content: ContentBlock[]): number {
        return content.reduce((total, block) => {
            let text = ''

            switch (block.type) {
                case 'heading':
                case 'paragraph':
                    text = block.content || ''
                    break
                case 'qa':
                    text = `${block.question || ''} ${block.answer || ''}`
                    break
                case 'list':
                    text = block.items?.join(' ') || ''
                    break
                case 'section':
                case 'card':
                case 'stats':
                    // These are structural, count minimal words
                    text = ''
                    break
            }

            return total + text.split(/\s+/).filter(w => w.length > 0).length
        }, 0)
    }

    private generateContentHash(content: ContentBlock[]): string {
        // Normalize and hash content for comparison
        const normalized = content
            .map(block => {
                let text = ''
                switch (block.type) {
                    case 'heading':
                    case 'paragraph':
                        text = (block.content || '').toLowerCase()
                        break
                    case 'qa':
                        text = `${block.question || ''} ${block.answer || ''}`.toLowerCase()
                        break
                    case 'list':
                        text = (block.items || []).join(' ').toLowerCase()
                        break
                }
                return text.replace(/\s+/g, ' ').trim()
            })
            .join('|')

        // Simple hash (in production, use crypto)
        let hash = 0
        for (let i = 0; i < normalized.length; i++) {
            const char = normalized.charCodeAt(i)
            hash = ((hash << 5) - hash) + char
            hash = hash & hash // Convert to 32bit integer
        }
        return hash.toString(36)
    }

    private calculateSimilarity(hashA: string, hashB: string): number {
        if (hashA === hashB) return 1

        // Simplified similarity check
        const arrayA = hashA.split('')
        const arrayB = hashB.split('')
        const intersection = arrayA.filter(char => arrayB.includes(char))
        const union = new Set([...arrayA, ...arrayB])

        return union.size > 0 ? intersection.length / union.size : 0
    }

    private getKeywordOverlap(keywordsA: string[], keywordsB: string[]): string[] {
        const normalizedA = keywordsA.map(k => k.toLowerCase().trim())
        const normalizedB = keywordsB.map(k => k.toLowerCase().trim())

        return normalizedA.filter(k => normalizedB.includes(k))
    }
}

/**
 * Singleton instance
 */
let validatorInstance: ContentValidator | null = null

export function getContentValidator(): ContentValidator {
    if (!validatorInstance) {
        validatorInstance = new ContentValidator()
    }
    return validatorInstance
}
