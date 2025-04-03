/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable server components
  reactStrictMode: true,
  // Increase memory limit for build on Vercel
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
    // Additional experimental features if needed
  },
  // Configure image domains if using Next Image
  images: {
    domains: ['placeholder.com'],
  },
  // For handling rewrites if needed
  async rewrites() {
    return [
      // Example rewrite
      // {
      //   source: '/api/:path*',
      //   destination: 'http://localhost:5001/api/:path*', // For development with separate API server
      // },
    ];
  },
};

module.exports = nextConfig;