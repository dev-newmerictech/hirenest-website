// Real Job Ingestion Service for HireNest Website
// Fetches live, authenticated/aggregated jobs from the HireNest Backend API

import { JobListing, SalaryRange } from '../programmatic-seo/job-board/types'

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:5001' : 'https://api.hirenest.ai')

export interface PublicJobFilter {
    location?: string
    search?: string
    limit?: number
}

/**
 * Fetch real public jobs from HireNest Backend
 */
export async function fetchRealPublicJobs(filter?: PublicJobFilter): Promise<JobListing[]> {
    try {
        const queryParams = new URLSearchParams()
        queryParams.set('limit', String(filter?.limit || 20))
        if (filter?.search) queryParams.set('search', filter.search)
        if (filter?.location) queryParams.set('location', filter.location)

        const url = `${BACKEND_URL}/api/public/jobs?${queryParams.toString()}`
        const res = await fetch(url, {
            next: { revalidate: 300 }, // 5 minutes ISR cache
            headers: {
                'Accept': 'application/json'
            }
        })

        if (!res.ok) {
            return []
        }

        const json = await res.json()
        if (!json.data || !Array.isArray(json.data)) {
            return []
        }

        return json.data.map((job: any): JobListing => {
            const companyName = job.company?.name || 'Top Employer'
            const companySlug = companyName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
            const locationCity = job.address?.city || ''
            const locationCountry = job.address?.country || 'United States'
            const isRemote = job.preferences?.workMode?.includes('remote') || false
            const isHybrid = job.preferences?.workMode?.includes('hybrid') || false

            let salaryRange: SalaryRange | undefined = undefined
            if (job.preferences?.salaryRange?.from && job.preferences?.salaryRange?.to) {
                salaryRange = {
                    min: job.preferences.salaryRange.from,
                    max: job.preferences.salaryRange.to,
                    currency: job.preferences.salaryRange.currency || 'USD',
                    period: 'yearly'
                }
            }

            return {
                id: job._id,
                title: job.title,
                slug: `${companySlug}-${job._id}`,
                companyName: companyName,
                companySlug: companySlug,
                location: {
                    city: locationCity,
                    state: job.address?.state || '',
                    country: locationCountry,
                    isRemote,
                    isHybrid
                },
                jobType: job.preferences?.employmentType?.[0] || 'full-time',
                experienceLevel: job.preferences?.experienceLevel || 'mid-level',
                salaryRange,
                description: job.description || 'Join our team to build next-generation products.',
                requirements: job.preferences?.skills || [],
                benefits: ['Health insurance', 'Paid time off', 'Flexible schedule', 'Equity compensation'],
                skills: job.preferences?.skills || ['Collaboration', 'Leadership'],
                postedDate: job.createdAt ? new Date(job.createdAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                applicationUrl: job.externalLink || `https://app.hirenest.ai/jobs/${job._id}`,
                isRemote,
                featured: true,
                category: 'technology'
            }
        })
    } catch {
        // Return empty array if backend is down or unreachable
        return []
    }
}
