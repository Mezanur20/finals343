/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Add if TS errors
  },
  output: 'standalone', // Recommended for Vercel
};

export default nextConfig;