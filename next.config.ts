import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/bamboo",
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
