/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    HOST: process.env.HOST,
  },
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      }]
  },
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
  },
};