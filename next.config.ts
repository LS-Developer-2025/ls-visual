// next.config.ts

import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

// O nome do seu repositório. O workflow do GitHub Actions usará isso.
const repoName = 'site-ls';

const nextConfig: NextConfig = {
  // Adiciona o nome do repositório como prefixo para assets em produção
  assetPrefix: isProd ? `/${repoName}` : '',
  // Adiciona o nome do repositório como caminho base em produção
  basePath: isProd ? `/${repoName}` : '',

  // Habilita a exportação estática para o GitHub Pages
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // A otimização de imagens do Next.js não é compatível com `output: 'export'`.
    // A ação `actions/configure-pages@v5` no workflow do GitHub Actions
    // injeta `unoptimized: true` automaticamente durante o deploy.
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

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
 
};


export default nextConfig;