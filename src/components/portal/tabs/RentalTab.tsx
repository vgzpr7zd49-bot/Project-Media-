import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { Search, Filter, Cpu, Hourglass, Zap, Package, Lightbulb, Video, HelpCircle, Mic, Plane } from 'lucide-react';
import { ClientData } from '../../../../types';

interface RentalTabProps {
  client: ClientData;
}

interface RentalItem {
  id: string;
  name: string;
  brand: string;
  category: 'luzes' | 'palco' | 'acessorios' | 'cameras_lenses' | 'audio' | 'drones';
  desc: string;
  quantity?: number;
  image: string;
  specs: { label: string; highlight?: boolean; color?: string }[];
  status: 'available' | 'coming_soon';
  compat?: string;
  priceNew?: string;
  priceUsed?: string;
  priceRentDay?: string;
  priceRentWeekend?: string;
}

const RENTAL_ITEMS: RentalItem[] = [
  // LUZES DE ESTÚDIO & CAMPO
  {
    id: 'colbor-cl100',
    brand: 'COLBOR',
    name: 'CL100 — Bi-Color COB LED 100W',
    category: 'luzes',
    desc: 'Luz de estúdio portátil de 100W com temperatura de cor variável de 2700K a 6500K. CRI 97+, montagem Bowens, controlo por app e modo silencioso para gravações exigentes.',
    image: 'https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '100W', highlight: true },
      { label: '2700-6500K' },
      { label: 'CRI 97+' },
      { label: 'App Control', color: 'blue' },
      { label: 'Bowens Mount' },
      { label: 'COB LED', color: 'green' }
    ],
    status: 'available'
  },
  {
    id: 'neewer-660-pro',
    brand: 'NEEWER',
    name: '660 PRO RGB — 2 Painéis LED 50W',
    category: 'luzes',
    desc: 'Dois painéis LED de 50W com 660 SMD LEDs cada. Bi-Color 3200–5600K e RGB 360° completo. CRI 97+. Controlo por app, DMX ou painel manual.',
    image: 'https://images.unsplash.com/photo-1629812456605-4a044aa38fbc?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '2×50W', highlight: true },
      { label: '3200-5600K' },
      { label: 'RGB 360°', color: 'orange' },
      { label: 'CRI 97+' },
      { label: 'App Control', color: 'blue' },
      { label: '660 SMD LEDs' }
    ],
    status: 'available'
  },
  {
    id: 'amaran-60d-s',
    brand: 'APUTURE / AMARAN',
    name: 'Amaran 60d S — COB Daylight 65W 5600K',
    category: 'luzes',
    desc: 'Luz COB compacta 695g com montagem Bowens universal. LED dual-blue de nova geração. CRI 96+ / TLCI 99+. Ideal para key light, fill light e livestreaming em mobilidade.',
    image: 'https://images.unsplash.com/photo-1616847220556-9a595995ddad?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '65W', highlight: true },
      { label: '5600K Daylight' },
      { label: 'CRI 96+ / TLCI 99+' },
      { label: 'Sidus Link App', color: 'blue' },
      { label: 'Bowens Mount' },
      { label: '695g', color: 'green' }
    ],
    status: 'available'
  },
  {
    id: 'godox-ml60ii-bi',
    brand: 'GODOX',
    name: 'ML60II Bi — Bi-Color LED 70W',
    category: 'luzes',
    desc: 'Luz portátil compacta de 500g com temperatura variável 2800–6500K. 11 efeitos FX integrados, compatível com acessórios Godox-Mount. Operação unimânual com anel de controlo intuitivo.',
    image: 'https://m.media-amazon.com/images/I/81QyoUJX9HL._AC_SX522_.jpg',
    specs: [
      { label: '70W', highlight: true },
      { label: '2800-6500K' },
      { label: 'CRI 96+ / TLCI 97+' },
      { label: '11 FX', color: 'orange' },
      { label: 'Godox App', color: 'blue' },
      { label: '500g', color: 'green' }
    ],
    status: 'available'
  },
  {
    id: 'mini-led-portatil',
    brand: 'ILUMINAÇÃO',
    name: 'Mini LED — Luz Compacta Portátil',
    category: 'luzes',
    desc: 'Luz LED compacta para reforço de iluminação em espaços reduzidos, entrevistas e captação documental. Temperatura de cor ajustável e operação a bateria para máxima mobilidade.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'Mini LED', highlight: true },
      { label: 'Bi-Color' },
      { label: 'Bateria', color: 'green' },
      { label: 'Portátil' },
      { label: 'On-Camera', color: 'blue' }
    ],
    status: 'available'
  },

  // PALCO & ESPETÁCULO
  {
    id: 'showtec-compact-par',
    brand: 'SHOWTEC',
    name: 'Compact Par 18 Q4 — RGBW LED PAR 126W',
    category: 'palco',
    desc: 'PAR LED compacto de alto desempenho com 18 LEDs RGBW de 7W cada. Feixe estreito de 15° para cor precisa e intensa. Suporte duplo para posicionamento em chão. Operação via DMX, manual ou master/slave.',
    quantity: 6,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '18×7W RGBW', highlight: true },
      { label: '126W Total' },
      { label: '15° Beam' },
      { label: '10.000 lux @ 2m' },
      { label: 'DMX 4/6/10ch', color: 'blue' },
      { label: '12.000Hz', color: 'orange' }
    ],
    status: 'available'
  },
  {
    id: 'fonestar-mov-72l',
    brand: 'FONESTAR',
    name: 'MOV-72L — Cabeça Móvel LED WASH DMX RGBW',
    category: 'palco',
    desc: 'Cabeça móvel com 7 LEDs RGBW de 10W para cenários de espetáculo e eventos. Amplitude de movimento PAN 540° e TILT 180°. Microfone integrado para ativação por som. Corpo robusto em metal e plástico.',
    quantity: 4,
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '7×10W RGBW', highlight: true },
      { label: 'PAN 540°' },
      { label: 'TILT 180°' },
      { label: 'DMX 9/14ch', color: 'blue' },
      { label: 'Sound Trigger', color: 'orange' },
      { label: '150W' }
    ],
    status: 'available'
  },
  {
    id: 'fog-machine-rgb',
    brand: 'EFEITO',
    name: 'Fog Machine 1500W DMX — RGB 24 LED',
    category: 'palco',
    desc: 'Máquina de fumos vertical de 1500W com 24 LEDs RGB integrados que iluminam o fumo em 7 cores. Depósito 2L com ejeção de 10.000 cfm. Operação por comando sem fios, DMX512 ou painel manual.',
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1514525253361-bee8a197c0c5?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '1500W', highlight: true },
      { label: '24 RGB LED', color: 'orange' },
      { label: '10.000 cfm' },
      { label: 'DMX512', color: 'blue' },
      { label: 'Tanque 2L' },
      { label: 'Comando S/Fios', color: 'green' }
    ],
    status: 'available'
  },
  {
    id: 'fogger-1500w-dmx',
    brand: 'EFEITO',
    name: 'Fogger 1500W DMX c/ Comando',
    category: 'palco',
    desc: 'Máquina de fumos profissional 1500W com controlo DMX e comando de acionamento manual. Aquecimento rápido, fumo denso de base aquosa. Ideal para concertos, teatro e eventos corporativos.',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '1500W', highlight: true },
      { label: 'DMX512', color: 'blue' },
      { label: 'Comando Manual' },
      { label: 'Base Aquosa', color: 'green' },
      { label: 'Aquec. Rápido' }
    ],
    status: 'available'
  },

  // ADEREÇOS & MODIFICADORES
  {
    id: 'godox-fl-sf6060',
    brand: 'GODOX',
    name: 'Softbox FL-SF6060 60×60cm',
    category: 'acessorios',
    desc: 'Softbox para o painel FL150S com interior prateado, difusor frontal removível e grid de tecido para luz direcional.',
    image: 'https://images.unsplash.com/photo-1589824783837-6169889fa20f?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '60x60cm', highlight: true },
      { label: 'Interior Prateado' },
      { label: 'Grid Incluído' }
    ],
    compat: 'Focos de LED Godox FL150S',
    status: 'available'
  },
  {
    id: 'godox-softbox-40cm',
    brand: 'GODOX',
    name: 'Softbox 40cm + Adaptador Godox-Mount',
    category: 'acessorios',
    desc: 'Softbox octogonal 40cm com adaptador Godox-Mount. Encaixe rápido sem ferramentas para luz suave em retratos e entrevistas.',
    image: 'https://images.unsplash.com/photo-1603115671151-5fd4c29c8e1a?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '40cm Octo', highlight: true },
      { label: 'Godox Mount' },
      { label: 'Montagem Rápida' }
    ],
    compat: 'Focos com encaixe Godox-Mount (ex. ML60II)',
    status: 'available'
  },
  {
    id: 'colbor-snoot',
    brand: 'COLBOR',
    name: 'Snoot — Concentrador de Feixe',
    category: 'acessorios',
    desc: 'Modifica o ângulo de emissão para feixe estreito. Ideal para destacar detalhes e criar efeitos dramáticos em estúdio.',
    image: 'https://images.unsplash.com/photo-1590608898129-79da98d15969?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'Snoot Ótico', highlight: true },
      { label: 'Cones de Luz' },
      { label: 'Efeitos Dramáticos' }
    ],
    compat: 'Aparelhos com Montagem Bowens (ex. CL100)',
    status: 'available'
  },
  {
    id: 'colbor-barndoor',
    brand: 'COLBOR',
    name: 'Barndoor — 4 Folhas Ajustáveis',
    category: 'acessorios',
    desc: 'Controla direção e recorte do feixe com quatro folhas. Evita flare e define o ângulo de cobertura com precisão cirúrgica.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '4 Folhas', highlight: true },
      { label: 'Recorte de Luz' },
      { label: 'Bowens Mount' }
    ],
    compat: 'Focos de estúdio com encaixe Bowens',
    status: 'available'
  },
  {
    id: 'difusor-panel',
    brand: 'UNIVERSAL',
    name: 'Difusor — Painel Translúcido',
    category: 'acessorios',
    desc: 'Suaviza e uniformiza a luz direta, reduzindo sombras duras. Essencial para retratos e filmagens com luz limpa e natural.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'Translúcido', highlight: true },
      { label: 'Suavização Direta' },
      { label: 'Multiusos' }
    ],
    compat: 'Painéis de iluminação LED e focos portáteis',
    status: 'available'
  },

  // SOON / EM PROCESSAMENTO - JANELAS PEDIDAS PELO UTILIZADOR
  {
    id: 'sony-fx3',
    brand: 'SONY',
    name: 'Câmara Cinema Line FX3',
    category: 'cameras_lenses',
    desc: 'Câmara de cinema ultra-compacta da linha Cinema Line da Sony. Sensor Full-Frame retroiluminado de 12.1 MP, captação 4K a 120p, S-Cinetone para um look cinematográfico premium e estabilização de imagem ativa.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'Full Frame', highlight: true },
      { label: '4K/120p' },
      { label: 'S-Cinetone', color: 'orange' },
      { label: '15 e.v. Lat.', color: 'purple' },
      { label: 'XLR Handle Include', color: 'blue' }
    ],
    status: 'coming_soon'
  },
  {
    id: 'lens-sony-2470',
    brand: 'SONY',
    name: 'FE 24-70mm f/2.8 GM II',
    category: 'cameras_lenses',
    desc: 'A lente zoom padrão G Master de nova geração. Nitidez extraordinária em toda a gama focal, abertura constante f/2.8, focagem ultrarrápida com motores lineares XD e design significativamente mais leve.',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'G Master', highlight: true },
      { label: 'f/2.8 Constante' },
      { label: 'XD Linear Motors', color: 'blue' },
      { label: 'Fluorine Coating' }
    ],
    status: 'coming_soon'
  },
  {
    id: 'dji-rs4-pro',
    brand: 'DJI',
    name: 'RS 4 Pro Gimbal Stabilizer',
    category: 'acessorios',
    desc: 'Estabilizador de 3 eixos de última geração para câmaras de cinema profissionais. Braços em fibra de carbono, bloqueio automático de eixos de 2ª geração, transmissão DJI Focus Pro integrada e algoritmo de estabilização otimizado.',
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '3 Eixos Carbon', highlight: true },
      { label: 'Carga útil 4.5kg' },
      { label: 'LiDAR Focus ready', color: 'green' },
      { label: 'Transmission System', color: 'blue' }
    ],
    status: 'coming_soon'
  },
  {
    id: 'sennheiser-avx',
    brand: 'SENNHEISER',
    name: 'Sistema Sem Fios AVX-ME2 Set',
    category: 'acessorios',
    desc: 'Microfone de lapela digital sem fios revolucionário para produções dinâmicas. Emparelhamento ultrarrápido, receção ultra-compacta XLR que roda para não estorvar a câmara, de operação totalmente automática e sem perdas de áudio.',
    image: 'https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'Lavalier Digital', highlight: true },
      { label: 'XLR Receiver', color: 'green' },
      { label: 'Automatic Gain', color: 'blue' },
      { label: '1.9 GHz Band' }
    ],
    status: 'coming_soon'
  },
  // CÂMARAS ADICIONAIS
  {
    id: 'sony-a6100',
    brand: 'SONY',
    name: 'Sony Alpha 6100',
    category: 'cameras_lenses',
    desc: 'Câmara Mirrorless APS-C ultra-rápida de 24.2 MP com foco automático em tempo real, gravação de vídeo 4K de alta qualidade e ecrã táctil inclinável a 180° ideal para vlogs e produções dinâmicas.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '24.2 MP', highlight: true },
      { label: 'Real-time AF', color: 'blue' },
      { label: '4K Video' },
      { label: 'APS-C' }
    ],
    status: 'available'
  },
  {
    id: 'panasonic-lumix-gx85',
    brand: 'PANASONIC',
    name: 'Panasonic Lumix GX85',
    category: 'cameras_lenses',
    desc: 'Câmara mirrorless compacta Micro Four Thirds de 16 MP. Integra estabilização de imagem dupla de 5 eixos na câmara e captação de foto/vídeo ultra-estável em 4K, com design de estilo telémetro prático para mobilidade.',
    image: 'https://images.unsplash.com/photo-1502920917128-1fc50ed76e7b?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '16 MP', highlight: true },
      { label: 'Dual I.S. 5-Axis', color: 'green' },
      { label: '4K UHD' },
      { label: 'Micro 4/3' }
    ],
    status: 'available'
  },
  {
    id: 'gopro-hero12-black',
    brand: 'GOPRO',
    name: 'GoPro Hero 12 Black',
    category: 'cameras_lenses',
    desc: 'A câmara de ação de referência. Qualidade de imagem soberba com suporte HDR de alta gama, estabilização de vídeo HyperSmooth 6.0 ultra award-winning e desempenho de bateria em voga para as gravações mais exigentes.',
    image: 'https://images.unsplash.com/photo-1565849906461-0ee4def1ad04?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '5.3K Video', highlight: true },
      { label: 'HyperSmooth 6.0', color: 'orange' },
      { label: 'HDR Capture' },
      { label: 'À prova d\'água' }
    ],
    status: 'available'
  },
  // ÁUDIO ADICIONAL
  {
    id: 'dji-mic-mini',
    brand: 'DJI',
    name: 'DJI Mic Mini',
    category: 'audio',
    desc: 'Sistema de microfone sem fios ultra-compacto e extremamente leve da DJI. Proporciona captação de voz cristalina de proximidade para criadores de conteúdos de vídeo com cancelamento ativo de ruído.',
    image: 'https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'Mini Sem Fios', highlight: true },
      { label: 'Cancelamento Ruído', color: 'blue' },
      { label: 'Ultra-leve' },
      { label: 'USB-C / Lightning' }
    ],
    status: 'available'
  },
  {
    id: 'rode-mic-conf',
    brand: 'RØDE',
    name: 'RØDE Microphone (modelo a confirmar)',
    category: 'audio',
    desc: 'Microfone condensador ou direccional de alta qualidade da RØDE para captação de voz refinada em estúdio ou em reportagem de campo. Modelo exato sob consulta técnica prévia.',
    image: 'https://images.unsplash.com/photo-1590608898129-79da98d15969?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'Sob Consulta', highlight: true },
      { label: 'Qualidade RØDE' },
      { label: 'Baixo Ruído' }
    ],
    status: 'coming_soon'
  },
  {
    id: 'zoom-h4',
    brand: 'ZOOM',
    name: 'Zoom H4 Recorder',
    category: 'audio',
    desc: 'Gravador de áudio digital portátil com quatro canais de gravação independentes com microfones X/Y de alta sensibilidade integrados e duas entradas combinadas de nível mic/linha/instrumento.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '4 Canais', highlight: true },
      { label: 'Stereo X/Y Built-in' },
      { label: 'Entradas XLR/TRS', color: 'green' },
      { label: '24-bit/96kHz' }
    ],
    status: 'available'
  },
  // DRONES ADICIONAIS
  {
    id: 'dji-mini-4k-combo',
    brand: 'DJI',
    name: 'DJI Mini 4K Fly More Combo',
    category: 'drones',
    desc: 'Drone ultra-leve de última geração de apenas 249g. Captação de vídeo de qualidade soberba em 4K, estabilização mecânica de 3 eixos e kit Fly More Combo especial com baterias adicionais e mala de transporte integrada.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '4K Ultra HD', highlight: true },
      { label: 'Sub-249g', color: 'green' },
      { label: 'Fly More Combo' },
      { label: '3-Axis Gimbal' }
    ],
    status: 'available'
  },
  {
    id: 'dji-mini-3-pro-combo',
    brand: 'DJI',
    name: 'DJI Mini 3 Pro Fly More Combo',
    category: 'drones',
    desc: 'O drone compacto profissional de referência com sensor avançado de 1/1.3 polegadas, gravação de vídeo até 4K a 60fps, autonomia alargada e sistema avançado de detecção ativa de obstáculos tridirecional.',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '4K/60fps', highlight: true },
      { label: 'Tri-Dir Obstacle', color: 'purple' },
      { label: 'True Vertical Shoot' },
      { label: 'Fly More Combo', color: 'blue' }
    ],
    status: 'available'
  },
  // ESTABILIZAÇÃO & SUPORTE ADICIONAL
  {
    id: 'zhiyun-crane-a2k',
    brand: 'ZHIYUN',
    name: 'Gimbal Zhiyun Crane A2k 2000C',
    category: 'acessorios',
    desc: 'Estabilizador gimbal de 3 eixos para câmaras mirrorless pesando até 2kg. Motores potentes para movimentos suaves, autonomia de 12 horas e configuração intuitiva para live tracking e passagens rápidas.',
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'Até 2kg', highlight: true },
      { label: '3-Axis stabilization' },
      { label: 'Autonomia 12h' }
    ],
    status: 'available',
    priceNew: '~320€',
    priceUsed: '170–220€',
    priceRentDay: '30',
    priceRentWeekend: '50'
  },
  {
    id: 'dji-rs3-mini',
    brand: 'DJI',
    name: 'DJI RS3 Mini (Novo)',
    category: 'acessorios',
    desc: 'Estabilizador de nível profissional ultra-leve com excelente portabilidade. Suporta eixos de libertação rápida, controlo direto por Bluetooth do obturador da câmara e algoritmo RS de 3ª geração extremamente ágil.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1200',
    specs: [
      { label: 'RS 3rd Gen', highlight: true },
      { label: 'Bluetooth Shutter', color: 'blue' },
      { label: 'Até 2kg Payload' },
      { label: '795g Peso', color: 'green' }
    ],
    status: 'available',
    priceNew: '~399€',
    priceUsed: '220–270€',
    priceRentDay: '38',
    priceRentWeekend: '62'
  },
  {
    id: 'tripes-conjunto',
    brand: 'UNIVERSAL',
    name: 'Conjunto de Tripés Profissionais',
    category: 'acessorios',
    desc: 'Kit modular completo de tripés de estúdio e de campo com cabeças fluidas robustas e estáveis para captação de vídeo e posicionamento de iluminação de alta precisão.',
    image: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'Cabeça Fluida', highlight: true },
      { label: 'Vídeo & Luzes' },
      { label: 'Kit Completo' }
    ],
    status: 'available',
    priceNew: '60–150€',
    priceUsed: '30–80€',
    priceRentDay: '10',
    priceRentWeekend: '18'
  },
  // OBJETIVAS ADICIONAIS
  {
    id: 'sigma-30mm-e',
    brand: 'SIGMA',
    name: 'Sigma 30mm f/1.4 DC DN Sony E',
    category: 'cameras_lenses',
    desc: 'Lente prime com abertura incrivelmente luminosa de f/1.4. Elevada qualidade ótica com um corpo altamente compacto, desenhada especificamente para câmaras Sony E-mount com foco rápido e silencioso.',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: 'f/1.4 Abertura', highlight: true },
      { label: '30mm Standard', color: 'blue' },
      { label: 'Sony E-Mount' },
      { label: 'Lente Prime' }
    ],
    status: 'available'
  },
  {
    id: 'sony-50mm-e',
    brand: 'SONY',
    name: 'Sony FE 50mm f/1.8',
    category: 'cameras_lenses',
    desc: 'Objetiva prime clássica de 50mm com abertura brilhante f/1.8. Oferece focagem precisa, profundidade de campo rasa ideal para retratos marcantes e fantástico bokeh de 7 lâminas circulares.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '50mm Portrait', highlight: true },
      { label: 'f/1.8 Bright' },
      { label: 'Full Frame' }
    ],
    status: 'available'
  },
  {
    id: 'sony-16-50mm-pz',
    brand: 'SONY',
    name: 'Sony E 16-50mm f/3.5-5.6 OSS PZ',
    category: 'cameras_lenses',
    desc: 'Lente zoom pancake retráctil e extremamente compacta. Dispõe de estabilização built-in Optical SteadyShot para fotos ultra-nítidas e zoom motorizado incrivelmente suave ideal para filmagens.',
    image: 'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '16-50mm Zoom', highlight: true },
      { label: 'Power Zoom' },
      { label: 'Optical SteadyShot' }
    ],
    status: 'available'
  },
  {
    id: 'lumix-45-200mm',
    brand: 'PANASONIC / LUMIX',
    name: 'Lumix G Vario 45-200mm f/4.0-5.6 II',
    category: 'cameras_lenses',
    desc: 'Objetiva telezoom robusta Micro Four Thirds com estabilização ótica Power O.I.S. avançada. Ideal para captação de ação remota e detalhes à distância com resistência a pó e salpicos.',
    image: 'https://images.unsplash.com/photo-1621371728956-656feeb94475?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '45-200mm Telephoto', highlight: true },
      { label: 'Power O.I.S.' },
      { label: 'Micro 4/3' }
    ],
    status: 'available'
  },
  {
    id: 'lumix-12-50mm',
    brand: 'PANASONIC / LUMIX',
    name: 'Lumix G Vario 12-50mm',
    category: 'cameras_lenses',
    desc: 'Objetiva zoom standard versátil para câmaras Micro Four Thirds. Excelente gama focal para paisagem e retrato, com mecanismo de zoom inteligente motorizado.',
    image: 'https://images.unsplash.com/photo-1502920917128-1fc50ed76e7b?auto=format&fit=crop&q=80&w=600',
    specs: [
      { label: '12-50mm Zoom', highlight: true },
      { label: 'Standard Zoom' },
      { label: 'Micro 4/3' }
    ],
    status: 'coming_soon'
  }
];

