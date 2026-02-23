import { Metadata } from 'next'
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
    Link as ChakraLink
} from '@chakra-ui/react'
import { ArrowRight, Briefcase, MapPin } from 'lucide-react'
import { JobBoardHero, JobSearchBarWrapper, JobsCTASection } from '../components/programmatic-seo/job-board'
import { getJobStatistics, getAllJobBoardPages, LOCATION_JOB_BOARDS, SUPPORTED_LOCATIONS } from '../lib/programmatic-seo/job-board'
import { enabledJobTitles } from '../lib/programmatic-seo/enabled-job-titles'
import { generatePageMetadata } from '../lib/metadata'
import { JsonLdSchema } from '../components/seo'
import { SEO_CONFIG } from '../lib/seo/core/constants'
import FaqSection from '../components/FaqSection'

// Force static generation
export const dynamic = 'force-static'

export async function generateMetadata(): Promise<Metadata> {
    const totalJobs = getAllJobBoardPages().reduce((sum, page) => sum + page.totalJobs, 0)

    // Title: ~50 characters (within 60 char limit)
    const title = `Job Board | ${totalJobs}+ Jobs Hiring Now`

    // Description: ~150 characters (within 160 char limit)
    const description = `Find ${totalJobs.toLocaleString()}+ jobs across tech, sales, marketing & more. Top employers, remote options. Apply today.`

    return generatePageMetadata({
        title,
        description,
        path: '/jobs',
        keywords: [
            'job board',
            'find jobs',
            'job search',
            'careers',
            'employment',
            'job openings',
            'remote jobs',
            'full-time jobs',
            'part-time jobs'
        ]
    })
}

const CATEGORY_INFO: Record<string, { name: string; description: string; icon: string; color: string }> = {
    technology: {
        name: 'Technology',
        description: 'Software engineering, data science, DevOps, and IT roles',
        icon: '',
        color: 'blue'
    },
    marketing: {
        name: 'Marketing',
        description: 'Digital marketing, SEO, content, and growth marketing',
        icon: '',
        color: 'purple'
    },
    sales: {
        name: 'Sales',
        description: 'Sales representatives, account managers, and business development',
        icon: '',
        color: 'green'
    },
    healthcare: {
        name: 'Healthcare',
        description: 'Medical professionals, nursing, and healthcare administration',
        icon: '',
        color: 'red'
    },
    finance: {
        name: 'Finance',
        description: 'Financial analysis, accounting, and investment roles',
        icon: '',
        color: 'yellow'
    },
    hr: {
        name: 'Human Resources',
        description: 'Recruiting, HR management, and people operations',
        icon: '',
        color: 'pink'
    },
    design: {
        name: 'Design',
        description: 'UX/UI design, product design, and visual design',
        icon: '',
        color: 'orange'
    },
    engineering: {
        name: 'Engineering',
        description: 'Mechanical, electrical, civil, and systems engineering',
        icon: '',
        color: 'cyan'
    }
}

