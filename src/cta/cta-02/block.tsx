import { Badge, Button, Container, Heading, Stack, Text, VStack, HStack, Flex, Box, Link } from '@chakra-ui/react'
import { ArrowRight, MoveRight } from 'lucide-react'

export const Block = () => {
  return (
    <Container py="16" maxW="5xl" bg="white">
      <Stack align="center" gap="8">
        <VStack gap="3" textAlign="center">
          <Heading as="h2" size="5xl" color="#000" fontWeight="bold">
            Join Us on This Journey
          </Heading>
          <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
            Be part of the next generation of content marketing. Start your autopilot today and reclaim 120+ hours per month.
          </Text>
        </VStack>
        <Box bg="#89A8D8" rounded="3xl" p="1" w={{ base: "fit-content", sm: "fit-content" }} display={'flex'} justifyContent={'center'} >
          <Link href="https://app.hirenest.ai/login">
            <Button
              size={{ base: "md", md: "lg" }}
              w={{ base: "100%", sm: "280px" }}
              bg="#4241ff"
              color="white"
              rounded="3xl"
              _hover={{ bg: "#4241ff" }}
              transition="all 0.2s"

            >

              Start Your Content Autopilot

              <MoveRight />


            </Button>
          </Link>
        </Box>
        <Flex
          wrap="wrap"
          gap="2"
          justify="center"
          align="center"
        >
          <Badge fontSize={{ base: "md", md: "lg" }} variant="subtle" colorScheme="blue" rounded="full" px={4} py={1}>
            $150/month
          </Badge>
          <Badge fontSize={{ base: "md", md: "lg" }} variant="subtle" colorScheme="blue" rounded="full" px={4} py={1}>
            30 articles
          </Badge>
          <Badge fontSize={{ base: "md", md: "lg" }} variant="subtle" colorScheme="blue" rounded="full" px={4} py={1}>
            Your authentic voice
          </Badge>
          <Badge fontSize={{ base: "md", md: "lg" }} variant="subtle" colorScheme="blue" rounded="full" px={4} py={1}>
            Cancel anytime
          </Badge>
        </Flex>
      </Stack>
    </Container>
  )
}
