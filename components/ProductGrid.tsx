
import React from 'react';

export const ProductGrid: React.FC = () => {
  const items = [
    { name: "Lip Gloss Fashion Rôse", price: "R$ 3,79", img: "https://makerevenda.site/images/lip.webp" },
    { name: "Body Girl Gel Creme", price: "R$ 5,90", img: "https://makerevenda.site/images/bodygirl.webp" },
    { name: "Máscara Cílios Luisance", price: "R$ 3,89", img: "https://makerevenda.site/images/mascaracilios.webp" },
    { name: "Luisance Paleta Luxo", price: "R$ 4,90", img: "https://makerevenda.site/images/paleta.webp" },
    { name: "Esponja de Maquiagem", price: "R$ 3,30", img: "https://makerevenda.site/images/esponja.webp" },
    { name: "Esfoliante Pitaya", price: "R$ 2,99", img: "https://makerevenda.site/images/pitaya.webp" }
  ];

  return (
    <section className="products-section bg-white/10 backdrop-blur-[10px] rounded-[24px] p-[2rem_1rem] my-[2rem] border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.25)] animate-[fadeInUp_0.8s_ease-out_0.9s_both]">
      <h3 className="text-white text-[clamp(1.2rem,3vw,1.4rem)] font-bold text-center mb-[1.5rem] drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
        Veja Alguns Produtos Que Você Poderia Estar Vendendo:
      </h3>
      <div className="products-grid grid grid-cols-2 gap-[1rem] max-w-[600px] mx-auto">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-[16px] p-[1rem] text-center shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-[5px]">
            <img alt={item.name} className="w-full h-auto max-h-[120px] object-cover rounded-[10px] mb-[0.8rem]" src={item.img} />
            <h4 className="text-[0.9rem] mb-[0.5rem] text-[#333] font-semibold">{item.name}</h4>
            <p className="text-[#00cc66] font-extrabold text-[1.1rem] my-[0.3rem]">{item.price}</p>
            <p className="text-[#ff3399] text-[0.75rem] mt-[0.3rem] font-semibold">(com a lista)</p>
          </div>
        ))}
      </div>
    </section>
  );
};
