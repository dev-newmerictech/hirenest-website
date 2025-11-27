import { Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'

export const Block = () => {
  return (
    <Box bg="#0f2442" w="full">
      <Container py={{ base: '16', md: '20' }} maxW="full">
        <Stack align="center" gap="8">
          <VStack gap="4" textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              color="white"
              maxW="4xl"
            >
              Join the future of hiring and careers
            </Heading>
            <Text
              color="white"
              fontSize={{ base: 'md', md: 'lg' }}
              maxW="2xl"
            >
              One platform, powered by AI Build for your success
            </Text>
          </VStack>
          <HStack
            gap="4"
            flexDirection={{ base: 'column', md: 'row' }}
            w={{ base: 'full', md: 'auto' }}
          >
            <Button
              size={{ base: 'lg', md: 'xl' }}
              variant="outline"
              borderColor="white"
              color="white"
              px="8"
              py="6"
              fontSize={{ base: 'lg' }}
              fontWeight="medium"
              borderRadius="full"
              w={{ base: 'full', md: 'auto' }}
              minW={{ base: 'full', md: '220px' }}
              _hover={{
                bg: 'whiteAlpha.200',
              }}
            >
              Find Your Dream Job
            </Button>
            <Button
              size={{ base: 'lg', md: 'xl' }}
              variant="outline"
              borderColor="white"
              color="white"
              px="8"
              py="6"
              fontSize={{ base: 'lg' }}
              fontWeight="medium"
              borderRadius="full"
              w={{ base: 'full', md: 'auto' }}
              minW={{ base: 'full', md: '220px' }}
              _hover={{
                bg: 'whiteAlpha.200',
              }}
            >
              Hire Smarter Today
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}

