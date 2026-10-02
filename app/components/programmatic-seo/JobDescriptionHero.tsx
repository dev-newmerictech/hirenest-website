import { Box, VStack, HStack, Text, Badge } from '@chakra-ui/react'
import { DollarSign, TrendingUp, GraduationCap, Clock } from 'lucide-react'

interface JobDescriptionHeroProps {
    badge: string
    title: string
    titleHighlight: string
    description: string
    stats: {
        salary?: string
        growthRate?: number
        education?: string
        hours?: string
    }
}

export function JobDescriptionHero({
    badge,
    title,
    titleHighlight,
    description,
    stats
}: JobDescriptionHeroProps) {
    return (
        <Box
            bg="transparent"
            pt={{ base: '16', md: '20' }}
            px={{ base: '4', md: '8' }}
        >
            <Box maxW="6xl" mx="auto" textAlign="center">
                <Badge
                    bg="transparent"
                    color="#4241ff"
                    px={4}
                    py={2}
                    rounded="full"
                    fontSize="sm"
                    fontWeight="600"
                    mb={6}
                    mt={{ base: 16 }}
                >
                    {badge}
                </Badge>

                <VStack gap={6} mb={8}>
                    <Text
                        fontSize={{ base: '4xl', md: '6xl' }}
                        fontWeight="800"
                        color="black"
                        lineHeight="1.1"
                        letterSpacing="tight"
                        as={'h1'}
                    >
                        {title}{' '}
                        <Text as="span" color="#4241ff">
                            {titleHighlight}
                        </Text>
                    </Text>

                    <Text
                        fontSize={{ base: 'lg', md: 'xl' }}
                        color="black"
                        maxW="3xl"
                        lineHeight="1.6"
                    >
                        {description}
                    </Text>
                </VStack>

                {/* Stats Grid */}
                <HStack
                    gap={{ base: '4', md: '8' }}
                    justify="center"
                    flexWrap="wrap"
                >
                    {stats.salary && (
                        <Box
                            bg="whiteAlpha.200"
                            backdropFilter="blur(10px)"
                            px={6}
                            py={4}
                            rounded="xl"
                            border="1px solid"
                            borderColor="whiteAlpha.300"
                        >
                            <VStack gap={1}>
                                <DollarSign size={20} color="gray" />
                                <Text fontSize="sm" color="gray">
                                    Average Salary
                                </Text>
                                <Text fontSize="xl" fontWeight="700" color="black">
                                    {stats.salary}
                                </Text>
                            </VStack>
                        </Box>
                    )}

                    {stats.growthRate !== undefined && (
                        <Box
                            bg="whiteAlpha.200"
                            backdropFilter="blur(10px)"
                            px={6}
                            py={4}
                            rounded="xl"
                            border="1px solid"
                            borderColor="whiteAlpha.300"
                        >
                            <VStack gap={1}>
                                <TrendingUp size={20} color="gray" />
                                <Text fontSize="sm" color="gray">
                                    Job Growth
                                </Text>
                                <Text fontSize="xl" fontWeight="700" color="black">
                                    {stats.growthRate}%
                                </Text>
                            </VStack>
                        </Box>
                    )}

                    {stats.education && (
                        <Box
                            bg="whiteAlpha.200"
                            backdropFilter="blur(10px)"
                            px={6}
                            py={4}
                            rounded="xl"
                            border="1px solid"
                            borderColor="whiteAlpha.300"
                        >
                            <VStack gap={1}>
                                <GraduationCap size={20} color="gray" />
                                <Text fontSize="sm" color="gray">
                                    Education
                                </Text>
                                <Text fontSize="xl" fontWeight="700" color="black">
                                    {stats.education}
                                </Text>
                            </VStack>
                        </Box>
                    )}

                    {stats.hours && (
                        <Box
                            bg="whiteAlpha.200"
                            backdropFilter="blur(10px)"
                            px={6}
                            py={4}
                            rounded="xl"
                            border="1px solid"
                            borderColor="whiteAlpha.300"
                        >
                            <VStack gap={1}>
                                <Clock size={20} color="gray" />
                                <Text fontSize="sm" color="gray">
                                    Work Hours
                                </Text>
                                <Text fontSize="xl" fontWeight="700" color="black">
                                    {stats.hours}
                                </Text>
                            </VStack>
                        </Box>
                    )}
                </HStack>
            </Box>
        </Box>
    )
}
