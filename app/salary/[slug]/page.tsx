import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box } from '@chakra-ui/react'
import { SalaryHero } from '../../components/programmatic-seo/SalaryHero'
import { SalaryContent } from '../../components/programmatic-seo/SalaryContent'
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

    const title = `${job.title} Salary Guide 2026 | Pay Scale & Compensation`
    const description = `Comprehensive ${job.title} salary guide: average pay by experience level, location, and industry. Negotiation tips, job outlook, and career growth insights for ${job.title} professionals.`

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

    const baseUrl = 'https://hirenest.ai'
    const pageUrl = `${baseUrl}/salary/${slug}`

    // Calculate salary range
    const salaryMin = job.averageSalary ? Math.round(job.averageSalary * 0.7) : undefined
    const salaryMax = job.averageSalary ? Math.round(job.averageSalary * 1.5) : undefined

    // Generate FAQ Schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: `What is the average salary for a ${job.title}?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: job.averageSalary
                        ? `The average salary for a ${job.title} is $${job.averageSalary.toLocaleString()} per year. Salaries typically range from $${salaryMin?.toLocaleString()} to $${salaryMax?.toLocaleString()} depending on experience, location, and employer.`
                        : `${job.title} salaries vary based on experience, location, and industry. Entry-level positions typically start lower, with senior roles earning significantly more.`
                }
            },
            {
                '@type': 'Question',
                name: `How much does a ${job.title} make?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: job.averageSalary
                        ? `${job.title} professionals make an average of $${job.averageSalary.toLocaleString()} annually. Entry-level positions start around $${salaryMin?.toLocaleString()}, while experienced professionals can earn $${salaryMax?.toLocaleString()} or more.`
                        : `${job.title} compensation varies by experience level, location, and industry. Major metropolitan areas typically offer higher salaries.`
                }
            },
            {
                '@type': 'Question',
                name: `What factors affect ${job.title} salary?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Key factors affecting ${job.title} salary include experience level, geographic location, industry sector, company size, education level, specialized skills, and certifications. Technical skills and leadership abilities can significantly increase earning potential.`
                }
            },
            {
                '@type': 'Question',
                name: `How do I negotiate a higher ${job.title} salary?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `To negotiate a higher ${job.title} salary: research market rates for your location, highlight unique skills and achievements, consider the full compensation package, time your negotiation after receiving an offer, be confident but flexible, and practice your negotiation conversation.`
                }
            },
            {
                '@type': 'Question',
                name: `What is the job outlook for ${job.title}?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: job.growthRate
                        ? `The job outlook for ${job.title} is strong with ${job.growthRate}% projected growth over the next decade, which is ${job.growthRate >= 15 ? 'much faster' : job.growthRate >= 8 ? 'faster' : 'about equal to'} the average for all occupations.`
                        : `${job.title} careers continue to offer stable employment opportunities with growth varying by industry and location.`
                }
            }
        ]
    }

    // Generate Article Schema
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${job.title} Salary Guide 2026 | Pay Scale & Compensation`,
        description: `Comprehensive ${job.title} salary guide with average pay, experience-based salary ranges, location comparisons, and negotiation tips.`,
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

    // Generate Breadcrumb Schema
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
                name: 'Salary Guides',
                item: `${baseUrl}/salary`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: job.title,
                item: pageUrl
            }
        ]
    }

    // Generate WebPage Schema
    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${job.title} Salary Guide`,
        description: `${job.title} salary information including average pay, experience-based ranges, location comparisons, and negotiation tips.`,
        url: pageUrl,
        breadcrumb: breadcrumbSchema
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
        </>
    )
}
