"use client"
import { Box, Button, Container, Flex, Heading, Stack, Text, VStack, Grid, Icon, Badge } from '@chakra-ui/react'
import { ArrowRight, CheckCircle, Shield, Award, Lock, UserCheck, Star, Verified, FileCheck, BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import { Block as Pricing } from '@/src/components/blocks/pricing/pricing-simple/block';
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { Testimonials } from '../components/Testimonials';
import { Block as CTADualButton } from '@/src/components/blocks/cta/cta-dual-button/block';

const features = [
    {
        icon: Shield,
        title: 'Background Checks',
        description: 'Comprehensive criminal, employment, and education verification for every candidate.'
    },
    {
        icon: Award,
        title: 'Skill Validation',
        description: 'Verified assessments and certifications to prove candidates have the skills they claim.'
    },
    {
        icon: FileCheck,
        title: 'Reference Verification',
        description: 'Automated reference checks with AI-powered analysis of feedback patterns.'
    },
    {
        icon: BadgeCheck,
        title: 'Trust Badges',
        description: 'Verified candidates receive trust badges that boost their credibility with employers.'
    }
]

export default function VerifiedCandidatesPage() {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                w="full"
                position="relative"
                bgGradient="linear(to-br, rgba(66, 65, 255, 0.05), rgba(248, 248, 248, 1))"
                overflow="hidden"
            >
                <Container pt={{ base: '12', md: '20', lg: '40' }} pb={{ base: '12', md: '16' }} maxW="7xl" position="relative">
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
                                >
                                    Verified Candidates
                                </Text>
                                <Heading
                                    as="h1"
                                    fontSize={{ base: '3xl', md: '4xl' }}
                                    fontWeight="700"
                                    color="#000"
                                    lineHeight="1.2"
                                    mb={4}
                                >
                                    Hire With Confidence,
                                    <Text as="span" display="block" bg="#4241ff" bgClip="text">Every Single Time</Text>
                                </Heading>
                                <Text
                                    fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                                    fontWeight="400"
                                    color="#000"
                                    lineHeight="1.6"
                                    maxW="600px"
                                >
                                    Stop worrying about resume fraud and bad hires. Our verification process ensures every candidate is exactly who they say they are.
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
                                >
                                    Verify Candidates
                                    <Box as={ArrowRight} ml={1} />
                                </Button>
                            </Stack>

                            <Flex gap={6} mt={4} fontSize="sm" color="#000" fontWeight="500">
                                <Flex align="center" gap={2}>
                                    <Icon as={CheckCircle} color="#4241ff" />
                                    <Text>100% Verified</Text>
                                </Flex>
                                <Flex align="center" gap={2}>
                                    <Icon as={CheckCircle} color="#4241ff" />
                                    <Text>Secure Process</Text>
                                </Flex>
                            </Flex>
                        </VStack>

                        {/* Right Image - Placeholder */}
                        <Box
                            position="relative"
                            h={{ base: '400px', md: '500px' }}
                            bg="linear-gradient(135deg, rgba(66, 65, 255, 0.1) 0%, rgba(176, 0, 234, 0.1) 100%)"
                            borderRadius="16px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            overflow="hidden"
                        >
                            <VStack gap={4}>
                                <Icon as={Shield} boxSize={24} color="#4241ff" opacity={0.3} />
                                <Text color="#4241ff" fontWeight="600" fontSize="lg">Verified & Trusted</Text>
                            </VStack>
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
                                Trust & Security
                            </Text>
                            <Heading
                                as="h2"
                                fontSize={{ base: '3xl', md: '4xl' }}
                                fontWeight="700"
                                color="#000"
                                lineHeight="1.2"
                            >
                                Complete <Text as="span" color="#4241ff">Verification</Text>
                            </Heading>
                            <Text
                                fontSize={{ base: 'md', md: 'lg' }}
                                color="#000"
                                opacity={0.8}
                                maxW="7xl"
                            >
                                Our multi-layered verification process ensures you only hire candidates with proven credentials and backgrounds.
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
                                Verify candidates in 4 easy steps
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
                                        icon: UserCheck,
                                        step: '01',
                                        title: 'Request Verification',
                                        description: 'Candidates consent to background and credential checks.'
                                    },
                                    {
                                        icon: FileCheck,
                                        step: '02',
                                        title: 'Document Review',
                                        description: 'We verify education, employment history, and certifications.'
                                    },
                                    {
                                        icon: Shield,
                                        step: '03',
                                        title: 'Background Check',
                                        description: 'Comprehensive criminal and credit checks are performed.'
                                    },
                                    {
                                        icon: BadgeCheck,
                                        step: '04',
                                        title: 'Award Badge',
                                        description: 'Verified candidates receive a trust badge on their profile.'
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
                                >
                                    Why Verify <Text as="span" color="#4241ff">Candidates?</Text>
                                </Heading>
                                <Text
                                    fontSize={{ base: 'md', md: 'lg' }}
                                    fontWeight="400"
                                    color="#000"
                                    lineHeight="1.6"
                                >
                                    Protect your company from bad hires, fraud, and legal liability with comprehensive verification.
                                </Text>
                            </Box>

                            <VStack gap={4} w="full" alignItems="flex-start">
                                {[
                                    {
                                        icon: Lock,
                                        title: 'Reduce Risk',
                                        description: 'Minimize the risk of negligent hiring lawsuits and workplace incidents.'
                                    },
                                    {
                                        icon: Star,
                                        title: 'Better Quality',
                                        description: 'Ensure candidates have the qualifications they claim to have.'
                                    },
                                    {
                                        icon: Shield,
                                        title: 'Build Trust',
                                        description: 'Create a safer, more trustworthy workplace for your team.'
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

                        <Box
                            position="relative"
                            h={{ base: '300px', md: '500px' }}
                            bg="rgba(66, 65, 255, 0.05)"
                            borderRadius="2xl"
                            overflow="hidden"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <VStack gap={4}>
                                <Icon as={Verified} boxSize={16} color="#4241ff" opacity={0.5} />
                                <Text color="#4241ff" fontWeight="medium">Fully Verified</Text>
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
