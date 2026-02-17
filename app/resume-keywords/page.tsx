import { Metadata } from 'next'
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'
import { SeoHero } from '../components/programmatic-seo/SeoHero'
import { SeoContentSection } from '../components/programmatic-seo/SeoContentSection'
import { generatePageMetadata } from '../lib/metadata'
import { jobTitles, getJobsByCategory } from '../lib/programmatic-seo/job-titles'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
    title: 'Resume Keywords & Skills for All Jobs (2026)',
    description: 'Discover the best resume keywords and skills for your job. Our comprehensive guides help you optimize your resume for ATS and impress recruiters. Covering 50+ job titles.',
    path: '/resume-keywords',
    keywords: [
        'resume keywords',
        'resume skills',
        'ATS resume keywords',
        'resume optimization',
        'keywords for resume',
        'best resume keywords',
        'resume skills list',
        'ATS friendly resume'
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

export default function ResumeKeywordsIndexPage() {
    return (
        <Box>
            {/* Hero Section */}
            <SeoHero
                badge="Resume Optimization"
                title="Resume Keywords"
                titleHighlight="That Get You Hired"
                description="Optimize your resume with ATS-friendly keywords that recruiters search for. Our comprehensive guides cover the top skills and keywords for 50+ job titles."
                ctaText="Build Your Resume"
                ctaHref="https://app.hirenest.ai"
                stats={[
                    { value: '50+', label: 'Job Titles' },
                    { value: '500+', label: 'Keywords' },
                    { value: 'ATS', label: 'Optimized' }
                ]}
            />

            {/* Categories Section */}
            <SeoContentSection
                badge="Browse by Category"
                title="Resume Keywords by Industry"
                description="Find resume keywords and skills specific to your industry and target role."
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

            {/* All Jobs Section */}
            {categories.map((category) => {
                const jobs = getJobsByCategory(category.id)
                if (jobs.length === 0) return null

                return (
                    <SeoContentSection
                        key={category.id}
                        badge={category.name}
                        title={`${category.name} Resume Keywords`}
                        description={`Essential resume keywords and skills for ${category.name} professionals. Optimize your resume with industry-specific terminology.`}
                        bgColor={'gray.50'}
                    >
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                            {jobs.map((job) => (
                                <Link
                                    key={job.id}
                                    href={`/resume-keywords/${job.slug}`}
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
                                            fontSize={{ base: 'lg', md: 'xl' }}
                                            fontWeight="700"
                                            color="#1d1d1f"
                                            mb={2}
                                        >
                                            {job.title} Resume Keywords
                                        </Heading>
                                        <Text fontSize={{ base: 'sm', md: 'md' }} color="#6e6e73">
                                            Top skills and keywords for {job.title} resumes that pass ATS.
                                        </Text>
                                        {job.averageSalary && (
                                            <Text
                                                fontSize={{ base: 'xs', md: 'sm' }}
                                                color="#4241ff"
                                                mt={2}
                                                fontWeight="600"
                                            >
                                                ${Math.round(job.averageSalary / 1000)}k Avg Salary
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
                title="Popular Resume Keywords"
                description="The most searched resume keywords on our platform."
                bgColor="white"
            >
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                    {jobTitles.slice(0, 9).map((job) => (
                        <Link
                            key={job.id}
                            href={`/resume-keywords/${job.slug}`}
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
                                    {job.title} Resume Keywords
                                </Text>
                            </Box>
                        </Link>
                    ))}
                </SimpleGrid>
            </SeoContentSection>

            {/* Keyword Categories */}
            <SeoContentSection
                badge="Skill Types"
                title="Resume Keyword Categories"
                description="Understanding different types of keywords to include on your resume."
                bgColor="gray.50"
            >
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="2xl" mb={3}>🔧</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Hard Skills
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Technical abilities specific to your job like programming languages, software proficiency, and industry knowledge.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="2xl" mb={3}>🛠️</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Tools & Software
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Familiarity with industry tools and platforms that demonstrate practical expertise and readiness to contribute.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="2xl" mb={3}>🤝</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Soft Skills
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Interpersonal qualities like communication, leadership, and adaptability that employers value highly.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="2xl" mb={3}>✨</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Action Verbs
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Powerful words to start bullet points that make your accomplishments sound impressive and impactful.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="2xl" mb={3}>🎖️</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Certifications
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Professional credentials that validate your expertise and commitment to professional development.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="2xl" mb={3}>📊</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Industry Terms
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Jargon and terminology specific to your field that shows you understand the industry language.
                        </Text>
                    </Box>
                </SimpleGrid>
            </SeoContentSection>

            {/* ATS Tips */}
            <SeoContentSection
                badge="ATS Tips"
                title="How to Beat ATS with Keywords"
                description="Applicant Tracking Systems scan resumes for keywords. Here's how to optimize."
                bgColor="white"
            >
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                    <Box
                        bg="rgba(66, 65, 255, 0.03)"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="rgba(66, 65, 255, 0.1)"
                    >
                        <Text fontSize="2xl" mb={3}>1️⃣</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Match Job Descriptions
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Review the job posting and include exact keywords from the description. ATS systems look for specific terms and phrases.
                        </Text>
                    </Box>
                    <Box
                        bg="rgba(66, 65, 255, 0.03)"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="rgba(66, 65, 255, 0.1)"
                    >
                        <Text fontSize="2xl" mb={3}>2️⃣</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Use Standard Section Headers
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Stick to conventional headers like "Experience," "Education," and "Skills." ATS systems scan for these standard sections.
                        </Text>
                    </Box>
                    <Box
                        bg="rgba(66, 65, 255, 0.03)"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="rgba(66, 65, 255, 0.1)"
                    >
                        <Text fontSize="2xl" mb={3}>3️⃣</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Avoid Graphics and Tables
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            ATS parsers struggle with complex formatting. Use simple, clean layouts with standard bullet points and text.
                        </Text>
                    </Box>
                    <Box
                        bg="rgba(66, 65, 255, 0.03)"
                        p={6}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="rgba(66, 65, 255, 0.1)"
                    >
                        <Text fontSize="2xl" mb={3}>4️⃣</Text>
                        <Heading as="h3" fontSize="lg" fontWeight="700" color="#000" mb={3}>
                            Sprinkle Keywords Naturally
                        </Heading>
                        <Text fontSize="md" color="#6e6e73" lineHeight="1.6">
                            Don't keyword stuff. Integrate terms naturally throughout your resume in context with your actual experience.
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
