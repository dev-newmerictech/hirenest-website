import { ReactNode } from "react";
import type { LogoGalleryConfig } from "@/app/components/LogoMarquee";

/* -----------------------------------------------------
 * Logo marquee types
 * --------------------------------------------------- */
export type { LogoItem, LogoGalleryConfig } from "@/app/components/LogoMarquee";

/* -----------------------------------------------------
 * Shared types
 * --------------------------------------------------- */

export interface GitHubContributionsConfig {
  enabled: boolean;
  username: string;
  showYearNavigation: boolean;
  linkToProfile: boolean;
  title?: string;
}

export interface VisitorMapConfig {
  enabled: boolean;
  title?: string;
}

export interface InnerPageLogoConfig {
  enabled: boolean;
  size: number;
}

export interface BlogPageConfig {
  enabled: boolean;
  showInNav: boolean;
  title: string;
  description?: string;
  order?: number;
  viewMode: "list" | "cards";
  showViewToggle: boolean;
}

export interface HomePostsReadMoreConfig {
  enabled: boolean;
  text: string;
  link: string;
}

export interface PostsDisplayConfig {
  showOnHome: boolean;
  showOnBlogPage: boolean;
  homePostsLimit?: number;
  homePostsReadMore?: HomePostsReadMoreConfig;
}

export interface HardcodedNavItem {
  slug: string;
  title: string;
  order?: number;
  showInNav?: boolean;
}

export interface GitHubRepoConfig {
  owner: string;
  repo: string;
  branch: string;
  contentPath: string;
}

/* -----------------------------------------------------
 * Theme + Font (RESTORED FROM CODE 1)
 * --------------------------------------------------- */

export type FontFamily = "serif" | "sans" | "monospace" | "jakarta";
export type Theme = "dark" | "light" | "tan" | "cloud";

/* -----------------------------------------------------
 * Layout + Footer
 * --------------------------------------------------- */

export interface RightSidebarConfig {
  enabled: boolean;
  minWidth?: number;
}

export interface FooterConfig {
  enabled: boolean;
  showOnHomepage: boolean;
  showOnPosts: boolean;
  showOnPages: boolean;
  showOnBlogPage: boolean;
  defaultContent?: string;
}

export interface HomepageConfig {
  type: "default" | "page" | "post";
  slug?: string;
  originalHomeRoute?: string;
}

/* -----------------------------------------------------
 * AI CONFIG (RESTORED FROM CODE 1)
 * --------------------------------------------------- */

export interface AIChatConfig {
  enabledOnWritePage: boolean;
  enabledOnContent: boolean;
}

// AI Model configuration for Dashboard multi-model support
export interface AIModelOption {
  id: string; // Model identifier (e.g., "claude-sonnet-4-20250514", "gpt-4o")
  name: string; // Display name (e.g., "Claude Sonnet 4", "GPT-4o")
  provider: "anthropic" | "openai" | "google"; // Provider for the model
}

// AI Dashboard configuration
// Controls multi-model AI chat and image generation in the Dashboard
export interface AIDashboardConfig {
  enableImageGeneration: boolean; // Enable image generation tab
  defaultTextModel: string; // Default model ID for text chat
  textModels: AIModelOption[]; // Available text models
  imageModels: AIModelOption[]; // Available image generation models
}

export interface SemanticSearchConfig {
  enabled: boolean;
}

export interface AskAIConfig {
  enabled: boolean;
  defaultModel: string;
  models: AIModelOption[];
}

// Related posts configuration
// Controls the display of related posts at the bottom of blog posts
export interface RelatedPostsConfig {
  defaultViewMode: "list" | "thumbnails"; // Default view mode for related posts
  showViewToggle: boolean; // Show toggle button to switch between views
}
/* -----------------------------------------------------
 * Docs (RESTORED FROM CODE 1)
 * --------------------------------------------------- */

export interface DocsSectionConfig {
  enabled: boolean;
  slug: string;
  title: string;
  showInNav: boolean;
  order?: number;
  defaultExpanded: boolean;
}

/* -----------------------------------------------------
 * Newsletter + Admin
 * --------------------------------------------------- */

export interface NewsletterSignupPlacement {
  enabled: boolean;
  position: "above-footer" | "below-intro" | "below-content" | "below-posts";
  title: string;
  description: string;
}

export interface NewsletterConfig {
  enabled: boolean;
  signup: {
    home: NewsletterSignupPlacement;
    blogPage: NewsletterSignupPlacement;
    posts: NewsletterSignupPlacement;
  };
}

export interface ContactFormConfig {
  enabled: boolean;
  title: string;
  description: string;
}

export interface NewsletterAdminConfig {
  enabled: boolean;
  showInNav: boolean;
}

export interface NewsletterNotificationsConfig {
  enabled: boolean;
  newSubscriberAlert: boolean;
  weeklyStatsSummary: boolean;
}

