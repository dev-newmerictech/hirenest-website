import { Box, VStack, HStack, Text, Badge } from '@chakra-ui/react'
import { DollarSign, TrendingUp, TrendingDown, Briefcase, MapPin } from 'lucide-react'

interface SalaryHeroProps {
    badge: string
    title: string
    titleHighlight: string
    description: string
    stats: {
        averageSalary?: number
        salaryRange?: { min: number; max: number }
        growthRate?: number
        category: string
    }
}

export function SalaryHero({
    badge,
    title,
    titleHighlight,
    description,
    stats
}: SalaryHeroProps) {
    const formatSalary = (amount: number) => `$${amount.toLocaleString()}`

    const getGrowthIcon = () => {
        if (!stats.growthRate) return <TrendingUp size={20} />
        return stats.growthRate >= 15 ? <TrendingUp size={20} /> : stats.growthRate >= 5 ? <TrendingUp size={20} /> : <TrendingDown size={20} />
    }

    const getGrowthColor = () => {
        if (!stats.growthRate) return 'white'
        return stats.growthRate >= 15 ? 'green.300' : stats.growthRate >= 5 ? 'yellow.300' : 'red.300'
    }

    const getGrowthLabel = () => {
        if (!stats.growthRate) return 'Stable'
        return stats.growthRate >= 15 ? 'Very Fast' : stats.growthRate >= 8 ? 'Fast' : stats.growthRate >= 0 ? 'Moderate' : 'Declining'
    }

    return (
        <Box
            bg="transparent"
            py={{ base: '16', md: '20' }}
            px={{ base: '4', md: '8' }}
        >
            <Box maxW="6xl" mx="auto" textAlign="center">
                <Badge
                    bg="transparent"
                    backdropFilter="blur(10px)"
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

                <VStack gap={6} mb={10}>
                    <Text
                        fontSize={{ base: '4xl', md: '6xl' }}
                        fontWeight="800"
                        color="black"
                        lineHeight="1.1"
                        letterSpacing="tight"
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

                {/* Main Salary Display */}
                <Box
                    bg="whiteAlpha.100"
                    backdropFilter="blur(10px)"
                    p={8}
                    rounded="2xl"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    mb={8}
                >
                    <VStack gap={6}>
                        {stats.salaryRange ? (
                            <>
                                <Text fontSize="sm" color="black" fontWeight="600" textTransform="uppercase">
                                    Average Salary Range
                                </Text>
                                <Text fontSize={{ base: '4xl', md: '5xl' }} fontWeight="800" color="black">
                                    {formatSalary(stats.salaryRange.min)} - {formatSalary(stats.salaryRange.max)}
                                    <Text as="span" fontSize="xl" color="black" ml={2}>/ year</Text>
                                </Text>
                            </>
                        ) : stats.averageSalary ? (
                            <>
                                <Text fontSize="sm" color="black" fontWeight="600" textTransform="uppercase">
                                    Average Salary
                                </Text>
                                <Text fontSize={{ base: '4xl', md: '5xl' }} fontWeight="800" color="black">
                                    {formatSalary(stats.averageSalary)}
                                    <Text as="span" fontSize="xl" color="black" ml={2}>/ year</Text>
                                </Text>
                            </>
                        ) : (
                            <Text fontSize="xl" color="black">Salary data varies by location and experience</Text>
                        )}

                        {/* Salary Bar */}
                        {stats.salaryRange && (
                            <Box w="100%">
                                <Box bg="black" h={3} rounded="full" overflow="hidden" position="relative">
                                    <Box bg="#4241ff" h="100%" w="33%" rounded="full" />
                                </Box>
                                <HStack justify="space-between" mt={2}>
                                    <Text fontSize="xs" color="black">Entry Level</Text>
                                    <Text fontSize="xs" color="black">Mid Level</Text>
                                    <Text fontSize="xs" color="black">Senior Level</Text>
                                </HStack>
                            </Box>
                        )}
                    </VStack>
                </Box>

                {/* Stats Grid */}
                <HStack
                    gap={{ base: '4', md: '8' }}
                    justify="center"
                    flexWrap="wrap"
                >
                    <Box
                        bg="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        px={6}
                        py={4}
                        rounded="xl"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        minW={{ base: '140px', md: '180px' }}
                    >
                        <VStack gap={1}>
                            <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
                                {getGrowthIcon()}
                                <Text fontSize="lg" fontWeight="700" color={'black'}>
                                    {stats.growthRate ? `${stats.growthRate}%` : 'N/A'}
                                </Text>
                            </Box>
                            <Text fontSize="lg" color="black" fontWeight="600">
                                Job Growth
                            </Text>
                            <Text fontSize="xs" color="black" fontWeight="600">
                                {getGrowthLabel()}
                            </Text>
                        </VStack>
                    </Box>

                    <Box
                        bg="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        px={6}
                        py={4}
                        rounded="xl"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        minW={{ base: '140px', md: '180px' }}
                    >
                        <VStack gap={1}>
                            <Box display="flex" justifyContent="center">
                                <Briefcase size={20} color="black" />
                            </Box>
                            <Text fontSize="lg" fontWeight="700" color="black">
                                {stats.category}
                            </Text>
                            <Text fontSize="xs" color="black" fontWeight="600">
                                Industry
                            </Text>
                        </VStack>
                    </Box>

                    <Box
                        bg="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        px={6}
                        py={4}
                        rounded="xl"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        minW={{ base: '140px', md: '180px' }}
                    >
                        <VStack gap={1}>
                            <Box display="flex" justifyContent="center">
                                <MapPin size={20} color="black" />
                            </Box>
                            <Text fontSize="lg" fontWeight="700" color="black">
                                US Avg
                            </Text>
                            <Text fontSize="xs" color="black" fontWeight="600">
                                Location Base
                            </Text>
                        </VStack>
                    </Box>
                </HStack>
            </Box>
        </Box>
    )
}
