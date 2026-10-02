'use client'

import { Box, Container, VStack, HStack, Heading, Text, Badge, Button } from '@chakra-ui/react'
import { Briefcase, MapPin, Building, TrendingUp } from 'lucide-react'

interface JobBoardHeroProps {
    title: string
    titleHighlight?: string
    description: string
    stats?: {
        totalJobs: number
        companies: number
        newThisWeek: number
    }
    badge?: string
}

export function JobBoardHero({
    title,
    titleHighlight,
    description,
    stats,
    badge = 'Job Board'
}: JobBoardHeroProps) {
    return (
        <Box
            w="full"
            bgGradient="linear(to-br, rgba(66, 65, 255, 0.05), rgba(248, 248, 248, 1))"
            py={16}
        >
            <Container maxW="7xl">
                <VStack align="center" gap={8} textAlign="center" pt={20}>
                    {/* Badge */}
                    <Box>
                        <Badge
                            bg="brand.50"
                            color="brand.700"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="sm"
                            fontWeight="600"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            {badge}
                        </Badge>
                    </Box>

                    {/* Title */}
                    <VStack align="stretch" gap={4} maxW="4xl">
                        <Heading
                            as="h1"
                            fontSize={{ base: '4xl', md: '5xl' }}
                            fontWeight="800"
                            lineHeight="1.1"
                            color="#1d1d1f"
                        >
                            {title}
                            {titleHighlight && (
                                <Text as="span" display="block" bg="#4241ff" bgClip="text">
                                    {titleHighlight}
                                </Text>
                            )}
                        </Heading>
                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }}
                            color="gray.600"
                            lineHeight="1.6"
                        >
                            {description}
                        </Text>
                    </VStack>

                    {/* Stats */}
                    {stats && (
                        <HStack
                            gap={{ base: 6, md: 12 }}
                            flexWrap="wrap"
                            pt={4}
                        >
                            <HStack gap={3}>
                                <Box
                                    bg="white"
                                    p={3}
                                    borderRadius="xl"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                >
                                    <Briefcase size={24} color="#4241ff" />
                                </Box>
                                <VStack align="start" gap={0}>
                                    <Text
                                        fontSize={{ base: '2xl', md: '3xl' }}
                                        fontWeight="700"
                                        color="gray.900"
                                    >
                                        {stats.totalJobs.toLocaleString()}+
                                    </Text>
                                    <Text fontSize="sm" color="gray.600">
                                        Active Jobs
                                    </Text>
                                </VStack>
                            </HStack>

                            <HStack gap={3}>
                                <Box
                                    bg="white"
                                    p={3}
                                    borderRadius="xl"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                >
                                    <Building size={24} color="#4241ff" />
                                </Box>
                                <VStack align="start" gap={0}>
                                    <Text
                                        fontSize={{ base: '2xl', md: '3xl' }}
                                        fontWeight="700"
                                        color="gray.900"
                                    >
                                        {stats.companies.toLocaleString()}+
                                    </Text>
                                    <Text fontSize="sm" color="gray.600">
                                        Companies
                                    </Text>
                                </VStack>
                            </HStack>

                            <HStack gap={3}>
                                <Box
                                    bg="white"
                                    p={3}
                                    borderRadius="xl"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                >
                                    <TrendingUp size={24} color="#4241ff" />
                                </Box>
                                <VStack align="start" gap={0}>
                                    <Text
                                        fontSize={{ base: '2xl', md: '3xl' }}
                                        fontWeight="700"
                                        color="gray.900"
                                    >
                                        {stats.newThisWeek.toLocaleString()}+
                                    </Text>
                                    <Text fontSize="sm" color="gray.600">
                                        New This Week
                                    </Text>
                                </VStack>
                            </HStack>
                        </HStack>
                    )}
                </VStack>
            </Container>
        </Box>
    )
}
