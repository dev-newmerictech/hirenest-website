'use client'
import { Box, Container, Heading, Text, VStack, Icon, SimpleGrid, Flex } from '@chakra-ui/react';
import { FileText, TrendingUp, ShieldAlert, Search, CheckCircle, Zap, Clock } from 'lucide-react';

const features = [
    {
        title: 'Resume parsing',
        description: 'Automatically extract and structure information from any resume format with intelligent skill matching.',
        icon: FileText,
    },
    {
        title: 'Predictive scoring',
        description: 'ML models predict candidate success based on historical hiring data and performance metrics.',
        icon: TrendingUp,
    },
    {
        title: 'Bias detection',
        description: 'Real-time alerts for potentially biased language or decision patterns in your hiring process.',
        icon: ShieldAlert,
    },
    {
        title: 'Semantic search',
        description: 'Find candidates based on meaning, not just keywords. Search by concepts and experience.',
        icon: Search,
    },
];

const stats = [
    { value: '98.5%', label: 'AI Accuracy Rate', icon: CheckCircle },
    { value: '10x', label: 'Faster Screening', icon: Zap },
    { value: '85%', label: 'Time Saved', icon: Clock },
];

export const AIWorks = () => {
    return (
        <Box pb={{ base: '20' }} bg="white" position="relative" overflow="hidden">
            <Container maxW="7xl" position="relative">
                <VStack gap={{ base: 10 }}>
                    {/* Section Header - Apple Style */}
                    <VStack textAlign="center" gap={2} maxW="7xl" mx="auto">
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            color="#000"
                            lineHeight="1.2"
                        >
                            AI that <Text as="span" bg="#4241ff" bgClip="text">works for you.</Text>
                        </Heading>
                        <Text
                            fontSize={{ base: 'lg' }}
                            color="#6e6e73"
                            lineHeight="1.4"
                            fontWeight="400"
                        >
                            Cutting-edge intelligence that eliminates bias and surfaces top talent.
                        </Text>
                    </VStack>

                    {/* Content Grid */}
                    <SimpleGrid
                        columns={{ base: 1, lg: 1 }}
                        gap={{ base: 6, md: 8 }}
                        w="full"
                        maxW="1200px"
                        mx="auto"
                    >
                        {/* Features Grid */}
                        <SimpleGrid columns={{ base: 1, sm: 2 }} gap={{ base: 4, md: 6 }}>
                            {features.map((feature, index) => (
                                <Box
                                    key={index}
                                    bg="#f5f5f7"
                                    p={{ base: 6, md: 8 }}
                                    borderRadius="24px"
                                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                                    _hover={{
                                        bg: "#fafafa",
                                        transform: 'scale(1.02)'
                                    }}
                                >
                                    <VStack align="flex-start" gap={4}>
                                        <Flex
                                            w={12}
                                            h={12}
                                            align="center"
                                            justify="center"
                                            borderRadius="12px"
                                            bg="white"
                                        >
                                            <Icon as={feature.icon} boxSize={6} color="#4241ff" />
                                        </Flex>
                                        <VStack align="flex-start" gap={2}>
                                            <Heading
                                                as="h3"
                                                fontSize={{ base: 'lg', md: 'xl' }}
                                                fontWeight="600"
                                                color="#1d1d1f"
                                                lineHeight="1.3"
                                            >
                                                {feature.title}
                                            </Heading>
                                            <Text
                                                color="#6e6e73"
                                                lineHeight="1.5"
                                                fontSize={{ base: 'sm', md: 'md' }}
                                            >
                                                {feature.description}
                                            </Text>
                                        </VStack>
                                    </VStack>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
};
