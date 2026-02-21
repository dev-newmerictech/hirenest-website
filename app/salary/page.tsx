import { Metadata } from 'next'
import Link from 'next/link'
import { Box, VStack, HStack, Text, Badge, SimpleGrid } from '@chakra-ui/react'
import { SeoHero } from '../components/programmatic-seo/SeoHero'
import { SeoContentSection } from '../components/programmatic-seo/SeoContentSection'
import { IndexPageStructuredData } from '../components/programmatic-seo/StructuredData'
import { getJobsByCategory, getJobBySlug } from '../lib/programmatic-seo/enabled-job-titles'
import { generatePageMetadata } from '../lib/metadata'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
    title: 'Salary Guides for All Jobs & Industries',
    description: 'Compare salary guides by experience level and location. Get expert negotiation tips and comprehensive pay data for your career advancement.',
    path: '/salary',
    keywords: [
        'salary guides',
        'salary by job title',
        'average salary',
        'pay scale',
        'compensation guide',
        'salary negotiation',
        'wage information',
        'job salary comparison'
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

// Get highest paying jobs
const getHighestPayingJobs = () => {
    const allJobs = categories.flatMap(cat =>
        getJobsByCategory(cat.id)
            .filter(job => job.averageSalary)
            .sort((a, b) => (b.averageSalary || 0) - (a.averageSalary || 0))
    )
    return allJobs.slice(0, 12)
}

export default async function SalaryGuidesPage() {
    // Get jobs by category with salary info
    const jobsByCategory = await Promise.all(
        categories.map(async (cat) => {
            const jobs = getJobsByCategory(cat.id)
                .filter(job => job.averageSalary)
                .sort((a, b) => (b.averageSalary || 0) - (a.averageSalary || 0))
                .slice(0, 6)

            const avgSalary = jobs.length > 0
                ? Math.round(jobs.reduce((sum, job) => sum + (job.averageSalary || 0), 0) / jobs.length)
                : 0

            return {
                ...cat,
                jobs,
                avgSalary
            }
        })
    )

    const highestPayingJobs = getHighestPayingJobs()
    const totalJobs = categories.reduce((sum, cat) => sum + getJobsByCategory(cat.id).length, 0)

    return (
        <Box>
            {/* Structured Data - SEO */}
            <IndexPageStructuredData pageType="salary" />

            {/* Hero Section */}
            <SeoHero
                badge="Career Compensation"
                title="Salary Guides"
                titleHighlight="For Every Career"
                description={`Explore salary data for ${totalJobs}+ job titles. Discover average pay, salary ranges by experience level, location comparisons, and expert negotiation tips for your dream career.`}
                ctaText="Find Your Salary"
                ctaHref="#categories"
                stats={[
                    { value: totalJobs.toString(), label: 'Job Titles' },
                    { value: categories.length.toString(), label: 'Industries' },
                    { value: '2026', label: 'Updated' }
                ]}
            />
            <Box mt={16}>

                {/* Why Salary Research Matters */}
                <SeoContentSection
                    badge="Know Your Worth"
                    title="Why Research Salary Before Applying?"
                    description="Understanding salary ranges helps you negotiate better compensation and make informed career decisions."
                    bgColor="white"
                >
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                        <Box>
                            <Badge bg="green.100" color="green.700" mb={3} fontSize="sm" fontWeight="600">
                                Negotiate Better
                            </Badge>
                            <Text fontSize={{ base: 'lg', lg: 'xl' }} color="#424245" lineHeight="1.7">
                                Knowing market rates gives you leverage when negotiating job offers and raises.
                            </Text>
                        </Box>
                        <Box>
                            <Badge bg="blue.100" color="blue.700" mb={3} fontSize="sm" fontWeight="600">
                                Career Planning
                            </Badge>
                            <Text fontSize={{ base: 'lg', lg: 'xl' }} color="#424245" lineHeight="1.7">
                                Salary data helps you choose career paths with strong earning potential.
                            </Text>
                        </Box>
                        <Box>
                            <Badge bg="purple.100" color="purple.700" mb={3} fontSize="sm" fontWeight="600">
                                Relocation Decisions
                            </Badge>
                            <Text fontSize={{ base: 'lg', lg: 'xl' }} color="#424245" lineHeight="1.7">
                                Compare cost of living with salary data when considering moving to a new city.
                            </Text>
                        </Box>
                    </SimpleGrid>
                </SeoContentSection>
            </Box>


            {/* Highest Paying Jobs */}
            <SeoContentSection
                badge="Top Earners"
                title="Highest Paying Jobs"
                description="These roles currently offer the highest compensation packages in the job market."
                bgColor="gray.50"
            >
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
                    {highestPayingJobs.map((job) => (
                        <Link
                            key={job.id}
                            href={`/salary/${job.slug}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Box
                                bg="white"
                                p={4}
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
                                    mb={1}
                                >
                                    {job.title}
                                </Text>
                                <Text fontSize="lg" fontWeight="700" color="#4241ff">
                                    ${job.averageSalary?.toLocaleString()}
                                    <Text as="span" fontSize="sm" color="#6e6e73">/yr</Text>
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
                    title="Salary Guides by Industry"
                    description="Click on any industry to see salary data for all jobs in that sector."
                    bgColor="white"
                >
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
                        {categories.map((category) => {
                            const jobCount = getJobsByCategory(category.id).length
                            return (
                                <Link
                                    key={category.id}
                                    href={`#salary-${category.id}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        bg="gray.50"
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
                                        <Text fontSize="2xl" mb={2}>{category.icon}</Text>
                                        <Text
                                            fontSize={{ base: 'lg', lg: 'xl' }}
                                            fontWeight="700"
                                            color="#1d1d1f"
                                            mb={1}
                                        >
                                            {category.name}
                                        </Text>
                                        <Text fontSize="md" color="#6e6e73">
                                            {jobCount} job titles
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
                title="Ready to Land Your Dream Job With Competitive Pay?"
                description="Use our AI-powered tools to build your resume and prepare for salary negotiations."
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
                        >
                            Practice Interviews
                        </Box>
                    </Link>
                </HStack>
            </SeoContentSection>

            {/* Category Sections with Job Lists */}
            {jobsByCategory.map((category) => (
                <Box key={category.id} id={`salary-${category.id}`}>
                    <SeoContentSection
                        badge={category.name}
                        title={`${category.name.split(' ')[0]} Salary Guides`}
                        description={`Salary information for ${category.jobs.length} top-paying ${category.name.toLowerCase()} roles with experience-based pay scales.`}
                        bgColor={categories.indexOf(category) % 2 === 0 ? 'gray.50' : 'white'}
                    >
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                            {category.jobs.map((job) => (
                                <Link
                                    key={job.id}
                                    href={`/salary/${job.slug}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        bg={categories.indexOf(category) % 2 === 0 ? 'white' : 'gray.50'}
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
                                        {job.averageSalary && (
                                            <HStack align="center">
                                                <Text fontSize="2xl" fontWeight="800" color="#4241ff">
                                                    ${job.averageSalary.toLocaleString()}
                                                </Text>
                                                <Text fontSize="xs" color="#6e6e73">/yr</Text>
                                            </HStack>
                                        )}
                                        {job.growthRate && (
                                            <HStack gap={2} mt={2}>
                                                <Badge
                                                    colorScheme={job.growthRate >= 10 ? 'green' : job.growthRate >= 5 ? 'yellow' : 'gray'}
                                                    variant="subtle"
                                                >
                                                    {job.growthRate}% growth
                                                </Badge>
                                            </HStack>
                                        )}
                                    </Box>
                                </Link>
                            ))}
                        </SimpleGrid>
                        <Box mt={6} textAlign="center">
                            <Link
                                href={`/job-description`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Text
                                    fontSize="md"
                                    fontWeight="600"
                                    color="#4241ff"
                                    _hover={{ textDecoration: 'underline' }}
                                >
                                    View {category.name} job descriptions →
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
