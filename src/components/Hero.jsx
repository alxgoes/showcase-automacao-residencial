import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import image1 from '../assets/image1.jpeg';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('overview').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${image1})`, 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/80 to-dark-900 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Residência <span className="text-neon-cyan text-glow-cyan">Inteligente</span>
          </h1>
          <p className="font-sans text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">
            O futuro do conforto, segurança e sofisticação. Uma infraestrutura tecnológica completa, desenhada para elevar seu estilo de vida.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full font-medium text-white border border-neon-cyan/50 hover:border-neon-cyan box-glow-cyan transition-all duration-300"
          >
            <div className="absolute inset-0 bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors" />
            <span className="relative z-10 flex items-center gap-2">
              Explorar o Projeto
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
