'use client'

import { Box, Container, Flex, Heading, Text, VStack, Grid } from '@chakra-ui/react'
import { Target, BarChart2, Shield, Clock, Globe, Headphones } from 'lucide-react'

const features = [
    {
        icon: Target,
        title: 'AI-Powered Candidate Matching',
        description: 'Advanced algorithms analyze candidate profiles and match them with your job requirements for perfect fits.',
        color: '#4241ff'
    },
    {
        icon: BarChart2,
        title: 'Analytics Dashboard',
        description: 'Track hiring metrics, monitor application pipelines, and make data-driven recruitment decisions.',
        color: '#4241ff'
    },
    {
        icon: Shield,
        title: 'Pre-Screened Candidates',
        description: 'Access verified candidate profiles with background checks and skill assessments already completed.',
        color: '#4241ff'
    },
    {
        icon: Clock,
        title: 'Faster Time-to-Hire',
        description: 'Reduce your hiring timeline by up to 50% with automated screening and instant candidate matching.',
        color: '#4241ff'
    },
    {
        icon: Globe,
        title: 'Global Talent Pool',
        description: 'Access a diverse pool of candidates from around the world with various skills and experience levels.',
        color: '#4241ff'
    },
    {
        icon: Headphones,
        title: 'Dedicated Support',
        description: 'Get personalized assistance from our recruitment experts throughout your hiring journey.',
        color: '#4241ff'
    }
]

export const JobProviderFeatures = () => (
    <Box
        w="full"
        position="relative"
        bg="#fff"
        py={{ base: '12', md: '20' }}
    >
        <Container maxW="7xl" position="relative">
            {/* Section Header */}
            <VStack alignItems="center" mb={{ base: 12, md: 16 }} textAlign="center">
                <Text
                    fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
                    mb={3}
                >
                    Features
                </Text>
                <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl' }}
                    fontWeight="800"
                    color="#1d1d1f"
                    lineHeight="1.1"
                    letterSpacing="tight"
                    maxW="7xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                    flexWrap={'wrap'}
                >
                    Everything You Need to
                    <Text as="span" display="block" color="#4241ff">
                        Build Your Dream Team
                    </Text>
                </Heading>
                <Text
                    fontSize={{ base: 'lg', md: 'xl' }} color="#6e6e73"
                    maxW="7xl"
                    mt={2}
                >
                    Powerful recruitment tools designed to help you find and hire the best talent faster
                </Text>
            </VStack>

            {/* Features Grid */}
            <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={8}
            >
                {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                        <VStack
                            key={index}
                            bg="white"
                            p={8}
                            rounded="2xl"
                            border="1px solid"
                            borderColor="gray.200"
                            align="flex-start"
                            gap={6}
                            h="full"
                            position="relative"
                            overflow="hidden"
                            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                            className="group"
                            cursor="pointer"
                            _hover={{
                                transform: 'translateY(-8px)',
                                shadow: 'xl',
                                borderColor: feature.color
                            }}
                        >
                            {/* Subtle Background Gradient */}
                            <Box
                                position="absolute"
                                top={0}
                                right={0}
                                w="200px"
                                h="200px"
                                bgGradient="radial(blue.50, transparent)"
                                opacity={0.4}
                                transition="opacity 0.3s ease"
                                css={{ ".group:hover &": { opacity: 0.7 } }}
                            />

                            {/* Icon */}
                            <Flex
                                w={14}
                                h={14}
                                align="center"
                                justify="center"
                                rounded="xl"
                                bg="blue.50"
                                color={feature.color}
                                position="relative"
                                zIndex={1}
                                transition="all 0.3s ease"
                                css={{
                                    ".group:hover &": {
                                        transform: "scale(1.1)",
                                        bg: feature.color,
                                        color: "white"
                                    }
                                }}
                            >
                                <Icon size={28} strokeWidth={2} />
                            </Flex>

                            {/* Content */}
                            <VStack align="flex-start" gap={3} flex={1} position="relative" zIndex={1}>
                                <Heading
                                    fontSize={{ base: 'lg', md: 'xl' }}
                                    fontWeight="700"
                                    color="#1d1d1f"
                                    lineHeight="1.2"
                                >
                                    {feature.title}
                                </Heading>
                                <Text
                                    color="#6e6e73"
                                    lineHeight="1.6"
                                    fontSize={{ base: 'md', md: 'lg' }}
                                >
                                    {feature.description}
                                </Text>
                            </VStack>
                        </VStack>
                    )
                })}
            </Grid>

            {/* Bottom CTA Text */}
            <VStack mt={{ base: 12, md: 16 }} textAlign="center">
                <Text fontSize={{ base: 'lg', md: 'xl' }}
                    fontWeight="600"
                    color="#000"
                >
                    And many more features to streamline your hiring! 🚀
                </Text>
            </VStack>
        </Container>
    </Box>
)
