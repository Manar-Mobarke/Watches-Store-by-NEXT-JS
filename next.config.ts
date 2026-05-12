import type { NextConfig } from "next";

const baseURL =
  process.env.NEXT_PUBLIC_URL ?? "https://simple-api-hazel.vercel.app";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(`${baseURL}/**`)],
  },
};

export default nextConfig;
