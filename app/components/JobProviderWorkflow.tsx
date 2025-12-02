'use client'

import { Box, Container, Flex, Heading, Text, VStack, Grid } from '@chakra-ui/react'
import { FileSearch, Users, Zap, CheckCircle, TrendingUp } from 'lucide-react'

const workflowSteps = [
    {
        icon: FileSearch,
        title: 'Post Your Job',
        description: 'Create detailed job listings with our intuitive interface and AI-powered job description generator.',
        step: '01'
    },
    {
        icon: Zap,
        title: 'AI Matches Candidates',
        description: 'Our AI instantly analyzes and matches the most qualified candidates to your job requirements.',
        step: '02'
    },
    {
        icon: Users,
        title: 'Review Applications',
        description: 'Access pre-screened candidate profiles with AI-generated insights and compatibility scores.',
        step: '03'
    },
    {
        icon: CheckCircle,
        title: 'Interview & Select',
        description: 'Schedule interviews, collaborate with your team, and make data-driven hiring decisions.',
        step: '04'
    },
    {
        icon: TrendingUp,
        title: 'Onboard & Grow',
        description: 'Seamlessly onboard new hires and track their performance with our integrated tools.',
        step: '05'
    }
]

export const JobProviderWorkflow = () => (
    <Box
        w="full"
        position="relative"
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
                    How It Works
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
                    Hire Top Talent
                    <Text as="span" display="block" color="#4241ff">
                        in 5 Simple Steps
                    </Text>
                </Heading>
                <Text
                    fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                    color="#000"
                    maxW="7xl"
                    mt={2}
                >
                    From posting a job to onboarding, we streamline your entire hiring process
                </Text>
            </VStack>

            {/* Workflow Steps */}
            <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={8}
                position="relative"
            >
                {workflowSteps.map((step, index) => {
                    const Icon = step.icon
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
                                borderColor: '#4241ff'
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

                            {/* Step Number */}
                            <Text
                                position="absolute"
                                top={4}
                                right={4}
                                fontSize={{ base: '3xl', md: '4xl' }}
                                fontWeight="700"
                                color="rgba(66, 65, 255, 0.1)"
                                zIndex={1}
                            >
                                {step.step}
                            </Text>

                            {/* Icon */}
                            <Flex
                                w={14}
                                h={14}
                                align="center"
                                justify="center"
                                rounded="xl"
                                bg="blue.50"
                                color="#4241ff"
                                position="relative"
                                zIndex={1}
                                transition="all 0.3s ease"
                                css={{
                                    ".group:hover &": {
                                        transform: "scale(1.1)",
                                        bg: "#4241ff",
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
                                    {step.title}
                                </Heading>
                                <Text
                                    color="#6e6e73"
                                    lineHeight="1.6"
                                    fontSize="sm"
                                >
                                    {step.description}
                                </Text>
                            </VStack>
                        </VStack>
                    )
                })}
            </Grid>

            {/* Bottom Timeline Connector for Mobile */}
            <Flex
                display={{ base: 'none', md: 'flex', lg: 'none' }}
                justifyContent="center"
                mt={8}
                gap={2}
            >
                {workflowSteps.map((_, index) => (
                    <Box
                        key={index}
                        w="40px"
                        h="4px"
                        bg="rgba(2, 62, 138, 0.3)"
                        borderRadius="full"
                    />
                ))}
            </Flex>
        </Container>
    </Box>
)
