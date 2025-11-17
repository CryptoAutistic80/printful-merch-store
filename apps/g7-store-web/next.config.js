//@ts-check

const { composePlugins, withNx } = require('@nx/next');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'dagt5w7g74nai.cloudfront.net',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL:
      process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? 'http://localhost:3333/api',
    NEXT_PUBLIC_STORE_URL: process.env.NEXT_PUBLIC_STORE_URL ?? process.env.STORE_URL ?? 'https://store.groupseven.life',
  },
  nx: {},
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
