import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'
import { SeoHero } from '../../components/programmatic-seo/SeoHero'
import { SeoContentSection, SeoListItem, SeoCardGrid, SeoCard } from '../../components/programmatic-seo/SeoContentSection'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'
import { ProgrammaticSeoStructuredData } from '../../components/programmatic-seo/StructuredData'
import { getJobBySlug } from '../../lib/programmatic-seo/job-titles'
import { getQuestionsForJob, getQuestionsByCategory } from '../../lib/programmatic-seo/interview-questions'
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

    const title = `${job.title} Interview Questions & Answers (2026)`
    const description = `Prepare for your ${job.title} interview with our comprehensive guide. Explore commonly asked ${job.title} interview questions with expert answers, tips, and strategies to ace your next job interview.`

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

    if (!job) {
        notFound()
    }

    const questions = getQuestionsForJob(slug)
    const commonQuestions = questions.filter(q => q.category === 'background' || q.category === 'behavioral')
    const technicalQuestions = questions.filter(q => q.category === 'technical')
    const companyQuestions = questions.filter(q => q.category === 'company-fit')
    const situationalQuestions = questions.filter(q => q.category === 'situational')

    return (
        <Box>
            {/* Structured Data - SEO */}
            <ProgrammaticSeoStructuredData
                jobTitle={job.title}
                pageType="interview-questions"
                slug={slug}
                description={`Prepare for your ${job.title} interview with our comprehensive guide. Explore commonly asked ${job.title} interview questions with expert answers, tips, and strategies to ace your next job interview.`}
            />

            {/* Hero Section */}
            <SeoHero
                badge={`${job.title} Interview Guide`}
                title={`${job.title} Interview`}
                titleHighlight="Questions & Answers"
                description={`Ace your next ${job.title} interview with our comprehensive guide. Discover the most commonly asked questions, expert-approved answers, and proven strategies to stand out from other candidates.`}
                ctaText="Start Interview Prep"
                ctaHref="https://app.hirenest.ai"
                stats={[
                    { value: questions.length.toString(), label: 'Questions Covered' },
                    { value: job.growthRate ? `${job.growthRate}%` : '15%', label: 'Industry Growth' },
                    { value: '2026', label: 'Updated' }
                ]}
            />

            {/* Common Questions Section */}
            <SeoContentSection
                badge="Most Asked"
                title={`Common ${job.title} Interview Questions`}
                description="These are the most frequently asked questions in ${job.title} interviews. Prepare well-thought-out answers to make a strong first impression."
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
                description="Follow these proven strategies to maximize your chances of success."
                bgColor="gray.50"
            >
                <SeoCardGrid>
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
                    <SeoCard
                        title="Technical Expertise"
                        description={`Demonstrate your proficiency in ${job.title}-specific tools, technologies, and methodologies. Share examples of projects where you applied these skills.`}
                    />
                    <SeoCard
                        title="Problem-Solving"
                        description="Employers value ${job.title} professionals who can analyze complex problems and develop effective solutions. Prepare examples that showcase your analytical thinking."
                    />
                    <SeoCard
                        title="Communication"
                        description="Clearly explain your thought process and technical concepts to both technical and non-technical audiences. Strong communication is essential for ${job.title} roles."
                    />
                    <SeoCard
                        title="Adaptability"
                        description={`${job.title} roles evolve quickly. Show how you've adapted to new technologies, processes, or industry changes. Highlight your eagerness to learn and grow.`}
                    />
                    <SeoCard
                        title="Team Collaboration"
                        description="Most ${job.title} positions require teamwork. Share examples of successful collaboration, conflict resolution, and how you contribute to team goals."
                    />
                    <SeoCard
                        title="Attention to Detail"
                        description={`Precision matters in ${job.title} work. Provide examples that show your thoroughness in reviewing work, catching errors, and delivering high-quality results.`}
                    />
                </SeoCardGrid>
            </SeoContentSection>

            {/* Common Mistakes to Avoid */}
            <SeoContentSection
                badge="Red Flags"
                title={`${job.title} Interview Mistakes to Avoid`}
                description="Steer clear of these common pitfalls that can hurt your chances of landing the job."
                bgColor="gray.50"
            >
                <SeoCardGrid>
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
                </SeoCardGrid>
            </SeoContentSection>

            {/* Related Roles */}
            {/* <SeoContentSection
                badge="Explore More"
                title="Related Interview Questions"
                description="Prepare for interviews in similar roles with our comprehensive guides."
                bgColor="gray.50"
            >
                <SeoCardGrid>
                    {job.aliases.slice(0, 6).map((alias, index) => (
                        <Link
                            key={index}
                            href={`/interview-questions/${alias.toLowerCase().replace(/ /g, '-')}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Box
                                bg="white"
                                p={6}
                                borderRadius="lg"
                                borderWidth="1px"
                                borderColor="gray.200"
                                _hover={{
                                    borderColor: 'rgba(66, 65, 255, 0.3)',
                                    boxShadow: 'md',
                                    transform: 'translateY(-2px)'
                                }}
                                transition="all 0.2s"
                                cursor="pointer"
                            >
                                <Text
                                    fontSize="md"
                                    fontWeight="600"
                                    color="#1d1d1f"
                                >
                                    {alias} Interview Questions
                                </Text>
                            </Box>
                        </Link>
                    ))}
                </SeoCardGrid>
            </SeoContentSection> */}

            {/* Final CTA */}
            <CTA />
            <FAQ />
        </Box>
    )
}
