import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
    Box, HStack, Text,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { JobDescriptionHero } from '../../components/programmatic-seo/JobDescriptionHero'
import { JobDescriptionContent } from '../../components/programmatic-seo/JobDescriptionContent'
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

    const title = `${job.title} Job Description`
    const description = `Explore ${job.title} job description with key responsibilities, requirements, salary, and career path. Learn what it takes to succeed.`

    return generatePageMetadata({
        title,
        description,
        path: `/job-description/${slug}`,
        keywords: [
            `${job.title} job description`,
            `${job.title} responsibilities`,
            `${job.title} requirements`,
            `${job.title} salary`,
            `${job.title} duties`,
            `how to become a ${job.title}`,
            `${job.title} career path`,
            `what does a ${job.title} do`,
            ...job.aliases.flatMap(alias => [
                `${alias} job description`,
                `${alias} responsibilities`,
                `${alias} requirements`
            ])
        ]
    })
}

export default async function JobDescriptionPage({ params }: PageProps) {
    const { slug } = await params
    const job = getJobBySlug(slug)

    if (!job) {
        notFound()
    }

    const formatSalary = (salary?: number) => {
        if (!salary) return 'Varies'
        return `$${(salary / 1000).toFixed(0)}k - $${((salary * 1.5) / 1000).toFixed(0)}k`
    }

    // Get related pages for internal linking
    const relatedPages = getRelatedPages(slug, 'job-description', 6)
    const crossTemplateLinks = getCrossTemplateLinks(slug, job.title)
    const breadcrumbItems = getBreadcrumbItems('job-description', job.title, slug)

    // Build schema.org structured data
    const pageUrl = `${SEO_CONFIG.BASE_URL}/job-description/${slug}`
    const faqItems = [
        { question: `What does a ${job.title} do?`, answer: `A ${job.title} is responsible for various tasks depending on the industry and company. Common responsibilities include overseeing projects, managing teams, and ensuring operational efficiency.` },
        { question: `What skills are needed to become a ${job.title}?`, answer: `Key skills for ${job.title} roles include technical expertise relevant to the field, strong communication abilities, problem-solving capabilities, and leadership qualities for senior positions.` },
        { question: `What is the career path for a ${job.title}?`, answer: `The typical career path starts with entry-level positions, advancing to mid-level roles, then senior positions. Many ${job.title}s move into management or specialized roles as they gain experience.` }
    ]
    const schemas = buildPageSchemas({
        title: `${job.title} Job Description`,
        description: `Explore ${job.title} job description with key responsibilities, requirements, salary, and career path. Learn what it takes to succeed.`,
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
            <JobDescriptionHero
                badge={`${job.title} Job Description`}
                title={job.title}
                titleHighlight="Job Overview"
                description={`Discover everything you need to know about becoming a ${job.title}. Learn about responsibilities, requirements, salary expectations, and career growth opportunities.`}
                stats={{
                    salary: formatSalary(job.averageSalary),
                    growthRate: job.growthRate,
                    education: 'Varies',
                    hours: 'Full-time'
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
            <JobDescriptionContent
                jobTitle={job.title}
                category={job.category}
                averageSalary={job.averageSalary}
                growthRate={job.growthRate}
                aliases={job.aliases}
            />

            {/* Related Roles - Internal Linking */}
            {relatedPages.length > 0 && (
                <InternalLinking
                    title="Related Job Descriptions"
                    description="Explore job descriptions for similar roles."
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
