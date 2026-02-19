import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
    Box, HStack,
    Link as ChakraLink,
    Text,
} from '@chakra-ui/react'
import { SalaryHero } from '../../components/programmatic-seo/SalaryHero'
import { SalaryContent } from '../../components/programmatic-seo/SalaryContent'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'
import { getJobBySlug } from '../../lib/programmatic-seo/job-titles'
import { generatePageMetadata } from '../../lib/metadata'
import Link from 'next/link'
// New SEO components
import { JsonLdSchema, BreadcrumbNav, InternalLinking } from '../../components/seo'
import { getRelatedPages, getCrossTemplateLinks, getBreadcrumbItems } from '../../lib/seo/helpers'
import { buildPageSchemas } from '../../lib/seo/core/schema-builder-factory'
import { SEO_CONFIG } from '../../lib/seo/core/constants'

// Force static generation for optimal performance
export const dynamic = 'force-static';

// Generate static params for all job titles
export async function generateStaticParams() {
    const { jobTitles } = await import('../../lib/programmatic-seo/job-titles')
    return jobTitles.map((job) => ({
        slug: job.slug,
    }))
}

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const job = getJobBySlug(slug)

    if (!job) {
        return {
            title: 'Page Not Found'
        }
    }

    const title = `${job.title} Salary Guide & Pay Scale`
    const description = `Check ${job.title} salary guide with average pay by experience, location, and industry. Get negotiation tips, job outlook, and career insights.`

    return generatePageMetadata({
        title,
        description,
        path: `/salary/${slug}`,
        keywords: [
            `${job.title} salary`,
            `${job.title} average salary`,
            `${job.title} pay scale`,
            `${job.title} compensation`,
            `${job.title} salary by experience`,
            `${job.title} salary by location`,
            `how much does a ${job.title} make`,
            `${job.title} salary negotiation`,
            `${job.title} job outlook`,
            ...job.aliases.flatMap(alias => [
                `${alias} salary`,
                `${alias} average salary`,
                `${alias} pay`
            ])
        ]
    })
}

export default async function SalaryPage({ params }: PageProps) {
    const { slug } = await params
    const job = getJobBySlug(slug)

    if (!job) {
        notFound()
    }

    const salaryMin = job.averageSalary ? Math.round(job.averageSalary * 0.7) : undefined
    const salaryMax = job.averageSalary ? Math.round(job.averageSalary * 1.5) : undefined

    // Get related pages for internal linking
    const relatedPages = getRelatedPages(slug, 'salary', 6)
    const crossTemplateLinks = getCrossTemplateLinks(slug, job.title)
    const breadcrumbItems = getBreadcrumbItems('salary', job.title, slug)

    // Build schema.org structured data
    const pageUrl = `${SEO_CONFIG.BASE_URL}/salary/${slug}`
    const faqItems = [
        { question: `What is the average salary for a ${job.title}?`, answer: `The average salary for a ${job.title} ranges from ${salaryMin || '$50,000'} to ${salaryMax || '$100,000'} depending on experience, location, and industry.` },
        { question: `How does experience affect ${job.title} salary?`, answer: `Entry-level ${job.title} positions typically start lower, with significant increases at mid-level and senior roles. Experience is the primary factor in salary determination.` },
        { question: `What factors affect ${job.title} compensation?`, answer: `Key factors include location, industry, company size, education level, certifications, and specialized skills that are in high demand.` }
    ]
    const schemas = buildPageSchemas({
        title: `${job.title} Salary Guide & Pay Scale`,
        description: `Check ${job.title} salary guide with average pay by experience, location, and industry. Get negotiation tips, job outlook, and career insights.`,
        url: pageUrl,
        faqs: faqItems,
        breadcrumbs: breadcrumbItems,
        dateModified: new Date().toISOString()
    })

    return (
        <Box>
            {/* Structured Data - SEO (New Schema Builder) */}
            <JsonLdSchema schemas={schemas} />

            {/* Hero Section */}
            <SalaryHero
                badge={`${job.title} Salary Guide`}
                title={job.title}
                titleHighlight="Salary & Compensation"
                description={`Explore comprehensive salary data for ${job.title} roles. Find out how much you can earn based on experience, location, and industry. Get expert negotiation tips.`}
                stats={{
                    salaryRange: salaryMin && salaryMax ? { min: salaryMin, max: salaryMax } : undefined,
                    averageSalary: job.averageSalary,
                    growthRate: job.growthRate,
                    category: job.category
                }}
            />

            {/* Breadcrumb Navigation - New Component */}
            <Box justifyContent="center" display="flex" py={6} px={4}>
                <BreadcrumbNav
                    items={breadcrumbItems.map(item => ({
                        name: item.name,
                        url: item.url,
                        position: 0
                    }))}
                    separator="chevron"
                />
            </Box>

            {/* Content Section */}
            <SalaryContent
                jobTitle={job.title}
                category={job.category}
                averageSalary={job.averageSalary}
                growthRate={job.growthRate}
                aliases={job.aliases}
            />

            {/* Related Roles - Internal Linking */}
            {relatedPages.length > 0 && (
                <InternalLinking
                    title="Related Salary Guides"
                    description="Explore salary information for similar roles."
                    links={relatedPages}
                    columns={3}
                    variant="card"
                    maxLinks={6}
                />
            )}

            {/* Cross-Template Links - Same Job, Different Templates */}
            {crossTemplateLinks.length > 0 && (
                <InternalLinking
                    title={`More Resources for ${job.title}`}
                    description={`Explore additional resources and guides specifically for ${job.title} positions.`}
                    links={crossTemplateLinks}
                    columns={3}
                    variant="card"
                    maxLinks={6}
                />
            )}

            {/* Final CTA */}
            <CTA />
            <FAQ />
        </Box>
    )
}
