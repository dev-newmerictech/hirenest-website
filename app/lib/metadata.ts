import { Metadata } from 'next';

interface GenerateMetadataParams {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    ogImage?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

export function generatePageMetadata({
    title,
    description,
    path,
    keywords = [],
    ogImage = '/og-image.png',
    publishedTime,
    modifiedTime,
}: GenerateMetadataParams): Metadata {
    const baseUrl = 'https://hirenest.ai';
    const url = `${baseUrl}${path}`;

    // Use current date if not provided
    const currentDate = new Date().toISOString();
    const published = publishedTime || currentDate;
    const modified = modifiedTime || currentDate;

    // Ensure image URL is absolute
    const imageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

    return {
        title,
        description,
        keywords: ['Hirenest', ...keywords],
        alternates: {
            canonical: url,
            languages: {
                'en-US': url,
                'x-default': url,
            },
        },
        openGraph: {
            title,
            description,
            url,
            siteName: 'Hirenest',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                    type: 'image/png',
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@hirenest',
            creator: '@hirenest',
            title,
            description,
            images: {
                url: imageUrl,
                alt: title,
            },
        },
        other: {
            'article:published_time': published,
            'article:modified_time': modified,
        },
    };
}

export const pageMetadata = {
    home: generatePageMetadata({
        title: 'Hirenest - Connect Job Seekers with Employers',
        description: 'AI-powered platform connecting job seekers with top employers. Find your dream job or discover exceptional talent.',
        path: '/',
        keywords: ['job search', 'recruitment', 'hiring', 'AI jobs'],
    }),

    jobSeeker: generatePageMetadata({
        title: 'For Job Seekers - Find Your Dream Job',
        description: 'Discover your perfect job with AI-powered matching, resume building, and career insights. Stand out from the competition.',
        path: '/job-seeker',
        keywords: ['job seeker', 'find jobs', 'career development', 'resume builder'],
        ogImage: '/job-seeker-og.png',
    }),

    jobProvider: generatePageMetadata({
        title: 'For Employers - Hire Top Talent',
        description: 'Find and hire exceptional talent with AI-powered candidate ranking, screening tools, and comprehensive analytics.',
        path: '/job-provider',
        keywords: ['employer', 'hire talent', 'recruitment software', 'candidate screening'],
        ogImage: '/job-provider-og.png',
    }),

    aiResumeBuilder: generatePageMetadata({
        title: 'AI Resume Builder - Create Professional Resumes',
        description: 'Build ATS-optimized resumes with AI assistance. Get personalized suggestions and stand out to employers.',
        path: '/ai-resume-builder',
        keywords: ['resume builder', 'AI resume', 'ATS optimization', 'professional resume'],
    }),

    aiCandidateRanking: generatePageMetadata({
        title: 'AI Candidate Ranking - Smart Hiring Decisions',
        description: 'Instantly identify top talent with AI Candidate Ranking. Our smart scoring system evaluates skills and fit for faster, data-driven hiring decisions.',
        path: '/ai-candidate-ranking',
        keywords: ['candidate ranking', 'AI hiring', 'recruitment AI', 'candidate scoring'],
    }),

    smartJobMatching: generatePageMetadata({
        title: 'Smart Job Matching - Find Perfect Opportunities',
        description: 'AI-driven job matching that analyzes your skills, experience, and preferences to deliver personalized job recommendations. Find your perfect role faster.',
        path: '/smart-job-matching',
        keywords: ['job matching', 'AI matching', 'job recommendations', 'career matching'],
    }),

    careerInsights: generatePageMetadata({
        title: 'Career Insights - Data-Driven Career Decisions',
        description: 'Get personalized AI-powered career insights, real-time salary benchmarks, and emerging market trends to make data-driven decisions and advance your career.',
        path: '/career-insights',
        keywords: ['career insights', 'salary data', 'career analytics', 'job market trends'],
    }),

    profileOptimization: generatePageMetadata({
        title: 'Profile Optimization - Boost Your Visibility',
        description: 'Transform your online presence with AI-powered profile optimization. Enhance your LinkedIn profile and portfolio to attract recruiters and land your dream job.',
        path: '/profile-optimization',
        keywords: ['profile optimization', 'LinkedIn optimization', 'professional profile', 'career profile'],
    }),

    skillAssessments: generatePageMetadata({
        title: 'Skill Assessments - Validate Your Expertise',
        description: 'Validate your expertise with 350+ industry-standard skill assessments. Earn verified badges in coding, soft skills, and more to stand out to top employers.',
        path: '/skill-assessments',
        keywords: ['skill assessment', 'skill testing', 'certification', 'skill validation'],
    }),

    customAssessments: generatePageMetadata({
        title: 'Custom Assessments - Tailored Hiring Tests',
        description: 'Create custom skill assessments tailored to your specific job requirements. Use our drag-and-drop builder to test coding, soft skills, and more.',
        path: '/custom-assessments',
        keywords: ['custom assessment', 'hiring tests', 'recruitment tests', 'skill tests'],
    }),

    quickScreening: generatePageMetadata({
        title: 'Quick Screening - Accelerate Your Hiring',
        description: 'Accelerate your hiring with Quick Screening. Use automated tools to filter candidates, screen in minutes not days, and fast-track the best talent.',
        path: '/quick-screening',
        keywords: ['candidate screening', 'quick screening', 'hiring automation', 'applicant screening'],
    }),

    verifiedCandidates: generatePageMetadata({
        title: 'Verified Candidates - Pre-Screened Talent Pool',
        description: 'Hire with confidence using Verified Candidates. Access talent with pre-validated skills, comprehensive background checks, and confirmed employment history.',
        path: '/verified-candidates',
        keywords: ['verified candidates', 'pre-screened', 'background check', 'talent pool'],
    }),

    hiringAnalytics: generatePageMetadata({
        title: 'Hiring Analytics - Data-Driven Recruitment',
        description: 'Optimize your recruitment with comprehensive Hiring Analytics. Track real-time metrics, identify bottlenecks, and make data-driven decisions to hire faster.',
        path: '/hiring-analytics',
        keywords: ['hiring analytics', 'recruitment metrics', 'HR analytics', 'hiring insights'],
    }),

    teamCollaboration: generatePageMetadata({
        title: 'Team Collaboration - Collaborative Hiring',
        description: 'Streamline hiring with Team Collaboration tools. Share candidate pipelines, discuss in real-time, and make smarter hiring decisions together.',
        path: '/team-collaboration',
        keywords: ['team collaboration', 'collaborative hiring', 'hiring team', 'recruitment collaboration'],
    }),

    fastTrackApplications: generatePageMetadata({
        title: 'Fast Track Applications - Quick Apply Process',
        description: 'Skip the queue with Fast-Track Applications. Streamline your search, apply with one click to verified employers, and get priority review.',
        path: '/fast-track-applications',
        keywords: ['fast track', 'quick apply', 'job application', 'easy apply'],
    }),

    about: generatePageMetadata({
        title: 'About Hirenest - Our Mission & Vision',
        description: 'Learn about Hirenest\'s mission to revolutionize recruitment with AI. Discover our story, values, and the team behind the next generation of hiring technology.',
        path: '/about',
        keywords: ['about us', 'company mission', 'recruitment platform', 'AI hiring'],
    }),

    careers: generatePageMetadata({
        title: 'Careers at Hirenest - Join Our Team',
        description: 'Build the future of recruitment with Hirenest. Explore open positions, learn about our culture, and join a team dedicated to transforming hiring with AI.',
        path: '/careers',
        keywords: ['careers', 'jobs at hirenest', 'work with us', 'hiring'],
    }),

    security: generatePageMetadata({
        title: 'Security - Your Data Protection',
        description: 'Your security comes first. Learn about Hirenest\'s enterprise-grade data protection, encryption standards, and commitment to keeping your information safe.',
        path: '/security',
        keywords: ['security', 'data protection', 'privacy', 'data security'],
    }),

    privacyPolicy: generatePageMetadata({
        title: 'Privacy Policy - How We Protect Your Data',
        description: 'Hirenest Privacy Policy. Understand how we collect, use, and safeguard your personal data. Transparent practices for job seekers and employers.',
        path: '/privacy-policy',
        keywords: ['privacy policy', 'data privacy', 'personal information', 'GDPR'],
    }),

    termsOfService: generatePageMetadata({
        title: 'Terms of Service - User Agreement',
        description: 'Hirenest Terms of Service. Review the rules, guidelines, and user agreements for accessing and using our recruitment platform.',
        path: '/terms-of-service',
        keywords: ['terms of service', 'user agreement', 'terms and conditions', 'legal'],
    }),

    cookiePolicy: generatePageMetadata({
        title: 'Cookie Policy - How We Use Cookies',
        description: 'Hirenest Cookie Policy. Learn about the cookies we use to improve your experience, analyze traffic, and personalize content. Manage your preferences.',
        path: '/cookie-policy',
        keywords: ['cookie policy', 'cookies', 'tracking', 'web analytics'],
    }),

    refundPolicy: generatePageMetadata({
        title: 'Refund Policy - Our Refund Terms',
        description: 'Hirenest Refund Policy. Clear details on our 30-day money-back guarantee, subscription cancellations, and refund processing timelines.',
        path: '/refund-policy',
        keywords: ['refund policy', 'cancellation', 'money back', 'refunds'],
    }),

    legal: generatePageMetadata({
        title: 'Legal Information - Terms & Policies',
        description: 'Hirenest Legal Hub. Access all legal documents, policies, and terms governing your use of the Hirenest recruitment platform.',
        path: '/legal',
        keywords: ['legal', 'terms', 'policies', 'compliance'],
    }),
};
