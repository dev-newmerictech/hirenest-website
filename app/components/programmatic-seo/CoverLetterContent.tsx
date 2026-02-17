import { Box, VStack, Text, HStack, SimpleGrid, Accordion, Badge } from '@chakra-ui/react'
import { ChevronDown, FileText, Copy, Check, Lightbulb, AlertCircle } from 'lucide-react'

interface CoverLetterContentProps {
    jobTitle: string
    category: string
    aliases: string[]
}

function ContentSection({ title, icon, children, defaultOpen = false }: {
    title: string
    icon: React.ReactNode
    children: React.ReactNode
    defaultOpen?: boolean
}) {
    return (
        <Accordion.Root defaultValue={defaultOpen ? [title] : []} border="none">
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

export function CoverLetterContent({ jobTitle, category, aliases }: CoverLetterContentProps) {
    const generateShortCoverLetter = () => {
        return `Dear Hiring Manager,

I am writing to express my strong interest in the ${jobTitle} position at [Company Name]. With my background in ${category} and passion for delivering exceptional results, I am confident in my ability to contribute meaningfully to your team.

In my current role, I have successfully [mention 1-2 key achievements]. I am particularly drawn to [Company Name] because of [specific reason about the company].

I would welcome the opportunity to discuss how my skills and experience align with your needs. Thank you for considering my application.

Best regards,
[Your Name]`
    }

    const generateDetailedCoverLetter = () => {
        return `Dear Hiring Manager,

I am excited to apply for the ${jobTitle} position at [Company Name]. As a passionate professional with expertise in ${category}, I have long admired your company's innovative approach and commitment to excellence. This role aligns perfectly with my career aspirations and skills.

Throughout my career, I have developed a strong foundation in ${category.toLowerCase()}. In my previous position, I:
• Led successful initiatives that resulted in [specific achievement]
• Collaborated with cross-functional teams to deliver projects on time and within budget
• Developed innovative solutions that improved efficiency by [percentage/amount]

What excites me most about this opportunity is the chance to contribute to [Company Name]'s mission while continuing to grow professionally. Your reputation for [company strength/innovation/culture] is well-known, and I am eager to bring my experience in [relevant skill] to your team.

I am particularly proud of my work on [specific project/accomplishment], which demonstrates my ability to [relevant skill]. I believe this experience, combined with my [personal quality], makes me a strong candidate for this role.

I would welcome the opportunity to discuss how my background, skills, and enthusiasm would be a great fit for [Company Name]. Thank you for your time and consideration.

Sincerely,
[Your Name]
[Phone Number]
[Email Address]
[LinkedIn Profile]`
    }

    const generateExperienceBasedLetter = (experience: string) => {
        const introMap: Record<string, string> = {
            entry: `As a recent graduate with a degree in ${category}-related studies and strong internship experience`,
            mid: `With over 5 years of progressive experience in ${category}`,
            senior: `As a seasoned ${category} professional with over 10 years of leadership experience`
        }

        return `Dear Hiring Manager,

I am writing to apply for the ${jobTitle} position at [Company Name]. ${introMap[experience] || introMap.mid}, I am confident in my ability to make immediate contributions to your team.

My professional background includes:
• Proven expertise in [key skill 1] and [key skill 2]
• Track record of [achievement type]
• Experience working with [relevant tools/technologies]

I am particularly drawn to [Company Name] because of [specific reason]. I believe my ${experience} level experience makes me an ideal candidate to help your team achieve [goal].

Thank you for considering my application. I look forward to discussing how I can contribute to your team's success.

Best regards,
[Your Name]`
    }

    const tips = [
        {
            icon: <Check size={20} color="#4241ff" />,
            title: "Research the Company",
            description: "Mention specific details about the company's culture, products, or recent achievements to show genuine interest."
        },
        {
            icon: <Check size={20} color="#4241ff" />,
            title: "Quantify Your Achievements",
            description: "Use numbers and percentages to demonstrate the impact of your work (e.g., 'increased sales by 35%')."
        },
        {
            icon: <Check size={20} color="#4241ff" />,
            title: "Match Your Skills to the Job",
            description: "Review the job description and highlight relevant skills and experiences that directly relate to the requirements."
        },
        {
            icon: <Check size={20} color="#4241ff" />,
            title: "Keep It Professional",
            description: "Maintain a professional tone throughout, but don't be afraid to show enthusiasm and personality."
        },
        {
            icon: <Check size={20} color="#4241ff" />,
            title: "Proofread Carefully",
            description: "Check for typos, grammar errors, and ensure the company name and recipient details are correct."
        },
        {
            icon: <Check size={20} color="#4241ff" />,
            title: "Customize for Each Application",
            description: "Avoid generic templates. Tailor each cover letter to the specific role and company."
        }
    ]

    const mistakes = [
        {
            icon: <AlertCircle size={20} color="#e53e3e" />,
            mistake: "Being Too Generic",
            solution: "Avoid one-size-fits-all letters. Research and personalize for each application."
        },
        {
            icon: <AlertCircle size={20} color="#e53e3e" />,
            mistake: "Repeating Your Resume",
            solution: "Use the cover letter to add context, tell stories, and explain your motivation."
        },
        {
            icon: <AlertCircle size={20} color="#e53e3e" />,
            mistake: "Focusing Only on Yourself",
            solution: "Show how you can solve the company's problems, not just what you want."
        },
        {
            icon: <AlertCircle size={20} color="#e53e3e" />,
            mistake: "Being Too Long",
            solution: "Keep it concise. 3-4 paragraphs is ideal. Recruiters scan quickly."
        },
        {
            icon: <AlertCircle size={20} color="#e53e3e" />,
            mistake: "Ignoring Instructions",
            solution: "Follow application instructions carefully, including file format and submission method."
        },
        {
            icon: <AlertCircle size={20} color="#e53e3e" />,
            mistake: "Weak Closing",
            solution: "End with a clear call to action. Express enthusiasm for next steps."
        }
    ]

    const getIndustrySpecificTips = () => {
        const industryTips: Record<string, string[]> = {
            technology: [
                "Highlight your technical skills and specific technologies you're proficient in",
                "Mention any open-source contributions or personal projects",
                "Include links to your GitHub portfolio or tech blog",
                "Discuss your approach to staying current with emerging technologies"
            ],
            marketing: [
                "Showcase your understanding of digital marketing trends and platforms",
                "Include metrics from campaigns you've managed",
                "Mention any certifications (Google Ads, HubSpot, etc.)",
                "Demonstrate your creative and analytical thinking abilities"
            ],
            healthcare: [
                "Emphasize your patient care philosophy and clinical skills",
                "Highlight any specializations or advanced certifications",
                "Mention your experience with electronic health records systems",
                "Discuss your commitment to continuing education"
            ],
            finance: [
                "Highlight your analytical skills and attention to detail",
                "Mention any relevant certifications (CPA, CFA, etc.)",
                "Demonstrate your understanding of regulatory requirements",
                "Show your ability to communicate complex financial concepts"
            ],
            sales: [
                "Include your sales performance metrics and quotas achieved",
                "Highlight your relationship-building and negotiation skills",
                "Mention your experience with CRM systems",
                "Demonstrate your understanding of the sales funnel process"
            ],
            default: [
                "Highlight transferable skills that apply to the role",
                "Show your enthusiasm for learning and growing",
                "Mention any relevant industry knowledge or experience",
                "Demonstrate your teamwork and collaboration abilities"
            ]
        }

        return industryTips[category.toLowerCase().split(' ')[0]] || industryTips.default
    }

    const industryTips = getIndustrySpecificTips()

    return (
        <Box maxW="5xl" mx="auto" pb={8} px={{ base: 6, md: 0 }}>
            {/* Short Cover Letter Template */}
            <ContentSection
                title="Quick Cover Letter Template"
                icon={<FileText size={24} color="#4241ff" />}
                defaultOpen={true}
            >
                <VStack gap={4} align="stretch">
                    <Text fontSize="md" color="#424245" mb={2}>
                        Use this concise template when you need a professional cover letter quickly. Perfect for online applications and when you've already connected with the team.
                    </Text>
                    <Box
                        bg="gray.50"
                        p={6}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="gray.200"
                        position="relative"
                    >
                        <Text as="pre" fontSize="md" color="#1d1d1f" whiteSpace="pre-wrap" fontFamily="mono">
                            {generateShortCoverLetter()}
                        </Text>
                    </Box>
                </VStack>
            </ContentSection>

            {/* Detailed Cover Letter Template */}
            <ContentSection
                title="Comprehensive Cover Letter Template"
                icon={<FileText size={24} color="#4241ff" />}
                defaultOpen={true}
            >
                <VStack gap={4} align="stretch">
                    <Text fontSize="md" color="#424245" mb={2}>
                        This detailed template showcases your full range of skills and experiences. Use it for applications where you want to tell a more complete story.
                    </Text>
                    <Box
                        bg="gray.50"
                        p={6}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text as="pre" fontSize="md" color="#1d1d1f" whiteSpace="pre-wrap" fontFamily="mono">
                            {generateDetailedCoverLetter()}
                        </Text>
                    </Box>
                </VStack>
            </ContentSection>

            {/* Experience-Based Templates */}
            <ContentSection
                title="Experience-Based Templates"
                icon={<FileText size={24} color="#4241ff" />}
                defaultOpen={true}
            >
                <VStack gap={6} align="stretch">
                    <Box>
                        <Badge bg="blue.100" color="blue.700" mb={3} fontSize="sm" fontWeight="600">
                            Entry Level (0-2 years)
                        </Badge>
                        <Box bg="gray.50" p={5} borderRadius="lg" borderWidth="1px" borderColor="gray.200">
                            <Text as="pre" fontSize="md" color="#1d1d1f" whiteSpace="pre-wrap" fontFamily="mono">
                                {generateExperienceBasedLetter('entry')}
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Badge bg="green.100" color="green.700" mb={3} fontSize="sm" fontWeight="600">
                            Mid Level (3-7 years)
                        </Badge>
                        <Box bg="gray.50" p={5} borderRadius="lg" borderWidth="1px" borderColor="gray.200">
                            <Text as="pre" fontSize="md" color="#1d1d1f" whiteSpace="pre-wrap" fontFamily="mono">
                                {generateExperienceBasedLetter('mid')}
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Badge bg="purple.100" color="purple.700" mb={3} fontSize="sm" fontWeight="600">
                            Senior Level (8+ years)
                        </Badge>
                        <Box bg="gray.50" p={5} borderRadius="lg" borderWidth="1px" borderColor="gray.200">
                            <Text as="pre" fontSize="md" color="#1d1d1f" whiteSpace="pre-wrap" fontFamily="mono">
                                {generateExperienceBasedLetter('senior')}
                            </Text>
                        </Box>
                    </Box>
                </VStack>
            </ContentSection>

            {/* Industry-Specific Tips */}
            <ContentSection
                title={`${category} Cover Letter Tips`}
                icon={<Lightbulb size={24} color="#4241ff" />}
                defaultOpen={true}
            >
                <VStack gap={3} align="stretch">
                    {industryTips.map((tip, index) => (
                        <HStack key={index} gap={3} align="start">
                            <Box
                                bg="green.100"
                                p={1}
                                borderRadius="md"
                                mt={1}
                            >
                                <Check size={16} color="#16a34a" />
                            </Box>
                            <Text fontSize="md" color="#424245" lineHeight="1.6">
                                {tip}
                            </Text>
                        </HStack>
                    ))}
                </VStack>
            </ContentSection>

            {/* General Tips */}
            <ContentSection
                title="6 Essential Cover Letter Tips"
                icon={<Lightbulb size={24} color="#4241ff" />}
                defaultOpen={true}
            >
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    {tips.map((tip, index) => (
                        <Box
                            key={index}
                            bg="white"
                            p={4}
                            borderRadius="lg"
                            borderWidth="1px"
                            borderColor="gray.200"
                        >
                            <HStack gap={3} mb={2}>
                                {tip.icon}
                                <Text fontSize="md" fontWeight="600" color="#1d1d1f">
                                    {tip.title}
                                </Text>
                            </HStack>
                            <Text fontSize="md" color="#6e6e73" lineHeight="1.5">
                                {tip.description}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </ContentSection>

            {/* Common Mistakes */}
            <ContentSection
                title="Common Cover Letter Mistakes to Avoid"
                icon={<AlertCircle size={24} color="#e53e3e" />}
                defaultOpen={true}
            >
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    {mistakes.map((item, index) => (
                        <Box
                            key={index}
                            bg="white"
                            p={4}
                            borderRadius="lg"
                            borderWidth="1px"
                            borderColor="gray.200"
                        >
                            <HStack gap={3} mb={2}>
                                {item.icon}
                                <Text fontSize="md" fontWeight="600" color="#1d1d1f">
                                    {item.mistake}
                                </Text>
                            </HStack>
                            <Text fontSize="md" color="#6e6e73" lineHeight="1.5">
                                {item.solution}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </ContentSection>
        </Box>
    )
}
