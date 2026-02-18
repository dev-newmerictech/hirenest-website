/**
 * X-Robots-Tag HTTP Header Configuration
 *
 * This module provides configuration for X-Robots-Tag HTTP headers.
 * X-Robots-Tag headers provide search engines with crawling and indexing
 * directives at the HTTP header level.
 *
 * Google Documentation: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag
 */

/**
 * X-Robots-Tag configuration for different content types
 *
 * Common directives:
 * - all: No restrictions (equivalent to index, follow)
 * - noindex: Do not index this page
 * - nofollow: Do not follow links on this page
 * - none: Equivalent to noindex, nofollow
 * - noarchive: Do not show cached link in search results
 * - nosnippet: Don't show snippet in search results
 * - max-image-preview: [standard|large|none] - Limit image preview size
 * - max-snippet: [number] - Maximum snippet length in characters (-1 = unlimited)
 * - max-video-preview: [number] - Maximum video preview in seconds (-1 = unlimited)
 */
export const X_ROBOTS_CONFIG = {
  /**
   * Default X-Robots-Tag for public pages
   * Allows indexing, following, and rich snippets
   */
  default: 'all, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

  /**
   * For admin, dashboard, and private areas
   * Prevents indexing of administrative pages
   */
  noIndex: 'noindex, nofollow',

  /**
   * For PDF and document files
   * Allows indexing but prevents archiving
   */
  documents: 'all, max-image-preview:large, noarchive',

  /**
   * For API endpoints
   * Prevents indexing of API responses
   */
  api: 'noindex, nosnippet, noarchive',

  /**
   * For thank you, confirmation pages
   * Prevents indexing but allows following links
   */
  thankYou: 'noindex, follow',

  /**
   * For legal pages (privacy policy, terms)
   * Allows indexing with no archive
   */
  legal: 'all, max-image-preview:standard, noarchive',

  /**
   * For search and filter pages
   * Prevents indexing of dynamic search results
   */
  search: 'noindex, follow',
} as const;

/**
 * Path patterns that should use specific X-Robots-Tag configurations
 */
export const X_ROBOTS_PATH_RULES: Array<{
  pattern: RegExp | string;
  config: keyof typeof X_ROBOTS_CONFIG;
}> = [
  // Admin and dashboard routes
  { pattern: /^\/admin/, config: 'noIndex' },
  { pattern: /^\/dashboard/, config: 'noIndex' },
  { pattern: /^\/account/, config: 'noIndex' },

  // API routes
  { pattern: /^\/api/, config: 'api' },

  // Thank you and confirmation pages
  { pattern: '/thank-you', config: 'thankYou' },
  { pattern: '/confirmation', config: 'thankYou' },
  { pattern: '/success', config: 'thankYou' },

  // Search pages
  { pattern: /^\/search/, config: 'search' },

  // Legal pages - no archive
  { pattern: '/privacy-policy', config: 'legal' },
  { pattern: '/terms', config: 'legal' },
  { pattern: '/cookies', config: 'legal' },
  { pattern: '/refund', config: 'legal' },
];

/**
 * Get the appropriate X-Robots-Tag value for a given pathname
 *
 * @param pathname - The request pathname
 * @returns The X-Robots-Tag header value
 */
export function getXRobotsTagForPath(pathname: string): string {
  // Check each path rule
  for (const rule of X_ROBOTS_PATH_RULES) {
    if (typeof rule.pattern === 'string') {
      // Exact string match
      if (pathname === rule.pattern || pathname === `${rule.pattern}/`) {
        return X_ROBOTS_CONFIG[rule.config];
      }
    } else {
      // RegExp match
      if (rule.pattern.test(pathname)) {
        return X_ROBOTS_CONFIG[rule.config];
      }
    }
  }

  // Default configuration
  return X_ROBOTS_CONFIG.default;
}

/**
 * Type for X-Robots-Tag configuration keys
 */
export type XRobotsConfigKey = keyof typeof X_ROBOTS_CONFIG;

/**
 * Get all available X-Robots-Tag configurations
 *
 * @returns All configuration values
 */
export function getAllXRobotsConfigs(): typeof X_ROBOTS_CONFIG {
  return X_ROBOTS_CONFIG;
}

/**
 * Check if a pathname should have noindex
 *
 * @param pathname - The request pathname
 * @returns True if the path should not be indexed
 */
export function shouldNoIndex(pathname: string): boolean {
  const xRobotsTag = getXRobotsTagForPath(pathname);
  return xRobotsTag.includes('noindex');
}
