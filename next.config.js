/** @type {import('next').NextConfig} */
module.exports = {
  pageExtensions: ['ts', 'tsx', 'mdx', 'test.tsx'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'placekitten.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.jp',
      },
    ],
  },
};
