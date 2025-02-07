import { fetchRedirects } from '@/sanity/lib/fetchRedirects';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    const redirects = await fetchRedirects();
    return redirects.map((redirect) => ({
      source: redirect.source || '',
      destination: redirect.destination || '',
      permanent: redirect.permanent || false,
    }));
  },
};

export default nextConfig;
