import { generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema } from '../../lib/structured-data'

const baseUrl = 'https://hirenest.ai'

type PageType = 'interview-questions' | 'resume-keywords' | 'salary' | 'cover-letter' | 'job-description'
type IndexPageType = 'interview-questions' | 'resume-keywords' | 'salary' | 'cover-letter' | 'job-description'

// Index page configuration
const indexPageConfig: Record<IndexPageType, {
    name: string
    description: string
    breadcrumbName: string
    pageTitle: string
    image: string
}> = {
    'interview-questions': {
        name: 'Interview Questions & Answers',
        description: 'Prepare for your job interview with our comprehensive collection of interview questions and answers. Expert tips, behavioral questions, and technical interview prep for 50+ job titles across all industries.',
        breadcrumbName: 'Interview Questions',
        pageTitle: 'Interview Questions & Answers for All Jobs (2026)',
        image: `${baseUrl}/og-interview-questions.jpg`
    },
    'resume-keywords': {
        name: 'Resume Keywords & Skills',
        description: 'Discover the best resume keywords and skills for your job. Our comprehensive guides help you optimize your resume for ATS and impress recruiters. Covering 50+ job titles across all industries.',
        breadcrumbName: 'Resume Keywords',
        pageTitle: 'Resume Keywords & Skills for All Jobs (2026)',
        image: `${baseUrl}/og-resume-keywords.jpg`
    },
    'salary': {
        name: 'Salary Guides',
        description: 'Browse comprehensive salary guides for thousands of job titles. Find average salaries by experience level, location, and industry. Get expert negotiation tips for your career.',
        breadcrumbName: 'Salary Guides',
        pageTitle: 'Salary Guides - Explore Pay Scales for 1,715+ Jobs (2026)',
        image: `${baseUrl}/og-salary.jpg`
    },
    'cover-letter': {
        name: 'Cover Letter Examples',
        description: 'Browse cover letter examples and templates for 1,715+ job titles. Get proven cover letter samples, writing tips, and templates for every industry and experience level.',
        breadcrumbName: 'Cover Letter Examples',
        pageTitle: 'Cover Letter Examples - 1,715+ Professional Templates (2026)',
        image: `${baseUrl}/og-cover-letter.jpg`
    },
    'job-description': {
        name: 'Job Descriptions',
        description: 'Browse comprehensive job descriptions for thousands of career paths. Find detailed information about responsibilities, requirements, salary expectations, and career growth for your dream job.',
        breadcrumbName: 'Job Descriptions',
        pageTitle: 'Job Descriptions - Explore Career Opportunities (2026)',
        image: `${baseUrl}/og-job-description.jpg`
    }
}

