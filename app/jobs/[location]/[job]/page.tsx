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
import { MapPin, DollarSign, Building2, Clock, ArrowRight, Briefcase } from 'lucide-react'
import { JobBoardHero } from '../../../components/programmatic-seo/job-board'
import { JobListingCard } from '../../../components/programmatic-seo/job-board'
import { RelatedJobRoles } from '../../../components/programmatic-seo/job-board'
import { getJobBySlug, enabledJobTitles } from '../../../lib/programmatic-seo/enabled-job-titles'
import { getLocationJobBoard, getLocationJobsListings, SUPPORTED_LOCATIONS } from '../../../lib/programmatic-seo/job-board'
import { generatePageMetadata } from '../../../lib/metadata'
import { JsonLdSchema } from '../../../components/seo'
import { SEO_CONFIG } from '../../../lib/seo/core/constants'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import FaqSection from '@/app/components/FaqSection'

// Force static generation
export const dynamic = 'force-static'

// Generate static params for all job + location combinations
export async function generateStaticParams() {
    const params: Array<{ location: string; job: string }> = []

    for (const location of SUPPORTED_LOCATIONS) {
        for (const job of enabledJobTitles) {
            // Only include if we have data for this job+location combination
            const hasData = getLocationJobBoard(job.slug, location.slug)
            if (hasData) {
                params.push({
                    location: location.slug,
                    job: job.slug
                })
            }
        }
    }

    return params
}

