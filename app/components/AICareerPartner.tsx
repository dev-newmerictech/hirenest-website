'use client'

import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Grid,
    Button,
    VStack,
    Icon
} from '@chakra-ui/react';
import { FileText, Globe, BarChart, Shield, User } from 'lucide-react';
import { FaGoogle, FaSpotify } from 'react-icons/fa';

export const AICareerPartner = () => {
    return (
        <Box bg="#0f2442" color="white" py={{ base: 16 }} position="relative" overflow="hidden">
            <Container maxW="7xl">
                <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 12 }} align="center">
                    {/* Left Content */}
                    <Box flex={1}>
                        <Text
                            fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
                            mb={4}
                        >
                            Job Seeker
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="800"
                            color="#fff"
                            lineHeight="1.1"
                            letterSpacing="tight"
                            mb={4}
                        >
                            Your AI Career Partner That Never Stops
                        </Heading>
                        <Text
                            color="#fff"
                            fontSize={{ base: 'lg', md: 'xl' }}
                            mb={1}
                            maxW="lg"
                            lineHeight="1.6"
                        >What if Opportunity came knocking at your door, but you were sleeping?
                        </Text>
                        <Text
                            color="#fff"
                            fontSize={{ base: 'lg', md: 'xl' }}
                            mb={1}
                            maxW="lg"
                            lineHeight="1.6"
                        >Don’t worry!
                        </Text>
                        <Text
                            color="#fff"
                            fontSize={{ base: 'lg', md: 'xl' }}
                            mb={10}
                            maxW="lg"
                            lineHeight="1.6"
                        >
                            Our AI lets the employers discover you. It analyzes your validated skills and matches you with relevant roles around the clock - even when you're not sending applications.

                        </Text>

                        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={10} mb={10}>
                            <Feature
                                icon={FileText}
                                title="AI Resume Builder"
                                desc="Refine your resume with one-click optimization and professional templates that easily pass ATS systems."
                            />
                            <Feature
                                icon={Globe}
                                title="End-to-End Tracking"
                                desc="Monitor every application stage in one unified dashboard with real-time updates."
                            />
                            <Feature
                                icon={BarChart}
                                title="Detailed Feedback"
                                desc="Get performance summaries and improvement guidance after every assessment so you know what went wrong and what to fix."
                            />
                            <Feature
                                icon={Shield}
                                title="Secure Identity"
                                desc="Your data stays yours. Secure verification keeps your profile trusted without compromising privacy."
                            />
                        </Grid>

                        <Button
                            size="lg"
                            bg="white"
                            color="brand.900"
                            borderRadius="full"
                            _hover={{ bg: 'gray.100' }}
                            fontWeight="600"
                            px={8}
                            h={14}
                            onClick={() => window.open('https://app.hirenest.ai/jobseeker/profile', '_blank')}
                        >
                            Watch AI Build Your Portfolio
                        </Button>
                    </Box>

                    {/* Right Content - Dashboard Preview */}
                    <Box flex={1} w="full" maxW="md">
                        <Box position="relative">
                            {/* Glow effect */}
                            <Box
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                width="120%"
                                height="120%"
                                bg="brand.500"
                                filter="blur(80px)"
                                opacity={0.15}
                                zIndex={0}
                                borderRadius="full"
                            />

                            {/* Card Replacement */}
                            <Box
                                bg="#1A202C" // Keep dark card bg
                                borderColor="gray.700"
                                borderWidth="1px"
                                borderRadius="2xl"
                                position="relative"
                                zIndex={1}
                                boxShadow="2xl"
                                overflow="hidden"
                                p={6}
                            >
                                <Flex justify="space-between" align="center" mb={6}>
                                    <Box>
                                        <Text color="gray.400" fontSize="md">Welcome back,</Text>
                                        <Text fontWeight="bold"
                                            fontSize={{ base: 'lg', md: 'xl' }} color="white">Alex Morgan</Text>
                                    </Box>
                                    <Flex bg="brand.600" p={2} borderRadius="full" align="center" justify="center">
                                        <Icon as={User} color="white" boxSize={5} />
                                    </Flex>
                                </Flex>

                                <Box bg="gray.700" p={4} borderRadius="xl" mb={6}>
                                    <Flex justify="space-between" mb={2}>
                                        <Text fontSize="md" fontWeight="medium" color="gray.200">Profile Strength</Text>
                                        <Text fontSize="md" fontWeight="bold" color="green.400">94%</Text>
                                    </Flex>
                                    {/* Progress Replacement */}
                                    <Box w="full" h="2" bg="gray.600" borderRadius="full" mb={2} overflow="hidden">
                                        <Box w="94%" h="full" bg="#4241ff" borderRadius="full" />
                                    </Box>
                                    <Text fontSize="sm" color="gray.400">Add a video intro to reach 100%</Text>
                                </Box>

                                <Text fontWeight="bold"
                                    fontSize={{ base: 'md', md: 'lg' }} mb={4} color="white">Recommended for You</Text>

                                <VStack gap={3} align="stretch">
                                    <JobCard
                                        icon={FaGoogle}
                                        role="Product Designer"
                                        company="Google • Remote"
                                        iconBg="white"
                                        iconColor="#4241ff" // Google logo has its own colors
                                    />
                                    <JobCard
                                        icon={FaSpotify}
                                        role="Frontend Engineer"
                                        company="Spotify • New York"
                                        iconBg="white"
                                        iconColor="#4241ff" // Spotify Green
                                    />
                                </VStack>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

const Feature = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <Box>
        <Icon as={icon} color="#4241ff" boxSize={6} mb={3} />
        <Text fontWeight="bold" mb={2}
            fontSize={{ base: 'lg', md: 'xl' }} color="white">{title}</Text>
        <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }} lineHeight="relaxed">{desc}</Text>
    </Box>
);

const JobCard = ({ icon, role, company, iconBg, iconColor }: { icon: any, role: string, company: string, iconBg: string, iconColor: string }) => (
    <Flex bg="gray.700" p={3} borderRadius="lg" align="center" gap={4} _hover={{ bg: 'gray.600', cursor: 'pointer' }} transition="all 0.2s">
        <Flex justify="center" align="center" bg={iconBg} w={10} h={10} borderRadius="md" shrink={0}>
            <Icon as={icon} color={iconColor === 'colored' ? undefined : iconColor} boxSize={5} />
        </Flex>
        <Box>
            <Text fontWeight="bold" fontSize="md" color="white">{role}</Text>
            <Text fontSize="sm" color="gray.400">{company}</Text>
        </Box>
    </Flex>
);
