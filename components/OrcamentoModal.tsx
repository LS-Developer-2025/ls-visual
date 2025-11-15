'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

// Este componente recebe "isOpen" e "onClose" do Header
interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function OrcamentoModal({ isOpen, onClose }: Props) {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // TODO: Mude o número para o seu WhatsApp
    const seuNumero = '5551993269114'
    const textoFormatado = `Olá! Meu nome é *${nome}*.\n\n${mensagem}`
    const url = `https://wa.me/${seuNumero}?text=${encodeURIComponent(textoFormatado)}`

    window.open(url, '_blank')
    onClose() // Fecha o modal após enviar
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Overlay (fundo escuro) */}
          <div 
            className="absolute inset-0 bg-ls-preto/50 backdrop-blur-sm"
            onClick={onClose} // Fecha ao clicar fora
          ></div>

          {/* O Modal "Liquid Glass" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="
              relative z-10 w-full max-w-lg rounded-2xl
              bg-white/10 backdrop-blur-lg 
              border border-white/20 shadow-2xl
              p-8"
          >
            {/* Botão de Fechar */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-poppins font-bold text-ls-branco mb-6">
              Solicitar Orçamento
            </h2>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300">
                  Seu nome
                </label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="
                    mt-1 block w-full rounded-lg border-white/20
                    bg-white/10 text-ls-branco
                    p-3 focus:ring-ls-laranja focus:border-ls-laranja"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="
                    mt-1 block w-full rounded-lg border-white/20
                    bg-white/10 text-ls-branco
                    p-3 focus:ring-ls-laranja focus:border-ls-laranja"
                  placeholder="Descreva o que você precisa..."
                  required
                />
              </div>

              <button 
                type="submit"
                className="
                  flex items-center justify-center gap-3
                  w-full bg-ls-laranja/20 backdrop-blur-md border border-ls-laranja/50 text-ls-branco 
                  font-bold py-3 px-6 rounded-full text-lg mt-4
                  hover:bg-ls-laranja/30 hover:border-ls-laranja 
                  transition-all"
              >
                <FaWhatsapp size={20} />
                Enviar pelo WhatsApp
              </button>
            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}