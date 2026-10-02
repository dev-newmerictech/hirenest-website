import { Center, type CenterProps } from '@chakra-ui/react'
import { Image } from 'lucide-react'

export const ImagePlaceholder = (props: CenterProps) => (
  <Center w="full" h="full" bg="bg.muted" color="fg.subtle" {...props}>
    <Image size={48} />
  </Center>
)
