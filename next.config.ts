import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/bamboo",
  output: "export",
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
