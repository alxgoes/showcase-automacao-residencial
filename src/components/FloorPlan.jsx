import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const PLAN_IMG = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80";

const FloorPlan = () => {
  const [activeSpot, setActiveSpot] = useState(null);

  const hotspots = [
    { id: 1, x: '35%', y: '45%', title: 'Hub Central', desc: 'Painel principal de processamento Zigbee/Wi-Fi' },
    { id: 2, x: '65%', y: '30%', title: 'Controle de Iluminação', desc: 'Módulos de dimerização e cenas' },
    { id: 3, x: '80%', y: '60%', title: 'Climatização', desc: 'Termostato inteligente e sensores de temperatura' },
    { id: 4, x: '20%', y: '75%', title: 'Segurança', desc: 'Central de alarme e CFTV' },
  ];

  return (
    <section className="w-full py-32 bg-neutral-950 relative">
      {/* Background radial grad */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mapeamento <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">Espacial</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent mx-auto rounded-full mb-8" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Navegue pela planta do projeto e descubra os pontos estratégicos onde a inteligência da casa está centralizada.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto bg-neutral-900/50 p-4 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="relative w-full aspect-video bg-neutral-950 rounded-[1.5rem] overflow-hidden group border border-white/5">
            
            <img
              src={PLAN_IMG}
              alt="Planta do Projeto"
              className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700 grayscale mix-blend-luminosity"
            />

            {/* Grid Overlay for tech feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50 pointer-events-none" />

            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: spot.x, top: spot.y }}
                onMouseEnter={() => setActiveSpot(spot.id)}
                onMouseLeave={() => setActiveSpot(null)}
              >
                <div className="relative z-20">
                  {/* Ponto Pulsante */}
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cyan-400 rounded-full blur-md"
                  />
                  <div className="relative w-10 h-10 bg-neutral-950 border-2 border-cyan-400 rounded-full flex items-center justify-center cursor-pointer z-10 shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {activeSpot === spot.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 w-56 bg-neutral-900/90 backdrop-blur-md p-5 rounded-2xl border border-cyan-500/30 shadow-2xl z-50 pointer-events-none"
                      >
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-neutral-900/90 border-b border-r border-cyan-500/30 rotate-45" />
                        <h4 className="text-cyan-400 font-bold text-sm mb-2 uppercase tracking-wide">{spot.title}</h4>
                        <p className="text-neutral-300 text-sm leading-relaxed">{spot.desc}</p>
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
