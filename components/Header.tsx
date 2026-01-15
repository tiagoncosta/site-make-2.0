
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <img 
        alt="Logo" 
        className="max-w-[180px] md:max-w-[240px] mx-auto mb-6 drop-shadow-lg animate-[fadeInUp_0.8s_ease-out_both]" 
        src="https://i.imgur.com/MSzVvvW.png" 
      />
      <h1 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-white text-center mb-[1rem] leading-[1.3] drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
        A Lista de Fornecedores Mais Desejada do Brasil Agora é Sua!
      </h1>
    </header>
  );
};
