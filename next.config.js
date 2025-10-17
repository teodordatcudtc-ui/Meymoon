/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js configuration for Vercel
  images: {
    domains: ['localhost'],
    unoptimized: false
  },
  experimental: {
    optimizeCss: false
  }
}

module.exports = nextConfig
