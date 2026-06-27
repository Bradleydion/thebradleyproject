import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint runs locally via your editor — skip it during Vercel builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type errors won't block production deploys
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
