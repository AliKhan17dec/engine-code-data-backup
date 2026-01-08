import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "cmsenginesmarket.enginefinders.co.uk",
      "cmsenginecode.enginefinders.co.uk",
    ],
  },
};

export default nextConfig;
