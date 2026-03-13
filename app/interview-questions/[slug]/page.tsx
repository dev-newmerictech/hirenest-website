import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
    Box, Text, HStack,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { SeoHero } from '../../components/programmatic-seo/SeoHero'
import { SeoContentSection, SeoListItem, SeoCardGrid, SeoCard } from '../../components/programmatic-seo/SeoContentSection'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'
import { getJobBySlug, enabledJobTitles } from '../../lib/programmatic-seo/enabled-job-titles'
import { getQuestionsForJob } from '../../lib/programmatic-seo/interview-questions'
import { generatePageMetadata } from '../../lib/metadata'
import { getUniqueContentForJob, hasUniqueContent, type UniqueJobContent } from '../../lib/programmatic-seo/unique-job-content'
// New SEO components
import { JsonLdSchema, BreadcrumbNav, InternalLinking } from '../../components/seo'
import { getRelatedPages, getCrossTemplateLinks, getBreadcrumbItems } from '../../lib/seo/helpers'
import { buildPageSchemas } from '../../lib/seo/core/schema-builder-factory'
import { SEO_CONFIG } from '../../lib/seo/core/constants'

// ISR: Revalidate pages every 24 hours
export const revalidate = 86400; // 24 hours in seconds

// On-Demand ISR: Allow dynamic generation for non-prebuilt pages
export const dynamicParams = true;

// Generate static params for top 100 jobs at build time (rest generate on first visit)
export async function generateStaticParams() {
    return enabledJobTitles.slice(0, 100).map((job) => ({
        slug: job.slug,
    }))
}

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const job = getJobBySlug(slug)
    const uniqueContent = getUniqueContentForJob(slug)

    if (!job) {
        return {
            title: 'Page Not Found'
        }
    }

    // Use unique meta title/description if available, otherwise fall back to template
    const title = uniqueContent?.metaTitle?.slice(0, 55) || `${job.title} Interview Questions`.slice(0, 55)
    const description = uniqueContent?.metaDescription?.slice(0, 160) ||
        `Prepare for your ${job.title} interview with 10+ questions and expert answers. Ace your interview with proven strategies.`
            .slice(0, 150)

    return generatePageMetadata({
        title,
        description,
        path: `/interview-questions/${slug}`,
        keywords: [
            `${job.title} interview questions`,
            `${job.title} interview`,
            `${job.title} interview answers`,
            `${job.title} interview tips`,
            `how to prepare for ${job.title} interview`,
            `${job.title} behavioral interview questions`,
            `${job.title} technical interview questions`,
            ...job.aliases.flatMap(alias => [
                `${alias} interview questions`,
                `${alias} interview`
            ])
        ]
    })
}

