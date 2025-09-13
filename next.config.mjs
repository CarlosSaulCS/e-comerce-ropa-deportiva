/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use custom build directory only in development to avoid OneDrive conflicts
  // Vercel expects the default .next directory in production
  distDir: process.env.NODE_ENV === 'development' ? 'build' : '.next',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  typedRoutes: true,
};

export default nextConfig;
