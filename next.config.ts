// next.config.ts

import type { NextConfig } from 'next';

// O nome do seu repositório. O workflow do GitHub Actions usará isso.
const repoName = 'site-ls';

const nextConfig: NextConfig = {
  // Habilita a exportação estática para o GitHub Pages
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // A opção 'unoptimized: true' é injetada automaticamente pelo workflow do GitHub Actions.
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

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
 
};


export default nextConfig;