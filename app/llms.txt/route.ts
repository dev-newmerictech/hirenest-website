import { NextResponse } from 'next/server';
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

// Force Node.js runtime to avoid edge runtime module loading issues
export const runtime = 'nodejs';

// Escape XML special characters
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const baseUrl = 'https://hirenest.ai';
  const currentDate = new Date().toISOString();

  // Fetch recent blog posts for LLM context
  const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  let blogPages: any[] = [];

  try {
    const posts = await client.query(api.posts.getAllPosts);
    blogPages = posts
      .slice(0, 50)
      .map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        title: escapeXml(post.title || ''),
        description: escapeXml(post.description || ''),
        type: 'blog-post',
      }));
  } catch (error) {
    console.error("Failed to fetch blog posts for LLMs:", error);
  }

  // LLM-optimized content structure
  const llmsContent = {
    // ... existing metadata ...
    metadata: {
      name: 'Hirenest',
      description: 'AI-powered platform connecting job seekers with employers through intelligent matching, resume building, and comprehensive hiring tools',
      url: baseUrl,
      lastUpdated: currentDate,
      version: '1.0',
      language: 'en',
      category: 'Jobs and Recruitment Platform',
      keywords: [
        'job search',
        'recruitment',
        'AI hiring',
        'resume builder',
        'candidate matching',
        'skill assessment',
        'career development',
        'talent acquisition',
      ],
    },
    // ... features ...
    features: {
      forJobSeekers: [
        {
          name: 'AI Resume Builder',
          url: `${baseUrl}/ai-resume-builder`,
          description: 'Create ATS-optimized resumes with AI assistance. Get personalized suggestions and formatting to stand out to employers.',
          capabilities: ['AI-powered content suggestions', 'ATS optimization', 'Multiple templates', 'Real-time preview'],
        },
        {
          name: 'Smart Job Matching',
          url: `${baseUrl}/smart-job-matching`,
          description: 'AI-driven job matching algorithm that analyzes your skills, experience, and preferences to recommend the most suitable positions.',
          capabilities: ['Intelligent matching', 'Personalized recommendations', 'Skill-based filtering', 'Career path suggestions'],
        },
        {
          name: 'Career Insights',
          url: `${baseUrl}/career-insights`,
          description: 'Get data-driven career insights, salary benchmarks, and market trends to make informed career decisions.',
          capabilities: ['Market analytics', 'Salary insights', 'Career path analysis', 'Industry trends'],
        },
        {
          name: 'Profile Optimization',
          url: `${baseUrl}/profile-optimization`,
          description: 'AI-powered profile optimization to increase visibility and attract better job opportunities.',
          capabilities: ['Profile analysis', 'Optimization suggestions', 'Visibility scoring', 'Keyword optimization'],
        },
        {
          name: 'Skill Assessments',
          url: `${baseUrl}/skill-assessments`,
          description: 'Validate your skills through comprehensive assessments and earn verified badges to showcase to employers.',
          capabilities: ['Multiple skill domains', 'Verified certifications', 'Performance analytics', 'Skill gap analysis'],
        },
      ],
      forEmployers: [
        {
          name: 'AI Candidate Ranking',
          url: `${baseUrl}/ai-candidate-ranking`,
          description: 'Automatically rank and score candidates based on job requirements using advanced AI algorithms.',
          capabilities: ['Automated ranking', 'Skill matching', 'Experience analysis', 'Cultural fit assessment'],
        },
        {
          name: 'Quick Screening',
          url: `${baseUrl}/quick-screening`,
          description: 'Streamline candidate screening with automated tools and AI-powered initial assessments.',
          capabilities: ['Automated screening', 'Custom questionnaires', 'Video interviews', 'Instant feedback'],
        },
        {
          name: 'Custom Assessments',
          url: `${baseUrl}/custom-assessments`,
          description: 'Create tailored assessments specific to your job requirements and company needs.',
          capabilities: ['Custom test creation', 'Multiple question types', 'Automated grading', 'Analytics dashboard'],
        },
        {
          name: 'Hiring Analytics',
          url: `${baseUrl}/hiring-analytics`,
          description: 'Comprehensive analytics and insights to optimize your recruitment process and make data-driven decisions.',
          capabilities: ['Recruitment metrics', 'Time-to-hire tracking', 'Source effectiveness', 'Candidate pipeline analytics'],
        },
        {
          name: 'Team Collaboration',
          url: `${baseUrl}/team-collaboration`,
          description: 'Collaborate with your hiring team through shared feedback, notes, and decision-making tools.',
          capabilities: ['Shared candidate reviews', 'Team feedback', 'Interview scheduling', 'Decision tracking'],
        },
        {
          name: 'Verified Candidates',
          url: `${baseUrl}/verified-candidates`,
          description: 'Access a pool of pre-verified candidates with validated skills and backgrounds.',
          capabilities: ['Background verification', 'Skill validation', 'Reference checks', 'Quality assurance'],
        },
      ],
    },
    pages: [
      {
        url: baseUrl,
        title: 'Home',
        description: 'Main landing page connecting job seekers with employers',
        type: 'homepage',
      },
      {
        url: `${baseUrl}/job-seeker`,
        title: 'For Job Seekers',
        description: 'Comprehensive tools and features for job seekers to find their dream job',
        type: 'product-page',
      },
      {
        url: `${baseUrl}/job-provider`,
        title: 'For Employers',
        description: 'Complete hiring solution for employers to find and recruit top talent',
        type: 'product-page',
      },
      {
        url: `${baseUrl}/about`,
        title: 'About Us',
        description: 'Learn about Hirenest mission, vision, and team',
        type: 'company-info',
      },
      {
        url: `${baseUrl}/careers`,
        title: 'Careers',
        description: 'Join the Hirenest team and help shape the future of recruitment',
        type: 'careers',
      },
      {
        url: `${baseUrl}/security`,
        title: 'Security',
        description: 'Information about our security practices and data protection',
        type: 'legal',
      },
      ...blogPages, // Append dynamic blog pages
    ],
    technology: {
      stack: ['Next.js 15', 'React 19', 'TypeScript', 'Chakra UI', 'AI/ML'],
      aiCapabilities: [
        'Resume optimization',
        'Job matching algorithms',
        'Candidate ranking',
        'Skill assessment',
        'Career path prediction',
        'Market insights analysis',
      ],
    },
    contact: {
      website: baseUrl,
      supportEmail: 'support@hirenest.com',
      salesEmail: 'sales@hirenest.com',
    },
    legal: {
      privacyPolicy: `${baseUrl}/privacy-policy`,
      termsOfService: `${baseUrl}/terms-of-service`,
      cookiePolicy: `${baseUrl}/cookie-policy`,
      refundPolicy: `${baseUrl}/refund-policy`,
    },
  };

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<llms-metadata>
  <metadata>
    <name>${escapeXml(llmsContent.metadata.name)}</name>
    <description>${escapeXml(llmsContent.metadata.description)}</description>
    <url>${escapeXml(llmsContent.metadata.url)}</url>
    <lastUpdated>${escapeXml(llmsContent.metadata.lastUpdated)}</lastUpdated>
    <version>${escapeXml(llmsContent.metadata.version)}</version>
    <language>${escapeXml(llmsContent.metadata.language)}</language>
    <category>${escapeXml(llmsContent.metadata.category)}</category>
    <keywords>
      ${llmsContent.metadata.keywords.map(keyword => `<keyword>${escapeXml(keyword)}</keyword>`).join('\n      ')}
    </keywords>
  </metadata>

  <features>
    <jobSeekerFeatures>
      ${llmsContent.features.forJobSeekers.map(feature => `
      <feature>
        <name>${escapeXml(feature.name)}</name>
        <url>${escapeXml(feature.url)}</url>
        <description>${escapeXml(feature.description)}</description>
        <capabilities>
          ${feature.capabilities.map(cap => `<capability>${escapeXml(cap)}</capability>`).join('\n          ')}
        </capabilities>
      </feature>`).join('')}
    </jobSeekerFeatures>

    <employerFeatures>
      ${llmsContent.features.forEmployers.map(feature => `
      <feature>
        <name>${escapeXml(feature.name)}</name>
        <url>${escapeXml(feature.url)}</url>
        <description>${escapeXml(feature.description)}</description>
        <capabilities>
          ${feature.capabilities.map(cap => `<capability>${escapeXml(cap)}</capability>`).join('\n          ')}
        </capabilities>
      </feature>`).join('')}
    </employerFeatures>
  </features>

  <pages>
    ${llmsContent.pages.map(page => `
    <page>
      <url>${escapeXml(page.url)}</url>
      <title>${escapeXml(page.title)}</title>
      <description>${escapeXml(page.description)}</description>
      <type>${escapeXml(page.type)}</type>
    </page>`).join('')}
  </pages>

  <technology>
    <stack>
      ${llmsContent.technology.stack.map(tech => `<item>${escapeXml(tech)}</item>`).join('\n      ')}
    </stack>
    <aiCapabilities>
      ${llmsContent.technology.aiCapabilities.map(cap => `<capability>${escapeXml(cap)}</capability>`).join('\n      ')}
    </aiCapabilities>
  </technology>

  <contact>
    <website>${escapeXml(llmsContent.contact.website)}</website>
    <supportEmail>${escapeXml(llmsContent.contact.supportEmail)}</supportEmail>
    <salesEmail>${escapeXml(llmsContent.contact.salesEmail)}</salesEmail>
  </contact>

  <legal>
    <privacyPolicy>${escapeXml(llmsContent.legal.privacyPolicy)}</privacyPolicy>
    <termsOfService>${escapeXml(llmsContent.legal.termsOfService)}</termsOfService>
    <cookiePolicy>${escapeXml(llmsContent.legal.cookiePolicy)}</cookiePolicy>
    <refundPolicy>${escapeXml(llmsContent.legal.refundPolicy)}</refundPolicy>
  </legal>
</llms-metadata>`;

  return new NextResponse(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
    },
  });
}