export const RentalTab: React.FC<RentalTabProps> = ({ client }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'luzes' | 'palco' | 'acessorios' | 'cameras_lenses' | 'audio' | 'drones'>('all');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'coming_soon'>('all');

  const filteredItems = RENTAL_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesSearch = 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <motion.div
      key="rental"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12"
    >
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-900">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold">Catálogo de Equipamento</p>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-2">Rental & Inventário</h2>
          <p className="text-zinc-500 text-xs">Consulta o material disponível para aluguer e produções da Project Media</p>
        </div>
        
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="bg-zinc-950 border border-zinc-900 px-4 py-2 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-zinc-400">Canal Seguro</span>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-zinc-950 p-4 rounded-2xl border border-zinc-900">
        <div className="relative flex-grow max-w-md">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
          <input
            type="text"
            placeholder="Procurar equipamento (marca, nome, etc)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-700 pl-11 pr-4 py-2.5 rounded-xl text-xs text-white focus:outline-none transition-all placeholder:text-zinc-600"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold shrink-0">Estado:</span>
          <div className="flex bg-zinc-900 rounded-xl p-1 border border-zinc-800">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1 text-[9px] uppercase tracking-widest font-bold rounded-lg transition-all ${
                statusFilter === 'all' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setStatusFilter('available')}
              className={`px-3 py-1 text-[9px] uppercase tracking-widest font-bold rounded-lg transition-all ${
                statusFilter === 'available' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'
              }`}
            >
              Disponível
            </button>
            <button
              onClick={() => setStatusFilter('coming_soon')}
              className={`px-3 py-1 text-[9px] uppercase tracking-widest font-bold rounded-lg transition-all ${
                statusFilter === 'coming_soon' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'
              }`}
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORY SELECTOR */}
      <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none">
        {[
          { id: 'all', label: 'Todos', icon: Package },
          { id: 'luzes', label: 'Luzes Estúdio', icon: Lightbulb },
          { id: 'palco', label: 'Palco & Show', icon: Zap },
          { id: 'cameras_lenses', label: 'Câmaras & Lentes', icon: Video },
          { id: 'audio', label: 'Áudio', icon: Mic },
          { id: 'drones', label: 'Drones', icon: Plane },
          { id: 'acessorios', label: 'Acessórios', icon: Cpu }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl border text-xs capitalize tracking-wider font-medium transition-all shrink-0 ${
              activeCategory === cat.id 
                ? 'bg-white text-black border-white font-bold scale-[1.02]' 
                : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800'
            }`}
          >
            <cat.icon size={14} />
            {cat.label}
          </button>
        ))}
      </div>

      {/* GRID LISTING */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className={`bg-zinc-950 border rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 ${
              item.status === 'coming_soon'
                ? 'border-dashed border-zinc-800 opacity-85 hover:opacity-100 hover:border-zinc-700'
                : 'border-zinc-900 hover:border-zinc-700 hover:shadow-[0_12px_44px_rgba(0,0,0,0.6)]'
            }`}
          >
            {/* ITEM IMAGE */}
            <div className="relative aspect-video bg-zinc-900 overflow-hidden flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.03] opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* ACCENT BADGE OR QUANTITY */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-black/90 text-white text-[8px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full border border-white/10">
                  {item.brand}
                </span>
                {item.quantity && (
                  <span className="bg-zinc-900 text-zinc-400 text-[8px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full border border-zinc-800">
                    Qtd: {item.quantity}
                  </span>
                )}
              </div>

              {/* STATUS OVERLAY BADGE */}
              <div className="absolute top-4 right-4">
                {item.status === 'coming_soon' ? (
                  <span className="bg-orange-600/30 text-orange-400 text-[8px] uppercase tracking-[0.2em] font-extrabold px-3 py-1 rounded-full border border-orange-500/20 flex items-center gap-1.5 animate-pulse">
                    <Hourglass size={10} />
                    Em Processamento
                  </span>
                ) : (
                  <span className="bg-green-500/20 text-green-400 text-[8px] uppercase tracking-[0.2em] font-extrabold px-3 py-1 rounded-full border border-green-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Disponível
                  </span>
                )}
              </div>
            </div>

            {/* ITEM INFO */}
            <div className="p-6 flex-grow flex flex-col gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1">{item.brand}</p>
                <h3 className="text-sm font-bold tracking-wide text-white group-hover:text-zinc-300 transition-colors line-clamp-1">
                  {item.name}
                </h3>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-serif line-clamp-3">
                {item.desc}
              </p>

              {(item.priceNew || item.priceUsed || item.priceRentDay || item.priceRentWeekend) && (
                <div className="mt-2 bg-zinc-900/30 border border-zinc-900/60 rounded-xl p-3 space-y-2">
                  <div className="flex justify-between items-center text-[8px] uppercase tracking-wider text-zinc-500 border-b border-zinc-900/60 pb-1 font-bold">
                    <span>Categoria de Preço</span>
                    <span>Valor</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
                    {item.priceNew && (
                      <div className="flex justify-between items-center border-r border-zinc-900/40 pr-1.5">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Novo:</span>
                        <span className="font-mono text-zinc-400">{item.priceNew}</span>
                      </div>
                    )}
                    {item.priceUsed && (
                      <div className="flex justify-between items-center pl-1.5">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Usado:</span>
                        <span className="font-mono text-zinc-400">{item.priceUsed}</span>
                      </div>
                    )}
                    {item.priceRentDay && (
                      <div className="flex justify-between items-center border-r border-zinc-900/40 pr-1.5 pt-1 mt-1 border-t border-zinc-900/20">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Dia:</span>
                        <span className="font-mono text-[#c9a84c] font-bold">{item.priceRentDay}€</span>
                      </div>
                    )}
                    {item.priceRentWeekend && (
                      <div className="flex justify-between items-center pl-1.5 pt-1 mt-1 border-t border-zinc-900/20">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest">F.S.:</span>
                        <span className="font-mono text-[#c9a84c] font-bold">{item.priceRentWeekend}€</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {item.compat && (
                <div className="mt-1 bg-zinc-900/50 p-2.5 rounded-xl text-[10px] text-zinc-500 border border-zinc-900/80">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider block mb-0.5 text-[8px]">Compatibilidade:</span>
                  {item.compat}
                </div>
              )}

              {/* SPECS TAGS */}
              <div className="mt-auto pt-4 border-t border-zinc-900 flex flex-wrap gap-1.5">
                {item.specs.map((spec, sidx) => (
                  <span
                    key={sidx}
                    className={`text-[8.5px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full ${
                      spec.highlight 
                        ? 'bg-white text-black' 
                        : spec.color === 'blue'
                        ? 'bg-blue-600/10 text-blue-400 border border-blue-500/10'
                        : spec.color === 'green'
                        ? 'bg-green-600/10 text-green-400 border border-green-500/10'
                        : spec.color === 'orange'
                        ? 'bg-orange-600/10 text-orange-400 border border-orange-500/10'
                        : spec.color === 'purple'
                        ? 'bg-purple-600/10 text-purple-400 border border-purple-500/10'
                        : 'bg-zinc-900 text-zinc-500 border border-zinc-800'
                    }`}
                  >
                    {spec.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RENTAL CTA NOTICE */}
      <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-3xl text-center max-w-2xl mx-auto space-y-4">
        <HelpCircle size={32} className="mx-auto text-zinc-600 animate-bounce" />
        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Necessitas de Reservar ou Tens Dúvidas?</h4>
        <p className="text-xs text-zinc-500 leading-relaxed max-w-md mx-auto">
          Este catálogo é para efeitos de verificação interna de inventário. Caso queiras reservar algum equipamento ou sugerir aditamentos ao nosso stock, pf entra em contacto direto por email.
        </p>
        <div className="pt-2">
          <a
            href="mailto:geral@projectmediainc.com?subject=Pedido de Aluguer / Feedback Inventário"
            className="inline-block bg-white hover:bg-zinc-200 text-black px-6 py-3 rounded-xl text-[10px] uppercase tracking-[0.3em] font-extrabold shadow-lg transition-all"
          >
            Solicitar Aluguer Equips →
          </a>
        </div>
      </div>
    </motion.div>
  );
};
