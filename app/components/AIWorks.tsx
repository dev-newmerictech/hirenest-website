'use client'
import { Box, Container, Heading, Text, VStack, Icon, SimpleGrid, Flex, HStack, Badge, Progress } from '@chakra-ui/react';
import { FileText, TrendingUp, ShieldAlert, Search, Sparkles, Check } from 'lucide-react';

export const AIWorks = () => {
    return (
        <Box pb={{ base: 20 }} bg="#fff" position="relative" overflow="hidden">
            <Container maxW="7xl">
                <VStack gap={{ base: 12 }}>
                    {/* Header */}
                    <VStack textAlign="center" maxW="7xl" mx="auto">
                        <Text fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
                            mb={1}
                        >
                            Intelligent Matching System
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="800"
                            color="#1d1d1f"
                            lineHeight="1.1"
                            letterSpacing="tight"
                            mb={4}
                        >
                            The Technology Driving Better{' '}
                            <Text as="span" color="#4241ff">Hiring Decisions</Text>
                        </Heading>

                        <Text fontSize={{ base: 'lg', md: 'xl' }} color="#6e6e73" maxW="6xl">What if you could predict which candidate will succeed before you make an offer?

                            Our multi-agent AI system will process, parse and score all the resumes before predicting their job success and selecting the right talent for you.

                            From assessment design to performance prediction, you’ll experience hiring powered by an intelligent matching system.
                        </Text>
                    </VStack>

                    {/* Bento Grid */}
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} w="full">

                        {/* Card 1: Predictive Scoring (Large) */}
                        <Box
                            gridColumn={{ md: 'span 2' }}
                            bg="white"
                            borderRadius="3xl"
                            p={8}
                            position="relative"
                            overflow="hidden"
                            border="1px solid"
                            borderColor="gray.100"
                            boxShadow="sm"
                            _hover={{ boxShadow: '2xl', transform: 'translateY(-4px)' }}
                            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                        >
                            <HStack justify="space-between" align="flex-start" mb={8}>
                                <VStack align="flex-start" gap={2}>
                                    <Flex align="center" gap={2}>
                                        <Icon as={TrendingUp} color="#4241ff" />
                                        <Heading fontSize={{ base: 'lg', md: 'xl' }} fontWeight={'600'} color="#1d1d1f">Predictive Scoring </Heading>
                                    </Flex>
                                    <Text color="#6e6e73" fontSize={{ base: 'md', md: 'lg' }} >Our AI system predicts candidate success with 98.5% accuracy.</Text>
                                </VStack>
                            </HStack>

                            {/* UI Mockup */}
                            <HStack gap={4} align="stretch">
                                <Box flex={1} bg="#f5f5f7" p={4} borderRadius="xl">
                                    <HStack mb={3}>
                                        <Box w={8} h={8} borderRadius="full" bg="gray.200" />
                                        <Box>
                                            <Box w="80px" h="3px" bg="gray.300" borderRadius="full" mb={1} />
                                            <Box w="50px" h="3px" bg="gray.200" borderRadius="full" />
                                        </Box>
                                        <Badge ml="auto" fontSize={'sm'} colorPalette="green" variant="solid" borderRadius="full">98% Match</Badge>
                                    </HStack>
                                    <VStack align="stretch" gap={2}>
                                        <Box>
                                            <Flex justify="space-between" mb={1}><Text fontSize="sm" fontWeight="600">Skills</Text><Text fontSize="xs">9.8/10</Text></Flex>
                                            <Progress.Root value={98} size="xs" colorPalette="blue">
                                                <Progress.Track borderRadius="full">
                                                    <Progress.Range borderRadius="full" />
                                                </Progress.Track>
                                            </Progress.Root>
                                        </Box>
                                        <Box>
                                            <Flex justify="space-between" mb={1}><Text fontSize="sm" fontWeight="600">Experience</Text><Text fontSize="xs">9.5/10</Text></Flex>
                                            <Progress.Root value={95} size="xs" colorPalette="purple">
                                                <Progress.Track borderRadius="full">
                                                    <Progress.Range borderRadius="full" />
                                                </Progress.Track>
                                            </Progress.Root>
                                        </Box>
                                    </VStack>
                                </Box>
                                <Box flex={1} bg="#f5f5f7" p={4} borderRadius="xl" display={{ base: 'none', sm: 'block' }}>
                                    <HStack mb={3}>
                                        <Box w={8} h={8} borderRadius="full" bg="gray.200" />
                                        <Box>
                                            <Box w="80px" h="3px" bg="gray.300" borderRadius="full" mb={1} />
                                            <Box w="50px" h="3px" bg="gray.200" borderRadius="full" />
                                        </Box>
                                        <Badge ml="auto" fontSize={'sm'} colorPalette="blue" variant="subtle" borderRadius="full">85% Match</Badge>
                                    </HStack>
                                    <VStack align="stretch" gap={2}>
                                        <Box>
                                            <Flex justify="space-between" mb={1}><Text fontSize="sm" fontWeight="600">Skills</Text><Text fontSize="xs">8.5/10</Text></Flex>
                                            <Progress.Root value={85} size="xs" colorPalette="blue">
                                                <Progress.Track borderRadius="full">
                                                    <Progress.Range borderRadius="full" />
                                                </Progress.Track>
                                            </Progress.Root>
                                        </Box>
                                        <Box>
                                            <Flex justify="space-between" mb={1}><Text fontSize="sm" fontWeight="600">Experience</Text><Text fontSize="xs">8.2/10</Text></Flex>
                                            <Progress.Root value={82} size="xs" colorPalette="purple">
                                                <Progress.Track borderRadius="full">
                                                    <Progress.Range borderRadius="full" />
                                                </Progress.Track>
                                            </Progress.Root>
                                        </Box>
                                    </VStack>
                                </Box>
                            </HStack>
                        </Box>

                        {/* Card 2: Resume Parsing (Tall) */}
                        <Box
                            gridRow={{ md: 'span 2' }}
                            bg="#1d1d1f"
                            borderRadius="3xl"
                            p={8}
                            position="relative"
                            overflow="hidden"
                            boxShadow="xl"
                            _hover={{ transform: 'translateY(-4px)', boxShadow: '2xl' }}
                            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                        >
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                w="full"
                                h="full"
                                bg="radial-gradient(circle at top right, rgba(66,65,255,0.4), transparent 50%), radial-gradient(circle at bottom left, rgba(176,0,234,0.2), transparent 50%)"
                            />

                            <VStack align="flex-start" gap={6} position="relative" h="full">
                                <Box p={3} bg="rgba(255,255,255,0.1)" borderRadius="xl">
                                    <Icon as={FileText} color="white" boxSize={6} />
                                </Box>
                                <Box>
                                    <Heading fontSize={{ base: 'lg', md: 'xl' }} fontWeight={'600'} color="white" mb={2}>Smart Parsing</Heading>
                                    <Text color="#a1a1a6" fontSize={{ base: 'md', md: 'lg' }}>
                                        Instantly extracts and structures data from any resume format, saving hours of manual work
                                    </Text>
                                </Box>

                                {/* Visual */}
                                <Box
                                    w="full"
                                    flex={1}
                                    bg="rgba(255,255,255,0.05)"
                                    borderRadius="xl"
                                    p={4}
                                    border="1px solid"
                                    borderColor="rgba(255,255,255,0.1)"
                                >
                                    <HStack mb={4}>
                                        <Box w={8} h={10} bg="white" borderRadius="sm" opacity={0.8} />
                                        <VStack align="flex-start" gap={1}>
                                            <Box w="20" h="2px" bg="gray.500" borderRadius="full" />
                                            <Box w="12" h="2px" bg="gray.600" borderRadius="full" />
                                        </VStack>
                                        <Icon as={Check} color="#4bb756" ml="auto" />
                                    </HStack>
                                    <Flex wrap="wrap" gap={2}>
                                        {['React', 'Node.js', 'TypeScript', 'AWS', 'Python', 'React', 'Node.js', 'TypeScript', 'AWS', 'Python', 'React', 'Node.js', 'TypeScript', 'AWS', 'Python', 'React', 'Node.js', 'TypeScript', 'AWS', 'Python'].map((tag, index) => (
                                            <Badge key={`${tag}-${index}`} bg="#fff" fontSize={'sm'} color="#4241ff" borderRadius="md" px={2} py={1}>
                                                {tag}
                                            </Badge>
                                        ))}
                                    </Flex>
                                </Box>
                            </VStack>
                        </Box>

                        {/* Card 3: Semantic Search */}
                        <Box
                            bg="white"
                            borderRadius="3xl"
                            p={8}
                            border="1px solid"
                            borderColor="gray.100"
                            boxShadow="sm"
                            _hover={{ boxShadow: 'xl', transform: 'translateY(-2px)' }}
                            transition="all 0.3s"
                        >
                            <VStack align="flex-start" gap={4}>
                                <Flex align="center" gap={2}>
                                    <Icon as={Search} color="#b000ea" />
                                    <Heading fontSize={{ base: 'lg', md: 'xl' }} fontWeight={'600'} color="#1d1d1f">Semantic Search</Heading>
                                </Flex>
                                <Text color="#6e6e73" fontSize={{ base: 'md', md: 'lg' }}>Find candidates by skills and concepts, not just keywords</Text>

                                {/* Visual */}
                                <Box w="full" bg="#f5f5f7" p={4} borderRadius="xl">
                                    <HStack bg="white" p={3} borderRadius="full" boxShadow="sm" mb={4} justify="space-between">
                                        <HStack gap={3}>
                                            <Icon as={Search} boxSize="16px" color="gray.400" />
                                            <Text fontSize="sm" color="gray.500">"Senior dev with fintech exp"</Text>
                                        </HStack>
                                        <Box w={6} h={6} borderRadius="full" bg="#b000ea" display="flex" alignItems="center" justifyContent="center">
                                            <Icon as={Search} boxSize="10px" color="white" />
                                        </Box>
                                    </HStack>
                                    <VStack gap={2}>
                                        <HStack w="full">
                                            <Box w={8} h={8} borderRadius="full" bg="purple.100" />
                                            <Box w="full">
                                                <Box w="60%" h="2px" bg="gray.300" mb={1} borderRadius="full" />
                                                <Box w="40%" h="2px" bg="gray.200" borderRadius="full" />
                                            </Box>
                                        </HStack>
                                        <HStack w="full">
                                            <Box w={8} h={8} borderRadius="full" bg="blue.100" />
                                            <Box w="full">
                                                <Box w="50%" h="2px" bg="gray.300" mb={1} borderRadius="full" />
                                                <Box w="30%" h="2px" bg="gray.200" borderRadius="full" />
                                            </Box>
                                        </HStack>
                                    </VStack>
                                </Box>
                            </VStack>
                        </Box>

                        {/* Card 4: Bias Detection */}
                        <Box
                            bg="white"
                            borderRadius="3xl"
                            p={8}
                            border="1px solid"
                            borderColor="gray.100"
                            boxShadow="sm"
                            _hover={{ boxShadow: 'xl', transform: 'translateY(-2px)' }}
                            transition="all 0.3s"
                        >
                            <VStack align="flex-start" gap={4}>
                                <Flex align="center" gap={2}>
                                    <Icon as={ShieldAlert} color="#ff4242" />
                                    <Heading fontSize={{ base: 'lg', md: 'xl' }} fontWeight={'600'} color="#1d1d1f">Bias Detection</Heading>
                                </Flex>
                                <Text color="#6e6e73" fontSize={{ base: 'md', md: 'lg' }}>Real-time monitoring to ensure skills-based decisions, not subjective preferences</Text>

                                {/* Visual */}
                                <HStack w="full" bg="red.50" p={4} borderRadius="xl" border="1px solid" borderColor="red.100">
                                    <Flex
                                        w={8}
                                        h={8}
                                        align="center"
                                        justify="center"
                                        borderRadius="full"
                                        bg="white"
                                        color="red.500"
                                        boxShadow="sm"
                                    >
                                        <Icon as={ShieldAlert} boxSize="14px" />
                                    </Flex>
                                    <VStack align="flex-start" gap={0}>
                                        <Text fontSize="sm" fontWeight="700" color="#1d1d1f">Bias Detected</Text>
                                        <Text fontSize="sm" color="gray.500">Pattern flagged in description</Text>
                                    </VStack>
                                </HStack>
                                <HStack w="full" bg="red.50" p={4} borderRadius="xl" border="1px solid" borderColor="red.100">
                                    <Flex
                                        w={8}
                                        h={8}
                                        align="center"
                                        justify="center"
                                        borderRadius="full"
                                        bg="white"
                                        color="red.500"
                                        boxShadow="sm"
                                    >
                                        <Icon as={ShieldAlert} boxSize="14px" />
                                    </Flex>
                                    <VStack align="flex-start" gap={0}>
                                        <Text fontSize="sm" fontWeight="700" color="#1d1d1f">Bias Detected</Text>
                                        <Text fontSize="sm" color="gray.500">Pattern flagged in description</Text>
                                    </VStack>
                                </HStack>
                            </VStack>
                        </Box>

                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
};
