import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box } from '@chakra-ui/react'
import { JobDescriptionHero } from '../../components/programmatic-seo/JobDescriptionHero'
import { JobDescriptionContent } from '../../components/programmatic-seo/JobDescriptionContent'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'
import { getJobBySlug } from '../../lib/programmatic-seo/job-titles'
import { generatePageMetadata } from '../../lib/metadata'

// Force static generation for optimal performance
export const dynamic = 'force-static'

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

    const title = `${job.title} Job Description: Responsibilities, Requirements & Salary (2026)`
    const description = `Explore comprehensive ${job.title} job description including key responsibilities, requirements, salary expectations, work environment, and career path. Learn what it takes to become a successful ${job.title}.`

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

    // Generate structured data schemas
    const baseUrl = 'https://hirenest.ai'
    const pageUrl = `${baseUrl}/job-description/${slug}`

    const jobSpecificFAQs = [
        {
            question: `What does a ${job.title} do?`,
            answer: `A ${job.title} is responsible for various tasks including project management, collaboration with team members, and ensuring quality deliverables. They use specialized skills and tools to achieve organizational goals in the ${job.category} field.`
        },
        {
            question: `What are the responsibilities of a ${job.title}?`,
            answer: `${job.title} responsibilities include technical tasks, team collaboration, documentation, problem-solving, and maintaining industry standards. They must also stay current with emerging trends and technologies in their field.`
        },
        {
            question: `What skills are required to be a ${job.title}?`,
            answer: `Key ${job.title} skills include technical proficiency, communication abilities, problem-solving, attention to detail, and industry-specific knowledge. Educational requirements typically include relevant degrees or certifications.`
        },
        {
            question: `How much does a ${job.title} make?`,
            answer: `The average ${job.title} salary ranges from ${job.averageSalary ? `$${(job.averageSalary / 1000).toFixed(0)}k` : '$60k'} to ${job.averageSalary ? `$${((job.averageSalary * 1.5) / 1000).toFixed(0)}k` : '$90k'} depending on experience, location, and employer. Additional compensation may include bonuses, benefits, and stock options.`
        },
        {
            question: `How do I become a ${job.title}?`,
            answer: `To become a ${job.title}, you typically need relevant education, practical experience, and sometimes certifications. Starting in entry-level positions and gaining experience while developing your skills can help you advance in this career path.`
        }
    ]

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: jobSpecificFAQs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    }

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${job.title} Job Description: Responsibilities, Requirements & Salary (2026)`,
        description: `Explore comprehensive ${job.title} job description including key responsibilities, requirements, salary expectations, work environment, and career path.`,
        image: `${baseUrl}/HpLogo.svg`,
        author: {
            '@type': 'Organization',
            name: 'Hirenest',
            url: baseUrl
        },
        publisher: {
            '@type': 'Organization',
            name: 'Hirenest',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/HpLogo.svg`
            }
        },
        datePublished: '2024-01-01T00:00:00.000Z',
        dateModified: new Date().toISOString(),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl
        }
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Job Descriptions',
                item: `${baseUrl}/job-description`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: job.title,
                item: pageUrl
            }
        ]
    }

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${job.title} Job Description`,
        description: `Comprehensive ${job.title} job description with responsibilities, requirements, salary, and career path information.`,
        url: pageUrl,
        breadcrumb: breadcrumbSchema
    }

    const formatSalary = (salary?: number) => {
        if (!salary) return 'Varies'
        return `$${(salary / 1000).toFixed(0)}k - $${((salary * 1.5) / 1000).toFixed(0)}k`
    }

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Box>
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

                {/* Content Section */}
                <Box bg="gray.50">
                    <JobDescriptionContent
                        jobTitle={job.title}
                        category={job.category}
                        averageSalary={job.averageSalary}
                        growthRate={job.growthRate}
                        aliases={job.aliases}
                    />
                </Box>

                {/* Final CTA */}
                <CTA />
                <FAQ />
            </Box>
        </>
    )
}
