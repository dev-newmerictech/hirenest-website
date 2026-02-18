import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Compiler optimizations (SWC-based, faster than webpack)
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    // Faster React compilation
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bit.ly',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Turbopack configuration (stable in Next.js 15)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Build optimizations
  // Exclude unused locales for faster i18n builds
  i18n: undefined,
  async rewrites() {
    return [
      // PostHog Reverse Proxy
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      // Meta/Facebook Pixel Reverse Proxy
      {
        source: '/meta/fbevents.js',
        destination: 'https://connect.facebook.net/en_US/fbevents.js',
      },
      // SEO URL rewrites to internal API handlers
      // /raw/:slug is now handled by app/raw/[slug]/page.tsx (proper HTML with SEO meta tags)
      { source: '/llms.txt', destination: '/api/llms' },
      { source: '/sitemap-posts.xml', destination: '/api/sitemap-posts' },
      { source: '/sitemap-post.xml', destination: '/api/sitemap-posts' },
      { source: '/sitemap-posts-:page(\\d+).xml', destination: '/api/sitemap-posts-page?page=:page' },
    ];
  },
  async redirects() {
    return [
      {
        source: '/en-US',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en-US/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