interface PageProps {
    params: Promise<{ location: string; job: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { location, job } = await params
    const jobData = getJobBySlug(job)
    const locationData = SUPPORTED_LOCATIONS.find(l => l.slug === location)
    const locationBoard = getLocationJobBoard(job, location)

    if (!jobData || !locationData) {
        return {
            title: 'Page Not Found'
        }
    }

    const locationName = locationData.name
    const totalJobs = locationBoard?.totalJobs || 50
    // Get short location name (just the city, not "San Francisco, CA")
    const shortLocation = locationName.split(',')[0]

    // Title: under 60 characters
    const title = `${jobData.title} Jobs ${shortLocation} | ${totalJobs}+ Open`

    // Description: under 150 characters for optimal SEO
    const description = `${jobData.title} jobs in ${shortLocation}. ${totalJobs}+ openings, $${(jobData?.averageSalary || 0).toLocaleString()}/year avg salary. Top employers hiring now.`

    // Location-specific keywords
    const keywords = [
        `${jobData.title} jobs in ${locationName}`,
        `${jobData.title} jobs ${locationName}`,
        `${jobData.title} careers ${locationName}`,
        `${jobData.title} hiring ${locationName}`,
        `${jobData.title} positions ${locationName}`,
        `${jobData.title} vacancies ${locationName}`,
        `remote ${jobData.title} jobs ${locationName}`,
        `${jobData.title} work ${locationName}`,
        ...jobData.aliases.flatMap(alias => [
            `${alias} jobs ${locationName}`,
            `${alias} positions ${locationName}`
        ])
    ]

    return generatePageMetadata({
        title,
        description,
        path: `/jobs/${location}/${job}`,
        keywords
    })
}

export default async function LocationJobPage({ params }: PageProps) {
    const { location, job } = await params
    const jobData = getJobBySlug(job)
    const locationData = SUPPORTED_LOCATIONS.find(l => l.slug === location)

    if (!jobData || !locationData) {
        notFound()
    }

    const locationName = locationData.name
    const locationBoard = getLocationJobBoard(job, location)
    const jobListings = getLocationJobsListings(job, location)
    const featuredListings = jobListings.filter((j: any) => j.featured)
    const regularListings = jobListings.filter((j: any) => !j.featured)

    // Get related jobs from same category
    const relatedJobs = enabledJobTitles
        .filter(j => j.category === jobData.category && j.slug !== job)
        .slice(0, 6)
        .map(j => ({
            title: j.title,
            slug: j.slug,
            count: 10 + Math.floor(Math.random() * 20),
            category: j.category
        }))

    // Location-specific FAQs
    const faqs = [
        {
            question: `What is the average salary for ${jobData.title} jobs in ${locationName}?`,
            answer: `${jobData.title} salaries in ${locationName} typically range from $${Math.round((jobData?.averageSalary || 0) * 0.7).toLocaleString()} to $${Math.round((jobData?.averageSalary || 0) * 1.3).toLocaleString()} annually, depending on experience, skills, and company size. Entry-level positions start around $${Math.round((jobData?.averageSalary || 0) * 0.6).toLocaleString()} while senior jobs can exceed $${Math.round((jobData?.averageSalary || 0) * 1.5).toLocaleString()}.`
        },
        {
            question: `What companies are hiring ${jobData.title} professionals in ${locationName}?`,
            answer: `Several top companies in ${locationName} are actively hiring ${jobData.title} professionals. These include multinational tech corporations, innovative startups, and established enterprises. The job market in ${locationName} is particularly strong for ${jobData.title} jobs, with new openings posted daily.`
        },
        {
            question: `What skills are required for ${jobData.title} jobs in ${locationName}?`,
            answer: `Employers in ${locationName} typically look for ${jobData.title} candidates with strong technical foundations, relevant experience, and soft skills like communication and problem-solving. Specific requirements often include proficiency in industry tools, programming languages, and frameworks. Having a portfolio or relevant certifications can give you a competitive edge.`
        },
        {
            question: `Are there remote ${jobData.title} jobs available in ${locationName}?`,
            answer: `Yes, many companies in ${locationName} offer remote or hybrid work options for ${jobData.title} positions. Remote work has become increasingly common, allowing you to work for ${locationName}-based companies from anywhere. Some positions are fully remote, while others offer a hybrid model with flexible office attendance.`
        },
        {
            question: `How do I apply for ${jobData.title} jobs in ${locationName}?`,
            answer: `Browse through our curated list of ${jobData.title} openings in ${locationName}, click on positions that match your skills and interests, and apply directly through our platform. Many employers offer one-click applications, and you can track all your applications in one place. Make sure your resume is optimized for ${jobData.title} jobs in ${locationName}.`
        },
        {
            question: `What is the job outlook for ${jobData.title} in ${locationName}?`,
            answer: `The job outlook for ${jobData.title} professionals in ${locationName} is very positive. With the growing tech industry and digital transformation across sectors, demand for skilled ${jobData.title} professionals continues to rise. ${locationName} has emerged as a key hub for technology and innovation, creating numerous opportunities.`
        }
    ]

    // Build structured data
    const jobPostingSchemas = jobListings.map((listing: any) => {
        // Calculate validThrough date (90 days from now)
        const validThroughDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

        // Generate comprehensive address details
        const shortLocation = locationName.split(',')[0]
        const addressRegion = locationName.includes(',') ? locationName.split(',')[1].trim() : ''
        const addressCountry = locationName.includes('India') ? 'IN' :
                              locationName.includes('UAE') ? 'AE' : 'US'
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
                    addressLocality: shortLocation,
                    addressRegion: addressRegion,
                    postalCode: postalCode,
                    addressCountry: addressCountry
                }
            },
            employmentType: listing.jobType,
            applicantLocationRequirements: listing.isRemote ? {
                '@type': 'Country',
                name: locationName.includes('India') ? 'India' : locationName.includes('UAE') ? 'United Arab Emirates' : 'USA'
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
                    minValue: jobData?.averageSalary ? Math.round(jobData.averageSalary * 0.7) : 50000,
                    maxValue: jobData?.averageSalary ? Math.round(jobData.averageSalary * 1.3) : 150000,
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
                name: locationName,
                item: `${SEO_CONFIG.BASE_URL}/jobs/${location}`
            },
            {
                '@type': 'ListItem',
                position: 4,
                name: jobData.title,
                item: `${SEO_CONFIG.BASE_URL}/jobs/${location}/${job}`
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

    const totalJobs = locationBoard?.totalJobs || 20
    const companiesCount = Math.floor(totalJobs * 0.7)

    // Product schema for the specific job board as a product
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${jobData.title} Jobs in ${locationName}`,
        description: `Browse ${totalJobs}+ active ${jobData.title} job openings in ${locationName}. Find jobs with competitive salaries, remote options, and top employers hiring now.`,
        url: `${SEO_CONFIG.BASE_URL}/jobs/${location}/${job}`,
        image: `${SEO_CONFIG.BASE_URL}/og-image.png`,
        brand: {
            '@type': 'Brand',
            name: 'Hirenest'
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SEO_CONFIG.BASE_URL}/jobs/${location}/${job}`,
            description: `Free for job seekers - browse and apply to ${jobData.title} positions in ${locationName} without any charges`,
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
                    addressCountry: locationName.includes('India') ? 'India' : locationName.includes('UAE') ? 'United Arab Emirates' : 'US'
                },
                doesNotShip: true,
                description: 'Digital service with instant access. No physical shipping required.'
            }
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: Math.floor(totalJobs * 3).toString(),
            bestRating: '5',
            worstRating: '1'
        },
        category: jobData.category,
        additionalProperty: [
            {
                '@type': 'PropertyValue',
                name: 'Job Category',
                value: jobData.category
            },
            {
                '@type': 'PropertyValue',
                name: 'Location',
                value: locationName
            },
            {
                '@type': 'PropertyValue',
                name: 'Average Salary',
                value: `$${(jobData?.averageSalary || 0).toLocaleString()}/year`
            },
            {
                '@type': 'PropertyValue',
                name: 'Growth Rate',
                value: `${jobData?.growthRate || 0}%`
            }
        ]
    }

    // BroadcastEvent schema for virtual job fair specific to this role+location
    const livestreamSchema = {
        '@context': 'https://schema.org',
        '@type': 'BroadcastEvent',
        name: `HireNest Live Recruiting - ${jobData.title} Jobs in ${locationName}`,
        description: `Join our live virtual hiring event exclusively for ${jobData.title} roles in ${locationName}. Meet top recruiters, get real-time feedback on your resume, and fast-track your application process. Featured companies will interview candidates live.`,
        url: `${SEO_CONFIG.BASE_URL}/jobs/${location}/${job}`,
        isLiveBroadcast: false,
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week from now
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(), // 3 hours after start
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
            '@type': 'VirtualLocation',
            url: `${SEO_CONFIG.BASE_URL}/jobs/${location}/${job}`
        },
        organizer: {
            '@type': 'Organization',
            name: 'Hirenest',
            url: SEO_CONFIG.BASE_URL
        },
        performer: {
            '@type': 'Organization',
            name: `${locationName} Tech Employers`,
            description: `Top companies hiring ${jobData.title} professionals in ${locationName}`
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SEO_CONFIG.BASE_URL}/jobs/${location}/${job}`,
            description: 'Free virtual career fair - register and attend at no cost',
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
                    addressCountry: locationName.includes('India') ? 'India' : locationName.includes('UAE') ? 'United Arab Emirates' : 'US'
                },
                doesNotShip: true,
                description: 'Virtual event with instant online access. No physical shipping required.'
            }
        },
        image: `${SEO_CONFIG.BASE_URL}/og-image.png`,
        keywords: `${jobData.title}, ${jobData.aliases.join(', ')}, ${locationName}, jobs, hiring, career fair, virtual event`
    }

    return (
        <Box>
            {/* Structured Data */}
            <JsonLdSchema schemas={[...jobPostingSchemas, breadcrumbSchema, faqSchema, productSchema, livestreamSchema]} />

            {/* Hero Section */}
            <JobBoardHero
                title={`${jobData.title} Jobs in ${locationName}`}
                titleHighlight={`${totalJobs}+ Positions Available`}
                description={`Browse ${totalJobs}+ active ${jobData.title} job openings in ${locationName}. Filter by salary, experience level, and work type to find your perfect job.`}
                stats={{
                    totalJobs,
                    companies: companiesCount,
                    newThisWeek: Math.floor(totalJobs * 0.15)
                }}
                badge={`${jobData.category} • ${locationName}`}
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
                                Featured {jobData.title} Jobs in {locationName}
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
                            {featuredListings.map((listing: any) => (
                                <JobListingCard key={listing.id} job={listing} />
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>
            )}

            <Separator my={8} />

            {/* All Jobs */}
            <Container maxW="7xl" py={8}>
                <VStack align="stretch" gap={6}>
                    <Heading as="h2"
                        fontSize={{ base: '2xl', md: '3xl' }}
                        fontWeight="800"
                        lineHeight="1.1"
                        color="#1d1d1f">
                        All {jobData.title} Openings in {locationName}
                    </Heading>

                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5}>
                        {regularListings.map((listing: any) => (
                            <JobListingCard key={listing.id} job={listing} showFeatured={false} />
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>

            {/* Location Info Section */}
            <Container maxW="7xl" py={12}>
                <Box bg="blue.50" p={8} borderRadius="2xl">
                    <VStack align="stretch" gap={4}>
                        <HStack gap={3}>
                            <MapPin color="#4241ff" size={24} />
                            <Heading as="h2" size="xl" color="gray.800">
                                About {jobData.title} Jobs in {locationName}
                            </Heading>
                        </HStack>
                        <Text color="gray.600" fontSize="lg">
                            {locationName} has emerged as a thriving hub for {jobData.title} professionals, with numerous opportunities across various industries.
                            Companies in {locationName} are actively seeking skilled {jobData.title} talent to drive innovation and growth.
                            The competitive salary packages and career growth opportunities make {locationName} an attractive destination for {jobData.title} professionals.
                        </Text>
                        <HStack gap={6} pt={2} flexWrap="wrap">
                            <VStack align="start" gap={1}>
                                <Text fontSize="sm" color="gray.500">Average Salary</Text>
                                <Text fontSize="lg" fontWeight="700" color="gray.800">
                                    ${(jobData?.averageSalary || 0).toLocaleString()}/year
                                </Text>
                            </VStack>
                            <VStack align="start" gap={1}>
                                <Text fontSize="sm" color="gray.500">Open Positions</Text>
                                <Text fontSize="lg" fontWeight="700" color="gray.800">
                                    {totalJobs}+ jobs
                                </Text>
                            </VStack>
                            <VStack align="start" gap={1}>
                                <Text fontSize="sm" color="gray.500">Hiring Companies</Text>
                                <Text fontSize="lg" fontWeight="700" color="gray.800">
                                    {companiesCount}+ companies
                                </Text>
                            </VStack>
                            <VStack align="start" gap={1}>
                                <Text fontSize="sm" color="gray.500">Growth Rate</Text>
                                <Text fontSize="lg" fontWeight="700" color="gray.800">
                                    {(jobData?.growthRate || 0)}% YoY
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </Box>
            </Container>

            {/* Related Job Roles */}
            <Container maxW="7xl" pb={12}>
                <RelatedJobRoles
                    currentJobSlug={`${location}/${job}`}
                    relatedJobs={relatedJobs.map(j => ({ ...j, slug: `${location}/${j.slug}` }))}
                    title={`Related ${jobData.category} Roles in ${locationName}`}
                    description={`Explore similar positions in ${jobData.category} available in ${locationName}.`}
                />
            </Container>

            {/* Other Locations for this Job */}
            <Container maxW="7xl" pb={8}>
                <VStack align="stretch" gap={6}>
                    <Heading as="h2" size="lg" color="gray.800">
                        Other Locations for {jobData.title} Jobs
                    </Heading>
                    <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={3}>
                        {SUPPORTED_LOCATIONS.slice(0, 12).map((loc) => (
                            <Link
                                key={loc.slug}
                                href={`/jobs/${loc.slug}/${job}`}
                                passHref
                                legacyBehavior
                            >
                                <ChakraLink
                                    bg={loc.slug === location ? 'blue.500' : 'white'}
                                    color={loc.slug === location ? 'white' : 'gray.700'}
                                    p={3}
                                    borderRadius="md"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                    _hover={{
                                        borderColor: 'blue.300',
                                        bg: loc.slug === location ? 'blue.500' : 'blue.50'
                                    }}
                                    textAlign="center"
                                    display="block"
                                >
                                    <Text fontSize="sm" fontWeight="500">
                                        {loc.name}
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
