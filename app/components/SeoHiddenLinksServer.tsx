/**
 * SEO Hidden Links - Server Component
 *
 * This provides internal links to all programmatic SEO pages for search engine discovery.
 * Positioned off-screen but still crawlable by bots.
 */

import Link from 'next/link';
import { jobTitles } from '@/app/lib/programmatic-seo/job-titles';

export async function SeoHiddenLinksServer() {
  return (
    <div
      style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
      aria-hidden="true"
    >
      <nav aria-label="Site navigation for crawlers">
        {/* Interview Questions */}
        <div>
          <h2>Interview Questions</h2>
          <ul>
            {jobTitles.map((job) => (
              <li key={`iq-${job.slug}`}>
                <Link href={`/interview-questions/${job.slug}`}>
                  {job.title} Interview Questions
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resume Keywords */}
        <div>
          <h2>Resume Keywords</h2>
          <ul>
            {jobTitles.map((job) => (
              <li key={`rk-${job.slug}`}>
                <Link href={`/resume-keywords/${job.slug}`}>
                  {job.title} Resume Keywords
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Salary Guides */}
        <div>
          <h2>Salary Guides</h2>
          <ul>
            {jobTitles.map((job) => (
              <li key={`sal-${job.slug}`}>
                <Link href={`/salary/${job.slug}`}>
                  {job.title} Salary
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cover Letters */}
        <div>
          <h2>Cover Letters</h2>
          <ul>
            {jobTitles.map((job) => (
              <li key={`cl-${job.slug}`}>
                <Link href={`/cover-letter/${job.slug}`}>
                  {job.title} Cover Letter
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Job Descriptions */}
        <div>
          <h2>Job Descriptions</h2>
          <ul>
            {jobTitles.map((job) => (
              <li key={`jd-${job.slug}`}>
                <Link href={`/job-description/${job.slug}`}>
                  {job.title} Job Description
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
