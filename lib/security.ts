/**
 * Security utilities for bot protection and request validation
 */

export interface SecurityConfig {
  enableBotDetection: boolean;
  maxPayloadSize: number; // in bytes
}

export const DEFAULT_SECURITY_CONFIG: SecurityConfig = {
  enableBotDetection: process.env.ENABLE_BOT_DETECTION !== 'false',
  maxPayloadSize: parseInt(process.env.MAX_PAYLOAD_SIZE || '10485760'), // 10MB default
};

/**
 * Check if a user agent is a legitimate search engine or social media bot
 * Returns true for GOOD bots that should be allowed
 */
export function isLegitimateBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();

  const legitimateBots = [
    // === SEARCH ENGINES ===
    'googlebot',
    'google-inspectiontool', // Google Search Console
    'google-extended', // Google's AI training crawler
    'bingbot',
    'msnbot', // Microsoft
    'slurp', // Yahoo
    'duckduckbot',
    'baiduspider',
    'yandex',
    'yandexbot',
    'sogou', // Chinese search engine
    'exabot',
    'qwantify', // Qwant search
    'mojeekbot', // Mojeek search
    'blog-pagination-controls',
    // === AI & LLM CRAWLERS ===
    'chatgpt-user', // OpenAI ChatGPT link preview
    'gptbot', // OpenAI GPT training
    'oai-searchbot', // OpenAI search
    'claudebot', // Anthropic Claude
    'claude-searchbot', // Anthropic Claude search
    'claude-user', // Anthropic Claude user
    'anthropic-ai', // Anthropic crawlers
    'claude-web', // Anthropic web crawler
    'perplexitybot', // Perplexity AI
    'perplexity-user', // Perplexity user assistant
    'perplexity', // Perplexity
    'cohere-ai', // Cohere AI
    'cohere', // Cohere
    'ai2bot', // Allen Institute for AI
    'omgili', // AI news aggregator
    'amazonbot', // Amazon AI
    'applebot', // Apple crawler
    'applebot-extended', // Apple AI training
    'meta-externalagent', // Meta AI
    'meta-externalfetcher', // Meta AI fetcher
    'facebookbot', // Meta Facebook bot
    'bytespider', // ByteDance/TikTok AI
    'diffbot', // Diffbot AI
    'anthropic', // Generic Anthropic
    'you.com', // You.com AI search
    'youbot', // You.com bot
    'ccbot', // Common Crawl
    'petalbot', // Huawei AI crawler
    'google-cloudvertexbot', // Google Cloud Vertex AI
    'mistralai-user', // Mistral AI assistant
    'duckassistbot', // DuckDuckGo AI assistant
    'anchor', // Anchor Browser AI
    'novellum', // Novellum AI
    'proratainc', // ProRata.ai
    'timpibot', // Timpi search

    // === SOCIAL MEDIA ===
    'facebookexternalhit', // Facebook link preview
    'facebookcatalog',
    'facebot', // Facebook crawler
    'twitterbot', // Twitter/X link preview
    'linkedinbot', // LinkedIn link preview
    'pinterestbot', // Pinterest
    'tumblr', // Tumblr
    'discordbot', // Discord link preview
    'slackbot', // Slack link preview
    'slackbot-linkexpanding', // Slack link expanding
    'telegrambot', // Telegram
    'whatsapp', // WhatsApp
    'whatsappbot', // WhatsApp link preview
    'skypeuripreview', // Skype
    'viberbot', // Viber
    'snapchat', // Snapchat
    'redditbot', // Reddit

    // === MONITORING & ANALYTICS ===
    'uptimerobot',
    'uptime-robot',
    'betterstack',
    'betteruptime',
    'better-uptime',
    'better uptime',
    'pingdom',
    'statuscake',
    'newrelicpinger',
    'hetrixtools',
    'monitis',
    'site24x7',
    'nodeping',
    'alertsite',

    // === OTHER LEGITIMATE ===
    'ia_archiver', // Internet Archive
    'archive.org_bot', // Internet Archive
    'seznambot', // Seznam.cz (Czech search)
    'startmebot', // Start.me bookmarking
    'inoreader', // RSS reader
    'feedfetcher-google', // Google Feedburner
    'feedburner', // Feedburner
    'feedly', // Feedly RSS
    'flipboard', // Flipboard
    'dataminr', // Dataminr news
  ];

  return legitimateBots.some(bot => ua.includes(bot));
}

/**
 * Check if a user agent is an AI/LLM crawler that should receive markdown content.
 * These bots benefit from structured markdown over HTML.
 */
