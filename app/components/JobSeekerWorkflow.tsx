'use client'

import { Box, Container, Flex, Heading, Text, VStack, Grid } from '@chakra-ui/react'
import { UserPlus, Upload, Target, MessageSquare, Briefcase, ArrowRight } from 'lucide-react'

const workflowSteps = [
    {
        icon: UserPlus,
        title: 'Create Your Profile',
        description: 'Sign up in minutes and build your professional profile with our easy-to-use interface.',
        step: '01'
    },
    {
        icon: Upload,
        title: 'Upload Your Resume',
        description: 'Upload your resume and let our AI analyze your skills, experience, and career goals.',
        step: '02'
    },
    {
        icon: Target,
        title: 'Get Matched with Jobs',
        description: 'Our AI matches you with relevant job opportunities based on your profile and preferences.',
        step: '03'
    },
    {
        icon: MessageSquare,
        title: 'Apply & Interview',
        description: 'Apply to jobs with one click and prepare for interviews with our AI-powered tools.',
        step: '04'
    },
    {
        icon: Briefcase,
        title: 'Land Your Dream Job',
        description: 'Get hired by top companies and start your new career journey with confidence.',
        step: '05'
    }
]

export const JobSeekerWorkflow = () => (
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
                    maxW="800px"
                    lineHeight={'normal'}
                >
                    Your Journey to Success
                    <Text as="span" display="block" color="#4241ff">
                        in 5 Simple Steps
                    </Text>
                </Heading>
                <Text
                    fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                    color="#000"
                    maxW="700px"
                    mt={4}
                >
                    From profile creation to landing your dream job, we guide you every step of the way
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
