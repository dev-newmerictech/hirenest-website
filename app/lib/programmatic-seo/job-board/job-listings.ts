// Job Listings Data for Programmatic SEO
// Generates sample job listings for each job title

import { JobListing, JobLocation, SalaryRange, JobType, ExperienceLevel, JobCategory } from '../types'
import { jobTitles } from '../job-titles'

/**
 * Sample company names for job listings
 */
const COMPANIES = [
    'TechCorp Solutions', 'InnovateTech Inc', 'DataDriven Labs', 'CloudScale Systems',
    'NextGen Digital', 'SmartSoft Technologies', 'PrimeDigital Agency', 'GrowthHackers Co',
    'DigitalFirst Media', 'CreativeMinds Studio', 'SalesForce Pro', 'MarketLeader Inc',
    'HealthTech Solutions', 'FinTech Innovations', 'EduTech Global', 'RetailTech Co',
    'LogiTech Solutions', 'CleanEnergy Corp', 'BioTech Research', 'AutoTech Systems',
    'FoodTech Ventures', 'TravelTech Inc', 'PropTech Solutions', 'LegalTech Co',
    'HireNest AI', 'RecruitSmart Inc', 'TalentFlow Systems', 'PeopleFirst HR',
    'CloudNine Technologies', 'DataPeak Analytics', 'AI Solutions Ltd', 'FutureTech Corp'
]

/**
 * Sample job descriptions by category
 */
