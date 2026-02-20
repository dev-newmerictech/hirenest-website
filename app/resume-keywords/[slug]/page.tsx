import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
    Box, Wrap, WrapItem, Text, Heading, VStack, HStack,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { SeoHero } from '../../components/programmatic-seo/SeoHero'
import { SeoContentSection, SeoCardGrid, SeoKeywordBadge, SeoCard } from '../../components/programmatic-seo/SeoContentSection'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block'
import { getJobBySlug } from '../../lib/programmatic-seo/job-titles'
import { getKeywordsForJob, getKeywordsByCategory } from '../../lib/programmatic-seo/resume-keywords'
import { generatePageMetadata } from '../../lib/metadata'
import { Check, BookOpen, Wrench, Award } from 'lucide-react'
// New SEO components
import { JsonLdSchema, BreadcrumbNav, InternalLinking } from '../../components/seo'
import { getRelatedPages, getCrossTemplateLinks, getBreadcrumbItems } from '../../lib/seo/helpers'
import { buildPageSchemas } from '../../lib/seo/core/schema-builder-factory'
import { SEO_CONFIG } from '../../lib/seo/core/constants'

// Force static generation for optimal performance
export const dynamic = 'force-static';

// Generate static params for all job titles
export async function generateStaticParams() {
    const { jobTitles } = await import('../../lib/programmatic-seo/job-titles')
    return jobTitles.map((job) => ({
        slug: job.slug,
    }))
}

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const job = getJobBySlug(slug)

    if (!job) {
        return {
            title: 'Page Not Found'
        }
    }

    const title = `${job.title} Resume Keywords & Skills`
    const description = `Discover top ${job.title} resume keywords and skills that get past ATS scanners. Includes hard skills, soft skills, and action verbs for resumes.`

    return generatePageMetadata({
        title,
        description,
        path: `/resume-keywords/${slug}`,
        keywords: [
            `$${job.title} resume keywords`,
            `$${job.title} skills for resume`,
            `$${job.title} resume keywords 2026`,
            `ATS resume keywords $${job.title}`,
            `$${job.title} resume skills`,
            `best keywords for $${job.title} resume`,
            `$${job.title} resume examples`,
            ...job.aliases.flatMap(alias => [
                `${alias} resume keywords`,
                `${alias} skills for resume`
            ])
        ]
    })
}

