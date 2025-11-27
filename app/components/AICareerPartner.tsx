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
                            color="#4241ff"
                            fontWeight="600"
                            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                            mb={4}
                            letterSpacing="wider"
                            textTransform="uppercase"
                        >
                            For Candidates
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            lineHeight="1.2"
                        >
                            Your AI Career Partner That <br />
                            <Box as="span" bgGradient="linear(to-r, #4241ff, purple.400)" bgClip="text">Never Stops Working</Box>
                        </Heading>
                        <Text
                            color="#fff"
                            fontSize={{ base: 'md', md: 'lg' }}
                            mb={12}
                            maxW="lg"
                            lineHeight="1.6"
                        >
                            Let opportunities come to you. Our AI analyzes your skills and potential to match you
                            with dream roles—even when you're sleeping.
                        </Text>

                        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={10} mb={10}>
                            <Feature
                                icon={FileText}
                                title="AI Resume Builder"
                                desc="Refine your resume with one-click edits and professional templates."
                            />
                            <Feature
                                icon={Globe}
                                title="End-to-End Tracking"
                                desc="Monitor every stage of your applications in one unified dashboard."
                            />
                            <Feature
                                icon={BarChart}
                                title="Detailed Feedback"
                                desc="Get performance summaries and improvement guidance after every screening."
                            />
                            <Feature
                                icon={Shield}
                                title="Secure Identity"
                                desc="Your data is yours. Secure verification keeps your profile trusted and safe."
                            />
                        </Grid>

                        <Button
                            size="lg"
                            bg="white"
                            color="brand.900"
                            borderRadius="full"
                            _hover={{ bg: 'gray.100' }}
                            fontWeight="bold"
                            px={8}
                            h={14}
                        >
                            Build Your Profile
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
                                        <Text color="gray.400" fontSize="sm">Welcome back,</Text>
                                        <Text fontWeight="bold" fontSize="xl" color="white">Alex Morgan</Text>
                                    </Box>
                                    <Flex bg="brand.600" p={2} borderRadius="full" align="center" justify="center">
                                        <Icon as={User} color="white" boxSize={5} />
                                    </Flex>
                                </Flex>

                                <Box bg="gray.700" p={4} borderRadius="xl" mb={6}>
                                    <Flex justify="space-between" mb={2}>
                                        <Text fontSize="sm" fontWeight="medium" color="gray.200">Profile Strength</Text>
                                        <Text fontSize="sm" fontWeight="bold" color="green.400">94%</Text>
                                    </Flex>
                                    {/* Progress Replacement */}
                                    <Box w="full" h="2" bg="gray.600" borderRadius="full" mb={2} overflow="hidden">
                                        <Box w="94%" h="full" bg="#4241ff" borderRadius="full" />
                                    </Box>
                                    <Text fontSize="xs" color="gray.400">Add a video intro to reach 100%</Text>
                                </Box>

                                <Text fontWeight="bold" mb={4} color="white">Recommended for You</Text>

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
        <Text fontWeight="bold" mb={2} fontSize={{ base: 'lg', md: 'xl' }} color="white">{title}</Text>
        <Text color="gray.400" fontSize={{ base: 'sm', md: 'md' }} lineHeight="relaxed">{desc}</Text>
    </Box>
);

const JobCard = ({ icon, role, company, iconBg, iconColor }: { icon: any, role: string, company: string, iconBg: string, iconColor: string }) => (
    <Flex bg="gray.700" p={3} borderRadius="lg" align="center" gap={4} _hover={{ bg: 'gray.600', cursor: 'pointer' }} transition="all 0.2s">
        <Flex justify="center" align="center" bg={iconBg} w={10} h={10} borderRadius="md" shrink={0}>
            <Icon as={icon} color={iconColor === 'colored' ? undefined : iconColor} boxSize={5} />
        </Flex>
        <Box>
            <Text fontWeight="bold" fontSize="sm" color="white">{role}</Text>
            <Text fontSize="xs" color="gray.400">{company}</Text>
        </Box>
    </Flex>
);
