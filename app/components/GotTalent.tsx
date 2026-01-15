
'use client'

import { Box, Button, Container, Flex, Grid, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { Sparkles, FileText, Target, TrendingUp } from 'lucide-react'

export const GotTalent = () => {
    return (
        <Box w="full" position="relative" bg="white" overflow="hidden" py={{ base: 20 }}>
            <Container maxW="7xl">
                <Flex direction={{ base: 'column', lg: 'row' }} align="center" gap={{ base: 16, lg: 24 }}>
                    {/* Left Content */}
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
                                Job Seekers
                            </Text>
                        </Flex>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            letterSpacing="normal"
                            color="#000"
                            mb={4}
                            lineHeight={'normal'}
                        >
                            Stop Sending Applications into the <Text as="span" bg="#4241ff" bgClip="text">Void</Text>
                        </Heading>
                        <Text
                            fontSize="lg"
                            color="#6e6e73"
                            lineHeight="1.4"
                            mb={2}
                            maxW="lg"
                        >
                            Ever wondered why your applications disappear without a response?
                        </Text>
                        <Text
                            fontSize="lg"
                            color="#6e6e73"
                            lineHeight="1.4"
                            mb={2}
                            maxW="lg"
                        >
                            What if your next job found you because of what you can do, not what you wrote on paper?
                        </Text>
                        <Text
                            fontSize="lg"
                            color="#6e6e73"
                            lineHeight="1.4"
                            mb={2}
                            maxW="lg"
                        >
                            We've rebuilt job searching from the ground up because the old way doesn't work well today.
                        </Text>
                        <Text
                            fontSize="lg"
                            color="#6e6e73"
                            lineHeight="1.4"
                            mb={10}
                            maxW="lg"
                        >
                            What this means is you wouldn’t have to worry about your applications vanishing.
                        </Text>

                        {/* Feature Grid */}
                        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }} gap={8} mb={10}>
                            <Feature
                                icon={Sparkles}
                                title="AI Career Matcher "
                                desc="Get matched with roles based on your validated skills and career goals."
                            />
                            <Feature
                                icon={FileText}
                                title="Smart Resume Builder "
                                desc="Create ATS-friendly resumes that stand out to both algorithms and hiring managers."
                            />
                            <Feature
                                icon={Target}
                                title="Application Tracking "
                                desc="Monitor every application status in real-time so you always know where you stand, with no stress or anxiety."
                            />
                            <Feature
                                icon={TrendingUp}
                                title="Career Insights "
                                desc="Get data-driven advice, ranging from negotiating better salaries to advancing faster in your career."
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
                            onClick={() => window.open('https://app.hirenest.ai/jobseeker/find-jobs', '_blank')}
                        >
                            Get Matched with Your Dream Job
                        </Button>
                    </Box>

                    {/* Right Visual */}
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
                                // transform="rotate(-3deg) translateX(-20px)"
                                transition="all 0.5s ease"
                            // _hover={{ transform: "rotate(-2deg) translateX(-20px) translateY(-5px)" }}
                            >
                                <Image
                                    src="/smart_job_matching_hero.png"
                                    alt="AI Career Matcher"
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
            bg="#f5f5f7"
            color="#4241ff"
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
