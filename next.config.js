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
      {
        source: "/view/:",
        destination: "/compose/:composerId/0",
        permanent: false,
      },
      {
        source: "/view/:recipientId",
        destination: "/view/:recipientId/0",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
