/**
 * SEO Hidden Links Component
 *
 * Provides internal links to all programmatic SEO pages for search engine discovery.
 * Hidden visually with display: none but still crawlable by bots.
 *
 * This helps solve orphan page issues by ensuring all programmatic SEO pages
 * have at least one internal link pointing to them.
 */

import Link from 'next/link';
import { jobTitles } from '@/app/lib/programmatic-seo/job-titles';

interface SeoHiddenLinksProps {
  className?: string;
}

export function SeoHiddenLinks({ className = '' }: SeoHiddenLinksProps) {
  return (
    <div
      className={className}
      style={{ display: 'none' }}
      aria-hidden="true"
      data-seo-hidden-links
    >
      {/* Interview Questions */}
      <nav aria-label="Interview Questions">
        {jobTitles.map((job) => (
          <Link
            key={`iq-${job.slug}`}
            href={`/interview-questions/${job.slug}`}
            title={`${job.title} Interview Questions`}
          >
            {job.title} Interview Questions
          </Link>
        ))}
      </nav>

      {/* Resume Keywords */}
      <nav aria-label="Resume Keywords">
        {jobTitles.map((job) => (
          <Link
            key={`rk-${job.slug}`}
            href={`/resume-keywords/${job.slug}`}
            title={`${job.title} Resume Keywords`}
          >
            {job.title} Resume Keywords
          </Link>
        ))}
      </nav>

      {/* Salary Guides */}
      <nav aria-label="Salary Guides">
        {jobTitles.map((job) => (
          <Link
            key={`sal-${job.slug}`}
            href={`/salary/${job.slug}`}
            title={`${job.title} Salary`}
          >
            {job.title} Salary
          </Link>
        ))}
      </nav>

      {/* Cover Letters */}
      <nav aria-label="Cover Letters">
        {jobTitles.map((job) => (
          <Link
            key={`cl-${job.slug}`}
            href={`/cover-letter/${job.slug}`}
            title={`${job.title} Cover Letter`}
          >
            {job.title} Cover Letter
          </Link>
        ))}
      </nav>

      {/* Job Descriptions */}
      <nav aria-label="Job Descriptions">
        {jobTitles.map((job) => (
          <Link
            key={`jd-${job.slug}`}
            href={`/job-description/${job.slug}`}
            title={`${job.title} Job Description`}
          >
            {job.title} Job Description
          </Link>
        ))}
      </nav>
    </div>
  );
}
