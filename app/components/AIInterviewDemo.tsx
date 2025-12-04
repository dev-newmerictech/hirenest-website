'use client'

import { useState, useRef, useEffect } from 'react'
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Grid,
    Flex,
    Icon,
} from '@chakra-ui/react'
import {
    Video,
    MessageSquare,
    CheckSquare,
    Sparkles,
} from 'lucide-react'

type InterviewType = 'video' | 'mcq' | 'openended'

const videoSources = {
    entry: 'https://d3g7cvsdf79icc.cloudfront.net/2_Entry.mp4',
    idle: 'https://d3g7cvsdf79icc.cloudfront.net/1_idle_listening.mp4',
    talking: 'https://d3g7cvsdf79icc.cloudfront.net/3_Talking.mp4',
}

const interviewTypes = [
    {
        id: 'video' as InterviewType,
        icon: Video,
        title: 'AI Video Interview',
        description: 'Conduct realistic video interviews with AI-powered analysis of responses, body language, and communication skills.',
        color: '#4241ff',
        bg: '#bedcffff',
        features: [
            'Real-time facial analysis',
            'Speech-to-text transcription',
            'Sentiment analysis',
            'Automated scoring',
        ],
    },
    {
        id: 'mcq' as InterviewType,
        icon: CheckSquare,
        title: 'MCQ Assessments',
        description: 'Create custom multiple-choice assessments to evaluate technical knowledge and domain expertise efficiently.',
        color: '#0071fb',
        bg: '#e3f2fd',
        features: [
            'Custom question banks',
            'Adaptive difficulty',
            'Instant scoring',
            'Detailed analytics',
        ],
    },
    {
        id: 'openended' as InterviewType,
        icon: MessageSquare,
        title: 'Open-Ended Questions',
        description: 'Assess critical thinking and problem-solving skills with AI-evaluated open-ended questions.',
        color: '#b000ea',
        bg: '#f3e5f5',
        features: [
            'AI-powered evaluation',
            'Keyword matching',
            'Contextual analysis',
            'Plagiarism detection',
        ],
    },
]

