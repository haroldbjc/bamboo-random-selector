import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/brs",
  output: "export",
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
