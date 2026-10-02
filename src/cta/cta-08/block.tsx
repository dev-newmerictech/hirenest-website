import { Container, Icon, SimpleGrid, Stack, Text, VStack, Box, Heading } from '@chakra-ui/react'
import { ShieldCheck, TrendingUp, Clock } from 'lucide-react'

export const Block = () => {
  return (
    <Box bg="#4241ff" py="20">
      <Container maxW="6xl">
        <Stack gap="12" textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            color="white"
          >
            Our Promise
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="8">
            {features.map((feature) => (
              <VStack
                key={feature.title}
                gap="6"
                p="8"
                bg="#fff"
                backdropFilter="blur(10px)"
                rounded="2xl"
                textAlign="center"
                border="1px solid"
                borderColor="#89A8D8"
                transition="all 0.3s"
              >
                <Box
                  p="4"
                  bg="#89A8D8"
                  rounded="xl"
                  color="#4241ff"
                >
                  {feature.icon}
                </Box>

                <Stack flex="1" gap="3">
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="#4241ff"
                  >
                    {feature.title}
                  </Text>
                  <Text
                    color="#4241ff"
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="tall"
                  >
                    {feature.description}
                  </Text>
                </Stack>
              </VStack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Your Voice, Protected',
    description: 'Every article will sound like you wrote it. If it doesn\'t, we\'ll rewrite it—no questions asked.',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Rankings That Grow',
    description: 'Our content is optimized for search, not just written. You\'ll see measurable ranking improvements.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Time Reclaimed',
    description: 'Spend your time building, selling, and growing—not writing blog posts.',
  },
]
