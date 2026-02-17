import { Box, VStack, Text, Accordion, HStack } from '@chakra-ui/react'
import { ChevronDown } from 'lucide-react'

interface JobDescriptionContentProps {
    jobTitle: string
    category: string
    averageSalary?: number
    growthRate?: number
    aliases: string[]
}

interface ContentSectionProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
}

function ContentSection({ title, children, defaultOpen = true }: ContentSectionProps) {
    return (
        <Accordion.Root defaultValue={defaultOpen ? [title] : []}>
            <Accordion.Item value={title}>
                <Accordion.ItemTrigger
                    px={0}
                    py={4}
                    _hover={{ bg: 'transparent' }}
                >
                    <HStack flex={1} justify="space-between">
                        <Text
                            fontSize={{ base: 'lg', lg: 'xl' }}
                            fontWeight="700"
                            color="#1d1d1f"
                        >
                            {title}
                        </Text>
                    </HStack>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent pb={6} pt={2} fontSize={{ base: 'sm', lg: 'md' }}>
                    {children}
                </Accordion.ItemContent>
            </Accordion.Item>
        </Accordion.Root>
    )
}

export function JobDescriptionContent({
    jobTitle,
    category,
    averageSalary,
    growthRate,
    aliases
}: JobDescriptionContentProps) {
    const formatSalary = (salary?: number) => {
        if (!salary) return 'Varies by experience and location'
        return `$${(salary / 1000).toFixed(0)}k - $${((salary * 1.5) / 1000).toFixed(0)}k`
    }

    const getEducationLevel = (category: string) => {
        const educationMap: Record<string, string> = {
            'technology': "Bachelor's degree in Computer Science or related field",
            'marketing': "Bachelor's degree in Marketing, Business, or Communications",
            'sales': "Bachelor's degree in Business, Sales, or related field (often equivalent experience accepted)",
            'healthcare': "Bachelor's degree and professional certification/licensure (varies by role)",
            'finance': "Bachelor's degree in Finance, Accounting, or Business Administration",
            'hr': "Bachelor's degree in Human Resources, Business Administration, or Psychology",
            'admin': "High school diploma or equivalent (post-secondary education preferred)",
            'customer-service': "High school diploma or equivalent",
            'design': "Bachelor's degree in Design, Fine Arts, or related field",
            'engineering': "Bachelor's degree in Engineering or related technical field",
            'legal': "Bachelor's degree followed by Juris Doctor (JD) for attorneys; paralegals need associate degree or certificate",
            'education': "Bachelor's degree plus teaching certification; advanced degrees for higher education",
            'real-estate': "High school diploma plus state real estate license",
            'skilled-trades': "High school diploma plus vocational training or apprenticeship",
            'hospitality': "High school diploma or equivalent (culinary school for chefs)",
            'transportation': "High school diploma or equivalent; commercial driver's license for drivers"
        }
        return educationMap[category] || "Varies by employer and specific role"
    }

    const getResponsibilities = (title: string, cat: string) => {
        const common = [
            `Collaborate with team members to achieve ${title} objectives`,
            `Maintain accurate records and documentation related to ${title} activities`,
            `Stay current with industry trends and best practices in ${title}`,
            `Communicate effectively with stakeholders and team members`
        ]

        const categorySpecific: Record<string, string[]> = {
            'technology': [
                'Design, develop, and maintain software applications and systems',
                'Write clean, efficient, and well-documented code',
                'Troubleshoot and debug technical issues',
                'Participate in code reviews and architectural decisions',
                'Implement security best practices and data protection measures'
            ],
            'marketing': [
                'Develop and execute marketing campaigns across multiple channels',
                'Analyze market trends and competitor strategies',
                'Create compelling content for various marketing materials',
                'Monitor and report on marketing performance metrics',
                'Manage marketing budgets and optimize spend'
            ],
            'sales': [
                'Identify and prospect potential customers',
                'Present products/services to qualified prospects',
                'Negotiate terms and close sales deals',
                'Maintain relationships with existing clients',
                'Achieve or exceed sales quotas and targets'
            ],
            'healthcare': [
                'Provide patient care according to established protocols',
                'Monitor and document patient health status',
                'Administer medications and treatments as prescribed',
                'Educate patients and families about health conditions',
                'Collaborate with healthcare team members'
            ],
            'finance': [
                'Prepare financial reports and analyses',
                'Monitor budgets and financial performance',
                'Ensure compliance with financial regulations',
                'Conduct financial forecasting and planning',
                'Manage financial risks and opportunities'
            ],
            'hr': [
                'Recruit and interview prospective employees',
                'Onboard new hires and facilitate orientation',
                'Administer employee benefits and programs',
                'Handle employee relations and conflict resolution',
                'Maintain HR records and ensure compliance'
            ],
            'admin': [
                'Manage office operations and supplies',
                'Schedule appointments and meetings',
                'Handle incoming calls and correspondence',
                'Maintain filing systems and documentation',
                'Support team members with administrative tasks'
            ],
            'customer-service': [
                'Respond to customer inquiries via phone, email, or chat',
                'Resolve customer complaints and issues',
                'Provide product/service information to customers',
                'Process orders, returns, and exchanges',
                'Document customer interactions in CRM systems'
            ],
            'design': [
                'Create visual designs for digital and print media',
                'Develop design concepts and mockups',
                'Collaborate with marketing and product teams',
                'Ensure brand consistency across all materials',
                'Stay updated on design trends and tools'
            ],
            'engineering': [
                'Design and develop engineering solutions',
                'Conduct testing and quality assurance',
                'Document technical specifications',
                'Collaborate with cross-functional teams',
                'Optimize systems for performance and scalability'
            ],
            'legal': [
                'Draft and review legal documents',
                'Conduct legal research and analysis',
                'Advise clients on legal matters',
                'Represent clients in negotiations or proceedings',
                'Maintain confidentiality and ethical standards'
            ],
            'education': [
                'Develop and deliver lesson plans',
                'Assess student learning and provide feedback',
                'Create a positive learning environment',
                'Communicate with parents and guardians',
                'Participate in professional development'
            ],
            'real-estate': [
                'List and market properties for sale or rent',
                'Conduct property showings and open houses',
                'Negotiate purchase agreements and leases',
                'Advise clients on market conditions and pricing',
                'Network with potential buyers and sellers'
            ],
            'skilled-trades': [
                'Perform installations, repairs, and maintenance',
                'Read and interpret blueprints and technical diagrams',
                'Use specialized tools and equipment safely',
                'Inspect work for quality and compliance',
                'Provide estimates and consultations to clients'
            ],
            'hospitality': [
                'Greet and assist guests with check-in/check-out',
                'Provide information about facilities and services',
                'Handle guest requests and resolve issues',
                'Maintain clean and welcoming environments',
                'Process payments and maintain accurate records'
            ],
            'transportation': [
                'Operate vehicles safely and efficiently',
                'Plan routes and optimize delivery schedules',
                'Inspect vehicles and perform basic maintenance',
                'Load and unload cargo or passengers',
                'Maintain delivery logs and documentation'
            ]
        }

        return [...common, ...(categorySpecific[cat] || common)]
    }

    const getRequirements = (title: string, cat: string) => {
        const common = [
            `Strong communication and interpersonal skills`,
            `Excellent problem-solving and critical thinking abilities`,
            `Proficiency with industry-standard software and tools`,
            `Ability to work independently and as part of a team`,
            `Strong organizational and time management skills`
        ]

        const categorySpecific: Record<string, string[]> = {
            'technology': [
                'Proficiency in programming languages (e.g., JavaScript, Python, Java)',
                'Experience with databases and SQL',
                'Knowledge of cloud platforms (AWS, Azure, GCP)',
                'Understanding of software development methodologies',
                'Familiarity with version control systems (Git)'
            ],
            'marketing': [
                'Experience with digital marketing platforms (Google Ads, Facebook Ads)',
                'Proficiency in marketing automation tools',
                'Strong analytical and data interpretation skills',
                'Excellent copywriting and content creation abilities',
                'Knowledge of SEO/SEM best practices'
            ],
            'sales': [
                'Proven track record in sales or business development',
                'Excellent negotiation and closing skills',
                'Ability to build and maintain client relationships',
                'Strong presentation and communication abilities',
                'Experience with CRM software'
            ],
            'healthcare': [
                'Valid state license or certification',
                'Clinical experience in relevant healthcare setting',
                'Knowledge of medical terminology and procedures',
                'Strong patient care and bedside manner',
                'Ability to work in high-stress environments'
            ],
            'finance': [
                'Strong analytical and mathematical skills',
                'Proficiency in financial software and Excel',
                'Knowledge of financial regulations and compliance',
                'Attention to detail and accuracy',
                'Professional certification (CPA, CFA, etc.) often preferred'
            ],
            'hr': [
                'Knowledge of employment laws and regulations',
                'Experience with HRIS and ATS systems',
                'Strong interpersonal and conflict resolution skills',
                'Ability to handle sensitive information confidentially',
                'Professional HR certification (SHRM, HRCI) often preferred'
            ],
            'admin': [
                'Proficiency in Microsoft Office (Word, Excel, PowerPoint)',
                'Strong typing and data entry skills',
                'Excellent organizational abilities',
                'Professional phone etiquette',
                'Ability to multitask and prioritize work'
            ],
            'customer-service': [
                'Patience and empathy when dealing with customers',
                'Strong problem-solving skills',
                'Ability to remain calm under pressure',
                'Experience with customer service software',
                'Flexibility to work various shifts'
            ],
            'design': [
                'Proficiency in design software (Adobe Creative Suite, Figma)',
                'Strong portfolio demonstrating design skills',
                'Understanding of design principles and typography',
                'Ability to take and incorporate feedback',
                'Knowledge of web and print design specifications'
            ],
            'engineering': [
                'Strong technical and mathematical abilities',
                'Proficiency in engineering software and tools',
                'Problem-solving and analytical thinking skills',
                'Attention to detail and precision',
                'Professional engineering license (PE) may be required'
            ],
            'legal': [
                'Juris Doctor (JD) degree for attorneys',
                'Valid state bar license (for attorneys)',
                'Strong research and writing skills',
                'Attention to detail and analytical thinking',
                'Ability to work under pressure and meet deadlines'
            ],
            'education': [
                'Valid state teaching certification',
                'Subject matter expertise in teaching area',
                'Classroom management skills',
                'Patience and ability to work with diverse learners',
                'Commitment to ongoing professional development'
            ],
            'real-estate': [
                'Valid state real estate license',
                'Knowledge of local real estate market',
                'Strong networking and interpersonal skills',
                'Sales and negotiation abilities',
                'Ability to work flexible hours including weekends'
            ],
            'skilled-trades': [
                'Completion of apprenticeship or vocational training',
                'Relevant certification or license',
                'Physical stamina and manual dexterity',
                'Knowledge of safety protocols and regulations',
                'Experience with trade-specific tools and equipment'
            ],
            'hospitality': [
                'Customer service orientation',
                'Ability to work irregular hours including weekends',
                'Physical stamina for standing/walking for extended periods',
                'Professional appearance and demeanor',
                'Language skills often beneficial'
            ],
            'transportation': [
                'Valid driver\'s license with clean record',
                'CDL license for commercial driving positions',
                'Good driving record and knowledge of traffic laws',
                'Ability to pass DOT physical and drug screening',
                'Geographical knowledge of delivery areas'
            ]
        }

        return [...common, ...(categorySpecific[cat] || common)]
    }

    const getWorkEnvironment = (title: string, cat: string) => {
        const environments: Record<string, string> = {
            'technology': `${title} professionals typically work in office environments, though remote work has become increasingly common. Work is often project-based with tight deadlines, requiring collaboration with cross-functional teams. Overtime may be required during product launches or critical system updates.`,
            'marketing': `Marketing professionals work in fast-paced office environments, often collaborating with creative, sales, and product teams. The role involves managing multiple campaigns simultaneously and may require occasional travel for events or client meetings.`,
            'sales': `Sales roles often involve a mix of office work and client meetings. Travel may be required depending on the sales territory. Performance is typically measured against quotas, creating a results-driven environment. Work hours can vary based on client schedules and sales cycles.`,
            'healthcare': `Healthcare professionals work in hospitals, clinics, or other medical facilities. The environment can be fast-paced and emotionally demanding. Shifts often include nights, weekends, and holidays. The role requires compassion and resilience when dealing with patients in various health conditions.`,
            'finance': `Finance roles are typically office-based in corporate settings. The work is deadline-driven, particularly around month-end, quarter-end, and year-end reporting periods. Long hours may be required during busy periods.`,
            'hr': `HR professionals work in office environments across various industries. The role involves frequent interaction with employees at all levels and requires handling sensitive situations with discretion. Standard business hours are typical, though some flexibility may be needed.`,
            'admin': `Administrative roles are typically office-based in various industries. The work is routine but requires multitasking and adapting to changing priorities. Standard business hours are common, though some overtime may be required.`,
            'customer-service': `Customer service roles vary from call centers to retail environments. The work can be stressful when dealing with difficult customers. Shift work, including evenings and weekends, is often required. Remote opportunities have increased in this field.`,
            'design': `Designers work in creative environments, either in agencies or in-house corporate teams. The role involves collaboration with marketing and product teams. Deadlines are common, and creative blocks can be challenging. Remote work is increasingly accepted.`,
            'engineering': `Engineers work in various settings from offices to field sites. The work is project-based with technical problem-solving at its core. Collaboration with other engineers and departments is frequent. Safety protocols are critical in engineering roles.`,
            'legal': `Legal professionals work in law firms, corporate legal departments, or government agencies. The work is deadline-driven and can involve long hours, particularly when preparing for trials or major transactions. Confidentiality and attention to detail are essential.`,
            'education': `Educators work in schools and educational settings. The role involves teaching, grading, and meeting with students and parents. Hours may extend beyond classroom time for preparation and extracurricular activities. Summers may be off depending on the position.`,
            'real-estate': `Real estate professionals have flexible schedules but often work evenings and weekends when clients are available. The role involves traveling to properties and meeting with clients. Income is often commission-based, creating variability in earnings.`,
            'skilled-trades': `Skilled tradespeople work in various settings from construction sites to residential homes. The work is often physical and may be performed outdoors in various weather conditions. Safety is paramount, and the work can be physically demanding.`,
            'hospitality': `Hospitality roles are fast-paced with frequent customer interaction. Work includes evenings, weekends, and holidays when business is busiest. The role requires stamina and a positive attitude even during stressful periods.`,
            'transportation': `Transportation roles involve driving or operating vehicles for extended periods. Time away from home may be required for long-haul positions. Safety regulations must be strictly followed, and the work can be physically and mentally demanding.`
        }

        return environments[cat] || `${title} professionals work in various settings depending on the employer and specific role. The work environment can vary from office-based to field work, with different schedules and requirements.`
    }

    const getCareerPath = (title: string) => {
        return {
            entry: [
                `Junior ${title}`,
                `${title} Assistant`,
                `Associate ${title}`,
                `Entry-level ${title}`
            ],
            mid: [
                `${title}`,
                `Senior ${title}`,
                `Lead ${title}`,
                `${title} II`
            ],
            senior: [
                `Principal ${title}`,
                `${title} Manager`,
                `${title} Director`,
                `VP of ${title.split(' ')[0]}`,
                `Chief ${title.split(' ')[0]} Officer`
            ]
        }
    }

    const careerPath = getCareerPath(jobTitle)
    const responsibilities = getResponsibilities(jobTitle, category)
    const requirements = getRequirements(jobTitle, category)
    const workEnvironment = getWorkEnvironment(jobTitle, category)

    return (
        <Box maxW="5xl" mx="auto" pb={12}>
            <VStack gap={8} align="stretch" bg={'#fff'} p={3} px={5} rounded={'md'}>
                {/* Job Overview */}
                <ContentSection title="Job Overview" defaultOpen>
                    <VStack gap={4} align="start">
                        <Text fontSize="lg" lineHeight="1.7" color="#424245">
                            A <Text as="strong" color="#4241ff">{jobTitle}</Text> is a vital role in the {category} industry.
                            This position involves a combination of technical expertise, problem-solving skills, and effective communication.
                            {jobTitle}s play a crucial role in ensuring organizational success through their specialized knowledge and contributions.
                        </Text>
                        <Text fontSize="lg" lineHeight="1.7" color="#424245">
                            The ideal candidate for this {jobTitle} position should be detail-oriented, adaptable, and committed to continuous learning.
                            This role offers opportunities for career advancement and skill development in a dynamic professional environment.
                        </Text>
                    </VStack>
                </ContentSection>

                {/* Key Responsibilities */}
                <ContentSection title="Key Responsibilities">
                    <Box>
                        <Text fontSize="lg" fontWeight="600" mb={4} color="#1d1d1f">
                            As a {jobTitle}, your primary responsibilities include:
                        </Text>
                        <Box as="ul" css={{ listStyleType: 'disc' }} pl={6} gap={3}>
                            {responsibilities.map((resp, index) => (
                                <Box as="li" key={index} fontSize="lg" lineHeight="1.7" color="#424245">
                                    {resp}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </ContentSection>

                {/* Requirements & Qualifications */}
                <ContentSection title="Requirements & Qualifications">
                    <VStack gap={6} align="stretch">
                        <Box>
                            <Text fontSize="lg" fontWeight="600" mb={3} color="#1d1d1f">
                                Education:
                            </Text>
                            <Text fontSize="lg" lineHeight="1.7" color="#424245">
                                {getEducationLevel(category)}
                            </Text>
                        </Box>

                        <Box>
                            <Text fontSize="lg" fontWeight="600" mb={3} color="#1d1d1f">
                                Required Skills & Experience:
                            </Text>
                            <Box as="ul" css={{ listStyleType: 'disc' }} pl={6} gap={3}>
                                {requirements.map((req, index) => (
                                    <Box as="li" key={index} fontSize="lg" lineHeight="1.7" color="#424245">
                                        {req}
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        <Box>
                            <Text fontSize="lg" fontWeight="600" mb={3} color="#1d1d1f">
                                Preferred Qualifications:
                            </Text>
                            <Box as="ul" css={{ listStyleType: 'disc' }} pl={6} gap={3}>
                                <Box as="li" fontSize="lg" lineHeight="1.7" color="#424245">
                                    {growthRate && growthRate > 15 ? 'Advanced certifications or specialized training' : 'Professional certification relevant to the field'}
                                </Box>
                                <Box as="li" fontSize="lg" lineHeight="1.7" color="#424245">
                                    {growthRate && growthRate > 20 ? '5+ years of experience in similar roles' : '2-5 years of relevant experience'}
                                </Box>
                                <Box as="li" fontSize="lg" lineHeight="1.7" color="#424245">
                                    Strong portfolio of relevant work (where applicable)
                                </Box>
                            </Box>
                        </Box>
                    </VStack>
                </ContentSection>

                {/* Salary & Benefits */}
                <ContentSection title="Salary & Benefits">
                    <VStack gap={4} align="start">
                        <Text fontSize="lg" lineHeight="1.7" color="#424245">
                            The average salary for a <Text as="strong" color="#4241ff">{jobTitle}</Text> ranges from{' '}
                            <Text as="strong">{formatSalary(averageSalary)}</Text> depending on experience,
                            location, and employer. Factors such as specialized skills, certifications, and industry demand
                            can significantly impact compensation.
                        </Text>
                        <Text fontSize="lg" fontWeight="600" color="#1d1d1f">
                            Typical Benefits Include:
                        </Text>
                        <Box as="ul" listStyleType="disc" pl={6} gap={2}>
                            <Box as="li" fontSize="lg" color="#424245">Health, dental, and vision insurance</Box>
                            <Box as="li" fontSize="lg" color="#424245">Retirement savings plans (401k matching)</Box>
                            <Box as="li" fontSize="lg" color="#424245">Paid time off and holidays</Box>
                            <Box as="li" fontSize="lg" color="#424245">Professional development opportunities</Box>
                            <Box as="li" fontSize="lg" color="#424245">Flexible work arrangements (remote/hybrid options)</Box>
                        </Box>
                    </VStack>
                </ContentSection>

                {/* Work Environment */}
                <ContentSection title="Work Environment">
                    <Text fontSize="lg" lineHeight="1.7" color="#424245">
                        {workEnvironment}
                    </Text>
                </ContentSection>

                {/* Career Path & Growth */}
                <ContentSection title="Career Path & Growth">
                    <VStack gap={6} align="stretch">
                        <Box>
                            <Text fontSize="lg" fontWeight="600" mb={3} color="#1d1d1f">
                                Entry-Level Positions:
                            </Text>
                            <Text fontSize="lg" color="#424245">
                                {careerPath.entry.join(' • ')}
                            </Text>
                        </Box>

                        <Box>
                            <Text fontSize="lg" fontWeight="600" mb={3} color="#1d1d1f">
                                Mid-Level Positions:
                            </Text>
                            <Text fontSize="lg" color="#424245">
                                {careerPath.mid.join(' • ')}
                            </Text>
                        </Box>

                        <Box>
                            <Text fontSize="lg" fontWeight="600" mb={3} color="#1d1d1f">
                                Senior-Level Positions:
                            </Text>
                            <Text fontSize="lg" color="#424245">
                                {careerPath.senior.join(' • ')}
                            </Text>
                        </Box>

                        {growthRate !== undefined && (
                            <Box
                                bg="blue.50"
                                borderLeft="4px solid"
                                borderColor="blue.500"
                                p={4}
                                rounded="md"
                            >
                                <Text fontSize="lg" color="#424245">
                                    <Text as="strong" color="blue.600">Job Outlook:</Text> The {jobTitle} field is projected
                                    to grow by <Text as="strong">{growthRate}%</Text> over the next decade, which is
                                    {growthRate > 15 ? ' much faster ' : growthRate > 8 ? ' faster ' : ' about as fast as '}
                                    the average for all occupations. This growth indicates strong demand and
                                    promising career opportunities for qualified professionals.
                                </Text>
                            </Box>
                        )}
                    </VStack>
                </ContentSection>

                {/* Related Job Titles */}
                {aliases.length > 0 && (
                    <ContentSection title="Related Job Titles">
                        <Text fontSize="lg" color="#424245">
                            {aliases.join(', ')}
                        </Text>
                    </ContentSection>
                )}

                {/* Is This Role Right for You? */}
                <ContentSection title="Is This Role Right for You?" defaultOpen>
                    <VStack gap={4} align="start">
                        <Box>
                            <Text fontSize="md" fontWeight="600" color="green.600" mb={2}>
                                ✓ This role may be ideal if you:
                            </Text>
                            <Box as="ul" css={{ listStyleType: 'disc' }} pl={6} gap={2}>
                                <Box as="li" fontSize="lg" color="#424245">Enjoy solving complex problems and challenges</Box>
                                <Box as="li" fontSize="lg" color="#424245">Thrive in collaborative team environments</Box>
                                <Box as="li" fontSize="lg" color="#424245">Are committed to continuous learning and skill development</Box>
                                <Box as="li" fontSize="lg" color="#424245">Have strong attention to detail and quality</Box>
                            </Box>
                        </Box>
                        <Box>
                            <Text fontSize="md" fontWeight="600" color="red.600" mb={2}>
                                ✗ This role might not be ideal if you:
                            </Text>
                            <Box as="ul" css={{ listStyleType: 'disc' }} pl={6} gap={2}>
                                <Box as="li" fontSize="lg" color="#424245">Prefer working alone without collaboration</Box>
                                <Box as="li" fontSize="lg" color="#424245">Dislike adapting to new technologies and methods</Box>
                                <Box as="li" fontSize="lg" color="#424245">Are uncomfortable with deadlines and pressure</Box>
                            </Box>
                        </Box>
                    </VStack>
                </ContentSection>
            </VStack>
        </Box>
    )
}
