'use client'

import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    Avatar,
    Icon,
    VStack,
    HStack
} from '@chakra-ui/react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: "This platform reduced our time-to-hire by 60%. The AI screening is incredibly accurate.",
        name: "Sarah Johnson",
        role: "VP of Talent, TechCorp",
        avatarBg: "brand.400",
        initial: "S"
    },
    {
        quote: "Best recruitment tool we've ever used. The video interview feature is a game-changer.",
        name: "Michael Chen",
        role: "Head of HR, StartupXYZ",
        avatarBg: "brand.400",
        initial: "M"
    },
    {
        quote: "The analytics dashboard gives us insights we never had before. Highly recommend!",
        name: "Emma Williams",
        role: "Recruiting Manager, Enterprise Co",
        avatarBg: "brand.400",
        initial: "E"
    }
];

const stats = [
    { value: "50K+", label: "Companies" },
    { value: "2M+", label: "Candidates Screened" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support Available" }
];

export const Testimonials = () => {
    return (
        <Box bg="white" pb={{ base: 16 }} position="relative" overflow="hidden">
            <Container maxW="7xl">
                {/* Header */}
                <VStack gap={4} textAlign="center" mb={16}>

                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="700"
                        color="#000"
                        mt={2}
                    >
                        Loved by Hiring Teams Worldwide
                    </Heading>
                    <Text
                        fontSize={{ base: 'md', md: 'lg' }}
                        color="#000"
                    >
                        Join thousands of companies already hiring smarter
                    </Text>
                </VStack>

                {/* Testimonial Cards */}
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={20}>
                    {testimonials.map((testimonial, index) => (
                        <Box
                            key={index}
                            bg="white"
                            p={8}
                            borderRadius="2xl"
                            boxShadow="sm"
                            _hover={{ transform: 'translateY(-5px)', boxShadow: 'md' }}
                            transition="all 0.3s"
                        >
                            <HStack gap={1} mb={4}>
                                {[...Array(5)].map((_, i) => (
                                    <Icon key={i} as={Star} color="yellow.400" fill="currentColor" boxSize={5} />
                                ))}
                            </HStack>
                            <Text
                                fontSize={{ base: 'sm', md: 'md' }}
                                color="#000"
                                mb={6}
                                lineHeight="1.6"
                                minH="72px"
                            >
                                "{testimonial.quote}"
                            </Text>
                            <Flex align="center" gap={4}>
                                <Flex
                                    w={12}
                                    h={12}
                                    bg={testimonial.avatarBg}
                                    borderRadius="full"
                                    align="center"
                                    justify="center"
                                    color="white"
                                    fontWeight="bold"
                                    fontSize="lg"
                                >
                                    {testimonial.initial}
                                </Flex>
                                <Box>
                                    <Text fontWeight="bold" color="#000" fontSize="sm">{testimonial.name}</Text>
                                    <Text fontSize="xs" color="#000">{testimonial.role}</Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>

                {/* Stats */}
                <SimpleGrid columns={{ base: 2, md: 4 }} gap={10} textAlign="center">
                    {stats.map((stat, index) => (
                        <Box key={index}>
                            <Text
                                fontSize={{ base: '3xl', md: '4xl' }}
                                fontWeight="700"
                                color="#4241ff"
                                mb={2}
                            >
                                {stat.value}
                            </Text>
                            <Text
                                fontSize={{ base: 'sm', md: 'md' }}
                                color="#000"
                                fontWeight="medium"
                            >
                                {stat.label}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};
