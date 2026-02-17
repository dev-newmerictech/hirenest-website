import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box } from '@chakra-ui/react'
import { CoverLetterHero } from '../../components/programmatic-seo/CoverLetterHero'
import { CoverLetterContent } from '../../components/programmatic-seo/CoverLetterContent'
import { ProgrammaticSeoStructuredData } from '../../components/programmatic-seo/StructuredData'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'
import { getJobBySlug } from '../../lib/programmatic-seo/job-titles'
import { generatePageMetadata } from '../../lib/metadata'

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

    const title = `${job.title} Cover Letter Examples`
    const description = `Browse professional ${job.title} cover letter examples and templates for all experience levels. Learn to write a winning cover letter with tips.`

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

    return (
        <Box>
            {/* Structured Data - SEO */}
            <ProgrammaticSeoStructuredData
                jobTitle={job.title}
                pageType="cover-letter"
                slug={slug}
                description={`Professional ${job.title} cover letter examples and templates for all experience levels. Write a winning cover letter with our proven samples and tips.`}
            />

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

            {/* Content Section */}
            <CoverLetterContent
                jobTitle={job.title}
                category={job.category}
                aliases={job.aliases}
            />

            {/* Final CTA */}
            <CTA />
            <FAQ />
        </Box>
    )
}
