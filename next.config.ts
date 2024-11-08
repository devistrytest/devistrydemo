import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["devistrydemo.devistrytest.com"],
    },
  },
};

export default nextConfig;
