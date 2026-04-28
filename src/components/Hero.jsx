import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HERO_IMG = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('overview').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Imagem de Fundo com Overlay Gradiente Aprimorado */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/80 to-neutral-950 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent z-10" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium tracking-wide">Padrão Ouro em Automação</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
            Residência <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              Inteligente
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            O futuro do conforto, segurança e sofisticação. Uma infraestrutura tecnológica completa, desenhada para elevar seu estilo de vida.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-md overflow-hidden rounded-full font-medium text-white border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-400/20 transition-all duration-500" />
            <span className="relative z-10 flex items-center gap-2 text-lg">
              Explorar o Projeto
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Rato de Scroll Opcional */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-cyan-500/50">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
