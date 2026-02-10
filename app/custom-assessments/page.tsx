"use client"

// Force static generation for optimal performance
export const dynamic = 'force-static';

import { Box, Button, Container, Flex, Heading, Stack, Text, VStack, Grid, Icon, Badge } from '@chakra-ui/react'
import { ArrowRight, CheckCircle, Puzzle, Settings, Code, FileText, Layers, Target, Zap, Award } from 'lucide-react'
import Image from 'next/image'
import { Block as Pricing } from '@/src/components/blocks/pricing/pricing-simple/block';
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { Testimonials } from '../components/Testimonials';
import { Block as CTADualButton } from '@/src/components/blocks/cta/cta-dual-button/block';
import { CustomAssessmentsStructuredData } from './structured-data';

const features = [
    {
        icon: Puzzle,
        title: 'Custom Question Builder',
        description: 'Create tailored assessments with our drag-and-drop builder. No coding required.'
    },
    {
        icon: Code,
        title: 'Technical Challenges',
        description: 'Test coding skills with real-world challenges in 40+ programming languages.'
    },
    {
        icon: FileText,
        title: 'Soft Skills Tests',
        description: 'Evaluate communication, leadership, and problem-solving abilities with scenario-based questions.'
    },
    {
        icon: Target,
        title: 'Role-Specific Templates',
        description: 'Start with pre-built assessments for common roles and customize them to your needs.'
    }
]

