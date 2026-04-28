import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import { ChevronDown, ShieldCheck, Cpu, Wifi, ExternalLink, MapPin, Fingerprint, Aperture, Radio, X, RefreshCw } from 'lucide-react';

import porta1 from './assets/porta1.png';
import image1 from './assets/image1.png';
import condImg from './assets/cond.png';
import casaInt from './assets/casaint.png';
import casaQ from './assets/casaq.png';
import botaof from './assets/botaof.png';
import botaot from './assets/botaot.png';
import roteador from './assets/roteador.png';
import sensorm from './assets/sensorm.png';

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
          initial={{ opacity: 0, filter: "brightness(0) blur(10px)" }}
          whileInView={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
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
            O limite entre arquitetura e tecnologia <br className="hidden md:block" /> acaba de desaparecer.
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
              initial={{ opacity: 0, filter: "brightness(0) blur(15px)" }}
              whileInView={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeInOut" }}
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
                initial={{ opacity: 0, filter: "brightness(0) blur(15px)" }}
                whileInView={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
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
              Bem-Vindo ao <br />
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

const ArchitectureDeconstruction = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <section className="w-full py-32 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Título com Efeito de Luz */}
        <motion.div 
          initial={{ opacity: 0, filter: "brightness(0) blur(10px)" }}
          whileInView={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            O Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">vs</span> A Engenharia
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light">Deslize para desconstruir e ver a tecnologia embarcada.</p>
        </motion.div>

        {/* Container do Slider com Efeito de Luz */}
        <motion.div 
          initial={{ opacity: 0, filter: "brightness(0.2) blur(15px)" }}
          whileInView={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full max-w-6xl mx-auto flex justify-center"
        >
          <div 
            ref={containerRef}
            className="relative w-full h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-[0_30px_80px_rgba(34,211,238,0.15)] group"
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* Imagem de Fundo (A maquete quebrada / casaq) */}
            <img 
              src={casaQ} 
              alt="Engenharia Interna" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
            />

            {/* Etiqueta Direita (Fica por baixo do clip-path, visível no lado da casa quebrada) */}
            <div className="absolute inset-y-0 right-0 flex items-center p-4 md:p-8 z-0 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
               <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-cyan-400 font-bold tracking-widest text-xs md:text-sm border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                 O PODER INTERNO
               </span>
            </div>

            {/* Imagem Frontal (A maquete inteira / casaint) usando Clip-Path */}
            <div 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={casaInt} 
                alt="Design Externo" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              
              {/* Etiqueta Esquerda (Acompanha a área do clip-path) */}
              <div className="absolute inset-y-0 left-0 flex items-center p-4 md:p-8 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
                 <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold tracking-widest text-xs md:text-sm border border-white/20 shadow-xl">
                   A PERFEIÇÃO EXTERNA
                 </span>
              </div>
            </div>

            {/* Divisor Visual do Slider */}
            <div 
               className="absolute top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_15px_#00f3ff] pointer-events-none z-10"
               style={{ left: `${sliderPosition}%` }}
            >
               {/* Puxador do Slider */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/80 backdrop-blur-md border border-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-transform duration-200" style={{ transform: `translate(-50%, -50%) ${isDragging ? 'scale(1.1)' : 'scale(1)'}` }}>
                  <span className="text-cyan-400 font-bold text-base md:text-lg tracking-widest leading-none pb-[2px]">↔</span>
               </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalFlipped, setIsModalFlipped] = useState(false);

  const products = [
    { id: 1, name: 'Interruptor com Botão Físico', category: 'Controle', image: botaof, description: 'Design premium com feedback tátil mecânico para controle preciso da iluminação e automações.' },
    { id: 2, name: 'Interruptor com Botão Touch', category: 'Controle', image: botaot, description: 'Painel de vidro temperado capacitivo com iluminação LED sutil, combinando perfeitamente com ambientes minimalistas.' },
    { id: 3, name: 'Roteador Wi-Fi 7', category: 'Conectividade', image: roteador, description: 'Velocidade extrema e baixíssima latência para suportar centenas de dispositivos inteligentes simultâneos sem gargalos.' },
    { id: 4, name: 'Sensor de Presença Humana', category: 'Sensores', image: sensorm, description: 'Vai além do movimento. Detecta até a respiração para manter a automação ativa enquanto você estiver no ambiente.' },
    { id: 5, name: 'Relé Estado Sólido', category: 'Automação', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80', description: 'Transforma a iluminação convencional em inteligente sem ruídos mecânicos e com durabilidade infinita.' },
    { id: 6, name: 'Fechadura Titanium', category: 'Acesso', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80', description: 'Biometria 3D de alta precisão. Desbloqueia a porta 0.3s antes de você tocar na maçaneta.' },
    { id: 7, name: 'Motor Cortina Mag', category: 'Conforto', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', description: 'Levitação magnética e operação ultra-silenciosa. Sincronização inteligente com a luz solar.' },
    { id: 8, name: 'Termostato Preditivo', category: 'Clima', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', description: 'Ajusta a temperatura ambiente cruzando dados de previsão do tempo e histórico de uso familiar.' },
    { id: 9, name: 'Áudio Espacial', category: 'Mídia', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80', description: 'O som acompanha você pela casa. Caixas acústicas invisíveis embutidas no gesso da arquitetura.' },
    { id: 10, name: 'LED Circadiano', category: 'Luz', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80', description: 'Iluminação baseada em cromoterapia que adapta a temperatura de cor para alinhar com seu ciclo de sono.' },
    { id: 11, name: 'Drone Sentinela', category: 'Segurança', image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80', description: 'Patrulha perimetral. Decola automaticamente em caso de intrusão, transmitindo imagens em tempo real.' },
    { id: 12, name: 'Espelho Oled', category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&w=800&q=80', description: 'Painel interativo OLED invisível sob o vidro. Mostra sua agenda e clima enquanto você se arruma.' },
    { id: 13, name: 'Válvula Flow Smart', category: 'Água', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&w=800&q=80', description: 'Inteligência hidráulica. Corta o fornecimento de água instantaneamente ao detectar fluxos irregulares.' },
    { id: 14, name: 'Monitor Energia AI', category: 'Energia', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80', description: 'Análise de rede elétrica. Identifica o consumo em tempo real da assinatura elétrica de cada eletrodoméstico.' },
    { id: 15, name: 'Carregador EV Max', category: 'Garagem', image: 'https://images.unsplash.com/photo-1592859675234-90d18d45f340?auto=format&fit=crop&w=800&q=80', description: 'Carregador para veículos elétricos. Otimiza o abastecimento usando períodos de tarifa de energia reduzida.' },
    { id: 16, name: 'Vidro Eletrocrômico', category: 'Estrutura', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', description: 'Privacidade sob demanda. Transições de opaco para transparente de forma instantânea.' },
    { id: 17, name: 'Sensor Ar Puro', category: 'Saúde', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', description: 'Monitora níveis de CO2 e poluentes, acionando renovadores de ar automaticamente quando necessário.' },
    { id: 18, name: 'Fita LED Cob Neo', category: 'Decor', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80', description: 'Iluminação contínua de alta densidade sem efeito pontilhado, perfeita para sancas e rodapés de alto padrão.' },
    { id: 19, name: 'Medidor Smart Meter', category: 'Energia', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80', description: 'Dashboards financeiros integrados para acompanhamento e otimização total do consumo energético.' },
    { id: 20, name: 'Routine Manager', category: 'Core', image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80', description: 'Sincroniza os horários da casa com a rotina e as mudanças de fuso horário e hábitos da família.' },
    { id: 21, name: 'Aspirador Lidar AI', category: 'Limpeza', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80', description: 'Navegação por LIDAR de nível industrial. Mapeia e higieniza os ambientes silenciosamente quando a casa está vazia.' },
    { id: 22, name: 'Persiana Lógica', category: 'Conforto', image: 'https://images.unsplash.com/photo-1558384515-5dcfa2f86687?auto=format&fit=crop&w=800&q=80', description: 'Mecanismo inteligente que regula a entrada de luz natural para maximizar o conforto térmico e economizar energia.' },
    { id: 23, name: 'Arandela de Solo', category: 'Jardim', image: 'https://images.unsplash.com/photo-1528698827591-e59cad89a8ce?auto=format&fit=crop&w=800&q=80', description: 'Design minimalista integrado ao paisagismo. Acende de forma suave e sequencial ao detectar passos pelo quintal.' },
    { id: 24, name: 'Nó Mesh Outdoor', category: 'Rede', image: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=800&q=80', description: 'Repetidor à prova d\'água que garante que o sinal Wi-Fi 6 de alta performance se estenda à piscina e área gourmet.' }
  ];

  const duplicatedProducts = [...products, ...products];
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      setTimeout(() => {
        if (carouselRef.current) {
          setWidth(carouselRef.current.scrollWidth / 2);
        }
      }, 200);
    }
    
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth / 2);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [products]);

  useAnimationFrame((time, delta) => {
    if (isDragging || width === 0) return;
    
    let currentX = x.get();
    currentX -= 0.025 * delta; // Mais lento e fluido
    
    if (currentX <= -width) {
      currentX += width;
    } else if (currentX > 0) {
      currentX -= width;
    }
    
    x.set(currentX);
  });

  const handleProductClick = (product) => {
    if (!isDragging) {
      setSelectedProduct(product);
      setIsModalFlipped(false);
    }
  };

  return (
    <section className="w-full py-32 bg-neutral-950 relative border-t border-white/5 overflow-hidden flex flex-col min-h-screen justify-center">
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, filter: "brightness(0) blur(10px)" }}
          whileInView={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
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

      <div className="w-full relative py-10">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none" />

        <div className="overflow-hidden px-6" ref={carouselRef}>
          <motion.div
            style={{ x }}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-8 whitespace-nowrap min-w-max cursor-grab py-10"
          >
            {duplicatedProducts.map((product, index) => (
              <div 
                key={`${product.id}-${index}`}
                className="relative w-72 md:w-80 h-96 flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-xl group"
                onClick={() => handleProductClick(product)}
              >
                 <img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
                 
                 <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col pointer-events-none">
                    <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2">{product.category}</span>
                    <h4 className="text-white font-bold text-2xl whitespace-normal leading-tight">{product.name}</h4>
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => { setSelectedProduct(null); setIsModalFlipped(false); }} />

            <motion.div 
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
              className="relative w-full max-w-3xl h-[60vh] md:h-[75vh] flex items-center justify-center z-10" 
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isModalFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* FRONT - Image only */}
                <div 
                  className="absolute inset-0 cursor-pointer rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.15)] border border-white/10 group bg-neutral-900"
                  style={{ backfaceVisibility: 'hidden' }}
                  onClick={() => setIsModalFlipped(true)}
                >
                   <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                   
                   <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                     <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">{selectedProduct.name}</h3>
                   </div>

                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full text-white flex items-center gap-3 border border-white/20 shadow-xl">
                        <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                        <span className="font-semibold tracking-wide">Clique para ver especificações</span>
                      </div>
                   </div>
                   
                   <button
                     onClick={(e) => { e.stopPropagation(); setSelectedProduct(null); setIsModalFlipped(false); }}
                     className="absolute top-6 right-6 z-30 p-2 bg-black/50 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors backdrop-blur-md cursor-pointer"
                   >
                     <X className="w-6 h-6" />
                   </button>
                </div>

                {/* BACK - Specs */}
                <div 
                  className="absolute inset-0 bg-neutral-900 rounded-[2rem] p-8 md:p-14 border border-cyan-400/30 shadow-[0_0_80px_rgba(34,211,238,0.15)] flex flex-col justify-between"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                   <div>
                     <div className="flex justify-between items-start mb-8">
                       <div>
                         <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6">
                            <Cpu className="w-6 h-6 text-cyan-400" />
                         </div>
                         <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-2 block">{selectedProduct.category}</span>
                         <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">{selectedProduct.name}</h3>
                       </div>
                       <button onClick={() => { setSelectedProduct(null); setIsModalFlipped(false); }} className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors cursor-pointer">
                         <X className="w-6 h-6" />
                       </button>
                     </div>
                     
                     <div className="w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent mb-8" />
                     
                     <p className="text-neutral-300 text-lg md:text-xl leading-relaxed whitespace-normal">
                       {selectedProduct.description}
                     </p>
                   </div>
                   
                   <button 
                     onClick={() => setIsModalFlipped(false)}
                     className="self-start px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-semibold transition-all flex items-center gap-3 cursor-pointer"
                   >
                     <RefreshCw className="w-5 h-5" />
                     Voltar para Foto
                   </button>
                </div>
              </motion.div>
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
          initial={{ opacity: 0, filter: "brightness(0) blur(10px)" }}
          whileInView={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
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
          initial={{ opacity: 0, filter: "brightness(0) blur(15px)" }}
          whileInView={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
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
      <motion.div 
        initial={{ opacity: 0, filter: "brightness(0) blur(10px)" }}
        whileInView={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center"
      >
        <Aperture className="w-10 h-10 text-neutral-600 mb-8" />
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Residência Inteligente</h2>
        <p className="text-neutral-500 text-sm mb-12">O futuro, arquitetado hoje.</p>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <p className="text-neutral-600 text-xs tracking-wide uppercase">
          &copy; 2026. IOTecnologye. Todos os direitos reservados.
        </p>
      </motion.div>
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
      <ArchitectureDeconstruction />
      <Catalog />
      <LocationMap />
      <Footer />
    </div>
  );
}
