//@ts-check

const { composePlugins, withNx } = require('@nx/next');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL:
      process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? 'http://localhost:3333/api',
  },
  nx: {},
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
