import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css' // Importa o CSS
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['600', '700', '800'],
  variable: '--font-poppins'
})
const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'L&S - Eventos e Brindes Personalizados',
  description: 'Soluções em sonorização, iluminação, projeção e brindes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      {/* A MUDANÇA ESTÁ AQUI:
        1. "aurora-background": Fundo global.
        2. "overflow-x-hidden": FORÇA o fim do scroll horizontal.
      */}
      <body 
        className={`${poppins.variable} ${inter.variable} font-inter bg-ls-preto text-ls-branco aurora-background overflow-x-hidden`}
      >
        
        <Header /> 
        {/* Este wrapper garante que nenhum conteúdo transborde horizontalmente */}
        <div className="overflow-x-hidden">
          {children}
        </div>
        
        <WhatsAppButton />
        <Footer /> 

      </body>
    </html>
  )
}