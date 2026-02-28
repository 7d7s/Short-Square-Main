import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' }
    ],
  },
  reactStrictMode: true, // Recommended for better development practices

};

export default nextConfig;
