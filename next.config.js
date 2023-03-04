/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
      {
        source: "/home",
        destination: "/home/pet",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
