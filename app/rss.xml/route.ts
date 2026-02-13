import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
    const baseUrl = 'https://www.hirenest.ai';
    const currentDate = new Date().toUTCString();

    // Define content items for RSS feed
    const items = [
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

    const rssItems = items
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

