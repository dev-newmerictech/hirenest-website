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
                gap={{ base: 6, md: 8 }}
                position="relative"
            >
                {workflowSteps.map((step, index) => {
                    const Icon = step.icon
                    return (
                        <Box
                            key={index}
                            position="relative"
                            bg="rgba(248, 248, 248, 1)"
                            p={{ base: 6, md: 8 }}
                            borderRadius="xl"
                            border="2px solid"
                            borderColor="transparent"
                            transition="all 0.3s"
                            _hover={{
                                borderColor: "#4241ff",
                                transform: "translateY(-4px)",
                                boxShadow: "xl",
                                bg: "white"
                            }}
                        >
                            {/* Step Number */}
                            <Text
                                position="absolute"
                                top={4}
                                right={4}
                                fontSize={{ base: '3xl', md: '4xl' }}
                                fontWeight="700"
                                color="rgba(66, 65, 255, 0.1)"
                            >
                                {step.step}
                            </Text>

                            {/* Icon */}
                            <Flex
                                w={{ base: '50px', md: '60px' }}
                                h={{ base: '50px', md: '60px' }}
                                bg="rgba(66, 65, 255, 0.1)"
                                borderRadius="lg"
                                alignItems="center"
                                justifyContent="center"
                                mb={4}
                            >
                                <Icon size={30} color="#4241ff" strokeWidth={2} />
                            </Flex>

                            {/* Content */}
                            <VStack alignItems="flex-start" gap={3}>
                                <Heading
                                    as="h3"
                                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                    fontWeight="600"
                                    color="#000"
                                >
                                    {step.title}
                                </Heading>
                                <Text
                                    fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                                    color="#000"
                                    lineHeight="1.6"
                                >
                                    {step.description}
                                </Text>
                            </VStack>
                        </Box>
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
