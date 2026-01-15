
import React, { useState, useEffect, useRef } from 'react';

// --- Sub-componentes (Consolidados para evitar erros de rota de arquivo no Vercel) ---

const Header = () => (
  <header className="text-center">
  <!-- TikTok Pixel Code Start -->
<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


  ttq.load('D5KKVIBC77U6R4DE3L8G');
  ttq.page();
}(window, document, 'ttq');
</script>
<!-- TikTok Pixel Code End -->
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

const Benefits = () => {
  const benefits = [
    { text: "Compre para uso ou revenda", emoji: "✅" },
    { text: "Fornecedores de todos estados", emoji: "✅" },
    { text: "Frete grátis e entrega ágil", emoji: "✅" }
  ];
  return (
    <div className="flex flex-col gap-[1rem] max-w-[600px] mx-auto mb-[2rem] animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
      {benefits.map((benefit, idx) => (
        <div key={idx} className="flex items-center gap-[0.8rem] bg-white/10 backdrop-blur-[10px] p-[1rem_1.5rem] rounded-[16px] border border-white/20 shadow-custom transition-transform duration-300 hover:translate-x-[5px]">
          <span className="text-[1.5rem] shrink-0">{benefit.emoji}</span>
          <span className="text-[1.1rem] text-white font-medium">{benefit.text}</span>
        </div>
      ))}
      <div className="bg-gradient-to-br from-[#ff3399] to-[#ff66cc] text-white p-[1.2rem_2rem] rounded-[1rem] font-bold text-[clamp(1rem,2vw,1.2rem)] text-center mb-[1.5rem] animate-[pulseGlow_2s_infinite,fadeInUp_0.8s_ease-out_0.4s_both] shadow-[0_8px_25px_rgba(0,0,0,0.3)] backdrop-blur-[10px] border border-white/20">
        🎥 Assista o vídeo abaixo antes que a oferta acabe!
      </div>
    </div>
  );
};

const VSL = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div onClick={togglePlay} className="relative w-full max-w-[400px] h-[550px] md:h-[700px] mx-auto rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)] mb-[2rem] border-[3px] border-white/20 animate-fadeInUp cursor-pointer group" style={{ animationDelay: '0.5s' }}>
      <video ref={videoRef} className="w-full h-full object-cover block" playsInline disablePictureInPicture controlsList="nodownload">
        <source src="https://makerevenda.site/video/provamake.mp4" type="video/mp4" />
      </video>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] z-10">
          <div className="w-[80px] h-[80px] rounded-full bg-white/30 flex items-center justify-center border-2 border-white/50 animate-pulse">
            <i className="fas fa-play text-white text-3xl ml-1"></i>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-white to-[#ffe3f1] z-10" style={{ width: '100%' }}></div>
    </div>
  );
};

const ProductShowcase = () => {
  const products = [
    { name: "Gel Marshmallow", price: "R$ 5,00", img: "https://makerevenda.site/images/p1.png" },
    { name: "Máscara Capilar", price: "R$ 4,00", img: "https://makerevenda.site/images/p2.png" },
    { name: "Lip Gloss Honey", price: "R$ 5,00", img: "https://makerevenda.site/images/p5.png" }
  ];
  return (
    <section className="flex flex-col items-center animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
      <h2 className="text-[clamp(1.5rem,4vw,1.8rem)] font-extrabold mb-[2rem] drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] text-center w-full uppercase">SÃO MILHARES DE PRODUTOS!</h2>
      {products.map((p, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-[10px] rounded-[16px] p-[1.5rem] my-[1rem] text-center w-full max-w-[300px] border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-[5px]">
          <img alt={p.name} className="w-full h-auto rounded-[12px] mb-[0.8rem]" src={p.img} />
          <h4 className="text-[1.1rem] my-[0.8rem] text-white font-semibold">{p.name}</h4>
          <p className="text-[2rem] text-white font-extrabold my-[1rem] bg-gradient-to-br from-[#00ff88] to-[#00cc66] px-[1.5rem] py-[0.8rem] rounded-[16px] inline-block animate-pulsePrice">{p.price}</p>
        </div>
      ))}
    </section>
  );
};