export default function CustomAssessmentsPage() {
    return (
        <Box>
            <CustomAssessmentsStructuredData />
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
                        <VStack alignItems="flex-start" gap={6}>
                            <Box>
                                <Text
                                    fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                                    fontWeight="600"
                                    color="#4241ff"
                                    textTransform="uppercase"
                                    letterSpacing="wider"
                                    mb={3}
                                    textAlign={{ base: 'center', lg: 'left' }}
                                >
                                    Custom Assessments
                                </Text>
                                <Heading
                                    as="h1"
                                    fontSize={{ base: '3xl', md: '4xl' }}
                                    fontWeight="700"
                                    color="#000"
                                    lineHeight="1.2"
                                    mb={4}
                                    textAlign={{ base: 'center', lg: 'left' }}
                                >
                                    Test What Matters
                                    <Text as="span" display="block" bg="#4241ff" bgClip="text">To Your Business</Text>
                                </Heading>
                                <Text
                                    fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                                    fontWeight="400"
                                    color="#000"
                                    lineHeight="1.6"
                                    maxW="600px"
                                    textAlign={{ base: 'center', lg: 'left' }}
                                >
                                    Build custom assessments that measure the exact skills and competencies you need for each role.
                                </Text>
                            </Box>

                            <Stack direction={{ base: 'column', sm: 'row' }} gap={4} w="full">
                                <Button
                                    _hover={{
                                        background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                                        transform: "translateY(-2px)",
                                        boxShadow: "lg"
                                    }}
                                    transition="all 0.3s"
                                    size={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
                                    borderRadius="full"
                                    background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                                    color="white"
                                    minW={{ base: '80px', md: '250px' }}
                                    onClick={() => window.open('https://app.hirenest.ai/jobprovider', '_blank')}
                                >
                                    Build Assessment
                                    <Box as={ArrowRight} ml={1} />
                                </Button>
                            </Stack>

                            <Flex gap={6} mt={4} fontSize="sm" color="#000" fontWeight="500">
                                <Flex align="center" gap={2}>
                                    <Icon as={CheckCircle} color="#4241ff" />
                                    <Text>Easy to Build</Text>
                                </Flex>
                                <Flex align="center" gap={2}>
                                    <Icon as={CheckCircle} color="#4241ff" />
                                    <Text>40+ Languages</Text>
                                </Flex>
                            </Flex>
                        </VStack>

                        {/* Right Image - Placeholder */}
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
                                src="/Img12.png"
                                alt="Verified & Trusted"
                                width={500}
                                height={500}
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
                                fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                                fontWeight="600"
                                color="#4241ff"
                                textTransform="uppercase"
                                letterSpacing="wider"
                            >
                                Flexible Testing
                            </Text>
                            <Heading
                                as="h2"
                                fontSize={{ base: '3xl', md: '4xl' }}
                                fontWeight="700"
                                color="#000"
                                lineHeight="1.2"
                            >
                                Build Your Perfect <Text as="span" color="#4241ff">Assessment</Text>
                            </Heading>
                            <Text
                                fontSize={{ base: 'md', md: 'lg' }}
                                color="#000"
                                opacity={0.8}
                                maxW="7xl"
                            >
                                From technical coding challenges to personality assessments, create tests that truly measure candidate potential.
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
                                                fontSize={{ base: 'sm', md: 'md' }}
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
                                fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                                fontWeight="600"
                                color="#4241ff"
                                textTransform="uppercase"
                                letterSpacing="wider"
                            >
                                Simple Process
                            </Text>
                            <Heading
                                as="h2"
                                fontSize={{ base: '3xl', md: '4xl' }}
                                fontWeight="700"
                                color="#000"
                            >
                                How It <Text as="span" color="#4241ff">Works</Text>
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="#000" opacity={0.8}>
                                Create assessments in 4 easy steps
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

                            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
                                {[
                                    {
                                        icon: Target,
                                        step: '01',
                                        title: 'Choose Template',
                                        description: 'Start with a pre-built template or create from scratch.'
                                    },
                                    {
                                        icon: Settings,
                                        step: '02',
                                        title: 'Customize Questions',
                                        description: 'Add, edit, or remove questions to match your requirements.'
                                    },
                                    {
                                        icon: Layers,
                                        step: '03',
                                        title: 'Set Parameters',
                                        description: 'Configure time limits, difficulty levels, and scoring rules.'
                                    },
                                    {
                                        icon: Zap,
                                        step: '04',
                                        title: 'Deploy & Test',
                                        description: 'Send assessments to candidates and track their performance.'
                                    }
                                ].map((step, index) => (
                                    <VStack
                                        key={index}
                                        gap={6}
                                        position="relative"
                                        zIndex={1}
                                        bg="rgba(248, 248, 248, 1)"
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
                                            <Heading as="h3" fontSize="xl" fontWeight="600" color="#000">
                                                {step.title}
                                            </Heading>
                                            <Text color="#000" fontSize="sm" lineHeight="1.6" opacity={0.8}>
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
            <Box py={{ base: 16 }} bg="white">
                <Container maxW="7xl">
                    <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 16 }} alignItems="center">
                        <VStack alignItems="flex-start" gap={6}>
                            <Box>
                                <Text
                                    fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                                    fontWeight="600"
                                    color="#4241ff"
                                    textTransform="uppercase"
                                    letterSpacing="wider"
                                    mb={3}
                                    textAlign={{ base: 'center', lg: 'left' }}
                                >
                                    Key Benefits
                                </Text>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: '3xl', md: '4xl' }}
                                    fontWeight="700"
                                    color="#000"
                                    lineHeight="1.2"
                                    mb={4}
                                    textAlign={{ base: 'center', lg: 'left' }}
                                >
                                    Why Custom <Text as="span" color="#4241ff">Assessments?</Text>
                                </Heading>
                                <Text
                                    fontSize={{ base: 'md', md: 'lg' }}
                                    fontWeight="400"
                                    color="#000"
                                    lineHeight="1.6"
                                    textAlign={{ base: 'center', lg: 'left' }}
                                >
                                    Generic tests don't work. Test for the skills that actually matter to your business.
                                </Text>
                            </Box>

                            <VStack gap={4} w="full" alignItems="flex-start">
                                {[
                                    {
                                        icon: Target,
                                        title: 'Better Fit',
                                        description: 'Measure exactly what you need, not what a generic test thinks you need.'
                                    },
                                    {
                                        icon: Award,
                                        title: 'Higher Quality',
                                        description: 'Identify top performers with precision-targeted assessments.'
                                    },
                                    {
                                        icon: Zap,
                                        title: 'Save Time',
                                        description: 'Eliminate unqualified candidates early in the process.'
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
                                            <Heading as="h3" fontSize="lg" fontWeight="600" color="#000" mb={1}>
                                                {benefit.title}
                                            </Heading>
                                            <Text color="#000" fontSize="sm" lineHeight="1.6">
                                                {benefit.description}
                                            </Text>
                                        </Box>
                                    </Flex>
                                ))}
                            </VStack>
                        </VStack>


                        {/* Right Image - Placeholder */}
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
                                src="/Img13.png"
                                alt="Verified & Trusted"
                                width={500}
                                height={500}
                                priority
                            />
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
