import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export -> gera a pasta ./out, pronta pra Netlify/Vercel/qualquer host estático
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // O build não quebra por causa de lint; rode `npm run lint` à parte quando quiser.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
