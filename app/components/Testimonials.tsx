'use client';

import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    Icon,
    VStack,
    HStack,
    Button,
} from '@chakra-ui/react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote:
            "This platform gave me something I never had before: proof of my skills before the interview. I completed assessments, and within two weeks, three companies reached out after seeing my results. I got hired based on what I can actually do.",
        name: "Emma Williams",
        role: "Job Seeker Success Story",
        initial: "E",
    },
    {
        quote:
            "We tested 47 candidates for one engineering role using unlimited assessments — something we couldn’t afford with our old platform. We found someone exceptional we would have missed if we’d rationed tests. Best hire we’ve made in two years.",
        name: "Sarah Johnson",
        role: "Tech Company Hiring Manager",
        initial: "S",
    },
    {
        quote:
            "The video interviews let us see communication skills before scheduling calls. We cut our time-to-hire from 52 days to 28 days. The AI ranking means we’re only talking to people who’ve proven they can do the work.",
        name: "Michael Chen",
        role: "Operations Director",
        initial: "M",
    },
];

const stats = [
    { value: "50K+", label: "Companies Using the Platform" },
    { value: "2M+", label: "Candidates Screened" },
    { value: "85%", label: "Matching Accuracy" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support Available" },
];

export const Testimonials = () => {
    return (
        <Box bg="white" pb={16}>
            <Container maxW="7xl">
                {/* Header */}
                <VStack gap={4} textAlign="center" mb={16}>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="800"
                        color="#1d1d1f"
                        lineHeight="1.1"
                        letterSpacing="tight"
                    >
                        Loved by People Finding{" "}
                        <Text as="span" color="#4241ff">
                            Better Opportunities
                        </Text>
                    </Heading>

                    <Text
                        fontSize={{ base: 'lg', md: 'xl' }} color="#6e6e73"
                        lineHeight="1.4" maxW="3xl">
                        Join thousands already using Hirenest to make smarter career and
                        hiring decisions.
                    </Text>
                </VStack>

                {/* Testimonials */}
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={20}>
                    {testimonials.map((t, i) => (
                        <Box
                            key={i}
                            bg="white"
                            p={8}
                            borderRadius="2xl"
                            boxShadow="sm"
                            transition="all 0.3s"
                            _hover={{ transform: 'translateY(-4px)', boxShadow: 'md' }}
                        >
                            <HStack gap={1} mb={4}>
                                {[...Array(5)].map((_, i) => (
                                    <Icon
                                        key={i}
                                        as={Star}
                                        color="yellow.400"
                                        fill="currentColor"
                                        boxSize={5}
                                    />
                                ))}
                            </HStack>

                            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.6">
                                “{t.quote}”
                            </Text>

                            <Flex align="center" gap={4} mt={t.initial === 'E' ? 10 : t.initial === 'M' ? 10 : 3}>
                                <Flex
                                    w={12}
                                    h={12}
                                    borderRadius="full"
                                    bg="#4241ff"
                                    color="white"
                                    align="center"
                                    justify="center"
                                    fontWeight="bold"
                                    fontSize={{ base: 'md', md: 'lg' }}
                                >
                                    {t.initial}
                                </Flex>
                                <Box>
                                    <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>
                                        {t.name}
                                    </Text>
                                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.600">
                                        {t.role}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>

                {/* Impact */}
                <VStack gap={10}>
                    <Heading
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="800"
                        color="#1d1d1f"
                        lineHeight="1.1"
                        letterSpacing="tight"
                    >Our Impact</Heading>

                    <SimpleGrid columns={{ base: 2, md: 3 }} gap={10} textAlign="center">
                        {stats.map((stat, i) => (
                            <Box key={i}>
                                <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="700" color="#4241ff">
                                    {stat.value}
                                </Text>
                                <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
                                    {stat.label}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>

                    <Button
                        borderRadius="full"
                        fontWeight="600"
                        fontSize={'lg'}
                        background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                        color="white"
                        minW={{ base: '100px', md: '100px' }}
                        _hover={{
                            background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                            opacity: 0.9,
                        }}
                        transition="all 0.3s ease"
                        onClick={() => window.open('https://app.hirenest.ai', '_blank')}
                        mt={4}
                        py={6}
                        px={6}
                    >
                        Let’s Find the Right Candidate
                    </Button>
                </VStack>
            </Container>
        </Box>
    );
};
