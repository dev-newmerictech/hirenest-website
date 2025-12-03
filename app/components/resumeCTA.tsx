"use client";

import { Box, Button, Container, Grid, Heading, Text, VStack, Flex, Icon } from "@chakra-ui/react";
import { Sparkles, Target, TrendingUp, Users } from "lucide-react";

export const ResumeCTA = () => (
    <Box margin="0 auto" py={{ base: '20' }}>
        {/* Main CTA Section */}
        <Container maxW="7xl" mb={{ base: 12, md: 16 }}>
            <VStack gap={2} textAlign="center" maxW="900px" mx="auto">
                <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl' }}
                    fontWeight="700"
                    color="#000"
                    lineHeight="1.2"
                >
                    Your resume, <Text as="span" bg="#4241ff" bgClip="text">reinvented.</Text>
                </Heading>
                <Text
                    fontSize={{ base: 'lg' }}
                    color="#6e6e73"
                    lineHeight="1.4"
                    fontWeight="400"
                    mb={4}
                >
                    AI-powered resumes that adapt to your skills, role, and industry.
                </Text>
                <Button
                    size={{ base: 'md', md: 'lg' }}
                    borderRadius="full"
                    fontWeight="500"
                    background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                    color="white"
                    minW={{ base: '100px', md: '100px' }}
                    _hover={{
                        background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                        opacity: 0.9,
                    }}
                    transition="all 0.3s ease"
                    onClick={() => window.open('https://app.hirenest.ai/jobseeker/resume-builder', '_blank')}
                >
                    Try AI Resume Builder
                </Button>
            </VStack>
        </Container>

        {/* Feature Cards - 3 Column Grid */}
        <Container maxW="7xl">
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={{ base: 4, md: 6 }} maxW="1200px" mx="auto">
                {/* AI Matching Card */}
                <Box
                    bg="#fff"
                    borderRadius="24px"
                    p={{ base: 8, md: 10 }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{
                        bg: "#fafafa",
                        transform: "scale(1.02)"
                    }}
                >
                    <VStack align="flex-start" gap={4}>
                        <Flex
                            w={12}
                            h={12}
                            align="center"
                            justify="center"
                            borderRadius="12px"
                            bg="#4241ff"
                        >
                            <Icon as={Target} boxSize={6} color="#fff" />
                        </Flex>
                        <Heading
                            as="h3"
                            fontSize={{ base: 'xl', md: '2xl' }}
                            fontWeight="600"
                            color="#1d1d1f"
                            lineHeight="1.3"
                        >
                            AI Matching Algorithm
                        </Heading>
                        <Text
                            fontSize={{ base: 'sm', md: 'md' }}
                            color="#6e6e73"
                            lineHeight="1.5"
                        >
                            Matches you with opportunities based on real skills and career goals.
                        </Text>
                    </VStack>
                </Box>

                {/* Skill Gap Card */}
                <Box
                    bg="#fff"
                    borderRadius="24px"
                    p={{ base: 8, md: 10 }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{
                        bg: "#fafafa",
                        transform: "scale(1.02)"
                    }}
                >
                    <VStack align="flex-start" gap={4}>
                        <Flex
                            w={12}
                            h={12}
                            align="center"
                            justify="center"
                            borderRadius="12px"
                            bg="#b000ea"
                        >
                            <Icon as={TrendingUp} boxSize={6} color="#fff" />
                        </Flex>
                        <Heading
                            as="h3"
                            fontSize={{ base: 'xl', md: '2xl' }}
                            fontWeight="600"
                            color="#1d1d1f"
                            lineHeight="1.3"
                        >
                            Skill Gap Insights
                        </Heading>
                        <Text
                            fontSize={{ base: 'sm', md: 'md' }}
                            color="#6e6e73"
                            lineHeight="1.5"
                        >
                            Shows which skills you need with personalized recommendations.
                        </Text>
                    </VStack>
                </Box>
            </Grid>
        </Container>
    </Box>
)