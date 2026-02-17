import { Metadata } from 'next'
import Link from 'next/link'
import { Box, VStack, HStack, Text, Badge, SimpleGrid } from '@chakra-ui/react'
import { SeoHero } from '../components/programmatic-seo/SeoHero'
import { SeoContentSection } from '../components/programmatic-seo/SeoContentSection'
import { IndexPageStructuredData } from '../components/programmatic-seo/StructuredData'
import { getJobsByCategory } from '../lib/programmatic-seo/job-titles'
import { generatePageMetadata } from '../lib/metadata'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
    title: 'Job Descriptions for All Career Paths',
    description: 'Explore job descriptions with responsibilities, requirements, salary. Find your dream career path today.',
    path: '/job-description',
    keywords: [
        'job descriptions',
        'career descriptions',
        'job responsibilities',
        'job requirements',
        'salary by job title',
        'career path',
        'job duties',
        'employment descriptions'
    ]
})

const categories = [
    { id: 'technology', name: 'Technology & IT', icon: '💻', color: 'blue' },
    { id: 'marketing', name: 'Marketing', icon: '📈', color: 'purple' },
    { id: 'sales', name: 'Sales', icon: '💼', color: 'green' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥', color: 'red' },
    { id: 'finance', name: 'Finance & Accounting', icon: '💰', color: 'yellow' },
    { id: 'hr', name: 'Human Resources', icon: '👥', color: 'pink' },
    { id: 'admin', name: 'Administrative', icon: '📋', color: 'gray' },
    { id: 'customer-service', name: 'Customer Service', icon: '🎧', color: 'cyan' },
    { id: 'design', name: 'Design', icon: '🎨', color: 'orange' },
    { id: 'engineering', name: 'Engineering', icon: '⚙️', color: 'teal' },
    { id: 'legal', name: 'Legal', icon: '⚖️', color: 'indigo' },
    { id: 'education', name: 'Education', icon: '📚', color: 'lime' },
    { id: 'real-estate', name: 'Real Estate', icon: '🏠', color: 'emerald' },
    { id: 'skilled-trades', name: 'Skilled Trades', icon: '🔧', color: 'amber' },
    { id: 'hospitality', name: 'Hospitality', icon: '🍽️', color: 'rose' },
    { id: 'transportation', name: 'Transportation', icon: '🚚�', color: 'violet' }
]

export default async function JobDescriptionsPage() {
    // Get jobs by category
    const jobsByCategory = await Promise.all(
        categories.map(async (cat) => ({
            ...cat,
            jobs: getJobsByCategory(cat.id).slice(0, 6) // Show 6 sample jobs per category
        }))
    )

    const totalJobs = jobsByCategory.reduce((sum, cat) => sum + getJobsByCategory(cat.id).length, 0)

    return (
        <Box>
            {/* Structured Data - SEO */}
            <IndexPageStructuredData pageType="job-description" />

            {/* Hero Section */}
            <SeoHero
                badge="Career Explorer"
                title="Job Descriptions"
                titleHighlight="For Every Career Path"
                description={`Explore comprehensive job descriptions for ${totalJobs}+ careers. Discover responsibilities, requirements, salary expectations, and growth opportunities for your dream job.`}
                ctaText="Find Your Career"
                ctaHref="/job-description"
                stats={[
                    { value: totalJobs.toString(), label: 'Job Descriptions' },
                    { value: categories.length.toString(), label: 'Industries' },
                    { value: '2026', label: 'Updated' }
                ]}
            />

            {/* Why Job Descriptions Matter */}
            <SeoContentSection
                badge="Career Research"
                title="Why Read Job Descriptions Before Applying?"
                description="Understanding job descriptions helps you make informed career decisions and prepare better for interviews."
                bgColor="white"
            >
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                    <Box>
                        <Badge bg="blue.100" fontSize={'md'} color="blue.700" mb={3}>Know What to Expect</Badge>
                        <Text fontSize={{ base: 'lg', lg: 'xl' }} color="#424245" lineHeight="1.7">
                            Learn about day-to-day responsibilities and work environment before committing to a career path.
                        </Text>
                    </Box>
                    <Box>
                        <Badge bg="green.100" fontSize={'md'} color="green.700" mb={3}>Prepare Better</Badge>
                        <Text fontSize={{ base: 'lg', lg: 'xl' }} color="#424245" lineHeight="1.7">
                            Understand the skills and qualifications employers are looking for to tailor your application.
                        </Text>
                    </Box>
                    <Box>
                        <Badge bg="purple.100" fontSize={'md'} color="purple.700" mb={3}>Salary Insights</Badge>
                        <Text fontSize={{ base: 'lg', lg: 'xl' }} color="#424245" lineHeight="1.7">
                            Get realistic expectations about compensation and growth potential in your chosen field.
                        </Text>
                    </Box>
                </SimpleGrid>
            </SeoContentSection>

            {/* Categories Grid */}
            <SeoContentSection
                badge="Browse by Industry"
                title="Explore Job Descriptions by Category"
                description="Click on any industry to see detailed job descriptions for roles in that field."
                bgColor="gray.50"
            >
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
                    {categories.map((category) => {
                        const jobCount = getJobsByCategory(category.id).length
                        return (
                            <Link
                                key={category.id}
                                href={`/job-description`}
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
                                    <Text fontSize="3xl" mb={2}>{category.icon}</Text>
                                    <Text
                                        fontSize={{ base: 'lg', lg: 'xl' }}
                                        fontWeight="700"
                                        color="#1d1d1f"
                                        mb={1}
                                    >
                                        {category.name}
                                    </Text>
                                    <Text fontSize="md" color="#6e6e73">
                                        {jobCount} job descriptions
                                    </Text>
                                </Box>
                            </Link>
                        )
                    })}
                </SimpleGrid>
            </SeoContentSection>

            {/* Category Sections with Job Lists */}
            {jobsByCategory.map((category) => (
                <SeoContentSection
                    key={category.id}
                    badge={category.name}
                    title={`${category.name.split(' ')[0]} Job Descriptions`}
                    description={`Explore detailed job descriptions for ${category.jobs.length}+ roles in ${category.name.toLowerCase()}.`}
                    bgColor={categories.indexOf(category) % 2 === 0 ? 'white' : 'gray.50'}
                >
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                        {category.jobs.map((job) => (
                            <Link
                                key={job.id}
                                href={`/job-description/${job.slug}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Box
                                    bg={categories.indexOf(category) % 2 === 0 ? 'gray.50' : 'white'}
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
                                    <Text
                                        fontSize={{ base: 'lg', lg: 'xl' }}
                                        fontWeight="600"
                                        color="#1d1d1f"
                                        mb={2}
                                    >
                                        {job.title}
                                    </Text>
                                    <HStack gap={4} fontSize="md" color="#6e6e73">
                                        {job.averageSalary && (
                                            <Text>${(job.averageSalary / 1000).toFixed(0)}k/yr</Text>
                                        )}
                                        {job.growthRate && (
                                            <Text>{job.growthRate}% growth</Text>
                                        )}
                                    </HStack>
                                </Box>
                            </Link>
                        ))}
                    </SimpleGrid>
                    <Box mt={6} textAlign="center">
                        <Link
                            href={`/interview-questions`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Text
                                fontSize="md"
                                fontWeight="600"
                                color="#4241ff"
                                _hover={{ textDecoration: 'underline' }}
                            >
                                View all {category.name.toLowerCase()} interview questions →
                            </Text>
                        </Link>
                    </Box>
                </SeoContentSection>
            ))}

            {/* CTA Section */}
            <SeoContentSection
                badge="Get Started"
                title="Ready to Explore Your Career?"
                description="Use our AI-powered tools to build your resume and prepare for interviews."
                bgColor="gray.50"
            >
                <HStack gap={4} justify="center" flexWrap="wrap">
                    <Link
                        href="https://app.hirenest.ai/"
                        style={{ textDecoration: 'none' }}
                    >
                        <Box
                            as="button"
                            bg="#4241ff"
                            color="white"
                            px={8}
                            py={4}
                            borderRadius="lg"
                            fontWeight="600"
                            _hover={{ bg: '#3a39dd' }}
                            transition="all 0.2s"
                            cursor={'pointer'}
                        >
                            Build Your Resume
                        </Box>
                    </Link>
                    <Link
                        href="https://app.hirenest.ai/"
                        style={{ textDecoration: 'none' }}
                    >
                        <Box
                            as="button"
                            bg="white"
                            color="#4241ff"
                            px={8}
                            py={4}
                            borderRadius="lg"
                            fontWeight="600"
                            borderWidth="1px"
                            borderColor="#4241ff"
                            _hover={{ bg: 'gray.50' }}
                            transition="all 0.2s"
                            cursor={'pointer'}
                        >
                            Practice Interviews
                        </Box>
                    </Link>
                </HStack>
            </SeoContentSection>
            {/* Featured Job Descriptions */}
            <SeoContentSection
                badge="Most Viewed"
                title="Popular Job Descriptions"
                description="Explore the most searched job descriptions on our platform."
                bgColor="white"
            >
                <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} gap={4}>
                    {getJobsByCategory('technology').slice(0, 12).map((job) => (
                        <Link
                            key={job.id}
                            href={`/job-description/${job.slug}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Box
                                bg="gray.50"
                                p={4}
                                borderRadius="md"
                                _hover={{
                                    bg: 'blue.50',
                                    borderColor: 'rgba(66, 65, 255, 0.3)'
                                }}
                                transition="all 0.2s"
                                cursor="pointer"
                            >
                                <Text
                                    fontSize={{ base: 'md', lg: 'md' }}
                                    fontWeight="600"
                                    color="#1d1d1f"
                                    textAlign="center"
                                >
                                    {job.title}
                                </Text>
                            </Box>
                        </Link>
                    ))}
                </SimpleGrid>
            </SeoContentSection>



            {/* Final CTA */}
            <CTA />
            <FAQ />
        </Box>
    )
}