const ProductGrid = () => {
  const items = [
    { name: "Lip Gloss Fashion Rôse", price: "R$ 3,79", img: "https://makerevenda.site/images/lip.webp" },
    { name: "Body Girl Gel Creme", price: "R$ 5,90", img: "https://makerevenda.site/images/bodygirl.webp" },
    { name: "Máscara Cílios Luisance", price: "R$ 3,89", img: "https://makerevenda.site/images/mascaracilios.webp" },
    { name: "Luisance Paleta Luxo", price: "R$ 4,90", img: "https://makerevenda.site/images/paleta.webp" },
    { name: "Esponja de Maquiagem", price: "R$ 3,30", img: "https://makerevenda.site/images/esponja.webp" },
    { name: "Esfoliante Pitaya", price: "R$ 2,99", img: "https://makerevenda.site/images/pitaya.webp" }
  ];
  return (
    <section className="bg-white/10 backdrop-blur-[10px] rounded-[24px] p-[2rem_1rem] my-[2rem] border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.25)] animate-[fadeInUp_0.8s_ease-out_0.9s_both]">
      <h3 className="text-white text-[clamp(1.2rem,3vw,1.4rem)] font-bold text-center mb-[1.5rem]">Veja Alguns Produtos Que Você Poderia Estar Vendendo:</h3>
      <div className="grid grid-cols-2 gap-[1rem] max-w-[600px] mx-auto">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-[16px] p-[1rem] text-center shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
            <img alt={item.name} className="w-full h-auto max-h-[120px] object-cover rounded-[10px] mb-[0.8rem]" src={item.img} />
            <h4 className="text-[0.9rem] mb-[0.5rem] text-[#333] font-semibold">{item.name}</h4>
            <p className="text-[#00cc66] font-extrabold text-[1.1rem]">{item.price}</p>
            <p className="text-[#ff3399] text-[0.75rem] font-semibold">(com a lista)</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const OfferBox = () => {
  const bonuses = [
    "+ De 100 Fornecedores", 
    "Curso Loja Online Lucrativa", 
    "Vender Shopee/ML/Magalu", 
    "Suporte WhatsApp", 
    "Acesso Atualizações", 
    "Calculadora Precificação"
  ];
  return (
    <div id="oferta" className="scroll-mt-24 bg-white text-[#ff0077] p-[clamp(1.5rem,5vw,2.5rem)] rounded-[24px] text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-[700px] w-full mx-auto animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
      <img alt="Logo" className="max-w-[180px] mx-auto mb-6" src="https://i.imgur.com/b4Br2EJ.png" />
      <div className="my-6 space-y-3 text-left max-w-sm mx-auto font-semibold">
        {bonuses.map((b, i) => <div key={i}><span className="text-green-500">✅</span> {b}</div>)}
      </div>
      <div className="mt-[1rem] mb-[1.5rem] flex items-center justify-center gap-[0.8rem]">
        <span className="line-through text-red-400">De R$67,00</span>
        <span className="text-[2rem] font-black text-green-500">Por R$19,90</span>
      </div>
      <a href="https://pay.cakto.com.br/39q58kw_727253" className="w-full bg-gradient-to-br from-[#ff3399] to-[#ff66cc] text-white p-4 block rounded-2xl font-bold text-xl shadow-lg transition-transform active:scale-95">GARANTIR AGORA</a>
      <p className="mt-4 text-gray-400 text-sm italic">Compra 100% segura | Garantia de 7 dias</p>
    </div>
  );
};

const UrgencyBar = () => (
  <div className="mt-8 bg-white/10 p-6 rounded-3xl text-center border border-white/20 animate-[fadeInUp_0.8s_ease-out_0.7s_both]">
    <i className="fas fa-exclamation-triangle text-yellow-300 text-4xl mb-2 animate-shake mx-auto block"></i>
    <h2 className="font-black text-2xl uppercase">VAGAS ESGOTANDO!</h2>
    <div className="w-full h-8 bg-white/20 rounded-full my-4 overflow-hidden">
      <div className="h-full w-[87%] bg-gradient-to-r from-orange-400 to-red-500 animate-pulse flex items-center justify-center font-bold text-white text-xs">87%</div>
    </div>
    <p className="text-sm">Restam apenas 7 vagas com o desconto promocional!</p>
  </div>
);

const StickyFooter = ({ isVisible }: { isVisible: boolean }) => (
  <div className={`fixed bottom-0 left-0 w-full p-4 z-[999] transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
    <div className="bg-white rounded-2xl p-4 shadow-2xl flex items-center justify-between max-w-4xl mx-auto border border-pink-100">
      <div className="hidden sm:block text-pink-600">
        <p className="font-black leading-none">🔥 OFERTA LIMITADA!</p>
        <p className="text-gray-500 text-[10px] font-bold">Últimas 7 vagas com 70% OFF</p>
      </div>
      <a href="#oferta" className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold flex-1 sm:flex-none text-center text-sm shadow-lg active:scale-95 transition-transform">GARANTIR MINHA VAGA</a>
    </div>
  </div>
);

// --- Componente Principal ---

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#ff0077] to-[#ff65a3] text-white flex flex-col items-center relative overflow-x-hidden pt-12 md:pt-14">
      {/* Alerta Superior */}
      <div className="fixed top-0 left-0 w-full bg-white text-[#ff0077] py-2 text-center font-black text-xs md:text-sm z-[1000] animate-pulse shadow-md">
        ATENÇÃO: ÚLTIMAS VAGAS NO VALOR PROMOCIONAL!
      </div>
      
      {/* Container Principal */}
      <div className="container w-full max-w-[800px] flex flex-col gap-[2.5rem] relative z-[1] animate-fadeInUp p-[2rem_1rem]">
        <Header />
        <Benefits />
        <VSL />
        <ProductShowcase />
        <ProductGrid />
        <OfferBox />
        <UrgencyBar />
        
        <footer className="text-center py-12 text-white/40 text-[0.7rem] uppercase tracking-wider mb-20">
          © 2026 Sua Lista de Fornecedores Exclusiva
        </footer>
      </div>

      <StickyFooter isVisible={showSticky} />
    </div>
  );
};

export default App;