export interface WeeklyDigestConfig {
  enabled: boolean;
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  subject: string;
}

/* -----------------------------------------------------
 * Infra
 * --------------------------------------------------- */

export interface MCPServerConfig {
  enabled: boolean;
  endpoint: string;
  publicRateLimit: number;
  authenticatedRateLimit: number;
  requireAuth: boolean;
}

export interface DashboardConfig {
  enabled: boolean;
  requireAuth: boolean;
}

export interface StatsPageConfig {
  enabled: boolean;
  showInNav: boolean;
  requireAuth: boolean;
}

// Media library configuration
// Controls image upload and CDN storage via ConvexFS and Bunny.net
export interface MediaConfig {
  enabled: boolean; // Global toggle for media library feature
  maxFileSize: number; // Max file size in MB (default: 10)
  allowedTypes: string[]; // Allowed MIME types
}

export interface ImageLightboxConfig {
  enabled: boolean;
}

/* -----------------------------------------------------
 * Pagination (KEPT FROM CODE 2)
 * --------------------------------------------------- */

export interface PaginationConfig {
  enabled: boolean;
  postsPerPage: number;
  mode: "load-more" | "numbered";
}

/* -----------------------------------------------------
 * Social
 * --------------------------------------------------- */

export interface SocialLink {
  platform:
  | "github"
  | "twitter"
  | "linkedin"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "discord"
  | "website";
  url: string;
}

export interface SocialFooterConfig {
  enabled: boolean;
  showOnHomepage: boolean;
  showOnPosts: boolean;
  showOnPages: boolean;
  showOnBlogPage: boolean;
  showInHeader: boolean;
  socialLinks: SocialLink[];
  copyright: {
    siteName: string;
    showYear: boolean;
  };
}

/* -----------------------------------------------------
 * MAIN SITE CONFIG
 * --------------------------------------------------- */

export interface SiteConfig {
  name: string;
  title: string;
  logo: string | null;
  intro: ReactNode;
  bio: string;

  fontFamily: FontFamily;
  defaultTheme?: Theme;

  featuredViewMode: "cards" | "list";
  featuredTitle: string;
  showViewToggle: boolean;

  logoGallery: LogoGalleryConfig;
  gitHubContributions: GitHubContributionsConfig;
  visitorMap: VisitorMapConfig;
  innerPageLogo: InnerPageLogoConfig;

  blogPage: BlogPageConfig;
  hardcodedNavItems: HardcodedNavItem[];
  postsDisplay: PostsDisplayConfig;

  links: {
    docs?: string;
    convex: string;
    netlify: string;
  };

  gitHubRepo: GitHubRepoConfig;
  rightSidebar: RightSidebarConfig;
  footer: FooterConfig;
  homepage: HomepageConfig;

  aiChat: AIChatConfig;
  aiDashboard?: AIDashboardConfig;
  semanticSearch?: SemanticSearchConfig;
  askAI?: AskAIConfig;
  // Related posts configuration (optional)
  relatedPosts?: RelatedPostsConfig;

  docsSection?: DocsSectionConfig;

  newsletter?: NewsletterConfig;
  contactForm?: ContactFormConfig;
  socialFooter?: SocialFooterConfig;
  newsletterAdmin?: NewsletterAdminConfig;
  newsletterNotifications?: NewsletterNotificationsConfig;
  weeklyDigest?: WeeklyDigestConfig;

  mcpServer?: MCPServerConfig;
  dashboard?: DashboardConfig;
  media?: MediaConfig;
  imageLightbox?: ImageLightboxConfig;
  statsPage?: StatsPageConfig;

  pagination?: PaginationConfig;

  // Email domains allowed to access protected routes (e.g., ["tinycheque.com"])
  // Empty array means no restriction
  allowedEmailDomains?: string[];
}

/* -----------------------------------------------------
 * FINAL CONFIG
 * --------------------------------------------------- */

