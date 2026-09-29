// Location and Currency Economics Engine for Programmatic SEO Job Board
// Handles localization for India (INR), UAE (AED), and United States / Remote (USD)

import { SalaryRange } from './types'

export const INDIAN_LOCATION_SLUGS = [
    'bangalore',
    'hyderabad',
    'mumbai',
    'delhi',
    'pune',
    'chennai',
    'gurgaon',
    'noida',
    'jaipur',
    'kolkata',
    'ahmedabad',
    'chandigarh',
    'coimbatore',
    'indore',
    'nagpur'
]

export const UAE_LOCATION_SLUGS = [
    'dubai',
    'abu-dhabi',
    'sharjah',
    'ras-al-khaimah',
    'ajman',
    'fujairah',
    'umm-al-quwain'
]

export type CountryCode = 'IN' | 'AE' | 'US'

/**
 * Determine the country code from a location slug or location name
 */
export function getLocationCountry(locationSlugOrName?: string): CountryCode {
    if (!locationSlugOrName) return 'US'
    const normalized = locationSlugOrName.toLowerCase().trim()

    if (
        normalized.includes('india') ||
        INDIAN_LOCATION_SLUGS.some(slug => normalized === slug || normalized.includes(slug))
    ) {
        return 'IN'
    }

    if (
        normalized.includes('uae') ||
        normalized.includes('emirates') ||
        UAE_LOCATION_SLUGS.some(slug => normalized === slug || normalized.includes(slug))
    ) {
        return 'AE'
    }

    return 'US'
}

export interface CurrencyConfig {
    currency: string
    symbol: string
    countryCode: CountryCode
    period: 'yearly' | 'monthly' | 'hourly'
}

/**
 * Get currency configuration for a location
 */
export function getLocationCurrency(locationSlugOrName?: string): CurrencyConfig {
    const country = getLocationCountry(locationSlugOrName)

    switch (country) {
        case 'IN':
            return {
                currency: 'INR',
                symbol: '₹',
                countryCode: 'IN',
                period: 'yearly'
            }
        case 'AE':
            return {
                currency: 'AED',
                symbol: 'AED',
                countryCode: 'AE',
                period: 'yearly'
            }
        case 'US':
        default:
            return {
                currency: 'USD',
                symbol: '$',
                countryCode: 'US',
                period: 'yearly'
            }
    }
}

/**
 * Generate a realistic market salary range calibrated to local economics
 */
export function getLocalizedSalaryRange(
    baseSalaryUsd: number = 85000,
    category: string = 'technology',
    locationSlugOrName?: string
): SalaryRange {
    const country = getLocationCountry(locationSlugOrName)

    if (country === 'IN') {
        // Calibrate US salaries to Indian market rates in Rupees (LPA)
        // Technology roles: ~10 LPA to 35 LPA
        // Non-tech roles: ~6 LPA to 20 LPA
        const isTech = category === 'technology' || category === 'engineering' || category === 'design'
        const multiplier = isTech ? 18 : 12

        // Base salary in Indian Rupees (e.g. $115,000 * 18 = ₹2,070,000 ~ 20.7 LPA)
        const inrBase = Math.round((baseSalaryUsd * multiplier) / 100000) * 100000
        const clampedBase = Math.max(isTech ? 800000 : 500000, Math.min(inrBase, isTech ? 4500000 : 2500000))
        const variance = Math.round((clampedBase * 0.25) / 50000) * 50000

        return {
            min: Math.max(500000, clampedBase - variance),
            max: clampedBase + variance,
            currency: 'INR',
            period: 'yearly'
        }
    }

    if (country === 'AE') {
        // UAE market rates in AED yearly (approx 120,000 to 300,000 AED/yr)
        const aedBase = Math.round((baseSalaryUsd * 1.5) / 10000) * 10000
        const clampedBase = Math.max(90000, Math.min(aedBase, 360000))
        const variance = Math.round((clampedBase * 0.2) / 10000) * 10000

        return {
            min: clampedBase - variance,
            max: clampedBase + variance,
            currency: 'AED',
            period: 'yearly'
        }
    }

    // Default US / Remote
    const variance = Math.round((baseSalaryUsd * 0.25) / 5000) * 5000
    return {
        min: Math.round(baseSalaryUsd - variance),
        max: Math.round(baseSalaryUsd + variance),
        currency: 'USD',
        period: 'yearly'
    }
}

