import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
    Box, HStack, Text,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { CoverLetterHero } from '../../components/programmatic-seo/CoverLetterHero'
import { CoverLetterContent } from '../../components/programmatic-seo/CoverLetterContent'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'
import { getJobBySlug, enabledJobTitles } from '../../lib/programmatic-seo/enabled-job-titles'
import { generatePageMetadata } from '../../lib/metadata'
import Link from 'next/link'
// New SEO components
import { JsonLdSchema, BreadcrumbNav, InternalLinking } from '../../components/seo'
import { getRelatedPages, getCrossTemplateLinks, getBreadcrumbItems } from '../../lib/seo/helpers'
import { buildPageSchemas } from '../../lib/seo/core/schema-builder-factory'
import { SEO_CONFIG } from '../../lib/seo/core/constants'

// Force static generation for optimal performance
export const dynamic = 'force-static';

// Generate static params only for enabled job titles (that have content)
export async function generateStaticParams() {
    return enabledJobTitles.map((job) => ({
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

    // Title: max 55 characters
    const title = `${job.title} Cover Letter`.slice(0, 55)

    // Description: max 150 characters
    const description = `Professional ${job.title} cover letter examples and templates. Write a winning cover letter with our expert tips and samples.`
        .slice(0, 150)

    return generatePageMetadata({
        title,
        description,
        path: `/cover-letter/${slug}`,
        keywords: [
            `${job.title} cover letter`,
            `${job.title} cover letter example`,
            `${job.title} cover letter template`,
            `cover letter for ${job.title}`,
            `${job.title} application letter`,
            `how to write a ${job.title} cover letter`,
            `${job.title} job application letter`,
            `professional ${job.title} cover letter`,
            `${job.title} cover letter sample`,
            `${job.title} cover letter tips`,
            ...job.aliases.flatMap(alias => [
                `${alias} cover letter`,
                `${alias} cover letter example`,
                `cover letter for ${alias}`
            ])
        ]
    })
}

export default async function CoverLetterPage({ params }: PageProps) {
    const { slug } = await params
    const job = getJobBySlug(slug)

    if (!job) {
        notFound()
    }

    // Get related pages for internal linking
    const relatedPages = getRelatedPages(slug, 'cover-letter', 6)
    const crossTemplateLinks = getCrossTemplateLinks(slug, job.title)
    const breadcrumbItems = getBreadcrumbItems('cover-letter', job.title, slug)

    // Build schema.org structured data
    const pageUrl = `${SEO_CONFIG.BASE_URL}/cover-letter/${slug}`
    const faqItems = [
        { question: `How do I write a cover letter for a ${job.title} position?`, answer: `Focus on your relevant experience, skills that match the job requirements, and your enthusiasm for the role. Use specific examples from your background that demonstrate your fit for the ${job.title} position.` },
        { question: `What should I include in my ${job.title} cover letter?`, answer: `Include your contact information, a professional greeting, a compelling opening paragraph, 2-3 body paragraphs highlighting relevant qualifications, and a strong closing with call to action.` },
        { question: `How long should a ${job.title} cover letter be?`, answer: `Keep it concise - typically 3-4 short paragraphs or about 250-350 words. Recruiters spend little time scanning cover letters, so make every sentence count.` }
    ]
    const schemas = buildPageSchemas({
        title: `${job.title} Cover Letter Examples`,
        description: `Browse professional ${job.title} cover letter examples and templates for all experience levels. Learn to write a winning cover letter with tips.`,
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
            <CoverLetterHero
                badge={`${job.title} Cover Letter`}
                title="Professional Cover Letter"
                titleHighlight={`Examples for ${job.title}s`}
                description={`Craft a winning cover letter for your ${job.title} application. Choose from our proven templates, examples, and expert tips tailored for ${job.title} positions at all experience levels.`}
                ctaText="Browse All Cover Letters"
                ctaHref="/cover-letter"
                stats={[
                    { value: '3', label: 'Template Types' },
                    { value: '6', label: 'Expert Tips' },
                    { value: '2026', label: 'Updated' }
                ]}
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
            <CoverLetterContent
                jobTitle={job.title}
                category={job.category}
                aliases={job.aliases}
            />

            {/* Related Roles - Internal Linking */}
            {relatedPages.length > 0 && (
                <InternalLinking
                    title="Related Cover Letters"
                    description="Explore cover letter examples for similar roles."
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
