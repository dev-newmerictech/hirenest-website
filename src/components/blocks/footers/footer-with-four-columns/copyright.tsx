import { Text, type TextProps, Stack, Badge, HStack } from '@chakra-ui/react'

export const Copyright = (props: TextProps) => {
  return (
    <Stack gap="3" align={{ base: 'center', md: 'flex-start' }}>
      <Text fontSize="sm" color="fg.muted" {...props}>
        &copy; {new Date().getFullYear()} Microlabs.co | All products built and owned by TinyCheque
      </Text>
      <HStack gap="3" flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
        <Badge variant="subtle" colorPalette="green" size="sm">
          99.9% Uptime SLA
        </Badge>
        <Badge variant="subtle" colorPalette="blue" size="sm">
          GDPR Compliant
        </Badge>
        <Badge variant="subtle" colorPalette="gray" size="sm">
          Bank-Grade Encryption
        </Badge>
      </HStack>
    </Stack>
  )
}
