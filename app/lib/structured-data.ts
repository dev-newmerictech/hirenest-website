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
    datePublished?: string;
    dateModified?: string;
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
    primaryImageOfPage?: ImageObjectSchema;
    video?: VideoObjectSchema;
    author?: {
        '@type': string;
        name: string;
        url?: string;
    };
    datePublished?: string;
    dateModified?: string;
}

export interface WebPageOptions {
    image?: string | ImageObjectSchema;
    video?: VideoObjectSchema;
    author?: string;
    datePublished?: string;
    dateModified?: string;
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

export interface ImageObjectSchema {
    '@context': string;
    '@type': string;
    contentUrl: string;
    url?: string;
    name?: string;
    description?: string;
    width?: number | string;
    height?: number | string;
    encodingFormat?: string;
    uploadDate?: string;
    author?: {
        '@type': string;
        name: string;
    };
    copyrightHolder?: {
        '@type': string;
        name: string;
    };
    license?: string;
}

export interface VideoObjectSchema {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    thumbnailUrl: string | string[];
    uploadDate: string;
    contentUrl?: string;
    embedUrl?: string;
    duration?: string; // ISO 8601 format (e.g., "PT1M30S" for 1 minute 30 seconds)
    width?: number | string;
    height?: number | string;
    author?: {
        '@type': string;
        name: string;
    };
    publisher?: {
        '@type': string;
        name: string;
        logo?: {
            '@type': string;
            url: string;
        };
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
    datePublished: '2024-01-01T00:00:00.000Z',
    dateModified: new Date().toISOString(),
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
    breadcrumbItems?: { name: string; url?: string }[],
    options?: WebPageOptions
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

    if (options?.image) {
        if (typeof options.image === 'string') {
            schema.primaryImageOfPage = generateImageObjectSchema(options.image);
        } else {
            schema.primaryImageOfPage = options.image;
        }
    }

    if (options?.video) {
        schema.video = options.video;
    }

    const authorName = options?.author || 'Hirenest';
    schema.author = {
        '@type': 'Organization',
        name: authorName,
        url: 'https://hirenest.ai'
    };

    if (options?.datePublished) schema.datePublished = options.datePublished;
    if (options?.dateModified) schema.dateModified = options.dateModified;

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

/**
 * Generate ImageObject schema for images
 * @param contentUrl - Direct URL to the image file
 * @param options - Optional metadata for the image
 */
export function generateImageObjectSchema(
    contentUrl: string,
    options?: {
        url?: string;
        name?: string;
        description?: string;
        width?: number;
        height?: number;
        encodingFormat?: string;
        uploadDate?: string;
        author?: string;
        license?: string;
    }
): ImageObjectSchema {
    const schema: ImageObjectSchema = {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        contentUrl,
    };

    if (options?.url) schema.url = options.url;
    if (options?.name) schema.name = options.name;
    if (options?.description) schema.description = options.description;
    if (options?.width) schema.width = options.width;
    if (options?.height) schema.height = options.height;
    if (options?.encodingFormat) schema.encodingFormat = options.encodingFormat;
    if (options?.uploadDate) schema.uploadDate = options.uploadDate;

    if (options?.author) {
        schema.author = {
            '@type': 'Person',
            name: options.author,
        };
        schema.copyrightHolder = {
            '@type': 'Organization',
            name: 'Hirenest',
        };
    }

    if (options?.license) schema.license = options.license;

    return schema;
}

/**
 * Generate VideoObject schema for videos
 * @param name - Title of the video
 * @param description - Description of the video content
 * @param thumbnailUrl - URL(s) to video thumbnail image(s)
 * @param uploadDate - ISO 8601 date when video was uploaded
 * @param options - Optional metadata for the video
 */
export function generateVideoObjectSchema(
    name: string,
    description: string,
    thumbnailUrl: string | string[],
    uploadDate: string,
    options?: {
        contentUrl?: string;
        embedUrl?: string;
        duration?: string; // ISO 8601 format (e.g., "PT1M30S")
        width?: number;
        height?: number;
        author?: string;
    }
): VideoObjectSchema {
    const schema: VideoObjectSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name,
        description,
        thumbnailUrl,
        uploadDate,
        publisher: {
            '@type': 'Organization',
            name: 'Hirenest',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/HpLogo.svg`,
            },
        },
    };

    if (options?.contentUrl) schema.contentUrl = options.contentUrl;
    if (options?.embedUrl) schema.embedUrl = options.embedUrl;
    if (options?.duration) schema.duration = options.duration;
    if (options?.width) schema.width = options.width;
    if (options?.height) schema.height = options.height;

    if (options?.author) {
        schema.author = {
            '@type': 'Person',
            name: options.author,
        };
    }

    return schema;
}

/**
 * Generate a complete FAQ schema with multiple questions
 * This is an enhanced version that can be used in pages with FAQ sections
 */
export function generateCompleteFAQSchema(
    faqs: { question: string; answer: string }[],
    pageUrl?: string
): FAQSchema & { url?: string } {
    const schema = generateFAQSchema(faqs);

    if (pageUrl) {
        return {
            ...schema,
            url: pageUrl,
        };
    }

    return schema;
}
