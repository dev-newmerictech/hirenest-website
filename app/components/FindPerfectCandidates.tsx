'use client'

import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Icon,
    Badge,
    Avatar
} from '@chakra-ui/react';
import { CheckCircle2 } from 'lucide-react';

const candidates = [
    {
        name: "Sarah Jenkins",
        role: "Product Manager",
        match: "98%",
        status: "Interview",
        initial: "S",
        bg: "blue.100",
        color: "blue.600"
    },
    {
        name: "Michael Chen",
        role: "Frontend Dev",
        match: "95%",
        status: "Screening",
        initial: "M",
        bg: "purple.100",
        color: "purple.600"
    },
    {
        name: "Jessica Wu",
        role: "Data Scientist",
        match: "92%",
        status: "New",
        initial: "J",
        bg: "cyan.100",
        color: "cyan.600"
    }
];

const features = [
    "AI-Powered Screening Setup: Configure workflows instantly.",
    "Interactive Screening Builder: MCQs, code tests, and more.",
    "Real-Time Analytics: View live performance insights.",
    "Team Collaboration: Fine-grained access control for your hiring team."
];

export const FindPerfectCandidates = () => {
    return (
        <Box bg="white" py={{ base: 16, md: 24 }} position="relative" overflow="hidden">
            <Container maxW="7xl">
                <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 12, lg: 20 }} align="center">

                    {/* Left Content - Dashboard Preview */}
                    <Box flex={1} w="full" maxW="lg">
                        <Box
                            bg="white"
                            borderRadius="2xl"
                            boxShadow="2xl"
                            p={6}
                            border="1px solid"
                            borderColor="gray.100"
                            position="relative"
                        >
                            {/* Window Controls Decoration */}
                            <HStack gap={2} mb={6}>
                                <Box w={3} h={3} borderRadius="full" bg="red.400" />
                                <Box w={3} h={3} borderRadius="full" bg="yellow.400" />
                                <Box w={3} h={3} borderRadius="full" bg="green.400" />
                                <Text ml="auto" fontSize="xs" color="gray.400">Employer Dashboard</Text>
                            </HStack>

                            <Flex justify="space-between" align="center" mb={6}>
                                <Text fontWeight="bold" fontSize="lg" color="gray.800">Candidate Pipeline</Text>
                                <Button size="xs" colorScheme="brand" variant="solid" bg="brand.600" color="white" borderRadius="full" px={4}>
                                    Export Report
                                </Button>
                            </Flex>

                            <VStack gap={4} align="stretch">
                                {candidates.map((candidate, index) => (
                                    <Flex
                                        key={index}
                                        bg="gray.50"
                                        p={3}
                                        borderRadius="xl"
                                        align="center"
                                        gap={4}
                                    >
                                        <Flex
                                            w={10}
                                            h={10}
                                            bg={candidate.bg}
                                            color={candidate.color}
                                            borderRadius="full"
                                            align="center"
                                            justify="center"
                                            fontWeight="bold"
                                            fontSize="sm"
                                        >
                                            {candidate.initial}
                                        </Flex>
                                        <Box flex={1}>
                                            <Text fontWeight="bold" fontSize="sm" color="gray.800">{candidate.name}</Text>
                                            <Text fontSize="xs" color="gray.500">{candidate.role}</Text>
                                        </Box>
                                        <Box textAlign="right">
                                            <Text fontWeight="bold" fontSize="sm" color="#4241ff">{candidate.match} Match</Text>
                                            <Text fontSize="xs" color="gray.500">{candidate.status}</Text>
                                        </Box>
                                    </Flex>
                                ))}
                            </VStack>

                            {/* Background decorative blob */}
                            <Box
                                position="absolute"
                                top="-10%"
                                left="-10%"
                                right="-10%"
                                bottom="-10%"
                                bg="brand.500"
                                filter="blur(60px)"
                                opacity={0.1}
                                zIndex={-1}
                                borderRadius="3xl"
                            />
                        </Box>
                    </Box>

                    {/* Right Content - Text */}
                    <Box flex={1}>
                        <Text
                            color="#4241ff"
                            fontWeight="600"
                            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                            mb={4}
                            letterSpacing="wider"
                            textTransform="uppercase"
                        >
                            For Employers
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            color="#000"
                            mb={6}
                            lineHeight="1.2"
                        >
                            Find Perfect Candidates in <br />
                            <Box as="span" color="#4241ff">Minutes, Not Months</Box>
                        </Heading>
                        <Text
                            color="#000"
                            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                            mb={8}
                            lineHeight="1.6"
                        >
                            Stop sifting through thousands of irrelevant resumes. Our AI pre-screens, scores, and
                            ranks candidates so you only talk to the best.
                        </Text>

                        <VStack align="start" gap={4} mb={10}>
                            {features.map((feature, index) => (
                                <HStack key={index} align="start" gap={3}>
                                    <Icon as={CheckCircle2} color="#4241ff" boxSize={6} mt={0} />
                                    <Text fontSize={{ base: 'md', md: 'lg' }} color="#000">
                                        {feature}
                                    </Text>
                                </HStack>
                            ))}
                        </VStack>

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
                            Start Hiring Free
                        </Button>
                    </Box>

                </Flex>
            </Container>
        </Box>
    );
};
