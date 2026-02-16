'use client'

import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Flex,
    Icon,
} from '@chakra-ui/react'

interface SeoContentSectionProps {
    badge?: string | React.ReactNode
    title: string
    description?: string
    children: React.ReactNode
    bgColor?: string
    maxWidth?: string
}

export const SeoContentSection = ({
    badge,
    title,
    description,
    children,
    bgColor = 'white',
    maxWidth = 'container.xl'
}: SeoContentSectionProps) => (
    <Box pb={{ base: 16, md: 20 }} position="relative">
        <Container maxW={maxWidth}>
            {/* Section Header */}
            <VStack mb={12} textAlign="center">
                {badge && (
                    <Text
                        fontSize="sm"
                        fontWeight="600"
                        color="#4241ff"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        mb={4}
                    >
                        {badge}
                    </Text>
                )}
                <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl' }}
                    fontWeight="800"
                    color="#1d1d1f"
                    lineHeight="1.1"
                    letterSpacing="tight"
                    mb={description ? 6 : 0}
                >
                    {title}
                </Heading>
                {description && (
                    <Text
                        fontSize={{ base: 'lg', md: 'xl' }}
                        color="#6e6e73"
                        maxW="4xl"
                        lineHeight="1.6"
                    >
                        {description}
                    </Text>
                )}
            </VStack>

            {children}
        </Container>
    </Box>
)

interface SeoCardProps {
    icon?: React.ElementType
    title: string
    description: string
    index?: number
}

export const SeoCard = ({ icon: Icon, title, description, index }: SeoCardProps) => (
    <Box
        bg="rgba(66, 65, 255, 0.03)"
        p={8}
        borderRadius="xl"
        borderWidth="1px"
        borderColor="rgba(66, 65, 255, 0.1)"
        _hover={{
            transform: 'translateY(-4px)',
            boxShadow: 'lg',
            borderColor: 'rgba(66, 65, 255, 0.3)',
        }}
        transition="all 0.3s"
        height="full"
    >
        {Icon && (
            <Box
                bg="linear-gradient(135deg, #4241ff 0%, #b000ea 100%)"
                w={12}
                h={12}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={4}
            >
                <Icon color="white" boxSize={6} />
            </Box>
        )}
        {index !== undefined && (
            <Text
                fontSize="4xl"
                fontWeight="800"
                bgGradient="linear(to-r, #4241ff, #b000ea)"
                bgClip="text"
                mb={4}
            >
                {String(index + 1).padStart(2, '0')}
            </Text>
        )}
        <Heading
            as="h3"
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="700"
            mb={3}
            color="#000"
        >
            {title}
        </Heading>
        <Text
            color="#000"
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight="1.6"
        >
            {description}
        </Text>
    </Box>
)

interface SeoCardGridProps {
    children: React.ReactNode
    columns?: any
}

export const SeoCardGrid = ({ children, columns = { base: 1, md: 3 } }: SeoCardGridProps) => (
    <SimpleGrid columns={columns} gap={8}>
        {children}
    </SimpleGrid>
)

interface SeoListItemProps {
    question: string
    answer: string
    index: number
}

export const SeoListItem = ({ question, answer, index }: SeoListItemProps) => (
    <Box
        bg="white"
        p={6}
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.200"
        _hover={{
            borderColor: 'rgba(66, 65, 255, 0.3)',
            boxShadow: 'md',
        }}
        transition="all 0.2s"
    >
        <Heading
            as="h3"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="700"
            color="#1d1d1f"
            mb={3}
            display="flex"
            alignItems="flex-start"
            gap={3}
        >
            <Text
                as="span"
                bg="#4241ff"
                bgClip="text"
                fontWeight="800"
                flexShrink={0}
            >
                Q{index}.
            </Text>
            {question}
        </Heading>
        <Text
            color="#6e6e73"
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight="1.7"
            pl={8}
        >
            {answer}
        </Text>
    </Box>
)

interface SeoKeywordBadgeProps {
    keyword: string
    category?: string
}

export const SeoKeywordBadge = ({ keyword, category }: SeoKeywordBadgeProps) => (
    <Box
        bg="rgba(66, 65, 255, 0.08)"
        px={4}
        py={2}
        borderRadius="full"
        borderWidth="1px"
        borderColor="rgba(66, 65, 255, 0.2)"
        display="inline-block"
        m={1}
        _hover={{
            bg: 'rgba(66, 65, 255, 0.15)',
            borderColor: 'rgba(66, 65, 255, 0.4)',
            transform: 'translateY(-2px)',
        }}
        transition="all 0.2s"
    >
        <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="600"
            color="#1d1d1f"
        >
            {keyword}
        </Text>
    </Box>
)
