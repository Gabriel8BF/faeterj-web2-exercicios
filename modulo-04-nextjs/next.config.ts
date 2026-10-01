import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite a conexão do navegador interno do VS Code
  allowedDevOrigins: ['192.168.1.175'],
};

export default nextConfig;