const JOB_DESCRIPTIONS: Record<JobCategory, string[]> = {
    technology: [
        'Join our innovative tech team to build cutting-edge solutions. You will work with modern frameworks and collaborate with talented engineers to deliver high-quality software.',
        'We are seeking a skilled technology professional to help us scale our platform. You will work on complex problems and contribute to architectural decisions.',
        'Be part of a dynamic engineering team that values innovation and continuous learning. You will have the opportunity to work on exciting projects with the latest technologies.'
    ],
    marketing: [
        'Drive our marketing initiatives and help us build brand awareness. You will create compelling campaigns and analyze performance to optimize results.',
        'Join our growing marketing team to develop and execute multi-channel marketing strategies. You will work closely with sales and product teams.',
        'We are looking for a creative marketing professional to help us tell our story and engage our audience across various platforms.'
    ],
    sales: [
        'Join our high-performing sales team and help businesses solve their challenges. You will manage the full sales cycle and build lasting relationships with clients.',
        'Be part of a sales-driven organization where your efforts directly impact company growth. You will receive comprehensive training and uncapped earning potential.',
        'We are seeking a motivated sales professional to expand our market presence. You will work with qualified leads and have access to excellent support resources.'
    ],
    healthcare: [
        'Join our healthcare team dedicated to improving patient outcomes. You will work in a state-of-the-art facility with collaborative professionals.',
        'Make a difference in patients\' lives by joining our compassionate healthcare team. We offer excellent benefits and opportunities for professional development.',
        'Be part of a mission-driven healthcare organization. You will provide essential care and support to patients while working in a modern facility.'
    ],
    finance: [
        'Join our finance team to help drive strategic business decisions. You will analyze financial data and provide insights to support company growth.',
        'We are seeking a detail-oriented finance professional to manage our financial operations. You will work with cross-functional teams on key initiatives.',
        'Be part of a growing finance organization where your expertise will shape our financial strategy. We offer competitive compensation and growth opportunities.'
    ],
    hr: [
        'Join our HR team to help us build an exceptional workplace. You will drive initiatives that support employee engagement and organizational success.',
        'We are looking for an HR professional to help us attract and retain top talent. You will manage the full employee lifecycle and implement best practices.',
        'Be part of a people-first HR team that values innovation in human resources. You will have the opportunity to make a meaningful impact on our culture.'
    ],
    design: [
        'Join our creative design team to craft beautiful user experiences. You will work on diverse projects and collaborate with cross-functional teams.',
        'We are seeking a talented designer to help us create stunning visual and interactive experiences. You will have access to the best design tools.',
        'Be part of a design-driven organization where your creativity is valued. You will work on exciting projects that reach millions of users.'
    ],
    'customer-service': [
        'Join our customer service team dedicated to delivering exceptional support. You will be the voice of our company and help customers succeed.',
        'We are seeking a customer-focused professional to join our support team. You will resolve inquiries and ensure customer satisfaction.',
        'Be part of a service-first culture where your contributions matter. You will help customers achieve their goals every day.'
    ],
    admin: [
        'Join our administrative team to keep our operations running smoothly. You will provide essential support to leadership and ensure organizational efficiency.',
        'We are seeking an organized administrative professional to manage office operations. You will be a key contributor to our daily success.',
        'Be part of a dynamic administrative team that supports our entire organization. Your role will be critical to our operational excellence.'
    ],
    engineering: [
        'Join our engineering team to build robust systems and infrastructure. You will work on challenging projects and collaborate with skilled professionals.',
        'We are seeking an engineer to help us design and implement innovative solutions. You will have access to cutting-edge tools and technologies.',
        'Be part of an engineering-driven organization that values technical excellence. You will solve complex problems and build scalable systems.'
    ],
    legal: [
        'Join our legal team to provide strategic guidance on business matters. You will work on diverse legal issues and support organizational objectives.',
        'We are seeking a legal professional to manage our legal affairs. You will work with leadership on contracts, compliance, and risk management.',
        'Be part of a collaborative legal team that values excellence. You will have the opportunity to work on interesting and impactful matters.'
    ],
    education: [
        'Join our education team to inspire and empower learners. You will develop curriculum and deliver engaging learning experiences.',
        'We are seeking an educator to help us transform how people learn. You will have access to modern teaching tools and methodologies.',
        'Be part of an innovative education organization that is changing the landscape of learning. Your impact will be meaningful and lasting.'
    ],
    'real-estate': [
        'Join our real estate team to help clients find their dream properties. You will manage transactions and provide expert guidance.',
        'We are seeking a real estate professional to expand our market presence. You will work with qualified leads and have excellent earning potential.',
        'Be part of a dynamic real estate organization where your success is celebrated. You will receive comprehensive training and support.'
    ],
    'skilled-trades': [
        'Join our skilled trades team to deliver quality craftsmanship. You will work on diverse projects and showcase your expertise.',
        'We are seeking a skilled tradesperson to join our team. You will have access to the best tools and work on interesting projects.',
        'Be part of a team that takes pride in exceptional work. Your skills will be valued and your contributions recognized.'
    ],
    hospitality: [
        'Join our hospitality team to create memorable guest experiences. You will be the face of our brand and ensure exceptional service.',
        'We are seeking a hospitality professional to deliver outstanding guest experiences. You will work in a dynamic and exciting environment.',
        'Be part of a guest-first culture where excellence is expected. Your role will be essential to our reputation and success.'
    ],
    transportation: [
        'Join our transportation team to keep things moving. You will operate modern equipment and ensure timely, safe deliveries.',
        'We are seeking a transportation professional to join our logistics team. You will play a critical role in our supply chain.',
        'Be part of an essential industry that keeps the world moving. Your contributions will be valued and rewarded.'
    ]
}

/**
 * Skills by job category
 */
