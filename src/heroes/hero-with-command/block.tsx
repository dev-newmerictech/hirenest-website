import {
  Badge,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Box,
} from '@chakra-ui/react'
import { Users, FileText, Clock, ChevronDown } from 'lucide-react'

export const Block = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
    >

      <Container maxW="7xl" pt={{ base: '24', md: '32' }} position="relative">
        <Stack gap="10" align="center" textAlign="center">
          <Stack gap="8" maxW={{ md: '4xl' }}>
            <Box>
              <Badge
                size="lg"
                bg="rgba(2, 62, 138, 0.1)"
                color="#4241ff"
                rounded="full"
                alignSelf="center"
                px={6}
                py={2}
                fontWeight="semibold"
                border="1px solid"
                borderColor="rgba(2, 62, 138, 0.2)"
              >
                ✨ Our Journey
              </Badge>
            </Box>

            <Stack gap="6">
              <Heading
                size={{ base: '4xl', md: '6xl' }}
                lineHeight="1.1"
                fontWeight="extrabold"
                letterSpacing="-0.02em"
                as={'h1'}
              >
                The Story Behind{' '}
                <Box
                  as="span"
                  color="#4241ff"
                  position="relative"
                  display="inline-block"
                >
                  Hirenest.ai
                  <Box
                    position="absolute"
                    bottom={{ base: "-4px", md: "-8px" }}
                    left="0"
                    right="0"
                    height={{ base: "3px", md: "4px" }}
                    bg="linear-gradient(90deg, #4241ff 0%, #89A8D8 100%)"
                    borderRadius="full"
                  />
                </Box>
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                maxW="3xl"
                mx="auto"
                lineHeight="tall"
                fontWeight="medium"
              >
                From a founder's frustration to the content autopilot system that's helping{' '}
                <Box as="span" fontWeight="bold" color="#4241ff">2,000+ companies</Box>{' '}
                dominate search—without writing a single word.
              </Text>
            </Stack>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            gap="6"
            w="full"
            maxW="5xl"
          >
            {stats.map((stat, index) => (
              <VStack
                key={stat.label}
                gap="4"
                p="8"
                bg="white"
                rounded="2xl"
                border="1px solid"
                borderColor="gray.200"
                shadow="sm"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: 'translateY(-8px)',
                  shadow: 'xl',
                  borderColor: '#89A8D8',
                }}
                position="relative"
                overflow="hidden"
              >
                {/* Gradient overlay on hover */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  height="4px"
                  bgGradient="linear(to-r, #4241ff, #89A8D8)"
                  opacity="0"
                  transition="opacity 0.3s"
                  _groupHover={{ opacity: 1 }}
                />

                <Box
                  p="4"
                  bg="linear-gradient(135deg, rgba(2, 62, 138, 0.1) 0%, rgba(137, 168, 216, 0.1) 100%)"
                  rounded="xl"
                  color="#4241ff"
                >
                  {stat.icon}
                </Box>

                <Stack gap="1" textAlign="center">
                  <Text
                    fontSize={{ base: '2xl', md: '4xl' }}
                    fontWeight="extrabold"
                    color="#4241ff"
                    letterSpacing="-0.02em"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight="semibold"
                    color="gray.600"
                    textTransform="uppercase"
                    letterSpacing="wider"
                  >
                    {stat.label}
                  </Text>
                </Stack>
              </VStack>
            ))}
          </SimpleGrid>
        </Stack>

        {/* Down bounce arrow */}
        <Box
          mt={{ base: 10, md: 10 }}
          display="flex"
          justifyContent="center"
          style={{
            animation: 'bounceArrow 2s ease-in-out infinite',
          }}
        >
          <style>
            {`
              @keyframes bounceArrow {
                0%, 20%, 50%, 80%, 100% {
                  transform: translateY(0);
                }
                40% {
                  transform: translateY(-20px);
                }
                60% {
                  transform: translateY(-10px);
                }
              }
            `}
          </style>
          <Box
            as="button"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              })
            }}
            cursor="pointer"
            p={3}
            borderRadius="full"
            bg="rgba(2, 62, 138, 0.1)"
            _hover={{ bg: 'rgba(2, 62, 138, 0.2)', transform: 'scale(1.1)' }}
            transition="all 0.3s"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} color="#4241ff" strokeWidth={2.5} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const stats = [
  {
    value: '2,000+',
    label: 'Active Users',
    icon: <Users size={32} strokeWidth={2.5} />,
  },
  {
    value: '60,000+',
    label: 'Articles Published',
    icon: <FileText size={32} strokeWidth={2.5} />,
  },
  {
    value: '18 Months',
    label: 'In Development',
    icon: <Clock size={32} strokeWidth={2.5} />,
  },
]
