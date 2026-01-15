// Structured Data (JSON-LD) utilities for SEO

export interface OrganizationSchema {
    '@context': string;
    '@type': string;
    name: string;
    url: string;
    logo: string;
    description: string;
    sameAs: string[];
    contactPoint: {
        '@type': string;
        telephone?: string;
        contactType: string;
        email: string;
        areaServed: string;
        availableLanguage: string[];
    }[];
}

export interface WebsiteSchema {
    '@context': string;
    '@type': string;
    name: string;
    url: string;
    description: string;
    potentialAction: {
        '@type': string;
        target: {
            '@type': string;
            urlTemplate: string;
        };
        'query-input': string;
    };
}

export interface BreadcrumbSchema {
    '@context': string;
    '@type': string;
    itemListElement: {
        '@type': string;
        position: number;
        name: string;
        item?: string;
    }[];
}

export interface WebPageSchema {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    url: string;
    breadcrumb?: BreadcrumbSchema;
    mainEntity?: any;
}

export interface FAQSchema {
    '@context': string;
    '@type': string;
    mainEntity: {
        '@type': string;
        name: string;
        acceptedAnswer: {
            '@type': string;
            text: string;
        };
    }[];
}

export interface SoftwareApplicationSchema {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    url: string;
    applicationCategory: string;
    offers: {
        '@type': string;
        price: string;
        priceCurrency: string;
    };
    aggregateRating?: {
        '@type': string;
        ratingValue: string;
        ratingCount: string;
    };
}

const baseUrl = 'https://hirenest.ai';

export const organizationSchema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hirenest',
    url: baseUrl,
    logo: `${baseUrl}/HpLogo.svg`,
    description: 'AI-powered platform connecting job seekers with employers through intelligent matching, resume building, and comprehensive hiring tools.',
    sameAs: [
        'https://twitter.com/hirenest',
        'https://linkedin.com/company/hirenest',
        'https://facebook.com/hirenest',
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'Customer Support',
            email: 'support@hirenest.com',
            areaServed: 'Worldwide',
            availableLanguage: ['English'],
        },
        {
            '@type': 'ContactPoint',
            contactType: 'Sales',
            email: 'sales@hirenest.com',
            areaServed: 'Worldwide',
            availableLanguage: ['English'],
        },
    ],
};

export const websiteSchema: WebsiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hirenest',
    url: baseUrl,
    description: 'Your trusted platform connecting job seekers with top employers.',
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
    },
};

export function generateBreadcrumbSchema(items: { name: string; url?: string }[]): BreadcrumbSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            ...(item.url && { item: item.url }),
        })),
    };
}

export function generateWebPageSchema(
    name: string,
    description: string,
    url: string,
    breadcrumbItems?: { name: string; url?: string }[]
): WebPageSchema {
    const schema: WebPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name,
        description,
        url,
    };

    if (breadcrumbItems && breadcrumbItems.length > 0) {
        schema.breadcrumb = generateBreadcrumbSchema(breadcrumbItems);
    }

    return schema;
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]): FAQSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function generateSoftwareApplicationSchema(
    name: string,
    description: string,
    url: string,
    category: string = 'BusinessApplication'
): SoftwareApplicationSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name,
        description,
        url,
        applicationCategory: category,
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
    };
}

export function generateJobPostingSchema(
    title: string,
    description: string,
    datePosted: string,
    validThrough: string,
    employmentType: string = 'FULL_TIME'
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title,
        description,
        datePosted,
        validThrough,
        employmentType,
        hiringOrganization: {
            '@type': 'Organization',
            name: 'Hirenest',
            sameAs: baseUrl,
            logo: `${baseUrl}/HpLogo.svg`,
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
            },
        },
    };
}
