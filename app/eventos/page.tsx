'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import OrcamentoModal from '../../components/OrcamentoModal'
import { useState } from 'react'

// --- DEFINIÇÃO DE TIPOS ---
type EquipmentDetail = {
  text: string;
};

type Equipment = {
  id: string;
  title: string;
  image: string;
  color: string;
  details: EquipmentDetail[];
};

// --- DADOS DOS EQUIPAMENTOS ---
const equipamentos: Equipment[] = [
  {
    id: 'estrutura',
    title: 'Estrutura Q30',
    image: '/images/20.jpg', // Substitua pela imagem de fundo
    color: 'text-ls-laranja',
    details: [
      {
        text: 'Montamos estruturas box truss Q30 para qualquer tipo de evento. Crie grids de iluminação, pórticos de entrada, stands e cenários com segurança e versatilidade.',
      },
    ],
  },
  {
    id: 'sonorizacao',
    title: 'Sonorização',
    image: '/images/24.jpg', // Substitua pela imagem de fundo
    color: 'text-ls-cobre',
    details: [
      {
        text: 'Sistemas de som profissionais para palestras, shows e festas. Caixas de som, microfones, mesas de som e DJs para garantir a melhor qualidade de áudio.',
      },
    ],
  },
  {
    id: 'iluminacao',
    title: 'Iluminação',
    image: '/images/26.jpg', // Substitua pela imagem de fundo
    color: 'text-ls-laranja',
    details: [
      {
        text: 'Iluminação cênica e decorativa que transforma o ambiente. Moving heads, refletores, lasers e máquinas de fumaça para criar a atmosfera perfeita.',
      },
    ],
  },
  {
    id: 'projecao',
    title: 'Projeção',
    image: '/images/Painel.jpg', // Substitua pela imagem de fundo
    color: 'text-ls-cobre',
    details: [
      {
        text: 'Oferecemos soluções de projeção com painéis de LED de alta definição e projetores de alta qualidade. Ideal para shows, conferências, apresentações e transmissões, garantindo impacto visual para o seu evento.',
      },
    ],
  },
];

export default function EventosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="flex flex-col text-ls-branco min-h-screen">
        {/* Hero Section */}
        <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
          {/* Gradiente no final da seção para transição suave */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ls-preto to-transparent z-10" />

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold text-ls-branco"
          >
            Eventos Inesquecíveis
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Oferecemos a estrutura completa de som, luz e imagem para transformar seu evento em um espetáculo.
          </motion.p>
        </header>

        {/* Seções de Equipamentos */}
        {equipamentos.map((equip, index) => (
          <section 
            key={equip.id} 
            className={`relative h-[80vh] md:h-screen flex items-center overflow-hidden ${
              index % 2 === 1 ? 'justify-end' : 'justify-start' // Alterna a posição do card
            }`}
          >
            {/* Imagem de Fundo com Overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={equip.image} 
                alt={`Fundo para ${equip.title}`} 
                fill 
                className="object-cover"
                quality={80}
              />
              {/* Overlay escuro + Gradiente para transição suave */}
              <div className="absolute inset-0 bg-gradient-to-t from-ls-preto to-transparent" />
              {/* Gradiente no topo para suavizar a entrada */}
              <div className="absolute inset-0 bg-gradient-to-b from-ls-preto to-transparent" />
            </div>
            
            {/* Card de Conteúdo */}
            <div className="relative z-10 container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.4 }}
                className="max-w-md bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-2xl"
              >
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${equip.color}`}>{equip.title}</h2>
                {equip.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="mb-4 last:mb-0">
                    <p className="text-lg text-gray-300">{detail.text}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}

        {/* Seção Final de CTA */}
        <section className="relative py-32 text-center flex flex-col items-center overflow-hidden">
          {/* Gradiente no início da seção para transição suave */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-ls-preto to-transparent z-10" />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Vamos Produzir seu Evento?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 mb-8 max-w-lg"
          >
            Nossa equipe está pronta para entender sua necessidade e montar o projeto ideal.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="
                bg-ls-laranja/20 backdrop-blur-md border border-ls-laranja/50 text-ls-branco 
                font-bold py-4 px-10 rounded-full text-xl
                hover:bg-ls-laranja/30 hover:border-ls-laranja transition-all"
            >
              Fale Conosco
            </button>
            <Link 
              href="/portifolio#eventos"
              className="
                bg-white/10 backdrop-blur-md border border-white/20 text-ls-branco 
                font-bold py-4 px-10 rounded-full text-xl
                hover:bg-white/20 hover:border-white/30 transition-all"
            >
              Ver Portfólio
            </Link>
          </motion.div>
        </section>
      </main>

      <OrcamentoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}