export const AIInterviewDemo = () => {
    const [selectedType, setSelectedType] = useState<InterviewType>('video')
    const [currentVideo, setCurrentVideo] = useState<'entry' | 'idle' | 'talking'>('entry')
    const videoRef = useRef<HTMLVideoElement>(null)

    const selectedInterview = interviewTypes.find(type => type.id === selectedType)!

    // Autoplay video on mount and when video changes
    useEffect(() => {
        if (selectedType === 'video' && videoRef.current) {
            videoRef.current.load()
            const playPromise = videoRef.current.play()
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('Autoplay prevented:', error)
                })
            }
        }
    }, [currentVideo, selectedType])

    // Handle video end - cycle through all videos
    const handleVideoEnd = () => {
        // Cycle: entry -> talking -> idle -> entry (loop)
        if (currentVideo === 'entry') {
            setCurrentVideo('talking')
        } else if (currentVideo === 'talking') {
            setCurrentVideo('idle')
        } else {
            setCurrentVideo('entry')
        }
    }

    return (
        <Box pt={{ base: 16, md: 16 }} bg="white" position="relative" overflow="hidden">
            {/* Background Gradients */}
            <Box position="absolute" top="0" left="0" w="full" h="full" overflow="hidden" pointerEvents="none">
                <Box position="absolute" top="20%" left="-10%" w="600px" h="600px" bg="blue.50" filter="blur(120px)" opacity="0.4" borderRadius="full" />
                <Box position="absolute" bottom="20%" right="-10%" w="600px" h="600px" bg="purple.50" filter="blur(120px)" opacity="0.4" borderRadius="full" />
            </Box>

            <Container maxW="7xl" position="relative">
                <VStack gap={8}>
                    {/* Section Header */}
                    <VStack textAlign="center" gap={4} maxW="3xl" mx="auto">
                        <Text fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider">
                            AI-Powered Interviews
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="800"
                            color="#1d1d1f"
                            lineHeight="1.1"
                            letterSpacing="tight"
                        >
                            Interview Smarter with <Text as="span" color="#4241ff">AI Technology</Text>
                        </Heading>
                        <Text fontSize="xl" color="#6e6e73" maxW="2xl">
                            Choose from multiple interview formats powered by advanced AI to find the perfect candidates faster.
                        </Text>
                    </VStack>

                    {/* Interview Type Selector */}
                    <Grid
                        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                        gap={6}
                        w="full"
                    >
                        {interviewTypes.map((type) => (
                            <Box
                                key={type.id}
                                onClick={() => setSelectedType(type.id)}
                                cursor="pointer"
                                bg={'white'}
                                border="2px solid"
                                borderColor={selectedType === type.id ? type.color : 'gray.200'}
                                rounded="2xl"
                                p={6}
                                transition="all 0.3s ease"
                                _hover={{
                                    borderColor: type.color,
                                    transform: 'translateY(-4px)',
                                    shadow: 'lg',
                                }}
                            >
                                <Flex flexDirection={{base:'column', md:'row'}} gap={4} alignItems={'flex-start'}>
                                    <Flex
                                        p={4}
                                        w={'auto'}
                                        h={'auto'}
                                        align="center"
                                        justify="center"
                                        rounded="xl"
                                        bg={selectedType === type.id ? type.color : type.bg}
                                        color={selectedType === type.id ? 'white' : type.color}
                                        transition="all 0.3s ease"
                                    >
                                        <Icon as={type.icon} boxSize={6} />
                                    </Flex>
                                    <Box>
                                        <Heading size="md" fontWeight="700" color="#1d1d1f" mb={2}>
                                            {type.title}
                                        </Heading>
                                        <Text fontSize="sm" color="#6e6e73" lineHeight="1.6">
                                            {type.description}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        ))}
                    </Grid>

                    {/* Demo Area */}
                    <Box
                        w="full"
                        bg="white"
                        rounded="3xl"
                        shadow="lg"
                        border="1px solid"
                        borderColor="gray.200"
                        overflow="hidden"
                    >
                        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={0}>
                            {/* Left Side - Visual Demo */}
                            <Box
                                bg={selectedInterview.bg}
                                p={selectedType === 'video' ? 0 : { base: 8, md: 12 }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                position="relative"
                                minH={{ base: '400px', md: '500px' }}
                            >
                                {selectedType === 'video' ? (
                                    <Box position="relative" w="full" h="full">
                                        <Box
                                            overflow="hidden"
                                            shadow="2xl"
                                        >
                                            <video
                                                ref={videoRef}
                                                style={{ width: '100%', height: '500px', display: 'block', objectFit: 'cover' }}
                                                muted
                                                playsInline
                                                onEnded={handleVideoEnd}
                                            >
                                                <source src={videoSources[currentVideo]} type="video/mp4" />
                                            </video>
                                        </Box>

                                        {/* Video Status Indicator */}
                                        <Flex
                                            position="absolute"
                                            bottom={4}
                                            left="50%"
                                            transform="translateX(-50%)"
                                            gap={2}
                                            bg="rgba(0,0,0,0.7)"
                                            px={4}
                                            py={2}
                                            rounded="full"
                                            backdropFilter="blur(10px)"
                                            alignItems="center"
                                        >
                                            <Box
                                                w={2}
                                                h={2}
                                                bg="green.400"
                                                rounded="full"
                                                animation="pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                                            />
                                            <Text fontSize="xs" color="white" fontWeight="600" textTransform="capitalize">
                                                {currentVideo}
                                            </Text>
                                        </Flex>
                                    </Box>
                                ) : selectedType === 'mcq' ? (
                                    <VStack gap={4} w="full" maxW="500px">
                                        {[1, 2, 3, 4].map((option) => (
                                            <Box
                                                key={option}
                                                w="full"
                                                p={4}
                                                bg="white"
                                                rounded="xl"
                                                border="2px solid"
                                                borderColor={option === 2 ? selectedInterview.color : 'gray.200'}
                                                cursor="pointer"
                                                transition="all 0.2s"
                                                _hover={{ borderColor: selectedInterview.color }}
                                            >
                                                <HStack>
                                                    <Flex
                                                        w={8}
                                                        h={8}
                                                        align="center"
                                                        justify="center"
                                                        rounded="full"
                                                        bg={option === 2 ? selectedInterview.color : 'gray.100'}
                                                        color={option === 2 ? 'white' : '#6e6e73'}
                                                        fontWeight="700"
                                                    >
                                                        {String.fromCharCode(64 + option)}
                                                    </Flex>
                                                    <Text fontWeight="600" color="#1d1d1f">
                                                        Sample answer option {option}
                                                    </Text>
                                                </HStack>
                                            </Box>
                                        ))}
                                    </VStack>
                                ) : (
                                    <Box w="full" maxW="500px">
                                        <Box
                                            bg="white"
                                            rounded="xl"
                                            p={6}
                                            shadow="lg"
                                            border="2px solid"
                                            borderColor={selectedInterview.color}
                                        >
                                            <VStack align="flex-start" gap={4}>
                                                <Text fontWeight="700" color="#1d1d1f" fontSize="lg">
                                                    Question: Describe your problem-solving approach
                                                </Text>
                                                <Box
                                                    w="full"
                                                    minH="200px"
                                                    p={4}
                                                    bg="gray.50"
                                                    rounded="lg"
                                                    border="1px solid"
                                                    borderColor="gray.200"
                                                >
                                                    <Text color="#6e6e73" fontSize="sm" fontStyle="italic">
                                                        Candidate's response will be analyzed by AI for relevance, depth, and clarity...
                                                    </Text>
                                                </Box>
                                                <HStack w="full" justify="space-between">
                                                    <Text fontSize="xs" color="#6e6e73">
                                                        AI Score: 85/100
                                                    </Text>
                                                    <Icon as={Sparkles} boxSize={4} color={selectedInterview.color} />
                                                </HStack>
                                            </VStack>
                                        </Box>
                                    </Box>
                                )}
                            </Box>

                            {/* Right Side - Features */}
                            <Box p={{ base: 8, md: 12 }} display="flex" flexDirection="column" justifyContent="center">
                                <VStack align="flex-start" gap={6}>
                                    <Box>
                                        <Heading size="lg" fontWeight="700" color="#1d1d1f" mb={3}>
                                            {selectedInterview.title}
                                        </Heading>
                                        <Text fontSize="lg" color="#6e6e73" lineHeight="1.6">
                                            {selectedInterview.description}
                                        </Text>
                                    </Box>

                                    <VStack align="flex-start" gap={3} w="full">
                                        <Text fontWeight="700" color="#1d1d1f" fontSize="md">
                                            Key Features:
                                        </Text>
                                        {selectedInterview.features.map((feature, index) => (
                                            <HStack key={index} align="start">
                                                <Box
                                                    w={6}
                                                    h={6}
                                                    rounded="full"
                                                    bg={selectedInterview.bg}
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    flexShrink={0}
                                                    mt={0.5}
                                                >
                                                    <Icon as={Sparkles} boxSize={3} color={selectedInterview.color} />
                                                </Box>
                                                <Text color="#6e6e73" fontSize="md" lineHeight="1.6">
                                                    {feature}
                                                </Text>
                                            </HStack>
                                        ))}
                                    </VStack>

                                    <Button
                                        size="lg"
                                        w="full"
                                        borderRadius="full"
                                        background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                                        color="white"
                                        fontWeight="600"
                                        _hover={{
                                            background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                                            opacity: 0.9,
                                        }}
                                        onClick={() => {
                                            window.open('https://app.hirenest.ai', '_blank')
                                        }}
                                    >
                                        Try {selectedInterview.title}
                                    </Button>
                                </VStack>
                            </Box>
                        </Grid>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}