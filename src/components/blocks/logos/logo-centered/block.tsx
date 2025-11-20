import { Container, HStack, Stack, Text } from '@chakra-ui/react'
import * as logos from './logo-ipsum'

export const Block = () => (
  <Container py="8" maxW="3xl">
    <Stack gap="8">
      <Text
        fontWeight="medium"
        textStyle={{ base: 'md', md: 'lg' }}
        color="fg.muted"
        textAlign="center"
      >
        160,000+ customers on pver 120 compaines hired with Hirenest
      </Text>
      <HStack justify="center" rowGap="8" columnGap="12" wrap="wrap">
        {Object.entries(logos).map(([name, Logo]) => (
          <Logo height="32px" key={name} monochrome />
        ))}
      </HStack>
    </Stack>
  </Container>
)
