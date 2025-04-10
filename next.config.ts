import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'img.freepik.com', 'framerusercontent.com'],
  },
  reactStrictMode: true, // Recommended for better development practices

};

export default nextConfig;
