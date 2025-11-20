import { Box, Button, Container, Flex, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export const GotTalent = () => (
    <Box
        w="full"
        position="relative"
        bg="rgba(248, 248, 248, 1)"
    >
        <Container py={{ base: '16' }} maxW="7xl" position="relative">
            <VStack alignItems="flex-start" mb={16}>
                <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '34px' }}
                    fontWeight="600"
                    color="rgba(42, 63, 94, 1)"
                >
                    Got Talent?
                </Heading>
                <Text
                    fontSize={{ base: 'md', md: '5xl' }}
                    fontWeight="700"
                    color="rgba(42, 63, 94, 1)"
                >
                    Why job seekers love us
                </Text>
            </VStack>
            <Flex flexDirection="column" alignItems="flex-start" w="full">
                <Flex alignItems="center" justifyContent="between" w="full" mb={16}>
                    <VStack alignItems="flex-start" flex={1}>
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '3xl' }}
                            fontWeight="600"
                            color="rgba(0, 0, 0, 1)"
                        >
                            AI Career Matcher
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', md: '2xl' }}
                            fontWeight="500"
                            color="rgba(42, 63, 94, 1)"
                            lineHeight="1.5"
                        >
                            Instantly discover jobs that fit your skills and goals.
                        </Text>
                    </VStack>
                    <VStack flex={1} alignItems="flex-end">
                        <Image src="/Group 140.svg" alt="AI Career Matcher" width={500} height={300} />
                    </VStack>
                </Flex>
                <Flex alignItems="center" justifyContent="between" w="full" mb={16}>
                    <VStack alignItems="flex-start" flex={1}>
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '3xl' }}
                            fontWeight="600"
                            color="rgba(0, 0, 0, 1)"
                        >
                            Smart Resume Builder
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', md: '2xl' }}
                            fontWeight="500"
                            color="rgba(42, 63, 94, 1)"
                            lineHeight="1.5"
                        >
                            Build a standout, ATS-friendly resume.
                        </Text>
                    </VStack>
                    <VStack flex={1} alignItems="center" position={'relative'}>
                        <Image src="/Frame 189.svg" alt="AI Career Matcher" width={200} height={150} style={{ position: 'absolute', top: 22, left: 122 }} />
                        <Box ml={{ base: '0', md: '140px' }}>

                            <Image src="/Upload resume.svg" alt="AI Career Matcher" width={250} height={250} />
                        </Box>
                        <Image src="/Frame 189 (1).svg" alt="AI Career Matcher" width={200} height={150} style={{ position: 'absolute', bottom: 22, right: 2 }} />
                    </VStack>
                </Flex>

                <Flex alignItems="center" justifyContent="between" w="full">
                    <VStack alignItems="flex-start" flex={1}>
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '3xl' }}
                            fontWeight="600"
                            color="rgba(0, 0, 0, 1)"
                        >
                            Career insights Dashbaord
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', md: '2xl' }}
                            fontWeight="500"
                            color="rgba(42, 63, 94, 1)"
                            lineHeight="1.5"
                        >
                            Track your progress, get learning suggestions.
                        </Text>
                    </VStack>
                    <VStack flex={1} alignItems="flex-end" position={'relative'}>
                        <Image src="/Group 144.svg" alt="AI Career Matcher" width={400} height={350} />
                    </VStack>
                </Flex>
            </Flex>
        </Container>
    </Box>
)
