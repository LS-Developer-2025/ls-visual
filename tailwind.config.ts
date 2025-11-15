import type { Config } from 'tailwindcss'

const config: Config = {
  // AQUI É O PONTO CRÍTICO:
  // Isso diz ao Tailwind para "ler" todos os arquivos dentro da pasta 'app'
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- ESSA LINHA É VITAL
  ],
  theme: {
    extend: {
      colors: {
        // Nossas cores personalizadas
        'ls-preto': '#000000',
        'ls-branco': '#FFFFFF',
        'ls-cobre': '#5A3A22', 
        'ls-laranja': '#FF6600',
      },
      fontFamily: {
        // Nossas fontes personalizadas
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
      },
      keyframes: {
        // Animação para mover um pouco para cima e para baixo, e para os lados
        float: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(5px, -5px) scale(1.1)' }, // Pequeno movimento para cima e direita, e um leve aumento de tamanho
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        // Animação para um movimento mais horizontal lento
        'slow-move-x': {
          '0%, 100%': { transform: 'translateX(-5%)' }, // Começa um pouco à esquerda
          '50%': { transform: 'translateX(5%)' },    // Move para a direita
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite', // 6 segundos, suave, infinito
        'slow-move-x': 'slow-move-x 20s ease-in-out infinite alternate', // Mais longo, alternando direção
      },
    },
  },
  plugins: [],
}
export default config