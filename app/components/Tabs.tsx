"use client"

import { Box, Container, Tabs, Grid, Heading, Text, VStack, Flex, Button } from "@chakra-ui/react"
import Link from "next/link"

import { LuBriefcase, LuUserCheck, LuTrendingUp, LuSearch, LuUsers, LuTarget, LuFileCheck, LuSparkles, LuActivity, LuZap, LuShield, LuRocket, LuArrowRight } from "react-icons/lu"

const jobSeekersCards = [
    {
        icon: LuFileCheck,
        title: "AI Resume Builder",
        description: "Create professional resumes tailored to each job application with AI-powered suggestions.",
        link: "/ai-resume-builder"
    },
    {
        icon: LuSearch,
        title: "Smart Job Matching",
        description: "Get matched with opportunities that align with your skills and career goals automatically.",
        link: "/smart-job-matching"
    },
    {
        icon: LuTrendingUp,
        title: "Career Insights",
        description: "Track your progress and get personalized career growth recommendations.",
        link: "/career-insights"
    },
    {
        icon: LuTarget,
        title: "Skill Assessments",
        description: "Showcase your expertise and rank higher in candidate searches.",
        link: "/skill-assessments"
    },
    {
        icon: LuSparkles,
        title: "Profile Optimization",
        description: "Get real-time feedback to improve your visibility to recruiters.",
        link: "/profile-optimization"
    },
    {
        icon: LuRocket,
        title: "Fast-Track Applications",
        description: "Apply to multiple jobs with one click using your optimized profile.",
        link: "/fast-track-applications"
    }
]

const recruitersCards = [
    {
        icon: LuUsers,
        title: "AI Candidate Ranking",
        description: "Instantly rank candidates based on skills and requirements using advanced AI.",
        link: "/ai-candidate-ranking"
    },
    {
        icon: LuZap,
        title: "Quick Screening",
        description: "Filter through hundreds of applications in minutes with automated screening.",
        link: "/quick-screening"
    },
    {
        icon: LuActivity,
        title: "Hiring Analytics",
        description: "Track your hiring metrics and candidate pipeline with comprehensive analytics.",
        link: "/hiring-analytics"
    },
    {
        icon: LuShield,
        title: "Verified Candidates",
        description: "Access pre-verified candidates with skill assessments already completed.",
        link: "/verified-candidates"
    },
    {
        icon: LuBriefcase,
        title: "Custom Assessments",
        description: "Create role-specific assessments to evaluate technical skills and cultural fit.",
        link: "/custom-assessments"
    },
    {
        icon: LuUserCheck,
        title: "Team Collaboration",
        description: "Collaborate with your hiring team and streamline the interview process.",
        link: "/team-collaboration"
    }
]

