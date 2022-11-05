const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  experimental: {
    runtime: 'experimental-edge',
  },
};

module.exports = nextConfig;