// Get index page FAQs
const getIndexPageFAQs = (pageType: IndexPageType): Array<{ question: string; answer: string }> => {
    switch (pageType) {
        case 'interview-questions':
            return [
                {
                    question: 'What are the most common interview questions?',
                    answer: 'The most common interview questions include "Tell me about yourself," "What are your strengths and weaknesses?", "Why do you want to work here?", "Where do you see yourself in 5 years?", and "Why should we hire you?" Our guides provide detailed answers for these questions specific to each job title.'
                },
                {
                    question: 'How do I prepare for a job interview?',
                    answer: 'To prepare for a job interview: research the company thoroughly, practice your answers to common questions using the STAR method, prepare questions to ask the interviewer, dress professionally, bring copies of your resume, and follow up with a thank-you email after the interview.'
                },
                {
                    question: 'What is the STAR method for answering interview questions?',
                    answer: 'The STAR method is a structured way to answer behavioral interview questions. STAR stands for Situation (describe the context), Task (explain your responsibility), Action (describe what you did), and Result (share the outcome). This method helps you provide focused, impactful answers.'
                },
                {
                    question: 'How can I stand out in an interview?',
                    answer: 'To stand out in an interview: show genuine enthusiasm for the role and company, provide specific examples with quantifiable results, ask thoughtful questions about the team and company, demonstrate your knowledge of the industry, and be authentic and personable.'
                }
            ]
        case 'resume-keywords':
            return [
                {
                    question: 'What are resume keywords and why are they important?',
                    answer: 'Resume keywords are specific terms and phrases that describe your skills, qualifications, and experience. They are important because many companies use Applicant Tracking Systems (ATS) to scan resumes for relevant keywords. Including the right keywords helps your resume pass these filters and reach human recruiters.'
                },
                {
                    question: 'How do I find the right keywords for my resume?',
                    answer: 'To find the right keywords: carefully review job descriptions for your target roles, note industry-specific terminology and required skills, include both hard skills (technical abilities) and soft skills (interpersonal qualities), and use tools like our keyword guides for your specific job title.'
                },
                {
                    question: 'What is ATS optimization for resumes?',
                    answer: 'ATS optimization means formatting and writing your resume so it can be accurately parsed by Applicant Tracking Systems. This includes using standard section headings, avoiding graphics and tables, using relevant keywords throughout, and choosing a clean, simple layout.'
                },
                {
                    question: 'How many keywords should I include in my resume?',
                    answer: 'There is no exact number, but aim to include 10-15 relevant keywords throughout your resume. Focus on quality over quantity - use terms that genuinely match your skills and the job requirements. Distribute keywords naturally in your summary, skills section, and work experience.'
                }
            ]
        case 'salary':
            return [
                {
                    question: 'How do I research salary for a specific job?',
                    answer: 'To research salary: use our comprehensive salary guides organized by job title, check salary comparison websites like Glassdoor and Payscale, consider your location and cost of living, factor in your experience level, and research industry-specific salary data. Our guides provide detailed breakdowns.'
                },
                {
                    question: 'What factors affect salary?',
                    answer: 'Key factors affecting salary include: experience level (entry, mid, senior), geographic location and cost of living, industry sector, company size and revenue, education level, specialized skills and certifications, and current market demand for the role.'
                },
                {
                    question: 'How do I negotiate salary?',
                    answer: 'To negotiate salary effectively: research market rates before the interview, wait until you have an offer to discuss salary, focus on your value and achievements, consider the full compensation package (benefits, bonus, equity), be confident but flexible, and practice your negotiation conversation.'
                },
                {
                    question: 'When is the best time to discuss salary?',
                    answer: 'The best time to discuss salary is after you have received a job offer. At this point, the employer has demonstrated they want you, giving you more leverage. Avoid discussing salary in early interviews unless specifically asked. If asked early, provide a range based on your research.'
                }
            ]
        case 'cover-letter':
            return [
                {
                    question: 'What is a cover letter and why do I need one?',
                    answer: 'A cover letter is a one-page document that introduces you to potential employers, highlights your qualifications, and explains why you are interested in the position. You need one because it personalizes your application, showcases your writing skills, and helps you stand out from other candidates who only submit a resume.'
                },
                {
                    question: 'What should I include in my cover letter?',
                    answer: 'Your cover letter should include: a professional greeting, an engaging opening statement mentioning the specific role, your relevant skills and qualifications, specific examples of past achievements, why you want to work for this company, and a strong closing with a call to action. Keep it to 3-4 paragraphs.'
                },
                {
                    question: 'How long should a cover letter be?',
                    answer: 'A cover letter should be 3-4 paragraphs and fit on one page (250-400 words). Hiring managers scan quickly, so be concise. Focus on your most relevant qualifications and achievements. Quality matters more than quantity - make every word count.'
                },
                {
                    question: 'How do I customize a cover letter for each job?',
                    answer: 'To customize your cover letter: research the company and mention specific details, address key requirements from the job description, highlight relevant skills that match their needs, reference recent company news or projects, and explain why you are specifically interested in this role at this company.'
                }
            ]
        case 'job-description':
            return [
                {
                    question: 'Why should I read job descriptions before applying?',
                    answer: 'Reading job descriptions before applying helps you understand if the role is a good fit, identify the key skills and requirements employers want, tailor your application to match their needs, prepare relevant interview questions, and make informed career decisions about the position.'
                },
                {
                    question: 'What information can I find in a job description?',
                    answer: 'Job descriptions typically include: job title and summary of the role, key responsibilities and day-to-day tasks, required qualifications and education, preferred skills and experience, salary range and benefits, company information, and application instructions.'
                },
                {
                    question: 'How do I use job descriptions to improve my application?',
                    answer: 'Use job descriptions to: identify keywords to include in your resume and cover letter, understand what skills to highlight, prepare relevant examples for interviews, craft targeted answers that address their needs, and formulate thoughtful questions to ask the interviewer.'
                },
                {
                    question: 'What are red flags to look for in job descriptions?',
                    answer: 'Red flags in job descriptions include: vague responsibilities with no specifics, unrealistic requirements for the salary level, no information about compensation, excessive hours mentioned, high turnover suggested, unclear reporting structure, and poor company reputation online.'
                }
            ]
    }
}

