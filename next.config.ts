import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // Optimize bundle
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'react-icons'],
  },
  
  // Webpack optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            chakra: {
              name: 'chakra-ui',
              test: /[\\/]node_modules[\\/](@chakra-ui|@emotion)[\\/]/,
              priority: 40,
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
