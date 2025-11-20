import { Box, Button, Container, Flex, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export const NeedTalent = () => (
    <Box
        w="full"
        position="relative"
        bg="rgba(239, 239, 239, 1)"
    >
        <Container py={{ base: '16' }} maxW="7xl" position="relative">
            <VStack alignItems="flex-start" mb={16}>
                <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '34px' }}
                    fontWeight="600"
                    color="rgba(42, 63, 94, 1)"
                >
                    Need talent?
                </Heading>
                <Text
                    fontSize={{ base: 'md', md: '5xl' }}
                    fontWeight="700"
                    color="rgba(42, 63, 94, 1)"
                >
                    Why recruiters love us
                </Text>
            </VStack>
            <Flex flexDirection="column" alignItems="flex-start" w="full">
                <Flex alignItems="center" justifyContent="between" w="full" mb={16}>
                    <VStack flex={1} alignItems="flex-start">
                        <Image src="/Group 145.svg" alt="AI Career Matcher" width={500} height={300} />
                    </VStack>
                    <VStack alignItems="flex-start" flex={1}>
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '3xl' }}
                            fontWeight="600"
                            color="rgba(0, 0, 0, 1)"
                        >
                            AI Candidate Ranking
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', md: '2xl' }}
                            fontWeight="500"
                            color="rgba(42, 63, 94, 1)"
                            lineHeight="1.5"
                        >
                            Instantly see top-fit, skill-verified candidates.
                        </Text>
                    </VStack>
                </Flex>
                <Flex alignItems="center" justifyContent="between" w="full" mb={16}>
                    <VStack flex={1} alignItems="flex-start" position={'relative'}>
                        <Box>

                            <Image src="/Group 151.svg" alt="AI Career Matcher" width={350} height={250} />
                        </Box>
                    </VStack>
                    <VStack alignItems="flex-start" flex={1}>
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '3xl' }}
                            fontWeight="600"
                            color="rgba(0, 0, 0, 1)"
                        >
                            Assessment-Based Hiring
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', md: '2xl' }}
                            fontWeight="500"
                            color="rgba(42, 63, 94, 1)"
                            lineHeight="1.5"
                        >
                            Hire based on real skills, not keywords.
                        </Text>
                    </VStack>
                </Flex>

                <Flex alignItems="center" justifyContent="between" w="full">
                    <VStack flex={1} alignItems="flex-start" position={'relative'}>
                        <Image src="/Group 152.svg" alt="AI Career Matcher" width={400} height={350} />
                    </VStack>
                    <VStack alignItems="flex-start" flex={1}>
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '3xl' }}
                            fontWeight="600"
                            color="rgba(0, 0, 0, 1)"
                        >
                            Analytics Dashboard
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', md: '2xl' }}
                            fontWeight="500"
                            color="rgba(42, 63, 94, 1)"
                            lineHeight="1.5"
                        >
                            See hiring metrics, cost-savings, and diversity insights.
                        </Text>
                    </VStack>
                </Flex>
            </Flex>
        </Container>
    </Box>
)
