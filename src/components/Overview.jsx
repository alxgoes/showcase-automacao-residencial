import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Wifi } from 'lucide-react';

const Overview = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-neon-cyan" />,
      title: "Infraestrutura Robusta",
      description: "Quadro de automação independente garantindo estabilidade energética e processamento local sem depender exclusivamente da nuvem."
    },
    {
      icon: <Wifi className="w-8 h-8 text-neon-gold" />,
      title: "Conectividade Mesh",
      description: "Rede lógica distribuída com protocolos Zigbee e Wi-Fi 6, eliminando pontos cegos e atrasos na resposta dos comandos."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-neon-cyan" />,
      title: "Segurança Ativa",
      description: "Monitoramento 24h, controle de acesso biométrico e integração total com o sistema de iluminação e alarmes."
    }
  ];

  return (
    <section id="overview" className="w-full py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            A Base da <span className="text-neon-cyan">Inovação</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Nossa abordagem de automação residencial vai além do controle por voz. Projetamos uma infraestrutura física e lógica capaz de antecipar necessidades, combinando design high-end com tecnologia de ponta para criar um ambiente verdadeiramente vivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-glass p-8 rounded-2xl hover:border-neon-cyan/30 transition-colors duration-300 group"
            >
              <div className="w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