export function TabsComponent() {
    return (
        <Box w="full" bg="white" pb={{ base: '20' }}>
            <Container maxW="7xl">
                <VStack gap={{ base: 10 }}>
                    {/* Section Header - Apple Style */}
                    <VStack textAlign="center" gap={2} maxW="7xl" mx="auto">
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            color="#000"
                            lineHeight="1.2"
                        >
                            Choose your <Text as="span" bg="#4241ff" bgClip="text">path.</Text>
                        </Heading>
                        <Text
                            fontSize={{ base: 'lg' }}
                            color="#6e6e73"
                            lineHeight="1.4"
                            fontWeight="400"
                        >
                            Powerful features tailored to your needs.
                        </Text>
                    </VStack>

                    <Box w="full">
                        <Tabs.Root defaultValue="job-seekers" variant="plain" w="full">
                            <Flex justifyContent="center" mb={{ base: 8, md: 10 }}>
                                <Tabs.List
                                    bg="#f5f5f7"
                                    rounded="full"
                                    p="1.5"
                                >
                                    <Tabs.Trigger
                                        value="job-seekers"
                                        fontWeight="500"
                                        fontSize={{ base: 'md', md: 'lg' }}
                                        px={{ base: '6', md: '8' }}
                                        py={{ base: '2.5', md: '3' }}
                                        rounded="full"
                                        _selected={{
                                            bg: "white",
                                            color: "#1d1d1f",
                                            shadow: "sm"
                                        }}
                                        color="#6e6e73"
                                        transition="all 0.3s ease"
                                    >
                                        Job Seekers
                                    </Tabs.Trigger>
                                    <Tabs.Trigger
                                        value="recruiters"
                                        fontWeight="500"
                                        fontSize={{ base: 'md', md: 'lg' }}
                                        px={{ base: '6', md: '8' }}
                                        py={{ base: '2.5', md: '3' }}
                                        rounded="full"
                                        _selected={{
                                            bg: "white",
                                            color: "#1d1d1f",
                                            shadow: "sm"
                                        }}
                                        color="#6e6e73"
                                        transition="all 0.3s ease"
                                    >
                                        Recruiters
                                    </Tabs.Trigger>
                                </Tabs.List>
                            </Flex>

                            <Tabs.Content value="job-seekers">
                                <Grid
                                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                                    gap={{ base: 4, md: 6 }}
                                    maxW="1200px"
                                    mx="auto"
                                >
                                    {jobSeekersCards.map((card, index) => {
                                        const Icon = card.icon
                                        return (
                                            <Box
                                                key={index}
                                                bg="#f5f5f7"
                                                borderRadius="24px"
                                                p={{ base: 6, md: 8 }}
                                                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                                                _hover={{
                                                    bg: "#fafafa",
                                                    transform: "scale(1.02)"
                                                }}
                                                h="full"
                                                display="flex"
                                                flexDirection="column"
                                            >
                                                <VStack align="flex-start" gap={4} flex="1">
                                                    {/* Icon */}
                                                    <Flex
                                                        w={12}
                                                        h={12}
                                                        align="center"
                                                        justify="center"
                                                        borderRadius="12px"
                                                        bg="white"
                                                    >
                                                        <Icon size={24} color="#4241ff" />
                                                    </Flex>

                                                    {/* Title */}
                                                    <Heading
                                                        as="h3"
                                                        fontSize={{ base: 'lg', md: 'xl' }}
                                                        fontWeight="600"
                                                        color="#1d1d1f"
                                                        lineHeight="1.3"
                                                    >
                                                        {card.title}
                                                    </Heading>

                                                    {/* Description */}
                                                    <Text
                                                        fontSize={{ base: 'sm', md: 'md' }}
                                                        color="#6e6e73"
                                                        lineHeight="1.5"
                                                        flex="1"
                                                    >
                                                        {card.description}
                                                    </Text>

                                                    {/* Link */}
                                                    <Link href={card.link} passHref style={{ width: '100%' }}>
                                                        <Flex
                                                            as="a"
                                                            align="center"
                                                            gap={2}
                                                            color="#4241ff"
                                                            fontSize="md"
                                                            fontWeight="500"
                                                            mt={2}
                                                            transition="all 0.2s ease"
                                                            _hover={{
                                                                gap: 3
                                                            }}
                                                        >
                                                            Learn more
                                                            <LuArrowRight size={18} />
                                                        </Flex>
                                                    </Link>
                                                </VStack>
                                            </Box>
                                        )
                                    })}
                                </Grid>
                            </Tabs.Content>

                            <Tabs.Content value="recruiters">
                                <Grid
                                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                                    gap={{ base: 4, md: 6 }}
                                    maxW="1200px"
                                    mx="auto"
                                >
                                    {recruitersCards.map((card, index) => {
                                        const Icon = card.icon
                                        return (
                                            <Box
                                                key={index}
                                                bg="#f5f5f7"
                                                borderRadius="24px"
                                                p={{ base: 6, md: 8 }}
                                                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                                                _hover={{
                                                    bg: "#fafafa",
                                                    transform: "scale(1.02)"
                                                }}
                                                h="full"
                                                display="flex"
                                                flexDirection="column"
                                            >
                                                <VStack align="flex-start" gap={4} flex="1">
                                                    {/* Icon */}
                                                    <Flex
                                                        w={12}
                                                        h={12}
                                                        align="center"
                                                        justify="center"
                                                        borderRadius="12px"
                                                        bg="white"
                                                    >
                                                        <Icon size={24} color="#b000ea" />
                                                    </Flex>

                                                    {/* Title */}
                                                    <Heading
                                                        as="h3"
                                                        fontSize={{ base: 'lg', md: 'xl' }}
                                                        fontWeight="600"
                                                        color="#1d1d1f"
                                                        lineHeight="1.3"
                                                    >
                                                        {card.title}
                                                    </Heading>

                                                    {/* Description */}
                                                    <Text
                                                        fontSize={{ base: 'sm', md: 'md' }}
                                                        color="#6e6e73"
                                                        lineHeight="1.5"
                                                        flex="1"
                                                    >
                                                        {card.description}
                                                    </Text>

                                                    {/* Link */}
                                                    <Link href={card.link} passHref style={{ width: '100%' }}>
                                                        <Flex
                                                            as="a"
                                                            align="center"
                                                            gap={2}
                                                            color="#b000ea"
                                                            fontSize="md"
                                                            fontWeight="500"
                                                            mt={2}
                                                            transition="all 0.2s ease"
                                                            _hover={{
                                                                gap: 3
                                                            }}
                                                        >
                                                            Learn more
                                                            <LuArrowRight size={18} />
                                                        </Flex>
                                                    </Link>
                                                </VStack>
                                            </Box>
                                        )
                                    })}
                                </Grid>
                            </Tabs.Content>
                        </Tabs.Root>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}