export function isAiCrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();

  const aiCrawlers = [
    'chatgpt-user',
    'gptbot',
    'oai-searchbot',
    'claudebot',
    'claude-searchbot',
    'claude-user',
    'anthropic-ai',
    'claude-web',
    'anthropic',
    'perplexitybot',
    'perplexity-user',
    'perplexity',
    'cohere-ai',
    'cohere',
    'ai2bot',
    'amazonbot',
    'applebot',
    'applebot-extended',
    'meta-externalagent',
    'meta-externalfetcher',
    'bytespider',
    'diffbot',
    'you.com',
    'youbot',
    'ccbot',
    'petalbot',
    'google-cloudvertexbot',
    'google-extended',
    'mistralai-user',
    'duckassistbot',
    'anchor',
    'novellum',
    'proratainc',
    'timpibot',
  ];

  return aiCrawlers.some(bot => ua.includes(bot));
}

/**
 * Check if a user agent is a malicious bot or scraper
 * Returns true for BAD bots that should be blocked
 */
export function isMaliciousBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();

  // Don't flag legitimate bots
  if (isLegitimateBot(userAgent)) {
    return false;
  }

  // Check for suspiciously short "browser" user agents
  // Real browsers have long user agents (100+ chars)
  // Bots often fake short ones like "Chrome 60" or "Firefox 100"
  if (userAgent.length < 50) {
    const fakeBrowserPatterns = [
      /^chrome\s+\d+$/i,       // "Chrome 60"
      /^firefox\s+\d+$/i,      // "Firefox 100"
      /^safari\s+\d+$/i,       // "Safari 15"
      /^edge\s+\d+$/i,         // "Edge 90"
      /^mozilla\/\d+\.0$/i,    // "Mozilla/5.0"
      /^opera\/\d+$/i,         // "Opera/80"
    ];

    if (fakeBrowserPatterns.some(pattern => pattern.test(userAgent))) {
      return true; // Definitely a bot pretending to be a browser
    }
  }

  const maliciousPatterns: (string | RegExp)[] = [
    // Command-line tools
    'curl/',
    'wget/',
    'python-requests',
    'go-http-client',
    'java/',
    'okhttp',
    'apache-httpclient',

    // Generic crawlers without proper identification
    // Note: These patterns are checked AFTER legitimate bots are whitelisted
    /\bcrawler\b/i,    // Word boundary to avoid false positives
    /\bscraper\b/i,
    /\bspider\b/i,
    /^bot[\s\/]/i,     // "bot " or "bot/" at start
    /\sbot[\s\/]/i,    // " bot " or " bot/" in middle

    // Scraping frameworks
    'scrapy',
    'beautifulsoup',
    'mechanize',
    'htmlunit',

    // Headless browsers (when used for scraping)
    'headless',
    'phantomjs',
    'selenium',
    'puppeteer',
    'playwright',
    'webdriver',

    // Security scanners & penetration testing tools
    'zgrab', // Network scanner
    'zmap', // Network scanner
    'masscan',
    'nmap',
    'nikto',
    'sqlmap',
    'burp',
    'zap', // OWASP ZAP
    'acunetix',
    'nessus',
    'openvas',
    'metasploit',
    'nuclei', // Vulnerability scanner
    'httpx', // HTTP toolkit (often used for scanning)
    'gobuster', // Directory brute-force
    'wpscan', // WordPress scanner
    'joomscan', // Joomla scanner
    'dirbuster',
    'shodan', // Shodan scanner
    'censys', // Censys scanner

    // Aggressive SEO crawlers (optional - uncomment if needed)
    // 'ahrefsbot',
    // 'semrushbot',
    // 'mj12bot',
    // 'dotbot',
    // 'blexbot',
  ];

  return maliciousPatterns.some(pattern => {
    if (typeof pattern === 'string') {
      return ua.includes(pattern);
    } else {
      return pattern.test(userAgent);
    }
  });
}

/**
 * Check if a path is suspicious (common attack vectors)
 */
