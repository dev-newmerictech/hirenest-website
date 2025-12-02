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
                    maxW="7xl"
                    lineHeight={'normal'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                >
                    Your Journey to Success
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
