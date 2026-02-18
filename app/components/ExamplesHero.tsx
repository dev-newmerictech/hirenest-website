import { Box, Button, Container, Flex, Heading, Highlight, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { ChevronDown, MoveRight } from "lucide-react";
import Image from "next/image";

export default function ExamplesHero() {
    return (
        <Box
            bgImage="linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('../images/Frame.webp')"
            bgSize="cover"
            as="section"
            minH={{ base: "auto", md: "640px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={-1}
            pt={{ base: 16, md: 28 }}
            pb={{ base: 16 }}
        >
            <Container maxW="8xl" pt={6} flexDirection="row"
            >
                <Flex justifyContent={"center"} flexDirection={'column'} alignItems={"center"} textAlign={"center"} gap={4} pt={8}>
                    <VStack width={{ base: "100%", lg: "70%" }} mt={6}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <VStack display={"flex"} alignItems={"center"} justifyContent={"center"} w="full">
                            <Image src="/seo.svg" alt="Hirenest.ai logo" width={200} height={24} style={{ width: '200px', height: '24px' }} />
                            <Image src="/mask.svg" alt="Decorative underline element" width={100} height={9} style={{ width: '100px', height: '9px' }} />
                        </VStack>
                        <Heading
                            textAlign={"center"}
                            as="h1"
                            fontSize={{ base: "2xl", md: "5xl" }}
                            fontWeight="extrabold"
                            color="gray.900"
                            lineHeight="1.1"
                            fontFamily="var(--font-plus-jakarta-sans)"
                        >
                            <Highlight query="Real SEO Content" styles={{ color: "#4241ff", fontWeight: "800" }} >
                                Learn From Real SEO Content That Actually Ranks
                            </Highlight>
                        </Heading>

                        <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} fontWeight={"500"} mt={5} color="gray.600" textAlign={"center"}>
                            Explore 15+ industry-specific content examples showing you exactly how to structure, optimize, and write SEO content that dominates search results.
                        </Text>

                        <VStack alignItems="center" gap={2} mt={4}>
                            <HStack flexWrap="wrap" justifyContent="center" gap={3}>
                                <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} fontWeight={"600"} color="#4241ff">
                                    ✓ 4000+ word examples
                                </Text>
                                <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} fontWeight={"600"} color="#4241ff">
                                    ✓ Industry-specific templates
                                </Text>
                                <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} fontWeight={"600"} color="#4241ff">
                                    ✓ SEO best practices
                                </Text>
                            </HStack>
                        </VStack>

                        <Text fontSize={{ base: "xs", sm: "md" }} mt={3} color="gray.500" textAlign={"center"}>
                            Used by 2,000+ content creators to master SEO writing
                        </Text>

                        <Stack
                            direction={{ base: "column", sm: "row" }}
                            gap={4}
                            mt={5}
                            align="center"
                            w="full"
                            justifyContent="center"
                        >
                            <Link href="https://app.hirenest.ai/login">
                                <Button
                                    size={{ base: "md", md: "lg" }}
                                    w={{ base: "100%", sm: "280px" }}
                                    bg="#4241ff"
                                    color="white"
                                    rounded="3xl"
                                    _hover={{ bg: "#0353A4", transform: "translateY(-2px)", boxShadow: "lg" }}
                                    transition="all 0.3s"
                                >
                                    Create Your Own Content
                                    <MoveRight />
                                </Button>
                            </Link>
                        </Stack>
                    </VStack>

                    {/* Down bounce arrow */}
                    <Box
                        mt={{ base: 10, md: 8 }}
                        display="flex"
                        justifyContent="center"
                        style={{
                            animation: 'bounceArrow 2s ease-in-out infinite',
                        }}
                    >
                        <style>
                            {`
              @keyframes bounceArrow {
                0%, 20%, 50%, 80%, 100% {
                  transform: translateY(0);
                }
                40% {
                  transform: translateY(-20px);
                }
                60% {
                  transform: translateY(-10px);
                }
              }
            `}
                        </style>
                        <Box
                            as="button"
                            onClick={() => {
                                const examplesSection = document.getElementById('examples');
                                if (examplesSection) {
                                    examplesSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            cursor="pointer"
                            p={3}
                            borderRadius="full"
                            bg="rgba(2, 62, 138, 0.1)"
                            _hover={{ bg: 'rgba(2, 62, 138, 0.2)', transform: 'scale(1.1)' }}
                            transition="all 0.3s"
                            aria-label="Scroll down to examples"
                        >
                            <ChevronDown size={32} color="#4241ff" strokeWidth={2.5} />
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}