/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [{ source: "/branch", destination: "/menu", permanent: true }];
  },
};

module.exports = nextConfig;