export const siteConfig: SiteConfig = {
  name: "Hirenest AI",
  title: "Hirenest AI – Markdown Platform",
  logo: "/images/logo.svg",
  intro: null,
  bio: "AI-first markdown publishing platform for SEO and LLM discovery",

  fontFamily: "jakarta",
  defaultTheme: "tan",

  featuredViewMode: "list",
  featuredTitle: "Get started:",
  showViewToggle: true,

  logoGallery: {
    enabled: true,
    images: [

      {
        src: "/images/logos/netlify.svg",
        href: "https://www.netlify.com/utm_source=markdownfast",
      },
      {
        src: "/images/logos/firecrawl.svg",
        href: "https://hirenest.ai/how-to-use-firecrawl",
      },

      {
        src: "/images/logos/react.svg",
        href: "https://hirenest.ai/setup-guide",
      },

      {
        src: "/images/logos/mcp.svg",
        href: "https://hirenest.ai/how-to-use-mcp-server/",
      },
      {
        src: "/images/logos/workos.svg",
        href: "https://hirenest.ai/how-to-setup-workos",
      },
    ],
    position: "above-footer",
    speed: 20,
    title: "Built with",
    scrolling: false,
    maxItems: 4,
  },

  gitHubContributions: {
    enabled: true,
    username: "waynesutton",
    showYearNavigation: true,
    linkToProfile: true,
    title: "GitHub Activity",
  },

  visitorMap: {
    enabled: true,
    title: "Live Visitors",
  },

  innerPageLogo: {
    enabled: true,
    size: 28,
  },

  blogPage: {
    enabled: true,
    showInNav: true,
    title: "Hirenest Blog – Latest Articles & Guides",
    order: 2,
    viewMode: "cards",
    showViewToggle: true,
  },

  hardcodedNavItems: [
    { slug: "write", title: "Write", order: 20, showInNav: true },
    { slug: "stats", title: "Stats", order: 30, showInNav: false },
  ],

  dashboard: {
    enabled: true,
    requireAuth: false, // Set to true to require WorkOS authentication
  },

  postsDisplay: {
    showOnHome: true,
    showOnBlogPage: true,
    homePostsLimit: 5,
    homePostsReadMore: {
      enabled: true,
      text: "Read more blog posts",
      link: "/blog",
    },
  },

  links: {
    docs: "/docs",
    convex: "https://convex.dev",
    netlify: "https://netlify.com",
  },

  gitHubRepo: {
    owner: "waynesutton",
    repo: "markdown-site",
    branch: "main",
    contentPath: "public/raw",
  },

  rightSidebar: {
    enabled: true,
    minWidth: 1135,
  },

  footer: {
    enabled: true,
    showOnHomepage: true,
    showOnPosts: true,
    showOnPages: true,
    showOnBlogPage: true,
  },

  homepage: {
    type: "default",
    originalHomeRoute: "/home",
  },

  aiChat: {
    enabledOnWritePage: true,
    enabledOnContent: true,
  },

  semanticSearch: { enabled: true },

  askAI: {
    enabled: true,
    defaultModel: "claude-sonnet-4-20250514",
    models: [
      { id: "claude-sonnet-4-20250514", name: "Claude Sonnet 4", provider: "anthropic" },
      { id: "gpt-4o", name: "GPT-4o", provider: "openai" },
    ],
  },
  // Media library configuration
  // Upload and manage images via ConvexFS and Bunny.net CDN
  // Requires BUNNY_API_KEY, BUNNY_STORAGE_ZONE, BUNNY_CDN_HOSTNAME in Convex dashboard
  media: {
    enabled: true,
    maxFileSize: 10, // Max file size in MB
    allowedTypes: ["image/png", "image/jpeg", "image/gif", "image/webp"],
  },

  docsSection: {
    enabled: true,
    slug: "docs",
    title: "Docs",
    showInNav: true,
    order: 1,
    defaultExpanded: true,
  },

  imageLightbox: { enabled: true },


  // AI Dashboard configuration
  // Multi-model AI chat and image generation in the Dashboard
  // Requires API keys in Convex environment variables:
  // - ANTHROPIC_API_KEY for Claude models
  // - OPENAI_API_KEY for OpenAI models
  // - GOOGLE_AI_API_KEY for Gemini models (chat and image generation)
  aiDashboard: {
    enableImageGeneration: true, // Enable image generation tab
    defaultTextModel: "claude-sonnet-4-20250514", // Default model for text chat
    textModels: [
      {
        id: "claude-sonnet-4-20250514",
        name: "Claude Sonnet 4",
        provider: "anthropic",
      },
      {
        id: "gpt-4o",
        name: "GPT-4o",
        provider: "openai",
      },
      {
        id: "gemini-2.0-flash",
        name: "Gemini 2.0 Flash",
        provider: "google",
      },
    ],
    imageModels: [
      {
        id: "gemini-2.0-flash-exp-image-generation",
        name: "Nano Banana",
        provider: "google",
      },
      {
        id: "imagen-3.0-generate-002",
        name: "Nano Banana Pro",
        provider: "google",
      },
    ],
  },
  statsPage: {
    enabled: true,
    showInNav: false,
    requireAuth: false,
  },

  pagination: {
    enabled: true,
    postsPerPage: 20,
    mode: "numbered",
  },

  // Restrict access to only Tinycheque marketing team
  allowedEmailDomains: ["tinycheque.com"],

  // Related posts configuration
  // Controls the display of related posts at the bottom of blog posts
  relatedPosts: {
    defaultViewMode: "thumbnails", // Default view: "list" or "thumbnails"
    showViewToggle: true, // Show toggle button to switch between views
  },
};

export default siteConfig;
