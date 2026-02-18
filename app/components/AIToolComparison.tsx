
"use client";

import * as React from "react";
import { CircleCheckBig, TrendingUp, CheckCircle2, XCircle, Clock, Sparkles } from "lucide-react";
import { Box, Container, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";

export default function AIToolComparison() {
    const tools = [
        {
            name: "ChatGPT Plus",
            rankingSuccess: "12%",
            editingTime: "3.5 hrs",
            qualityScore: "6/10",
            color: "#10a37f",
            bgGradient: "linear(to-br, rgba(16,163,127,0.05), rgba(16,163,127,0.02))",
            status: "failed"
        },
        {
            name: "Jasper.ai",
            rankingSuccess: "19%",
            editingTime: "2.8 hrs",
            qualityScore: "7/10",
            color: "#8b5cf6",
            bgGradient: "linear(to-br, rgba(139,92,246,0.05), rgba(139,92,246,0.02))",
            status: "failed"
        },
        {
            name: "Hirenest.ai",
            rankingSuccess: "70%",
            editingTime: "11 min",
            qualityScore: "9/10",
            color: "#4241ff",
            bgGradient: "linear(to-br, rgba(2,62,138,0.08), rgba(2,62,138,0.03))",
            status: "winner",
            badge: "The Realization"
        }
    ];

    return (
        <Box
            as="section"
            position="relative"
            py={{ base: 16 }}
            bgGradient="linear(to-b, white 0%, #f8fafc 50%, white 100%)"
            overflow="hidden"
        >
            {/* Decorative background elements */}
            <Box
                position="absolute"
                top="20%"
                right="-10%"
                width="500px"
                height="500px"
                bgGradient="radial(circle, rgba(2,62,138,0.06), transparent 70%)"
                filter="blur(60px)"
                pointerEvents="none"
            />
            <Box
                position="absolute"
                bottom="20%"
                left="-10%"
                width="500px"
                height="500px"
                bgGradient="radial(circle, rgba(2,62,138,0.04), transparent 70%)"
                filter="blur(60px)"
                pointerEvents="none"
            />

            <Container maxW="8xl" position="relative" zIndex={1}>
                <VStack gap={{ base: 8 }} alignItems="center">
                    {/* Section Header */}
                    <VStack gap={4} textAlign="center">
                        <Heading
                            as="h2"
                            fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
                            fontWeight="900"
                            lineHeight="1.2"
                            fontFamily="var(--font-plus-jakarta-sans)"
                            letterSpacing="-0.02em"
                            color="gray.900"
                        >
                            We Tested Every Major AI Tool
                            <br />
                            <Text as="span" color="#4241ff">
                                (So You Don't Have To)
                            </Text>
                        </Heading>
                    </VStack>

                    {/* Comparison Cards */}
                    <Box width="full" maxW="7xl">
                        <Flex
                            direction={{ base: "column", lg: "row" }}
                            gap={{ base: 6, md: 8 }}
                            alignItems="stretch"
                            justifyContent="center"
                        >
                            {tools.map((tool, index) => (
                                <Box
                                    key={tool.name}
                                    flex="1"
                                    position="relative"
                                    bg="white"
                                    border="3px solid"
                                    borderColor={tool.status === "winner" ? tool.color : "gray.200"}
                                    rounded="3xl"
                                    p={{ base: 6, md: 8 }}
                                    transition="all 0.3s"
                                >
                                    {/* Animated gradient background */}
                                    <Box
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        right="0"
                                        bottom="0"
                                        bgGradient={tool.status === "winner"
                                            ? "linear(to-br, rgba(2,62,138,0.03), transparent, rgba(2,62,138,0.05))"
                                            : "linear(to-br, rgba(0,0,0,0.01), transparent)"
                                        }
                                        opacity={1}
                                        pointerEvents="none"
                                        animation={tool.status === "winner" ? "shimmerBg 3s ease-in-out infinite" : "none"}
                                    />

                                    <style>
                                        {`
                                            @keyframes shimmerBg {
                                                0%, 100% { opacity: 0.5; }
                                                50% { opacity: 1; }
                                            }
                                            @keyframes slideIn {
                                                from { width: 0; }
                                                to { width: var(--progress-width); }
                                            }
                                        `}
                                    </style>

                                    {/* Top gradient bar */}
                                    <Box
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        right="0"
                                        height="6px"
                                        bgGradient={tool.status === "winner"
                                            ? `linear(to-r, ${tool.color}, #0077B6, ${tool.color})`
                                            : `linear(to-r, ${tool.color}, ${tool.color})`
                                        }
                                        opacity={tool.status === "winner" ? 1 : 0.4}
                                        borderTopRadius="3xl"
                                    />

                                    {/* Winner Badge */}
                                    {tool.badge && (
                                        <Box
                                            position="absolute"
                                            top="-18px"
                                            left="50%"
                                            transform="translateX(-50%)"
                                            bg={tool.color}
                                            color="white"
                                            px={6}
                                            py={2}
                                            rounded="full"
                                            fontSize="sm"
                                            fontWeight="900"
                                            letterSpacing="wide"
                                            textTransform="uppercase"
                                            w="max-content"
                                        >
                                            <HStack gap={2}>
                                                <Sparkles size={16} />
                                                <Text>{tool.badge}</Text>
                                            </HStack>
                                        </Box>
                                    )}

                                    {/* Status Badge */}
                                    <Box
                                        position="absolute"
                                        top={{ base: 4, md: 6 }}
                                        right={{ base: 4, md: 6 }}
                                        bg={tool.status === "winner" ? "green.50" : "red.50"}
                                        border="2px solid"
                                        borderColor={tool.status === "winner" ? "green.200" : "red.200"}
                                        rounded="full"
                                        p={2}
                                    >
                                        {tool.status === "winner" ? (
                                            <CheckCircle2 size={20} color="#10b981" strokeWidth={3} />
                                        ) : (
                                            <XCircle size={20} color="#ef4444" strokeWidth={3} />
                                        )}
                                    </Box>

                                    <VStack gap={6} alignItems="stretch"
                                        position="relative" zIndex={1}>
                                        {/* Tool Name */}
                                        <Heading
                                            as="h3"
                                            fontSize={{ base: "2xl" }}
                                            fontWeight="700"
                                            color="gray.900"
                                            textAlign="center"
                                            lineHeight="1.2"
                                            mt={2}
                                        >
                                            {tool.name}
                                        </Heading>

                                        {/* Ranking Success with Progress Bar */}
                                        <Box
                                            bg={tool.status === "winner" ? "rgba(2,62,138,0.05)" : "gray.50"}
                                            border="2px solid"
                                            borderColor={tool.status === "winner" ? "rgba(2,62,138,0.1)" : "gray.100"}
                                            rounded="2xl"
                                            p={5}
                                        >
                                            <HStack justifyContent="space-between" mb={3}>
                                                <HStack gap={2}>
                                                    <TrendingUp
                                                        size={18}
                                                        color={tool.status === "winner" ? tool.color : "#6b7280"}
                                                    />
                                                    <Text
                                                        fontSize="sm"
                                                        fontWeight="700"
                                                        color={tool.status === "winner" ? tool.color : "gray.600"}
                                                        textTransform="uppercase"
                                                        letterSpacing="wider"
                                                    >
                                                        Ranking Success
                                                    </Text>
                                                </HStack>
                                                <Text
                                                    fontSize={{ base: "2xl", md: "3xl" }}
                                                    fontWeight="black"
                                                    color={tool.status === "winner" ? tool.color : "gray.700"}
                                                    lineHeight="1"
                                                >
                                                    {tool.rankingSuccess}
                                                </Text>
                                            </HStack>

                                            {/* Animated Progress Bar */}
                                            <Box
                                                width="full"
                                                height="12px"
                                                bg="gray.200"
                                                rounded="full"
                                                overflow="hidden"
                                                position="relative"

                                            >
                                                <Box
                                                    height="full"
                                                    position="absolute"
                                                    zIndex={2}
                                                    bgGradient={tool.status === "winner"
                                                        ? `linear(to-r, #0077B6, #0077B6)`
                                                        : `linear(to-r, ${tool.color}, ${tool.color})`
                                                    }
                                                    rounded="full"
                                                    style={{
                                                        '--progress-width': tool.rankingSuccess,
                                                        animation: 'slideIn 1.5s ease-out forwards',
                                                        width: tool.rankingSuccess,
                                                        backgroundColor: tool.color
                                                    } as React.CSSProperties}
                                                />
                                            </Box>
                                        </Box>

                                        {/* Metrics Grid */}
                                        <Flex gap={3} direction={{ base: "column", md: "row" }}>
                                            {/* Editing Time */}
                                            <Box
                                                flex="1"
                                                bg="white"
                                                border="2px solid"
                                                borderColor="gray.100"
                                                rounded="xl"
                                                p={4}
                                                transition="all 0.3s"
                                                _hover={{
                                                    borderColor: tool.color,
                                                    transform: "translateY(-2px)",
                                                }}
                                            >
                                                <HStack gap={2} mb={2}>
                                                    <Clock size={16} color="#6b7280" />
                                                    <Text
                                                        fontSize="xs"
                                                        fontWeight="700"
                                                        color="gray.500"
                                                        textTransform="uppercase"
                                                        letterSpacing="wide"
                                                    >
                                                        Editing Time
                                                    </Text>
                                                </HStack>
                                                <Text
                                                    fontSize={{ base: "xl", md: "2xl" }}
                                                    fontWeight="900"
                                                    color={tool.status === "winner" ? tool.color : "gray.800"}
                                                    lineHeight="1"
                                                >
                                                    {tool.editingTime}
                                                </Text>
                                            </Box>

                                            {/* Quality Score */}
                                            <Box
                                                flex="1"
                                                bg="white"
                                                border="2px solid"
                                                borderColor="gray.100"
                                                rounded="xl"
                                                p={4}
                                                transition="all 0.3s"
                                                _hover={{
                                                    borderColor: tool.color,
                                                    transform: "translateY(-2px)",
                                                }}
                                            >
                                                <HStack gap={2} mb={2}>
                                                    <CircleCheckBig size={16} color="#6b7280" />
                                                    <Text
                                                        fontSize="xs"
                                                        fontWeight="700"
                                                        color="gray.500"
                                                        textTransform="uppercase"
                                                        letterSpacing="wide"
                                                    >
                                                        Quality Score
                                                    </Text>
                                                </HStack>
                                                <Text
                                                    fontSize={{ base: "xl", md: "2xl" }}
                                                    fontWeight="900"
                                                    color={tool.status === "winner" ? tool.color : "gray.800"}
                                                    lineHeight="1"
                                                >
                                                    {tool.qualityScore}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </VStack>
                                </Box>
                            ))}
                        </Flex>
                    </Box>

                    {/* The Realization Quote */}
                    <Box
                        maxW="6xl"
                        width="full"
                        position="relative"
                        overflow="hidden"
                        mt={2}
                    >

                        <VStack gap={6} position="relative" zIndex={1}>
                            <Text
                                fontSize={{ base: "xl", md: "2xl" }}
                                fontWeight="600"
                                color="gray.900"
                                lineHeight="1.6"
                                textAlign="center"
                            >
                                "The ChatGPT realization:{" "}
                                <Text as="span" color="#4241ff" fontWeight="800">
                                    Single AI models optimize for sounding smart.
                                </Text>{" "}
                                <Text as="span" color="#4241ff" fontWeight="800">
                                    Multi-agent systems optimize for ranking and converting.
                                </Text>
                                "
                            </Text>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};