import { MetadataRoute } from 'next';

/**
 * Comprehensive robots.txt configuration for Hirenest
 * Last Updated: January 2026
 * Purpose: Crawler management for recruitment platform
 */
export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://hirenest.ai';

    return {
        rules: [
            // ============================================================================
            // UNIVERSAL RULES - Applied to all crawlers first
            // ============================================================================
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/*.css$',
                    '/*.js$',
                    '/*.jpg$',
                    '/*.jpeg$',
                    '/*.png$',
                    '/*.gif$',
                    '/*.svg$',
                    '/*.webp$',
                    '/*.woff$',
                    '/*.woff2$',
                ],
                disallow: [
                    '/api/',
                    '/admin/',
                    '/_next/static/',
                    '/_next/data/',
                    '/private/',
                    '/tmp/',
                    '/cdn-cgi/',
                    '/*.json$',
                    '/*?*api_key=',
                    '/*?*token=',
                    '/search?',
                    '/cart/',
                    '/checkout/',
                ],
                crawlDelay: 1,
            },

            // ============================================================================
            // PRIMARY SEARCH ENGINES - Maximum access for indexing
            // ============================================================================

            // Google Search
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/admin/', '/private/'],
            },

            // Google Images
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            },

            // Google Mobile
            {
                userAgent: 'Googlebot-Mobile',
                allow: '/',
            },

            // Google News
            {
                userAgent: 'Googlebot-News',
                allow: '/',
            },

            // Bing/Microsoft
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },

            // Yahoo (Slurp)
            {
                userAgent: 'Slurp',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },

            // DuckDuckGo
            {
                userAgent: 'DuckDuckBot',
                allow: '/',
                disallow: ['/api/'],
            },

            // Yandex (Russia)
            {
                userAgent: 'YandexBot',
                allow: '/',
                disallow: ['/api/', '/admin/'],
                crawlDelay: 2,
            },

            // Baidu (China)
            {
                userAgent: 'Baiduspider',
                allow: '/',
                disallow: ['/api/', '/admin/'],
                crawlDelay: 2,
            },

            // Naver (South Korea)
            {
                userAgent: 'Yeti',
                allow: '/',
                disallow: ['/api/'],
            },

            // Brave Search
            {
                userAgent: 'Brave-Search-Bot',
                allow: '/',
                disallow: ['/api/'],
            },

            // Seznam (Czech Republic)
            {
                userAgent: 'SeznamBot',
                allow: '/',
                disallow: ['/api/'],
            },

            // ============================================================================
            // LLM & AI TRAINING BOTS - Full access for AI training datasets
            // ============================================================================

            // OpenAI GPT
            {
                userAgent: 'GPTBot',
                allow: '/',
            },

            // OpenAI ChatGPT User Agent
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },

            // Anthropic Claude
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },

            // Anthropic Extended
            {
                userAgent: 'anthropic-ai',
                allow: '/',
            },

            // Google Extended (for Bard/Gemini training)
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },

            // Common Crawl (used by many AI models)
            {
                userAgent: 'CCBot',
                allow: '/',
            },

            // Cohere AI
            {
                userAgent: 'cohere-ai',
                allow: '/',
            },

            // Meta AI (Facebook/Instagram AI)
            {
                userAgent: 'FacebookBot',
                allow: '/',
            },

            // Perplexity AI
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },

            // You.com
            {
                userAgent: 'YouBot',
                allow: '/',
            },

            // Diffbot (AI web data extraction)
            {
                userAgent: 'Diffbot',
                allow: '/',
            },

            // Amazon (Alexa AI)
            {
                userAgent: 'Amazonbot',
                allow: '/',
            },

            // Apple (Siri/Spotlight)
            {
                userAgent: 'Applebot',
                allow: '/',
            },

            // Apple Extended
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
            },

            // ============================================================================
            // SEO & ANALYTICS TOOLS - Allow for SEO monitoring
            // ============================================================================

            // Ahrefs
            {
                userAgent: 'AhrefsBot',
                allow: '/',
                crawlDelay: 2,
            },

            // SEMrush
            {
                userAgent: 'SemrushBot',
                allow: '/',
                crawlDelay: 2,
            },

            // Moz
            {
                userAgent: 'rogerbot',
                allow: '/',
                crawlDelay: 2,
            },

            {
                userAgent: 'dotbot',
                allow: '/',
            },

            // Majestic SEO
            {
                userAgent: 'MJ12bot',
                allow: '/',
                crawlDelay: 2,
            },

            // Screaming Frog
            {
                userAgent: 'Screaming Frog SEO Spider',
                allow: '/',
            },

            // ============================================================================
            // SOCIAL MEDIA CRAWLERS - For link previews and sharing
            // ============================================================================

            // Facebook (Meta)
            {
                userAgent: 'facebookexternalhit',
                allow: '/',
            },

            // Twitter/X
            {
                userAgent: 'Twitterbot',
                allow: '/',
            },

            // LinkedIn
            {
                userAgent: 'LinkedInBot',
                allow: '/',
            },

            // Pinterest
            {
                userAgent: 'Pinterestbot',
                allow: '/',
            },

            // WhatsApp
            {
                userAgent: 'WhatsApp',
                allow: '/',
            },

            // Telegram
            {
                userAgent: 'TelegramBot',
                allow: '/',
            },

            // Slack
            {
                userAgent: 'Slackbot',
                allow: '/',
            },

            // Discord
            {
                userAgent: 'Discordbot',
                allow: '/',
            },

            // ============================================================================
            // ARCHIVE & RESEARCH BOTS
            // ============================================================================

            // Internet Archive
            {
                userAgent: 'ia_archiver',
                allow: '/',
            },

            // Archive.org
            {
                userAgent: 'archive.org_bot',
                allow: '/',
            },

            // ============================================================================
            // BAD BOTS & SCRAPERS - Block malicious/aggressive crawlers
            // ============================================================================

            {
                userAgent: 'WebReaper',
                disallow: '/',
            },
            {
                userAgent: 'WebCopier',
                disallow: '/',
            },
            {
                userAgent: 'Offline Explorer',
                disallow: '/',
            },
            {
                userAgent: 'HTTrack',
                disallow: '/',
            },
            {
                userAgent: 'Microsoft.URL.Control',
                disallow: '/',
            },
            {
                userAgent: 'EmailCollector',
                disallow: '/',
            },
            {
                userAgent: 'EmailSiphon',
                disallow: '/',
            },
            {
                userAgent: 'EmailWolf',
                disallow: '/',
            },
            {
                userAgent: 'ExtractorPro',
                disallow: '/',
            },
            {
                userAgent: 'CherryPicker',
                disallow: '/',
            },
            {
                userAgent: 'ChinaClaw',
                disallow: '/',
            },
            {
                userAgent: 'Custo',
                disallow: '/',
            },
            {
                userAgent: 'DISCo',
                disallow: '/',
            },
            {
                userAgent: 'FlickBot',
                disallow: '/',
            },
            {
                userAgent: 'Grabber',
                disallow: '/',
            },
            {
                userAgent: 'ProWebWalker',
                disallow: '/',
            },
            {
                userAgent: 'psbot',
                disallow: '/',
            },
            {
                userAgent: 'Stripper',
                disallow: '/',
            },
            {
                userAgent: 'Sucker',
                disallow: '/',
            },
            {
                userAgent: 'Teleport',
                disallow: '/',
            },
            {
                userAgent: 'TurnitinBot',
                disallow: '/',
            },
            {
                userAgent: 'Wget',
                disallow: '/',
            },
        ],

        // ============================================================================
        // SITEMAPS - Critical for discovery
        // ============================================================================
        sitemap: `${baseUrl}/sitemap.xml`,

        // ============================================================================
        // HOST - Helps consolidate www vs non-www
        // ============================================================================
        host: baseUrl,
    };
}
