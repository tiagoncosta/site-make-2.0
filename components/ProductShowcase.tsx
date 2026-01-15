
import React from 'react';

export const ProductShowcase: React.FC = () => {
  const products = [
    { name: "Gel Marshmallow", price: "R$ 5,00", img: "https://makerevenda.site/images/p1.png" },
    { name: "Máscara Capilar", price: "R$ 4,00", img: "https://makerevenda.site/images/p2.png" },
    { name: "Lip Gloss Honey", price: "R$ 5,00", img: "https://makerevenda.site/images/p5.png" }
  ];

  return (
    <section className="secao-produtos-lista bg-transparent p-[2rem_1rem] flex flex-col items-center animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
      <h2 className="secao-produtos-titulo text-[clamp(1.5rem,4vw,1.8rem)] font-extrabold mb-[2rem] drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] text-center w-full uppercase">
        SÃO MILHARES DE PRODUTOS!
      </h2>
      
      {products.map((p, i) => (
        <div 
          key={i}
          className="bg-white/10 backdrop-blur-[10px] rounded-[16px] p-[1.5rem] my-[1rem] text-center w-full max-w-[300px] border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-[5px]"
        >
          <img alt={p.name} className="w-full h-auto rounded-[12px] mb-[0.8rem]" src={p.img} />
          <h4 className="text-[1.1rem] my-[0.8rem] text-white font-semibold">{p.name}</h4>
          <p className="text-[2rem] text-white font-extrabold my-[1rem] bg-gradient-to-br from-[#00ff88] to-[#00cc66] px-[1.5rem] py-[0.8rem] rounded-[16px] inline-block shadow-[0_8px_25px_rgba(0,255,136,0.4)] drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)] animate-pulsePrice">
            {p.price}
          </p>
        </div>
      ))}
    </section>
  );
};
