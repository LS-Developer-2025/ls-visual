import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const whatsappNumber = "5551993269114"
  const whatsappMessage = "Olá! Vim pelo site e gostaria de mais informações."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    // REMOVIDO: "fixed bottom-4 left-4 right-4 z-40"
    // ADICIONADO: "mt-16" (margem para separar do último carrossel)
    <footer className="mt-10">
      <div 
        className="
          container mx-auto px-6 py-4 
          bg-white/10 backdrop-blur-lg rounded-2xl
          border border-white/20 shadow-lg"
      >
        <div 
          className="
            grid grid-cols-1 md:grid-cols-3
            items-center 
            gap-6"
        >
          {/* ESQUERDA: Logo e Tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-poppins font-extrabold text-ls-branco">
              L&S
            </Link>
            <p className="text-xs text-gray-300 mt-1">
              Transformando sonhos em realidade ! &lt;3
            </p>
          </div>

          {/* CENTRO: Navegação e Copyright */}
          <div className="flex flex-col items-center gap-3">
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <Link href="/eventos" className="text-sm text-gray-300 hover:text-ls-laranja">Eventos</Link>
              <Link href="/brindes" className="text-sm text-gray-300 hover:text-ls-cobre">Brindes</Link>
              <Link href="/portifolio" className="text-sm hover:text-white">Portfólio</Link>
              <Link href="/contato" className="text-sm hover:text-white">Orçamento</Link>
            </nav>
            <p className="text-center text-gray-400 text-xs">
              © {new Date().getFullYear()} L&S Equipamentos. Todos os direitos reservados.
            </p>
          </div>

          {/* DIREITA: Redes Sociais */}
          <div className="flex justify-center md:justify-end gap-4">
            <Link href="https://www.instagram.com/les.visuald/" aria-label="Instagram" className="text-gray-300 hover:text-white">
              <Instagram size={18} />
            </Link>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Whatsapp" className="text-gray-300 hover:text-white">
              <FaWhatsapp size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}