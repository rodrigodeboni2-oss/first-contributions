import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "educatec-jvvgqsglz-myselfandi1.vercel.app",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
