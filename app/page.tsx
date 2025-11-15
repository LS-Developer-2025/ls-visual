'use client'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react' 
import Image from 'next/image' 
import SectionSeparator from '../components/SectionSeparator'
import SpotlightSeparator from '../components/SpotlightSeparator'

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  }
}

export default function HomePage() {
  
  const clientLogos = [
    '/images/clientes/1.avif', '/images/clientes/2.avif', '/images/clientes/3.avif', 
    '/images/clientes/4.avif', '/images/clientes/5.avif', '/images/clientes/6.avif', 
    '/images/clientes/7.avif',
  ];
  const portfolioImages = [
    '/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg',
    '/images/5.jpg', '/images/6.jpg', '/images/7.jpg', '/images/8.jpg',
    '/images/9.jpg', '/images/10.jpg', '/images/11.jpg', '/images/12.jpg',
  ];

  return (
    <main className="flex flex-col text-ls-branco overflow-x-hidden pb-16">

      {/* SEÇÃO 1: HERO (Camada z-0) */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-8 pt-20 relative overflow-hidden z-0">
        
        {/* ... (código dos efeitos de palco) ... */}
        <div className="spotlight left-1"></div>
        <div className="spotlight left-2"></div>
        <div className="spotlight center"></div>
        <div className="spotlight right-1"></div>
        <div className="spotlight right-2"></div>
        <div className="side-wave left"></div>
        <div className="side-wave right"></div>
        <div className="smoke-effect">
          <div className="smoke-element"></div>
          <div className="smoke-element"></div>
          <div className="smoke-element"></div>
          <div className="smoke-element"></div>
        </div>
        
        <div className="hero-content">
          <motion.h1 
            className="text-6xl md:text-9xl font-extrabold uppercase text-ls-branco"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            L&S
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-ls-branco font-semibold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Eventos & Brindes Personalizados
          </motion.p>
        </div>
        
        {/* ... (código da seta) ... */}
        <motion.div 
          className="absolute bottom-32 z-20"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ 
            delay: 1.5,
            duration: 1.2, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        >
          <ArrowDown size={32} className="text-ls-branco" />
        </motion.div>
      </section>

      {/* --- SEPARADOR DE FUMAÇA 1 (Camada z-20, na frente) --- */}
      {/* Este componente já possui 'relative z-20' e margem negativa para sobrepor */}
      <SectionSeparator />

     {/* SEÇÃO 2: "O QUE FAZEMOS" */}
      {/* Wrapper branco com z-index intermediário para o efeito sanduíche */}
      <div className="relative z-10 bg-gradient-to-b from-transparent from-0% via-white/80 via-50% to-transparent to-100% rounded-2xl -mt-8 md:-mt-28 overflow-hidden">
        <section className="py-48">
          <div className="container mx-auto px-4 sm:px-8 pt-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-ls-branco"
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            Soluções Completas para sua Marca e Evento
          </motion.h2>
          
          <div className="grid w-full max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Card de Eventos */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link href="/eventos" 
                className="
                  block relative rounded-xl shadow-2xl cursor-pointer 
                  bg-black/20 backdrop-blur-sm border border-white/10 
                  hover:border-ls-laranja hover:shadow-lg hover:shadow-ls-laranja/20 
                  transition-all duration-300"
              >
                <div className="w-full h-48 sm:h-64 overflow-hidden rounded-t-xl">
                  <Image 
                    src="/images/1.jpg" 
                    alt="Equipamentos para Eventos"
                    width={600} height={300} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-8"> 
                  <h3 className="text-4xl font-bold text-ls-laranja mb-4">Eventos</h3>
                  <p className="text-lg text-gray-300 mb-6"> 
                    Sonorização, Iluminação, Projeção e Painéis de LED.
                  </p>
                  <span className="text-ls-laranja font-bold text-lg">
                    Ver portfólio de eventos &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Card de Brindes */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Link href="/brindes" 
                className="
                  block relative rounded-xl shadow-2xl cursor-pointer 
                  bg-black/20 backdrop-blur-sm border border-white/10 
                  hover:border-ls-cobre hover:shadow-lg hover:shadow-ls-cobre/20 
                  transition-all duration-300"
              >
                <div className="w-full h-48 sm:h-64 overflow-hidden rounded-t-xl">
                  <Image 
                    src="/images/brindes/Camiseta Preta.png" 
                    alt="Brindes Personalizados"
                    width={600} height={300} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-4xl font-bold text-ls-cobre mb-4">Brindes</h3>
                  <p className="text-lg text-gray-300 mb-6"> 
                    Copos, canetas, camisetas e mais.
                  </p>
                  <span className="text-ls-cobre font-bold text-lg">
                    Ver catálogo de brindes &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>

          </div>
          </div>
        </section>
      </div>

      {/* --- SEPARADOR DE FUMAÇA 2 (Camada z-20) --- */}
      {/* Margem negativa aumentada para sobrepor mais a seção branca */}
      <div className="relative z-20 -mt-20 md:-mt-56"><SectionSeparator /></div>

      {/* SEÇÃO 3: NOSSOS CLIENTES (Camada z-0) */}
      <section className="pt-40 pb-24 relative z-0 overflow-hidden">
        <div className="container mx-auto px-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-ls-branco" 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            Clientes que Confiam em Nós
          </motion.h2>
        </div>
        {/* ... (código do carrossel de logos) ... */}
        <div className="relative carousel-container hide-scrollbar">
          <div className="logo-carousel-track">
            {[...clientLogos, ...clientLogos].map((src, index) => (
              <div key={index} className="logo-carousel-item">
                <Image 
                  src={src} 
                  alt={`Logo Cliente ${index + 1}`} 
                  width={150} height={75} 
                  className="w-auto h-12 object-contain grayscale opacity-60" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative z-0 overflow-hidden">
        {/* Fundo em degradê para camuflar a seção */}
        <div 
          className="absolute inset-0 z-[-1] bg-gradient-to-b from-transparent from-10% via-ls-laranja/20 via-50% to-transparent to-90%"
          aria-hidden="true"
        />
        <SpotlightSeparator />
        <div className="container mx-auto px-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-ls-branco [text-shadow:0px_0px_80px_theme(colors.ls-laranja/0.8)]"
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            Conheça Nosso Trabalho
          </motion.h2>
        </div>
          {/* ... (código do carrossel de portfólio) ... */}
          <div className="relative carousel-container hide-scrollbar">
            <div className="carousel-track">
              {[...portfolioImages, ...portfolioImages].map((src, index) => (
                <motion.div key={index} className="carousel-item">
                  <Image 
                    src={src} alt={`Portfólio ${index + 1}`} fill 
                    className="
                      object-cover object-center   
                      transition-transform duration-500 ease-in-out hover:scale-110
                    "
                  />
                </motion.div>
              ))}
            </div>
          </div>
        <motion.div 
          className="text-center mt-12 px-8"
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <Link 
            href="/portifolio" 
            className="
              inline-block bg-ls-laranja/20 backdrop-blur-md border border-ls-laranja/50 text-ls-branco 
              font-bold py-3 px-8 rounded-full text-lg
              hover:bg-ls-laranja/30 hover:border-ls-laranja transition-all duration-300">
            Ver Portfólio Completo
          </Link>
        </motion.div>
      </section>
      
    </main>
  )
}