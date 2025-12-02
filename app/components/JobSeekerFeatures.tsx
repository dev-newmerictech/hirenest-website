'use client'

import { Box, Container, Flex, Heading, Text, VStack, Grid } from '@chakra-ui/react'
import { Brain, FileText, BarChart3, MessageCircle, DollarSign, CheckCircle } from 'lucide-react'

const features = [
    {
        icon: Brain,
        title: 'AI-Powered Job Matching',
        description: 'Advanced algorithms analyze your profile and match you with the most relevant job opportunities.',
        color: '#4241ff'
    },
    {
        icon: FileText,
        title: 'Smart Resume Builder',
        description: 'Create ATS-friendly resumes with AI-powered suggestions and professional templates.',
        color: '#4241ff'
    },
    {
        icon: BarChart3,
        title: 'Career Insights Dashboard',
        description: 'Track your job search progress, get personalized recommendations, and monitor market trends.',
        color: '#4241ff'
    },
    {
        icon: MessageCircle,
        title: 'Interview Preparation',
        description: 'Practice with AI-powered mock interviews and get instant feedback to improve your skills.',
        color: '#4241ff'
    },
    {
        icon: DollarSign,
        title: 'Salary Insights',
        description: 'Access real-time salary data and negotiate better offers with confidence.',
        color: '#4241ff'
    },
    {
        icon: CheckCircle,
        title: 'Application Tracking',
        description: 'Keep track of all your applications in one place and never miss a follow-up.',
        color: '#4241ff'
    }
]

export const JobSeekerFeatures = () => (
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
                    fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                    fontWeight="600"
                    color="#4241ff"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    mb={3}
                >
                    Features
                </Text>
                <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl' }}
                    fontWeight="700"
                    color="#000"
                    maxW="7xl"
                    lineHeight={'normal'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                >
                    Everything You Need to
                    <Text as="span" display="block" color="#4241ff">
                        Succeed in Your Job Search
                    </Text>
                </Heading>
                <Text
                    fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                    color="#000"
                    maxW="7xl"
                    mt={2}
                >
                    Powerful tools and features designed to help you find and land your dream job faster
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
                                    size="lg"
                                    fontWeight="700"
                                    color="#1d1d1f"
                                    lineHeight="1.2"
                                >
                                    {feature.title}
                                </Heading>
                                <Text
                                    color="#6e6e73"
                                    lineHeight="1.6"
                                    fontSize="sm"
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
                <Text
                    fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                    fontWeight="600"
                    color="#000"
                >
                    And many more features to help you succeed! 🚀
                </Text>
            </VStack>
        </Container>
    </Box>
)
