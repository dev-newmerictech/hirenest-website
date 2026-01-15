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
                                Job Providers
                            </Text>
                        </Flex>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            letterSpacing="tight"
                            color="#000"
                            mb={4}
                            lineHeight={'normal'}
                        >
                            Hire Qualified Candidates Without the <Text as="span" bg="#4241ff" bgClip="text">Guesswork</Text>
                        </Heading>
                        <Text
                            fontSize="lg"
                            color="#6e6e73"
                            lineHeight="1.4"
                            mb={2}
                            maxW="lg"
                        >
                            A bad hire can cost you as much as $50,000. Our AI will help you avoid one.
                        </Text>
                        <Text
                            fontSize="lg"
                            color="#6e6e73"
                            lineHeight="1.4"
                            mb={2}
                            maxW="lg"
                        >Imagine receiving a ranked list of pre-screened candidates for a job you posted, where each one has proven they can do the work. You'd be scheduling interviews with confidence, without crossing your fingers.
                        </Text>
                        <Text
                            fontSize="lg"
                            color="#6e6e73"
                            lineHeight="1.4"
                            mb={10}
                            maxW="lg"
                        >
                            When you automate your hiring process through our AI, your time-to-hire will reduce by ~40%. It’ll evaluate everything and identify the people who can actually perform:

                        </Text>

                        {/* Feature Grid */}
                        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }} gap={8} mb={10}>
                            <Feature
                                icon={Trophy}
                                title="Candidate Ranking "
                                desc="Get applicants ranked by demonstrated skills and assessment performance"
                            />
                            <Feature
                                icon={CheckCircle}
                                title="Skill Verification "
                                desc="Validates abilities with automated assessments across 350+ skills"
                            />
                            <Feature
                                icon={Shield}
                                title="Reduced Bias "
                                desc="Removes the scope for any unconscious bias with structured, skills-based screening"
                            />
                            <Feature
                                icon={BarChart}
                                title="Hiring Analytics "
                                desc="Make better, data-backed decisions that improve with every hire"
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
                            onClick={() => window.open('https://app.hirenest.ai/jobprovider/search-candidates', '_blank')}
                        >
                            Let’s Find the Right Talent
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
                                    src="/job-provider-hero.png"
                                    alt="Job Provider Dashboard"
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
