'use client' 

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import OrcamentoModal from './OrcamentoModal'

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/brindes', label: 'Brindes' },
    { href: '/portifolio', label: 'Portfólio' },
  ]

  // Mapeia a rota para o título a ser exibido
  const pageTitles: { [key: string]: string } = {
    '/eventos': 'Eventos',
    '/brindes': 'Brindes',
    '/portifolio': 'Portfólio',
    '/portfolio': 'Portfólio',
  }
  const currentPageTitle = pageTitles[pathname]

  const linkClassName = `
    relative text-gray-300 hover:text-ls-branco transition-colors
    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
    after:h-[2px] after:w-0 after:bg-ls-laranja 
    after:transition-all after:duration-300 hover:after:w-full
  `

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-50">
        <nav 
          className="
            container mx-auto px-6 py-4 flex justify-between items-center 
            bg-white/10 backdrop-blur-lg rounded-full 
            border border-white/20 shadow-lg"
        >
          <Link href="/" className="flex items-center gap-3 text-3xl font-poppins font-extrabold text-ls-branco">
            <span>L&S</span>
            {currentPageTitle && (
              <>
                <span className="text-ls-laranja/50">|</span>
                <span className="text-xl font-semibold">{currentPageTitle}</span>
              </>
            )}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="
                bg-ls-laranja/20 backdrop-blur-md border border-ls-laranja/50 text-ls-branco 
                font-bold py-2 px-6 rounded-full
                hover:bg-ls-laranja/30 hover:border-ls-laranja transition-all"
            >
              Orçamento
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Abrir menu">
              <Menu className="text-ls-branco" />
            </button>
          </div>
        </nav>
      </header>

      {/* --- MUDANÇA AQUI --- */}
      {/* Painel do Menu Mobile "Liquid Glass" */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="
              fixed top-4 right-4 bottom-4 w-2/3 
              bg-white/10 backdrop-blur-lg 
              rounded-2xl border border-white/20 shadow-2xl
              z-50 p-8 md:hidden"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Fechar menu">
                <X className="text-ls-branco" size={30} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-ls-branco text-2xl font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsModalOpen(true)
                }}
                className="
                  bg-ls-laranja/20 backdrop-blur-md border border-ls-laranja/50 text-ls-branco 
                  font-bold py-3 px-6 rounded-full text-lg mt-4 text-center
                  hover:bg-ls-laranja/30 hover:border-ls-laranja 
                  transition-all"
              >
                Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <OrcamentoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}