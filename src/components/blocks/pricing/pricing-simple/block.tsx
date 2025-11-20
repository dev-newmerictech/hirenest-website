import { Box, Container, For, Grid, Stack, VStack } from '@chakra-ui/react'
import { PageHeader } from './page-header'
import { plans } from './data'
import { PricingCard } from './pricing-card'

export const Block = () => {
  return (
    <Box bg="rgba(249, 249, 249, 1)" mx="auto">

    <Container maxW="6xl" py={{ base: '12' }}>
      <VStack gap="16">
        <PageHeader
          textAlign="center"
          align="center"
          headline="Find Your Perfect Job"
          description="No hidden costs, just real opportunities."
        />
        <Grid w="full" templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap="6">
          <For each={plans}>
            {(plan) => (
              <PricingCard key={plan.value} colorPalette={plan.colorPalette} data={plan} />
            )}
          </For>
        </Grid>
      </VStack>
    </Container>
    </Box>
  )
}
