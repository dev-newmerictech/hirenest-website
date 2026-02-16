'use client'

import { generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema } from '../../lib/structured-data'
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data'

const baseUrl = 'https://www.hirenest.ai'

interface ProgrammaticSeoStructuredDataProps {
    jobTitle: string
    pageType: 'interview-questions' | 'resume-keywords'
    slug: string
    description: string
}

export function ProgrammaticSeoStructuredData({
    jobTitle,
    pageType,
    slug,
    description
}: ProgrammaticSeoStructuredDataProps) {
    const pageUrl = `${baseUrl}/${pageType}/${slug}`

    // Generate page-specific FAQs
    const pageSpecificFAQs = pageType === 'interview-questions'
        ? [
            {
                question: `What are the most common ${jobTitle} interview questions?`,
                answer: `The most common ${jobTitle} interview questions include questions about your background, technical skills, problem-solving abilities, and fit for the company. This guide covers the top questions with expert-approved answers to help you prepare effectively.`
            },
            {
                question: `How should I prepare for a ${jobTitle} interview?`,
                answer: `To prepare for a ${jobTitle} interview, research the company, practice the STAR method for behavioral questions, review technical concepts, prepare questions to ask the interviewer, and practice with mock interviews. This comprehensive guide provides detailed preparation strategies.`
            },
            {
                question: `What technical questions are asked in ${jobTitle} interviews?`,
                answer: `${jobTitle} technical interviews typically cover core concepts, tools, and methodologies relevant to the role. Our guide includes common technical questions with detailed answers to help you demonstrate your expertise.`
            },
            {
                question: `How do I answer behavioral questions for ${jobTitle} roles?`,
                answer: `Use the STAR method (Situation, Task, Action, Result) to structure your behavioral answers. Prepare specific examples from your experience that highlight your ${jobTitle} skills and achievements. This guide includes practice questions and sample answers.`
            },
            {
                question: `What are red flags to avoid in ${jobTitle} interviews?`,
                answer: `Common mistakes include speaking negatively about past employers, giving vague answers, lack of preparation, not asking questions, and arrogance. Our guide details these pitfalls and how to avoid them to make a strong impression.`
            }
        ]
        : [
            {
                question: `What are the best keywords for a ${jobTitle} resume?`,
                answer: `The best ${jobTitle} resume keywords include industry-specific hard skills, soft skills, tools, certifications, and action verbs. This comprehensive list provides ATS-friendly keywords that recruiters search for when hiring ${jobTitle} professionals.`
            },
            {
                question: `How do I optimize my ${jobTitle} resume for ATS?`,
                answer: `To optimize your ${jobTitle} resume for ATS, include relevant keywords from the job description, use standard section headings, avoid graphics and tables, and format with a clean layout. Our keyword list helps you identify the right terms to include.`
            },
            {
                question: `What skills should I highlight on my ${jobTitle} resume?`,
                answer: `Highlight technical skills specific to ${jobTitle} roles, soft skills like communication and problem-solving, relevant tools and software, and industry certifications. Our categorized keyword list helps you identify which skills to emphasize.`
            },
            {
                question: `How many keywords should I use in my ${jobTitle} resume?`,
                answer: `Use 10-15 relevant keywords throughout your ${jobTitle} resume, focusing on the most important skills for the specific role. Naturally incorporate them in your summary, skills section, and work experience. Quality and relevance matter more than quantity.`
            },
            {
                question: `Where should I place keywords in my ${jobTitle} resume?`,
                answer: `Place ${jobTitle} keywords strategically in your professional summary, skills section, and throughout your work experience bullet points. Use action verbs and specific skills that match the job description for maximum ATS optimization.`
            }
        ]

    // Combine page-specific FAQs with general FAQs
    const allFAQs = [...pageSpecificFAQs, ...faqs]

    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(allFAQs)

    // Generate Article Schema for SEO
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pageType === 'interview-questions'
            ? `${jobTitle} Interview Questions & Answers (2026)`
            : `${jobTitle} Resume Keywords & Skills (2026)`,
        description,
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
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: baseUrl },
        { name: pageType === 'interview-questions' ? 'Interview Questions' : 'Resume Keywords', url: `${baseUrl}/${pageType}` },
        { name: jobTitle, url: pageUrl }
    ])

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        pageType === 'interview-questions'
            ? `${jobTitle} Interview Questions & Answers`
            : `${jobTitle} Resume Keywords & Skills`,
        description,
        pageUrl,
        [
            { name: 'Home', url: baseUrl },
            { name: pageType === 'interview-questions' ? 'Interview Questions' : 'Resume Keywords', url: `${baseUrl}/${pageType}` },
            { name: jobTitle, url: pageUrl }
        ],
        {
            author: 'Hirenest Team',
            datePublished: '2024-01-01T00:00:00.000Z',
            dateModified: new Date().toISOString()
        }
    )

    return (
        <>
            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* WebPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    )
}
