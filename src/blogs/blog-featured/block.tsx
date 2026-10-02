import { Avatar, Box, Container, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { ImagePlaceholder } from './image-placeholder'

export const Block = () => {
  return (
    <Container maxW="6xl" py="12">
      <Flex direction={{ base: 'column', md: 'row' }} gap="12" align={{ md: 'center' }}>
        <Box flex="1">
          <ImagePlaceholder minH="xs" rounded="lg" />
        </Box>
        <Stack flex="1" gap="3">
          <HStack color="fg.muted" textStyle="sm">
            <div>September 26, 2024</div>
            <span>•</span>
            <div>10 min read</div>
          </HStack>
          <Heading size="3xl">The Future of AI in Healthcare - Chakra Conference '24</Heading>
          <Text color="fg.muted">
            Learn how AI is transforming healthcare and what it means for the future of medicine in
            the Chakra Conference '24.
          </Text>
          <HStack mt="2">
            <Avatar.Root size="sm">
              <Avatar.Fallback />
              <Avatar.Image src="https://pravatar.cc/150?u=1" />
            </Avatar.Root>
            <Text fontWeight="medium" textStyle="sm">
              John Doe
            </Text>
          </HStack>
        </Stack>
      </Flex>
    </Container>
  )
}
