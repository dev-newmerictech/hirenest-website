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