interface IndexPageStructuredDataProps {
    pageType: IndexPageType
}

// Index page structured data component
export function IndexPageStructuredData({ pageType }: IndexPageStructuredDataProps) {
    const config = indexPageConfig[pageType]
    const pageUrl = `${baseUrl}/${pageType}`

    // FAQ Schema
    const faqs = getIndexPageFAQs(pageType)
    const faqSchema = generateFAQSchema(faqs)

    // Article Schema
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: config.pageTitle,
        description: config.description,
        image: config.image,
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

    // Image Object Schema
    const imageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        url: config.image,
        contentUrl: config.image,
        name: config.name,
        description: config.description,
        width: 1200,
        height: 630,
        author: {
            '@type': 'Organization',
            name: 'Hirenest'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Hirenest',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/HpLogo.svg`
            }
        }
    }

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: baseUrl },
        { name: config.breadcrumbName, url: pageUrl }
    ])

    // WebPage Schema
    const webPageSchema = generateWebPageSchema(
        config.name,
        config.description,
        pageUrl,
        [
            { name: 'Home', url: baseUrl },
            { name: config.breadcrumbName, url: pageUrl }
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

            {/* Image Object Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
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

interface ProgrammaticSeoStructuredDataProps {
    jobTitle: string
    pageType: PageType
    slug: string
    description: string
    averageSalary?: number
    growthRate?: number
}

// Page type configuration
const pageTypeConfig: Record<PageType, {
    breadcrumbName: string
    getHeadline: (jobTitle: string) => string
    getPageName: (jobTitle: string) => string
}> = {
    'interview-questions': {
        breadcrumbName: 'Interview Questions',
        getHeadline: (jobTitle) => `${jobTitle} Interview Questions & Answers (2026)`,
        getPageName: (jobTitle) => `${jobTitle} Interview Questions & Answers`
    },
    'resume-keywords': {
        breadcrumbName: 'Resume Keywords',
        getHeadline: (jobTitle) => `${jobTitle} Resume Keywords & Skills (2026)`,
        getPageName: (jobTitle) => `${jobTitle} Resume Keywords & Skills`
    },
    'salary': {
        breadcrumbName: 'Salary Guides',
        getHeadline: (jobTitle) => `${jobTitle} Salary Guide 2026 | Pay Scale & Compensation`,
        getPageName: (jobTitle) => `${jobTitle} Salary Guide`
    },
    'cover-letter': {
        breadcrumbName: 'Cover Letter Examples',
        getHeadline: (jobTitle) => `${jobTitle} Cover Letter Examples & Templates (2026)`,
        getPageName: (jobTitle) => `${jobTitle} Cover Letter Examples`
    },
    'job-description': {
        breadcrumbName: 'Job Descriptions',
        getHeadline: (jobTitle) => `${jobTitle} Job Description: Responsibilities, Requirements & Salary (2026)`,
        getPageName: (jobTitle) => `${jobTitle} Job Description`
    }
}

export function ProgrammaticSeoStructuredData({
    jobTitle,
    pageType,
    slug,
    description,
    averageSalary,
    growthRate
}: ProgrammaticSeoStructuredDataProps) {
    const pageUrl = `${baseUrl}/${pageType}/${slug}`
    const config = pageTypeConfig[pageType]

    // Calculate salary range for salary pages
    const salaryMin = averageSalary ? Math.round(averageSalary * 0.7) : undefined
    const salaryMax = averageSalary ? Math.round(averageSalary * 1.5) : undefined

    // Generate page-specific FAQs
    const getPageSpecificFAQs = (): Array<{ question: string; answer: string }> => {
        switch (pageType) {
            case 'interview-questions':
                return [
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
                    }
                ]

            case 'resume-keywords':
                return [
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
                    }
                ]

            case 'salary':
                return [
                    {
                        question: `What is the average salary for a ${jobTitle}?`,
                        answer: averageSalary
                            ? `The average salary for a ${jobTitle} is $${averageSalary.toLocaleString()} per year. Salaries typically range from $${salaryMin?.toLocaleString()} to $${salaryMax?.toLocaleString()} depending on experience, location, and employer.`
                            : `${jobTitle} salaries vary based on experience, location, and industry. Entry-level positions typically start lower, with senior roles earning significantly more.`
                    },
                    {
                        question: `How much does a ${jobTitle} make?`,
                        answer: averageSalary
                            ? `${jobTitle} professionals make an average of $${averageSalary.toLocaleString()} annually. Entry-level positions start around $${salaryMin?.toLocaleString()}, while experienced professionals can earn $${salaryMax?.toLocaleString()} or more.`
                            : `${jobTitle} compensation varies by experience level, location, and industry. Major metropolitan areas typically offer higher salaries.`
                    },
                    {
                        question: `What factors affect ${jobTitle} salary?`,
                        answer: `Key factors affecting ${jobTitle} salary include experience level, geographic location, industry sector, company size, education level, specialized skills, and certifications. Technical skills and leadership abilities can significantly increase earning potential.`
                    },
                    {
                        question: `How do I negotiate a higher ${jobTitle} salary?`,
                        answer: `To negotiate a higher ${jobTitle} salary: research market rates for your location, highlight unique skills and achievements, consider the full compensation package, time your negotiation after receiving an offer, be confident but flexible, and practice your negotiation conversation.`
                    },
                    {
                        question: `What is the job outlook for ${jobTitle}?`,
                        answer: growthRate
                            ? `The job outlook for ${jobTitle} is strong with ${growthRate}% projected growth over the next decade, which is ${growthRate >= 15 ? 'much faster' : growthRate >= 8 ? 'faster' : 'about equal to'} the average for all occupations.`
                            : `${jobTitle} careers continue to offer stable employment opportunities with growth varying by industry and location.`
                    }
                ]

            case 'cover-letter':
                return [
                    {
                        question: `How do I write a cover letter for a ${jobTitle} position?`,
                        answer: `To write a ${jobTitle} cover letter: 1) Research the company and customize your letter, 2) Highlight relevant ${jobTitle} skills and experiences, 3) Quantify your achievements with specific numbers, 4) Show enthusiasm for the role and company, 5) Proofread carefully before submitting. Use our templates above as a starting point and personalize them for each application.`
                    },
                    {
                        question: `What should I include in my ${jobTitle} cover letter?`,
                        answer: `Your ${jobTitle} cover letter should include: a professional greeting, an engaging opening statement that mentions the specific role, your relevant ${jobTitle} skills and qualifications, specific examples of past achievements, why you want to work for this company, and a strong closing with a call to action. Keep it concise and focused on value you can bring.`
                    },
                    {
                        question: `How long should a ${jobTitle} cover letter be?`,
                        answer: `A ${jobTitle} cover letter should be 3-4 paragraphs and fit on one page (250-400 words). Hiring managers scan quickly, so be concise. Focus on your most relevant ${jobTitle} qualifications and achievements. Quality matters more than quantity - make every word count.`
                    },
                    {
                        question: `What are common mistakes in ${jobTitle} cover letters?`,
                        answer: `Common ${jobTitle} cover letter mistakes include: being too generic instead of customizing, repeating your resume word-for-word, focusing only on what you want rather than what you can offer, exceeding one page, including typos or errors, and not following application instructions. Always proofread and tailor each letter to the specific company and role.`
                    },
                    {
                        question: `How do I tailor my cover letter for a ${jobTitle} job?`,
                        answer: `To tailor your ${jobTitle} cover letter: 1) Research the company's mission, values, and recent news, 2) Review the job description and address key requirements, 3) Highlight relevant ${jobTitle} skills that match their needs, 4) Mention specific company projects or initiatives you admire, 5) Use keywords from the job posting, 6) Show how your background aligns with their goals. Personalization demonstrates genuine interest.`
                    }
                ]

            case 'job-description':
                return [
                    {
                        question: `What does a ${jobTitle} do?`,
                        answer: `A ${jobTitle} is responsible for various tasks including project management, collaboration with team members, and ensuring quality deliverables. They use specialized skills and tools to achieve organizational goals in their field.`
                    },
                    {
                        question: `What are the responsibilities of a ${jobTitle}?`,
                        answer: `${jobTitle} responsibilities include technical tasks, team collaboration, documentation, problem-solving, and maintaining industry standards. They must also stay current with emerging trends and technologies in their field.`
                    },
                    {
                        question: `What skills are required to be a ${jobTitle}?`,
                        answer: `Key ${jobTitle} skills include technical proficiency, communication abilities, problem-solving, attention to detail, and industry-specific knowledge. Educational requirements typically include relevant degrees or certifications.`
                    },
                    {
                        question: `How much does a ${jobTitle} make?`,
                        answer: averageSalary
                            ? `The average ${jobTitle} salary ranges from $${(averageSalary / 1000).toFixed(0)}k to $${((averageSalary * 1.5) / 1000).toFixed(0)}k depending on experience, location, and employer. Additional compensation may include bonuses, benefits, and stock options.`
                            : `${jobTitle} salaries vary based on experience, location, and industry.`
                    },
                    {
                        question: `How do I become a ${jobTitle}?`,
                        answer: `To become a ${jobTitle}, you typically need relevant education, practical experience, and sometimes certifications. Starting in entry-level positions and gaining experience while developing your skills can help you advance in this career path.`
                    }
                ]
        }
    }

    const pageSpecificFAQs = getPageSpecificFAQs()
    const faqSchema = generateFAQSchema(pageSpecificFAQs)

    // Generate Article Schema for SEO
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: config.getHeadline(jobTitle),
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

    // Generate ImageObject Schema for SEO
    const imageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        url: `${baseUrl}/HpLogo.svg`,
        contentUrl: `${baseUrl}/HpLogo.svg`,
        name: config.getHeadline(jobTitle),
        description,
        width: 1200,
        height: 630,
        author: {
            '@type': 'Organization',
            name: 'Hirenest'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Hirenest',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/HpLogo.svg`
            }
        }
    }

    // Generate Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: baseUrl },
        { name: config.breadcrumbName, url: `${baseUrl}/${pageType}` },
        { name: jobTitle, url: pageUrl }
    ])

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        config.getPageName(jobTitle),
        description,
        pageUrl,
        [
            { name: 'Home', url: baseUrl },
            { name: config.breadcrumbName, url: `${baseUrl}/${pageType}` },
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

            {/* Image Object Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
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
