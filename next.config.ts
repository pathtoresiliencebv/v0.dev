import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimized configuration for Vercel deployment
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Use Page Router settings when needed for API routes
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
