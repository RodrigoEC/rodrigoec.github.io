import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  compiler: {
    styledComponents: true,
  },
  // devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "servicosweb.cnpq.br",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  }
};

export default nextConfig;
