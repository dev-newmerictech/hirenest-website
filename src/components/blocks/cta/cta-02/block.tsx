import { Box, Button, Container, Heading, Stack, VStack } from '@chakra-ui/react'

export const Block = () => {
  return (
    <Box bg="#0f2442" w="full">
      <Container py={{ base: '16', md: '20' }} maxW="full">
        <Stack align="center" gap="8">
          <VStack gap="6" textAlign="center">
            <Heading
              as="h2"
              size={{ base: '3xl', md: '4xl' }}
              color="white"
              maxW="4xl"
            >
              Experience how AI transforms your career or hiring process.
            </Heading>
          </VStack>
          <Button
            size={{ base: 'lg', md: 'xl' }}
            background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
            color="white"
            px="12"
            py="6"
            fontSize={{ base: 'lg' }}
            fontWeight="medium"
            borderRadius="full"
            w={{ base: 'full', sm: 'auto' }}
            maxW={{ base: 'full', sm: '400px' }}
            _hover={{
              background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
              opacity: 0.9,
            }}
          >
            Get Started Free
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