const SKILLS_BY_CATEGORY: Record<JobCategory, string[]> = {
    technology: ['JavaScript', 'Python', 'React', 'Node.js', 'AWS', 'Docker', 'Git', 'Agile', 'CI/CD', 'SQL'],
    marketing: ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media', 'Email Marketing', 'PPC', 'Marketing Automation', 'CRM'],
    sales: ['CRM', 'Negotiation', 'Lead Generation', 'Closing', 'Presentation Skills', 'Cold Calling', 'Pipeline Management'],
    healthcare: ['Patient Care', 'EMR Systems', 'Medical Terminology', 'HIPAA Compliance', 'Clinical Assessment', 'Communication'],
    finance: ['Financial Analysis', 'Excel', 'Financial Modeling', 'Risk Management', 'Accounting', 'Forecasting', 'Budgeting'],
    hr: ['Recruiting', 'HRIS', 'Employee Relations', 'Performance Management', 'Training', 'Compliance', 'Onboarding'],
    design: ['Figma', 'Adobe Creative Suite', 'UI/UX', 'Prototyping', 'User Research', 'Visual Design', 'Design Systems'],
    'customer-service': ['Communication', 'Problem Solving', 'CRM', 'Patience', 'Product Knowledge', 'De-escalation'],
    admin: ['Microsoft Office', 'Organization', 'Communication', 'Scheduling', 'Data Entry', 'Document Management'],
    engineering: ['CAD', 'Project Management', 'Technical Analysis', 'Quality Assurance', 'Problem Solving', 'Documentation'],
    legal: ['Contract Law', 'Legal Research', 'Compliance', 'Drafting', 'Negotiation', 'Risk Assessment'],
    education: ['Curriculum Development', 'Teaching', 'Classroom Management', 'Assessment', 'Educational Technology'],
    'real-estate': ['Market Analysis', 'Negotiation', 'Contract Law', 'Customer Service', 'Marketing', 'Networking'],
    'skilled-trades': ['Technical Skills', 'Safety Protocols', 'Blueprint Reading', 'Problem Solving', 'Quality Workmanship'],
    hospitality: ['Customer Service', 'Communication', 'Multitasking', 'Problem Solving', 'Guest Relations', 'Teamwork'],
    transportation: ['Driving Skills', 'Navigation', 'Safety Compliance', 'Time Management', 'Vehicle Maintenance']
}

/**
 * Common job requirements by category
 */
const REQUIREMENTS_BY_CATEGORY: Record<JobCategory, string[]> = {
    technology: [
        '3+ years of experience in a similar role',
        'Strong problem-solving skills',
        'Excellent communication abilities',
        'Bachelor\'s degree in CS or related field',
        'Experience with modern development tools'
    ],
    marketing: [
        '2+ years of marketing experience',
        'Strong analytical skills',
        'Creative mindset',
        'Bachelor\'s degree in Marketing or related field',
        'Experience with marketing tools'
    ],
    sales: [
        '1+ years of sales experience',
        'Strong negotiation skills',
        'Goal-oriented mindset',
        'Excellent communication',
        'CRM experience preferred'
    ],
    healthcare: [
        'Valid certification/license',
        'Strong patient care skills',
        'Attention to detail',
        'Excellent bedside manner',
        'EMR experience preferred'
    ],
    finance: [
        '3+ years of finance experience',
        'Strong analytical skills',
        'Attention to detail',
        'Bachelor\'s degree in Finance or Accounting',
        'Excel proficiency required'
    ],
    hr: [
        '2+ years of HR experience',
        'Strong interpersonal skills',
        'Knowledge of HR best practices',
        'Bachelor\'s degree in HR or related field',
        'HRIS experience preferred'
    ],
    design: [
        '3+ years of design experience',
        'Strong portfolio',
        'Proficiency in design tools',
        'Bachelor\'s degree in Design or related field',
        'Understanding of UX principles'
    ],
    'customer-service': [
        '1+ years of customer service experience',
        'Strong communication skills',
        'Patience and empathy',
        'Problem-solving abilities',
        'Computer literacy'
    ],
    admin: [
        '2+ years of administrative experience',
        'Strong organizational skills',
        'Excellent communication',
        'Proficiency in Microsoft Office',
        'Attention to detail'
    ],
    engineering: [
        '3+ years of engineering experience',
        'Strong technical skills',
        'Problem-solving abilities',
        'Bachelor\'s degree in Engineering',
        'Project management experience'
    ],
    legal: [
        '3+ years of legal experience',
        'Strong analytical skills',
        'Attention to detail',
        'Law degree required',
        'Bar admission preferred'
    ],
    education: [
        '2+ years of teaching experience',
        'Strong presentation skills',
        'Patience and creativity',
        'Teaching certification',
        'Subject matter expertise'
    ],
    'real-estate': [
        'Valid real estate license',
        'Strong negotiation skills',
        'Marketing abilities',
        'Knowledge of local market',
        'Networking skills'
    ],
    'skilled-trades': [
        'Relevant certification',
        '3+ years of experience',
        'Strong technical skills',
        'Safety-conscious mindset',
        'Reliability'
    ],
    hospitality: [
        '1+ years of hospitality experience',
        'Strong customer service skills',
        'Friendly demeanor',
        'Ability to work flexible hours',
        'Team player attitude'
    ],
    transportation: [
        'Valid driver\'s license',
        'Clean driving record',
        'Reliable transportation',
        'Good time management',
        'Safety-conscious'
    ]
}

