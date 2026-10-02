"use client";

import {
    Box,
    Button,
    Container,
    Heading,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function FeatureSection() {
    return (
        <Box bg="white" py={{ base: 10, md: 10 }} color="gray.800" fontFamily="var(--font-plus-jakarta-sans)" id="Features">
            {/* Hero Section */}
            <Container maxW="6xl" textAlign="center">
                <Text fontSize="xs" color="black" fontWeight="semibold" mb={2} letterSpacing={"2px"}>
                    FEATURES
                </Text>
                <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "5xl" }}
                    fontWeight="medium"
                    mt={4}
                >
                    Powerful Features That{" "}
                    <Text as="span" color="#4241ff" fontWeight={"bold"}>
                        Work For You
                    </Text>
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} mt={3} color="gray.600">
                    Everything you need for content abundance—automated, optimized, and on-brand.
                </Text>
            </Container>

            {/* Section 1 */}
            <Container maxW="6xl" py={8}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="center">
                    <Box
                        // bg="purple.50"
                        p={8}
                        rounded="4xl"
                        textAlign={{ base: "center", md: "left" }}
                        // bgGradient="linear(to-r, #DBEAFE, #89A8D8)"
                        bg="linear-gradient(to right, #d7e7f3ff, white )"
                    >
                        <Heading fontSize="2xl" mb={4} fontWeight={"bold"}>
                            Auto Keyword Research
                        </Heading>
                        <Text mb={6} color="gray.600" fontWeight={"500"} fontSize={"lg"}>
                            Identifies high-value, low-competition keywords in your niche automatically. You're targeting keywords that actually move the needle not guessing or spending 2 hours in Ahrefs. The system analyzes search volume, competition, and relevance to YOUR business.
                        </Text>
                        <Box bg="#89A8D8" rounded={"3xl"} p={"1"} w="fit-content">
                            <Link href="https://app.hirenest.ai/login">
                                <Button colorScheme="purple" rounded={"3xl"} bg="#4241ff">Start for Free →</Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box borderRadius="lg" overflow="hidden">
                        <Image
                            width={500}
                            height={400}
                            alt="Automatically created Content Plan"
                            src="/images/Automate1.webp"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                </SimpleGrid>
            </Container>

            {/* Section 2 */}
            <Container maxW="6xl" py={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="center">
                    <Box borderRadius="xl" overflow="hidden">
                        <Image
                            width={500}
                            height={400}
                            alt="SEO content example"
                            src="/images/create.webp"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                    <Box
                        bg="linear-gradient(to left, #d7e7f3ff, white )"
                        p={8}
                        rounded="4xl"
                        textAlign={{ base: "center", md: "left" }}
                    >
                        <Heading fontSize="2xl" mb={4} fontWeight={"bold"}>
                            Autopilot Publishing
                        </Heading>
                        <Text mb={6} color="gray.600" fontWeight={"500"} fontSize={"lg"}>
                            Publishes articles directly to your WordPress (or other CMS) on your schedule. No copy-pasting. No manual uploads. No forgetting to publish. Articles go live exactly when you want them even if you're offline for a week.
                        </Text>
                        <Box bg="#89A8D8" rounded={"3xl"} p={"1"} w="fit-content">
                            <Link href={"/#examples"}>
                                <Button colorScheme="purple" variant="outline" rounded={"3xl"} bg="white">
                                    Read Examples
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>

            {/* Section 3 */}
            <Container maxW="6xl" py={12} >
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="center">

                    <Box
                        bg="linear-gradient(to right, #d7e7f3ff, white )"
                        p={8}
                        rounded="4xl"
                        textAlign={{ base: "center", md: "left" }}
                    >

                        <Heading fontSize="2xl" mb={4} fontWeight={"bold"}>
                            Brand Kit Voice Matching
                        </Heading>
                        <Text mb={6} color="gray.600" fontWeight={"500"} fontSize={"lg"}>
                            Learns your writing style, vocabulary, tone, and POV from your examples. Articles sound like YOUR brand, not generic AI. This is the difference between content that builds authority and content that gets ignored. Google rewards authentic brand voice (E-E-A-T).
                        </Text>
                        <Box bg="#89A8D8" rounded={"3xl"} p={"1"} w="fit-content">
                            <Link href="https://app.hirenest.ai/login">
                                <Button colorScheme="purple" rounded={"3xl"} bg="#4241ff">Start for Free →</Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box borderRadius="xl" overflow="hidden">
                        <Image
                            width={500}
                            height={400}
                            alt="Mimic your article style"
                            src="/images/article1.webp"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>

                </SimpleGrid>
            </Container>
        </Box>
    );
}