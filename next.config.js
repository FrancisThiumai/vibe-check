/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Required for static site generation
  images: {
    unoptimized: true // Required for static export
  }
}

module.exports = nextConfig 