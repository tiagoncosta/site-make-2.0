
import React from 'react';

export const UrgencyBar: React.FC = () => {
  return (
    <div className="aviso-promocional text-center mt-[2rem] bg-white/15 p-[clamp(1.5rem,4vw,2rem)] rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.25)] backdrop-blur-[10px] border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.7s_both]">
      <i className="fas fa-exclamation-triangle icone-alerta text-[clamp(1.8rem,4vw,2.2rem)] text-[#fff200] mb-[0.5rem] animate-shake drop-shadow-[0_0_10px_rgba(255,242,0,0.5)] mx-auto block"></i>
      <h2 className="text-[clamp(1.4rem,3vw,1.6rem)] font-extrabold text-white mb-[0.5rem] drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] text-center uppercase">
        VAGAS ESGOTANDO!
      </h2>
      <p className="text-white/95 text-center">Restam apenas 7 vagas com desconto!</p>
      
      <div className="barra-progresso w-full max-w-[320px] mx-auto my-[1.2rem] bg-white/20 rounded-full overflow-hidden shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] h-[32px] flex items-center">
        <div className="progresso w-[87%] bg-gradient-to-r from-[#fcb045] to-[#fd1d1d] text-white text-center py-[0.5rem] font-bold text-[0.9rem] rounded-full shadow-[0_2px_10px_rgba(253,29,29,0.4)] animate-pulse">
          87%
        </div>
      </div>
      
      <p className="mensagem-final text-[clamp(0.85rem,2vw,0.9rem)] mt-[0.5rem] text-white/95 leading-[1.6] text-center">
        Após finalizar as vagas o valor será reajustado.
      </p>
      <p className="mensagem-cta text-[clamp(0.85rem,2vw,0.9rem)] mt-[0.5rem] text-white/95 leading-[1.6] mb-4 text-center">
        Clique abaixo para garantir sua vaga com desconto.
      </p>
      
      <a 
        href="#oferta" 
        className="botao-compraa inline-flex items-center justify-center gap-[0.5rem] bg-gradient-to-br from-[#ff3399] to-[#ff66cc] text-white p-[1.1rem_2.8rem] text-[1.1rem] font-bold rounded-[16px] no-underline transition-all duration-300 shadow-[0_10px_30px_rgba(255,51,153,0.4)] cursor-pointer relative overflow-hidden whitespace-nowrap group mt-0 w-full"
      >
        <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/30 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-[300px] group-hover:h-[300px]"></div>
        <i className="fas fa-shopping-cart relative z-[1]"></i>
        <span className="relative z-[1]">Ver Oferta e Garantir Vaga</span>
      </a>
    </div>
  );
};