export function isSuspiciousPath(pathname: string): boolean {
  const path = pathname.toLowerCase();

  const suspiciousPatterns = [
    // PHP-based attacks
    /\.php$/i,
    /\.asp$/i,
    /\.aspx$/i,
    /\.jsp$/i,
    /\.cgi$/i,

    // WordPress attacks
    /\/wp-admin/i,
    /\/wp-login\.php/i,
    /\/wp-content\/plugins\//i,
    /\/xmlrpc\.php/i,
    /\/wp-json\/wp\/v2\/users/i,

    // Admin panel attempts
    /^\/admin$/i,           // Exact match for /admin
    /^\/admin\//i,          // Paths starting with /admin/
    /\/phpinfo/i,
    /\/phpmyadmin/i,
    /\/adminer/i,
    /\/manager\//i,         // Tomcat
    /\/console/i,           // JBoss
    /\/controlpanel/i,

    // Config and sensitive files
    /\.env$/i,
    /\.git/i,
    /\.svn/i,
    /\.htaccess/i,
    /\.htpasswd/i,
    /web\.config/i,
    /\.sql$/i,
    /config\.(php|ini|json|yml|yaml)/i,
    /database\.(sql|db)/i,

    // Backup files
    /\/backup/i,
    /\.bak$/i,
    /\.old$/i,
    /\.backup$/i,
    /\.swp$/i,
    /\.tmp$/i,

    // Shell and script attempts
    /\.sh$/i,
    /\.bash$/i,
    /\.pl$/i,
    /\.py$/i,
    /\/shell/i,

    // Server exploits
    /\/server-status/i,
    /\/server-info/i,
    /\/actuator/i,
    /\/\.aws/i,
    /\/debug\//i,
    /\/geoserver/i,
    /\/solr\//i,
    /\/elasticsearch/i,
    /\/kibana/i,
    /\/grafana/i,
    /\/jenkins/i,
    /\/nexus/i,

    // Microsoft Exchange exploits
    /\/ecp\//i,              // Exchange Control Panel
    /\/owa\//i,              // Outlook Web Access
    /\/microsoft\.exchange/i, // Exchange paths
    /\/autodiscover/i,       // Exchange autodiscover
    /\/mapi\//i,             // Exchange MAPI
    /\/rpc\//i,              // Exchange RPC

    // Common exploits
    /\.\.\//,              // Directory traversal
    /\.\./,                // Directory traversal
    /%2e%2e/i,             // Encoded directory traversal
    /\/etc\/passwd/i,
    /\/proc\/self/i,
    /\/var\/log/i,

    // API abuse attempts
    /\/api\/.*\/\.\./i,    // API directory traversal
    /\/\.well-known\/security\.txt/i, // Security scanning
  ];

  return suspiciousPatterns.some(pattern => pattern.test(path));
}

/**
 * Validate request payload for suspicious content
 * Note: This should be used in API routes, NOT in middleware
 * Middleware should not read request bodies
 */
export function validatePayload(body: string): { valid: boolean; reason?: string } {
  // Allow empty payloads for some endpoints (e.g., POST with no body)
  if (!body || body.trim().length === 0) {
    return { valid: true }; // Changed from false - empty is valid
  }

  // Check payload size against config
  const maxSize = DEFAULT_SECURITY_CONFIG.maxPayloadSize;
  if (body.length > maxSize) {
    return {
      valid: false,
      reason: `Payload too large (${body.length} bytes, max ${maxSize})`
    };
  }

  // Check for suspicious content patterns (XSS, code injection)
  const suspiciousPatterns = [
    // Script injection
    /<script[^>]*>[\s\S]*?<\/script>/gi,
    /javascript:/i,
    /vbscript:/i,
    /data:text\/html/i,

    // Event handlers
    /on\w+\s*=/i,

    // Dangerous functions
    /eval\s*\(/i,
    /expression\s*\(/i,
    /setTimeout\s*\(/i,
    /setInterval\s*\(/i,

    // Iframes and objects
    /<iframe/i,
    /<object/i,
    /<embed/i,

    // SQL injection attempts (basic)
    /union\s+select/i,
    /drop\s+table/i,
    /insert\s+into/i,
    /delete\s+from/i,

    // Command injection
    /;.*rm\s+-rf/i,
    /;.*wget/i,
    /;.*curl/i,
    /\$\(.*\)/i, // Shell command substitution
    /`.*`/i,     // Backtick command execution
  ];

  // Note: Be careful with false positives for legitimate HTML content
  // You might want to whitelist certain endpoints or content types
  if (suspiciousPatterns.some(pattern => pattern.test(body))) {
    return { valid: false, reason: 'Suspicious content detected' };
  }

  return { valid: true };
}

/**
 * Rate limiting helper - calculates backoff time
 */
export function calculateBackoff(attemptCount: number): number {
  // Exponential backoff: 2^attempt * 1000ms
  return Math.min(Math.pow(2, attemptCount) * 1000, 300000); // Max 5 minutes
}

/**
 * Sanitize user agent for safe logging
 */
export function sanitizeUserAgent(userAgent: string | null): string {
  if (!userAgent) return 'none';

  // Truncate very long user agents
  const maxLength = 200;
  if (userAgent.length > maxLength) {
    return userAgent.substring(0, maxLength) + '...';
  }

  // Remove any potential log injection characters
  return userAgent.replace(/[\r\n\t]/g, ' ');
}

/**
 * Check if path is an API endpoint
 */
export function isApiPath(pathname: string): boolean {
  return pathname.startsWith('/api/');
}

/**
 * Check if path is a static asset
 */
export function isStaticAsset(pathname: string): boolean {
  const staticExtensions = [
    '.css', '.js', '.map',
    '.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.webp',
    '.woff', '.woff2', '.ttf', '.eot', '.otf',
    '.mp4', '.webm', '.ogg', '.mp3', '.wav',
    '.pdf', '.zip', '.json', '.xml', '.txt',
  ];

  return staticExtensions.some(ext => pathname.toLowerCase().endsWith(ext));
}