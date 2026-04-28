import React from 'react';
import { Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 border-t border-white/5 py-12 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mx-auto mb-6">
           <Cpu className="w-6 h-6 text-cyan-500" />
        </div>
        <p className="text-neutral-500 text-sm tracking-wide">
          Projeto de Automação Exclusivo &copy; 2026. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
