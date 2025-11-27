"use client"

import { Box, Container, Tabs, Grid, Heading, Text, VStack, Flex, Badge, Button } from "@chakra-ui/react"
import Link from "next/link"

import { LuBriefcase, LuUserCheck, LuTrendingUp, LuSearch, LuUsers, LuTarget, LuFileCheck, LuSparkles, LuActivity, LuZap, LuShield, LuRocket, LuArrowRight } from "react-icons/lu"

const jobSeekersCards = [
    {
        icon: LuFileCheck,
        title: "AI Resume Builder",
        description: "Create professional resumes tailored to each job application with AI-powered suggestions and formatting.",
        badge: "Smart Tool",
        color: "rgba(70, 62, 254, 1)",
        link: "/ai-resume-builder"
    },
    {
        icon: LuSearch,
        title: "Smart Job Matching",
        description: "Get matched with opportunities that align with your skills, experience, and career goals automatically.",
        badge: "AI Powered",
        color: "rgba(0, 113, 251, 1)",
        link: "/smart-job-matching"
    },
    {
        icon: LuTrendingUp,
        title: "Career Insights",
        description: "Track your application progress, interview success rate, and get personalized career growth recommendations.",
        badge: "Analytics",
        color: "rgba(175, 1, 234, 1)",
        link: "/career-insights"
    },
    {
        icon: LuTarget,
        title: "Skill Assessments",
        description: "Take industry-specific assessments to showcase your expertise and rank higher in candidate searches.",
        badge: "Verified",
        color: "rgba(0, 168, 81, 1)",
        link: "/skill-assessments"
    },
    {
        icon: LuSparkles,
        title: "Profile Optimization",
        description: "Get real-time feedback on your profile completeness and suggestions to improve your visibility.",
        badge: "Pro Tip",
        color: "rgba(255, 152, 0, 1)",
        link: "/profile-optimization"
    },
    {
        icon: LuRocket,
        title: "Fast-Track Applications",
        description: "Apply to multiple jobs with one click using your optimized profile and AI-enhanced resume.",
        badge: "Time Saver",
        color: "rgba(236, 72, 153, 1)",
        link: "/fast-track-applications"
    }
]

const recruitersCards = [
    {
        icon: LuUsers,
        title: "AI Candidate Ranking",
        description: "Instantly rank candidates based on skills, experience, and job requirements using advanced AI algorithms.",
        badge: "AI Powered",
        color: "rgba(70, 62, 254, 1)",
        link: "/ai-candidate-ranking"
    },
    {
        icon: LuZap,
        title: "Quick Screening",
        description: "Filter through hundreds of applications in minutes with automated candidate screening and shortlisting.",
        badge: "Efficient",
        color: "rgba(0, 113, 251, 1)",
        link: "/quick-screening"
    },
    {
        icon: LuActivity,
        title: "Hiring Analytics",
        description: "Track your hiring metrics, time-to-fill, and candidate pipeline with comprehensive analytics dashboard.",
        badge: "Insights",
        color: "rgba(175, 1, 234, 1)",
        link: "/hiring-analytics"
    },
    {
        icon: LuShield,
        title: "Verified Candidates",
        description: "Access pre-verified candidates with skill assessments and background checks already completed.",
        badge: "Trusted",
        color: "rgba(0, 168, 81, 1)",
        link: "/verified-candidates"
    },
    {
        icon: LuBriefcase,
        title: "Custom Assessments",
        description: "Create role-specific assessments to evaluate candidates' technical skills and cultural fit.",
        badge: "Customizable",
        color: "rgba(255, 152, 0, 1)",
        link: "/custom-assessments"
    },
    {
        icon: LuUserCheck,
        title: "Team Collaboration",
        description: "Collaborate with your hiring team, share candidate profiles, and streamline the interview process.",
        badge: "Collaborative",
        color: "rgba(236, 72, 153, 1)",
        link: "/team-collaboration"
    }
]