export default async function ResumeKeywordsPage({ params }: PageProps) {
    const { slug } = await params
    const job = getJobBySlug(slug)

    if (!job) {
        notFound()
    }

    const keywords = getKeywordsForJob(slug)
    const hardSkills = keywords.filter(k => k.category === 'hard-skill')
    const tools = keywords.filter(k => k.category === 'tool')
    const softSkills = keywords.filter(k => k.category === 'soft-skill')
    const actionVerbs = keywords.filter(k => k.category === 'action-verb')
    const certifications = keywords.filter(k => k.category === 'certification')

    // Get related pages for internal linking
    const relatedPages = getRelatedPages(slug, 'resume-keywords', 6)
    const crossTemplateLinks = getCrossTemplateLinks(slug, job.title)
    const breadcrumbItems = getBreadcrumbItems('resume-keywords', job.title, slug)

    // Build schema.org structured data
    const pageUrl = `${SEO_CONFIG.BASE_URL}/resume-keywords/${slug}`
    const faqItems = [
        { question: `What are the most important resume keywords for ${job.title} positions?`, answer: `The most important keywords include technical skills specific to ${job.title} roles, industry-standard tools, certifications, and soft skills like communication and leadership.` },
        { question: `How many keywords should I include in my ${job.title} resume?`, answer: `Include 15-25 relevant keywords throughout your resume. Focus on hard skills, tools, and industry-specific terms mentioned in the job description.` },
        { question: `Where should I place keywords in my ${job.title} resume?`, answer: `Place keywords in your skills section, professional summary, and throughout your work experience. Use natural language while incorporating relevant terms.` }
    ]
    const schemas = buildPageSchemas({
        title: `${job.title} Resume Keywords & Skills`,
        description: `Discover top ${job.title} resume keywords and skills that get past ATS scanners. Includes hard skills, soft skills, and action verbs for resumes.`,
        url: pageUrl,
        faqs: faqItems,
        breadcrumbs: breadcrumbItems,
        dateModified: new Date().toISOString()
    })

    return (
        <Box>
            {/* Structured Data - SEO (New Schema Builder) */}
            <JsonLdSchema schemas={schemas} />

            {/* Hero Section */}
            <SeoHero
                badge={`${job.title} Resume Guide`}
                title={`${job.title} Resume Keywords`}
                titleHighlight="That Get You Hired"
                description={`Optimize your ${job.title} resume with ATS-friendly keywords that recruiters search for. Our comprehensive list includes ${keywords.length}+ proven keywords and skills to help your resume stand out and get noticed.`}
                ctaText="Build Your Resume"
                ctaHref="https://app.hirenest.ai"
                stats={[
                    { value: keywords.length.toString(), label: 'Keywords Listed' },
                    { value: hardSkills.length.toString(), label: 'Key Skills' },
                    { value: 'ATS', label: 'Optimized' }
                ]}
            />

            {/* Breadcrumb Navigation - New Component */}
            <Box justifyContent="center" display="flex" py={6} px={4}>
                <BreadcrumbNav
                    items={breadcrumbItems.map(item => ({
                        name: item.name,
                        url: item.url,
                        position: 0
                    }))}
                    separator="chevron"
                />
            </Box>
            {/* Why Keywords Matter */}
            <SeoContentSection
                badge="ATS Optimization"
                title={`Why Resume Keywords Matter for ${job.title} Roles`}
                description={`Most companies use Applicant Tracking Systems (ATS) to filter resumes. Using the right keywords ensures your ${job.title} resume passes these filters and reaches human recruiters.`}
                bgColor="white"
            >
                <SeoCardGrid>
                    <SeoCard
                        title="Beat the ATS"
                        description={`ATS scanners search for specific keywords matching the job description. Our list includes terms that ${job.title} recruiters actively search for.`}
                    />
                    <SeoCard
                        title="Match Job Descriptions"
                        description={`Align your resume with ${job.title} job postings using industry-standard terminology. This shows you understand the role and requirements.`}
                    />
                    <SeoCard
                        title="Stand Out to Recruiters"
                        description={`When recruiters review resumes, they look for relevant keywords. Highlighting the right ${job.title} skills grabs attention quickly.`}
                    />
                </SeoCardGrid>
            </SeoContentSection>

            {/* Hard Skills Section */}
            <SeoContentSection
                badge={<HStack gap={2}><BookOpen size={4} /><Text>Hard Skills</Text></HStack>}
                title={`Essential ${job.title} Hard Skills`}
                description={`These technical skills are crucial for ${job.title} roles. Include them in your skills section and work experience.`}
                bgColor="gray.50"
            >
                <Wrap gap={3} justify="center" maxW="6xl" mx="auto">
                    {hardSkills.map((keyword) => (
                        <WrapItem key={keyword.id}>
                            <SeoKeywordBadge
                                keyword={keyword.keyword}
                                category={keyword.context}
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            </SeoContentSection>

            {/* Tools & Software */}
            {tools.length > 0 && (
                <SeoContentSection
                    badge={<HStack gap={2}><Wrench size={4} /><Text>Tools & Software</Text></HStack>}
                    title={`${job.title} Tools & Software`}
                    description={`Familiarity with these tools demonstrates your practical ${job.title} expertise. List them prominently on your resume.`}
                    bgColor="white"
                >
                    <Wrap gap={3} justify="center" maxW="5xl" mx="auto">
                        {tools.map((keyword) => (
                            <WrapItem key={keyword.id}>
                                <SeoKeywordBadge
                                    keyword={keyword.keyword}
                                    category={keyword.context}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>
                </SeoContentSection>
            )}

            {/* Soft Skills Section */}
            {softSkills.length > 0 && (
                <SeoContentSection
                    badge="Soft Skills"
                    title={`${job.title} Soft Skills`}
                    description={`These interpersonal qualities make ${job.title} professionals successful. Weave them into your summary and experience sections.`}
                    bgColor="gray.50"
                >
                    <Wrap gap={3} justify="center" maxW="5xl" mx="auto">
                        {softSkills.map((keyword) => (
                            <WrapItem key={keyword.id}>
                                <SeoKeywordBadge
                                    keyword={keyword.keyword}
                                    category={keyword.context}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>
                </SeoContentSection>
            )}

            {/* Action Verbs */}
            {actionVerbs.length > 0 && (
                <SeoContentSection
                    badge="Power Words"
                    title={`${job.title} Resume Action Verbs`}
                    description={`Start your bullet points with these strong action verbs to create impactful statements that showcase your ${job.title} achievements.`}
                    bgColor="white"
                >
                    <Wrap gap={3} justify="center" maxW="5xl" mx="auto">
                        {actionVerbs.map((keyword) => (
                            <WrapItem key={keyword.id}>
                                <SeoKeywordBadge
                                    keyword={keyword.keyword}
                                    category={keyword.context}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>
                </SeoContentSection>
            )}

            {/* Sample Bullet Points */}
            <SeoContentSection
                badge="Examples"
                title={`${job.title} Resume Bullet Point Examples`}
                description="Use these templates as inspiration for writing impactful bullet points that incorporate keywords."
                bgColor="white"
            >
                <SeoCardGrid>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="md" fontWeight="600" color="#4241ff" mb={2}>EXAMPLE 1</Text>
                        <Text fontSize="lg" color="#1d1d1f" lineHeight="1.7">
                            <Text as="strong">Spearheaded</Text> the development of <Text as="strong" color="#4241ff">{job.title}</Text> projects using <Text as="strong" color="#4241ff">Agile methodology</Text>, resulting in a 30% improvement in <Text as="strong" color="#4241ff">team productivity</Text> and on-time delivery of all milestones.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="md" fontWeight="600" color="#4241ff" mb={2}>EXAMPLE 2</Text>
                        <Text fontSize="lg" color="#1d1d1f" lineHeight="1.7">
                            <Text as="strong">Implemented</Text> automated <Text as="strong" color="#4241ff">testing protocols</Text> that reduced bugs by 45% and improved <Text as="strong" color="#4241ff">code quality</Text> across the <Text as="strong" color="#4241ff">{job.title}</Text> team.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="md" fontWeight="600" color="#4241ff" mb={2}>EXAMPLE 3</Text>
                        <Text fontSize="lg" color="#1d1d1f" lineHeight="1.7">
                            <Text as="strong">Collaborated</Text> with cross-functional teams using <Text as="strong" color="#4241ff">project management tools</Text> to deliver <Text as="strong" color="#4241ff">{job.title}</Text> initiatives 2 weeks ahead of schedule.
                        </Text>
                    </Box>
                    <Box
                        bg="white"
                        p={6}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="md" fontWeight="600" color="#4241ff" mb={2}>EXAMPLE 4</Text>
                        <Text fontSize="lg" color="#1d1d1f" lineHeight="1.7">
                            <Text as="strong">Optimized</Text> database performance through <Text as="strong" color="#4241ff">SQL query refinement</Text>, reducing load times by 60% and enhancing <Text as="strong" color="#4241ff">user experience</Text>.
                        </Text>
                    </Box>
                </SeoCardGrid>
            </SeoContentSection>

            {/* Related Roles - Internal Linking */}
            {relatedPages.length > 0 && (
                <InternalLinking
                    title="Related Resume Keywords"
                    description="Find resume keywords for similar roles to expand your options."
                    links={relatedPages}
                    columns={3}
                    variant="card"
                    maxLinks={6}
                />
            )}

            {/* Cross-Template Links - Same Job, Different Templates */}
            {crossTemplateLinks.length > 0 && (
                <InternalLinking
                    title={`More Resources for ${job.title}`}
                    description={`Explore additional resources and guides specifically for ${job.title} positions.`}
                    links={crossTemplateLinks}
                    columns={3}
                    variant="card"
                    maxLinks={6}
                />
            )}

            {/* Final CTA */}
            <CTA />
            <FAQ />
        </Box>
    )
}
