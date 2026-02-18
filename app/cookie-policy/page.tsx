import { Metadata } from 'next'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { pageMetadata } from '../lib/metadata';
import { CookiePolicyStructuredData } from './structured-data';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata.cookiePolicy;

export default function CookiePolicyPage() {
    return (
        <Box bg="gray.100" pb={{ base: '16' }} pt={{ base: '24', md: '32' }} borderBottom={'2px solid #fff'}>
            <CookiePolicyStructuredData />
            <Container maxW="4xl">
                <VStack alignItems="flex-start" gap={8}>
                    <Heading as="h1" fontWeight="800" fontSize={{ base: '3xl', md: '4xl' }} color="#4241ff">
                        Cookie Policy
                    </Heading>

                    <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
                        Last Updated: November 21, 2025
                    </Text>

                    <VStack alignItems="flex-start" gap={6}>
                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3} fontWeight="800">
                                1. What Are Cookies
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                Cookies are small text files that are placed on your device when you visit our website.
                                They help us provide you with a better experience by remembering your preferences and
                                understanding how you use our site.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3} fontWeight="800">
                                2. Types of Cookies We Use
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8" mb={3}>
                                We use the following types of cookies:
                            </Text>
                            <Box as="ul" pl={6} color="gray.700" fontSize={{ base: 'md', md: 'lg' }}>
                                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                            </Box>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3} fontWeight="800">
                                3. How We Use Cookies
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                We use cookies to improve your experience on our site, analyze site traffic, personalize
                                content, and remember your login information. Cookies also help us understand which
                                features are most popular and how we can improve our services.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3} fontWeight="800">
                                4. Third-Party Cookies
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                We may use third-party services such as Google Analytics that also place cookies on your
                                device. These cookies help us analyze website traffic and improve our services. Third
                                parties have their own privacy policies governing their use of cookies.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3} fontWeight="800">
                                5. Managing Cookies
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                You can control and manage cookies through your browser settings. Most browsers allow
                                you to refuse or accept cookies, delete existing cookies, or set preferences for certain
                                websites. Please note that disabling cookies may affect the functionality of our site.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3} fontWeight="800">
                                6. Contact Us
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                If you have any questions about our use of cookies, please contact us at
                                privacy@hirenest.com
                            </Text>
                        </Box>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
