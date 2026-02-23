'use client'

import {
    Box,
    HStack,
    Input,
    Button,
    IconButton
} from '@chakra-ui/react'
import { Search, X } from 'lucide-react'
import { JobCategory } from '@/app/lib/programmatic-seo/job-board'

interface JobSearchBarProps {
    value: string
    onChange: (value: string) => void
    category?: JobCategory
    onCategoryChange?: (category: JobCategory | undefined) => void
    placeholder?: string
}

const CATEGORY_LABELS: Record<string, string> = {
    all: 'All Categories',
    technology: 'Technology',
    marketing: 'Marketing',
    sales: 'Sales',
    healthcare: 'Healthcare',
    finance: 'Finance',
    hr: 'Human Resources',
    design: 'Design',
    'customer-service': 'Customer Service',
    admin: 'Administrative',
    engineering: 'Engineering',
    legal: 'Legal',
    education: 'Education',
    'real-estate': 'Real Estate',
    'skilled-trades': 'Skilled Trades',
    hospitality: 'Hospitality',
    transportation: 'Transportation'
}

export function JobSearchBar({
    value,
    onChange,
    category,
    onCategoryChange,
    placeholder = 'Search for jobs, companies, or keywords...'
}: JobSearchBarProps) {
    return (
        <Box
            bg="white"
            p={2}
            borderRadius="full"
            borderWidth="1px"
            borderColor="gray.200"
            boxShadow="sm"
        >
            <HStack gap={2}>
                <Box
                    bg="gray.50"
                    borderRadius="full"
                    px={4}
                    py={2}
                    flex={1}
                >
                    <HStack gap={3}>
                        <Search size={18} color="gray.400" />
                        <Input
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder={placeholder}
                            border="none"
                            bg="transparent"
                            _focus={{ boxShadow: 'none' }}
                            px={0}
                            fontWeight="500"
                        />
                        {value && (
                            <IconButton
                                size="xs"
                                variant="ghost"
                                borderRadius="full"
                                onClick={() => onChange('')}
                            >
                                <X size={14} />
                            </IconButton>
                        )}
                    </HStack>
                </Box>

                {onCategoryChange && (
                    <select
                        value={category || 'all'}
                        onChange={(e) => onCategoryChange(
                            e.target.value === 'all' ? undefined : e.target.value as JobCategory
                        )}
                        style={{
                            borderRadius: '9999px',
                            border: 'none',
                            backgroundColor: '#f7f7f7',
                            padding: '8px 16px',
                            minWidth: '140px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#374151'
                        }}
                    >
                        {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                )}

                <Button
                    bg="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                    color="white"
                    borderRadius="full"
                    px={6}
                    fontWeight="600"
                    _hover={{
                        transform: "translateY(-1px)",
                        boxShadow: "md"
                    }}
                    transition="all 0.2s"
                >
                    Search
                </Button>
            </HStack>
        </Box>
    )
}
