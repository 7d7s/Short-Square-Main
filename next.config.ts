import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' }
    ],
    // Deep tuning: Cache optimizations and authorizing dynamic qualities mapping 
    minimumCacheTTL: 31536000,
    qualities: [25, 50, 75, 88, 90, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true, // Recommended for better development practices

};

export default nextConfig;
