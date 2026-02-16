import { NextResponse } from 'next/server';
import { jobTitles } from '../lib/programmatic-seo/job-titles';

export const dynamic = 'force-static';

export async function GET() {
    const baseUrl = 'https://hirenest.ai';
    const currentDate = new Date().toUTCString();

    // Main feature items
    const featureItems = [
        {
            title: 'AI-Powered Resume Builder',
            link: `${baseUrl}/ai-resume-builder`,
            description: 'Create professional, ATS-optimized resumes with our AI-powered resume builder. Stand out from the competition with tailored resume suggestions.',
            pubDate: currentDate,
            category: 'AI Features',
        },
        {
            title: 'Smart Job Matching',
            link: `${baseUrl}/smart-job-matching`,
            description: 'Find your perfect job match with our AI-driven job matching algorithm. Get personalized job recommendations based on your skills and preferences.',
            pubDate: currentDate,
            category: 'AI Features',
        },
        {
            title: 'AI Candidate Ranking',
            link: `${baseUrl}/ai-candidate-ranking`,
            description: 'Streamline your hiring process with AI-powered candidate ranking. Identify the best candidates faster and make data-driven hiring decisions.',
            pubDate: currentDate,
            category: 'Employer Features',
        },
        {
            title: 'Career Insights & Analytics',
            link: `${baseUrl}/career-insights`,
            description: 'Get personalized career insights and market analytics to make informed career decisions and stay ahead in your professional journey.',
            pubDate: currentDate,
            category: 'Career Development',
        },
        {
            title: 'Skill Assessments',
            link: `${baseUrl}/skill-assessments`,
            description: 'Validate your skills with comprehensive assessments. Showcase your expertise to potential employers with verified skill badges.',
            pubDate: currentDate,
            category: 'Assessments',
        },
        {
            title: 'Profile Optimization',
            link: `${baseUrl}/profile-optimization`,
            description: 'Optimize your professional profile with AI-powered suggestions. Increase your visibility and attract better job opportunities.',
            pubDate: currentDate,
            category: 'Job Seeker Tools',
        },
        {
            title: 'Quick Screening',
            link: `${baseUrl}/quick-screening`,
            description: 'Accelerate your hiring process with quick and efficient candidate screening tools. Save time while finding the right talent.',
            pubDate: currentDate,
            category: 'Employer Features',
        },
        {
            title: 'Hiring Analytics',
            link: `${baseUrl}/hiring-analytics`,
            description: 'Make data-driven hiring decisions with comprehensive analytics and insights. Track your recruitment metrics and optimize your hiring strategy.',
            pubDate: currentDate,
            category: 'Analytics',
        },
    ];

    // Interview Questions items - Index page
    const interviewQuestionsIndexItem = {
        title: 'Interview Questions - All Jobs',
        link: `${baseUrl}/interview-questions`,
        description: 'Prepare for your job interview with our comprehensive collection of interview questions and answers for 50+ job titles. Expert tips, behavioral questions, and technical interview prep.',
        pubDate: currentDate,
        category: 'Interview Preparation',
    };

    // Resume Keywords items - Index page
    const resumeKeywordsIndexItem = {
        title: 'Resume Keywords & Skills',
        link: `${baseUrl}/resume-keywords`,
        description: 'Discover the best resume keywords and skills for your job. Optimize your resume for ATS and impress recruiters with our comprehensive guides covering 50+ job titles.',
        pubDate: currentDate,
        category: 'Resume Writing',
    };

    // Generate individual interview question items (top 20 most popular)
    const interviewQuestionItems = jobTitles.slice(0, 20).map((job) => ({
        title: `${job.title} Interview Questions & Answers`,
        link: `${baseUrl}/interview-questions/${job.slug}`,
        description: `Prepare for your ${job.title} interview with our comprehensive guide. Discover the most commonly asked questions, expert-approved answers, and proven strategies to ace your next job interview.`,
        pubDate: currentDate,
        category: 'Interview Preparation',
    }));

    // Generate individual resume keyword items (top 20 most popular)
    const resumeKeywordItems = jobTitles.slice(0, 20).map((job) => ({
        title: `${job.title} Resume Keywords & Skills`,
        link: `${baseUrl}/resume-keywords/${job.slug}`,
        description: `Discover the top ${job.title} resume keywords and skills that get past ATS scanners. Our comprehensive list includes hard skills, soft skills, and action verbs to make your resume stand out.`,
        pubDate: currentDate,
        category: 'Resume Writing',
    }));

    // Combine all items
    const allItems = [
        ...featureItems,
        interviewQuestionsIndexItem,
        resumeKeywordsIndexItem,
        ...interviewQuestionItems,
        ...resumeKeywordItems,
    ];

    const rssItems = allItems
        .map(
            (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
      <category>${item.category}</category>
      <guid isPermaLink="true">${item.link}</guid>
    </item>`
        )
        .join('');

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Hirenest - Connect Job Seekers with Employers</title>
    <link>${baseUrl}</link>
    <description>Your trusted platform connecting job seekers with top employers. Find your dream job or discover exceptional talent for your organization.</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/og-image.png</url>
      <title>Hirenest</title>
      <link>${baseUrl}</link>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} Hirenest. All rights reserved.</copyright>
    <managingEditor>hello@hirenest.ai (Hirenest Team)</managingEditor>
    <webMaster>hello@hirenest.ai (Hirenest Team)</webMaster>
    <category>Jobs and Recruitment</category>
    <category>Career Development</category>
    <category>AI Technology</category>
    <category>Interview Preparation</category>
    <category>Resume Writing</category>
    <ttl>60</ttl>
    ${rssItems}
  </channel>
</rss>`;

    return new NextResponse(rssFeed, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
    });
}
