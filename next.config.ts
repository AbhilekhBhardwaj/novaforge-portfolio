import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the root so a stray lockfile higher up the tree isn't picked up.
  turbopack: { root: __dirname },
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
};

export default nextConfig;
