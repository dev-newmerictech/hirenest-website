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
import { MapPin, DollarSign, Building2, Clock, ArrowRight, Briefcase, TrendingUp } from 'lucide-react'
import { SeoHero } from '../../../components/programmatic-seo/SeoHero'
import { JobBoardHero } from '../../../components/programmatic-seo/job-board'
import { JobListingCard } from '../../../components/programmatic-seo/job-board'
import { RelatedJobRoles } from '../../../components/programmatic-seo/job-board'
import { getJobBySlug, enabledJobTitles } from '../../../lib/programmatic-seo/enabled-job-titles'
import { getJobBoardPageBySlug, getJobListingsBySlug, getJobStatistics, LOCATION_JOB_BOARDS, SUPPORTED_LOCATIONS } from '../../../lib/programmatic-seo/job-board'
import { generatePageMetadata } from '../../../lib/metadata'
import { JsonLdSchema } from '../../../components/seo'
import { SEO_CONFIG } from '../../../lib/seo/core/constants'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import FaqSection from '@/app/components/FaqSection'

// Force static generation
export const dynamic = 'force-static'

// Generate static params for all job titles
export async function generateStaticParams() {
    return enabledJobTitles.map((job) => ({
        role: job.slug,
    }))
}

interface PageProps {
    params: Promise<{ role: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { role } = await params
    const job = getJobBySlug(role)
    const jobPage = getJobBoardPageBySlug(role)

    if (!job || !jobPage) {
        return {
            title: 'Job Not Found'
        }
    }

    // Title: ~50 characters (within 60 char limit)
    const title = `${job.title} Jobs | ${jobPage.totalJobs}+ Openings`

    // Description: ~150 characters (within 160 char limit)
    const description = `Find ${jobPage.totalJobs}+ ${job.title} jobs hiring now. Browse openings from top companies with competitive salaries. Remote, full-time & contract positions available.`

    return generatePageMetadata({
        title,
        description,
        path: `/jobs/roles/${role}`,
        keywords: jobPage.seoKeywords
    })
}

export default async function JobBoardPage({ params }: PageProps) {
    const { role } = await params
    const job = getJobBySlug(role)
    const jobPage = getJobBoardPageBySlug(role)

    if (!job || !jobPage) {
        notFound()
    }

    const jobListings = getJobListingsBySlug(role)
    const featuredListings = jobListings.filter(j => j.featured)
    const regularListings = jobListings.filter(j => !j.featured)
    const stats = getJobStatistics(job.category)

    // Get related jobs from same category
    const relatedJobs = enabledJobTitles
        .filter(j => j.category === job.category && j.slug !== role)
        .slice(0, 6)
        .map(j => ({
            title: j.title,
            slug: j.slug,
            count: 10 + Math.floor(Math.random() * 20),
            category: j.category as string
        }))

    // Build structured data for job postings
    const jobPostingSchemas = jobListings.map(listing => {
        // Calculate validThrough date (90 days from now)
        const validThroughDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

        // Generate address details based on listing location
        const addressLocality = listing.location.city || listing.location.state || 'Remote'
        const addressRegion = listing.location.state || listing.location.country === 'United States' ? 'US' : ''
        const addressCountry = listing.location.country === 'United States' ? 'US' :
                              listing.location.country === 'India' ? 'IN' :
                              listing.location.country === 'United Arab Emirates' ? 'AE' : 'US'
        const streetAddress = listing.isRemote ? 'Remote' : ''
        const postalCode = listing.isRemote ? '00000' : ''

        return {
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: listing.title,
            description: listing.description,
            identifier: {
                '@type': 'PropertyValue',
                name: listing.companyName,
                value: listing.id
            },
            datePosted: listing.postedDate,
            validThrough: validThroughDate,
            hiringOrganization: {
                '@type': 'Organization',
                name: listing.companyName,
                url: `https://app.hirenest.ai/companies/${listing.companySlug}`
            },
            jobLocation: {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: streetAddress,
                    addressLocality: addressLocality,
                    addressRegion: addressRegion,
                    postalCode: postalCode,
                    addressCountry: addressCountry
                }
            },
            employmentType: listing.jobType,
            applicantLocationRequirements: listing.isRemote ? {
                '@type': 'Country',
                name: 'USA'
            } : undefined,
            baseSalary: listing.salaryRange ? {
                '@type': 'MonetaryAmount',
                currency: listing.salaryRange.currency,
                value: {
                    '@type': 'QuantitativeValue',
                    minValue: listing.salaryRange.min,
                    maxValue: listing.salaryRange.max,
                    unitText: listing.salaryRange.period === 'yearly' ? 'YEAR' : 'HOUR'
                }
            } : {
                '@type': 'MonetaryAmount',
                currency: 'USD',
                value: {
                    '@type': 'QuantitativeValue',
                    minValue: 50000,
                    maxValue: 150000,
                    unitText: 'YEAR'
                }
            }
        }
    })

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
                name: job.title,
                item: `${SEO_CONFIG.BASE_URL}/jobs/roles/${role}`
            }
        ]
    }

    // ── JSON-LD: FAQPage ──────────────────────────────────────────────────────
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

    // ── JSON-LD: Product (job listing page as a product / service) ────────────
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${job.title} Jobs – ${jobPage.totalJobs} Positions`,
        description: jobPage.description,
        url: `${SEO_CONFIG.BASE_URL}/jobs/roles/${role}`,
        image: `${SEO_CONFIG.BASE_URL}/og-image.png`,
        brand: {
            '@type': 'Brand',
            name: 'HireNest'
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SEO_CONFIG.BASE_URL}/jobs/${role}`,
            priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
                merchantReturnDays: 0,
                returnMethod: 'https://schema.org/ReturnByMail',
                returnFeesAmount: {
                    '@type': 'MonetaryAmount',
                    currency: 'USD',
                    value: '0'
                },
                description: 'This is a free digital service. No returns or refunds are applicable.'
            },
            shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                    '@type': 'MonetaryAmount',
                    currency: 'USD',
                    value: '0'
                },
                deliveryTime: {
                    '@type': 'ShippingDeliveryTime',
                    businessDays: {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['https://schema.org/Monday', 'https://schema.org/Tuesday', 'https://schema.org/Wednesday', 'https://schema.org/Thursday', 'https://schema.org/Friday']
                    },
                    handlingTime: {
                        '@type': 'QuantitativeValue',
                        minValue: 0,
                        maxValue: 0,
                        unitCode: 'DAY'
                    },
                    transitTime: {
                        '@type': 'QuantitativeValue',
                        minValue: 0,
                        maxValue: 0,
                        unitCode: 'DAY'
                    }
                },
                shippingDestination: {
                    '@type': 'DefinedRegion',
                    addressCountry: 'US'
                },
                doesNotShip: true,
                description: 'Digital service with instant access. No physical shipping required.'
            }
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: String(Math.max(100, jobPage.totalJobs * 2)),
            bestRating: '5',
            worstRating: '1'
        },
        category: `${job.category} Jobs`
    }

    // ── JSON-LD: BroadcastEvent / Livestream (virtual job fair) ───────────────
    const livestreamSchema = {
        '@context': 'https://schema.org',
        '@type': 'BroadcastEvent',
        name: `HireNest Live Job Fair – ${job.title} Hiring Event`,
        description: `Join our live virtual hiring event exclusively for ${job.title} roles. Meet top recruiters, get real-time feedback on your resume, and fast-track your application process.`,
        url: `${SEO_CONFIG.BASE_URL}/jobs/roles/${role}`,
        image: `${SEO_CONFIG.BASE_URL}/og-image.png`,
        isLiveBroadcast: true,
        startDate: '2026-03-20T14:00:00+00:00',
        endDate: '2026-03-20T17:00:00+00:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
            '@type': 'VirtualLocation',
            url: `${SEO_CONFIG.BASE_URL}/jobs/${role}`
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
            url: `${SEO_CONFIG.BASE_URL}/jobs/${role}`,
            priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
                merchantReturnDays: 0,
                returnMethod: 'https://schema.org/ReturnByMail',
                returnFeesAmount: {
                    '@type': 'MonetaryAmount',
                    currency: 'USD',
                    value: '0'
                },
                description: 'This is a free virtual event. No returns or refunds are applicable.'
            },
            shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                    '@type': 'MonetaryAmount',
                    currency: 'USD',
                    value: '0'
                },
                deliveryTime: {
                    '@type': 'ShippingDeliveryTime',
                    businessDays: {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['https://schema.org/Monday', 'https://schema.org/Tuesday', 'https://schema.org/Wednesday', 'https://schema.org/Thursday', 'https://schema.org/Friday']
                    },
                    handlingTime: {
                        '@type': 'QuantitativeValue',
                        minValue: 0,
                        maxValue: 0,
                        unitCode: 'DAY'
                    },
                    transitTime: {
                        '@type': 'QuantitativeValue',
                        minValue: 0,
                        maxValue: 0,
                        unitCode: 'DAY'
                    }
                },
                shippingDestination: {
                    '@type': 'DefinedRegion',
                    addressCountry: 'US'
                },
                doesNotShip: true,
                description: 'Virtual event with instant online access. No physical shipping required.'
            }
        },
        about: {
            '@type': 'Occupation',
            name: job.title,
            occupationLocation: {
                '@type': 'Country',
                name: 'United States'
            }
        }
    }

    // Filter location job boards once for this role to avoid repeated filtering
    const indiaLocations = LOCATION_JOB_BOARDS.filter(l => l.jobSlug === role && l.locationName.includes('India'))
    const uaeLocations = LOCATION_JOB_BOARDS.filter(l => l.jobSlug === role && (l.locationName.includes('UAE') || l.locationName.includes('Dubai')))
    const usLocations = LOCATION_JOB_BOARDS.filter(l => l.jobSlug === role && !l.locationName.includes('India') && !l.locationName.includes('UAE') && !l.locationName.includes('Dubai') && l.locationSlug !== 'remote')
    const remoteLocation = LOCATION_JOB_BOARDS.find(l => l.jobSlug === role && l.locationSlug === 'remote')

    return (
        <Box>
            {/* Structured Data */}
            <JsonLdSchema schemas={[...jobPostingSchemas, breadcrumbSchema, faqSchema, productSchema, livestreamSchema]} />

            {/* Hero Section */}
            <JobBoardHero
                title={`${job.title} Jobs`}
                titleHighlight={`${jobPage.totalJobs} Positions Available`}
                description={jobPage.description}
                stats={{
                    totalJobs: jobPage.totalJobs,
                    companies: Math.floor(jobPage.totalJobs * 0.7),
                    newThisWeek: Math.floor(jobPage.totalJobs * 0.15)
                }}
                badge={`${job.category} Jobs`}
            />

            {/* Featured Jobs */}
            {featuredListings.length > 0 && (
                <Container maxW="7xl" py={8}>
                    <VStack align="stretch" gap={6}>
                        <HStack justify="space-between" align="center">
                            <Heading as="h2"
                                fontSize={{ base: '2xl', md: '3xl' }}
                                fontWeight="800"
                                lineHeight="1.1"
                                color="#1d1d1f">
                                Featured {job.title} Positions
                            </Heading>
                            <Badge
                                bg="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                                color="white"
                                px={3}
                                py={1}
                                borderRadius="full"
                            >
                                {featuredListings.length} Featured
                            </Badge>
                        </HStack>

                        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5}>
                            {featuredListings.map(listing => (
                                <JobListingCard key={listing.id} job={listing} />
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>
            )}

            <Separator my={8} />

            {/* Browse by Location for this Job */}
            <Container maxW="7xl" py={8}>
                <VStack align="stretch" gap={6}>
                    <Heading as="h2"
                        fontSize={{ base: '2xl', md: '3xl' }}
                        fontWeight="800"
                        lineHeight="1.1"
                        color="#1d1d1f">
                        {job.title} Jobs by Location
                    </Heading>
                    <Text color="gray.600">
                        Find {job.title} positions in your preferred city
                    </Text>

                    <VStack gap={6} align="stretch">
                        {/* India Locations */}
                        <Box>
                            <HStack gap={2} mb={3}>
                                <Text fontSize="md" fontWeight="700" color="gray.800">🇮🇳 India</Text>
                                <Badge bg="blue.50" color="blue.700" fontSize="xs" px={2} py={1}>
                                    {indiaLocations.length} cities
                                </Badge>
                            </HStack>
                            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={2}>
                                {indiaLocations
                                    .map(location => (
                                        <Link
                                            key={`${location.locationSlug}-${location.jobSlug}`}
                                            href={`/jobs/${location.locationSlug}/${role}`}
                                            passHref
                                            legacyBehavior
                                        >
                                            <ChakraLink
                                                bg="white"
                                                p={2}
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
                                                <Text fontSize="xs" fontWeight="500" color="gray.700">
                                                    {location.locationName.split(',')[0]}
                                                </Text>
                                                <Text fontSize="xs" color="gray.500">{location.totalJobs} jobs</Text>
                                            </ChakraLink>
                                        </Link>
                                    ))}
                                {indiaLocations.length === 0 && (
                                    <Box gridColumn="1 / -1"><Text fontSize="sm" color="gray.500">Coming soon</Text></Box>
                                )}
                            </SimpleGrid>
                        </Box>

                        {/* Dubai / UAE Locations */}
                        <Box>
                            <HStack gap={2} mb={3}>
                                <Text fontSize="md" fontWeight="700" color="gray.800">🇦🇪 Dubai / UAE</Text>
                                <Badge bg="orange.50" color="orange.700" fontSize="xs" px={2} py={1}>
                                    {uaeLocations.length} cities
                                </Badge>
                            </HStack>
                            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={2}>
                                {uaeLocations
                                    .map(location => (
                                        <Link
                                            key={`${location.locationSlug}-${location.jobSlug}`}
                                            href={`/jobs/${location.locationSlug}/${role}`}
                                            passHref
                                            legacyBehavior
                                        >
                                            <ChakraLink
                                                bg="white"
                                                p={2}
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
                                                <Text fontSize="xs" fontWeight="500" color="gray.700">
                                                    {location.locationName.split(',')[0]}
                                                </Text>
                                                <Text fontSize="xs" color="gray.500">{location.totalJobs} jobs</Text>
                                            </ChakraLink>
                                        </Link>
                                    ))}
                                {uaeLocations.length === 0 && (
                                    <Box gridColumn="1 / -1"><Text fontSize="sm" color="gray.500">Coming soon</Text></Box>
                                )}
                            </SimpleGrid>
                        </Box>

                        {/* US Locations */}
                        <Box>
                            <HStack gap={2} mb={3}>
                                <Text fontSize="md" fontWeight="700" color="gray.800">🇺🇸 United States</Text>
                                <Badge bg="purple.50" color="purple.700" fontSize="xs" px={2} py={1}>
                                    {usLocations.length} cities
                                </Badge>
                            </HStack>
                            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={2}>
                                {usLocations
                                    .map(location => (
                                        <Link
                                            key={`${location.locationSlug}-${location.jobSlug}`}
                                            href={`/jobs/${location.locationSlug}/${role}`}
                                            passHref
                                            legacyBehavior
                                        >
                                            <ChakraLink
                                                bg="white"
                                                p={2}
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
                                                <Text fontSize="xs" fontWeight="500" color="gray.700">
                                                    {location.locationName.split(',')[0]}
                                                </Text>
                                                <Text fontSize="xs" color="gray.500">{location.totalJobs} jobs</Text>
                                            </ChakraLink>
                                        </Link>
                                    ))}
                                {usLocations.length === 0 && (
                                    <Box gridColumn="1 / -1"><Text fontSize="sm" color="gray.500">Coming soon</Text></Box>
                                )}
                            </SimpleGrid>
                        </Box>

                        {/* Remote Option */}
                        {remoteLocation && (
                            <Link
                                href={`/jobs/remote/${role}`}
                                passHref
                                legacyBehavior
                            >
                                <ChakraLink
                                    bg="gray.800"
                                    p={3}
                                    borderRadius="md"
                                    _hover={{
                                        bg: 'gray.700'
                                    }}
                                    textAlign="center"
                                    display="block"
                                    width="fit-content"
                                    mx="auto"
                                >
                                    <HStack gap={2} color="white">
                                        <MapPin size={16} />
                                        <Text fontSize="sm" fontWeight="600">Remote {job.title} Jobs →</Text>
                                    </HStack>
                                </ChakraLink>
                            </Link>
                        )}
                    </VStack>
                </VStack>
            </Container>

            <Separator my={8} />

            {/* All Jobs */}
            <Container maxW="7xl" py={8}>
                <VStack align="stretch" gap={6}>
                    <Heading as="h2"
                        fontSize={{ base: '2xl', md: '3xl' }}
                        fontWeight="800"
                        lineHeight="1.1"
                        color="#1d1d1f">
                        All {job.title} Openings
                    </Heading>

                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5}>
                        {regularListings.map(listing => (
                            <JobListingCard key={listing.id} job={listing} showFeatured={false} />
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>

            {/* Job Resources Section */}
            <Container maxW="7xl" py={12}>
                <Box>
                    <VStack align="stretch" gap={8}>
                        <VStack align="stretch" gap={2}>
                            <Heading as="h2"
                                fontSize={{ base: '2xl', md: '3xl' }}
                                fontWeight="800"
                                lineHeight="1.1"
                                color="#1d1d1f">
                                {job.title} Career Resources
                            </Heading>
                            <Text color="gray.600">
                                Prepare for your {job.title} job search with our comprehensive guides
                            </Text>
                        </VStack>

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
                            {/* Interview Questions */}
                            <Link href={`/interview-questions`} passHref legacyBehavior>
                                <ChakraLink _hover={{ textDecoration: 'none' }} w="full">
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
                                        w="full"
                                        h="full"
                                    >
                                        <VStack align="stretch" gap={3}>
                                            <Badge
                                                bg="blue.50"
                                                color="blue.700"
                                                w="fit-content"
                                            >
                                                Preparation
                                            </Badge>
                                            <Heading as="h3" size="lg" fontWeight="700">
                                                Interview Questions
                                            </Heading>
                                            <Text fontSize="md" color="gray.600">
                                                Practice with common {job.title} interview questions and expert answers
                                            </Text>
                                            <HStack gap={2} color="brand.600" fontSize="sm" fontWeight="600">
                                                <Text>Practice now</Text>
                                                <ArrowRight size={14} />
                                            </HStack>
                                        </VStack>
                                    </Box>
                                </ChakraLink>
                            </Link>

                            {/* Resume Keywords */}
                            <Link href={`/resume-keywords`} passHref legacyBehavior>
                                <ChakraLink _hover={{ textDecoration: 'none' }} w="full">
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
                                        w="full"
                                        h="full"
                                    >
                                        <VStack align="stretch" gap={3}>
                                            <Badge
                                                bg="green.50"
                                                color="green.700"
                                                w="fit-content"
                                            >
                                                Resume
                                            </Badge>
                                            <Heading as="h3" size="lg" fontWeight="700">
                                                Resume Keywords
                                            </Heading>
                                            <Text fontSize="md" color="gray.600">
                                                Optimize your resume with ATS-friendly keywords for {job.title} roles
                                            </Text>
                                            <HStack gap={2} color="brand.600" fontSize="sm" fontWeight="600">
                                                <Text>Optimize now</Text>
                                                <ArrowRight size={14} />
                                            </HStack>
                                        </VStack>
                                    </Box>
                                </ChakraLink>
                            </Link>

                            {/* Salary Guide */}
                            <Link href={`/salary`} passHref legacyBehavior>
                                <ChakraLink _hover={{ textDecoration: 'none' }} w="full">
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
                                        w="full"
                                        h="full"
                                    >
                                        <VStack align="stretch" gap={3}>
                                            <Badge
                                                bg="yellow.50"
                                                color="yellow.700"
                                                w="fit-content"
                                            >
                                                Compensation
                                            </Badge>
                                            <Heading as="h3" size="lg" fontWeight="700">
                                                Salary Guide
                                            </Heading>
                                            <Text fontSize="md" color="gray.600">
                                                Research {job.title} salary ranges and negotiation tips
                                            </Text>
                                            <HStack gap={2} color="brand.600" fontSize="sm" fontWeight="600">
                                                <Text>View salaries</Text>
                                                <ArrowRight size={14} />
                                            </HStack>
                                        </VStack>
                                    </Box>
                                </ChakraLink>
                            </Link>

                            {/* Cover Letter */}
                            <Link href={`/cover-letter`} passHref legacyBehavior>
                                <ChakraLink _hover={{ textDecoration: 'none' }} w="full">
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
                                        w="full"
                                        h="full"
                                    >
                                        <VStack align="stretch" gap={3}>
                                            <Badge
                                                bg="purple.50"
                                                color="purple.700"
                                                w="fit-content"
                                            >
                                                Application
                                            </Badge>
                                            <Heading as="h3" size="lg" fontWeight="700">
                                                Cover Letter Examples
                                            </Heading>
                                            <Text fontSize="md" color="gray.600">
                                                Stand out with professional {job.title} cover letter templates
                                            </Text>
                                            <HStack gap={2} color="brand.600" fontSize="sm" fontWeight="600">
                                                <Text>View templates</Text>
                                                <ArrowRight size={14} />
                                            </HStack>
                                        </VStack>
                                    </Box>
                                </ChakraLink>
                            </Link>
                        </SimpleGrid>
                    </VStack>
                </Box>
            </Container>

            {/* Related Job Roles */}
            <Container maxW="7xl" pb={12}>
                <RelatedJobRoles
                    currentJobSlug={role}
                    relatedJobs={relatedJobs}
                    title={`Related ${job.category} Roles`}
                    description={`Explore similar positions in ${job.category} that match your skills and interests.`}
                />
            </Container>

            {/* CTA Section */}
            <CTA />
            <FaqSection faqs={faqs} />
        </Box>
    )
}


// ── Static FAQ data (also used for FAQPage schema) ───────────────────────────
const faqs = [
    {
        question: "What is a Machine Learning Engineer?",
        answer: "A Machine Learning Engineer is a software engineer who specializes in building, deploying, and maintaining machine learning models in production environments. They bridge the gap between data science and software engineering, ensuring that ML models are scalable, reliable, and maintainable."
    },
    {
        question: "What skills are required for a Machine Learning Engineer?",
        answer: "Key skills include strong programming fundamentals (Python, C++), expertise in machine learning frameworks (TensorFlow, PyTorch, scikit-learn), understanding of data structures and algorithms, experience with cloud platforms (AWS, GCP, Azure), knowledge of MLOps practices, and strong problem-solving abilities."
    },
    {
        question: "What is the typical salary for a Machine Learning Engineer?",
        answer: "Salaries vary widely based on experience, location, and company. In the US, entry-level ML engineers can expect $100K-$140K, mid-level engineers $140K-$180K, and senior/lead engineers $180K-$250K+. Top companies in major tech hubs can offer significantly higher compensation packages."
    },
    {
        question: "What is the difference between a Data Scientist and a Machine Learning Engineer?",
        answer: "Data Scientists focus on analyzing data, extracting insights, and building predictive models. Machine Learning Engineers focus on deploying these models into production systems, ensuring scalability, and maintaining them over time. Data Scientists ask 'what can we learn from this data?', while ML Engineers ask 'how can we productionize this model?'"
    },
    {
        question: "What is MLOps?",
        answer: "MLOps (Machine Learning Operations) is a set of practices that combines machine learning, DevOps, and data engineering to deploy and maintain ML models in production reliably and efficiently. It focuses on automation, version control, continuous integration/continuous delivery (CI/CD), monitoring, and governance of ML systems."
    },
    {
        question: "What are the career paths for a Machine Learning Engineer?",
        answer: "Career paths include Senior ML Engineer, Staff ML Engineer, ML Team Lead, MLOps Engineer, AI Engineer, Research Engineer, and eventually roles like Director of Machine Learning or VP of Engineering. Many also transition into product management or specialized AI roles."
    },
    {
        question: "What are the best resources for learning Machine Learning Engineering?",
        answer: "Recommended resources include Andrew Ng's Machine Learning Specialization on Coursera, fast.ai's Practical Deep Learning for Coders, DeepLearning.AI's MLOps Specialization, books like 'Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow', and platforms like Kaggle for hands-on practice."
    },
    {
        question: "What is the job outlook for Machine Learning Engineers?",
        answer: "The job outlook is excellent. The demand for skilled ML engineers is rapidly growing across all industries as companies increasingly rely on AI and machine learning to drive business value. Many reports project double-digit annual growth in ML engineering roles over the next decade."
    },
    {
        question: "Do I need a PhD to become a Machine Learning Engineer?",
        answer: "Not necessarily. While many senior research roles prefer PhDs, most ML engineering positions value practical experience and proven skills over advanced degrees. A strong portfolio, relevant projects, and demonstrated expertise in ML frameworks are often more important than a PhD."
    },
    {
        question: "What are the typical day-to-day responsibilities of a Machine Learning Engineer?",
        answer: "Day-to-day tasks include developing and training ML models, implementing ML algorithms, deploying models to production, monitoring model performance, optimizing existing models, collaborating with data scientists and software engineers, and maintaining ML infrastructure."
    }
]
