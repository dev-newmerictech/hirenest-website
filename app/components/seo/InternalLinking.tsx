// app/components/seo/InternalLinking.tsx

'use client'

import { Box, Heading, Text, SimpleGrid, VStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export interface InternalLinkProps {
    url: string
    title: string
    description?: string
    type?: 'card' | 'list'
}

interface InternalLinkingProps {
    title?: string
    description?: string
    links: InternalLinkProps[]
    columns?: number
    variant?: 'card' | 'list'
    maxLinks?: number
}

/**
 * Internal Linking Component
 * Displays related pages for internal linking SEO
 * Helps distribute link equity and improve crawl depth
 */
export function InternalLinking({
    title = 'Related Resources',
    description,
    links,
    columns = 3,
    variant = 'card',
    maxLinks = 12
}: InternalLinkingProps) {
    // Limit links to avoid link spam
    const displayLinks = links.slice(0, maxLinks)

    if (displayLinks.length === 0) return null

    return (
        <Box bg="gray.50" py={12} px={4}>
            <Box maxW="7xl" mx="auto">
                <VStack align="stretch" gap={1} mb={8}>
                    <Heading as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="800"
                        color="#1d1d1f"
                        lineHeight="1.1"
                        letterSpacing="tight">
                        {title}
                    </Heading>
                    {description && (
                        <Text color="gray.600" fontSize="lg">
                            {description}
                        </Text>
                    )}
                </VStack>

                {variant === 'card' ? (
                    <SimpleGrid columns={{ base: 1, md: columns }} gap={4}>
                        {displayLinks.map((link, index) => (
                            <InternalLinkCard key={index} {...link} />
                        ))}
                    </SimpleGrid>
                ) : (
                    <VStack align="stretch" gap={2}>
                        {displayLinks.map((link, index) => (
                            <InternalLinkListItem key={index} {...link} />
                        ))}
                    </VStack>
                )}
            </Box>
        </Box>
    )
}

interface InternalLinkCardProps extends InternalLinkProps { }

function InternalLinkCard({ url, title, description }: InternalLinkCardProps) {
    return (
        <NextLink href={url} passHref legacyBehavior>
            <Link
                _hover={{
                    textDecoration: 'none',
                    transform: 'translateY(-2px)'
                }}
                transition="all 0.2s"
                h="full"
            >
                <Box
                    bg="white"
                    p={6}
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor="gray.200"
                    _hover={{
                        borderColor: 'blue.400',
                        boxShadow: 'md'
                    }}
                    h="full"
                >
                    <VStack align="start" gap={2}>
                        <Text
                            fontWeight="600"
                            color="blue.600"
                            fontSize="lg"
                            overflow="hidden"
                            textOverflow="ellipsis"
                        >
                            {title}
                        </Text>
                        {description && (
                            <Text
                                color="gray.500"
                                fontSize="md"
                                style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}
                            >
                                {description}
                            </Text>
                        )}
                    </VStack>
                </Box>
            </Link>
        </NextLink>
    )
}

function InternalLinkListItem({ url, title }: InternalLinkProps) {
    return (
        <NextLink href={url} passHref legacyBehavior>
            <Link
                display="flex"
                alignItems="center"
                py={3}
                px={4}
                bg="white"
                borderRadius="md"
                borderWidth="1px"
                borderColor="gray.200"
                _hover={{
                    bg: 'gray.50',
                    borderColor: 'blue.400'
                }}
            >
                <Text color="gray.600" fontSize="lg">
                    {title}
                </Text>
            </Link>
        </NextLink>
    )
}

/**
 * Compact inline related links (for use within content sections)
 */
interface InlineRelatedLinksProps {
    links: Array<{ url: string; title: string }>
    prefix?: string
}

export function InlineRelatedLinks({ links, prefix = 'Related:' }: InlineRelatedLinksProps) {
    if (links.length === 0) return null

    return (
        <Text fontSize="sm" color="gray.500">
            {prefix}{' '}
            {links.map((link, index) => (
                <span key={link.url}>
                    <NextLink href={link.url} passHref legacyBehavior>
                        <Link color="blue.600" textDecoration="underline">
                            {link.title}
                        </Link>
                    </NextLink>
                    {index < links.length - 1 && ', '}
                </span>
            ))}
        </Text>
    )
}
