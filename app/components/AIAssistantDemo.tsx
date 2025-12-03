'use client'

import { useState } from 'react'
import {
    Box,
    Flex,
    Text,
    VStack,
    HStack,
    Button,
    Input,
    Heading,
    Icon,
    Container,
} from '@chakra-ui/react'
import {
    Sparkles,
    MapPin,
    Users,
    Plus,
    BarChart2,
    AlertCircle,
    Calendar,
    Check,
    Bot,
    Search,
    Send,
    MessageSquare,
    Briefcase,
    FileText,
    TrendingUp,
    Award,
    BookOpen,
} from 'lucide-react'

const QuickActionButton = ({ icon, label, colorScheme }: { icon: any, label: string, colorScheme: string }) => (
    <Button
        variant="ghost"
        justifyContent="flex-start"
        w="full"
        h="auto"
        py={3}
        bg={`${colorScheme}.50`}
        color={`${colorScheme}.600`}
        _hover={{ bg: `${colorScheme}.100` }}
        fontWeight="600"
        fontSize="sm"
    >
        <Icon as={icon} boxSize={5} mr={3} />
        {label}
    </Button>
)

type UserType = 'provider' | 'seeker'

export const AIAssistantDemo = () => {
    const [userType, setUserType] = useState<UserType>('provider')

    const config = {
        provider: {
            title: 'Your Personal AI Hiring Assistant',
            subtitle: 'Experience the future of recruitment with our advanced AI assistant. Automate tasks, get instant insights, and streamline your entire hiring process.',
            sidebarTitle: 'Hiring Actions',
            quickActions: [
                { icon: MapPin, label: 'Show nearby candidates', color: 'blue' },
                { icon: Users, label: 'List job applicants', color: 'green' },
                { icon: Plus, label: 'Create job post', color: 'purple' },
                { icon: BarChart2, label: 'View analytics', color: 'gray' },
                { icon: AlertCircle, label: 'Check failed candidates', color: 'red' },
                { icon: Calendar, label: 'Schedule interviews', color: 'blue' },
            ],
            capabilities: [
                'Natural language understanding',
                'Execute complex hiring tasks',
                'Solves doubts instantly',
                '24/7 availability',
            ],
            headerGradient: 'linear(to-r, blue.600, purple.600)',
            headerTitle: 'AI Hiring Assistant',
            headerSubtitle: 'Always here to help with your hiring needs',
            chatTitle: "Hi! I'm your AI hiring assistant.",
            chatSubtitle: 'I can help you with candidate recommendations, job postings, analytics, and more. What would you like to do today?',
            suggestedActions: [
                { icon: Search, label: 'Find Candidates' },
                { icon: Plus, label: 'Create Job' },
                { icon: BarChart2, label: 'View Analytics' },
            ],
            inputPlaceholder: 'Ask about your job posts, candidates, or hiring...',
        },
        seeker: {
            title: 'Your Personal AI Career Coach',
            subtitle: 'Accelerate your career with our intelligent AI companion. Get personalized job matches, resume optimization, and interview preparation guidance.',
            sidebarTitle: 'Career Actions',
            quickActions: [
                { icon: Search, label: 'Find matching jobs', color: 'blue' },
                { icon: FileText, label: 'Optimize resume', color: 'green' },
                { icon: Briefcase, label: 'Track applications', color: 'purple' },
                { icon: TrendingUp, label: 'Salary insights', color: 'orange' },
                { icon: Award, label: 'Skill gap analysis', color: 'red' },
                { icon: BookOpen, label: 'Prepare for interview', color: 'teal' },
            ],
            capabilities: [
                'Personalized job matching',
                'Resume enhancement tips',
                'Interview roleplay & coaching',
                'Career path guidance',
            ],
            headerGradient: '#0071fb',
            headerTitle: 'AI Career Coach',
            headerSubtitle: 'Your partner in career growth and success',
            chatTitle: "Hi! I'm your AI career coach.",
            chatSubtitle: 'I can help you find the perfect job, improve your resume, and prepare for interviews. What is your goal today?',
            suggestedActions: [
                { icon: Search, label: 'Find Jobs' },
                { icon: FileText, label: 'Review Resume' },
                { icon: MessageSquare, label: 'Interview Prep' },
            ],
            inputPlaceholder: 'Ask about jobs, resume tips, or interview advice...',
        },
    }

    const currentConfig = config[userType]

    return (
        <Box pt={{ base: 16, md: 16 }} bg="white">
            <Container maxW="7xl">
                {/* Section Header */}
                <Box textAlign="center" mb={16}>
                    <Text fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider" mb={4}>
                        AI Assistant
                    </Text>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="800"
                        color="#1d1d1f"
                        mb={6}
                        lineHeight="1.1"
                        letterSpacing="tight"
                    >
                        {currentConfig.title}
                    </Heading>
                    <Text fontSize="xl" color="#6e6e73" maxW="3xl" mx="auto" mb={8}>
                        {currentConfig.subtitle}
                    </Text>

                    {/* Toggle Switch */}
                    <Flex justify="center" mb={8}>
                        <Box bg="gray.100" p={1} rounded="full">
                            <HStack gap={0}>
                                <Button
                                    rounded="full"
                                    px={6}
                                    bg={userType === 'provider' ? 'white' : 'transparent'}
                                    shadow={userType === 'provider' ? 'sm' : 'none'}
                                    color={userType === 'provider' ? '#4241ff' : '#6e6e73'}
                                    onClick={() => setUserType('provider')}
                                    fontWeight="600"
                                    _hover={{ color: userType === 'provider' ? '#4241ff' : '#1d1d1f' }}
                                >
                                    Job Providers
                                </Button>
                                <Button
                                    rounded="full"
                                    px={6}
                                    bg={userType === 'seeker' ? 'white' : 'transparent'}
                                    shadow={userType === 'seeker' ? 'sm' : 'none'}
                                    color={userType === 'seeker' ? '#0071fb' : '#6e6e73'}
                                    onClick={() => setUserType('seeker')}
                                    fontWeight="600"
                                    _hover={{ color: userType === 'seeker' ? '#0071fb' : '#1d1d1f' }}
                                >
                                    Job Seekers
                                </Button>
                            </HStack>
                        </Box>
                    </Flex>
                </Box>

                {/* Dashboard UI */}
                <Flex
                    bg="white"
                    rounded="3xl"
                    shadow="lg"
                    border="1px"
                    borderColor="gray.200"
                    overflow="hidden"
                    minH="650px"
                    flexDirection={{ base: 'column', lg: 'row' }}
                    maxW="7xl"
                    mx="auto"
                >
                    {/* Sidebar */}
                    <Box
                        w={{ base: 'auto', lg: '320px' }}
                        p={6}
                        borderRight="1px"
                        borderColor="gray.200"
                        bg="white"
                        display="flex"
                        flexDirection="column"
                        gap={8}
                    >
                        {/* Quick Actions */}
                        <Box>
                            <HStack mb={4} color={userType === 'provider' ? '#4241ff' : '#0071fb'}>
                                <Icon as={Sparkles} boxSize={5} />
                                <Text fontWeight="700" fontSize="lg" color="#1d1d1f">{currentConfig.sidebarTitle}</Text>
                            </HStack>
                            <VStack align="stretch" gap={3}>
                                {currentConfig.quickActions.map((action, index) => (
                                    <QuickActionButton
                                        key={index}
                                        icon={action.icon}
                                        label={action.label}
                                        colorScheme={action.color}
                                    />
                                ))}
                            </VStack>
                        </Box>
                    </Box>

                    {/* Main Content */}
                    <Box flex={1} display="flex" flexDirection="column" bg="white">
                        {/* Header */}


                        {/* Chat Area */}
                        <Flex
                            flex={1}
                            direction="column"
                            justify="center"
                            align="center"
                            p={10}
                            textAlign="center"
                            bg="white"
                        >
                            <Icon
                                as={Bot}
                                w={20}
                                h={20}
                                color={userType === 'provider' ? 'purple.500' : '#0071fb'}
                                mb={8}
                            />
                            <Text fontSize="2xl" fontWeight="700" mb={4} color="#1d1d1f">
                                {currentConfig.chatTitle}
                            </Text>
                            <Text color="#6e6e73" fontSize="lg" maxW="2xl" mb={10} lineHeight="1.6">
                                {currentConfig.chatSubtitle}
                            </Text>

                            <HStack gap={4} mb={12} wrap="wrap" justify="center">
                                {currentConfig.suggestedActions.map((action, index) => (
                                    <Button
                                        key={index}
                                        colorScheme={userType === 'provider' ? 'purple' : '#bedcffff'}
                                        variant="ghost"
                                        size="lg"
                                        rounded="xl"
                                        bg={userType === 'provider' ? '#bedcffff' : '#bedcffff'}
                                        color={userType === 'provider' ? '#000' : '#000'}
                                    >
                                        <Icon as={action.icon} boxSize={5} mr={2} />
                                        {action.label}
                                    </Button>
                                ))}
                            </HStack>

                            <Text fontSize="sm" color="#6e6e73" display="flex" alignItems="center" gap={2}>
                                <Icon as={AlertCircle} boxSize={4} />
                                Use the suggestions on the left or ask anything below
                            </Text>
                        </Flex>

                        {/* Input Area */}
                        <Box p={6} borderTop="1px" borderColor="gray.100">
                            <HStack gap={4}>
                                <Input
                                    placeholder={currentConfig.inputPlaceholder}
                                    size="lg"
                                    rounded="2xl"
                                    bg="gray.50"
                                    border="none"
                                    _focus={{
                                        bg: 'white',
                                        shadow: 'md',
                                        boxShadow: `0 0 0 2px ${userType === 'provider' ? 'var(--chakra-colors-purple-100)' : 'var(--chakra-colors-teal-100)'}`
                                    }}
                                    h={14}
                                />
                                <Button
                                    w={14}
                                    h={14}
                                    size={{ base: 'sm', md: 'md' }}
                                    borderRadius="full"
                                    background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                                    color="white"
                                    _hover={{
                                        background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                                        opacity: 0.9,
                                    }}
                                    onClick={() => {
                                        window.open('https://app.hirenest.ai', '_blank');
                                    }}
                                >
                                    <Icon as={Send} boxSize={6} />
                                </Button>
                            </HStack>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
