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
            canonical: path,
            languages: {
                'en-US': `/en-US${path}`,
                'en': path,
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
        description: 'Automatically rank and score candidates with AI. Make data-driven hiring decisions faster.',
        path: '/ai-candidate-ranking',
        keywords: ['candidate ranking', 'AI hiring', 'recruitment AI', 'candidate scoring'],
    }),

    smartJobMatching: generatePageMetadata({
        title: 'Smart Job Matching - Find Perfect Opportunities',
        description: 'AI-driven job matching that analyzes your skills and preferences for personalized recommendations.',
        path: '/smart-job-matching',
        keywords: ['job matching', 'AI matching', 'job recommendations', 'career matching'],
    }),

    careerInsights: generatePageMetadata({
        title: 'Career Insights - Data-Driven Career Decisions',
        description: 'Get personalized career insights, salary benchmarks, and market trends to advance your career.',
        path: '/career-insights',
        keywords: ['career insights', 'salary data', 'career analytics', 'job market trends'],
    }),

    profileOptimization: generatePageMetadata({
        title: 'Profile Optimization - Boost Your Visibility',
        description: 'Optimize your professional profile with AI-powered suggestions to attract better opportunities.',
        path: '/profile-optimization',
        keywords: ['profile optimization', 'LinkedIn optimization', 'professional profile', 'career profile'],
    }),

    skillAssessments: generatePageMetadata({
        title: 'Skill Assessments - Validate Your Expertise',
        description: 'Prove your skills with comprehensive assessments and earn verified badges for employers.',
        path: '/skill-assessments',
        keywords: ['skill assessment', 'skill testing', 'certification', 'skill validation'],
    }),

    customAssessments: generatePageMetadata({
        title: 'Custom Assessments - Tailored Hiring Tests',
        description: 'Create custom assessments specific to your job requirements and company needs.',
        path: '/custom-assessments',
        keywords: ['custom assessment', 'hiring tests', 'recruitment tests', 'skill tests'],
    }),

    quickScreening: generatePageMetadata({
        title: 'Quick Screening - Accelerate Your Hiring',
        description: 'Streamline candidate screening with automated tools and AI-powered assessments.',
        path: '/quick-screening',
        keywords: ['candidate screening', 'quick screening', 'hiring automation', 'applicant screening'],
    }),

    verifiedCandidates: generatePageMetadata({
        title: 'Verified Candidates - Pre-Screened Talent Pool',
        description: 'Access pre-verified candidates with validated skills and backgrounds for faster hiring.',
        path: '/verified-candidates',
        keywords: ['verified candidates', 'pre-screened', 'background check', 'talent pool'],
    }),

    hiringAnalytics: generatePageMetadata({
        title: 'Hiring Analytics - Data-Driven Recruitment',
        description: 'Comprehensive analytics and insights to optimize your recruitment process and hiring strategy.',
        path: '/hiring-analytics',
        keywords: ['hiring analytics', 'recruitment metrics', 'HR analytics', 'hiring insights'],
    }),

    teamCollaboration: generatePageMetadata({
        title: 'Team Collaboration - Collaborative Hiring',
        description: 'Collaborate with your hiring team through shared feedback and decision-making tools.',
        path: '/team-collaboration',
        keywords: ['team collaboration', 'collaborative hiring', 'hiring team', 'recruitment collaboration'],
    }),

    fastTrackApplications: generatePageMetadata({
        title: 'Fast Track Applications - Quick Apply Process',
        description: 'Streamline your application process and get hired faster with our fast-track system.',
        path: '/fast-track-applications',
        keywords: ['fast track', 'quick apply', 'job application', 'easy apply'],
    }),

    about: generatePageMetadata({
        title: 'About Hirenest - Our Mission & Vision',
        description: 'Learn about Hirenest mission to revolutionize recruitment through AI-powered technology.',
        path: '/about',
        keywords: ['about us', 'company mission', 'recruitment platform', 'AI hiring'],
    }),

    careers: generatePageMetadata({
        title: 'Careers at Hirenest - Join Our Team',
        description: 'Join the Hirenest team and help shape the future of recruitment technology.',
        path: '/careers',
        keywords: ['careers', 'jobs at hirenest', 'work with us', 'hiring'],
    }),

    security: generatePageMetadata({
        title: 'Security - Your Data Protection',
        description: 'Learn about our security practices and commitment to protecting your data.',
        path: '/security',
        keywords: ['security', 'data protection', 'privacy', 'data security'],
    }),

    privacyPolicy: generatePageMetadata({
        title: 'Privacy Policy - How We Protect Your Data',
        description: 'Our commitment to protecting your privacy and personal information.',
        path: '/privacy-policy',
        keywords: ['privacy policy', 'data privacy', 'personal information', 'GDPR'],
    }),

    termsOfService: generatePageMetadata({
        title: 'Terms of Service - User Agreement',
        description: 'Terms and conditions for using the Hirenest platform.',
        path: '/terms-of-service',
        keywords: ['terms of service', 'user agreement', 'terms and conditions', 'legal'],
    }),

    cookiePolicy: generatePageMetadata({
        title: 'Cookie Policy - How We Use Cookies',
        description: 'Information about how we use cookies and similar technologies.',
        path: '/cookie-policy',
        keywords: ['cookie policy', 'cookies', 'tracking', 'web analytics'],
    }),

    refundPolicy: generatePageMetadata({
        title: 'Refund Policy - Our Refund Terms',
        description: 'Our refund policy and terms for subscription cancellations.',
        path: '/refund-policy',
        keywords: ['refund policy', 'cancellation', 'money back', 'refunds'],
    }),

    legal: generatePageMetadata({
        title: 'Legal Information - Terms & Policies',
        description: 'Legal information, terms, and policies for using Hirenest.',
        path: '/legal',
        keywords: ['legal', 'terms', 'policies', 'compliance'],
    }),
};
