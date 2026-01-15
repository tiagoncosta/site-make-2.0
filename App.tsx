
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Benefits } from './components/Benefits';
import { VSL } from './components/VSL';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductGrid } from './components/ProductGrid';
import { OfferBox } from './components/OfferBox';
import { UrgencyBar } from './components/UrgencyBar';
import { StickyFooter } from './components/StickyFooter';

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky footer after scrolling 300px
      if (window.scrollY > 300) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#ff0077] to-[#ff65a3] text-white flex flex-col items-center relative overflow-x-hidden pt-12 md:pt-14">
      {/* Top Urgent Alert Bar */}
      <div className="fixed top-0 left-0 w-full bg-white text-[#ff0077] py-2 md:py-3 text-center font-extrabold text-xs md:text-sm lg:text-base shadow-lg z-[1000] animate-pulse border-b border-[#ff0077]/10 px-2">
        ATENÇÃO: ÚLTIMAS VAGAS NO VALOR PROMOCIONAL!
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%),radial-gradient(circle_at_80%_80%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
      </div>

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
