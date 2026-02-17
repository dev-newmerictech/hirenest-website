import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box } from '@chakra-ui/react'
import { JobDescriptionHero } from '../../components/programmatic-seo/JobDescriptionHero'
import { JobDescriptionContent } from '../../components/programmatic-seo/JobDescriptionContent'
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

    return (
        <Box>
            {/* Structured Data - SEO */}
            <ProgrammaticSeoStructuredData
                jobTitle={job.title}
                pageType="job-description"
                slug={slug}
                description={`Explore comprehensive ${job.title} job description including key responsibilities, requirements, salary expectations, work environment, and career path.`}
                averageSalary={job.averageSalary}
                growthRate={job.growthRate}
            />

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
            <JobDescriptionContent
                jobTitle={job.title}
                category={job.category}
                averageSalary={job.averageSalary}
                growthRate={job.growthRate}
                aliases={job.aliases}
            />
            {/* Final CTA */}
            <CTA />
            <FAQ />
        </Box>
    )
}
