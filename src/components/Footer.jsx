import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-dark-900 border-t border-white/5 py-8 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
      <div className="container mx-auto px-6">
        <p className="text-gray-500 text-sm">
          Projeto de Automação Exclusivo - 2026. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

