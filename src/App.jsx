import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, Cpu, Wifi, ExternalLink, MapPin, Fingerprint, Aperture, Radio, X } from 'lucide-react';

import porta1 from './assets/porta1.png';
import image1 from './assets/image1.png';
import condImg from './assets/cond.png';

// --- Imagens de Alta Qualidade (Unsplash) ---
const HERO_IMG = image1;
const PLAN_IMG = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80";

// --- Componente: Texto que se revela com o Scroll (Estilo Apple) ---
const ScrollRevealText = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className="text-4xl md:text-6xl lg:text-7xl font-bold flex flex-wrap justify-center gap-x-3 gap-y-4 leading-tight tracking-tight">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        const y = useTransform(scrollYProgress, [start, end], [20, 0]);
        
        const isHighlight = word.toLowerCase().includes("antecipação") || word.toLowerCase().includes("inteligência");
        
        return (
          <motion.span 
            key={i} 
            style={{ opacity, y }}
            className={isHighlight ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : "text-white"}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToNext = () => {
    document.getElementById('statement').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.2, filter: "blur(10px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-10" />
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-neutral-300 text-xs font-semibold tracking-widest uppercase">Sistema Online</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white mb-6 leading-none">
            Residência <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-cyan-600 drop-shadow-2xl">
              Pro
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-neutral-400 max-w-3xl mx-auto mb-16 font-light tracking-wide">
            O limite entre arquitetura e tecnologia <br className="hidden md:block"/> acaba de desaparecer.
          </p>
          
          <motion.div
            onClick={scrollToNext}
            className="flex flex-col items-center justify-center cursor-pointer mt-10 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 mb-2 group-hover:border-white/60 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-cyan-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const StatementSection = () => {
  return (
    <section id="statement" className="w-full py-40 bg-black relative flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <ScrollRevealText text="A verdadeira inteligência não é sobre controle. É sobre antecipação. Ambientes que reagem a você, antes mesmo de você pedir." />
      </div>
    </section>
  );
};

const StickyOverview = () => {
  const features = [
    {
      icon: <Cpu className="w-10 h-10 text-cyan-400" />,
      title: "Processamento Neural Local.",
      description: "Esqueça a dependência da nuvem. Nosso hub proprietário processa automações complexas em milissegundos, garantindo privacidade absoluta e funcionamento mesmo sem internet."
    },
    {
      icon: <Radio className="w-10 h-10 text-blue-400" />,
      title: "Conectividade Mesh Absoluta.",
      description: "Uma malha invisível de dados. Dispositivos Zigbee e Wi-Fi 6 que conversam entre si, eliminando pontos cegos e criando uma rede que se auto-cura em caso de falhas."
    },
    {
      icon: <Fingerprint className="w-10 h-10 text-cyan-400" />,
      title: "Segurança Biométrica Invisível.",
      description: "Sua presença é a sua chave. Reconhecimento facial 3D nas entradas e sensores de radar milimétrico internamente. A casa sabe exatamente quem está em cada ambiente."
    }
  ];

  return (
    <section className="w-full bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row relative items-start">
          <div className="lg:w-1/2 lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col justify-center py-20 lg:py-0 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight mb-8">
                Poder. <br />
                <span className="text-neutral-600">Invisível.</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-md leading-relaxed">
                Nós escondemos a complexidade. Você experimenta apenas a mágica de uma infraestrutura que pensa por você.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 py-10 lg:py-[30vh] flex flex-col gap-32">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-neutral-900/40 backdrop-blur-2xl border border-white/5 p-12 rounded-[2.5rem] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-400/20 transition-colors duration-700 pointer-events-none" />
                <div className="mb-8 p-4 bg-black/50 border border-white/5 rounded-2xl inline-block shadow-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{feature.title}</h3>
                <p className="text-lg text-neutral-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InteractiveVideoSequence = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const doorClip = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const clipPath = useTransform(doorClip, (val) => `inset(0% ${val}% 0% ${val}%)`);
  const doorLightOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 0]);
  const doorLightWidth = useTransform(scrollYProgress, [0, 0.3], ["2px", "100vw"]);
  const lightsOverlayOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0.95, 0]);
  const lensFlareOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 0.3, 0]);
  const houseScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.45, 0.55], [0.8, 1]);
  const textY = useTransform(scrollYProgress, [0.45, 0.55], [50, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        <motion.div style={{ clipPath, scale: houseScale }} className="absolute inset-0 w-full h-full">
          <img 
            src={porta1} 
            alt="Interior Casa Inteligente" 
            className="w-full h-full object-cover" 
          />
          <motion.div style={{ opacity: lightsOverlayOpacity }} className="absolute inset-0 bg-black/95 z-10" />
          <motion.div style={{ opacity: lensFlareOpacity }} className="absolute inset-0 bg-cyan-400/20 mix-blend-screen z-10" />
        </motion.div>

        <motion.div 
          style={{ opacity: doorLightOpacity, width: doorLightWidth }}
          className="absolute h-full bg-white shadow-[0_0_80px_rgba(255,255,255,1)] z-20 mix-blend-overlay pointer-events-none"
        />

        <motion.div style={{ opacity: textOpacity, scale: textScale, y: textY }} className="relative z-30 text-center px-6 w-full max-w-5xl">
          <div className="backdrop-blur-xl bg-black/20 border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter mb-6 leading-none">
              Bem-Vindo ao <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                Futuro
              </span>
            </h2>
            <p className="text-neutral-400 text-lg md:text-2xl font-light tracking-wide">
              Sua presença é o único comando necessário.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MarqueeRow = ({ items, reverse, onSelect }) => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [items]);

  return (
    <div ref={carousel} className="overflow-hidden w-full py-2 group cursor-grab active:cursor-grabbing px-6">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className="flex gap-4 whitespace-nowrap min-w-max"
      >
        {items.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            onClick={() => onSelect(product)}
            className="relative w-64 h-36 flex-shrink-0 rounded-[1.5rem] overflow-hidden border border-white/5 shadow-[0_10px_25px_rgba(0,0,0,0.5)] bg-neutral-900 cursor-pointer hover:border-cyan-400/80 transition-all duration-300 hover:scale-[1.02] group/card pointer-events-auto"
          >
            <div className="absolute inset-0 bg-black/60 group-hover/card:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-90 group-hover/card:opacity-40 transition-opacity duration-300 pointer-events-none" />
            
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500 scale-110 group-hover/card:scale-100 pointer-events-none"
            />
            
            <div className="absolute bottom-4 left-4 z-20 pr-4 pointer-events-none">
               <span className="text-cyan-400 font-bold text-[10px] uppercase tracking-wider block mb-1 drop-shadow-md">
                 {product.category}
               </span>
               <h4 className="text-white font-semibold text-sm whitespace-normal leading-tight drop-shadow-md">
                 {product.name}
               </h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Hub Neural Zigbee', category: 'Core', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80', description: 'O cérebro da operação. Processamento em tempo real.' },
    { id: 2, name: 'Painel Central Infinity', category: 'Interface', image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80', description: 'Vidro temperado anti-reflexo. Controle tátil com feedback háptico.' },
    { id: 3, name: 'Radar Milimétrico', category: 'Sensores', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80', description: 'Detecta micropulsações do corpo humano.' },
    { id: 4, name: 'Câmera AI Pro 4K', category: 'Visão', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80', description: 'Reconhecimento facial com aprendizado de máquina.' },
    { id: 5, name: 'Relé Estado Sólido', category: 'Automação', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80', description: 'Transforma a iluminação convencional em inteligente.' },
    { id: 6, name: 'Fechadura Titanium', category: 'Acesso', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80', description: 'Desbloqueia a porta 0.3s antes de você tocar.' },
    { id: 7, name: 'Motor Cortina Mag', category: 'Conforto', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', description: 'Levitação magnética. Abre junto com o nascer do sol.' },
    { id: 8, name: 'Termostato Preditivo', category: 'Clima', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', description: 'Ajusta cruzando previsão do tempo e histórico.' },
    { id: 9, name: 'Áudio Espacial', category: 'Mídia', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80', description: 'O som acompanha você pela casa.' },
    { id: 10, name: 'LED Circadiano', category: 'Luz', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80', description: 'Cromoterapia que muda conforme o dia.' },
    { id: 11, name: 'Drone Sentinela', category: 'Segurança', image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80', description: 'Decola automaticamente em caso de intrusão.' },
    { id: 12, name: 'Espelho Oled', category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&w=800&q=80', description: 'Painel OLED sob o vidro do banheiro.' },
    { id: 13, name: 'Válvula Flow Smart', category: 'Água', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&w=800&q=80', description: 'Corta a água automaticamente ao detectar vazamentos.' },
    { id: 14, name: 'Monitor Energia AI', category: 'Energia', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80', description: 'Analisa o consumo em tempo real de cada disjuntor.' },
    { id: 15, name: 'Carregador EV Max', category: 'Garagem', image: 'https://images.unsplash.com/photo-1592859675234-90d18d45f340?auto=format&fit=crop&w=800&q=80', description: 'Otimiza o carregamento usando tarifa dinâmica.' },
    { id: 16, name: 'Vidro Eletrocrômico', category: 'Estrutura', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', description: 'Fica opaco ou transparente com um toque.' },
    { id: 17, name: 'Sensor Ar Puro', category: 'Saúde', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', description: 'Mede CO2 e ativa a renovação de ar automaticamente.' },
    { id: 18, name: 'Fita LED Cob Neo', category: 'Decor', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80', description: 'Iluminação contínua sem pontilhados.' },
    { id: 19, name: 'Medidor Smart Meter', category: 'Energia', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80', description: 'Dashboards financeiros integrados do consumo.' },
    { id: 20, name: 'Routine Manager', category: 'Core', image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80', description: 'Sincroniza o fuso horário com os hábitos de sono.' },
    { id: 21, name: 'Aspirador Lidar AI', category: 'Limpeza', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80', description: 'Mapeia e limpa quando a casa está vazia.' },
    { id: 22, name: 'Persiana Lógica', category: 'Conforto', image: 'https://images.unsplash.com/photo-1558384515-5dcfa2f86687?auto=format&fit=crop&w=800&q=80', description: 'Regula a entrada de luz natural para economizar energia.' },
    { id: 23, name: 'Arandela de Solo', category: 'Jardim', image: 'https://images.unsplash.com/photo-1528698827591-e59cad89a8ce?auto=format&fit=crop&w=800&q=80', description: 'Acende suavemente ao caminhar pelo quintal.' },
    { id: 24, name: 'Nó Mesh Outdoor', category: 'Rede', image: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=800&q=80', description: 'Estende o Wi-Fi 6 para a piscina e áreas de lazer.' }
  ];

  const row1 = products.slice(0, 8);
  const row2 = products.slice(8, 16);
  const row3 = products.slice(16, 24);

  return (
    <section className="w-full py-32 bg-neutral-950 relative border-t border-white/5 overflow-hidden flex flex-col items-center min-h-screen justify-center">
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            Hardware de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nível Militar.</span> <br />Design de Nível Galeria.
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Explore nossa galeria de dispositivos perfeitamente integrados.
          </p>
        </motion.div>
      </div>

      <div className="w-full flex flex-col gap-4 relative overflow-hidden py-10">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none" />
        
        <MarqueeRow items={row1} reverse={false} onSelect={setSelectedProduct} />
        <MarqueeRow items={row2} reverse={true} onSelect={setSelectedProduct} />
        <MarqueeRow items={row3} reverse={false} onSelect={setSelectedProduct} />
      </div>

      {/* Modal de Detalhes Interativo */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/60"
          >
            <div className="absolute inset-0" onClick={() => setSelectedProduct(null)} />

            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-5xl bg-neutral-900/90 border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(34,211,238,0.15)] z-10"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-30 p-2 bg-black/50 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-[500px] relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/90 z-10 hidden md:block" />
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-20">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const LocationMap = () => {
  return (
    <section className="w-full py-32 bg-neutral-950 relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            Localização do <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projeto</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            O ponto de convergência entre alta tecnologia e sofisticação arquitetônica.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="group relative w-full max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-neutral-900/20 backdrop-blur-3xl overflow-hidden p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between text-left min-h-[400px] hover:border-cyan-400/50 transition-all duration-700"
        >
          {/* Imagem de Fundo Dinâmica */}
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale opacity-30 mix-blend-screen group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" 
            style={{ backgroundImage: `url(${condImg})` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/80 to-transparent z-0 group-hover:from-black/90 transition-all duration-700" />
          
          <div className="relative z-10 flex flex-col md:w-2/3 mb-8 md:mb-0">
            <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-400/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
              <MapPin className="w-8 h-8 text-cyan-400" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-cyan-400 transition-colors duration-500">Loteamento Royal Boulevard Residence e Resort</h3>
            
            <div className="space-y-3 text-neutral-300">
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span> <strong className="text-white">Rua:</strong> Fábio Adas</p>
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span> <strong className="text-white">Detalhes:</strong> Quadra 09, Lote 23</p>
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span> <strong className="text-white">CEP:</strong> 16016-510</p>
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span> <strong className="text-white">Cidade:</strong> Araçatuba - SP</p>
            </div>
          </div>

          <div className="relative z-10 md:w-1/3 flex justify-start md:justify-end">
            <a 
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x9496419c3deba3cf:0x672db929c7d77510?entry=gemini&utm_source=gemini&utm_campaign=gem-default" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/5 border border-white/20 text-white rounded-full font-bold hover:bg-white hover:text-black hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] backdrop-blur-md transition-all duration-300"
              title="Abrir no Google Maps"
            >
              <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/5 py-16 text-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <Aperture className="w-10 h-10 text-neutral-600 mb-8" />
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Residência Inteligente</h2>
        <p className="text-neutral-500 text-sm mb-12">O futuro, arquitetado hoje.</p>
        
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
        
        <p className="text-neutral-600 text-xs tracking-wide uppercase">
          &copy; 2026. Automação High-End. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-50 selection:bg-cyan-500/30 selection:text-cyan-50 font-sans">
      <Hero />
      <StatementSection />
      <StickyOverview />
      <InteractiveVideoSequence />
      <Catalog />
      <LocationMap />
      <Footer />
    </div>
  );
}
