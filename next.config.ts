import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'qfvtsvpixgeumqfziigp.supabase.co',
      },
    ],
  },
};

export default nextConfig;
