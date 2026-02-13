"use client"

// Force static generation for optimal performance
export const dynamic = 'force-static';

import { Box, Button, Container, Flex, Heading, Stack, Text, VStack, Grid, Icon, Badge } from '@chakra-ui/react'
import { ArrowRight, FileText, CheckCircle, Sparkles, Zap, Target, Upload, Download, Edit, Eye, Award, Clock, Shield, X } from 'lucide-react'
import Image from 'next/image'
import { Block as Pricing } from '@/src/components/blocks/pricing/pricing-simple/block';
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { Testimonials } from '../components/Testimonials';
import { Block as CTADualButton } from '@/src/components/blocks/cta/cta-dual-button/block';
import { AIResumeBuilderStructuredData } from './structured-data';

const features = [
    {
        icon: Target,
        title: 'ATS Optimization',
        description: 'Our AI ensures your resume passes Applicant Tracking Systems by optimizing keywords and formatting.'
    },
    {
        icon: Sparkles,
        title: 'AI Content Generation',
        description: 'Generate professional summaries and bullet points tailored to your specific job role and industry.'
    },
    {
        icon: Zap,
        title: 'Real-time Scoring',
        description: 'Get instant feedback on your resume strength and actionable tips to improve your chances.'
    },
    {
        icon: FileText,
        title: 'Professional Templates',
        description: 'Choose from a variety of modern, recruiter-approved templates designed to stand out.'
    }
]

