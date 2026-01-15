
import React from 'react';

interface StickyFooterProps {
  isVisible: boolean;
}

export const StickyFooter: React.FC<StickyFooterProps> = ({ isVisible }) => {
  return (
    <div className={`fixed bottom-0 left-0 w-full p-4 z-[999] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.3)] p-3 md:p-4 flex flex-col md:flex-row items-center justify-between gap-3 border border-white/50 max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-12 h-12 rounded-full bg-pink-100 items-center justify-center text-pink-500 text-xl">
            <i className="fas fa-clock animate-pulse"></i>
          </div>
          <div className="text-center md:text-left">
            <p className="text-[#ff0077] font-extrabold text-sm md:text-base leading-tight">🔥 OFERTA POR TEMPO LIMITADO!</p>
            <p className="text-gray-600 text-[10px] md:text-xs font-bold">Restam apenas 7 vagas com o desconto de 70%</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="hidden lg:block text-right">
            <p className="text-gray-400 line-through text-[10px]">De R$ 67,00</p>
            <p className="text-[#00cc66] font-black text-lg">Por R$19,90</p>
          </div>
          <a 
            href="#oferta" 
            className="botao-compraa inline-flex items-center justify-center gap-[0.5rem] bg-gradient-to-br from-[#ff3399] to-[#ff66cc] text-white p-[0.8rem_2rem] text-[0.9rem] md:text-[1rem] font-bold rounded-[16px] no-underline transition-all duration-300 shadow-none hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden whitespace-nowrap group flex-1 md:flex-none"
          >
            <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/30 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-[300px] group-hover:h-[300px]"></div>
            <i className="fas fa-shopping-cart relative z-[1]"></i>
            <span className="relative z-[1]">GARANTIR MINHA VAGA</span>
          </a>
        </div>
      </div>
    </div>
  );
};
