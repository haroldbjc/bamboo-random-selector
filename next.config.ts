import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/brs",
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
