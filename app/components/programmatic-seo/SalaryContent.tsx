import { Box, VStack, Text, HStack, SimpleGrid, Accordion, Badge } from '@chakra-ui/react'
import { ChevronDown, DollarSign, TrendingUp, MapPin, Building, Briefcase } from 'lucide-react'

interface SalaryContentProps {
    jobTitle: string
    category: string
    averageSalary?: number
    growthRate?: number
    aliases: string[]
}

interface ContentSectionProps {
    title: string
    icon: React.ReactNode
    children: React.ReactNode
    defaultOpen?: boolean
}

function ContentSection({ title, icon, children, defaultOpen = true }: ContentSectionProps) {
    return (
        <Accordion.Root defaultValue={defaultOpen ? [title] : []}>
            <Accordion.Item value={title}>
                <Accordion.ItemTrigger
                    px={0}
                    py={4}
                    _hover={{ bg: 'transparent' }}
                >
                    <HStack flex={1} justify="space-between">
                        <HStack gap={3}>
                            {icon}
                            <Text
                                fontSize="xl"
                                fontWeight="700"
                                color="#1d1d1f"
                            >
                                {title}
                            </Text>
                        </HStack>
                    </HStack>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent pb={6} pt={4}>
                    {children}
                </Accordion.ItemContent>
            </Accordion.Item>
        </Accordion.Root>
    )
}

