import { NextResponse } from 'next/server';
// Convex removed
import { enabledJobTitles } from '@/app/lib/programmatic-seo/enabled-job-titles';
import { LOCATION_JOB_BOARDS, SUPPORTED_LOCATIONS } from '@/app/lib/programmatic-seo/job-board';

// Force Node.js runtime to avoid edge runtime module loading issues
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

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

  const BLOG_CDN_URL = process.env.NEXT_PUBLIC_BLOG_CDN_URL || 'https://dmf25vwa4wepi.cloudfront.net';
  let blogPages: any[] = [];

  try {
    const response = await fetch(`${BLOG_CDN_URL}/index.json`, { next: { revalidate: 3600 } });
    if (response.ok) {
      const posts = await response.json();
      blogPages = posts
        .filter((post: any) => post.published !== false)
        .slice(0, 50)
        .map((post: any) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          title: escapeXml(post.title || ''),
          description: escapeXml(post.description || ''),
          type: 'blog-post',
        }));
    }
  } catch (error) {
    console.error("Failed to fetch blog posts for LLMs:", error);
  }

  // Generate programmatic SEO pages (only enabled job titles that return 200)
  const programmaticPages = enabledJobTitles.flatMap((job) => [
    {
      url: `${baseUrl}/interview-questions/${job.slug}`,
      title: `${job.title} Interview Questions & Answers`,
      description: `Prepare for your ${job.title} interview with commonly asked questions, expert-approved answers, and proven strategies.`,
      type: 'interview-questions',
    },
    {
      url: `${baseUrl}/resume-keywords/${job.slug}`,
      title: `${job.title} Resume Keywords & Skills`,
      description: `Discover the best ${job.title} resume keywords and skills to optimize your resume for ATS and impress recruiters.`,
      type: 'resume-keywords',
    },
    {
      url: `${baseUrl}/salary/${job.slug}`,
      title: `${job.title} Salary Guide`,
      description: `Explore ${job.title} salary data, compensation trends, and factors affecting pay in the current market.`,
      type: 'salary-guide',
    },
    {
      url: `${baseUrl}/cover-letter/${job.slug}`,
      title: `${job.title} Cover Letter Example`,
      description: `Professional ${job.title} cover letter example and template to help you craft a compelling application.`,
      type: 'cover-letter',
    },
    {
      url: `${baseUrl}/job-description/${job.slug}`,
      title: `${job.title} Job Description Template`,
      description: `Comprehensive ${job.title} job description template with responsibilities, requirements, and qualifications.`,
      type: 'job-description',
    },
    {
      url: `${baseUrl}/jobs/roles/${job.slug}`,
      title: `${job.title} Jobs`,
      description: `Browse ${job.title} jobs hiring now. Find remote and local ${job.title} jobs from top companies.`,
      type: 'job-board',
    },
  ]);

  // Generate location hub pages
  const locationHubPages = SUPPORTED_LOCATIONS.map((location) => ({
    url: `${baseUrl}/jobs/${location.slug}`,
    title: `Jobs in ${location.name}`,
    description: `Browse all job openings in ${location.name}. Find jobs in technology, marketing, sales, healthcare, and more from top companies hiring now.`,
    type: 'location-hub',
  }));

  // Generate location+job combination pages (sample only to avoid file bloat)
  const locationJobPages = LOCATION_JOB_BOARDS.slice(0, 100).map((locJob) => ({
    url: `${baseUrl}/jobs/${locJob.locationSlug}/${locJob.jobSlug}`,
    title: `${locJob.jobTitle} Jobs in ${locJob.locationName}`,
    description: `Find ${locJob.totalJobs}+ ${locJob.jobTitle} jobs in ${locJob.locationName}. Browse active openings, competitive salaries, and apply directly to top companies.`,
    type: 'location-job',
  }));

  // Core website pages
  const corePages = [
    {
      url: baseUrl,
      title: 'Home',
      description: 'Main landing page connecting job seekers with employers through AI-powered recruitment platform',
      type: 'homepage',
    },
    {
      url: `${baseUrl}/job-seeker`,
      title: 'For Job Seekers',
      description: 'Comprehensive tools and features for job seekers including AI resume builder, job matching, and career insights',
      type: 'product-page',
    },
    {
      url: `${baseUrl}/job-provider`,
      title: 'For Employers',
      description: 'Complete hiring solution for employers with AI candidate ranking, screening tools, and hiring analytics',
      type: 'product-page',
    },
    {
      url: `${baseUrl}/about`,
      title: 'About Us',
      description: 'Learn about Hirenest mission to revolutionize recruitment with AI, our story, values, and team',
      type: 'company-info',
    },
    {
      url: `${baseUrl}/careers`,
      title: 'Careers',
      description: 'Join the Hirenest team and help shape the future of AI-powered recruitment technology',
      type: 'careers',
    },
    {
      url: `${baseUrl}/security`,
      title: 'Security',
      description: 'Information about enterprise-grade security practices, data protection, and privacy measures',
      type: 'legal',
    },
    {
      url: `${baseUrl}/ai-resume-builder`,
      title: 'AI Resume Builder',
      description: 'Create ATS-optimized resumes with AI assistance, personalized suggestions, and professional formatting',
      type: 'feature',
    },
    {
      url: `${baseUrl}/ai-candidate-ranking`,
      title: 'AI Candidate Ranking',
      description: 'Automatically rank and score candidates based on job requirements using advanced AI algorithms',
      type: 'feature',
    },
    {
      url: `${baseUrl}/smart-job-matching`,
      title: 'Smart Job Matching',
      description: 'AI-driven job matching that analyzes skills and preferences to recommend suitable positions',
      type: 'feature',
    },
    {
      url: `${baseUrl}/skill-assessments`,
      title: 'Skill Assessments',
      description: 'Validate skills with 350+ industry-standard assessments and earn verified badges',
      type: 'feature',
    },
    {
      url: `${baseUrl}/interview-questions`,
      title: 'Interview Questions',
      description: `Comprehensive interview questions and answers for ${enabledJobTitles.length}+ job titles`,
      type: 'hub-page',
    },
    {
      url: `${baseUrl}/resume-keywords`,
      title: 'Resume Keywords',
      description: `ATS-friendly resume keywords and skills for ${enabledJobTitles.length}+ job titles`,
      type: 'hub-page',
    },
    {
      url: `${baseUrl}/salary`,
      title: 'Salary Guides',
      description: `Salary data and compensation guides for ${enabledJobTitles.length}+ job titles`,
      type: 'hub-page',
    },
    {
      url: `${baseUrl}/cover-letter`,
      title: 'Cover Letter Examples',
      description: `Professional cover letter templates and examples for ${enabledJobTitles.length}+ job titles`,
      type: 'hub-page',
    },
    {
      url: `${baseUrl}/job-description`,
      title: 'Job Descriptions',
      description: `Job description templates and resources for ${enabledJobTitles.length}+ job titles`,
      type: 'hub-page',
    },
    {
      url: `${baseUrl}/blog`,
      title: 'Blog',
      description: 'Career advice, hiring tips, and industry insights from recruitment experts',
      type: 'blog-index',
    },
    {
      url: `${baseUrl}/seo-sitemap`,
      title: 'Site Map',
      description: `Complete index of all ${enabledJobTitles.length * 5}+ pages on Hirenest`,
      type: 'sitemap',
    },
    {
      url: `${baseUrl}/jobs-sitemap.xml`,
      title: 'Jobs Sitemap',
      description: `Complete index of all ${enabledJobTitles.length * 5}+ job pages on Hirenest`,
      type: 'sitemap',
    },
  ];

  // Combine all pages - deduplicated by URL
  const allPages = [...corePages, ...blogPages, ...programmaticPages, ...locationHubPages, ...locationJobPages];

  // Group by category for better LLM understanding
  const pagesByCategory = {
    core: corePages,
    blog: blogPages,
    interviewQuestions: programmaticPages.filter(p => p.type === 'interview-questions'),
    resumeKeywords: programmaticPages.filter(p => p.type === 'resume-keywords'),
    salaryGuides: programmaticPages.filter(p => p.type === 'salary-guide'),
    coverLetters: programmaticPages.filter(p => p.type === 'cover-letter'),
    jobDescriptions: programmaticPages.filter(p => p.type === 'job-description'),
    jobBoard: programmaticPages.filter(p => p.type === 'job-board'),
    locationHubs: locationHubPages,
    locationJobs: locationJobPages,
  };

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<llms-metadata>
  <metadata>
    <name>Hirenest</name>
    <description>AI-powered platform connecting job seekers with employers through intelligent matching, resume building, and comprehensive hiring tools</description>
    <url>${escapeXml(baseUrl)}</url>
    <lastUpdated>${escapeXml(currentDate)}</lastUpdated>
    <version>1.0</version>
    <language>en</language>
    <category>Jobs and Recruitment Platform</category>
    <totalPages>${allPages.length}</totalPages>
    <programmaticPages>${programmaticPages.length}</programmaticPages>
    <jobTitles>${enabledJobTitles.length}</jobTitles>
    <keywords>
      <keyword>job search</keyword>
      <keyword>recruitment</keyword>
      <keyword>AI hiring</keyword>
      <keyword>resume builder</keyword>
      <keyword>candidate matching</keyword>
      <keyword>skill assessment</keyword>
      <keyword>career development</keyword>
      <keyword>talent acquisition</keyword>
      <keyword>interview preparation</keyword>
      <keyword>salary data</keyword>
    </keywords>
  </metadata>

  <corePages>
    ${corePages.map(page => `
    <page>
      <url>${escapeXml(page.url)}</url>
      <title>${escapeXml(page.title)}</title>
      <description>${escapeXml(page.description)}</description>
      <type>${escapeXml(page.type)}</type>
    </page>`).join('')}
  </corePages>

  <blogPages>
    <count>${blogPages.length}</count>
    ${blogPages.map(page => `
    <page>
      <url>${escapeXml(page.url)}</url>
      <title>${escapeXml(page.title)}</title>
      <description>${escapeXml(page.description)}</description>
      <type>blog-post</type>
    </page>`).join('')}
  </blogPages>

  <programmaticSEOPages>
    <totalCount>${programmaticPages.length + locationHubPages.length + locationJobPages.length}</totalCount>
    <categories>
      <category>
        <name>Interview Questions</name>
        <count>${pagesByCategory.interviewQuestions.length}</count>
        <indexUrl>${escapeXml(baseUrl)}/interview-questions</indexUrl>
      </category>
      <category>
        <name>Resume Keywords</name>
        <count>${pagesByCategory.resumeKeywords.length}</count>
        <indexUrl>${escapeXml(baseUrl)}/resume-keywords</indexUrl>
      </category>
      <category>
        <name>Location Job Hubs</name>
        <count>${pagesByCategory.locationHubs.length}</count>
        <indexUrl>${escapeXml(baseUrl)}/jobs</indexUrl>
      </category>
      <category>
        <name>Salary Guides</name>
        <count>${pagesByCategory.salaryGuides.length}</count>
        <indexUrl>${escapeXml(baseUrl)}/salary</indexUrl>
      </category>
      <category>
        <name>Cover Letters</name>
        <count>${pagesByCategory.coverLetters.length}</count>
        <indexUrl>${escapeXml(baseUrl)}/cover-letter</indexUrl>
      </category>
      <category>
        <name>Job Descriptions</name>
        <count>${pagesByCategory.jobDescriptions.length}</count>
        <indexUrl>${escapeXml(baseUrl)}/job-description</indexUrl>
      </category>
      <category>
        <name>Job Board</name>
        <count>${pagesByCategory.jobBoard.length}</count>
        <indexUrl>${escapeXml(baseUrl)}/jobs</indexUrl>
      </category>
    </categories>
    <sampleUrls>
      ${pagesByCategory.interviewQuestions.slice(0, 3).map(p => `<url type="interview-questions">${escapeXml(p.url)}</url>`).join('\n      ')}
      ${pagesByCategory.salaryGuides.slice(0, 3).map(p => `<url type="salary">${escapeXml(p.url)}</url>`).join('\n      ')}
    </sampleUrls>
  </programmaticSEOPages>

  <technology>
    <stack>
      <item>Next.js 15</item>
      <item>React 19</item>
      <item>TypeScript</item>
      <item>Chakra UI</item>
      <item>AI/ML</item>
    </stack>
    <aiCapabilities>
      <capability>Resume optimization</capability>
      <capability>Job matching algorithms</capability>
      <capability>Candidate ranking</capability>
      <capability>Skill assessment</capability>
      <capability>Career path prediction</capability>
      <capability>Market insights analysis</capability>
    </aiCapabilities>
  </technology>

  <contact>
    <website>${escapeXml(baseUrl)}</website>
    <supportEmail>support@hirenest.com</supportEmail>
    <salesEmail>sales@hirenest.com</salesEmail>
  </contact>

  <legal>
    <privacyPolicy>${escapeXml(baseUrl)}/privacy-policy</privacyPolicy>
    <termsOfService>${escapeXml(baseUrl)}/terms-of-service</termsOfService>
    <cookiePolicy>${escapeXml(baseUrl)}/cookie-policy</cookiePolicy>
    <refundPolicy>${escapeXml(baseUrl)}/refund-policy</refundPolicy>
  </legal>
</llms-metadata>`;

  return new NextResponse(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
    },
  });
}
