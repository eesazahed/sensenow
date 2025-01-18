/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gist.github.com",
        pathname: "/user-attachments/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
