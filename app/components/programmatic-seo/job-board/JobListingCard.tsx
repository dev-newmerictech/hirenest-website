'use client'

import {
    Box,
    HStack,
    VStack,
    Text,
    Heading,
    Badge,
    Button,
    Link as ChakraLink,
    Separator
} from '@chakra-ui/react'
import { MapPin, DollarSign, Clock, Building2, Briefcase, Users } from 'lucide-react'
import Link from 'next/link'
import { JobListing } from '@/app/lib/programmatic-seo/job-board'

interface JobListingCardProps {
    job: JobListing
    showFeatured?: boolean
}

export function JobListingCard({ job, showFeatured = true }: JobListingCardProps) {
    const formatSalary = (salary: { min: number; max: number; currency: string; period: string }) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: salary.currency,
            maximumFractionDigits: 0
        })

        if (salary.period === 'yearly') {
            return `${formatter.format(salary.min)} - ${formatter.format(salary.max)}/year`
        } else if (salary.period === 'hourly') {
            return `${formatter.format(salary.min)} - ${formatter.format(salary.max)}/hr`
        }
        return `${formatter.format(salary.min)} - ${formatter.format(salary.max)}`
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        const diffTime = Math.abs(now.getTime() - date.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        if (diffDays === 0) return 'Today'
        if (diffDays === 1) return 'Yesterday'
        if (diffDays < 7) return `${diffDays} days ago`
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
        return `${Math.floor(diffDays / 30)} months ago`
    }

    const getJobTypeColor = (type: string) => {
        const colors: Record<string, string> = {
            'full-time': 'green',
            'part-time': 'blue',
            'contract': 'purple',
            'temporary': 'orange',
            'internship': 'pink',
            'freelance': 'cyan'
        }
        return colors[type] || 'gray'
    }

    const getExperienceColor = (level: string) => {
        const colors: Record<string, string> = {
            'entry-level': 'blue',
            'mid-level': 'green',
            'senior-level': 'purple',
            'lead': 'orange',
            'executive': 'red'
        }
        return colors[level] || 'gray'
    }

    return (
        <Box
            as="article"
            position="relative"
            p={5}
            bg="white"
            borderRadius="xl"
            borderWidth="1px"
            borderColor={job.featured && showFeatured ? "brand.500" : "gray.200"}
            boxShadow={job.featured && showFeatured ? "md" : "sm"}
            transition="all 0.2s"
            _hover={{
                borderColor: "brand.300",
                boxShadow: "md",
                transform: "translateY(-2px)"
            }}
        >
            {/* Featured Badge */}
            {job.featured && showFeatured && (
                <Badge
                    position="absolute"
                    top={3}
                    right={3}
                    bg="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="600"
                >
                    Featured
                </Badge>
            )}

            <VStack align="stretch" gap={4}>
                {/* Header */}
                <HStack justify="space-between" align="flex-start">
                    <VStack align="stretch" gap={1} flex={1}>
                        <Link href={'https://app.hirenest.ai'} passHref legacyBehavior>
                            <ChakraLink _hover={{ textDecoration: 'none' }}>
                                <Heading
                                    as="h3"
                                    size="lg"
                                    fontWeight="700"
                                    color="gray.900"
                                    _hover={{ color: "brand.500" }}
                                    transition="color 0.2s"
                                >
                                    {job.title}
                                </Heading>
                            </ChakraLink>
                        </Link>
                        <HStack gap={4} flexWrap="wrap">
                            <HStack gap={1} color="gray.600">
                                <Building2 size={16} />
                                <Text fontSize="sm">{job.companyName}</Text>
                            </HStack>
                            <HStack gap={1} color="gray.600">
                                <MapPin size={16} />
                                <Text fontSize="sm">
                                    {job.location.isRemote
                                        ? 'Remote'
                                        : job.location.isHybrid
                                            ? `Hybrid - ${job.location.city}`
                                            : `${job.location.city}, ${job.location.state}`}
                                </Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </HStack>

                {/* Description */}
                <Text fontSize="md" color="gray.600" lineClamp={2}>
                    {job.description}
                </Text>

                {/* Skills */}
                <HStack gap={2} flexWrap="wrap">
                    {job.skills.slice(0, 4).map((skill, index) => (
                        <Badge
                            key={index}
                            bg="gray.100"
                            color="gray.700"
                            px={2}
                            py={1}
                            borderRadius="md"
                            fontSize="sm"
                        >
                            {skill}
                        </Badge>
                    ))}
                    {job.skills.length > 4 && (
                        <Badge
                            bg="gray.50"
                            color="gray.500"
                            px={2}
                            py={1}
                            borderRadius="md"
                            fontSize="sm"
                        >
                            +{job.skills.length - 4} more
                        </Badge>
                    )}
                </HStack>

                <Separator borderColor="gray.100" />

                {/* Footer */}
                <HStack justify="space-between" align="center" flexWrap="wrap" gap={3}>
                    <HStack gap={4} flexWrap="wrap">
                        {/* Salary */}
                        {job.salaryRange && (
                            <HStack gap={1} color="green.600" fontWeight="600">
                                <DollarSign size={16} />
                                <Text fontSize="sm">{formatSalary(job.salaryRange)}</Text>
                            </HStack>
                        )}

                        {/* Job Type */}
                        <Badge
                            colorPalette={getJobTypeColor(job.jobType)}
                            px={2}
                            py={1}
                            borderRadius="md"
                            fontSize="sm"
                            textTransform="capitalize"
                        >
                            {job.jobType.replace('-', ' ')}
                        </Badge>

                        {/* Experience Level */}
                        <Badge
                            colorPalette={getExperienceColor(job.experienceLevel)}
                            px={2}
                            py={1}
                            borderRadius="md"
                            fontSize="sm"
                            textTransform="capitalize"
                        >
                            {job.experienceLevel.replace('-', ' ')}
                        </Badge>
                    </HStack>

                    <HStack gap={3}>
                        <HStack gap={1} color="gray.500">
                            <Clock size={14} />
                            <Text fontSize="xs">{formatDate(job.postedDate)}</Text>
                        </HStack>
                        <ChakraLink
                            href={`https://app.hirenest.ai`}
                            target="_blank"
                            rel="noopener noreferrer"
                            bg="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                            color="white"
                            px={4}
                            py={2}
                            borderRadius="full"
                            fontWeight="600"
                            fontSize="sm"
                            textDecoration="none"
                            _hover={{
                                transform: "translateY(-1px)",
                                boxShadow: "md"
                            }}
                            transition="all 0.2s"
                        >
                            Apply Now
                        </ChakraLink>
                    </HStack>
                </HStack>
            </VStack>
        </Box>
    )
}
