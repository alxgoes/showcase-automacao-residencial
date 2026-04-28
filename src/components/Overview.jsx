import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Wifi } from 'lucide-react';

const Overview = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: "Infraestrutura Robusta",
      description: "Quadro de automação independente garantindo estabilidade energética e processamento local sem depender exclusivamente da nuvem."
    },
    {
      icon: <Wifi className="w-8 h-8 text-amber-400" />,
      title: "Conectividade Mesh",
      description: "Rede lógica distribuída com protocolos Zigbee e Wi-Fi 6, eliminando pontos cegos e atrasos na resposta dos comandos."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
      title: "Segurança Ativa",
      description: "Monitoramento 24h, controle de acesso biométrico e integração total com o sistema de iluminação e alarmes."
    }
  ];

  return (
    <section id="overview" className="w-full py-32 bg-neutral-950 relative overflow-hidden">
      {/* Glow Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Base da <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Inovação</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent mx-auto rounded-full mb-8" />
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Nossa abordagem de automação residencial vai além do controle por voz. Projetamos uma infraestrutura física e lógica capaz de antecipar necessidades, combinando design high-end com tecnologia de ponta para criar um ambiente verdadeiramente vivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-cyan-500/50 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 bg-neutral-900 border border-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-500 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
