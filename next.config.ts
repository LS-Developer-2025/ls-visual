// next.config.ts

import type { NextConfig } from 'next';

// --- Configuração para GitHub Pages ---
const isProd = process.env.NODE_ENV === 'production';
// Substitua 'site-ls' pelo nome exato do seu repositório no GitHub
const repoName = 'site-ls'; 

const nextConfig: NextConfig = {
  // Habilita a exportação estática para o GitHub Pages
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Essencial para as imagens funcionarem no GitHub Pages
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: '100mb',
    },
  },
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
 
};


export default nextConfig;