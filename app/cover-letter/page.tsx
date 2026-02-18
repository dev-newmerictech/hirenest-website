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
    title: 'Cover Letter Examples & Templates for All Jobs',
    description: 'Browse 1,715+ cover letter examples and templates. Get proven samples, tips for every industry.',
    path: '/cover-letter',
    keywords: [
        'cover letter examples',
        'cover letter templates',
        'professional cover letter',
        'job application letter',
        'cover letter samples',
        'how to write a cover letter',
        'cover letter tips',
        'free cover letter templates',
        'cover letter format',
        'cover letter examples by job title'
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
    { id: 'transportation', name: 'Transportation', icon: '🚚', color: 'violet' }
]

// Get most popular cover letter searches
const getPopularJobs = () => {
    const allJobs = [
        ...getJobsByCategory('technology'),
        ...getJobsByCategory('healthcare'),
        ...getJobsByCategory('sales'),
        ...getJobsByCategory('marketing'),
        ...getJobsByCategory('finance'),
        ...getJobsByCategory('admin'),
        ...getJobsByCategory('design')
    ]

    const popularSlugs = [
        'software-engineer',
        'data-scientist',
        'product-manager',
        'registered-nurse',
        'sales-representative',
        'marketing-manager',
        'financial-analyst',
        'ux-designer',
        'project-manager',
        'customer-service-representative',
        'executive-assistant',
        'accountant'
    ]

    return popularSlugs
        .map(slug => allJobs.find(j => j.slug === slug))
        .filter((job): job is typeof allJobs[number] => job !== undefined)
}

