'use client'

import { Box, Button, Container, Flex, Grid, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { Trophy, CheckCircle, Shield, BarChart } from 'lucide-react'

export const NeedTalent = () => {
    return (
        <Box w="full" position="relative" bg="#F5F5F7" overflow="hidden" py={{ base: 20, md: 32 }}>
            <Container maxW="7xl">
                <Flex direction={{ base: 'column', lg: 'row-reverse' }} align="center" gap={{ base: 16, lg: 24 }}>
                    {/* Right Content */}
                    <Box flex={1}>

                        <Flex align="center" gap={2} mb={0}>

                            <Text
                                fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                                fontWeight="600"
                                color="#4241ff"
                                textTransform="uppercase"
                                letterSpacing="wider"
                                mb={3}
                            >
                                For Employers
                            </Text>
                        </Flex>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            letterSpacing="tight"
                            color="#000"
                            mb={4}
                        >
                            Hire the top 1% <Text as="span" bg="#4241ff" bgClip="text">effortlessly.</Text>
                        </Heading>
                        <Text
                            fontSize="lg"
                            color="#6e6e73"
                            lineHeight="1.6"
                            mb={10}
                            maxW="lg"
                        >
                            Streamline your hiring pipeline with AI. Identify the best candidates instantly and reduce time-to-hire by 50%.
                        </Text>

                        {/* Feature Grid */}
                        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }} gap={8} mb={10}>
                            <Feature
                                icon={Trophy}
                                title="Top Talent Ranking"
                                desc="Instantly identify the best candidates based on skills and experience."
                            />
                            <Feature
                                icon={CheckCircle}
                                title="Skill Verification"
                                desc="Validate candidate abilities with automated technical assessments."
                            />
                            <Feature
                                icon={Shield}
                                title="Unbiased Hiring"
                                desc="Remove unconscious bias from your screening process automatically."
                            />
                            <Feature
                                icon={BarChart}
                                title="Hiring Analytics"
                                desc="Track your funnel performance and optimize your recruitment ROI."
                            />
                        </Grid>

                        <Button
                            size="lg"
                            h="14"
                            px="8"
                            fontSize="md"
                            borderRadius="full"
                            background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                            color="white"
                            minW={{ base: '80px', md: '220px' }}
                            _hover={{
                                background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                                opacity: 0.9,
                            }}
                            transition="all 0.3s"
                            onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
                        >
                            Start Hiring Now
                        </Button>
                    </Box>

                    {/* Left Visual */}
                    <Box flex={1} position="relative" w="full">
                        {/* Glow Effect */}
                        <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            w="120%"
                            h="120%"
                            bgGradient="radial(#4241ff33, transparent 70%)"
                            filter="blur(60px)"
                            zIndex={0}
                        />

                        {/* Layered Images */}
                        <Box position="relative" zIndex={1}>
                            {/* Back Image */}
                            <Box
                                borderRadius="2xl"
                                overflow="hidden"
                                boxShadow="2xl"
                                bg="white"
                            >
                                <Image
                                    src="/ai-candidate-ranking-ui.png"
                                    alt="AI Candidate Ranking"
                                    width={600}
                                    height={400}
                                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

const Feature = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <VStack align="flex-start" gap={3}>
        <Flex
            w={10}
            h={10}
            align="center"
            justify="center"
            borderRadius="lg"
            bg="white"
            color="#4241ff"
            boxShadow="sm"
        >
            <Icon as={icon} boxSize={5} />
        </Flex>
        <VStack align="flex-start" gap={1}>
            <Text fontWeight="700" fontSize="md" color="#1d1d1f">
                {title}
            </Text>
            <Text fontSize="md" color="#6e6e73" lineHeight="1.5">
                {desc}
            </Text>
        </VStack>
    </VStack>
)
