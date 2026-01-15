
import React from 'react';

export const Benefits: React.FC = () => {
  const benefits = [
    { text: "Compre para uso ou revenda", emoji: "✅" },
    { text: "Fornecedores de todos estados", emoji: "✅" },
    { text: "Frete grátis e entrega ágil", emoji: "✅" }
  ];

  return (
    <div className="lista-beneficios flex flex-col gap-[1rem] max-w-[600px] mx-auto mb-[2rem] animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
      {benefits.map((benefit, idx) => (
        <div 
          key={idx}
          className="flex items-center gap-[0.8rem] bg-white/10 backdrop-blur-[10px] p-[1rem_1.5rem] rounded-[16px] border border-white/20 shadow-custom transition-transform duration-300 hover:translate-x-[5px]"
        >
          <span className="text-[1.5rem] shrink-0">{benefit.emoji}</span>
          <span className="text-[1.1rem] text-white font-medium">{benefit.text}</span>
        </div>
      ))}
      <div className="vsl-info bg-gradient-to-br from-[#ff3399] to-[#ff66cc] text-white p-[1.2rem_2rem] rounded-[1rem] font-bold text-[clamp(1rem,2vw,1.2rem)] text-center mb-[1.5rem] animate-[pulseGlow_2s_infinite,fadeInUp_0.8s_ease-out_0.4s_both] shadow-[0_8px_25px_rgba(0,0,0,0.3)] backdrop-blur-[10px] border border-white/20">
        🎥 Assista o vídeo abaixo antes que a oferta acabe!
      </div>
    </div>
  );
};
