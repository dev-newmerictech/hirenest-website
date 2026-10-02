// app/lib/seo/validation/validation-rules.ts

import { ISSUE_CODES, IssueCode, IssueSeverity } from '../core/constants'

/**
 * Validation issue types and severity
 */

export interface ValidationIssue {
    severity: IssueSeverity
    code: string
    message: string
    affectedField: string
    suggestion?: string
}

export interface ValidationWarning extends ValidationIssue {
    severity: 'warning'
}

export interface ContentValidationResult {
    isValid: boolean
    score: number  // 0-100
    issues: ValidationIssue[]
    warnings: ValidationWarning[]
}

/**
 * Validation thresholds by template type
 */
export const VALIDATION_THRESHOLDS = {
    'interview-questions': {
        minWordCount: 800,
        minFAQCount: 5,
        requiredSections: ['common-questions', 'preparation-tips'],
        minTitleLength: 30,
        minDescriptionLength: 120,
        minInternalLinks: 3
    },
    'resume-keywords': {
        minWordCount: 600,
        minFAQCount: 3,
        requiredSections: ['skills-section', 'keywords-list'],
        minTitleLength: 30,
        minDescriptionLength: 120,
        minInternalLinks: 3
    },
    'salary-guide': {
        minWordCount: 700,
        minFAQCount: 4,
        requiredSections: ['salary-range', 'factors'],
        minTitleLength: 30,
        minDescriptionLength: 120,
        minInternalLinks: 3
    },
    'cover-letter': {
        minWordCount: 500,
        minFAQCount: 3,
        requiredSections: ['template', 'tips'],
        minTitleLength: 30,
        minDescriptionLength: 120,
        minInternalLinks: 3
    },
    'job-description': {
        minWordCount: 600,
        minFAQCount: 3,
        requiredSections: ['responsibilities', 'requirements'],
        minTitleLength: 30,
        minDescriptionLength: 120,
        minInternalLinks: 3
    },
    'category-hub': {
        minWordCount: 400,
        minFAQCount: 0,
        requiredSections: [],
        minTitleLength: 20,
        minDescriptionLength: 100,
        minInternalLinks: 5
    },
    'location-page': {
        minWordCount: 400,
        minFAQCount: 0,
        requiredSections: [],
        minTitleLength: 20,
        minDescriptionLength: 100,
        minInternalLinks: 5
    }
} as const

/**
 * Get validation threshold for a template
 */
export function getValidationThreshold(template: string) {
    return VALIDATION_THRESHOLDS[template as keyof typeof VALIDATION_THRESHOLDS] || {
        minWordCount: 500,
        minFAQCount: 3,
        requiredSections: [],
        minTitleLength: 30,
        minDescriptionLength: 120,
        minInternalLinks: 3
    }
}

/**
 * Create a validation issue
 */
export function createValidationIssue(
    severity: IssueSeverity,
    code: IssueCode,
    message: string,
    affectedField: string,
    suggestion?: string
): ValidationIssue {
    return {
        severity,
        code,
        message,
        affectedField,
        suggestion
    }
}

/**
 * Format validation result for display
 */
export function formatValidationResult(result: ContentValidationResult): string {
    const lines: string[] = []

    lines.push(`Valid: ${result.isValid}`)
    lines.push(`Score: ${result.score}/100`)

    if (result.issues.length > 0) {
        lines.push('\nIssues:')
        for (const issue of result.issues) {
            lines.push(`  [${issue.severity.toUpperCase()}] ${issue.code}: ${issue.message}`)
            if (issue.suggestion) {
                lines.push(`    Suggestion: ${issue.suggestion}`)
            }
        }
    }

    if (result.warnings.length > 0) {
        lines.push('\nWarnings:')
        for (const warning of result.warnings) {
            lines.push(`  [WARNING] ${warning.code}: ${warning.message}`)
            if (warning.suggestion) {
                lines.push(`    Suggestion: ${warning.suggestion}`)
            }
        }
    }

    return lines.join('\n')
}