export default async function InterviewQuestionsPage({ params }: PageProps) {
    const { slug } = await params
    const job = getJobBySlug(slug)
    const uniqueContent = getUniqueContentForJob(slug)

    if (!job) {
        notFound()
    }

    const questions = getQuestionsForJob(slug)

    // Use unique questions if available, otherwise fall back to template questions
    const commonQuestions = uniqueContent && uniqueContent?.questions && uniqueContent?.questions?.common?.length > 0
        ? uniqueContent.questions.common
        : questions.filter(q => q.category === 'background' || q.category === 'behavioral')
    const technicalQuestions = uniqueContent && uniqueContent?.questions && uniqueContent?.questions?.technical?.length > 0
        ? uniqueContent.questions.technical
        : questions.filter(q => q.category === 'technical')
    const companyQuestions = uniqueContent && uniqueContent?.questions && uniqueContent?.questions?.companyFit?.length > 0
        ? uniqueContent.questions.companyFit
        : questions.filter(q => q.category === 'company-fit')
    const situationalQuestions = uniqueContent && uniqueContent?.questions && uniqueContent?.questions?.situational?.length > 0
        ? uniqueContent.questions.situational
        : questions.filter(q => q.category === 'situational')

    // Get related pages for internal linking
    const relatedPages = getRelatedPages(slug, 'interview-questions', 6)
    const crossTemplateLinks = getCrossTemplateLinks(slug, job.title)
    const breadcrumbItems = getBreadcrumbItems('interview-questions', job.title, slug)

    // Build schema.org structured data
    const pageUrl = `${SEO_CONFIG.BASE_URL}/interview-questions/${slug}`
    const faqItems = questions.slice(0, 10).map(q => ({
        question: q.question,
        answer: q.answer
    }))
    const schemas = buildPageSchemas({
        title: `${job.title} Interview Questions`,
        description: `Prepare for your ${job.title} interview with commonly asked questions and expert answers. Get proven strategies and tips to ace your interview.`,
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
            <SeoHero
                badge={`${job.title} Interview Guide`}
                title={`${job.title} Interview`}
                titleHighlight="Questions & Answers"
                description={uniqueContent?.heroDescription || `Ace your next ${job.title} interview with our comprehensive guide. Discover the most commonly asked questions, expert-approved answers, and proven strategies to stand out from other candidates.`}
                ctaText="Start Interview Prep"
                ctaHref="https://app.hirenest.ai"
                stats={[
                    { value: questions.length.toString(), label: 'Questions Covered' },
                    { value: job.growthRate ? `${job.growthRate}%` : '15%', label: 'Industry Growth' },
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

            {/* Unique Introduction - Only shows if unique content exists */}
            {uniqueContent?.introduction && (
                <SeoContentSection
                    badge="About This Role"
                    title={`What to Expect in ${job.title} Interviews`}
                    description=""
                    bgColor="white"
                >
                    <Text fontSize="lg" color="#4a5568" lineHeight="1.8" whiteSpace="pre-line">
                        {uniqueContent.introduction}
                    </Text>
                </SeoContentSection>
            )}
            {/* Common Questions Section */}
            <SeoContentSection
                badge="Most Asked"
                title={`Common ${job.title} Interview Questions`}
                description={`These are the most frequently asked questions in ${job.title} interviews. Prepare well-thought-out answers to make a strong first impression.`}
                bgColor="white"
            >
                <SeoCardGrid columns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>
                    {commonQuestions.map((q, index) => (
                        <SeoListItem
                            key={q.id}
                            question={q.question}
                            answer={q.answer}
                            index={index + 1}
                        />
                    ))}
                </SeoCardGrid>
            </SeoContentSection>

            {/* Technical Questions Section */}
            {technicalQuestions.length > 0 && (
                <SeoContentSection
                    badge="Technical"
                    title={`Technical ${job.title} Interview Questions`}
                    description="Demonstrate your expertise with these technical questions commonly asked in ${job.title} interviews."
                    bgColor="gray.50"
                >
                    <SeoCardGrid columns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>
                        {technicalQuestions.map((q, index) => (
                            <SeoListItem
                                key={q.id}
                                question={q.question}
                                answer={q.answer}
                                index={index + 1}
                            />
                        ))}
                    </SeoCardGrid>
                </SeoContentSection>
            )}

            {/* Company Fit Questions */}
            {companyQuestions.length > 0 && (
                <SeoContentSection
                    badge="Company Fit"
                    title="Questions About the Company"
                    description="Show your genuine interest and research with these company-focused questions."
                    bgColor="white"
                >
                    <SeoCardGrid columns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>
                        {companyQuestions.map((q, index) => (
                            <SeoListItem
                                key={q.id}
                                question={q.question}
                                answer={q.answer}
                                index={index + 1}
                            />
                        ))}
                    </SeoCardGrid>
                </SeoContentSection>
            )}

            {/* Situational Questions */}
            {situationalQuestions.length > 0 && (
                <SeoContentSection
                    badge="What Would You Do?"
                    title={`Situational ${job.title} Interview Questions`}
                    description="Employers ask situational questions to understand your problem-solving approach and how you'd handle real workplace scenarios. These 'what would you do' questions test your judgment and decision-making skills."
                    bgColor="gray.50"
                >
                    <SeoCardGrid columns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>
                        {situationalQuestions.map((q, index) => (
                            <SeoListItem
                                key={q.id}
                                question={q.question}
                                answer={q.answer}
                                index={index + 1}
                            />
                        ))}
                    </SeoCardGrid>
                </SeoContentSection>
            )}

            {/* Preparation Tips */}
            <SeoContentSection
                badge="Interview Tips"
                title={`How to Prepare for Your ${job.title} Interview`}
                description={uniqueContent?.preparationTips ? "Role-specific strategies from industry professionals." : "Follow these proven strategies to maximize your chances of success."}
                bgColor="gray.50"
            >
                <SeoCardGrid>
                    {uniqueContent?.preparationTips && uniqueContent.preparationTips.length > 0 ? (
                        uniqueContent.preparationTips.map((tip, index) => (
                            <SeoListItem
                                key={index}
                                index={index + 1}
                                question={tip.title}
                                answer={tip.description}
                            />
                        ))
                    ) : (
                        <>
                            <SeoListItem
                                index={1}
                                question="Research the Company Thoroughly"
                                answer={`Before your ${job.title} interview, research the company's products, services, culture, and recent news. Understanding their business shows genuine interest and helps you tailor your answers to their needs.`}
                            />
                            <SeoListItem
                                index={2}
                                question="Practice the STAR Method"
                                answer="Structure your behavioral answers using STAR: Situation (set the context), Task (describe your responsibility), Action (explain what you did), and Result (share the outcome). This keeps your answers focused and impactful."
                            />
                            <SeoListItem
                                index={3}
                                question="Prepare Questions to Ask"
                                answer={`Come prepared with thoughtful questions about the ${job.title} role, team dynamics, company culture, and growth opportunities. This demonstrates your enthusiasm and helps you evaluate if the role is right for you.`}
                            />
                            <SeoListItem
                                index={4}
                                question="Mock Interviews Help"
                                answer={`Practice answering ${job.title} interview questions out loud, ideally with a partner or mentor. Record yourself to identify areas for improvement like body language, filler words, and response clarity.`}
                            />
                            <SeoListItem
                                index={5}
                                question="Bring Relevant Examples"
                                answer={`Prepare 5-6 specific stories from your experience that demonstrate your ${job.title} skills. Adapt these examples to answer different questions, ensuring you always have concrete evidence of your abilities.`}
                            />
                            <SeoListItem
                                index={6}
                                question="Dress Professionally"
                                answer={`Research the company culture to determine appropriate attire. When in doubt, choose business professional over casual. First impressions matter significantly in ${job.title} interviews.`}
                            />
                        </>
                    )}
                </SeoCardGrid>
            </SeoContentSection>

            {/* Skills Required */}
            <SeoContentSection
                badge="Key Skills"
                title={`Essential Skills for ${job.title} Roles`}
                description={`Employers look for these key skills when hiring ${job.title} professionals. Highlight these in your interview answers.`}
                bgColor="white"
            >
                <SeoCardGrid>
                    {uniqueContent?.keySkills && uniqueContent.keySkills.length > 0 ? (
                        uniqueContent.keySkills.map((skill, index) => (
                            <SeoCard
                                key={index}
                                title={skill.title}
                                description={skill.description}
                            />
                        ))
                    ) : (
                        <>
                            <SeoCard
                                title="Technical Expertise"
                                description={`Demonstrate your proficiency in ${job.title} specific tools, technologies, and methodologies. Share examples of projects where you applied these skills.`}
                            />
                            <SeoCard
                                title="Problem-Solving"
                                description={`Employers value ${job.title} professionals who can analyze complex problems and develop effective solutions. Prepare examples that showcase your analytical thinking.`}
                            />
                            <SeoCard
                                title="Communication"
                                description={`Clearly explain your thought process and technical concepts to both technical and non-technical audiences. Strong communication is essential for ${job.title} roles.`}
                            />
                            <SeoCard
                                title="Adaptability"
                                description={`${job.title} roles evolve quickly. Show how you've adapted to new technologies, processes, or industry changes. Highlight your eagerness to learn and grow.`}
                            />
                            <SeoCard
                                title="Team Collaboration"
                                description={`Most ${job.title} positions require teamwork. Share examples of successful collaboration, conflict resolution, and how you contribute to team goals.`}
                            />
                            <SeoCard
                                title="Attention to Detail"
                                description={`Precision matters in ${job.title} work. Provide examples that show your thoroughness in reviewing work, catching errors, and delivering high-quality results.`}
                            />
                        </>
                    )}
                </SeoCardGrid>
            </SeoContentSection>

            {/* Common Mistakes to Avoid */}
            <SeoContentSection
                badge="Red Flags"
                title={`${job.title} Interview Mistakes to Avoid`}
                description={uniqueContent?.commonMistakes ? "Role-specific pitfalls that can hurt your chances." : "Steer clear of these common pitfalls that can hurt your chances of landing the job."}
                bgColor="gray.50"
            >
                <SeoCardGrid>
                    {uniqueContent?.commonMistakes && uniqueContent.commonMistakes.length > 0 ? (
                        uniqueContent.commonMistakes.map((mistake, index) => (
                            <SeoCard
                                key={index}
                                title={mistake.title}
                                description={mistake.description}
                            />
                        ))
                    ) : (
                        <>
                            <SeoCard
                                title="Speaking Negatively"
                                description="Never badmouth previous employers, managers, or coworkers. It reflects poorly on your professionalism. Frame departures positively, focusing on growth opportunities."
                            />
                            <SeoCard
                                title="Rambling Answers"
                                description="Keep responses concise and focused. Aim for 1-2 minutes per answer. Practice delivering clear, structured responses that directly address the question."
                            />
                            <SeoCard
                                title="Lack of Preparation"
                                description="Failing to research the company or role is obvious. Always review the company website, recent news, and job description before interviewing."
                            />
                            <SeoCard
                                title="Vague Responses"
                                description="Back up claims with specific examples. Use the STAR method to provide concrete evidence of your skills and accomplishments."
                            />
                            <SeoCard
                                title="Asking No Questions"
                                description="When asked if you have questions, saying 'no' shows lack of interest. Always prepare thoughtful questions about the role, team, and company."
                            />
                            <SeoCard
                                title="Arrogance"
                                description="Confidence is good, but arrogance is not. Balance showcasing your achievements with humility and team-oriented mindset."
                            />
                            <SeoCard
                                title="Checking Your Phone"
                                description="Keep your phone silenced and away. Checking it during an interview signals disinterest and disrespect for the interviewer's time."
                            />
                            <SeoCard
                                title="Not Following Up"
                                description="Send a thank-you email within 24 hours. Reiterate your interest and mention specific topics discussed to reinforce your fit for the role."
                            />
                        </>
                    )}
                </SeoCardGrid>
            </SeoContentSection>

            {/* Industry Insights - Only shows if unique content exists */}
            {uniqueContent?.industryInsights && (
                <SeoContentSection
                    badge="Industry Insights"
                    title={`The ${job.title} Job Market in 2024`}
                    description="What employers are looking for and how the role is evolving."
                    bgColor="white"
                >
                    <Text fontSize="lg" color="#4a5568" lineHeight="1.8" whiteSpace="pre-line">
                        {uniqueContent.industryInsights}
                    </Text>
                </SeoContentSection>
            )}

            {/* Salary Context - Only shows if unique content exists */}
            {uniqueContent?.salaryContext && (
                <SeoContentSection
                    badge="Compensation"
                    title={`${job.title} Salary Expectations`}
                    description="Understanding compensation ranges for this role."
                    bgColor="gray.50"
                >
                    <Text fontSize="lg" color="#4a5568" lineHeight="1.8" whiteSpace="pre-line">
                        {uniqueContent.salaryContext}
                    </Text>
                </SeoContentSection>
            )}

            {/* Career Path - Only shows if unique content exists */}
            {uniqueContent?.careerPath && (
                <SeoContentSection
                    badge="Career Growth"
                    title={`Career Progression for ${job.title}s`}
                    description="Typical career path and advancement opportunities."
                    bgColor="white"
                >
                    <Text fontSize="lg" color="#4a5568" lineHeight="1.8" whiteSpace="pre-line">
                        {uniqueContent.careerPath}
                    </Text>
                </SeoContentSection>
            )}

            {/* Writer Attribution - Only shows if unique content exists */}
            {uniqueContent && (
                <SeoContentSection
                    badge="Expert Reviewed"
                    title="About This Guide"
                    description=""
                    bgColor="gray.50"
                >
                    <Text fontSize="md" color="#718096" lineHeight="1.7">
                        This guide was reviewed and updated by <strong>{uniqueContent.writerName}</strong>. {uniqueContent.writerBio} Last updated: {uniqueContent.lastUpdated}.
                    </Text>
                </SeoContentSection>
            )}

            {/* Related Roles - Internal Linking */}
            {relatedPages.length > 0 && (
                <InternalLinking
                    title="Related Interview Questions"
                    description="Prepare for interviews in similar roles with our comprehensive guides."
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