export default function AIResumeBuilderPage() {
    return (
        <Box>
            {/* Structured Data */}
            <AIResumeBuilderStructuredData />

            {/* Hero Section */}
            <Box
                w="full"
                position="relative"
                bgGradient="linear(to-br, rgba(66, 65, 255, 0.05), rgba(248, 248, 248, 1))"
                overflow="hidden"
            >
                <Container pt={{ base: '36', lg: '40' }} pb={{ base: '12', md: '16' }} maxW="7xl" position="relative">
                    <Grid
                        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
                        gap={{ base: 8, lg: 16 }}
                        alignItems="center"
                    >
                        {/* Left Content */}
                        <VStack alignItems={{ base: 'center', lg: 'flex-start' }} gap={6}>
                            <Box>
                                <Text
                                    fontSize="sm" fontWeight="600" color="#4241ff"
                                    textTransform="uppercase"
                                    letterSpacing="wider"
                                    mb={3}
                                    textAlign={{ base: 'center', lg: 'left' }}
                                >
                                    AI Resume Builder
                                </Text>
                                <Heading
                                    as="h1"
                                    fontSize={{ base: '4xl' }}
                                    fontWeight="800"
                                    lineHeight="1.1"
                                    color="#1d1d1f"
                                    mb={4}
                                    textAlign={{ base: 'center', lg: 'left' }}
                                >
                                    Build a Resume That
                                    <Text as="span" display="block" bg="#4241ff" bgClip="text">Gets You Hired</Text>
                                </Heading>
                                <Text
                                    fontSize={{ base: 'lg', md: 'xl' }} color="gray.900" lineHeight="1.6"
                                    maxW="600px"
                                    textAlign={{ base: 'center', lg: 'left' }}
                                    mb={4}
                                >
                                    Create a professional, ATS-friendly resume in minutes with our AI-powered builder. Stand out from the competition and land more interviews.
                                </Text>
                            </Box>

                            <Stack direction={{ base: 'column', sm: 'row' }} gap={4} w="full">
                                <Button
                                    _hover={{
                                        background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                    }}
                                    transition="all 0.3s"
                                    size={{ base: 'lg' }}
                                    fontWeight={'600'}
                                    borderRadius="full"
                                    background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                                    color="white"
                                    minW={{ base: '80px', md: '250px' }}
                                    onClick={() => window.open('https://app.hirenest.ai/jobseeker/resume-builder', '_blank')}
                                >
                                    Build My Resume
                                    <Box as={ArrowRight} ml={1} />
                                </Button>
                            </Stack>

                            <Flex gap={6} mt={4} fontSize="md" color="#000" fontWeight="500">
                                <Flex align="center" gap={2}>
                                    <Icon as={CheckCircle} color="#4241ff" />
                                    <Text>Free to try</Text>
                                </Flex>
                                <Flex align="center" gap={2}>
                                    <Icon as={CheckCircle} color="#4241ff" />
                                    <Text>No credit card required</Text>
                                </Flex>
                            </Flex>
                        </VStack>

                        {/* Right Image */}
                        <Box position="relative" h={{ base: '400px', md: '500px' }}>
                            <Image
                                src="/resume-builder-hero.png"
                                alt="AI Resume Builder Interface"
                                fill
                                style={{ objectFit: 'cover', borderRadius: '16px' }}
                                priority
                            />
                        </Box>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Box pt={{ base: '16', md: '24' }} bg="rgba(248, 248, 248, 1)" position="relative" overflow="hidden">
                {/* Background Decorative Elements */}
                <Box position="absolute" top="10%" right="5%" w="400px" h="400px" bg="#4241ff" opacity={0.03} borderRadius="full" filter="blur(80px)" />
                <Box position="absolute" bottom="10%" left="5%" w="400px" h="400px" bg="#b000ea" opacity={0.03} borderRadius="full" filter="blur(80px)" />

                <Container maxW="7xl" position="relative">
                    <VStack gap={{ base: 12, md: 16 }}>
                        {/* Section Header */}
                        <VStack textAlign="center" gap={4} maxW="800px" mx="auto">
                            <Text
                                fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
                                textAlign={{ base: 'center', lg: 'left' }}
                            >
                                Powerful Features
                            </Text>
                            <Heading
                                as="h2"
                                fontSize={{ base: '3xl', md: '4xl' }}
                                fontWeight="800"
                                color="#1d1d1f"
                                lineHeight="1.1"
                                letterSpacing="tight"
                                textAlign={{ base: 'center', lg: 'left' }}
                            >
                                Why Choose Our <Text as="span" color="#4241ff">AI Resume Builder</Text>
                            </Heading>
                            <Text
                                fontSize={{ base: 'lg', md: 'xl' }} color="#000"
                                lineHeight="1.6"
                            >
                                Powerful features designed to help you create the perfect resume effortlessly.
                            </Text>
                        </VStack>

                        {/* Features Grid */}
                        <Grid
                            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }}
                            gap={{ base: 6, md: 8 }}
                            w="full"
                        >
                            {features.map((feature, index) => {
                                const gradients = [
                                    'linear-gradient(135deg, rgba(66, 65, 255, 0.05) 0%, rgba(0, 113, 251, 0.05) 100%)',
                                    'linear-gradient(135deg, rgba(0, 113, 251, 0.05) 0%, rgba(175, 1, 234, 0.05) 100%)',
                                    'linear-gradient(135deg, rgba(175, 1, 234, 0.05) 0%, rgba(176, 0, 234, 0.05) 100%)',
                                    'linear-gradient(135deg, rgba(66, 65, 255, 0.05) 0%, rgba(176, 0, 234, 0.05) 100%)'
                                ]

                                return (
                                    <Box
                                        key={index}
                                        p={{ base: 6, md: 8 }}
                                        borderRadius="24px"
                                        bg="white"
                                        border="1px solid"
                                        borderColor="rgba(0, 0, 0, 0.05)"
                                        position="relative"
                                        overflow="hidden"
                                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                        _hover={{
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0px 16px 48px rgba(66, 65, 255, 0.12)',
                                            borderColor: '#4241ff'
                                        }}
                                        _before={{
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            w: '140px',
                                            h: '140px',
                                            background: gradients[index],
                                            borderRadius: '0 0 0 120px',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <VStack align="start" gap={5} position="relative" zIndex={1}>
                                            {/* Icon */}
                                            <Flex
                                                w={{ base: 14, md: 16 }}
                                                h={{ base: 14, md: 16 }}
                                                align="center"
                                                justify="center"
                                                bg="linear-gradient(135deg, #4241ff 0%, #0071fb 100%)"
                                                borderRadius="16px"
                                                color="white"
                                                boxShadow="0 8px 24px rgba(66, 65, 255, 0.25)"
                                            >
                                                <Icon as={feature.icon} boxSize={{ base: 7, md: 8 }} />
                                            </Flex>

                                            {/* Title */}
                                            <Heading
                                                as="h3"
                                                fontSize={{ base: 'xl', md: '2xl' }}
                                                fontWeight="700"
                                                color="#000"
                                                lineHeight="1.3"
                                            >
                                                {feature.title}
                                            </Heading>

                                            {/* Description */}
                                            <Text
                                                color="#000"
                                                opacity={0.7}
                                                fontSize={{ base: 'lg', md: 'xl' }}
                                                lineHeight="1.6"
                                            >
                                                {feature.description}
                                            </Text>
                                        </VStack>
                                    </Box>
                                )
                            })}
                        </Grid>
                    </VStack>
                </Container>
            </Box>

            {/* How It Works Section */}
            <Box py={{ base: 16, md: 24 }} bg="rgba(248, 248, 248, 1)" position="relative" overflow="hidden">
                <Container maxW="7xl" position="relative">
                    <VStack gap={{ base: 12, md: 20 }}>
                        <VStack textAlign="center" gap={4} maxW="800px" mx="auto">
                            <Text
                                fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
                                textAlign={{ base: 'center', lg: 'left' }}
                            >
                                Simple Process
                            </Text>
                            <Heading
                                as="h2"
                                fontSize={{ base: '3xl', md: '4xl' }}
                                fontWeight="800"
                                color="#1d1d1f"
                                lineHeight="1.1"
                                letterSpacing="tight"
                                textAlign={{ base: 'center', lg: 'left' }}
                            >
                                How It {' '}
                                <Text as="span" color="#4241ff">Works</Text>
                            </Heading>
                            <Text
                                fontSize={{ base: 'lg', md: 'xl' }} color="#000"
                                lineHeight="1.6">
                                Create your professional resume in just 4 simple steps
                            </Text>
                        </VStack>

                        <Box position="relative" w="full">
                            {/* Connecting Line (Desktop) */}
                            <Box
                                display={{ base: 'none', lg: 'block' }}
                                position="absolute"
                                top="40px"
                                left="10%"
                                right="10%"
                                h="2px"
                                bg="gray.200"
                                zIndex={0}
                            />

                            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} gap={8}>
                                {[
                                    {
                                        icon: Upload,
                                        step: '01',
                                        title: 'Upload or Start Fresh',
                                        description: 'Import your existing resume or start from scratch with our guided templates.'
                                    },
                                    {
                                        icon: Edit,
                                        step: '02',
                                        title: 'AI-Powered Editing',
                                        description: 'Our AI suggests improvements, optimizes keywords, and enhances your content.'
                                    },
                                    {
                                        icon: Eye,
                                        step: '03',
                                        title: 'Preview & Customize',
                                        description: 'Choose from professional templates and customize colors, fonts, and layout.'
                                    },
                                    {
                                        icon: Download,
                                        step: '04',
                                        title: 'Download & Apply',
                                        description: 'Export your ATS-optimized resume in PDF or Word format and start applying.'
                                    }
                                ].map((step, index) => (
                                    <VStack
                                        key={index}
                                        gap={6}
                                        position="relative"
                                        zIndex={1}
                                        bg="rgba(248, 248, 248, 1)" // Match section bg to hide line behind content
                                    >
                                        <Flex
                                            w={20}
                                            h={20}
                                            align="center"
                                            justify="center"
                                            bg="white"
                                            borderRadius="full"
                                            border="2px solid"
                                            borderColor="#4241ff"
                                            color="#4241ff"
                                            boxShadow="lg"
                                            position="relative"
                                        >
                                            <Icon as={step.icon} boxSize={8} />
                                            <Badge
                                                position="absolute"
                                                top={-2}
                                                right={-2}
                                                bg="#4241ff"
                                                color="white"
                                                borderRadius="full"
                                                w={8}
                                                h={8}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                fontSize="sm"
                                                fontWeight="700"
                                                border="2px solid white"
                                            >
                                                {step.step}
                                            </Badge>
                                        </Flex>
                                        <VStack textAlign="center" gap={3}>
                                            <Heading as="h3" fontSize="2xl" fontWeight="600" color="#000">
                                                {step.title}
                                            </Heading>
                                            <Text color="#000"
                                                fontSize={{ base: 'lg', md: 'xl' }}
                                                lineHeight="1.6" opacity={0.8}>
                                                {step.description}
                                            </Text>
                                        </VStack>
                                    </VStack>
                                ))}
                            </Grid>
                        </Box>
                    </VStack>
                </Container>
            </Box>

            {/* Key Benefits Section */}
            <Box pt={{ base: 16, md: 24 }} bg="white">
                <Container maxW="7xl">
                    <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 16 }} alignItems="center">
                        <VStack alignItems="flex-start" gap={6}>
                            <Box>
                                <Text
                                    fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
                                    textAlign={{ base: 'center', lg: 'left' }}
                                    mb={6}
                                >
                                    Key Benefits
                                </Text>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: '3xl', md: '4xl' }}
                                    fontWeight="800"
                                    color="#1d1d1f"
                                    lineHeight="1.1"
                                    letterSpacing="tight"
                                    textAlign={{ base: 'center', lg: 'left' }}
                                    mb={4}
                                >
                                    Stand Out from the{' '}
                                    <Text as="span" color="#4241ff">Competition</Text>
                                </Heading>
                                <Text
                                    fontSize={{ base: 'lg', md: 'xl' }} color="#000"
                                    lineHeight="1.6"
                                >
                                    Our AI-powered resume builder gives you the competitive edge you need in today's job market.
                                </Text>
                            </Box>

                            <VStack gap={4} w="full" alignItems="flex-start">
                                {[
                                    {
                                        icon: Award,
                                        title: '3x More Interviews',
                                        description: 'Users with AI-optimized resumes get 3x more interview callbacks'
                                    },
                                    {
                                        icon: Clock,
                                        title: 'Save 5+ Hours',
                                        description: 'Create a professional resume in minutes, not hours'
                                    },
                                    {
                                        icon: Shield,
                                        title: '95% ATS Pass Rate',
                                        description: 'Our resumes are designed to pass Applicant Tracking Systems'
                                    }
                                ].map((benefit, index) => (
                                    <Flex key={index} gap={4} alignItems="flex-start">
                                        <Flex
                                            w={10}
                                            h={10}
                                            align="center"
                                            justify="center"
                                            bg="rgba(66, 65, 255, 0.1)"
                                            borderRadius="lg"
                                            color="#4241ff"
                                            flexShrink={0}
                                        >
                                            <Icon as={benefit.icon} boxSize={5} />
                                        </Flex>
                                        <Box>
                                            <Heading as="h3" fontSize="1xl" fontWeight="600" color="#000" mb={1}>
                                                {benefit.title}
                                            </Heading>
                                            <Text
                                                fontSize={{ base: 'lg', md: 'xl' }} color="#000"
                                                lineHeight="1.6">
                                                {benefit.description}
                                            </Text>
                                        </Box>
                                    </Flex>
                                ))}
                            </VStack>
                        </VStack>

                        <Box
                            position="relative"
                            h={{ base: '300px', md: '500px' }}
                            borderRadius="2xl"
                            overflow="hidden"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Image
                                src="/Img1.png"
                                alt="Success Metrics"
                                width={500}
                                height={500}
                                priority
                            />
                        </Box>
                    </Grid>
                </Container>
            </Box>

            {/* NEW SECTION 2: Comparison Table */}
            <Box pt={{ base: 16 }} bg="white">
                <Container maxW="7xl">
                    <VStack gap={12}>
                        <VStack textAlign="center" gap={4} maxW="800px" mx="auto">
                            <Heading
                                as="h2"
                                fontSize={{ base: '3xl', md: '4xl' }}
                                fontWeight="800"
                                color="#1d1d1f"
                                lineHeight="1.1"
                                letterSpacing="tight"
                                textAlign={{ base: 'center', lg: 'left' }}
                            >
                                Why Hirenest is{' '}
                                <Text as="span" color="#4241ff">Better</Text>
                            </Heading>
                            <Text
                                fontSize={{ base: 'lg', md: 'xl' }} color="#000"
                                lineHeight="1.6" opacity={0.8}>
                                See how we stack up against traditional resume building methods.
                            </Text>
                        </VStack>

                        <Box
                            w="full"
                            overflowX="auto"
                            borderRadius="2xl"
                            border="1px solid"
                            borderColor="gray.100"
                            boxShadow="lg"
                        >
                            <Grid templateColumns="2fr 1fr 1fr" minW="600px">
                                {/* Header Row */}
                                <Box p={6} bg="gray.50" borderBottom="1px solid" borderColor="gray.100">
                                    <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="700" color="#000">Features</Text>
                                </Box>
                                <Box p={6} bg="#4241ff" borderBottom="1px solid" borderColor="gray.100" textAlign="center">
                                    <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="700" color="white">Hirenest AI</Text>
                                </Box>
                                <Box p={6} bg="gray.50" borderBottom="1px solid" borderColor="gray.100" textAlign="center">
                                    <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="700" color="#000">Standard Builders</Text>
                                </Box>

                                {/* Rows */}
                                {[
                                    { feature: 'AI Content Generation', us: true, them: false },
                                    { feature: 'Real-time ATS Scoring', us: true, them: false },
                                    { feature: 'Keyword Optimization', us: true, them: true },
                                    { feature: 'Job Description Matching', us: true, them: false },
                                    { feature: 'Unlimited Downloads', us: true, them: false },
                                    { feature: 'Cover Letter Generator', us: true, them: true },
                                ].map((row, index) => (
                                    <>
                                        <Box key={`f-${index}`} p={6} borderBottom="1px solid" borderColor="gray.100" bg="white">
                                            <Text fontWeight="500" fontSize={{ base: 'lg', md: 'xl' }} color="#000">{row.feature}</Text>
                                        </Box>
                                        <Box key={`u-${index}`} p={6} borderBottom="1px solid" borderColor="gray.100" bg="rgba(66, 65, 255, 0.03)" textAlign="center" display="flex" justifyContent="center" alignItems="center">
                                            {row.us ? <Icon as={CheckCircle} color="#4241ff" boxSize={6} /> : <Icon as={X} color="gray.300" boxSize={6} />}
                                        </Box>
                                        <Box key={`t-${index}`} p={6} borderBottom="1px solid" borderColor="gray.100" bg="white" textAlign="center" display="flex" justifyContent="center" alignItems="center">
                                            {row.them ? <Icon as={CheckCircle} color="green.500" boxSize={6} /> : <Icon as={X} color="gray.300" boxSize={6} />}
                                        </Box>
                                    </>
                                ))}
                            </Grid>
                        </Box>
                    </VStack>
                </Container>
            </Box>

            {/* NEW SECTION 3: ATS Spotlight */}
            <Box py={{ base: 16 }} bg="#fff">
                <Container maxW="7xl">
                    <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="center">
                        <VStack alignItems="flex-start" gap={8}>
                            <Box>
                                <Text
                                    fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
                                    textAlign={{ base: 'center', lg: 'left' }} mb={2}
                                >
                                    Advanced Technology
                                </Text>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: '3xl', md: '4xl' }}
                                    fontWeight="800"
                                    color="#1d1d1f"
                                    lineHeight="1.1"
                                    letterSpacing="tight"
                                    mb={4}
                                    textAlign={{ base: 'center', lg: 'left' }}
                                >
                                    Beat the ATS Bots <br />
                                    <Text as="span" color="#4241ff">Every Single Time</Text>
                                </Heading>
                                <Text
                                    fontSize={{ base: 'lg', md: 'xl' }} color="#000"
                                    lineHeight="1.6" opacity={0.8} textAlign={{ base: 'center', lg: 'left' }}>
                                    75% of resumes are rejected by Applicant Tracking Systems before a human ever sees them. Our AI analyzes your resume exactly like an ATS does, ensuring you pass the filters and get noticed.
                                </Text>
                            </Box>

                            <VStack gap={4} alignItems="flex-start" w="full">
                                {[
                                    'Keyword Matching Analysis',
                                    'Formatting Compatibility Check',
                                    'Section Header Optimization',
                                    'Hidden Character Detection'
                                ].map((item, index) => (
                                    <Flex key={index} gap={3} align="center">
                                        <Icon as={CheckCircle} color="#4241ff" boxSize={5} />
                                        <Text fontWeight="500"
                                            fontSize={{ base: 'lg', md: 'xl' }} color="#000"
                                            lineHeight="1.6">{item}</Text>
                                    </Flex>
                                ))}
                            </VStack>

                            <Button
                                size="lg"
                                borderRadius="full"
                                px={8}
                                background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                                color="white"
                                minW={{ base: '80px', md: '100px' }}
                                _hover={{
                                    background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                                    opacity: 0.9,
                                }}
                                onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
                                w={{ base: 'full', md: 'auto' }}
                            >
                                Scan My Resume Now
                            </Button>
                        </VStack>

                        <Box
                            position="relative"
                            h="400px"
                            bg="white"
                            borderRadius="2xl"
                            border="1px solid"
                            borderColor="gray.100"
                            boxShadow="xl"
                            p={8}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            {/* Visual representation of scanning */}
                            <VStack gap={6} w="full">
                                <Flex justify="space-between" w="full" align="center" borderBottom="1px solid" borderColor="gray.100" pb={4}>
                                    <Text fontWeight="600"
                                        fontSize={{ base: 'lg', md: 'xl' }} color="#000"
                                        lineHeight="1.6">ATS Score</Text>
                                    <Text fontWeight="700"
                                        fontSize={{ base: 'lg', md: 'xl' }}
                                        lineHeight="1.6" color="#4241ff">98/100</Text>
                                </Flex>
                                <VStack gap={3} w="full">
                                    <Box w="full">
                                        <Flex justify="space-between" mb={2} fontSize="md">
                                            <Text color="#000">Keywords</Text>
                                            <Text color="green.500">Perfect</Text>
                                        </Flex>
                                        <Box w="full" h="6px" bg="gray.100" borderRadius="full">
                                            <Box w="100%" h="full" bg="green.500" borderRadius="full" />
                                        </Box>
                                    </Box>
                                    <Box w="full">
                                        <Flex justify="space-between" mb={2} fontSize="md">
                                            <Text color="#000">Formatting</Text>
                                            <Text color="green.500">Clean</Text>
                                        </Flex>
                                        <Box w="full" h="6px" bg="gray.100" borderRadius="full">
                                            <Box w="95%" h="full" bg="green.500" borderRadius="full" />
                                        </Box>
                                    </Box>
                                    <Box w="full">
                                        <Flex justify="space-between" mb={2} fontSize="md">
                                            <Text color="#000">Relevance</Text>
                                            <Text color="#4241ff">High</Text>
                                        </Flex>
                                        <Box w="full" h="6px" bg="gray.100" borderRadius="full">
                                            <Box w="92%" h="full" bg="#4241ff" borderRadius="full" />
                                        </Box>
                                    </Box>
                                </VStack>
                            </VStack>
                        </Box>
                    </Grid>
                </Container>
            </Box>

            <Testimonials />
            <Pricing />
            <FAQ />
            <CTADualButton />
        </Box>
    )
}
