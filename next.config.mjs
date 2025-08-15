/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/logos/:path*',
        destination: '/api/logos/:path*'
      }
    ];
  }
};
export default nextConfig;