/**
 * Job benefits template
 */
const BENEFITS = [
    'Competitive salary',
    'Health insurance',
    '401(k) with company match',
    'Flexible work schedule',
    'Remote work options',
    'Professional development',
    'Paid time off',
    'Employee discounts',
    'Life insurance',
    'Dental and vision coverage'
]

/**
 * Cities for job locations
 */
const LOCATIONS = [
    { city: 'San Francisco', state: 'CA', country: 'USA' },
    { city: 'New York', state: 'NY', country: 'USA' },
    { city: 'Austin', state: 'TX', country: 'USA' },
    { city: 'Seattle', state: 'WA', country: 'USA' },
    { city: 'Los Angeles', state: 'CA', country: 'USA' },
    { city: 'Chicago', state: 'IL', country: 'USA' },
    { city: 'Boston', state: 'MA', country: 'USA' },
    { city: 'Denver', state: 'CO', country: 'USA' },
    { city: 'Miami', state: 'FL', country: 'USA' },
    { city: 'Atlanta', state: 'GA', country: 'USA' },
    { city: 'Remote', state: '', country: 'USA' }
]

/**
 * Generate random date within last 30 days
 */
function randomRecentDate(): string {
    const daysAgo = Math.floor(Math.random() * 30)
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date.toISOString().split('T')[0]
}

/**
 * Generate salary range based on job title
 */
function generateSalaryRange(jobTitle: string, jobCategory: JobCategory): SalaryRange {
    const job = jobTitles.find(j => j.slug === jobTitle)
    const baseSalary = job?.averageSalary || 70000

    // Create a range around the base salary
    const variance = baseSalary * 0.25
    return {
        min: Math.round(baseSalary - variance),
        max: Math.round(baseSalary + variance),
        currency: 'USD',
        period: 'yearly'
    }
}

/**
 * Generate job listings for a specific job title
 */
export function generateJobListingsForJob(
    jobSlug: string,
    jobTitle: string,
    jobCategory: JobCategory,
    count: number = 15
): JobListing[] {
    const listings: JobListing[] = []
    const descriptions = JOB_DESCRIPTIONS[jobCategory] || JOB_DESCRIPTIONS.technology
    const skills = SKILLS_BY_CATEGORY[jobCategory] || SKILLS_BY_CATEGORY.technology
    const requirements = REQUIREMENTS_BY_CATEGORY[jobCategory] || REQUIREMENTS_BY_CATEGORY.technology

    const jobTypes: JobType[] = ['full-time', 'full-time', 'full-time', 'contract', 'part-time']
    const experienceLevels: ExperienceLevel[] = ['entry-level', 'mid-level', 'mid-level', 'senior-level', 'senior-level', 'lead']

    for (let i = 0; i < count; i++) {
        const company = COMPANIES[i % COMPANIES.length]
        const location = LOCATIONS[Math.min(i, LOCATIONS.length - 1)]
        const isRemote = location.city === 'Remote' || Math.random() > 0.7
        const isHybrid = !isRemote && Math.random() > 0.5

        const jobLocation: JobLocation = {
            city: isRemote ? undefined : location.city,
            state: isRemote ? undefined : location.state,
            country: location.country,
            isRemote,
            isHybrid
        }

        const listing: JobListing = {
            id: `${jobSlug}-${i + 1}`,
            title: jobTitle,
            slug: `${jobSlug}-jobs-${i + 1}`,
            companyName: company,
            companySlug: company.toLowerCase().replace(/\s+/g, '-'),
            location: jobLocation,
            jobType: jobTypes[Math.floor(Math.random() * jobTypes.length)],
            experienceLevel: experienceLevels[Math.floor(Math.random() * experienceLevels.length)],
            salaryRange: generateSalaryRange(jobSlug, jobCategory),
            description: descriptions[i % descriptions.length],
            requirements: requirements.slice(0, 4 + Math.floor(Math.random() * 2)),
            benefits: BENEFITS.slice(0, 5 + Math.floor(Math.random() * 3)),
            skills: skills.slice(0, 4 + Math.floor(Math.random() * 4)),
            postedDate: randomRecentDate(),
            applicationUrl: `https://app.hirenest.ai/jobs/${jobSlug}-${i + 1}`,
            isRemote,
            featured: i < 3, // First 3 are featured
            category: jobCategory
        }

        listings.push(listing)
    }

    return listings
}

