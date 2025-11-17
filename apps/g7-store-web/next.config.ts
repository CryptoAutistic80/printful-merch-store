import { composePlugins, withNx } from '@nx/next';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
  },
  nx: {},
};

const plugins = [withNx];

export default composePlugins(...plugins)(nextConfig);

