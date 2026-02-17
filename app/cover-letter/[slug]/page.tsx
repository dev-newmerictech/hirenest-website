import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box } from '@chakra-ui/react'
import { CoverLetterHero } from '../../components/programmatic-seo/CoverLetterHero'
import { CoverLetterContent } from '../../components/programmatic-seo/CoverLetterContent'
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

    const title = `${job.title} Cover Letter Examples & Templates (2026)`
    const description = `Professional ${job.title} cover letter examples and templates. Write a winning cover letter for ${job.title} positions with our proven templates, tips, and samples for all experience levels.`

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

    const baseUrl = 'https://hirenest.ai'
    const pageUrl = `${baseUrl}/cover-letter/${slug}`

    // Generate FAQ Schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: `How do I write a cover letter for a ${job.title} position?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `To write a ${job.title} cover letter: 1) Research the company and customize your letter, 2) Highlight relevant ${job.title} skills and experiences, 3) Quantify your achievements with specific numbers, 4) Show enthusiasm for the role and company, 5) Proofread carefully before submitting. Use our templates above as a starting point and personalize them for each application.`
                }
            },
            {
                '@type': 'Question',
                name: `What should I include in my ${job.title} cover letter?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Your ${job.title} cover letter should include: a professional greeting, an engaging opening statement that mentions the specific role, your relevant ${job.title} skills and qualifications, specific examples of past achievements, why you want to work for this company, and a strong closing with a call to action. Keep it concise and focused on value you can bring.`
                }
            },
            {
                '@type': 'Question',
                name: `How long should a ${job.title} cover letter be?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `A ${job.title} cover letter should be 3-4 paragraphs and fit on one page (250-400 words). Hiring managers scan quickly, so be concise. Focus on your most relevant ${job.title} qualifications and achievements. Quality matters more than quantity - make every word count.`
                }
            },
            {
                '@type': 'Question',
                name: `What are common mistakes in ${job.title} cover letters?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Common ${job.title} cover letter mistakes include: being too generic instead of customizing, repeating your resume word-for-word, focusing only on what you want rather than what you can offer, exceeding one page, including typos or errors, and not following application instructions. Always proofread and tailor each letter to the specific company and role.`
                }
            },
            {
                '@type': 'Question',
                name: `How do I tailor my cover letter for a ${job.title} job?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `To tailor your ${job.title} cover letter: 1) Research the company's mission, values, and recent news, 2) Review the job description and address key requirements, 3) Highlight relevant ${job.title} skills that match their needs, 4) Mention specific company projects or initiatives you admire, 5) Use keywords from the job posting, 6) Show how your background aligns with their goals. Personalization demonstrates genuine interest.`
                }
            }
        ]
    }

    // Generate Article Schema
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${job.title} Cover Letter Examples & Templates (2026)`,
        description: `Professional ${job.title} cover letter examples and templates for all experience levels. Write a winning cover letter with our proven samples and tips.`,
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
                name: 'Cover Letter Examples',
                item: `${baseUrl}/cover-letter`
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
        name: `${job.title} Cover Letter Examples`,
        description: `${job.title} cover letter templates, examples, and writing tips for job seekers.`,
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
        </>
    )
}
