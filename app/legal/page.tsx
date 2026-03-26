import { Metadata } from 'next'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { pageMetadata } from '../lib/metadata';
import { LegalStructuredData } from './structured-data';
import Link from 'next/link';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata.legal;

export default function LegalPage() {
    return (
        <Box bg="gray.100" pb={{ base: '16' }} pt={{ base: '24', md: '32' }} borderBottom={'2px solid #fff'}>
            <LegalStructuredData />
            <Container maxW="4xl">
                <VStack alignItems="flex-start" gap={8}>
                    <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} color="#4241ff">
                        Legal Information
                    </Heading>

                    <VStack alignItems="flex-start" gap={4}>
                        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                            Welcome to Hirenest's legal information page. Here you can find important legal documents
                            and policies that govern your use of our platform.
                        </Text>

                        <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mt={4}>
                            Company Information
                        </Heading>
                        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                            Hirenest is a leading AI-powered recruitment platform connecting job seekers with employers.
                            Our platform is designed to streamline the hiring process and help both candidates and
                            companies find their perfect match.
                        </Text>

                        <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mt={4}>
                            Legal Documents
                        </Heading>
                        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                            Please review our legal documents to understand your rights and responsibilities when using
                            Hirenest:
                        </Text>
                        <Box as="ul" pl={6} color="gray.700" fontSize={{ base: 'md', md: 'lg' }}>
                            <li>Privacy Policy - How we collect, use, and protect your data</li>
                            <li>Terms of Service - Rules and guidelines for using our platform</li>
                            <li>Refund Policy - Information about refunds and cancellations</li>
                            <li>Cookie Policy - How we use cookies and tracking technologies</li>
                            <li>Security - Our commitment to keeping your information safe</li>
                        </Box>

                        <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mt={4}>
                            Contact Us
                        </Heading>
                        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                            If you have any questions about our legal policies, please contact our legal team at{' '}
                            <Link href="mailto:hello@hirenest.ai" color="blue.500">
                                hello@hirenest.ai
                            </Link>
                        </Text>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
