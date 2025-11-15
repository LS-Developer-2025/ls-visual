'use client'

import { motion, AnimatePresence } from 'framer-motion'
import CustomImage from '@/components/CustomImage'
import { basePath } from '@/next.config'

// --- DADOS DAS IMAGENS DE EVENTOS ---
const eventosImages = [
  { id: 'evt-1', type: 'image', src: '/images/1.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 1' },
  { id: 'evt-2', type: 'image', src: '/images/2.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 2' },
  { id: 'evt-3', type: 'image', src: '/images/3.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 3' },
  { id: 'evt-4', type: 'image', src: '/images/4.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 4' },
  { id: 'evt-5', type: 'image', src: '/images/5.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 5' },
  { id: 'evt-7', type: 'image', src: '/images/7.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 7' },
  { id: 'evt-8', type: 'image', src: '/images/8.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 8' },
  { id: 'evt-9', type: 'image', src: '/images/9.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 9' },
  { id: 'evt-10', type: 'image', src: '/images/10.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 10' },
  { id: 'evt-11', type: 'image', src: '/images/11.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 11' },
  { id: 'evt-12', type: 'image', src: '/images/12.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 12' },
  { id: 'evt-13', type: 'image', src: '/images/13.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 13' },
  { id: 'evt-14', type: 'image', src: '/images/14.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 14' },
  { id: 'evt-15', type: 'image', src: '/images/15.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 15' },
  { id: 'evt-16', type: 'image', src: '/images/16.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 16' },
  { id: 'evt-17', type: 'image', src: '/images/17.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 17' },
  { id: 'evt-18', type: 'image', src: '/images/18.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 18' },
  { id: 'evt-19', type: 'image', src: '/images/19.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 19' },
  { id: 'evt-20', type: 'image', src: '/images/20.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 20' },
  { id: 'evt-21', type: 'image', src: '/images/21.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 21' },
  { id: 'evt-22', type: 'image', src: '/images/22.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 22' },
  { id: 'evt-23', type: 'image', src: '/images/23.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 23' },
  { id: 'evt-24', type: 'image', src: '/images/24.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 24' },
  { id: 'vid-8', type: 'video', src: '/images/25.mp4', category: 'eventos', alt: 'Sonorização e Iluminação 25' },
  { id: 'evt-25', type: 'image', src: '/images/26.jpg', category: 'eventos', alt: 'Sonorização e Iluminação 26' },
];

// --- DADOS DAS IMAGENS DE BRINDES ---
const brindesImages = [
  { id: 'brd-1', type: 'image', src: '/images/brindes/Camiseta Preta.png', category: 'brindes', alt: 'Camiseta Personalizada 1' },
  { id: 'brd-2', type: 'image', src: '/images/brindes/Camiseta Branca.png', category: 'brindes', alt: 'Camiseta Personalizada 2' },
  { id: 'brd-3', type: 'image', src: '/images/brindes/Camiseta Beje.png', category: 'brindes', alt: 'Camiseta Personalizada 3' },
  { id: 'brd-4', type: 'image', src: '/images/brindes/8.png', category: 'brindes', alt: 'Copos Personalizados 4' },
  { id: 'vid-2', type: 'video', src: '/images/brindes/1.mp4', category: 'brindes', alt: 'Camiseta Personalizada 5' },
  { id: 'vid-3', type: 'video', src: '/images/brindes/2.mp4', category: 'brindes', alt: 'Camiseta Personalizada 6' },
  { id: 'vid-4', type: 'video', src: '/images/brindes/3.mp4', category: 'brindes', alt: 'Camiseta Personalizada 7' },
  { id: 'vid-5', type: 'video', src: '/images/brindes/4.mp4', category: 'brindes', alt: 'Camiseta Personalizada 8' },
  { id: 'vid-6', type: 'video', src: '/images/brindes/6.mp4', category: 'brindes', alt: 'Camiseta Personalizada 9' },
  { id: 'vid-7', type: 'video', src: '/images/brindes/7.mp4', category: 'brindes', alt: 'Camiseta Personalizada 10' },
  { id: 'vid-9', type: 'video', src: '/images/brindes/5.mp4', category: 'brindes', alt: 'Camiseta Personalizada 11' },
  { id: 'vid-10', type: 'video', src: '/images/brindes/8.mp4', category: 'brindes', alt: 'Camiseta Personalizada 12' },
];

// Componente reutilizável para a grade de imagens
const ImageGrid = ({ items }: { items: typeof eventosImages }) => (
  <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <AnimatePresence>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="group relative aspect-square rounded-xl overflow-hidden shadow-lg"
        >
          {item.type === 'video' ? (
            <video
              src={basePath ? `${basePath}${item.src}` : item.src}
              autoPlay loop muted playsInline
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <CustomImage
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          )}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white font-semibold text-sm">{item.alt}</p>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
);

export default function PortfolioPage() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="flex flex-col text-ls-branco min-h-screen">
      <div className="container mx-auto px-4 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-8"
        >
          Nosso Portfólio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          Explore alguns dos nossos trabalhos em eventos e os brindes personalizados que criamos.
        </motion.p>

        {/* Botões de Navegação */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center gap-4 mb-16"
        >
          <button onClick={() => handleScroll('eventos')} className="bg-white/10 backdrop-blur-md border border-white/20 text-ls-branco font-bold py-2 px-6 rounded-full text-base transition-all duration-300 hover:bg-white/20 hover:border-white/30">
            Eventos
          </button>
          <button onClick={() => handleScroll('brindes')} className="bg-white/10 backdrop-blur-md border border-white/20 text-ls-branco font-bold py-2 px-6 rounded-full text-base transition-all duration-300 hover:bg-white/20 hover:border-white/30">
            Brindes
          </button>
        </motion.div>

        {/* Seção de Eventos */}
        <section id="eventos" className="py-16">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-bold text-ls-laranja whitespace-nowrap">Eventos</h2>
            <div className="w-full h-px bg-white/20"></div>
          </div>
          <ImageGrid items={eventosImages} />
        </section>

        {/* Seção de Brindes */}
        <section id="brindes" className="py-16">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-bold text-ls-laranja whitespace-nowrap">Brindes Personalizados</h2>
            <div className="w-full h-px bg-white/20"></div>
          </div>
          <ImageGrid items={brindesImages} />
        </section>
      </div>
    </main>
  );
}