'use client'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Flex } from '@chakra-ui/react';
import { FileText, Brain, Video, MessageSquare, CheckCircle2 } from 'lucide-react';

const screeningFeatures = [
    {
        title: 'Automated Resume Screening',
        icon: FileText,
        items: [
            'AI-powered keyword extraction and matching',
            'Automatic disqualification based on requirements',
            'Duplicate candidate detection',
            'Education and certification verification',
            'Work experience timeline analysis',
            'Custom scoring algorithms'
        ]
    },
    {
        title: 'Skills & Competency Testing',
        icon: Brain,
        items: [
            'Technical coding challenges with auto-grading',
            'Cognitive ability assessments',
            'Language proficiency tests',
            'Role-specific scenario questions',
            'Personality and culture fit evaluations',
            'Proctored exam monitoring'
        ]
    },
    {
        title: 'Video Interview Platform',
        icon: Video,
        items: [
            'One-way video responses to pre-set questions',
            'Live video interviews with recording',
            'AI sentiment and engagement analysis',
            'Automatic transcription and translation',
            'Side-by-side candidate comparison',
            'Mobile-friendly interface'
        ]
    },
    {
        title: 'Communication & Engagement',
        icon: MessageSquare,
        items: [
            'Automated email campaigns and reminders',
            'SMS notifications for time-sensitive updates',
            'In-app messaging with candidates',
            'Interview scheduling with calendar sync',
            'Feedback collection from interviewers',
            'Candidate experience surveys'
        ]
    }
];

const brandGradient = "linear-gradient(90deg, #0071fb 0%, #b000ea 100%)";

export const AdvancedScreening = () => {
    return (
        <Box py={{ base: 16, md: 24 }} bg="white" position="relative">
            <Container maxW="7xl">
                <VStack gap={4} textAlign="center" mb={16}>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="700"
                        letterSpacing="tight"
                        color="#000"
                    >
                        Advanced Candidate Screening
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000" maxW="3xl">
                        Multi-stage screening process that ensures you never miss great talent
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
                    {screeningFeatures.map((feature, index) => (
                        <Box
                            key={index}
                            bg="gray.50"
                            p={8}
                            rounded="2xl"
                            border="1px solid"
                            borderColor="gray.100"
                            transition="all 0.3s"
                            _hover={{ shadow: 'xl', borderColor: 'indigo.200', transform: 'translateY(-2px)' }}
                        >
                            <Flex align="center" gap={4} mb={6}>
                                <Flex
                                    w={12}
                                    h={12}
                                    align="center"
                                    justify="center"
                                    rounded="xl"
                                    background={brandGradient}
                                    color="white"
                                    shadow="md"
                                >
                                    <Icon as={feature.icon} boxSize={6} />
                                </Flex>
                                <Heading as="h3" fontSize="xl" fontWeight="bold" color="#000">
                                    {feature.title}
                                </Heading>
                            </Flex>

                            <VStack as="ul" gap={3} align="start" w="full">
                                {feature.items.map((item, idx) => (
                                    <Flex as="li" pl={3} key={idx} align="start" color="#000" w="full" alignItems="center">
                                        <Icon as={CheckCircle2} color="#4241ff" mr={3} flexShrink={0} />
                                        <Text as="span" fontSize="md" mb={0}>{item}</Text>
                                    </Flex>
                                ))}
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};
