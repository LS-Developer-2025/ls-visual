'use client'

import { FaWhatsapp } from 'react-icons/fa' // Ícone do WhatsApp
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WhatsAppButton() {
  const seuNumero = "5551993269114" // <-- MUDE AQUI para seu número
  const suaMensagem = "Olá! Vim pelo site e gostaria de um orçamento."

  const url = `https://wa.me/${seuNumero}?text=${encodeURIComponent(suaMensagem)}`

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="
          fixed bottom-6 right-6 z-40 
          w-16 h-16 rounded-full 
          flex items-center justify-center
          
          /* --- MUDANÇA AQUI --- */
          bg-ls-laranja/20 backdrop-blur-md 
          border border-white/20 shadow-lg shadow-ls-laranja/30"
        
        // Animação de "pulso"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* O ícone do WhatsApp é verde por padrão, mas podemos forçá-lo a ser branco */}
        <FaWhatsapp size={32} className="text-white" />
      </motion.div>
    </Link>
  )
}