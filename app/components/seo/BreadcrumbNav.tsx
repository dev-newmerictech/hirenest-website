// app/components/seo/BreadcrumbNav.tsx

'use client'

import { Box, HStack, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
    name: string
    url: string
    position: number
}

interface BreadcrumbNavProps {
    items: BreadcrumbItem[]
    separator?: 'slash' | 'chevron' | 'arrow'
    showHome?: boolean
    homeUrl?: string
    homeLabel?: string
}

/**
 * Breadcrumb Navigation Component
 * Displays hierarchical navigation with schema.org support
 */
export function BreadcrumbNav({
    items,
    separator = 'chevron',
    showHome = true,
    homeUrl = '/',
    homeLabel = 'Home'
}: BreadcrumbNavProps) {
    // Build full breadcrumb list
    const allItems = showHome
        ? [...items]
        : items

    // Update positions
    allItems.forEach((item, index) => {
        item.position = index + 1
    })

    const renderSeparator = () => {
        switch (separator) {
            case 'slash':
                return <Text color="gray.500">/</Text>
            case 'arrow':
                return <Text color="gray.500">&rarr;</Text>
            case 'chevron':
            default:
                return <ChevronRight size={16} className="text-gray-500" />
        }
    }

    return (
        <Box>
            {/* Hidden structured data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: allItems.map(item => ({
                            '@type': 'ListItem',
                            position: item.position,
                            name: item.name,
                            item: item.url
                        }))
                    })
                }}
            />

            {/* Visual breadcrumb */}
            <HStack
                gap={2}
                flexWrap="wrap"
                fontSize="sm"
                color="gray.500"
                alignItems="center"
            >
                {allItems.map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" gap={2}>
                        {index > 0 && renderSeparator()}

                        {index === allItems.length - 1 ? (
                            // Current page - not a link
                            <Text
                                color="#4241ff"
                                fontWeight="600"
                            >
                                {item.name}
                            </Text>
                        ) : (
                            // Parent pages - links
                            <NextLink href={item.url} passHref legacyBehavior>
                                <Link
                                    color="gray.500"
                                    _hover={{ color: 'blue.600' }}
                                    transition="color 0.2s"
                                >
                                    {item.name}
                                </Link>
                            </NextLink>
                        )}
                    </Box>
                ))}
            </HStack>
        </Box>
    )
}

/**
 * Generate breadcrumb items from a path
 */
export function generateBreadcrumbsFromPath(
    path: string,
    title?: string
): BreadcrumbItem[] {
    const baseUrl = 'https://hirenest.ai'
    const segments = path.split('/').filter(Boolean)
    const items: BreadcrumbItem[] = []

    let urlBuilder = baseUrl
    const segmentNames: Record<string, string> = {
        'interview-questions': 'Interview Questions',
        'resume-keywords': 'Resume Keywords',
        'salary': 'Salary Guides',
        'cover-letter': 'Cover Letters',
        'job-description': 'Job Descriptions',
        'blog': 'Blog'
    }

    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i]
        urlBuilder += `/${segment}`

        // If it's the last segment and we have a title, use it
        if (i === segments.length - 1 && title) {
            items.push({
                name: title,
                url: urlBuilder,
                position: i + 1
            })
        } else {
            // Use known name or format segment
            const name = segmentNames[segment] || formatSegment(segment)
            items.push({
                name,
                url: urlBuilder,
                position: i + 1
            })
        }
    }

    return items
}

function formatSegment(segment: string): string {
    return segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

/**
 * Minimal breadcrumb component for compact layouts
 */
interface CompactBreadcrumbNavProps {
    items: BreadcrumbItem[]
    maxItems?: number
}

export function CompactBreadcrumbNav({
    items,
    maxItems = 3
}: CompactBreadcrumbNavProps) {
    // If too many items, show only first and last
    let displayItems = items
    if (items.length > maxItems) {
        displayItems = [
            items[0],
            { name: '...', url: '', position: 0 },
            ...items.slice(-maxItems + 2)
        ]
    }

    return (
        <HStack gap={1} fontSize="xs" color="gray.500">
            {displayItems.map((item, index) => (
                <Box key={index} display="flex" alignItems="center">
                    {index > 0 && <Text mx={1} color="gray.300">&rsaquo;</Text>}

                    {item.url ? (
                        <NextLink href={item.url} passHref legacyBehavior>
                            <Link
                                color="gray.600"
                                _hover={{ color: 'blue.600' }}
                            >
                                {item.name}
                            </Link>
                        </NextLink>
                    ) : (
                        <Text>{item.name}</Text>
                    )}
                </Box>
            ))}
        </HStack>
    )
}
