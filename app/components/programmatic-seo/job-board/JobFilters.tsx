'use client'

import {
    Box,
    VStack,
    HStack,
    Text,
    Heading,
    Select,
    Button,
    Accordion,
    Checkbox
} from '@chakra-ui/react'
import { SlidersHorizontal, X } from 'lucide-react'
import { JobCategory, JobType, ExperienceLevel } from '@/app/lib/programmatic-seo/job-board'

interface JobFiltersProps {
    categories: string[]
    selectedFilters: {
        category?: JobCategory
        jobType?: JobType
        experienceLevel?: ExperienceLevel
        isRemote?: boolean
    }
    onFilterChange: (filters: JobFiltersProps['selectedFilters']) => void
    onReset: () => void
}

const CATEGORY_LABELS: Record<JobCategory, string> = {
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

const JOB_TYPES: { value: JobType; label: string }[] = [
    { value: 'full-time', label: 'Full-Time' },
    { value: 'part-time', label: 'Part-Time' },
    { value: 'contract', label: 'Contract' },
    { value: 'temporary', label: 'Temporary' },
    { value: 'internship', label: 'Internship' },
    { value: 'freelance', label: 'Freelance' }
]

const EXPERIENCE_LEVELS: { value: ExperienceLevel; label: string }[] = [
    { value: 'entry-level', label: 'Entry Level' },
    { value: 'mid-level', label: 'Mid Level' },
    { value: 'senior-level', label: 'Senior Level' },
    { value: 'lead', label: 'Lead / Principal' },
    { value: 'executive', label: 'Executive' }
]

export function JobFilters({ selectedFilters, onFilterChange, onReset }: JobFiltersProps) {
    const hasActiveFilters = Object.values(selectedFilters).some(v => v !== undefined)

    return (
        <Box
            bg="white"
            p={5}
            borderRadius="xl"
            borderWidth="1px"
            borderColor="gray.200"
            position="sticky"
            top={4}
        >
            <HStack justify="space-between" align="center" mb={4}>
                <HStack gap={2}>
                    <SlidersHorizontal size={20} color="gray.600" />
                    <Heading size="md" fontWeight="700">Filters</Heading>
                </HStack>
                {hasActiveFilters && (
                    <Button
                        size="sm"
                        variant="ghost"
                        colorPalette="gray"
                        onClick={onReset}
                    >
                        <X size={16} />
                        Reset
                    </Button>
                )}
            </HStack>

            <Accordion.Root collapsible defaultValue={['category', 'type']}>
                {/* Category Filter */}
                <Accordion.Item value="category" borderBottomWidth="1px" borderColor="gray.100">
                    <h2>
                        <Accordion.ItemTrigger fontWeight="600" fontSize="sm" py={3}>
                            Category
                        </Accordion.ItemTrigger>
                    </h2>
                    <Accordion.ItemContent pb={4}>
                        <VStack align="stretch" gap={2}>
                            {(Object.entries(CATEGORY_LABELS) as [JobCategory, string][]).map(([value, label]) => (
                                <Checkbox.Root
                                    key={value}
                                    checked={selectedFilters.category === value}
                                    onCheckedChange={(details) => {
                                        onFilterChange({
                                            ...selectedFilters,
                                            category: details.checked ? value : undefined
                                        })
                                    }}
                                >
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control />
                                    <Checkbox.Label>{label}</Checkbox.Label>
                                </Checkbox.Root>
                            ))}
                        </VStack>
                    </Accordion.ItemContent>
                </Accordion.Item>

                {/* Job Type Filter */}
                <Accordion.Item value="type" borderBottomWidth="1px" borderColor="gray.100">
                    <h2>
                        <Accordion.ItemTrigger fontWeight="600" fontSize="sm" py={3}>
                            Job Type
                        </Accordion.ItemTrigger>
                    </h2>
                    <Accordion.ItemContent pb={4}>
                        <VStack align="stretch" gap={2}>
                            {JOB_TYPES.map(({ value, label }) => (
                                <Checkbox.Root
                                    key={value}
                                    checked={selectedFilters.jobType === value}
                                    onCheckedChange={(details) => {
                                        onFilterChange({
                                            ...selectedFilters,
                                            jobType: details.checked ? value : undefined
                                        })
                                    }}
                                >
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control />
                                    <Checkbox.Label>{label}</Checkbox.Label>
                                </Checkbox.Root>
                            ))}
                        </VStack>
                    </Accordion.ItemContent>
                </Accordion.Item>

                {/* Experience Level Filter */}
                <Accordion.Item value="experience" borderBottomWidth="1px" borderColor="gray.100">
                    <h2>
                        <Accordion.ItemTrigger fontWeight="600" fontSize="sm" py={3}>
                            Experience Level
                        </Accordion.ItemTrigger>
                    </h2>
                    <Accordion.ItemContent pb={4}>
                        <VStack align="stretch" gap={2}>
                            {EXPERIENCE_LEVELS.map(({ value, label }) => (
                                <Checkbox.Root
                                    key={value}
                                    checked={selectedFilters.experienceLevel === value}
                                    onCheckedChange={(details) => {
                                        onFilterChange({
                                            ...selectedFilters,
                                            experienceLevel: details.checked ? value : undefined
                                        })
                                    }}
                                >
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control />
                                    <Checkbox.Label>{label}</Checkbox.Label>
                                </Checkbox.Root>
                            ))}
                        </VStack>
                    </Accordion.ItemContent>
                </Accordion.Item>

                {/* Remote Filter */}
                <Accordion.Item value="remote">
                    <h2>
                        <Accordion.ItemTrigger fontWeight="600" fontSize="sm" py={3}>
                            Work Arrangement
                        </Accordion.ItemTrigger>
                    </h2>
                    <Accordion.ItemContent pb={4}>
                        <VStack align="stretch" gap={2}>
                            <Checkbox.Root
                                checked={selectedFilters.isRemote === true}
                                onCheckedChange={(details) => {
                                    onFilterChange({
                                        ...selectedFilters,
                                        isRemote: details.checked ? true : undefined
                                    })
                                }}
                            >
                                <Checkbox.HiddenInput />
                                <Checkbox.Control />
                                <Checkbox.Label>Remote Only</Checkbox.Label>
                            </Checkbox.Root>
                        </VStack>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </Box>
    )
}