export function SalaryContent({
    jobTitle,
    category,
    averageSalary,
    growthRate,
    aliases
}: SalaryContentProps) {
    const formatSalary = (amount: number) => `$${amount.toLocaleString()}`

    // Generate salary ranges by experience level
    const getSalaryByExperience = (baseSalary?: number) => {
        if (!baseSalary) {
            return [
                { level: 'Entry Level', range: '$40,000 - $60,000', description: '0-2 years experience' },
                { level: 'Mid Level', range: '$60,000 - $90,000', description: '2-5 years experience' },
                { level: 'Senior Level', range: '$90,000 - $130,000', description: '5+ years experience' },
                { level: 'Lead/Principal', range: '$130,000 - $180,000+', description: '10+ years experience' }
            ]
        }
        const entry = Math.round(baseSalary * 0.7)
        const mid = Math.round(baseSalary * 1.0)
        const senior = Math.round(baseSalary * 1.4)
        const lead = Math.round(baseSalary * 1.8)
        return [
            { level: 'Entry Level', min: entry, max: Math.round(entry * 1.2), description: '0-2 years experience' },
            { level: 'Mid Level', min: Math.round(mid * 0.9), max: Math.round(mid * 1.1), description: '2-5 years experience' },
            { level: 'Senior Level', min: Math.round(senior * 0.9), max: Math.round(senior * 1.15), description: '5-10 years experience' },
            { level: 'Lead/Principal', min: lead, max: Math.round(lead * 1.3), description: '10+ years experience' }
        ]
    }

    const salaryByExperience = getSalaryByExperience(averageSalary)

    // Top cities for salary comparison
    const topCities = [
        { city: 'San Francisco, CA', multiplier: 1.4 },
        { city: 'New York, NY', multiplier: 1.35 },
        { city: 'Seattle, WA', multiplier: 1.3 },
        { city: 'Boston, MA', multiplier: 1.25 },
        { city: 'Washington, DC', multiplier: 1.25 },
        { city: 'Los Angeles, CA', multiplier: 1.3 },
        { city: 'Chicago, IL', multiplier: 1.15 },
        { city: 'Austin, TX', multiplier: 1.1 },
        { city: 'Denver, CO', multiplier: 1.1 },
        { city: 'Atlanta, GA', multiplier: 1.05 },
        { city: 'Dallas, TX', multiplier: 1.05 },
        { city: 'Miami, FL', multiplier: 1.0 }
    ]

    const getSalaryByIndustry = (baseSalary?: number) => {
        if (!baseSalary) return []
        const industries = [
            { name: 'Technology', multiplier: 1.3 },
            { name: 'Finance', multiplier: 1.25 },
            { name: 'Healthcare', multiplier: 1.15 },
            { name: 'Consulting', multiplier: 1.2 },
            { name: 'Manufacturing', multiplier: 0.95 },
            { name: 'Retail', multiplier: 0.85 },
            { name: 'Education', multiplier: 0.9 },
            { name: 'Government', multiplier: 0.95 }
        ]
        return industries.map(ind => ({
            ...ind,
            salary: Math.round(baseSalary * ind.multiplier)
        }))
    }

    const salaryByIndustry = getSalaryByIndustry(averageSalary)

    const factors = [
        {
            factor: 'Experience Level',
            impact: 'High',
            description: 'Each year of experience typically adds 3-5% to base salary. Senior roles can pay 50-100% more than entry-level positions.'
        },
        {
            factor: 'Location',
            impact: 'High',
            description: 'Major metros pay 20-40% more due to cost of living. Remote work may adjust location-based pay differences.'
        },
        {
            factor: 'Industry',
            impact: 'Medium',
            description: 'Technology and finance typically pay 15-30% more than education or non-profit sectors for similar roles.'
        },
        {
            factor: 'Company Size',
            impact: 'Medium',
            description: 'Large companies offer 10-25% higher salaries but may have more structured progression. Startups may offer equity.'
        },
        {
            factor: 'Education',
            impact: 'Medium',
            description: 'Advanced degrees can add 10-20% to starting salaries. Certifications in specialized skills also boost pay.'
        },
        {
            factor: 'Skills',
            impact: 'High',
            description: 'In-demand technical skills, leadership abilities, and specialized knowledge can increase pay by 20-40%.'
        }
    ]

    const negotiationTips = [
        {
            title: 'Research Market Rates',
            tip: `Use salary data for ${jobTitle} roles in your location. Know your worth before negotiating.`
        },
        {
            title: 'Consider Total Compensation',
            tip: 'Factor in bonuses, stock options, benefits, retirement matching, and other perks beyond base salary.'
        },
        {
            title: 'Time Your Negotiation',
            tip: 'Negotiate after receiving an offer but before accepting. Leverage multiple offers if you have them.'
        },
        {
            title: 'Be Specific But Flexible',
            tip: 'Provide a salary range based on research, but show willingness to consider the full compensation package.'
        },
        {
            title: 'Highlight Unique Value',
            tip: `Emphasize specialized ${jobTitle} skills, achievements, and certifications that justify higher pay.`
        },
        {
            title: 'Practice Your Pitch',
            tip: 'Rehearse your negotiation conversation. Be confident, professional, and respectful throughout.'
        }
    ]

    return (
        <Box maxW="5xl" mx="auto" pb={12} px={{ base: 10, md: 0 }}>
            <VStack gap={8} align="stretch">
                {/* Salary Overview */}
                <Box
                    bg="blue.50"
                    p={6}
                    rounded="xl"
                    borderLeft="4px solid"
                    borderColor="blue.500"
                >
                    <Text fontSize="lg" lineHeight="1.7" color="#1d1d1f">
                        <Text as="strong" color="#4241ff">{jobTitle}</Text> professionals earn a competitive salary
                        {averageSalary && ` averaging ${formatSalary(averageSalary)} annually`}
                        {growthRate && `, with job growth projected at ${growthRate}%`}
                        . Salaries vary significantly based on experience, location, industry, and company size.
                    </Text>
                </Box>

                {/* Salary by Experience Level */}
                <ContentSection
                    title="Salary by Experience Level"
                    icon={<TrendingUp size={24} color="#4241ff" />}
                    defaultOpen
                >
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                        {salaryByExperience.map((level) => (
                            <Box
                                key={level.level}
                                bg="white"
                                p={5}
                                rounded="lg"
                                borderWidth="1px"
                                borderColor="gray.200"
                                _hover={{ borderColor: 'rgba(66, 65, 255, 0.3)', shadow: 'md' }}
                                transition="all 0.2s"
                            >
                                <VStack gap={2} align="start">
                                    <Text fontSize="lg" fontWeight="700" color="#1d1d1f">
                                        {level.level}
                                    </Text>
                                    <Text fontSize="xs" color="#6e6e73" textTransform="uppercase" fontWeight="600">
                                        {level.description}
                                    </Text>
                                    <Text fontSize="2xl" fontWeight="800" color="#4241ff">
                                        {'range' in level ? level.range : `${formatSalary(level.min!)} - ${formatSalary(level.max!)}`}
                                    </Text>
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </ContentSection>

                {/* Salary by Location */}
                <ContentSection
                    title="Salary by Location"
                    icon={<MapPin size={24} color="#4241ff" />}
                    defaultOpen
                >
                    <Text fontSize="md" color="#424245" mb={4}>
                        {jobTitle} salaries vary significantly by location. Here are average salaries in top metro areas:
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={3}>
                        {topCities.map((city) => {
                            const citySalary = averageSalary ? Math.round(averageSalary * city.multiplier) : null
                            return (
                                <Box
                                    key={city.city}
                                    bg="white"
                                    p={4}
                                    rounded="lg"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                >
                                    <Text fontSize="md" fontWeight="600" color="#1d1d1f">
                                        {city.city}
                                    </Text>
                                    {citySalary && (
                                        <Text fontSize="xl" fontWeight="700" color="#4241ff">
                                            {formatSalary(citySalary)}
                                        </Text>
                                    )}
                                </Box>
                            )
                        })}
                    </SimpleGrid>
                    <Box
                        mt={4}
                        p={4}
                        bg="yellow.50"
                        rounded="md"
                        borderLeft="4px solid"
                        borderColor="yellow.400"
                    >
                        <Text fontSize="sm" color="#424245">
                            <Text as="strong">Note:</Text> Salaries in major metropolitan areas are higher but consider
                            cost of living when comparing offers. Remote work may allow you to earn metro rates while living in lower-cost areas.
                        </Text>
                    </Box>
                </ContentSection>

                {/* Salary by Industry */}
                {salaryByIndustry.length > 0 && (
                    <ContentSection
                        title="Salary by Industry"
                        icon={<Building size={24} color="#4241ff" />}
                        defaultOpen
                    >
                        <Text fontSize="md" color="#424245" mb={4}>
                            {jobTitle} salaries differ across industries. Technology and finance typically lead:
                        </Text>
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
                            {salaryByIndustry.map((ind) => (
                                <HStack
                                    key={ind.name}
                                    bg="white"
                                    p={4}
                                    rounded="lg"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                    justify="space-between"
                                >
                                    <Text fontSize="md" fontWeight="600" color="#1d1d1f">
                                        {ind.name}
                                    </Text>
                                    <Text fontSize="lg" fontWeight="700" color="#4241ff">
                                        {formatSalary(ind.salary)}
                                    </Text>
                                </HStack>
                            ))}
                        </SimpleGrid>
                    </ContentSection>
                )}

                {/* Factors Affecting Salary */}
                <ContentSection
                    title="Factors Affecting {jobTitle} Salary"
                    icon={<Briefcase size={24} color="#4241ff" />}
                >
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
                        {factors.map((item, index) => (
                            <Box
                                key={index}
                                bg="white"
                                p={4}
                                rounded="lg"
                                borderWidth="1px"
                                borderColor="gray.200"
                            >
                                <HStack justify="space-between" mb={2}>
                                    <Text fontSize="md" fontWeight="600" color="#1d1d1f">
                                        {item.factor}
                                    </Text>
                                    <Badge
                                        colorScheme={item.impact === 'High' ? 'red' : item.impact === 'Medium' ? 'yellow' : 'gray'}
                                        variant="subtle"
                                    >
                                        {item.impact} Impact
                                    </Badge>
                                </HStack>
                                <Text fontSize="sm" color="#424245" lineHeight="1.6">
                                    {item.description}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </ContentSection>

                {/* Salary Negotiation Tips */}
                <ContentSection
                    title="Salary Negotiation Tips for {jobTitle} Roles"
                    icon={<DollarSign size={24} color="#4241ff" />}
                    defaultOpen
                >
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                        {negotiationTips.map((tip, index) => (
                            <Box
                                key={index}
                                bg="white"
                                p={5}
                                rounded="lg"
                                borderWidth="1px"
                                borderColor="gray.200"
                                _hover={{ borderColor: 'rgba(66, 65, 255, 0.3)' }}
                                transition="all 0.2s"
                            >
                                <Text
                                    fontSize="sm"
                                    fontWeight="700"
                                    color="#4241ff"
                                    mb={2}
                                    textTransform="uppercase"
                                >
                                    {index + 1}. {tip.title}
                                </Text>
                                <Text fontSize="md" color="#424245" lineHeight="1.6">
                                    {tip.tip}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </ContentSection>

                {/* Job Outlook */}
                {growthRate !== undefined && (
                    <ContentSection
                        title="Job Outlook & Career Growth"
                        icon={<TrendingUp size={24} color="#4241ff" />}
                        defaultOpen
                    >
                        <VStack gap={4}>
                            <Box
                                bg={growthRate >= 10 ? 'green.50' : growthRate >= 0 ? 'yellow.50' : 'red.50'}
                                p={5}
                                rounded="lg"
                                borderLeft="4px solid"
                                borderColor={growthRate >= 10 ? 'green.500' : growthRate >= 0 ? 'yellow.500' : 'red.500'}
                                w={'full'}
                            >
                                <HStack gap={3} align="center">
                                    <Text fontSize="4xl" fontWeight="800" color={growthRate >= 10 ? 'green.600' : growthRate >= 0 ? 'yellow.600' : 'red.600'}>
                                        {growthRate}%
                                    </Text>
                                    <Box flex={1}>
                                        <Text fontSize="lg" fontWeight="700" color="#1d1d1f">
                                            Projected Growth Rate (10-Year)
                                        </Text>
                                        <Text fontSize="md" color="#424245">
                                            {growthRate >= 15
                                                ? `Much faster than average (${growthRate - 8}%+ above average)`
                                                : growthRate >= 8
                                                    ? 'Faster than average'
                                                    : growthRate >= 0
                                                        ? 'Average growth rate'
                                                        : 'Below average growth'}
                                        </Text>
                                    </Box>
                                </HStack>
                            </Box>
                            <Text fontSize="md" color="#424245" lineHeight="1.7">
                                The {jobTitle} field shows {growthRate >= 15 ? 'excellent' : growthRate >= 8 ? 'strong' : 'modest'} growth potential.
                                {growthRate >= 15 ? ' This high demand indicates excellent job security and advancement opportunities.' : ''}
                                {' '}Factors driving demand include technological advancement, industry expansion, and workforce retirement.
                            </Text>
                        </VStack>
                    </ContentSection>
                )}

                {/* Related Job Titles */}
                {aliases.length > 0 && (
                    <ContentSection
                        title="Related Job Titles"
                        icon={<Briefcase size={24} color="#4241ff" />}
                    >
                        <Text fontSize="md" color="#424245">
                            {aliases.join(' • ')}
                        </Text>
                    </ContentSection>
                )}
            </VStack>
        </Box>
    )
}
