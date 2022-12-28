/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    HOST: process.env.HOST,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      }]
  },
};