/**
 * Get all job listings for a job slug
 */
export function getJobListingsBySlug(jobSlug: string): JobListing[] {
    const job = jobTitles.find(j => j.slug === jobSlug)
    if (!job) return []

    return generateJobListingsForJob(job.slug, job.title, job.category, 12 + Math.floor(Math.random() * 8))
}

/**
 * Get filtered job listings
 */
export function getFilteredJobListings(filters: {
    category?: JobCategory
    jobType?: JobType
    experienceLevel?: ExperienceLevel
    isRemote?: boolean
    keyword?: string
    limit?: number
}): JobListing[] {
    let listings: JobListing[] = []

    // Generate listings for relevant jobs
    const relevantJobs = filters.category
        ? jobTitles.filter(j => j.category === filters.category)
        : jobTitles.slice(0, 50) // Limit to 50 for performance

    for (const job of relevantJobs) {
        listings = listings.concat(generateJobListingsForJob(job.slug, job.title, job.category, 5))
    }

    // Apply filters
    if (filters.jobType) {
        listings = listings.filter(j => j.jobType === filters.jobType)
    }
    if (filters.experienceLevel) {
        listings = listings.filter(j => j.experienceLevel === filters.experienceLevel)
    }
    if (filters.isRemote !== undefined) {
        listings = listings.filter(j => j.isRemote === filters.isRemote)
    }
    if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase()
        listings = listings.filter(j =>
            j.title.toLowerCase().includes(keyword) ||
            j.companyName.toLowerCase().includes(keyword) ||
            j.skills.some(s => s.toLowerCase().includes(keyword))
        )
    }

    // Sort by featured and date
    listings.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
    })

    return filters.limit ? listings.slice(0, filters.limit) : listings
}

/**
 * Get job statistics for a category
 */
export function getJobStatistics(category?: JobCategory) {
    const relevantJobs = category
        ? jobTitles.filter(j => j.category === category)
        : jobTitles

    return {
        totalActiveJobs: relevantJobs.length * 15, // Approximate
        newJobsThisWeek: Math.floor(relevantJobs.length * 2),
        companiesHiring: Math.floor(relevantJobs.length * 1.5),
        averageSalary: {
            min: Math.min(...relevantJobs.map(j => j.averageSalary || 50000)),
            max: Math.max(...relevantJobs.map(j => j.averageSalary || 50000))
        }
    }
}

/**
 * Get featured jobs across all categories
 */
export function getFeaturedJobs(limit: number = 10): JobListing[] {
    const featured: JobListing[] = []
    const jobs = jobTitles.slice(0, 20)

    for (const job of jobs) {
        const listings = generateJobListingsForJob(job.slug, job.title, job.category, 3)
        featured.push(...listings.filter(l => l.featured))
        if (featured.length >= limit) break
    }

    return featured.slice(0, limit)
}
