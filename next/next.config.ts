import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ['http://localhost:1337'], // Здесь мы добавляем localhost в разрешенные хосты
  },
};

export default nextConfig;
