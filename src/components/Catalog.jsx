import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Catalog = () => {
  // Configurações de animação em cascata (Stagger) para a grade
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Atraso entre cada card
        delayChildren: 0.2
      }
    }
  };

  // Animação individual de cada card (entrada estilo ficção científica)
  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 15 
      }
    }
  };

  const products = [
    {
      id: 1,
      name: 'Hub Zigbee 3.0 LAN Cabeado',
      category: 'Infraestrutura',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      description: 'Conecta e gerencia os dispositivos via conexão cabeada RJ45, oferecendo uma rede estável para automação robusta.'
    },
    {
      id: 2,
      name: 'Painel Central Touch 10"',
      category: 'Controle',
      image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80',
      description: 'Gerencia o ecossistema em um painel intuitivo, da iluminação à visualização simultânea de cameras.'
    },
    {
      id: 3,
      name: 'Sensor de Presença Humana',
      category: 'Monitoramento',
      image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80',
      description: 'Radar de ondas milimétricas. Detecta movimentos e presença estática, até mesmo sua respiração.'
    },
    {
      id: 4,
      name: 'Câmera de Segurança 2K Ultra HD',
      category: 'Segurança',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80',
      description: 'Rotação horizontal de 355°, IA para detecção de pacotes/pessoas e visão noturna colorida.'
    },
    {
      id: 5,
      name: 'Interruptor Mini Relé Inteligente',
      category: 'Automação',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      description: 'Módulo embutido invisível. Transforma qualquer interruptor analógico convencional em um ponto inteligente.'
    },
    {
      id: 6,
      name: 'Fechadura Smart Neural',
      category: 'Acesso',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
      description: 'Equipada com biometria 3D, reconhecimento facial anti-fraude e chaves virtuais temporárias para visitantes.'
    },
    {
      id: 7,
      name: 'Motor de Cortina Silencioso',
      category: 'Conforto',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      description: 'Trilho motorizado magnético. Sincroniza com o alarme matinal para abrir lentamente com o nascer do sol.'
    },
    {
      id: 8,
      name: 'Termostato Inteligente AI',
      category: 'Climatização',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      description: 'Aprende sua rotina de temperatura por ambiente, otimizando o consumo de energia do ar-condicionado.'
    },
    {
      id: 9,
      name: 'Módulo de Áudio Imersivo',
      category: 'Entretenimento',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      description: 'Amplificador Wi-Fi para caixas de teto. Som multi-room sincronizado em toda a residência sem atrasos.'
    },
    {
      id: 10,
      name: 'Controlador LED ARGB Espacial',
      category: 'Iluminação',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
      description: 'Sincronização de cromoterapia. Adapta a temperatura de cor da casa baseada no seu ritmo circadiano.'
    },
    {
      id: 11,
      name: 'Drone de Patrulha Interna',
      category: 'Segurança High-End',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80',
      description: 'Dock de recarga autônomo. Realiza rondas programadas pela casa e transmite vídeo ao vivo para o seu celular.'
    },
    {
      id: 12,
      name: 'Espelho Interativo Infinity',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&w=800&q=80',
      description: 'Display invisível no vidro. Mostra o clima, trânsito, sua agenda e controles da casa enquanto você se arruma.'
    }
  ];

  return (
    <section className="w-full py-32 bg-neutral-900 relative border-y border-white/5 overflow-hidden">
      {/* Background dinâmico */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ecossistema de <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Dispositivos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full mb-8" />
            <p className="text-neutral-400 text-lg leading-relaxed">
              Hardware de altíssimo padrão, cuidadosamente selecionado para compor uma infraestrutura que une estética minimalista e performance máxima. Explore nossos slots modulares.
            </p>
          </div>
          <div>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-cyan-500/10 text-white rounded-full transition-all duration-300 border border-white/10 hover:border-cyan-400 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <span className="font-medium">Solicitar Orçamento</span>
              <ExternalLink className="w-5 h-5 text-cyan-400" />
            </a>
          </div>
        </motion.div>

        {/* Grade de Produtos Animada */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-neutral-950/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-cyan-500/50 relative"
            >
              {/* Efeito Scanner Tech no Hover */}
              <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-cyan-500/0 via-cyan-400/20 to-cyan-500/0 transform -translate-y-full group-hover:translate-y-1/2 transition-transform duration-[1.5s] ease-in-out z-30 pointer-events-none" />

              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent z-10 opacity-90" />
                
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-5 left-5 z-20">
                  <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-950 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6 relative z-20">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-cyan-400/50 transition-colors duration-500" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {product.name}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;
