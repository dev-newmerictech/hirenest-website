// app/lib/seo/core/schema-builder-factory.ts

/**
 * Composable Schema Builder Factory
 * Provides type-safe schema.org builders that can be composed together
 */

const BASE_URL = 'https://hirenest.ai'

export interface SchemaBuilder {
    build(): Record<string, any>
}

/**
 * Article Schema Builder
 */
export class ArticleSchemaBuilder implements SchemaBuilder {
    private data: {
        headline: string
        description: string
        image?: string
        datePublished?: string
        dateModified?: string
        author?: string
        url?: string
    }

    constructor(data: ArticleSchemaBuilder['data']) {
        this.data = data
    }

    build(): Record<string, any> {
        return {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: this.data.headline,
            description: this.data.description,
            image: this.data.image || `${BASE_URL}/og-image.png`,
            author: {
                '@type': 'Organization',
                name: this.data.author || 'Hirenest',
                url: BASE_URL
            },
            publisher: {
                '@type': 'Organization',
                name: 'Hirenest',
                logo: {
                    '@type': 'ImageObject',
                    url: `${BASE_URL}/HpLogo.svg`
                }
            },
            datePublished: this.data.datePublished || '2024-01-01T00:00:00.000Z',
            dateModified: this.data.dateModified || new Date().toISOString(),
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': this.data.url || BASE_URL
            }
        }
    }
}

/**
 * FAQ Schema Builder
 */
export class FAQSchemaBuilder implements SchemaBuilder {
    private faqs: Array<{ question: string; answer: string }>

    constructor(faqs: FAQSchemaBuilder['faqs']) {
        this.faqs = faqs
    }

    build(): Record<string, any> {
        const faqEntities = this.faqs.map(faq => {
            return {
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }
        })

        return {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqEntities
        }
    }
}

/**
 * Breadcrumb Schema Builder
 */
export class BreadcrumbSchemaBuilder implements SchemaBuilder {
    private items: Array<{ name: string; url?: string }>

    constructor(items: BreadcrumbSchemaBuilder['items']) {
        this.items = items
    }

    build(): Record<string, any> {
        return {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: this.items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                ...(item.url && { item: item.url })
            }))
        }
    }
}

/**
 * WebPage Schema Builder
 */
export class WebPageSchemaBuilder implements SchemaBuilder {
    private data: {
        name: string
        description: string
        url: string
        datePublished?: string
        dateModified?: string
    }

    constructor(data: WebPageSchemaBuilder['data']) {
        this.data = data
    }

    build(): Record<string, any> {
        const schema: Record<string, any> = {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: this.data.name,
            description: this.data.description,
            url: this.data.url
        }

        if (this.data.datePublished) {
            schema.datePublished = this.data.datePublished
        }

        if (this.data.dateModified) {
            schema.dateModified = this.data.dateModified
        }

        return schema
    }
}

/**
 * Organization Schema Builder
 */
export class OrganizationSchemaBuilder implements SchemaBuilder {
    private data: {
        name?: string
        url?: string
        logo?: string
        description?: string
    }

    constructor(data: OrganizationSchemaBuilder['data'] = {}) {
        this.data = {
            name: 'Hirenest',
            url: BASE_URL,
            logo: `${BASE_URL}/HpLogo.svg`,
            description: 'AI-powered platform connecting job seekers with employers.',
            ...data
        }
    }

    build(): Record<string, any> {
        return {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: this.data.name,
            url: this.data.url,
            logo: this.data.logo,
            description: this.data.description,
            sameAs: [
                'https://twitter.com/hirenest',
                'https://linkedin.com/company/hirenest'
            ],
            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    contactType: 'Customer Support',
                    email: 'support@hirenest.com',
                    areaServed: 'Worldwide',
                    availableLanguage: ['English']
                }
            ]
        }
    }
}

/**
 * JobPosting Schema Builder
 */
