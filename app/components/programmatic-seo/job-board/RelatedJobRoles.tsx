'use client'

import { Box, VStack, Heading, Text, HStack, Link as ChakraLink, Badge } from '@chakra-ui/react'
import { Briefcase, TrendingUp, Building } from 'lucide-react'
import Link from 'next/link'

interface RelatedJobRolesProps {
    currentJobSlug: string
    relatedJobs: Array<{
        title: string
        slug: string
        count: number
        category?: string
    }>
    title?: string
    description?: string
    maxItems?: number
}

export function RelatedJobRoles({
    currentJobSlug,
    relatedJobs,
    title = 'Related Job Roles',
    description = 'Explore similar positions and related career opportunities.',
    maxItems = 6
}: RelatedJobRolesProps) {
    const displayJobs = relatedJobs
        .filter(job => job.slug !== currentJobSlug)
        .slice(0, maxItems)

    if (displayJobs.length === 0) return null

    return (
        <Box>
            <VStack align="stretch" gap={6}>
                <VStack align="stretch" gap={2}>
                    <HStack gap={2}>
                        <Briefcase size={24} color="#4241ff" />
                        <Heading as="h2"
                            fontSize={{ base: '2xl', md: '3xl' }}
                            fontWeight="800"
                            lineHeight="1.1"
                            color="#1d1d1f">
                            {title}
                        </Heading>
                    </HStack>
                    <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }}>{description}</Text>
                </VStack>

                <Box
                    display="grid"
                    gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={4}
                >
                    {displayJobs.map((job) => {
                        // If slug contains a forward slash, it's a location-specific page
                        const href = job.slug.includes('/')
                            ? `/jobs/${job.slug}`
                            : `/jobs/roles/${job.slug}`

                        return (
                        <Link key={job.slug} href={href} passHref legacyBehavior style={{ width: '100%' }}>
                            <ChakraLink
                                _hover={{ textDecoration: 'none' }}
                                h="full"
                                w="full"
                            >
                                <Box
                                    bg="white"
                                    p={4}
                                    borderRadius="lg"
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
                                        <Heading
                                            as="h3"
                                            size="lg"
                                            fontWeight="600"
                                            color="gray.900"
                                        >
                                            {job.title}
                                        </Heading>

                                        <HStack gap={4} flexWrap="wrap">
                                            <HStack gap={1} color="gray.600" fontSize="md">
                                                <Building size={14} />
                                                <Text>{job.count} positions</Text>
                                            </HStack>
                                        </HStack>

                                        {job.category && (
                                            <Badge
                                                bg="brand.50"
                                                color="brand.700"
                                                alignSelf="start"
                                                textTransform="capitalize"
                                            >
                                                {job.category}
                                            </Badge>
                                        )}
                                    </VStack>
                                </Box>
                            </ChakraLink>
                        </Link>
                        )
                    })}
                </Box>
            </VStack>
        </Box>
    )
}
