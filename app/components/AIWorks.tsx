'use client'
import { Box, Container, Heading, Text, VStack, Icon, SimpleGrid, Flex } from '@chakra-ui/react';
import { FileText, TrendingUp, ShieldAlert, Search, CheckCircle, Zap, Clock } from 'lucide-react';

const features = [
    {
        title: 'Resume Parsing & Analysis',
        description: 'Automatically extract and structure information from any resume format, with intelligent skill matching.',
        icon: FileText,
    },
    {
        title: 'Predictive Scoring',
        description: 'ML models predict candidate success based on historical hiring data and performance metrics.',
        icon: TrendingUp,
    },
    {
        title: 'Bias Detection',
        description: 'Real-time alerts for potentially biased language or decision patterns in your hiring process.',
        icon: ShieldAlert,
    },
    {
        title: 'Semantic Search',
        description: 'Find candidates based on meaning, not just keywords. Search by concepts, skills, or experience.',
        icon: Search,
    },
];

const stats = [
    { value: '98.5%', label: 'AI Accuracy Rate', icon: CheckCircle },
    { value: '10x', label: 'Faster Screening', icon: Zap },
    { value: '85%', label: 'Time Saved', icon: Clock },
];

const brandGradient = "linear-gradient(90deg, #0071fb 0%, #b000ea 100%)";

export const AIWorks = () => {
    return (
        <Box pt={{ base: 16, md: 24 }} bg="gray.50" position="relative" overflow="hidden">
            <Container maxW="7xl" position="relative" zIndex="1">
                <VStack gap={4} textAlign="center" mb={16}>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="700"
                        letterSpacing="tight"
                        color="#000"
                    >
                        AI That Works For You
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color="#000" maxW="3xl">
                        Cutting-edge artificial intelligence that eliminates bias and surfaces top talent
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mb={12}>
                        {features.map((feature, index) => (
                            <Box
                                key={index}
                                bg="white"
                                p={4}
                                rounded="2xl"
                                shadow="lg"
                                transition="all 0.3s"
                                _hover={{ transform: 'translateY(-5px)', shadow: '2xl' }}
                                position="relative"
                                overflow="hidden"
                                borderTop="4px solid"
                                borderColor="#b000ea"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                textAlign="center"
                            >
                                <Flex
                                    w={14}
                                    h={14}
                                    align="center"
                                    justify="center"
                                    rounded="xl"
                                    background={brandGradient}
                                    color="white"
                                    mb={6}
                                    shadow="md"
                                >
                                    <Icon as={feature.icon} boxSize={7} />
                                </Flex>
                                <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="700" mb={3} color="#000">
                                    {feature.title}
                                </Heading>
                                <Text color="#000" lineHeight="relaxed" fontSize="sm">
                                    {feature.description}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                    <Box
                        background={brandGradient}
                        rounded="3xl"
                        p={{ base: 8, md: 12 }}
                        color="white"
                        shadow="2xl"
                        position="relative"
                        overflow="hidden"
                        h='fit-content'
                    >

                        <SimpleGrid columns={{ base: 1, md: 1 }} gap={12} textAlign="center">
                            {stats.map((stat, index) => (
                                <VStack key={index} gap={2} position="relative" zIndex={1}>
                                    <Text fontSize={{ base: '5xl' }} fontWeight="800" letterSpacing="tight">
                                        {stat.value}
                                    </Text>
                                    <Flex align="center" gap={2} justify="center">
                                        <Icon as={stat.icon} boxSize={5} opacity={0.9} />
                                        <Text fontSize="lg" fontWeight="medium" opacity={0.9}>
                                            {stat.label}
                                        </Text>
                                    </Flex>
                                </VStack>
                            ))}
                        </SimpleGrid>
                    </Box>
                </SimpleGrid>

            </Container>
        </Box>
    );
};
