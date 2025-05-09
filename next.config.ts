import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimized configuration for Vercel deployment
  poweredByHeader: false,
  reactStrictMode: true,
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
  // Updated configuration for Next.js 15
  serverExternalPackages: [],
};

export default nextConfig;
