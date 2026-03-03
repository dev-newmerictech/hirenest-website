// Job Board Pages Configuration
// Defines all job board pages for programmatic SEO

import { JobBoardPage, LocationJobBoard, IndustryJobBoard } from './types'
import { jobTitles } from '../job-titles'
import { getJobListingsBySlug } from './job-listings'

/**
 * All job board pages for role-specific job listings
 * These map to /jobs/[slug] routes
 */
export function getAllJobBoardPages(): JobBoardPage[] {
    return jobTitles.map(job => {
        const totalJobs = 12 + Math.floor(Math.random() * 15)
        const featuredJobs = Math.floor(totalJobs * 0.25)

        return {
            slug: job.slug,
            title: job.title,
            description: `Find ${totalJobs} ${job.title} jobs hiring now. Browse ${featuredJobs} featured positions from top companies. Filter by location, salary, and experience level.`,
            category: job.category,
            totalJobs,
            featuredJobs,
            seoKeywords: [
                `${job.title} jobs`,
                `${job.title} positions`,
                `${job.title} careers`,
                `${job.title} hiring`,
                `${job.title} job openings`,
                `remote ${job.title} jobs`,
                `${job.title} jobs near me`,
                ...job.aliases.flatMap(alias => [
                    `${alias} jobs`,
                    `${alias} positions`
                ])
            ]
        }
    })
}

/**
 * Get job board pages by category
 */
export function getJobBoardPagesByCategory(category: string): JobBoardPage[] {
    return getAllJobBoardPages().filter(page => page.category === category)
}

/**
 * Location-specific job board pages
 * These map to /jobs/[location]/[slug] routes
 * Focus: India, Dubai, and US locations
 */
