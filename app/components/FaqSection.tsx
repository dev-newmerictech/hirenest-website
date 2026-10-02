"use client";

import { Accordion, Box, Container, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

// Helper to parse text and convert links like "Refund Policy" to clickable links
const parseAnswer = (answer: string): React.ReactNode => {
  const parts = answer.split(/(Refund Policy|Privacy Policy|Terms of Service|Affiliate Policy)/);
  return parts.map((part, index) => {
    if (part === "Refund Policy") {
      return <ChakraLink asChild key={index} color="#4241ff" textDecoration="underline"><NextLink href="/refund">{part}</NextLink></ChakraLink>;
    }
    if (part === "Privacy Policy") {
      return <ChakraLink key={index} href="https://docs.hirenest.ai/privacy" color="#4241ff" textDecoration="underline">{part}</ChakraLink>;
    }
    if (part === "Terms of Service") {
      return <ChakraLink key={index} href="https://docs.hirenest.ai/terms" color="#4241ff" textDecoration="underline">{part}</ChakraLink>;
    }
    if (part === "Affiliate Policy") {
      return <ChakraLink key={index} href="https://docs.hirenest.ai/affiliate" color="#4241ff" textDecoration="underline">{part}</ChakraLink>;
    }
    return part;
  });
};

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  line?: string;
  subtitle?: string;
}

export default function FaqSection({ faqs, line, subtitle }: FaqSectionProps) {
  return (
    <Box
      bg="white"
      py={{ base: 10, md: 16 }}
      color="gray.800"
      fontFamily="var(--font-plus-jakarta-sans)"
      id="Features"
    >
      {/* Heading Section */}
      <Container maxW="6xl" textAlign="center" px={{ base: 4, sm: 6, lg: 12 }} py={6}>
        <Text
          fontSize="xs"
          color="black"
          fontWeight="semibold"
          mb={2}
          letterSpacing={"2px"}
        >
          FAQ
        </Text>

        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="800"
          lineHeight="1.2"
        >
          {line ? line : "Questions? We've Got You Covered"}
        </Heading>

        <Text fontSize={{ base: "md", md: "lg" }} mt={3} color="gray.600">
          {subtitle ? subtitle : "Real answers to the questions founders actually ask about automated content and Google penalties."}
        </Text>
      </Container>

      {/* Accordion */}
      <Accordion.Root collapsible maxW={"4xl"} mx="auto" mt={10}>
        {faqs.map((faq, index) => (
          <Accordion.Item key={index} border="none" mb={4} value={`${index}`}>
            <h2>
              <Accordion.ItemTrigger
                bg="gray.50"
                _hover={{ bg: "gray.100" }}
                borderRadius="md"
                px={4}
                py={3}
                cursor={"pointer"}
              >
                <Box flex="1" textAlign="left" fontWeight="semibold" fontSize={{ base: "md", md: "lg" }}>
                  {faq.question}
                </Box>
                <Accordion.ItemIndicator cursor={"pointer"} />
              </Accordion.ItemTrigger>
            </h2>

            <Accordion.ItemContent
              px={4}
              py={2}
              bg="gray.50"
              borderRadius="md"
              fontSize={{ base: "sm", md: "md" }}
              color="gray.700"
              lineHeight="1.6"
            >
              {parseAnswer(faq.answer)}
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  );
}