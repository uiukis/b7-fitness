import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["ubmztlgnyghmgmmsbdtd.supabase.co"],
    unoptimized: true,
  },
};

export default nextConfig;
