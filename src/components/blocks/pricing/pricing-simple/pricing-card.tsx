import {
  Badge,
  Button,
  Flex,
  For,
  HStack,
  List,
  Span,
  Stack,
  type StackProps,
} from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'
import type { PlanData } from './data'

interface PricingCardProps extends StackProps {
  data: PlanData
}

export const PricingCard = (props: PricingCardProps) => {
  const { data, ...rest } = props
  return (
    <Stack
      p="8"
      borderWidth="1px"
      gap="7"
      bg={data.recommended ? 'linear-gradient(180deg, #E2D8F9 0%, #FFFFFF 100%)' : 'rgba(255, 255, 255, 1)'}
      pos="relative"
      flex="1"
      rounded="20px"
      align={{ base: 'center', md: 'stretch' }}
      {...rest}
    >
      {data.recommended && <Badge position="absolute" top="0" left="50%" transform="translate(-50%, -50%)" variant="solid" color="white" bg="rgba(66, 65, 255, 1)" w="fit-content" rounded="20px 20px" px="4" py="2">Recommended</Badge>}
      <HStack fontWeight="700" fontSize="24px" color="rgba(66, 65, 255, 1)" justify="space-between">
        {data.title}
      </HStack>
      <Flex gap="1">
        <Span fontSize="24px" lineHeight="1" fontWeight="700" color="rgba(42, 63, 94, 1)">
          {data.priceSymbol}
          {data.price}
        </Span>
        /
        <Span fontSize="24px" lineHeight="1" fontWeight="400" color="rgba(42, 63, 94, 1)" textTransform="capitalize">
          {data.priceUnit}
        </Span>
      </Flex>
      {data.extraline && <Span fontSize="16px" lineHeight="1" fontWeight="400" color="rgba(42, 63, 94, 1)" textTransform="capitalize">{data.extraline}</Span>}
      <List.Root variant="plain" align="center" textStyle="sm" gap="5">
        <For each={data.features}>
          {(item) => (
            <List.Item fontSize="16px" lineHeight="normal" fontWeight="400" color="rgba(42, 63, 94, 1)" alignItems="flex-start" key={item}>
              <List.Indicator p={0.5} w="20px" h="20px" asChild color="rgba(0, 168, 81, 1)" border="1px solid rgba(0, 168, 81, 1)" rounded="50%">
                <LuCheck />
              </List.Indicator>
              {item}
            </List.Item>
          )}
        </For>
      </List.Root>
      <Button
        mt={data.value === 'free' ? '70px' : data.value === 'pro' ? '25px' : '1'}
        size={{ base: 'md', md: 'xl' }}
        borderRadius="full"
        background={data.recommended ? 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)' : 'transparent'}
        color={data.recommended ? 'white' : 'rgba(66, 65, 255, 1)'}
        fontWeight="medium"
        border={!data.recommended ? '1px solid rgba(66, 65, 255, 1)' : 'none'}
      >
        {data.buttonText}
      </Button>
    </Stack>
  )
}
