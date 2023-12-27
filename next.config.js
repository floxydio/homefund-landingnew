/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APIURL: 'https://cd52-2400-9800-370-d9e3-289c-3e08-a5-14fe.ngrok-free.app',
  },
  images: {
    domains: [
      'localhost',
      '127.0.0.1',
      'https://cd52-2400-9800-370-d9e3-289c-3e08-a5-14fe.ngrok-free.app',
    ],
    minimumCacheTTL: 60,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
