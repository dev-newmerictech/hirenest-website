// app/components/seo/RelatedPages.tsx

'use client'

import { Box, Heading, Text, SimpleGrid, Link, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'

export interface RelatedPage {
    url: string
    title: string
    description?: string
    category?: string
    relevanceScore?: number
}

interface RelatedPagesProps {
    pages: RelatedPage[]
    title?: string
    description?: string
    columns?: number
    maxPages?: number
    showRelevance?: boolean
}

/**
 * Related Pages Component
 * Displays contextually related pages for internal linking
 * Enhances topical authority and user navigation
 */
export function RelatedPages({
    pages,
    title = 'Explore More',
    description,
    columns = 2,
    maxPages = 6,
    showRelevance = false
}: RelatedPagesProps) {
    const displayPages = pages
        .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
        .slice(0, maxPages)

    if (displayPages.length === 0) return null

    return (
        <Box bg="gray.50" py={10} px={4}>
            <Box maxW="7xl" mx="auto">
                <VStack align="stretch" gap={3} mb={6}>
                    <Heading as="h2" size="lg" color="gray.900">
                        {title}
                    </Heading>
                    {description && (
                        <Text color="gray.600" fontSize="md">
                            {description}
                        </Text>
                    )}
                </VStack>

                <SimpleGrid columns={{ base: 1, md: columns }} gap={4}>
                    {displayPages.map((page, index) => (
                        <NextLink key={index} href={page.url} passHref legacyBehavior>
                            <Link
                                _hover={{ textDecoration: 'none' }}
                                display="block"
                            >
                                <Box
                                    bg="white"
                                    p={5}
                                    borderRadius="md"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                    _hover={{
                                        borderColor: 'blue.400',
                                        boxShadow: 'sm',
                                        transform: 'translateY(-1px)'
                                    }}
                                    transition="all 0.2s"
                                    position="relative"
                                >
                                    {page.category && (
                                        <Box
                                            bg="blue.50"
                                            color="blue.700"
                                            fontSize="xs"
                                            fontWeight="600"
                                            px={2}
                                            py={1}
                                            borderRadius="md"
                                            display="inline-block"
                                            mb={2}
                                        >
                                            {page.category}
                                        </Box>
                                    )}

                                    <Text
                                        fontWeight="600"
                                        color="blue.600"
                                        fontSize="md"
                                        mb={2}
                                        display="block"
                                    >
                                        {page.title}
                                    </Text>

                                    {page.description && (
                                        <Text
                                            color="gray.600"
                                            fontSize="sm"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {page.description}
                                        </Text>
                                    )}

                                    {showRelevance && page.relevanceScore !== undefined && (
                                        <Text
                                            fontSize="xs"
                                            color="gray.400"
                                            mt={2}
                                        >
                                            Relevance: {Math.round(page.relevanceScore * 100)}%
                                        </Text>
                                    )}
                                </Box>
                            </Link>
                        </NextLink>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    )
}

/**
 * Compact related pages (sidebar style)
 */
interface CompactRelatedPagesProps {
    pages: RelatedPage[]
    title?: string
    maxPages?: number
}

export function CompactRelatedPages({
    pages,
    title = 'Related',
    maxPages = 5
}: CompactRelatedPagesProps) {
    const displayPages = pages.slice(0, maxPages)

    if (displayPages.length === 0) return null

    return (
        <Box>
            <Text
                fontSize="sm"
                fontWeight="600"
                color="gray.500"
                mb={3}
                textTransform="uppercase"
                letterSpacing="wider"
            >
                {title}
            </Text>
            <VStack align="stretch" gap={2}>
                {displayPages.map((page, index) => (
                    <NextLink key={index} href={page.url} passHref legacyBehavior>
                        <Link
                            color="gray.600"
                            fontSize="sm"
                            _hover={{ color: 'blue.600' }}
                            display="block"
                            py={1}
                        >
                            {page.title}
                        </Link>
                    </NextLink>
                ))}
            </VStack>
        </Box>
    )
}
