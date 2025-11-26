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
        bg="rgba(248, 248, 248, 1)"
        py={{ base: '12', md: '20', lg: '24' }}
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
                    maxW="800px"
                    lineHeight={'normal'}
                >
                    Everything You Need to
                    <Text as="span" display="block" color="#4241ff">
                        Succeed in Your Job Search
                    </Text>
                </Heading>
                <Text
                    fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                    color="#000"
                    maxW="700px"
                    mt={4}
                >
                    Powerful tools and features designed to help you find and land your dream job faster
                </Text>
            </VStack>

            {/* Features Grid */}
            <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={{ base: 6, md: 8 }}
            >
                {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                        <Box
                            key={index}
                            bg="white"
                            p={{ base: 6, md: 8 }}
                            borderRadius="xl"
                            boxShadow="sm"
                            border="1px solid"
                            borderColor="rgba(0, 0, 0, 0.05)"
                            transition="all 0.3s"
                            position="relative"
                            overflow="hidden"
                            _hover={{
                                transform: "translateY(-8px)",
                                boxShadow: "2xl",
                                borderColor: feature.color,
                                _before: {
                                    opacity: 1
                                }
                            }}
                            _before={{
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "4px",
                                bg: feature.color,
                                opacity: 0,
                                transition: "opacity 0.3s"
                            }}
                        >
                            {/* Icon */}
                            <Flex
                                w={{ base: '60px', md: '70px' }}
                                h={{ base: '60px', md: '70px' }}
                                bg="rgba(66, 65, 255, 0.1)"
                                borderRadius="xl"
                                alignItems="center"
                                justifyContent="center"
                                mb={6}
                                transition="all 0.3s"
                                _groupHover={{
                                    transform: "scale(1.1)"
                                }}
                            >
                                <Icon size={36} color={feature.color} strokeWidth={2} />
                            </Flex>

                            {/* Content */}
                            <VStack alignItems="flex-start" gap={3}>
                                <Heading
                                    as="h3"
                                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                    fontWeight="600"
                                    color="#000"
                                >
                                    {feature.title}
                                </Heading>
                                <Text
                                    fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                                    color="#000"
                                    lineHeight="1.6"
                                >
                                    {feature.description}
                                </Text>
                            </VStack>

                            {/* Decorative Element */}
                            <Box
                                position="absolute"
                                bottom="-20px"
                                right="-20px"
                                w="100px"
                                h="100px"
                                borderRadius="full"
                                bg="rgba(66, 65, 255, 0.05)"
                                transition="all 0.3s"
                            />
                        </Box>
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
