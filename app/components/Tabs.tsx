"use client"

import { Box, Container, Tabs, Grid, Heading, Text, VStack, Flex } from "@chakra-ui/react"
import Link from "next/link"
import { LuBriefcase, LuUserCheck, LuTrendingUp, LuSearch, LuUsers, LuTarget, LuFileCheck, LuSparkles, LuActivity, LuZap, LuShield, LuRocket, LuArrowRight } from "react-icons/lu"

const jobSeekersCards = [
    {
        icon: LuFileCheck,
        title: "AI Resume Builder ",
        description: "Create professional resumes optimized for each application with AI-powered suggestions within minutes.",
        link: "/ai-resume-builder"
    },
    {
        icon: LuSearch,
        title: "Smart Job Matching ",
        description: "Get matched with opportunities that align with validated skills and career goals automatically.",
        link: "/smart-job-matching"
    },
    {
        icon: LuTrendingUp,
        title: "Career Insights",
        description: "Track progress and receive personalized growth recommendations based on real market data.",
        link: "/career-insights"
    },
    {
        icon: LuTarget,
        title: "Skill Assessments",
        description: "Showcase your expertise with 350+ tests and rank higher in candidate searches.",
        link: "/skill-assessments"
    },
    {
        icon: LuSparkles,
        title: "Profile Optimization",
        description: "Improve your visibility to recruiters searching for your skills, with real-time feedback.",
        link: "/profile-optimization"
    },
    {
        icon: LuRocket,
        title: "Fast-Track Applications",
        description: "Apply to multiple jobs with one click, using your optimized profile.",
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
        <Box w="full" bg="white" pb={{ base: 20 }} position="relative" overflow="hidden">
            {/* Background Gradients */}
            <Box position="absolute" top="0" left="0" w="full" h="full" overflow="hidden" pointerEvents="none">
                <Box position="absolute" top="10%" left="-5%" w="500px" h="500px" bg="blue.50" filter="blur(100px)" opacity="0.5" borderRadius="full" />
                <Box position="absolute" bottom="10%" right="-5%" w="500px" h="500px" bg="purple.50" filter="blur(100px)" opacity="0.5" borderRadius="full" />
            </Box>

            <Container maxW="7xl" position="relative">
                <VStack gap={{ base: 10 }}>
                    {/* Header */}
                    <VStack textAlign="center" gap={4} maxW="3xl" mx="auto">
                        <Text fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider">
                            Features
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="800"
                            color="#1d1d1f"
                            lineHeight="1.1"
                            letterSpacing="tight"
                        >
                            Choose your <Text as="span" color="#4241ff">path.</Text>
                        </Heading>
                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }} color="#6e6e73" maxW="3xl">
                            Powerful features built for your needs. Whether you're hiring or job hunting, we've specifically-designed tools that work. You’re covered.
                        </Text>
                    </VStack>

                    {/* Tabs */}
                    <Tabs.Root defaultValue="job-seekers" variant="plain" w="full">
                        <Flex justifyContent="center" mb={{ base: 10 }}>
                            <Tabs.List bg="gray.100" p={1} rounded="full" border="1px solid" borderColor="gray.200">
                                {['job-seekers', 'recruiters'].map((tab) => (
                                    <Tabs.Trigger
                                        key={tab}
                                        value={tab}
                                        px={{ base: 6, md: 10 }}
                                        py={3}
                                        rounded="full"
                                        fontSize={{ base: 'md', md: 'lg' }}
                                        fontWeight="600"
                                        color="gray.500"
                                        _selected={{ bg: "white", color: "#1d1d1f", shadow: "sm" }}
                                        transition="all 0.2s"
                                    >
                                        {tab === 'job-seekers' ? 'For Job Seekers' : 'For Recruiters'}
                                    </Tabs.Trigger>
                                ))}
                            </Tabs.List>
                        </Flex>

                        <Tabs.Content value="job-seekers">
                            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
                                {jobSeekersCards.map((card, index) => (
                                    <FeatureCard key={index} {...card} color="#4241ff" bg="blue.50" />
                                ))}
                            </Grid>
                        </Tabs.Content>

                        <Tabs.Content value="recruiters">
                            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
                                {recruitersCards.map((card, index) => (
                                    <FeatureCard key={index} {...card} color="#b000ea" bg="purple.50" />
                                ))}
                            </Grid>
                        </Tabs.Content>
                    </Tabs.Root>
                </VStack>
            </Container>
        </Box>
    )
}

const FeatureCard = ({ icon: Icon, title, description, link, color, bg }: any) => (
    <Link href={link} style={{ display: 'block', height: '100%' }}>
        <VStack
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
                borderColor: color
            }}
        >
            {/* Subtle Background Gradient */}
            <Box
                position="absolute"
                top={0}
                right={0}
                w="200px"
                h="200px"
                bgGradient={`radial(${bg}, transparent)`}
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
                bg={bg}
                color={color}
                position="relative"
                zIndex={1}
                transition="all 0.3s ease"
                css={{
                    ".group:hover &": {
                        transform: "scale(1.1)",
                        bg: color,
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
                    {title}
                </Heading>
                <Text
                    color="#6e6e73"
                    lineHeight="1.6"
                    fontSize={{ base: 'md', md: 'lg' }}
                >
                    {description}
                </Text>
            </VStack>

            {/* Learn More Link */}
            <Flex
                align="center"
                gap={2}
                color={color}
                fontWeight="600"
                fontSize="md"
                position="relative"
                zIndex={1}
                transition="gap 0.3s ease"
                css={{ ".group:hover &": { gap: "12px" } }}
            >
                <Text>Learn more</Text>
                <Box
                    transition="transform 0.3s ease"
                    css={{ ".group:hover &": { transform: "translateX(4px)" } }}
                >
                    <LuArrowRight size={16} strokeWidth={2.5} />
                </Box>
            </Flex>
        </VStack>
    </Link>
)
