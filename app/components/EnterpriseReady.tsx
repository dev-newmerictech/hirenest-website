'use client'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Flex, Badge, Button, Stack } from '@chakra-ui/react';
import { ShieldCheck, Scale, Network, CheckCircle2, Star, ArrowRight } from 'lucide-react';

export const EnterpriseReady = () => {
    return (
        <Box py={{ base: 16 }} bg="#0f2442" position="relative">
            <Container maxW="7xl">
                <VStack gap={4} textAlign="center">
                    <Box mx={'auto'} mb={0}>

                        <Text
                            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                            fontWeight="600"
                            color="#4241ff"
                            textTransform="uppercase"
                            letterSpacing="wider"
                            mb={3}
                        >
                            Enterprise
                        </Text>
                    </Box>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="800"
                        letterSpacing="tight"
                        color="#fff"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                    >
                        Enterprise-Ready <Text as="span" display="block" color="#fff">
                            Platform
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color="#fff" maxW="3xl">
                        Built for scale, security, and seamless integration with your existing tools
                    </Text>
                    
                    <Stack direction={{ base: 'column', sm: 'row' }} justifyContent="center" gap={4} w="full">
                        <Button
                            _hover={{

                                background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            }}
                            transition="all 0.3s"
                            size={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
                            borderRadius="full"
                            background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                            color="white"
                            minW={{ base: '80px', md: '250px' }}
                            onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
                            cursor={'pointer'}
                        >
                            Get Started Free
                            <Box as={ArrowRight} ml={1} />
                        </Button>
                    </Stack>
                </VStack>
            </Container>
        </Box>
    );
};