export class JobPostingSchemaBuilder implements SchemaBuilder {
    private data: {
        title: string
        description: string
        datePosted: string
        validThrough: string
        employmentType?: string
        salary?: {
            minValue: number
            maxValue: number
            currency: string
        }
    }

    constructor(data: JobPostingSchemaBuilder['data']) {
        this.data = data
    }

    build(): Record<string, any> {
        const schema: Record<string, any> = {
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: this.data.title,
            description: this.data.description,
            datePosted: this.data.datePosted,
            validThrough: this.data.validThrough,
            hiringOrganization: {
                '@type': 'Organization',
                name: 'Hirenest',
                sameAs: BASE_URL,
                logo: `${BASE_URL}/HpLogo.svg`
            },
            jobLocation: {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'US'
                }
            }
        }

        if (this.data.employmentType) {
            schema.employmentType = this.data.employmentType
        }

        if (this.data.salary) {
            schema.baseSalary = {
                '@type': 'MonetaryAmount',
                minValue: this.data.salary.minValue,
                maxValue: this.data.salary.maxValue,
                currency: this.data.salary.currency,
                unitText: 'YEAR'
            }
        }

        return schema
    }
}

/**
 * Quick builder factory
 */
export const schemaBuilders = {
    article: (data: ConstructorParameters<typeof ArticleSchemaBuilder>[0]) =>
        new ArticleSchemaBuilder(data),

    faq: (faqs: ConstructorParameters<typeof FAQSchemaBuilder>[0]) =>
        new FAQSchemaBuilder(faqs),

    breadcrumb: (items: ConstructorParameters<typeof BreadcrumbSchemaBuilder>[0]) =>
        new BreadcrumbSchemaBuilder(items),

    webpage: (data: ConstructorParameters<typeof WebPageSchemaBuilder>[0]) =>
        new WebPageSchemaBuilder(data),

    organization: (data?: ConstructorParameters<typeof OrganizationSchemaBuilder>[0]) =>
        new OrganizationSchemaBuilder(data),

    jobPosting: (data: ConstructorParameters<typeof JobPostingSchemaBuilder>[0]) =>
        new JobPostingSchemaBuilder(data)
}

/**
 * Build multiple schemas and return as array
 */
export function buildSchemas(...builders: SchemaBuilder[]): Record<string, any>[] {
    return builders.map(builder => builder.build())
}

/**
 * Generate all standard schemas for a programmatic SEO page
 * Note: BreadcrumbList is excluded here since BreadcrumbNav component provides it
 */
export interface PageSchemaOptions {
    title: string
    description: string
    url: string
    faqs: Array<{ question: string; answer: string }>
    breadcrumbs?: Array<{ name: string; url?: string }>  // Optional, not used by default
    includeBreadcrumbSchema?: boolean  // Set to true if not using BreadcrumbNav component
    datePublished?: string
    dateModified?: string
}

export function buildPageSchemas(options: PageSchemaOptions): Record<string, any>[] {
    const builders: SchemaBuilder[] = [
        new ArticleSchemaBuilder({
            headline: options.title,
            description: options.description,
            url: options.url,
            datePublished: options.datePublished,
            dateModified: options.dateModified
        }),
        new FAQSchemaBuilder(options.faqs),
        new WebPageSchemaBuilder({
            name: options.title,
            description: options.description,
            url: options.url,
            dateModified: options.dateModified
        })
    ]

    // Only include BreadcrumbSchema if explicitly requested
    // (when not using the BreadcrumbNav component which provides its own)
    if (options.includeBreadcrumbSchema && options.breadcrumbs) {
        builders.push(new BreadcrumbSchemaBuilder(options.breadcrumbs))
    }

    return buildSchemas(...builders)
}

/**
 * Generate JSON-LD script tag content
 */
export function generateJsonLd(schemas: Record<string, any>[]): string {
    return schemas.map(schema => JSON.stringify(schema)).join('\n')
}
