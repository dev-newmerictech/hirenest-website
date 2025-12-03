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
    Grid,
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
            sidebarTitle: 'Quick Actions',
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
            headerGradient: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
            headerTitle: 'AI Assistant',
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
            sidebarTitle: 'Quick Actions',
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
            headerGradient: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
            headerTitle: 'AI Assistant',
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
        <Box pt={{ base: 16, md: 16 }} bg="white" position="relative" overflow="hidden">
            {/* Background Gradients */}
            <Container maxW="7xl" position="relative">
                {/* Section Header */}
                <Box textAlign="center" mb={10}>
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
                <Box
                    bg="white"
                    rounded="3xl"
                    // shadow="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    overflow="hidden"
                    maxW="7xl"
                    mx="auto"
                >
                    <Grid templateColumns={{ base: '1fr', lg: '280px 1fr' }} gap={0}>
                        {/* Sidebar */}
                        <Box
                            p={6}
                            borderRight={{ base: 'none', lg: '1px solid #e7e7e7' }}
                            borderBottom={{ base: '1px solid', lg: 'none' }}
                            borderColor="gray"
                            bg="white"
                            display="flex"
                            flexDirection="column"
                            gap={6}
                        >
                            {/* Quick Actions */}
                            <Box>
                                <HStack mb={4}>
                                    <Icon as={Sparkles} boxSize={5} color="#4241ff" />
                                    <Text fontWeight="700" fontSize="md" color="#1d1d1f">{currentConfig.sidebarTitle}</Text>
                                </HStack>
                                <VStack align="stretch" gap={2}>
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

                            {/* AI Capabilities Card */}
                            <Box
                                background="linear-gradient(135deg, #4241ff 0%, #b000ea 100%)"
                                p={5}
                                rounded="2xl"
                                color="white"
                            >
                                <HStack mb={4}>
                                    <Icon as={Sparkles} boxSize={5} />
                                    <Text fontWeight="700" fontSize="md">AI Capabilities</Text>
                                </HStack>
                                <VStack align="stretch" gap={3}>
                                    {currentConfig.capabilities.map((capability, index) => (
                                        <HStack key={index} align="start">
                                            <Icon as={Check} boxSize={4} mt={0.5} flexShrink={0} />
                                            <Text fontSize="sm" lineHeight="1.5">{capability}</Text>
                                        </HStack>
                                    ))}
                                </VStack>
                            </Box>
                        </Box>

                        {/* Main Content */}
                        <Box display="flex" flexDirection="column" bg="white">
                            {/* Gradient Header */}
                            <Box
                                background={currentConfig.headerGradient}
                                p={6}
                                color="white"
                            >
                                <Flex justify="space-between" align="center">
                                    <Box>
                                        <Text fontSize="xl" fontWeight="700" mb={1}>
                                            {currentConfig.headerTitle}
                                        </Text>
                                        <Text fontSize="sm" opacity={0.9}>
                                            {currentConfig.headerSubtitle}
                                        </Text>
                                    </Box>
                                    <Flex
                                        align="center"
                                        gap={2}
                                        bg="white"
                                        px={4}
                                        py={2}
                                        rounded="full"
                                        backdropFilter="blur(10px)"
                                    >
                                        <Box w={2} h={2} bg="green" rounded="full" />
                                        <Text fontSize="sm" color="green" fontWeight="600">Online</Text>
                                    </Flex>
                                </Flex>
                            </Box>

                            {/* Chat Area */}
                            <Flex
                                flex={1}
                                direction="column"
                                justify="center"
                                align="center"
                                p={{ base: 8, md: 12 }}
                                textAlign="center"
                                bg="gray.50"
                                minH="500px"
                            >
                                <Flex
                                    w={20}
                                    h={20}
                                    align="center"
                                    justify="center"
                                    rounded="2xl"
                                    bg={currentConfig.headerGradient}
                                    mb={6}
                                    shadow="lg"
                                >
                                    <Icon as={Bot} boxSize={10} color="white" />
                                </Flex>
                                <Text fontSize="2xl" fontWeight="700" mb={4} color="#1d1d1f">
                                    {currentConfig.chatTitle}
                                </Text>
                                <Text color="#6e6e73" fontSize="lg" maxW="2xl" mb={10} lineHeight="1.6">
                                    {currentConfig.chatSubtitle}
                                </Text>

                                <HStack gap={3} mb={10} wrap="wrap" justify="center">
                                    {currentConfig.suggestedActions.map((action, index) => (
                                        <Button
                                            key={index}
                                            variant="ghost"
                                            size="md"
                                            rounded="xl"
                                            bg="white"
                                            color="#1d1d1f"
                                            border="1px solid"
                                            borderColor="gray.200"
                                            _hover={{ borderColor: '#4241ff', bg: 'gray.50' }}
                                            px={5}
                                        >
                                            <Icon as={action.icon} boxSize={4} mr={2} color="#4241ff" />
                                            {action.label}
                                        </Button>
                                    ))}
                                </HStack>

                                <Flex align="center" gap={2} color="#6e6e73" fontSize="sm">
                                    <Icon as={AlertCircle} boxSize={4} />
                                    <Text>Use the suggestions on the left or ask anything below</Text>
                                </Flex>
                            </Flex>

                            {/* Input Area */}
                            <Box p={6} borderTop="1px solid" borderColor="gray.200" bg="white">
                                <HStack gap={3}>
                                    <Input
                                        placeholder={currentConfig.inputPlaceholder}
                                        size="lg"
                                        rounded="full"
                                        bg="gray.50"
                                        border="1px solid"
                                        borderColor="gray.200"
                                        _focus={{
                                            bg: 'white',
                                            borderColor: '#4241ff',
                                            boxShadow: '0 0 0 1px #4241ff'
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
                                        <Icon as={Send} boxSize={5} />
                                    </Button>
                                </HStack>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