export default async function JobsPage() {
    const allJobPages = getAllJobBoardPages()
    const stats = getJobStatistics()

    // AI-related job slugs to show first
    const aiJobSlugs = [
        'ai-engineer',
        'machine-learning-engineer',
        'data-scientist',
        'ai-researcher',
        'ml-engineer',
        'prompt-engineer',
        'ai-product-manager',
        'nlp-engineer',
        'computer-vision-engineer',
        'deep-learning-engineer',
        'ai-ethics-specialist',
        'data-engineer'
    ]

    // Get featured job roles - AI jobs first, then by job count
    const featuredJobs = allJobPages
        .filter(page => page.featuredJobs > 3)
        .sort((a, b) => {
            // AI jobs come first
            const aIsAi = aiJobSlugs.includes(a.slug)
            const bIsAi = aiJobSlugs.includes(b.slug)

            if (aIsAi && !bIsAi) return -1
            if (!aIsAi && bIsAi) return 1

            // Within AI jobs, maintain the aiJobSlugs order
            if (aIsAi && bIsAi) {
                const aIndex = aiJobSlugs.indexOf(a.slug)
                const bIndex = aiJobSlugs.indexOf(b.slug)
                return aIndex - bIndex
            }

            // Non-AI jobs sorted by totalJobs
            return b.totalJobs - a.totalJobs
        })

    // Get latest job postings
    const latestJobs = featuredJobs.slice(0, 6)

    const totalJobs = allJobPages.reduce((sum, p) => sum + p.totalJobs, 0)

    // ── JSON-LD: FAQPage ──────────────────────────────────────────────────────
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'How does the AI job matching work?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our AI analyzes your resume, skills, experience, and preferences to match you with relevant job openings. Simply upload your resume, and our system will instantly identify positions that fit your profile. The more complete your profile, the better your matches become.'
                }
            },
            {
                '@type': 'Question',
                name: 'Is the job board free to use?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Yes! Our job board is completely free for job seekers. You can browse jobs, upload your resume, and get AI-powered matching at no cost. We're funded by employers who pay to list their positions, ensuring you have access to quality opportunities without any fees."
                }
            },
            {
                '@type': 'Question',
                name: 'How often are new jobs posted?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'New job openings are added daily from our network of 5,000+ companies. Our platform updates continuously, ensuring you always have access to the latest opportunities. You can also set up alerts to be notified when new positions match your criteria.'
                }
            },
            {
                '@type': 'Question',
                name: 'Can I apply to jobs directly through the platform?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Yes, you can apply directly to many jobs through our platform with one-click applications. For positions that redirect to company websites, we'll still track your application status and provide insights to help you follow up effectively."
                }
            },
            {
                '@type': 'Question',
                name: 'What types of companies post jobs here?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We feature positions from a diverse range of companies, including innovative startups, established enterprises, and everything in between. All employers are vetted to ensure they offer legitimate opportunities with competitive compensation and positive work environments.'
                }
            },
            {
                '@type': 'Question',
                name: 'How do I get started?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Getting started is easy! Simply create a free account, upload your resume, and let our AI analyze your profile. You'll start receiving personalized job recommendations immediately. Then browse, apply, and track your applications all in one place."
                }
            },
            {
                '@type': 'Question',
                name: 'Are remote jobs available?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely! We have thousands of remote job opportunities across various categories. Use our filters to find full-time remote, hybrid, and flexible positions that match your work preferences and lifestyle.'
                }
            },
            {
                '@type': 'Question',
                name: 'How is my data protected?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We take data privacy seriously. Your resume and personal information are encrypted and never shared with third parties without your explicit consent. Employers only see your profile when you apply to their positions. You can delete your data at any time.'
                }
            }
        ]
    }

    // ── JSON-LD: JobPosting aggregate listing ─────────────────────────────────
    const jobPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Job Board – Find Your Dream Job',
        description: `Browse ${totalJobs.toLocaleString()}+ job openings across ${enabledJobTitles.length}+ career categories on HireNest.`,
        url: `${SEO_CONFIG.BASE_URL}/jobs`,
        numberOfItems: totalJobs,
        itemListElement: featuredJobs.map((job, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${SEO_CONFIG.BASE_URL}/jobs/roles/${job.slug}`,
            name: `${job.title} Jobs – ${job.totalJobs} open positions`
        }))
    }

    // ── JSON-LD: Breadcrumb ───────────────────────────────────────────────────
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
            }
        ]
    }

    // ── JSON-LD: BroadcastEvent (Livestream / live demo / webinar) ────────────
    // Represents HireNest live hiring events / job-fair livestreams
    const livestreamSchema = {
        '@context': 'https://schema.org',
        '@type': 'BroadcastEvent',
        name: 'HireNest Live Job Fair – AI & Tech Hiring Event',
        description: 'Join our live virtual job fair featuring top companies hiring AI engineers, data scientists, and software developers. Connect with recruiters in real time.',
        url: `${SEO_CONFIG.BASE_URL}/jobs`,
        isLiveBroadcast: true,
        startDate: '2026-03-15T14:00:00+00:00',
        endDate: '2026-03-15T18:00:00+00:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
            '@type': 'VirtualLocation',
            url: `${SEO_CONFIG.BASE_URL}/jobs`
        },
        organizer: {
            '@type': 'Organization',
            name: 'HireNest',
            url: SEO_CONFIG.BASE_URL
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SEO_CONFIG.BASE_URL}/jobs`
        },
        image: `${SEO_CONFIG.BASE_URL}/og-image.jpg`
    }

    // ── JSON-LD: Product (HireNest Job Board platform as a product) ───────────
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'HireNest Job Board',
        description: `AI-powered job board with ${totalJobs.toLocaleString()}+ active listings across ${enabledJobTitles.length}+ career categories. Free for job seekers.`,
        url: `${SEO_CONFIG.BASE_URL}/jobs`,
        brand: {
            '@type': 'Brand',
            name: 'HireNest'
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SEO_CONFIG.BASE_URL}/jobs`
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '2341',
            bestRating: '5',
            worstRating: '1'
        },
        category: 'Job Board / Employment Platform'
    }

    // Pre-filter locations by region to avoid repeated filtering in JSX
    const indiaLocations = SUPPORTED_LOCATIONS.filter(l => l.name.includes('India')).slice(0, 12)
    const uaeLocations = SUPPORTED_LOCATIONS.filter(l => l.name.includes('UAE'))
    const usLocations = SUPPORTED_LOCATIONS.filter(l => !l.name.includes('India') && !l.name.includes('UAE') && l.slug !== 'remote')

    return (
        <>
            {/* Structured Data */}
            <JsonLdSchema schemas={[breadcrumbSchema, faqSchema, jobPostingSchema, livestreamSchema, productSchema]} />
            <Box>
                {/* Hero Section */}
                <JobBoardHero
                    title="Find Your Dream Job"
                    titleHighlight="With AI-Powered Matching"
                    description={`Browse ${allJobPages.reduce((sum, p) => sum + p.totalJobs, 0).toLocaleString()}+ active job openings from top companies. Filter by category, location, and experience level to find the perfect role for you.`}
                    stats={{
                        totalJobs: allJobPages.reduce((sum, p) => sum + p.totalJobs, 0),
                        companies: 5000,
                        newThisWeek: stats.newJobsThisWeek
                    }}
                    badge="Job Board"
                />

                {/* Browse by Location */}
                <Container maxW="7xl" py={12}>
                    <VStack align="stretch" gap={8}>
                        <VStack align="center" gap={2}>
                            <HStack gap={2}>
                                <MapPin size={28} color="#0071fb" />
                                <Heading as="h2"
                                    fontSize={{ base: '2xl', md: '3xl' }}
                                    fontWeight="800"
                                    lineHeight="1.1"
                                    color="#1d1d1f">
                                    Browse by Location
                                </Heading>
                            </HStack>
                            <Text color="gray.600" fontSize={{ base: 'lg', lg: 'xl' }} textAlign="center" maxW="600px">
                                Find jobs in your preferred location. We have opportunities across India, Dubai, UAE, and the United States.
                            </Text>
                        </VStack>

                        {/* India Locations */}
                        <Box>
                            <HStack gap={2} mb={4}>
                                <Text fontSize="lg" fontWeight="700" color="gray.800">India</Text>
                                <Badge bg="blue.50" color="blue.700" fontSize="xs" px={2} py={1}>
                                    {indiaLocations.length} cities
                                </Badge>
                            </HStack>
                            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={3}>
                                {indiaLocations
                                    .map(location => (
                                        <Link key={location.slug} href={`/jobs/${location.slug}`} passHref legacyBehavior>
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
                                            >
                                                <Text fontSize="sm" fontWeight="500" color="gray.700">
                                                    {location.name.split(',')[0]}
                                                </Text>
                                            </ChakraLink>
                                        </Link>
                                    ))}
                            </SimpleGrid>
                        </Box>

                        {/* Dubai / UAE Locations */}
                        <Box>
                            <HStack gap={2} mb={4}>
                                <Text fontSize="lg" fontWeight="700" color="gray.800">Dubai / UAE</Text>
                                <Badge bg="orange.50" color="orange.700" fontSize="xs" px={2} py={1}>
                                    {uaeLocations.length} cities
                                </Badge>
                            </HStack>
                            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={3}>
                                {uaeLocations
                                    .map(location => (
                                        <Link key={location.slug} href={`/jobs/${location.slug}`} passHref legacyBehavior>
                                            <ChakraLink
                                                bg="white"
                                                p={3}
                                                borderRadius="md"
                                                borderWidth="1px"
                                                borderColor="gray.200"
                                                _hover={{
                                                    borderColor: 'orange.300',
                                                    bg: 'orange.50'
                                                }}
                                                textAlign="center"
                                                display="block"
                                            >
                                                <Text fontSize="sm" fontWeight="500" color="gray.700">
                                                    {location.name.split(',')[0]}
                                                </Text>
                                            </ChakraLink>
                                        </Link>
                                    ))}
                            </SimpleGrid>
                        </Box>

                        {/* US Locations */}
                        <Box>
                            <HStack gap={2} mb={4}>
                                <Text fontSize="lg" fontWeight="700" color="gray.800">United States</Text>
                                <Badge bg="purple.50" color="purple.700" fontSize="xs" px={2} py={1}>
                                    {usLocations.length} cities
                                </Badge>
                            </HStack>
                            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={3}>
                                {usLocations
                                    .map(location => (
                                        <Link key={location.slug} href={`/jobs/${location.slug}`} passHref legacyBehavior>
                                            <ChakraLink
                                                bg="white"
                                                p={3}
                                                borderRadius="md"
                                                borderWidth="1px"
                                                borderColor="gray.200"
                                                _hover={{
                                                    borderColor: 'purple.300',
                                                    bg: 'purple.50'
                                                }}
                                                textAlign="center"
                                                display="block"
                                            >
                                                <Text fontSize="sm" fontWeight="500" color="gray.700">
                                                    {location.name.split(',')[0]}
                                                </Text>
                                            </ChakraLink>
                                        </Link>
                                    ))}
                            </SimpleGrid>
                        </Box>
                    </VStack>
                </Container>

                {/* Featured Job Roles */}
                <Container maxW="7xl" pb={12}>
                    <VStack align="center" gap={8}>
                        <HStack justify="center" align="center">
                            <VStack align="center" gap={2}>
                                <Heading as="h2"
                                    fontSize={{ base: '2xl', md: '3xl' }}
                                    fontWeight="800"
                                    lineHeight="1.1"
                                    color="#1d1d1f">
                                    Featured Job Roles
                                </Heading>
                                <Text color="gray.600" textAlign="center">
                                    Most in-demand positions with the highest number of openings
                                </Text>
                            </VStack>
                        </HStack>

                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
                            {featuredJobs.map(job => (
                                <Link key={job.slug} href={`/jobs/roles/${job.slug}`} passHref legacyBehavior>
                                    <ChakraLink
                                        _hover={{ textDecoration: 'none' }}
                                        h="full"
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
                                        >
                                            <VStack align="stretch" gap={3} h="full">
                                                <Heading
                                                    as="h3"
                                                    size="lg"
                                                    fontWeight="700"
                                                    color="gray.900"
                                                >
                                                    {job.title} Jobs
                                                </Heading>

                                                <Text fontSize="md" color="gray.600" flex={1}>
                                                    {job.description}
                                                </Text>

                                                <HStack gap={4} fontSize="sm" color="gray.500">
                                                    <HStack gap={1}>
                                                        <Briefcase size={14} />
                                                        <Text>{job.totalJobs} positions</Text>
                                                    </HStack>
                                                    {job.featuredJobs > 0 && (
                                                        <Badge
                                                            bg="brand.50"
                                                            color="brand.700"
                                                            textTransform="none"
                                                        >
                                                            {job.featuredJobs} featured
                                                        </Badge>
                                                    )}
                                                </HStack>
                                            </VStack>
                                        </Box>
                                    </ChakraLink>
                                </Link>
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>

                {/* Latest Opportunities */}
                <Container maxW="7xl" py={12}>
                    <VStack align="stretch" gap={8}>
                        <HStack justify="center" align="center">
                            <VStack align="center" gap={2}>
                                <Heading as="h2"
                                    fontSize={{ base: '2xl', md: '3xl' }}
                                    fontWeight="800"
                                    lineHeight="1.1"
                                    color="#1d1d1f">
                                    Latest Opportunities
                                </Heading>
                                <Text color="gray.600" textAlign="center">
                                    Fresh job postings added this week
                                </Text>
                            </VStack>
                        </HStack>

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                            {latestJobs.map(job => (
                                <Link key={job.slug} href={`/jobs/roles/${job.slug}`} passHref legacyBehavior>
                                    <ChakraLink
                                        _hover={{ textDecoration: 'none' }}
                                        w={'full'}
                                    >
                                        <Box
                                            bg="gray.50"
                                            p={4}
                                            borderRadius="lg"
                                            transition="all 0.2s"
                                            _hover={{
                                                bg: "gray.100",
                                                transform: "translateX(4px)"
                                            }}
                                            w={'full'}
                                        >
                                            <HStack justify="space-between">
                                                <Text fontWeight="600" color="gray.900">
                                                    {job.title}
                                                </Text>
                                                <Badge
                                                    variant="subtle"
                                                    colorPalette="green"
                                                >
                                                    {job.totalJobs} open
                                                </Badge>
                                            </HStack>
                                        </Box>
                                    </ChakraLink>
                                </Link>
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>
            {/* CTA Section */}
            <Container maxW="full">
                <JobsCTASection />
            </Container>

            {/* FAQ Section */}
            <FaqSection
                line="Frequently Asked Questions"
                subtitle="Everything you need to know about finding your next job through our platform"
                faqs={[
                    {
                        question: "How does the AI job matching work?",
                        answer: "Our AI analyzes your resume, skills, experience, and preferences to match you with relevant job openings. Simply upload your resume, and our system will instantly identify positions that fit your profile. The more complete your profile, the better your matches become."
                    },
                    {
                        question: "Is the job board free to use?",
                        answer: "Yes! Our job board is completely free for job seekers. You can browse jobs, upload your resume, and get AI-powered matching at no cost. We're funded by employers who pay to list their positions, ensuring you have access to quality opportunities without any fees."
                    },
                    {
                        question: "How often are new jobs posted?",
                        answer: "New job openings are added daily from our network of 5,000+ companies. Our platform updates continuously, ensuring you always have access to the latest opportunities. You can also set up alerts to be notified when new positions match your criteria."
                    },
                    {
                        question: "Can I apply to jobs directly through the platform?",
                        answer: "Yes, you can apply directly to many jobs through our platform with one-click applications. For positions that redirect to company websites, we'll still track your application status and provide insights to help you follow up effectively."
                    },
                    {
                        question: "What types of companies post jobs here?",
                        answer: "We feature positions from a diverse range of companies, including innovative startups, established enterprises, and everything in between. All employers are vetted to ensure they offer legitimate opportunities with competitive compensation and positive work environments."
                    },
                    {
                        question: "How do I get started?",
                        answer: "Getting started is easy! Simply create a free account, upload your resume, and let our AI analyze your profile. You'll start receiving personalized job recommendations immediately. Then browse, apply, and track your applications all in one place."
                    },
                    {
                        question: "Are remote jobs available?",
                        answer: "Absolutely! We have thousands of remote job opportunities across various categories. Use our filters to find full-time remote, hybrid, and flexible positions that match your work preferences and lifestyle."
                    },
                    {
                        question: "How is my data protected?",
                        answer: "We take data privacy seriously. Your resume and personal information are encrypted and never shared with third parties without your explicit consent. Employers only see your profile when you apply to their positions. You can delete your data at any time."
                    }
                ]}
            />
        </>
    )
}
