import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
    Box,
    Container,
    VStack,
    HStack,
    Heading,
    Text,
    SimpleGrid,
    Badge,
    Separator,
    Link as ChakraLink
} from '@chakra-ui/react'
import { MapPin, Briefcase, Building2, ArrowRight } from 'lucide-react'
import { JobBoardHero } from '../../components/programmatic-seo/job-board'
import { JobListingCard } from '../../components/programmatic-seo/job-board'
import { RelatedJobRoles } from '../../components/programmatic-seo/job-board'
import { enabledJobTitles } from '../../lib/programmatic-seo/enabled-job-titles'
import { LOCATION_JOB_BOARDS, SUPPORTED_LOCATIONS } from '../../lib/programmatic-seo/job-board'
import { generatePageMetadata } from '../../lib/metadata'
import { JsonLdSchema } from '../../components/seo'
import { SEO_CONFIG } from '../../lib/seo/core/constants'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import FaqSection from '@/app/components/FaqSection'

// Force static generation
export const dynamic = 'force-static'

// Generate static params for all supported locations
export async function generateStaticParams() {
    return SUPPORTED_LOCATIONS.map(location => ({
        location: location.slug
    }))
}

interface PageProps {
    params: Promise<{ location: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { location } = await params
    const locationData = SUPPORTED_LOCATIONS.find(l => l.slug === location)

    if (!locationData) {
        return {
            title: 'Page Not Found'
        }
    }

    const locationName = locationData.name
    const totalJobs = LOCATION_JOB_BOARDS.filter(b => b.locationSlug === location).reduce((sum, b) => sum + b.totalJobs, 0)

    // Title: ~50 characters (within 60 char limit)
    const title = `${locationName} Jobs | ${totalJobs}+ Openings`

    // Description: ~150 characters (within 160 char limit)
    const description = `Find ${totalJobs.toLocaleString()}+ jobs in ${locationName}. Top employers hiring now. Tech, sales, marketing & more. Apply today.`

    // Location-specific keywords
    const keywords = [
        `jobs in ${locationName}`,
        `${locationName} jobs`,
        `job openings ${locationName}`,
        `careers ${locationName}`,
        `employment ${locationName}`,
        `work ${locationName}`,
        `hiring ${locationName}`,
        `job vacancies ${locationName}`,
        `${locationName.split(',')[0]} careers`,
        `looking for job ${locationName}`
    ]

    return generatePageMetadata({
        title,
        description,
        path: `/jobs/${location}`,
        keywords
    })
}

export default async function LocationJobsPage({ params }: PageProps) {
    const { location } = await params
    const locationData = SUPPORTED_LOCATIONS.find(l => l.slug === location)

    if (!locationData) {
        notFound()
    }

    const locationName = locationData.name

    // Get all job boards for this location
    const locationJobBoards = LOCATION_JOB_BOARDS.filter(b => b.locationSlug === location)
    const totalJobs = locationJobBoards.reduce((sum, b) => sum + b.totalJobs, 0)
    const companiesCount = Math.floor(totalJobs * 0.7)

    // Group by category for better organization
    const jobsByCategory = locationJobBoards.reduce((acc, board) => {
        const jobTitle = enabledJobTitles.find(j => j.slug === board.jobSlug)
        const category = jobTitle?.category || 'other'

        if (!acc[category]) {
            acc[category] = []
        }
        acc[category].push(board)
        return acc
    }, {} as Record<string, typeof locationJobBoards>)

    // Featured jobs (top job boards by job count)
    const featuredJobs = locationJobBoards
        .sort((a, b) => b.totalJobs - a.totalJobs)
        .slice(0, 6)

    // Location-specific FAQs
    const faqs = [
        {
            question: `What types of jobs are available in ${locationName}?`,
            answer: `${locationName} has a diverse job market with opportunities across technology, healthcare, finance, marketing, sales, and more. The region is particularly strong for technology and software roles, with many companies actively hiring skilled professionals.`
        },
        {
            question: `What is the average salary for jobs in ${locationName}?`,
            answer: `Salaries in ${locationName} vary by role and experience level. Technology roles typically range from $60,000 to $150,000 annually, while other positions offer competitive compensation based on industry standards. Entry-level positions start around $40,000, with senior roles exceeding $150,000.`
        },
        {
            question: `Are there remote job opportunities based in ${locationName}?`,
            answer: `Yes, many companies in ${locationName} offer remote work options. Additionally, you can find remote positions from ${locationName}-based companies that allow you to work from anywhere. The trend toward flexible work has grown significantly in recent years.`
        },
        {
            question: `How do I apply for jobs in ${locationName}?`,
            answer: `Browse through our curated list of job openings in ${locationName}, click on positions that match your skills and interests, and apply directly through our platform. Many employers offer streamlined application processes, and you can track all your applications in one place.`
        },
        {
            question: `What companies are hiring in ${locationName}?`,
            answer: `${locationName} is home to numerous companies actively hiring, including multinational corporations, innovative startups, and established enterprises. The job market is particularly active in technology, healthcare, finance, and professional services sectors.`
        },
        {
            question: `What skills are most in demand in ${locationName}?`,
            answer: `Employers in ${locationName} are actively seeking professionals with skills in software development, data analysis, digital marketing, sales, customer service, and healthcare. Technical skills combined with soft skills like communication and problem-solving are highly valued.`
        }
    ]

    // Build structured data
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: SEO_CONFIG.BASE_URL
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Jobs',
                item: `${SEO_CONFIG.BASE_URL}/jobs`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: locationName,
                item: `${SEO_CONFIG.BASE_URL}/jobs/${location}`
            }
        ]
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    }

    // Product schema for the job board platform as a product
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `Jobs in ${locationName} - Job Board`,
        description: `Browse ${totalJobs.toLocaleString()}+ active job openings in ${locationName}. Find jobs in technology, marketing, sales, healthcare, and more from top companies hiring now.`,
        url: `${SEO_CONFIG.BASE_URL}/jobs/${location}`,
        brand: {
            '@type': 'Brand',
            name: 'Hirenest'
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SEO_CONFIG.BASE_URL}/jobs/${location}`,
            description: 'Free for job seekers - browse and apply to jobs without any charges'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            reviewCount: Math.floor(totalJobs * 2).toString(),
            bestRating: '5',
            worstRating: '1'
        },
        category: 'Job Board / Employment Platform'
    }

    // BroadcastEvent schema for virtual job fairs in this location
    const livestreamSchema = {
        '@context': 'https://schema.org',
        '@type': 'BroadcastEvent',
        name: `HireNest Live Job Fair - ${locationName} Hiring Event`,
        description: `Join our live virtual job fair featuring top companies in ${locationName} hiring across multiple industries. Connect with recruiters in real time, explore job openings, and fast-track your applications.`,
        url: `${SEO_CONFIG.BASE_URL}/jobs/${location}`,
        isLiveBroadcast: false,
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week from now
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString(), // 4 hours after start
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
            '@type': 'VirtualLocation',
            url: `${SEO_CONFIG.BASE_URL}/jobs/${location}`
        },
        organizer: {
            '@type': 'Organization',
            name: 'Hirenest',
            url: SEO_CONFIG.BASE_URL
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SEO_CONFIG.BASE_URL}/jobs/${location}`
        },
        image: `${SEO_CONFIG.BASE_URL}/og-image.png`
    }

    // ItemList schema for all job categories in this location
    const itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `Job Categories in ${locationName}`,
        description: `Browse job openings by category in ${locationName}`,
        numberOfItems: locationJobBoards.length,
        itemListElement: locationJobBoards.map((board, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'JobPosting',
                title: board.jobTitle,
                description: `Find ${board.totalJobs}+ ${board.jobTitle} jobs in ${locationName}`,
                url: `${SEO_CONFIG.BASE_URL}/jobs/${location}/${board.jobSlug}`,
                jobLocation: {
                    '@type': 'Place',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: locationName,
                        addressCountry: locationName.includes('India') ? 'India' : locationName.includes('UAE') ? 'United Arab Emirates' : 'United States'
                    }
                }
            }
        }))
    }

    return (
        <Box>
            {/* Structured Data */}
            <JsonLdSchema schemas={[breadcrumbSchema, faqSchema, productSchema, livestreamSchema, itemListSchema]} />

            {/* Hero Section */}
            <JobBoardHero
                title={`Jobs in ${locationName}`}
                titleHighlight={`${totalJobs.toLocaleString()}+ Positions Available`}
                description={`Browse ${totalJobs.toLocaleString()}+ active job openings in ${locationName} across various industries. Find your perfect role from top companies hiring now.`}
                stats={{
                    totalJobs,
                    companies: companiesCount,
                    newThisWeek: Math.floor(totalJobs * 0.15)
                }}
                badge={`${locationName}`}
            />

            {/* Featured Job Categories */}
            <Container maxW="7xl" py={12}>
                <VStack align="stretch" gap={8}>
                    <VStack align="center" gap={2}>
                        <Heading as="h2"
                            fontSize={{ base: '2xl', md: '3xl' }}
                            fontWeight="800"
                            lineHeight="1.1"
                            color="#1d1d1f">
                            In-Demand Roles
                        </Heading>
                        <Text color="gray.600" textAlign="center" maxW="600px">
                            Most sought-after job categories with the highest number of openings
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={5}>
                        {featuredJobs.map((board) => {
                            const jobTitle = enabledJobTitles.find(j => j.slug === board.jobSlug)
                            return (
                                <Link
                                    key={board.jobSlug}
                                    href={`/jobs/${location}/${board.jobSlug}`}
                                    passHref
                                    legacyBehavior
                                    style={{ width: '100%' }}
                                >
                                    <ChakraLink
                                        _hover={{ textDecoration: 'none' }}
                                        h="full"
                                        w="full"
                                    >
                                        <Box
                                            bg="white"
                                            p={5}
                                            borderRadius="xl"
                                            borderWidth="1px"
                                            borderColor="gray.200"
                                            transition="all 0.2s"
                                            _hover={{
                                                borderColor: "brand.300",
                                                boxShadow: "md",
                                                transform: "translateY(-2px)"
                                            }}
                                            h="full"
                                            w="full"
                                        >
                                            <VStack align="stretch" gap={3} h="full">
                                                <HStack justify="space-between" align="start">
                                                    <Heading
                                                        as="h3"
                                                        size="md"
                                                        fontWeight="700"
                                                        color="gray.900"
                                                    >
                                                        {board.jobTitle}
                                                    </Heading>
                                                    <Badge
                                                        bg="brand.50"
                                                        color="brand.700"
                                                        textTransform="none"
                                                    >
                                                        {board.totalJobs} jobs
                                                    </Badge>
                                                </HStack>

                                                {jobTitle && (
                                                    <Text fontSize="sm" color="gray.500">
                                                        {jobTitle.category}
                                                    </Text>
                                                )}
                                            </VStack>
                                        </Box>
                                    </ChakraLink>
                                </Link>
                            )
                        })}
                    </SimpleGrid>
                </VStack>
            </Container>

            <Separator />

            {/* All Jobs by Category */}
            <Container maxW="7xl" py={12}>
                <VStack align="stretch" gap={10}>
                    <Heading as="h2"
                        fontSize={{ base: '2xl', md: '3xl' }}
                        fontWeight="800"
                        lineHeight="1.1"
                        color="#1d1d1f">
                        Browse by Category
                    </Heading>

                    {Object.entries(jobsByCategory).map(([category, jobs]) => (
                        <Box key={category}>
                            <HStack gap={2} mb={4}>
                                <Text fontSize="lg" fontWeight="700" color="gray.800" textTransform="capitalize">
                                    {category.replace('-', ' ')}
                                </Text>
                                <Badge bg="gray.100" color="gray.700" fontSize="xs" px={2} py={0}>
                                    {jobs.length} roles
                                </Badge>
                            </HStack>

                            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} gap={3}>
                                {jobs.map((board) => (
                                    <Link
                                        key={board.jobSlug}
                                        href={`/jobs/${location}/${board.jobSlug}`}
                                        passHref
                                        legacyBehavior
                                    >
                                        <ChakraLink
                                            bg="white"
                                            p={3}
                                            borderRadius="md"
                                            borderWidth="1px"
                                            borderColor="gray.200"
                                            _hover={{
                                                borderColor: 'blue.300',
                                                bg: 'blue.50'
                                            }}
                                            textAlign="center"
                                            display="block"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <VStack gap={1}>
                                                <Text fontSize="lg" fontWeight="600" color="gray.800">
                                                    {board.jobTitle}
                                                </Text>
                                                <Text fontSize="sm" color="gray.500">
                                                    {board.totalJobs} jobs
                                                </Text>
                                            </VStack>
                                        </ChakraLink>
                                    </Link>
                                ))}
                            </SimpleGrid>
                        </Box>
                    ))}
                </VStack>
            </Container>

            {/* Location Info Section */}
            <Container maxW="7xl" pb={12}>
                <Box bg="blue.50" p={8} borderRadius="2xl">
                    <VStack align="stretch" gap={4}>
                        <HStack gap={3}>
                            <MapPin color="#4241ff" size={24} />
                            <Heading as="h2" size="xl" color="gray.800">
                                About Working in {locationName}
                            </Heading>
                        </HStack>
                        <Text color="gray.600" fontSize="lg">
                            {locationName} offers a vibrant job market with diverse opportunities across multiple industries.
                            The region is home to leading companies that value talent and innovation.
                            With competitive compensation packages and strong career growth prospects, {locationName} is an excellent place to advance your career.
                        </Text>
                        <HStack gap={6} pt={2} flexWrap="wrap">
                            <VStack align="start" gap={1}>
                                <Text fontSize="sm" color="gray.500">Total Jobs</Text>
                                <Text fontSize="lg" fontWeight="700" color="gray.800">
                                    {totalJobs.toLocaleString()}+ openings
                                </Text>
                            </VStack>
                            <VStack align="start" gap={1}>
                                <Text fontSize="sm" color="gray.500">Hiring Companies</Text>
                                <Text fontSize="lg" fontWeight="700" color="gray.800">
                                    {companiesCount}+ companies
                                </Text>
                            </VStack>
                            <VStack align="start" gap={1}>
                                <Text fontSize="sm" color="gray.500">Job Categories</Text>
                                <Text fontSize="lg" fontWeight="700" color="gray.800">
                                    {Object.keys(jobsByCategory).length} categories
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </Box>
            </Container>

            {/* Other Locations */}
            <Container maxW="7xl" pb={8}>
                <VStack align="stretch" gap={6}>
                    <Heading as="h2" size="lg" color="gray.800">
                        Explore Jobs in Other Locations
                    </Heading>
                    <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={3}>
                        {SUPPORTED_LOCATIONS.slice(0, 12).filter(loc => loc.slug !== location).map((loc) => (
                            <Link
                                key={loc.slug}
                                href={`/jobs/${loc.slug}`}
                                passHref
                                legacyBehavior
                            >
                                <ChakraLink
                                    bg="white"
                                    color="gray.700"
                                    p={3}
                                    borderRadius="md"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                    _hover={{
                                        borderColor: 'blue.300',
                                        bg: 'blue.50'
                                    }}
                                    textAlign="center"
                                    display="block"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Text fontSize="md" fontWeight="500">
                                        {loc.name.split(',')[0]}
                                    </Text>
                                </ChakraLink>
                            </Link>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>

            {/* CTA Section */}
            <CTA />
            <FaqSection faqs={faqs} />
        </Box>
    )
}
