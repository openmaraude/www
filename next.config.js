/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'standalone',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/partners',
        destination: '/partners/driver/profile',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
