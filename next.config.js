/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hulu-clone-2-0.vercel.app", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
