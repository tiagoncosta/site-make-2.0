
import React from 'react';

export const OfferBox: React.FC = () => {
  const bonuses = [
    "+ De 100 Fornecedores",
    "Bônus: Curso Completo para Montar sua Loja Online com Menos de R$100,00 Reais e Lucrar até R$800,00 por dia",
    "Bônus: Como Vender na Shopee, Mercado Livre e Magalu",
    "Bônus: Suporte via WhatsApp",
    "Bônus: Acesso a Atualizações",
    "Bônus: Calculadora de Precificação"
  ];

  return (
    <div id="oferta" className="scroll-mt-24 oferta-box bg-white text-[#ff0077] p-[clamp(2rem,5vw,2.5rem)] rounded-[24px] text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-[700px] w-full mx-auto relative overflow-hidden border border-white/50 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(255,51,153,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      <div className="relative z-[1]">
        <span className="inline-block bg-gradient-to-br from-[#ff3399] to-[#ff66cc] text-white p-[0.4rem_1rem] rounded-[20px] text-[0.85rem] font-semibold mb-[1.5rem] shadow-[0_4px_15px_rgba(255,51,153,0.3)]">
          Mais Vendido em 2026
        </span>
        <img alt="Logo Oferta" className="max-w-[180px] md:max-w-[220px] mx-auto mb-6 drop-shadow-md" src="https://i.imgur.com/b4Br2EJ.png" />
        <h2 className="text-[clamp(1.3rem,3vw,1.5rem)] font-bold mb-[1rem] text-[#d63384] text-center">
          <i className="fas fa-tags"></i> Oferta Especial: Lista de Fornecedores
        </h2>
        
        <div className="my-6 space-y-3 text-left max-w-sm mx-auto font-semibold text-[#ff0077]">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-green-500 shrink-0">✅</span> 
              <span className="leading-tight">{bonus}</span>
            </div>
          ))}
        </div>

        <p className="urgencia text-[clamp(0.9rem,2vw,1rem)] text-[#ff4b4b] mb-[0.5rem] font-semibold text-center">
          Restam apenas <strong>7 vagas com desconto</strong> hoje!
        </p>
        
        <div className="preco mt-[1rem] mb-[1.5rem] flex items-center justify-center gap-[0.8rem] flex-wrap">
          <span className="preco-antigo line-through text-[#ff4b4b] text-[1rem] opacity-80">De R$67,00</span>
          <span className="preco-novo text-[clamp(1.6rem,4vw,2rem)] font-extrabold text-[#00cc66] drop-shadow-[0_2px_10px_rgba(0,204,102,0.2)]">Por R$19,90</span>
        </div>

        <a 
          href="https://checkout.payt.com.br/2c22eb0d3a71bc2b7b917d89d55f4dae?payment=pix#" 
          className="botao-compraa inline-flex items-center justify-center gap-[0.5rem] bg-gradient-to-br from-[#ff3399] to-[#ff66cc] text-white p-[1.1rem_2.8rem] text-[1.1rem] font-bold rounded-[16px] no-underline transition-all duration-300 shadow-[0_10px_30px_rgba(255,51,153,0.4)] cursor-pointer relative overflow-hidden whitespace-nowrap group mt-0 w-full"
        >
          <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/30 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-[300px] group-hover:h-[300px]"></div>
          <i className="fas fa-shopping-cart relative z-[1]"></i>
          <span className="relative z-[1]">Garantir Agora</span>
        </a>
        
        <p className="seguro mt-[1.2rem] text-[0.9rem] text-[#666] flex items-center justify-center gap-[0.5rem] flex-wrap">
          <i className="fas fa-lock text-[#00cc66]"></i> Compra 100% segura | <i className="fas fa-undo text-[#00cc66]"></i> Garantia de 7 dias
        </p>
      </div>
    </div>
  );
};
