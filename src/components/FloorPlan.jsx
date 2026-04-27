import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Power, MapPin } from 'lucide-react';
import image1 from '../assets/image1.jpeg';

const hotspots = [
  { id: 1, x: '35%', y: '45%', title: 'Hub Central', desc: 'Painel principal de processamento Zigbee/Wi-Fi' },
  { id: 2, x: '65%', y: '30%', title: 'Controle de Iluminação', desc: 'Módulos de dimerização e cenas' },
  { id: 3, x: '80%', y: '60%', title: 'Climatização', desc: 'Termostato inteligente e sensores de temperatura' },
  { id: 4, x: '20%', y: '75%', title: 'Segurança', desc: 'Central de alarme e CFTV' },
];

const FloorPlan = () => {
  const [activeSpot, setActiveSpot] = useState(null);

  return (
    <section className="w-full py-24 bg-dark-800 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Mapeamento <span className="text-neon-cyan">Espacial</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Navegue pela planta do projeto e descubra os pontos estratégicos onde a inteligência da casa está centralizada.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto bg-dark-900 rounded-3xl p-4 border border-white/10 shadow-2xl">
          <div className="relative w-full aspect-video bg-dark-700 rounded-2xl overflow-hidden group">
            {/* Imagem da Planta - Placeholder */}
            <img
              src={image1}
              alt="Fachada do Projeto como Base"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent pointer-events-none"></div>

            {/* Hotspots */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: spot.x, top: spot.y }}
                onMouseEnter={() => setActiveSpot(spot.id)}
                onMouseLeave={() => setActiveSpot(null)}
              >
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-neon-cyan/40 rounded-full blur-md"
                  />
                  <div className="relative w-8 h-8 bg-dark-900 border-2 border-neon-cyan rounded-full flex items-center justify-center cursor-pointer z-10 box-glow-cyan">
                    <MapPin className="w-4 h-4 text-neon-cyan" />
                  </div>

                  <AnimatePresence>
                    {activeSpot === spot.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-48 bg-glass p-4 rounded-xl z-20"
                      >
                        <h4 className="text-white font-bold text-sm mb-1">{spot.title}</h4>
                        <p className="text-gray-400 text-xs">{spot.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan;