export function TabsComponent() {
    return (
        <Box w="full" bg="rgba(249, 249, 249, 1)" py={{ base: '12', md: '16' }}>
            <Container maxW="7xl">
                <VStack gap={{ base: '8', md: '12' }}>
                    <VStack gap="4" textAlign="center" maxW="3xl" mx="auto">
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="bold"
                            color="#000"
                            lineHeight="tighter"
                        >
                            Choose Your Path
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color="#000"
                            opacity={0.8}
                            lineHeight="relaxed"
                            maxW="2xl"
                        >
                            Discover powerful features tailored to your needs
                        </Text>
                    </VStack>

                    <Box w="full">
                        <Tabs.Root defaultValue="job-seekers" variant="plain" w="full">
                            <Flex justifyContent="center" mb={{ base: '8', md: '12' }}>
                                <Tabs.List
                                    bg="white"
                                    rounded="full"
                                    p="2"
                                    shadow="0px 4px 20px rgba(0, 0, 0, 0.08)"
                                    border="1px solid rgba(0, 0, 0, 0.05)"
                                >
                                    <Tabs.Trigger
                                        value="job-seekers"
                                        fontWeight="semibold"
                                        fontSize={{ base: 'md', md: 'lg' }}
                                        px={{ base: '6', md: '8' }}
                                        py={{ base: '3', md: '4' }}
                                        rounded="full"
                                        _selected={{
                                            bg: "linear-gradient(90deg, #0071fb 0%, #b000ea 100%)",
                                            color: "white"
                                        }}
                                        color="#000"
                                        transition="all 0.3s ease"
                                    >
                                        Job Seekers
                                    </Tabs.Trigger>
                                    <Tabs.Trigger
                                        value="recruiters"
                                        fontWeight="semibold"
                                        fontSize={{ base: 'md', md: 'lg' }}
                                        px={{ base: '6', md: '8' }}
                                        py={{ base: '3', md: '4' }}
                                        rounded="full"
                                        _selected={{
                                            bg: "linear-gradient(90deg, #0071fb 0%, #b000ea 100%)",
                                            color: "white"
                                        }}
                                        color="#000"
                                        transition="all 0.3s ease"
                                    >
                                        Job Recruiters
                                    </Tabs.Trigger>
                                </Tabs.List>
                            </Flex>

                            <Tabs.Content value="job-seekers">
                                <Grid
                                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                                    gap={{ base: '6', md: '8' }}
                                >
                                    {jobSeekersCards.map((card, index) => {
                                        const Icon = card.icon
                                        return (
                                            <Box
                                                key={index}
                                                bg="white"
                                                borderRadius="24px"
                                                p={{ base: '6', md: '8' }}
                                                shadow="0px 4px 20px rgba(0, 0, 0, 0.08)"
                                                border="1px solid rgba(0, 0, 0, 0.05)"
                                                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                                _hover={{
                                                    transform: "translateY(-8px)",
                                                    shadow: "0px 16px 48px rgba(0, 0, 0, 0.12)",
                                                    borderColor: `${card.color}40`,
                                                }}
                                                position="relative"
                                                overflow="hidden"
                                                h="full"
                                                display="flex"
                                                flexDirection="column"
                                            >
                                                <Box
                                                    position="absolute"
                                                    top="0"
                                                    right="0"
                                                    w="140px"
                                                    h="140px"
                                                    bg={'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)'}
                                                    opacity="0.08"
                                                    borderRadius="0 0 0 120px"
                                                    transition="all 0.3s ease"
                                                />
                                                <VStack align="start" gap="5" position="relative" zIndex="1" flex="1">
                                                    <Flex align="center" gap="3" w="full" flexWrap="wrap">
                                                        <Box
                                                            bg={card.color}
                                                            p="3.5"
                                                            borderRadius="14px"
                                                            color="white"
                                                            boxShadow={`0 4px 12px ${card.color}40`}
                                                            transition="all 0.3s ease"
                                                        >
                                                            <Icon size={26} />
                                                        </Box>
                                                    </Flex>
                                                    <Heading
                                                        as="h3"
                                                        fontSize={{ base: 'xl', md: '2xl' }}
                                                        fontWeight="bold"
                                                        color="#000"
                                                        lineHeight="tight"
                                                        mt="2"
                                                    >
                                                        {card.title}
                                                    </Heading>
                                                    <Text
                                                        fontSize={{ base: 'sm', md: 'md' }}
                                                        color="#000"
                                                        opacity={0.7}
                                                        lineHeight="relaxed"
                                                        flex="1"
                                                    >
                                                        {card.description}
                                                    </Text>
                                                    <Link href={card.link} passHref style={{ width: 'fit-content' }}>
                                                        <Button
                                                            as="a"
                                                            variant="ghost"
                                                            size={{ base: 'sm', md: 'md' }}
                                                            fontWeight="semibold"
                                                            px="4"
                                                            py="2"
                                                            bg="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                                                            color="white"
                                                            borderRadius="lg"
                                                            _hover={{
                                                                transform: "translateX(4px)",
                                                            }}
                                                            transition="all 0.2s ease"
                                                            mt="auto"
                                                            w="fit-content"
                                                        >
                                                            <Flex align="center" gap="2">
                                                                Learn More
                                                                <LuArrowRight size={18} />
                                                            </Flex>
                                                        </Button>
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
                                    gap={{ base: '6', md: '8' }}
                                >
                                    {recruitersCards.map((card, index) => {
                                        const Icon = card.icon
                                        return (
                                            <Box
                                                key={index}
                                                bg="white"
                                                borderRadius="24px"
                                                p={{ base: '6', md: '8' }}
                                                shadow="0px 4px 20px rgba(0, 0, 0, 0.08)"
                                                border="1px solid rgba(0, 0, 0, 0.05)"
                                                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                                _hover={{
                                                    transform: "translateY(-8px)",
                                                    shadow: "0px 16px 48px rgba(0, 0, 0, 0.12)",
                                                    borderColor: `${card.color}40`,
                                                }}
                                                position="relative"
                                                overflow="hidden"
                                                h="full"
                                                display="flex"
                                                flexDirection="column"
                                            >
                                                <Box
                                                    position="absolute"
                                                    top="0"
                                                    right="0"
                                                    w="140px"
                                                    h="140px"
                                                    bg={'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)'}
                                                    opacity="0.08"
                                                    borderRadius="0 0 0 120px"
                                                    transition="all 0.3s ease"
                                                />
                                                <VStack align="start" gap="5" position="relative" zIndex="1" flex="1">
                                                    <Flex align="center" gap="3" w="full" flexWrap="wrap">
                                                        <Box
                                                            bg={card.color}
                                                            p="3.5"
                                                            borderRadius="14px"
                                                            color="white"
                                                            boxShadow={`0 4px 12px ${card.color}40`}
                                                            transition="all 0.3s ease"
                                                        >
                                                            <Icon size={26} />
                                                        </Box>
                                                    </Flex>
                                                    <Heading
                                                        as="h3"
                                                        fontSize={{ base: 'xl', md: '2xl' }}
                                                        fontWeight="bold"
                                                        color="#000"
                                                        lineHeight="tight"
                                                        mt="2"
                                                    >
                                                        {card.title}
                                                    </Heading>
                                                    <Text
                                                        fontSize={{ base: 'sm', md: 'md' }}
                                                        color="#000"
                                                        opacity={0.7}
                                                        lineHeight="relaxed"
                                                        flex="1"
                                                    >
                                                        {card.description}
                                                    </Text>
                                                    <Link href={card.link} passHref style={{ width: 'fit-content' }}>
                                                        <Button
                                                            as="a"
                                                            variant="ghost"
                                                            color={'white'}
                                                            size={{ base: 'sm', md: 'md' }}
                                                            fontWeight="semibold"
                                                            px="4"
                                                            py="2"
                                                            borderRadius="lg"
                                                            bg="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                                                            _hover={{
                                                                bg: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                                                                transform: "translateX(4px)",
                                                            }}
                                                            transition="all 0.2s ease"
                                                            mt="auto"
                                                            w="fit-content"
                                                        >
                                                            <Flex align="center" gap="2">
                                                                Learn More
                                                                <LuArrowRight size={18} />
                                                            </Flex>
                                                        </Button>
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