/**
 * Format salary with clean local notation (e.g. "₹12 - 25 LPA" for India)
 */
export function formatLocalizedSalary(salary?: SalaryRange): string {
    if (!salary) return ''

    const { min, max, currency, period } = salary

    if (currency === 'INR') {
        const toLpa = (val: number) => {
            const lpa = val / 100000
            return lpa % 1 === 0 ? lpa.toString() : lpa.toFixed(1)
        }

        if (min >= 100000 && max >= 100000 && period === 'yearly') {
            return `₹${toLpa(min)} - ${toLpa(max)} LPA`
        }

        return `₹${min.toLocaleString('en-IN')} - ₹${max.toLocaleString('en-IN')}${period === 'hourly' ? '/hr' : period === 'monthly' ? '/mo' : '/yr'}`
    }

    if (currency === 'AED') {
        return `AED ${min.toLocaleString('en-US')} - ${max.toLocaleString('en-US')}${period === 'yearly' ? '/yr' : '/mo'}`
    }

    // Default USD formatting
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency || 'USD',
        maximumFractionDigits: 0
    })

    if (period === 'yearly') {
        return `${formatter.format(min)} - ${formatter.format(max)}/yr`
    } else if (period === 'hourly') {
        return `${formatter.format(min)} - ${formatter.format(max)}/hr`
    }
    return `${formatter.format(min)} - ${formatter.format(max)}`
}

/**
 * Get FAQ text for average salaries in a specific location
 */
export function getLocalizedFaqSalaryText(
    locationName: string,
    jobTitle?: string,
    avgSalaryUsd: number = 85000,
    category: string = 'technology'
): string {
    const country = getLocationCountry(locationName)
    const salary = getLocalizedSalaryRange(avgSalaryUsd, category, locationName)

    if (country === 'IN') {
        const minLpa = (salary.min / 100000).toFixed(0)
        const maxLpa = (salary.max / 100000).toFixed(0)
        const entryLpa = Math.max(4, Math.round(Number(minLpa) * 0.7))
        const seniorLpa = Math.round(Number(maxLpa) * 1.4)

        if (jobTitle) {
            return `${jobTitle} salaries in ${locationName} typically range from ₹${minLpa} Lakhs to ₹${maxLpa} Lakhs (LPA) annually, depending on experience, skill stack, and company size. Entry-level roles start around ₹${entryLpa} LPA, while senior and staff roles can exceed ₹${seniorLpa} LPA.`
        }
        return `Salaries in ${locationName} vary significantly by role and industry. Technology and software roles typically range from ₹8 Lakhs to ₹30 Lakhs annually (8–30 LPA), while management and lead positions offer higher compensation. Entry-level positions start around ₹5 Lakhs, with senior roles exceeding ₹40 Lakhs per annum.`
    }

    if (country === 'AE') {
        if (jobTitle) {
            return `${jobTitle} salaries in ${locationName} typically range from AED ${salary.min.toLocaleString()} to AED ${salary.max.toLocaleString()} annually (tax-free). Senior positions and leadership roles with multinational firms can exceed AED ${(salary.max * 1.3).toLocaleString()} per year.`
        }
        return `Salaries in ${locationName} range widely across sectors. Technology and professional services roles typically offer between AED 120,000 and AED 280,000 annually with tax-free benefits, health coverage, and annual flight allowances.`
    }

    // Default US
    if (jobTitle) {
        return `${jobTitle} salaries in ${locationName} typically range from $${salary.min.toLocaleString()} to $${salary.max.toLocaleString()} annually, depending on experience, skills, and company size. Entry-level positions start around $${Math.round(salary.min * 0.8).toLocaleString()} while senior jobs can exceed $${Math.round(salary.max * 1.3).toLocaleString()}.`
    }
    return `Salaries in ${locationName} vary by role and experience level. Technology roles typically range from $75,000 to $160,000 annually, while other positions offer competitive compensation based on industry standards. Entry-level positions start around $50,000, with senior roles exceeding $160,000.`
}
