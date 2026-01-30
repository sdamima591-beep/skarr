import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com',
      }
    ],
    unoptimized: true, // لحل مشاكل الصور على Vercel
  },
  reactStrictMode: true,
};

export default nextConfig;
