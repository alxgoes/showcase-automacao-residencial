import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Hub Zigbee 3.0 LAN Cabeado',
    category: 'IOTecnologye',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    description: 'Conecta e gerencia os dispositivos via conexão cabeada RJ45, oferecendo uma rede estável para automação robusta.'
  },
  {
    id: 2,
    name: 'Painel Central Touch',
    category: 'IOTecnologye',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80',
    description: 'Gerencia o ecossistema em um painel intuitivo, da iluminação à visualização de câmeras.'
  },
  {
    id: 3,
    name: 'Sensor de Presença Humana',
    category: 'EKAZA',
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80',
    description: 'Detecta movimentos e presença estática, mantendo dispositivos ativos mesmo com movimento mínimo.'
  },
  {
    id: 4,
    name: 'Câmera de Segurança 2K Ultra HD',
    category: 'EKAZA',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80',
    description: 'Rotação horizontal de 355° e vertical de 65°, visão noturna de até 10 metros e áudio bidirecional.'
  },
  {
    id: 5,
    name: 'Interruptor Mini Relé EKAZA',
    category: 'EKAZA',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'Módulo embutido em caixas de passagem para controle remoto de interruptores e tomadas.'
  }
];

const Catalog = () => {
  return (
    <section className="w-full py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Ecossistema de <span className="text-neon-cyan text-glow-cyan">Dispositivos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-transparent rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg">
              Hardware de altíssimo padrão, cuidadosamente selecionado para compor uma infraestrutura que une estética minimalista e performance máxima.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            {/* Link Externo do Catálogo */}
            <a 
              href="https://seucatalogo.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10 hover:border-neon-cyan"
            >
              <span>Ver Catálogo Completo</span>
              <ExternalLink className="w-4 h-4 text-neon-cyan" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-glass rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-dark-900 bg-neon-cyan rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-neon-cyan transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-3">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
