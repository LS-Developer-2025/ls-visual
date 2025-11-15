import React from 'react';

/**
 * Um componente que cria um fundo de palco com feixes de luz (beams)
 * laranja, vindo das diagonais e mirando para o centro da seção.
 */
const SpotlightSeparator = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-soft-light" aria-hidden="true">
      {/* Feixe de luz (Beam) Superior Esquerdo */}
    

      <div className="
        absolute top-1/4 -left-1/2 w-[150%] h-1/5 origin-center-left
        bg-gradient-to-r from-ls-laranja/50 to-transparent
        opacity-80 transform-gpu rotate-[15deg] blur-xl"
      />

    <div className="
        absolute top-1/4 -right-1/2 w-[150%] h-1/5 origin-center-right
        bg-gradient-to-l from-ls-laranja/50 to-transparent
        opacity-80 transform-gpu -rotate-[15deg] blur-xl"
      />

    </div>

    
    
  );
};

export default SpotlightSeparator;