export default async function CoverLetterExamplesPage() {
    const popularJobs = getPopularJobs()
    const totalJobs = categories.reduce((sum, cat) => sum + getJobsByCategory(cat.id).length, 0)

    // Get jobs by category for display
    const jobsByCategory = categories.map((cat) => {
        const jobs = getJobsByCategory(cat.id).slice(0, 6)
        return {
            ...cat,
            jobs
        }
    })

    return (
        <Box>
            {/* Structured Data - SEO */}
            <IndexPageStructuredData pageType="cover-letter" />

            {/* Hero Section */}
            <SeoHero
                badge="Job Application Success"
                title="Cover Letter Examples"
                titleHighlight="For Every Job"
                description={`Browse professional cover letter examples and templates for ${totalJobs}+ job titles. Get proven samples, expert tips, and templates that help you land more interviews.`}
                ctaText="Find Your Cover Letter"
                ctaHref="#categories"
                stats={[
                    { value: totalJobs.toString(), label: 'Job Titles' },
                    { value: categories.length.toString(), label: 'Industries' },
                    { value: '3', label: 'Template Types' }
                ]}
            />

            <Box mt={16}>
                {/* Why Cover Letters Matter */}
                <SeoContentSection
                    badge="Stand Out"
                    title="Why a Great Cover Letter Matters"
                    description="A well-written cover letter can be the difference between getting an interview and being passed over."
                    bgColor="white"
                >
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                        <Box>
                            <Badge bg="purple.100" color="purple.700" mb={3} fontSize="sm" fontWeight="600">
                                Tell Your Story
                            </Badge>
                            <Text fontSize={{ base: 'lg', lg: 'xl' }} color="#424245" lineHeight="1.7">
                                Cover letters let you explain gaps, career changes, and unique qualifications that resumes can't capture.
                            </Text>
                        </Box>
                        <Box>
                            <Badge bg="blue.100" color="blue.700" mb={3} fontSize="sm" fontWeight="600">
                                Show Personality
                            </Badge>
                            <Text fontSize={{ base: 'lg', lg: 'xl' }} color="#424245" lineHeight="1.7">
                                Demonstrate your enthusiasm, communication style, and cultural fit before you even meet the team.
                            </Text>
                        </Box>
                        <Box>
                            <Badge bg="green.100" color="green.700" mb={3} fontSize="sm" fontWeight="600">
                                More Interviews
                            </Badge>
                            <Text fontSize={{ base: 'lg', lg: 'xl' }} color="#424245" lineHeight="1.7">
                                Candidates with tailored cover letters receive 40% more interview requests than those without.
                            </Text>
                        </Box>
                    </SimpleGrid>
                </SeoContentSection>
            </Box>

            {/* Most Popular Cover Letters */}
            <SeoContentSection
                badge="Trending Now"
                title="Most Searched Cover Letters"
                description="These are the most in-demand cover letter examples this month."
                bgColor="gray.50"
            >
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
                    {popularJobs.map((job) => (
                        <Link
                            key={job.id}
                            href={`/cover-letter/${job.slug}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Box
                                bg="white"
                                p={4}
                                borderRadius="lg"
                                borderWidth="1px"
                                borderColor="gray.200"
                                _hover={{
                                    borderColor: 'rgba(102, 126, 234, 0.5)',
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
                                    mb={1}
                                >
                                    {job.title}
                                </Text>
                                <Text fontSize="sm" color="#6e6e73">
                                    View Template →
                                </Text>
                            </Box>
                        </Link>
                    ))}
                </SimpleGrid>
            </SeoContentSection>

            {/* Categories Grid */}
            <Box id="categories">
                <SeoContentSection
                    badge="Browse by Industry"
                    title="Cover Letters by Industry"
                    description="Find cover letter examples for jobs in your industry."
                    bgColor="white"
                >
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
                        {categories.map((category) => {
                            const jobCount = getJobsByCategory(category.id).length
                            return (
                                <Link
                                    key={category.id}
                                    href={`#cover-letter-${category.id}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        bg="gray.50"
                                        p={5}
                                        borderRadius="lg"
                                        borderWidth="1px"
                                        borderColor="gray.200"
                                        _hover={{
                                            borderColor: 'rgba(102, 126, 234, 0.5)',
                                            boxShadow: 'md',
                                            transform: 'translateY(-2px)'
                                        }}
                                        transition="all 0.2s"
                                        cursor="pointer"
                                    >
                                        <Text fontSize="2xl" mb={2}>{category.icon}</Text>
                                        <Text
                                            fontSize="md"
                                            fontWeight="700"
                                            color="#1d1d1f"
                                            mb={1}
                                        >
                                            {category.name}
                                        </Text>
                                        <Text fontSize="sm" color="#6e6e73">
                                            {jobCount} cover letters
                                        </Text>
                                    </Box>
                                </Link>
                            )
                        })}
                    </SimpleGrid>
                </SeoContentSection>
            </Box>

            {/* CTA Section */}
            <SeoContentSection
                badge="Get Hired"
                title="Ready to Write Your Winning Cover Letter?"
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
                            bg="#667eea"
                            color="white"
                            px={8}
                            py={4}
                            borderRadius="lg"
                            fontWeight="600"
                            _hover={{ bg: '#5568d3' }}
                            transition="all 0.2s"
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
                            color="#667eea"
                            px={8}
                            py={4}
                            borderRadius="lg"
                            fontWeight="600"
                            borderWidth="1px"
                            borderColor="#667eea"
                            _hover={{ bg: 'gray.50' }}
                            transition="all 0.2s"
                        >
                            Practice Interviews
                        </Box>
                    </Link>
                </HStack>
            </SeoContentSection>
            {/* Category Sections with Job Lists */}
            {jobsByCategory.map((category) => (
                <Box key={category.id} id={`cover-letter-${category.id}`}>
                    <SeoContentSection
                        badge={category.name}
                        title={`${category.name} Cover Letters`}
                        description={`Professional cover letter templates and examples for ${category.jobs.length} top ${category.name.toLowerCase()} roles.`}
                        bgColor={categories.indexOf(category) % 2 === 0 ? 'gray.50' : 'white'}
                    >
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                            {category.jobs.map((job) => (
                                <Link
                                    key={job.id}
                                    href={`/cover-letter/${job.slug}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        bg={categories.indexOf(category) % 2 === 0 ? 'white' : 'gray.50'}
                                        p={5}
                                        borderRadius="lg"
                                        borderWidth="1px"
                                        borderColor="gray.200"
                                        _hover={{
                                            borderColor: 'rgba(102, 126, 234, 0.5)',
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
                                            {job.title} Cover Letter
                                        </Text>
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
                                    color="#667eea"
                                    _hover={{ textDecoration: 'underline' }}
                                >
                                    View {category.name} interview questions →
                                </Text>
                            </Link>
                        </Box>
                    </SeoContentSection>
                </Box>
            ))}

            {/* Final CTA */}
            <CTA />
            <FAQ />
        </Box>
    )
}
