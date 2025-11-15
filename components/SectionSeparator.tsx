// app/components/SectionSeparator.tsx
import React from 'react';
import CustomImage from '@/components/CustomImage';

const SectionSeparator = () => {
  return (
    // 1. 'relative z-20': Coloca a nuvem na CAMADA 20 (frente).
    // 2. '-my-10 md:-my-16': Margem negativa para "invadir" as seções.
    // 3. 'scale-125': A escala que você pediu.
    <div className="relative w-full -my-20 md:-my-28" aria-hidden="true">
      <CustomImage
        src="/images/nuvens/n1.svg" 
        alt=""
        width={1920}
        height={150} // ⚠️ Ajuste para a altura/proporção real do seu SVG
        
        // 'pointer-events-none' impede que a nuvem (que está por cima)
        // bloqueie o clique em links que possam estar abaixo dela.
        className="w-full h-auto opacity-80 scale-125 pointer-events-none"
      />
    </div>
  );
};

export default SectionSeparator;