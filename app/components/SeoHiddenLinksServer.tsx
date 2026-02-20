/**
 * SEO Hidden Links - Server Component
 *
 * This is a SERVER component that renders all programmatic SEO links
 * for search engine discovery. Must be used in server components only.
 */

import Link from 'next/link';
import { jobTitles } from '@/app/lib/programmatic-seo/job-titles';

export async function SeoHiddenLinksServer() {
  return (
    <div
      style={{ height: '1px', overflow: 'hidden', position: 'absolute', opacity: '0.01' }}
      data-seo-hidden-links
      aria-label="SEO Navigation Links"
    >
      {/* Interview Questions */}
      <nav aria-label="All Interview Questions">
        {jobTitles.map((job) => (
          <Link
            key={`iq-${job.slug}`}
            href={`/interview-questions/${job.slug}`}
            title={`${job.title} Interview Questions`}
            prefetch={false}
          >
            {job.title} Interview Questions
          </Link>
        ))}
      </nav>

      {/* Resume Keywords */}
      <nav aria-label="All Resume Keywords">
        {jobTitles.map((job) => (
          <Link
            key={`rk-${job.slug}`}
            href={`/resume-keywords/${job.slug}`}
            title={`${job.title} Resume Keywords`}
            prefetch={false}
          >
            {job.title} Resume Keywords
          </Link>
        ))}
      </nav>

      {/* Salary Guides */}
      <nav aria-label="All Salary Guides">
        {jobTitles.map((job) => (
          <Link
            key={`sal-${job.slug}`}
            href={`/salary/${job.slug}`}
            title={`${job.title} Salary`}
            prefetch={false}
          >
            {job.title} Salary
          </Link>
        ))}
      </nav>

      {/* Cover Letters */}
      <nav aria-label="All Cover Letters">
        {jobTitles.map((job) => (
          <Link
            key={`cl-${job.slug}`}
            href={`/cover-letter/${job.slug}`}
            title={`${job.title} Cover Letter`}
            prefetch={false}
          >
            {job.title} Cover Letter
          </Link>
        ))}
      </nav>

      {/* Job Descriptions */}
      <nav aria-label="All Job Descriptions">
        {jobTitles.map((job) => (
          <Link
            key={`jd-${job.slug}`}
            href={`/job-description/${job.slug}`}
            title={`${job.title} Job Description`}
            prefetch={false}
          >
            {job.title} Job Description
          </Link>
        ))}
      </nav>
    </div>
  );
}