export const LOCATION_JOB_BOARDS: LocationJobBoard[] = [
    // Remote jobs
    { locationSlug: 'remote', locationName: 'Remote', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 150 },
    { locationSlug: 'remote', locationName: 'Remote', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 120 },
    { locationSlug: 'remote', locationName: 'Remote', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 95 },
    { locationSlug: 'remote', locationName: 'Remote', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 110 },
    { locationSlug: 'remote', locationName: 'Remote', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 105 },
    { locationSlug: 'remote', locationName: 'Remote', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 130 },
    { locationSlug: 'remote', locationName: 'Remote', jobSlug: 'ux-designer', jobTitle: 'UX Designer', totalJobs: 85 },
    { locationSlug: 'remote', locationName: 'Remote', jobSlug: 'digital-marketing-manager', jobTitle: 'Digital Marketing Manager', totalJobs: 75 },
    { locationSlug: 'remote', locationName: 'Remote', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 90 },

    // ===== UNITED STATES =====

    // San Francisco, CA
    { locationSlug: 'san-francisco', locationName: 'San Francisco, CA', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 180 },
    { locationSlug: 'san-francisco', locationName: 'San Francisco, CA', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 120 },
    { locationSlug: 'san-francisco', locationName: 'San Francisco, CA', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 140 },
    { locationSlug: 'san-francisco', locationName: 'San Francisco, CA', jobSlug: 'ux-designer', jobTitle: 'UX Designer', totalJobs: 95 },

    // New York, NY
    { locationSlug: 'new-york', locationName: 'New York, NY', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 195 },
    { locationSlug: 'new-york', locationName: 'New York, NY', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 135 },
    { locationSlug: 'new-york', locationName: 'New York, NY', jobSlug: 'digital-marketing-manager', jobTitle: 'Digital Marketing Manager', totalJobs: 110 },
    { locationSlug: 'new-york', locationName: 'New York, NY', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 125 },
    { locationSlug: 'new-york', locationName: 'New York, NY', jobSlug: 'financial-analyst', jobTitle: 'Financial Analyst', totalJobs: 105 },

    // Austin, TX
    { locationSlug: 'austin', locationName: 'Austin, TX', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 95 },
    { locationSlug: 'austin', locationName: 'Austin, TX', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 80 },
    { locationSlug: 'austin', locationName: 'Austin, TX', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 70 },

    // Seattle, WA
    { locationSlug: 'seattle', locationName: 'Seattle, WA', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 145 },
    { locationSlug: 'seattle', locationName: 'Seattle, WA', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 115 },
    { locationSlug: 'seattle', locationName: 'Seattle, WA', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 85 },

    // Los Angeles, CA
    { locationSlug: 'los-angeles', locationName: 'Los Angeles, CA', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 125 },
    { locationSlug: 'los-angeles', locationName: 'Los Angeles, CA', jobSlug: 'ux-designer', jobTitle: 'UX Designer', totalJobs: 90 },
    { locationSlug: 'los-angeles', locationName: 'Los Angeles, CA', jobSlug: 'content-marketing-manager', jobTitle: 'Content Marketing Manager', totalJobs: 75 },

    // Chicago, IL
    { locationSlug: 'chicago', locationName: 'Chicago, IL', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 110 },
    { locationSlug: 'chicago', locationName: 'Chicago, IL', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 95 },
    { locationSlug: 'chicago', locationName: 'Chicago, IL', jobSlug: 'financial-analyst', jobTitle: 'Financial Analyst', totalJobs: 88 },

    // Boston, MA
    { locationSlug: 'boston', locationName: 'Boston, MA', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 105 },
    { locationSlug: 'boston', locationName: 'Boston, MA', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 90 },
    { locationSlug: 'boston', locationName: 'Boston, MA', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 78 },

    // Denver, CO
    { locationSlug: 'denver', locationName: 'Denver, CO', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 85 },
    { locationSlug: 'denver', locationName: 'Denver, CO', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 72 },

    // Miami, FL
    { locationSlug: 'miami', locationName: 'Miami, FL', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 80 },
    { locationSlug: 'miami', locationName: 'Miami, FL', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 75 },
    { locationSlug: 'miami', locationName: 'Miami, FL', jobSlug: 'digital-marketing-manager', jobTitle: 'Digital Marketing Manager', totalJobs: 65 },

    // Atlanta, GA
    { locationSlug: 'atlanta', locationName: 'Atlanta, GA', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 92 },
    { locationSlug: 'atlanta', locationName: 'Atlanta, GA', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 85 },
    { locationSlug: 'atlanta', locationName: 'Atlanta, GA', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 68 },

    // ===== INDIA =====

    // Bangalore, India
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 250 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 180 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 140 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 200 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 175 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 165 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'devops-engineer', jobTitle: 'DevOps Engineer', totalJobs: 120 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'ux-designer', jobTitle: 'UX Designer', totalJobs: 85 },

    // Hyderabad, India
    { locationSlug: 'hyderabad', locationName: 'Hyderabad, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 220 },
    { locationSlug: 'hyderabad', locationName: 'Hyderabad, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 160 },
    { locationSlug: 'hyderabad', locationName: 'Hyderabad, India', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 125 },
    { locationSlug: 'hyderabad', locationName: 'Hyderabad, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 180 },
    { locationSlug: 'hyderabad', locationName: 'Hyderabad, India', jobSlug: 'cloud-engineer', jobTitle: 'Cloud Engineer', totalJobs: 135 },
    { locationSlug: 'hyderabad', locationName: 'Hyderabad, India', jobSlug: 'devops-engineer', jobTitle: 'DevOps Engineer', totalJobs: 110 },
    { locationSlug: 'hyderabad', locationName: 'Hyderabad, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 145 },
    { locationSlug: 'hyderabad', locationName: 'Hyderabad, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 140 },
    { locationSlug: 'hyderabad', locationName: 'Hyderabad, India', jobSlug: 'mobile-developer', jobTitle: 'Mobile Developer', totalJobs: 95 },
    { locationSlug: 'hyderabad', locationName: 'Hyderabad, India', jobSlug: 'qa-engineer', jobTitle: 'QA Engineer', totalJobs: 85 },

    // Mumbai, India
    { locationSlug: 'mumbai', locationName: 'Mumbai, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 195 },
    { locationSlug: 'mumbai', locationName: 'Mumbai, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 145 },
    { locationSlug: 'mumbai', locationName: 'Mumbai, India', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 115 },
    { locationSlug: 'mumbai', locationName: 'Mumbai, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 130 },
    { locationSlug: 'mumbai', locationName: 'Mumbai, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 125 },
    { locationSlug: 'mumbai', locationName: 'Mumbai, India', jobSlug: 'ux-designer', jobTitle: 'UX Designer', totalJobs: 75 },
    { locationSlug: 'mumbai', locationName: 'Mumbai, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 155 },
    { locationSlug: 'mumbai', locationName: 'Mumbai, India', jobSlug: 'devops-engineer', jobTitle: 'DevOps Engineer', totalJobs: 105 },
    { locationSlug: 'mumbai', locationName: 'Mumbai, India', jobSlug: 'business-analyst', jobTitle: 'Business Analyst', totalJobs: 90 },
    { locationSlug: 'mumbai', locationName: 'Mumbai, India', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 110 },

    // Delhi, India
    { locationSlug: 'delhi', locationName: 'Delhi, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 185 },
    { locationSlug: 'delhi', locationName: 'Delhi, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 135 },
    { locationSlug: 'delhi', locationName: 'Delhi, India', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 105 },
    { locationSlug: 'delhi', locationName: 'Delhi, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 155 },
    { locationSlug: 'delhi', locationName: 'Delhi, India', jobSlug: 'digital-marketing-manager', jobTitle: 'Digital Marketing Manager', totalJobs: 90 },
    { locationSlug: 'delhi', locationName: 'Delhi, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 120 },
    { locationSlug: 'delhi', locationName: 'Delhi, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 115 },
    { locationSlug: 'delhi', locationName: 'Delhi, India', jobSlug: 'ux-designer', jobTitle: 'UX Designer', totalJobs: 70 },
    { locationSlug: 'delhi', locationName: 'Delhi, India', jobSlug: 'hr-manager', jobTitle: 'HR Manager', totalJobs: 85 },

    // Pune, India
    { locationSlug: 'pune', locationName: 'Pune, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 175 },
    { locationSlug: 'pune', locationName: 'Pune, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 125 },
    { locationSlug: 'pune', locationName: 'Pune, India', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 100 },
    { locationSlug: 'pune', locationName: 'Pune, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 145 },
    { locationSlug: 'pune', locationName: 'Pune, India', jobSlug: 'qa-engineer', jobTitle: 'QA Engineer', totalJobs: 95 },
    { locationSlug: 'pune', locationName: 'Pune, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 115 },
    { locationSlug: 'pune', locationName: 'Pune, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 110 },
    { locationSlug: 'pune', locationName: 'Pune, India', jobSlug: 'devops-engineer', jobTitle: 'DevOps Engineer', totalJobs: 88 },
    { locationSlug: 'pune', locationName: 'Pune, India', jobSlug: 'mobile-developer', jobTitle: 'Mobile Developer', totalJobs: 92 },

    // Chennai, India
    { locationSlug: 'chennai', locationName: 'Chennai, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 160 },
    { locationSlug: 'chennai', locationName: 'Chennai, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 115 },
    { locationSlug: 'chennai', locationName: 'Chennai, India', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 90 },
    { locationSlug: 'chennai', locationName: 'Chennai, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 130 },
    { locationSlug: 'chennai', locationName: 'Chennai, India', jobSlug: 'devops-engineer', jobTitle: 'DevOps Engineer', totalJobs: 100 },
    { locationSlug: 'chennai', locationName: 'Chennai, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 135 },
    { locationSlug: 'chennai', locationName: 'Chennai, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 105 },
    { locationSlug: 'chennai', locationName: 'Chennai, India', jobSlug: 'qa-engineer', jobTitle: 'QA Engineer', totalJobs: 80 },

    // Gurgaon (Gurugram), India
    { locationSlug: 'gurgaon', locationName: 'Gurgaon, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 170 },
    { locationSlug: 'gurgaon', locationName: 'Gurgaon, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 130 },
    { locationSlug: 'gurgaon', locationName: 'Gurgaon, India', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 110 },
    { locationSlug: 'gurgaon', locationName: 'Gurgaon, India', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 95 },
    { locationSlug: 'gurgaon', locationName: 'Gurgaon, India', jobSlug: 'business-analyst', jobTitle: 'Business Analyst', totalJobs: 85 },
    { locationSlug: 'gurgaon', locationName: 'Gurgaon, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 135 },
    { locationSlug: 'gurgaon', locationName: 'Gurgaon, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 110 },
    { locationSlug: 'gurgaon', locationName: 'Gurgaon, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 105 },
    { locationSlug: 'gurgaon', locationName: 'Gurgaon, India', jobSlug: 'digital-marketing-manager', jobTitle: 'Digital Marketing Manager', totalJobs: 75 },
    { locationSlug: 'gurgaon', locationName: 'Gurgaon, India', jobSlug: 'hr-manager', jobTitle: 'HR Manager', totalJobs: 70 },

    // Noida, India
    { locationSlug: 'noida', locationName: 'Noida, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 165 },
    { locationSlug: 'noida', locationName: 'Noida, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 120 },
    { locationSlug: 'noida', locationName: 'Noida, India', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 95 },
    { locationSlug: 'noida', locationName: 'Noida, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 140 },
    { locationSlug: 'noida', locationName: 'Noida, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 125 },
    { locationSlug: 'noida', locationName: 'Noida, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 120 },
    { locationSlug: 'noida', locationName: 'Noida, India', jobSlug: 'devops-engineer', jobTitle: 'DevOps Engineer', totalJobs: 95 },
    { locationSlug: 'noida', locationName: 'Noida, India', jobSlug: 'qa-engineer', jobTitle: 'QA Engineer', totalJobs: 82 },
    { locationSlug: 'noida', locationName: 'Noida, India', jobSlug: 'mobile-developer', jobTitle: 'Mobile Developer', totalJobs: 88 },

    // Jaipur, India
    { locationSlug: 'jaipur', locationName: 'Jaipur, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 85 },
    { locationSlug: 'jaipur', locationName: 'Jaipur, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 65 },
    { locationSlug: 'jaipur', locationName: 'Jaipur, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 75 },
    { locationSlug: 'jaipur', locationName: 'Jaipur, India', jobSlug: 'digital-marketing-manager', jobTitle: 'Digital Marketing Manager', totalJobs: 55 },
    { locationSlug: 'jaipur', locationName: 'Jaipur, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 65 },
    { locationSlug: 'jaipur', locationName: 'Jaipur, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 60 },

    // Bangalore - More jobs
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 180 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 175 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'mobile-developer', jobTitle: 'Mobile Developer', totalJobs: 140 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'devops-engineer', jobTitle: 'DevOps Engineer', totalJobs: 130 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'qa-engineer', jobTitle: 'QA Engineer', totalJobs: 110 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'business-analyst', jobTitle: 'Business Analyst', totalJobs: 95 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'data-engineer', jobTitle: 'Data Engineer', totalJobs: 120 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'ml-engineer', jobTitle: 'ML Engineer', totalJobs: 105 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 85 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'hr-manager', jobTitle: 'HR Manager', totalJobs: 78 },
    { locationSlug: 'bangalore', locationName: 'Bangalore, India', jobSlug: 'technical-lead', jobTitle: 'Technical Lead', totalJobs: 92 },

    // Additional Indian cities
    // Kolkata, India
    { locationSlug: 'kolkata', locationName: 'Kolkata, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 95 },
    { locationSlug: 'kolkata', locationName: 'Kolkata, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 70 },
    { locationSlug: 'kolkata', locationName: 'Kolkata, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 82 },
    { locationSlug: 'kolkata', locationName: 'Kolkata, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 75 },
    { locationSlug: 'kolkata', locationName: 'Kolkata, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 70 },

    // Ahmedabad, India
    { locationSlug: 'ahmedabad', locationName: 'Ahmedabad, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 75 },
    { locationSlug: 'ahmedabad', locationName: 'Ahmedabad, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 68 },
    { locationSlug: 'ahmedabad', locationName: 'Ahmedabad, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 62 },
    { locationSlug: 'ahmedabad', locationName: 'Ahmedabad, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 60 },
    { locationSlug: 'ahmedabad', locationName: 'Ahmedabad, India', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 55 },

    // Chandigarh, India
    { locationSlug: 'chandigarh', locationName: 'Chandigarh, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 65 },
    { locationSlug: 'chandigarh', locationName: 'Chandigarh, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 58 },
    { locationSlug: 'chandigarh', locationName: 'Chandigarh, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 52 },
    { locationSlug: 'chandigarh', locationName: 'Chandigarh, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 50 },

    // Coimbatore, India
    { locationSlug: 'coimbatore', locationName: 'Coimbatore, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 70 },
    { locationSlug: 'coimbatore', locationName: 'Coimbatore, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 62 },
    { locationSlug: 'coimbatore', locationName: 'Coimbatore, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 55 },
    { locationSlug: 'coimbatore', locationName: 'Coimbatore, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 52 },

    // Indore, India
    { locationSlug: 'indore', locationName: 'Indore, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 58 },
    { locationSlug: 'indore', locationName: 'Indore, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 52 },
    { locationSlug: 'indore', locationName: 'Indore, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 48 },
    { locationSlug: 'indore', locationName: 'Indore, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 45 },

    // Nagpur, India
    { locationSlug: 'nagpur', locationName: 'Nagpur, India', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 55 },
    { locationSlug: 'nagpur', locationName: 'Nagpur, India', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 48 },
    { locationSlug: 'nagpur', locationName: 'Nagpur, India', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 42 },
    { locationSlug: 'nagpur', locationName: 'Nagpur, India', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 40 },

    // ===== DUBAI / UAE =====

    // Dubai, UAE - Extended with more jobs
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 145 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 110 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 95 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 125 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 105 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 100 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'ux-designer', jobTitle: 'UX Designer', totalJobs: 70 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'digital-marketing-manager', jobTitle: 'Digital Marketing Manager', totalJobs: 80 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 90 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'business-analyst', jobTitle: 'Business Analyst', totalJobs: 75 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'finance-manager', jobTitle: 'Finance Manager', totalJobs: 65 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'devops-engineer', jobTitle: 'DevOps Engineer', totalJobs: 78 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'cloud-engineer', jobTitle: 'Cloud Engineer', totalJobs: 82 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'mobile-developer', jobTitle: 'Mobile Developer', totalJobs: 88 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'data-engineer', jobTitle: 'Data Engineer', totalJobs: 75 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'ml-engineer', jobTitle: 'ML Engineer', totalJobs: 68 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'qa-engineer', jobTitle: 'QA Engineer', totalJobs: 60 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'hr-manager', jobTitle: 'HR Manager', totalJobs: 55 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'technical-lead', jobTitle: 'Technical Lead', totalJobs: 62 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'account-manager', jobTitle: 'Account Manager', totalJobs: 70 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'graphic-designer', jobTitle: 'Graphic Designer', totalJobs: 48 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'content-writer', jobTitle: 'Content Writer', totalJobs: 52 },
    { locationSlug: 'dubai', locationName: 'Dubai, UAE', jobSlug: 'social-media-manager', jobTitle: 'Social Media Manager', totalJobs: 58 },

    // Abu Dhabi, UAE - Extended with more jobs
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 85 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'data-scientist', jobTitle: 'Data Scientist', totalJobs: 65 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 55 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 70 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 60 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 58 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'devops-engineer', jobTitle: 'DevOps Engineer', totalJobs: 52 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'business-analyst', jobTitle: 'Business Analyst', totalJobs: 45 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 55 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'cloud-engineer', jobTitle: 'Cloud Engineer', totalJobs: 50 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'data-engineer', jobTitle: 'Data Engineer', totalJobs: 48 },
    { locationSlug: 'abu-dhabi', locationName: 'Abu Dhabi, UAE', jobSlug: 'ux-designer', jobTitle: 'UX Designer', totalJobs: 42 },

    // Sharjah, UAE - Extended with more jobs
    { locationSlug: 'sharjah', locationName: 'Sharjah, UAE', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 55 },
    { locationSlug: 'sharjah', locationName: 'Sharjah, UAE', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 45 },
    { locationSlug: 'sharjah', locationName: 'Sharjah, UAE', jobSlug: 'digital-marketing-manager', jobTitle: 'Digital Marketing Manager', totalJobs: 40 },
    { locationSlug: 'sharjah', locationName: 'Sharjah, UAE', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 38 },
    { locationSlug: 'sharjah', locationName: 'Sharjah, UAE', jobSlug: 'backend-developer', jobTitle: 'Backend Developer', totalJobs: 36 },
    { locationSlug: 'sharjah', locationName: 'Sharjah, UAE', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 42 },
    { locationSlug: 'sharjah', locationName: 'Sharjah, UAE', jobSlug: 'product-manager', jobTitle: 'Product Manager', totalJobs: 35 },

    // Additional UAE cities
    // Ras Al Khaimah, UAE
    { locationSlug: 'ras-al-khaimah', locationName: 'Ras Al Khaimah, UAE', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 35 },
    { locationSlug: 'ras-al-khaimah', locationName: 'Ras Al Khaimah, UAE', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 30 },
    { locationSlug: 'ras-al-khaimah', locationName: 'Ras Al Khaimah, UAE', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 28 },
    { locationSlug: 'ras-al-khaimah', locationName: 'Ras Al Khaimah, UAE', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 32 },

    // Ajman, UAE
    { locationSlug: 'ajman', locationName: 'Ajman, UAE', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 32 },
    { locationSlug: 'ajman', locationName: 'Ajman, UAE', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 28 },
    { locationSlug: 'ajman', locationName: 'Ajman, UAE', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 25 },
    { locationSlug: 'ajman', locationName: 'Ajman, UAE', jobSlug: 'sales-representative', jobTitle: 'Sales Representative', totalJobs: 30 },

    // Fujairah, UAE
    { locationSlug: 'fujairah', locationName: 'Fujairah, UAE', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 25 },
    { locationSlug: 'fujairah', locationName: 'Fujairah, UAE', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 22 },
    { locationSlug: 'fujairah', locationName: 'Fujairah, UAE', jobSlug: 'frontend-developer', jobTitle: 'Frontend Developer', totalJobs: 20 },

    // Umm Al Quwain, UAE
    { locationSlug: 'umm-al-quwain', locationName: 'Umm Al Quwain, UAE', jobSlug: 'software-engineer', jobTitle: 'Software Engineer', totalJobs: 20 },
    { locationSlug: 'umm-al-quwain', locationName: 'Umm Al Quwain, UAE', jobSlug: 'full-stack-developer', jobTitle: 'Full Stack Developer', totalJobs: 18 }
]

/**
 * Industry-specific job boards
 * These map to /jobs/industry/[slug] routes
 */
export const INDUSTRY_JOB_BOARDS: IndustryJobBoard[] = [
    {
        industrySlug: 'fintech',
        industryName: 'FinTech',
        jobs: [
            { slug: 'software-engineer', title: 'Software Engineer', count: 245 },
            { slug: 'product-manager', title: 'Product Manager', count: 165 },
            { slug: 'data-scientist', title: 'Data Scientist', count: 185 },
            { slug: 'blockchain-developer', title: 'Blockchain Developer', count: 95 },
            { slug: 'financial-analyst', title: 'Financial Analyst', count: 175 },
            { slug: 'security-engineer', title: 'Security Engineer', count: 135 },
            { slug: 'quantitative-analyst', title: 'Quantitative Analyst', count: 85 },
            { slug: 'compliance-officer', title: 'Compliance Officer', count: 95 }
        ]
    },
    {
        industrySlug: 'healthtech',
        industryName: 'HealthTech',
        jobs: [
            { slug: 'software-engineer', title: 'Software Engineer', count: 185 },
            { slug: 'product-manager', title: 'Product Manager', count: 125 },
            { slug: 'data-scientist', title: 'Data Scientist', count: 145 },
            { slug: 'clinical-data-manager', title: 'Clinical Data Manager', count: 75 },
            { slug: 'health-it-specialist', title: 'Health IT Specialist', count: 95 },
            { slug: 'medical-software-engineer', title: 'Medical Software Engineer', count: 115 }
        ]
    },
    {
        industrySlug: 'edtech',
        industryName: 'EdTech',
        jobs: [
            { slug: 'software-engineer', title: 'Software Engineer', count: 145 },
            { slug: 'product-manager', title: 'Product Manager', count: 95 },
            { slug: 'curriculum-developer', title: 'Curriculum Developer', count: 85 },
            { slug: 'instructional-designer', title: 'Instructional Designer', count: 75 },
            { slug: 'learning-experience-designer', title: 'Learning Experience Designer', count: 65 },
            { slug: 'data-scientist', title: 'Data Scientist', count: 88 }
        ]
    },
    {
        industrySlug: 'ecommerce',
        industryName: 'E-Commerce',
        jobs: [
            { slug: 'software-engineer', title: 'Software Engineer', count: 215 },
            { slug: 'product-manager', title: 'Product Manager', count: 145 },
            { slug: 'data-scientist', title: 'Data Scientist', count: 165 },
            { slug: 'ecommerce-manager', title: 'E-commerce Manager', count: 125 },
            { slug: 'supply-chain-analyst', title: 'Supply Chain Analyst', count: 95 },
            { slug: 'inventory-manager', title: 'Inventory Manager', count: 85 },
            { slug: 'category-manager', title: 'Category Manager', count: 75 }
        ]
    },
    {
        industrySlug: 'green-tech',
        industryName: 'Green Tech',
        jobs: [
            { slug: 'software-engineer', title: 'Software Engineer', count: 125 },
            { slug: 'product-manager', title: 'Product Manager', count: 85 },
            { slug: 'data-scientist', title: 'Data Scientist', count: 95 },
            { slug: 'solar-engineer', title: 'Solar Engineer', count: 65 },
            { slug: 'wind-energy-technician', title: 'Wind Energy Technician', count: 75 },
            { slug: 'esg-analyst', title: 'ESG Analyst', count: 55 },
            { slug: 'sustainability-manager', title: 'Sustainability Manager', count: 65 },
            { slug: 'energy-storage-engineer', title: 'Energy Storage Engineer', count: 45 }
        ]
    },
    {
        industrySlug: 'saas',
        industryName: 'SaaS',
        jobs: [
            { slug: 'software-engineer', title: 'Software Engineer', count: 285 },
            { slug: 'product-manager', title: 'Product Manager', count: 195 },
            { slug: 'data-scientist', title: 'Data Scientist', count: 175 },
            { slug: 'sales-representative', title: 'Sales Representative', count: 245 },
            { slug: 'customer-success-manager', title: 'Customer Success Manager', count: 165 },
            { slug: 'account-executive', title: 'Account Executive', count: 185 },
            { slug: 'digital-marketing-manager', title: 'Digital Marketing Manager', count: 145 },
            { slug: 'solutions-engineer', title: 'Solutions Engineer', count: 125 }
        ]
    }
]

/**
 * Get all location combinations for static params
 */
export function getAllLocationJobSlugs(): Array<{ location: string; slug: string }> {
    return LOCATION_JOB_BOARDS.map(board => ({
        location: board.locationSlug,
        slug: board.jobSlug
    }))
}

/**
 * Get job board page by slug
 */
export function getJobBoardPageBySlug(slug: string): JobBoardPage | undefined {
    return getAllJobBoardPages().find(page => page.slug === slug)
}

/**
 * Get all supported locations
 * Focus: India, Dubai, and US locations
 */
export const SUPPORTED_LOCATIONS = [
    // Remote
    { slug: 'remote', name: 'Remote' },

    // United States
    { slug: 'san-francisco', name: 'San Francisco, CA' },
    { slug: 'new-york', name: 'New York, NY' },
    { slug: 'austin', name: 'Austin, TX' },
    { slug: 'seattle', name: 'Seattle, WA' },
    { slug: 'los-angeles', name: 'Los Angeles, CA' },
    { slug: 'chicago', name: 'Chicago, IL' },
    { slug: 'boston', name: 'Boston, MA' },
    { slug: 'denver', name: 'Denver, CO' },
    { slug: 'miami', name: 'Miami, FL' },
    { slug: 'atlanta', name: 'Atlanta, GA' },

    // India
    { slug: 'bangalore', name: 'Bangalore, India' },
    { slug: 'hyderabad', name: 'Hyderabad, India' },
    { slug: 'mumbai', name: 'Mumbai, India' },
    { slug: 'delhi', name: 'Delhi, India' },
    { slug: 'pune', name: 'Pune, India' },
    { slug: 'chennai', name: 'Chennai, India' },
    { slug: 'gurgaon', name: 'Gurgaon, India' },
    { slug: 'noida', name: 'Noida, India' },
    { slug: 'jaipur', name: 'Jaipur, India' },
    { slug: 'kolkata', name: 'Kolkata, India' },
    { slug: 'ahmedabad', name: 'Ahmedabad, India' },
    { slug: 'chandigarh', name: 'Chandigarh, India' },
    { slug: 'coimbatore', name: 'Coimbatore, India' },
    { slug: 'indore', name: 'Indore, India' },
    { slug: 'nagpur', name: 'Nagpur, India' },

    // Dubai / UAE
    { slug: 'dubai', name: 'Dubai, UAE' },
    { slug: 'abu-dhabi', name: 'Abu Dhabi, UAE' },
    { slug: 'sharjah', name: 'Sharjah, UAE' },
    { slug: 'ras-al-khaimah', name: 'Ras Al Khaimah, UAE' },
    { slug: 'ajman', name: 'Ajman, UAE' },
    { slug: 'fujairah', name: 'Fujairah, UAE' },
    { slug: 'umm-al-quwain', name: 'Umm Al Quwain, UAE' }
]

/**
 * Get location-specific job board data for a job + location combination
 */
export function getLocationJobBoard(jobSlug: string, locationSlug: string): LocationJobBoard | undefined {
    return LOCATION_JOB_BOARDS.find(
        board => board.jobSlug === jobSlug && board.locationSlug === locationSlug
    )
}

/**
 * Get job listings for a specific job + location combination
 */
export function getLocationJobsListings(jobSlug: string, locationSlug: string) {
    const locationBoard = getLocationJobBoard(jobSlug, locationSlug)
    const baseListings = getJobListingsBySlug(jobSlug)

    // Add location to job listings
    const locationName = SUPPORTED_LOCATIONS.find(l => l.slug === locationSlug)?.name || locationSlug

    return baseListings.map(listing => ({
        ...listing,
        location: {
            city: locationName.split(',')[0],
            state: locationName.includes(',') ? locationName.split(', ')[1] : '',
            country: locationName.includes('India') ? 'India' :
                locationName.includes('UAE') ? 'United Arab Emirates' : 'United States'
        },
        // Adjust featured status based on location demand
        featured: listing.featured || Math.random() > 0.6
    }))
}
