import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box } from '@chakra-ui/react'
import { SalaryHero } from '../../components/programmatic-seo/SalaryHero'
import { SalaryContent } from '../../components/programmatic-seo/SalaryContent'
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

    return (
        <Box>
            {/* Structured Data - SEO */}
            <ProgrammaticSeoStructuredData
                jobTitle={job.title}
                pageType="salary"
                slug={slug}
                description={`Comprehensive ${job.title} salary guide with average pay, experience-based salary ranges, location comparisons, and negotiation tips.`}
                averageSalary={job.averageSalary}
                growthRate={job.growthRate}
            />

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

            {/* Content Section */}
            <SalaryContent
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
