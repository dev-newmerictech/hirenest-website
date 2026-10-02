import { Metadata } from 'next'
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'
import { SeoHero } from '../components/programmatic-seo/SeoHero'
import { SeoContentSection } from '../components/programmatic-seo/SeoContentSection'
import { IndexPageStructuredData } from '../components/programmatic-seo/StructuredData'
import { generatePageMetadata } from '../lib/metadata'
import { enabledJobTitles, getJobsByCategory } from '../lib/programmatic-seo/enabled-job-titles'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
    title: 'Interview Questions & Answers for All Jobs',
    description: 'Ace your job interview with 1,100+ expert questions and answers. Get proven strategies, tips, and advice for 50+ job roles to land your dream position.',
    path: '/interview-questions',
    keywords: [
        'interview questions',
        'job interview preparation',
        'interview questions and answers',
        'behavioral interview questions',
        'technical interview questions',
        'common interview questions',
        'interview tips',
        'job interview tips'
    ]
})

const categories = [
    { id: 'technology', name: 'Technology & IT', icon: '💻' },
    { id: 'marketing', name: 'Marketing', icon: '📣' },
    { id: 'sales', name: 'Sales', icon: '💼' },
    { id: 'hr', name: 'Human Resources', icon: '👥' },
    { id: 'finance', name: 'Finance & Accounting', icon: '💰' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'admin', name: 'Administrative', icon: '📋' },
    { id: 'customer-service', name: 'Customer Service', icon: '🎧' },
]

export default function InterviewQuestionsIndexPage() {
    return (
        <Box>
            {/* Structured Data - SEO */}
            <IndexPageStructuredData pageType="interview-questions" />

            {/* Hero Section */}
            <SeoHero
                badge="Interview Preparation"
                title="Interview Questions"
                titleHighlight="for Every Job"
                description="Master your next job interview with our comprehensive collection of interview questions and expert-approved answers. Covering 50+ job titles across all major industries."
                ctaText="Start Interview Prep"
                ctaHref="https://app.hirenest.ai"
                stats={[
                    { value: '50+', label: 'Job Titles' },
                    { value: '500+', label: 'Questions' },
                    { value: '2026', label: 'Updated' }
                ]}
            />

            <Box mt={16}>
                {/* Categories Section */}
                <SeoContentSection
                    badge="Browse by Category"
                    title="Interview Questions by Industry"
                    description="Find interview questions specific to your industry and role."
                    bgColor="white"
                >
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
                        {categories.map((category) => {
                            const jobs = getJobsByCategory(category.id)
                            return (
                                <Link
                                    key={category.id}
                                    href={`#${category.id}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        bg="rgba(66, 65, 255, 0.03)"
                                        p={6}
                                        borderRadius="xl"
                                        borderWidth="1px"
                                        borderColor="rgba(66, 65, 255, 0.1)"
                                        _hover={{
                                            borderColor: 'rgba(66, 65, 255, 0.3)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: 'lg'
                                        }}
                                        transition="all 0.3s"
                                        cursor="pointer"
                                    >
                                        <Text fontSize="3xl" mb={3}>{category.icon}</Text>
                                        <Heading
                                            as="h3"
                                            fontSize="lg"
                                            fontWeight="700"
                                            color="#1d1d1f"
                                            mb={2}
                                        >
                                            {category.name}
                                        </Heading>
                                        <Text fontSize="sm" color="#6e6e73">
                                            {jobs.length} roles
                                        </Text>
                                    </Box>
                                </Link>
                            )
                        })}
                    </SimpleGrid>
                </SeoContentSection>
            </Box>

            {/* All Jobs Section */}
            {categories.map((category) => {
                const jobs = getJobsByCategory(category.id)
                if (jobs.length === 0) return null

                return (
                    <SeoContentSection
                        key={category.id}
                        badge={category.name}
                        title={`${category.name} Interview Questions`}
                        description={`Expert interview preparation for ${category.name} roles with commonly asked questions and proven answer strategies.`}
                        bgColor={'gray.50'}
                    >
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                            {jobs.map((job) => (
                                <Link
                                    key={job.id}
                                    href={`/interview-questions/${job.slug}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        bg="white"
                                        p={5}
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
                                        <Heading
                                            as="h3"
                                            fontSize={{ base: 'lg', lg: 'xl' }}
                                            fontWeight="700"
                                            color="#1d1d1f"
                                            mb={2}
                                        >
                                            {job.title} Interview Questions
                                        </Heading>
                                        <Text fontSize={{ base: 'sm', md: 'md' }} color="#6e6e73">
                                            Common questions, tips, and answers for {job.title} interviews.
                                        </Text>
                                        {job.growthRate && (
                                            <Text
                                                fontSize={{ base: 'xs', md: 'sm' }}
                                                color="#4241ff"
                                                mt={2}
                                                fontWeight="600"
                                            >
                                                {job.growthRate}% Industry Growth
                                            </Text>
                                        )}
                                    </Box>
                                </Link>
                            ))}
                        </SimpleGrid>
                    </SeoContentSection>
                )
            })}

            {/* Popular Roles Section */}
            <SeoContentSection
                badge="Most Searched"
                title="Popular Interview Questions"
                description="The most searched interview questions on our platform."
                bgColor="white"
            >
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                    {enabledJobTitles.slice(0, 9).map((job) => (
                        <Link
                            key={job.id}
                            href={`/interview-questions/${job.slug}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Box
                                bg="rgba(66, 65, 255, 0.03)"
                                p={5}
                                borderRadius="lg"
                                _hover={{
                                    bg: 'rgba(66, 65, 255, 0.08)',
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
                                    {job.title} Interview Questions
                                </Text>
                            </Box>
                        </Link>
                    ))}
                </SimpleGrid>
            </SeoContentSection>

            {/* Interview Tips */}
            <SeoContentSection
                badge="Expert Tips"
                title="How to Ace Your Job Interview"
                description="Proven strategies to help you succeed in any job interview."
                bgColor="gray.50"
            >
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="2xl" mb={3}>📚</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Research the Company
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Learn about the company's products, culture, values, and recent news. This shows genuine interest and helps you tailor your answers.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="2xl" mb={3}>⭐</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Practice the STAR Method
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Structure your behavioral answers using Situation, Task, Action, and Result. This keeps your responses focused and impactful.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="2xl" mb={3}>❓</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Prepare Questions to Ask
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Come with thoughtful questions about the role, team, and company. This demonstrates your enthusiasm and engagement.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="2xl" mb={3}>👔</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Dress Professionally
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Choose attire appropriate for the company culture. When in doubt, business professional is always a safe choice.
                        </Text>
                    </Box>
                </SimpleGrid>
            </SeoContentSection>

            {/* Final CTA */}
            <CTA />
            <FAQ />
        </Box>
    )
}
