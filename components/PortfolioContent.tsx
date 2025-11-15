'use client'

import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Supondo que você tenha uma lista de imagens e uma lógica de filtro
const allPortfolioImages = [
  // ... sua lista completa de imagens com seus tipos (brindes, eventos, etc)
  { src: '/images/1.jpg', type: 'eventos' },
  { src: '/images/brindes/Camiseta Preta.png', type: 'brindes' },
  // ... etc
];

export default function PortfolioContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');

  const filteredImages = filter
    ? allPortfolioImages.filter(img => img.type === filter)
    : allPortfolioImages;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredImages.map((image, index) => (
        <motion.div key={index} className="aspect-square relative rounded-lg overflow-hidden">
          <Image src={image.src} alt={`Portfólio item ${index + 1}`} fill className="object-cover" />
        </motion.div>
      ))}
    </div>
  );
}