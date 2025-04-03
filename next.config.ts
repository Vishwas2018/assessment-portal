/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
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
  // Address hydration issues with a custom compiler
  compiler: {
    // Suppress specific hydration warnings if needed
    styledComponents: true,
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