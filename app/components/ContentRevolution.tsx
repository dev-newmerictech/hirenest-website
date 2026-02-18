import { Badge, Text, Box, Container, Heading, Highlight, HStack, VStack, Flex, Link, ButtonGroup, Button } from "@chakra-ui/react";
import { ChevronDown, MoveRight, TrendingUp } from "lucide-react";

export default function ContentRevolution() {
    return (
        <Box
            as="section"
            position="relative"
            py={{ base: 16 }}
            bgGradient="linear(to-br, #f8f9fa 0%, #ffffff 50%, #f0f4f8 100%)"
            overflow="hidden"
        >
            {/* Animated gradient orbs */}
            <Box
                position="absolute"
                top="-10%"
                right="-5%"
                width={{ base: "400px", md: "800px" }}
                height={{ base: "400px", md: "800px" }}
                bgGradient="radial(circle, rgba(2,62,138,0.08) 0%, rgba(0,119,182,0.03) 40%, transparent 70%)"
                borderRadius="50%"
                filter="blur(40px)"
                pointerEvents="none"
                animation="float 20s ease-in-out infinite"
            />
            <Box
                position="absolute"
                bottom="-10%"
                left="-5%"
                width={{ base: "400px", md: "800px" }}
                height={{ base: "400px", md: "800px" }}
                bgGradient="radial(circle, rgba(2,62,138,0.06) 0%, rgba(0,119,182,0.02) 40%, transparent 70%)"
                borderRadius="50%"
                filter="blur(40px)"
                pointerEvents="none"
                animation="float 25s ease-in-out infinite reverse"
            />
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                width={{ base: "300px", md: "600px" }}
                height={{ base: "300px", md: "600px" }}
                bgGradient="radial(circle, rgba(0,119,182,0.04) 0%, transparent 70%)"
                borderRadius="50%"
                filter="blur(60px)"
                pointerEvents="none"
                animation="pulse 15s ease-in-out infinite"
            />

            {/* Keyframe animations */}
            <style>
                {`
                    @keyframes float {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        33% { transform: translate(30px, -30px) rotate(120deg); }
                        66% { transform: translate(-20px, 20px) rotate(240deg); }
                    }
                    @keyframes pulse {
                        0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
                        50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
                    }
                    @keyframes shimmer {
                        0% { background-position: -1000px 0; }
                        100% { background-position: 1000px 0; }
                    }
                `}
            </style>

            <Container maxW="8xl" position="relative" zIndex={1}>
                <VStack gap={12} alignItems="center">
                    {/* Header Section */}
                    <VStack gap={4} maxW="6xl" textAlign="center">
                        <Badge
                            bg="rgba(2,62,138,0.1)"
                            color="#4241ff"
                            px={4}
                            py={2}
                            rounded="full"
                            fontSize={{ base: "xs", md: "sm" }}
                            fontWeight="600"
                            letterSpacing="wide"
                            textTransform="uppercase"
                        >
                            <HStack gap={2}>
                                <TrendingUp size={16} />
                                <Text>Market Alert</Text>
                            </HStack>
                        </Badge>

                        <Heading
                            as="h1"
                            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                            fontWeight="extrabold"
                            lineHeight="1.1"
                            fontFamily="var(--font-plus-jakarta-sans)"
                        >
                            <Highlight
                                query="You're Missing"
                                styles={{ color: "#4241ff" }}
                            >
                                The Content Revolution You're Missing
                            </Highlight>
                            <br />
                            <Text
                                as="span"
                                fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                                color="gray.700"
                            >
                                (And Your Competitors Aren't)
                            </Text>
                        </Heading>

                        <Text
                            fontSize={{ base: "lg", md: "xl" }}
                            color="gray.600"
                            fontWeight="500"
                            maxW="3xl"
                            mt={2}
                        >
                            The Search Landscape Just Shifted. Most Businesses Don't Even Know It Yet.
                        </Text>
                    </VStack>

                    {/* Stat Card */}
                    <Box
                        bg="white"
                        border="2px solid"
                        borderColor="#4241ff"
                        rounded="3xl"
                        p={{ base: 8 }}
                        maxW="3xl"
                        width="full"
                        position="relative"
                        overflow="hidden"
                        boxShadow="0 20px 60px rgba(2,62,138,0.15)"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-8px)",
                            boxShadow: "0 30px 80px rgba(2,62,138,0.25)",
                        }}
                    >
                        {/* Gradient overlay */}
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            right="0"
                            height="4px"
                            bgGradient="linear(to-r, #4241ff, #0077B6, #4241ff)"
                        />

                        <VStack gap={0}>
                            <Flex direction={{ base: "column", md: "row" }} justifyContent="center" alignItems="center" mb={4}>
                                <Box
                                    display="inline-flex"
                                    alignItems="baseline"
                                    justifyContent="center"
                                >
                                    <Text
                                        fontSize={{ base: "5xl", md: "7xl" }}
                                        fontWeight="black"
                                        color="#4241ff"
                                        lineHeight="1"
                                        letterSpacing="-0.02em"
                                    >
                                        59
                                    </Text>
                                    <Text
                                        fontSize={{ base: "5xl", md: "7xl" }}
                                        fontWeight="black"
                                        color="#4241ff"
                                        lineHeight="1"
                                    >
                                        %
                                    </Text>
                                </Box>

                                <Text
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    fontWeight="600"
                                    color="gray.700"
                                    textAlign="center"
                                    lineHeight="1.4"
                                >
                                    of Google searches now end{" "}
                                    <Text as="span" color="#4241ff" fontWeight="bold">
                                        without a click
                                    </Text>
                                </Text>
                            </Flex>

                            <Box
                                w="full"
                                h="1px"
                                bg="gray.200"
                                my={2}
                            />

                            <Text
                                fontSize={{ base: "sm", md: "md" }}
                                color="gray.500"
                                textAlign="center"
                                fontStyle="italic"
                                mt={3}
                            >
                                Don't let your content get lost in the void
                            </Text>
                        </VStack>
                    </Box>

                    {/* CTA Button */}
                    <Link href="https://app.hirenest.ai/login">
                        <Button
                            className="primary-cta-btn"
                            size="lg"
                            px={10}
                            py={7}
                            bg="#4241ff"
                            color="white"
                            rounded="full"
                            fontSize={{ base: "lg", md: "xl" }}
                            fontWeight="bold"
                            position="relative"
                            overflow="hidden"
                            _hover={{
                                boxShadow: "0 10px 40px rgba(2,62,138,0.3)",
                            }}
                            _active={{
                                transform: "scale(0.98)",
                            }}
                            transition="all 0.2s"
                        >
                            <HStack gap={3}>
                                <Text>Generate Your First Article</Text>
                                <Box
                                    bg="white"
                                    color="#4241ff"
                                    px={3}
                                    py={1}
                                    rounded="full"
                                    fontSize={{ base: "md", md: "lg" }}
                                    fontWeight="black"
                                >
                                    $5
                                </Box>
                                <MoveRight />
                            </HStack>
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </Box>
    );
}