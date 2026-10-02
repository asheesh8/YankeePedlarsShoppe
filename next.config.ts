import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** Next 16 requires an explicit allowlist. */
    qualities: [75],
  },
};

export default nextConfig;
