import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Globe, Instagram, Facebook, Youtube } from 'lucide-react';

const COVER_IMAGE = "https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&q=80&w=1700";

export const GenderRevealDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Navigation */}
      <div className="fixed top-32 left-6 md:left-12 z-40">
        <Link to="/projects" className="flex items-center text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft size={14} className="mr-2" /> Back to Catalog
        </Link>
      </div>

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={COVER_IMAGE} 
          className="w-full h-full object-cover opacity-60"
          alt="Gender Reveal Tea Party"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-12 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4">Event & Brand Experience / 2026</p>
          <h1 className="text-4xl md:text-7xl font-serif tracking-tighter mb-4">Gender Reveal Tea Party</h1>
          <p className="text-sm uppercase tracking-widest text-[#c9a84c] font-semibold">Em parceria com Aereonow</p>
          <div className="w-16 h-px bg-white/30 mt-6"></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Descriptions */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">O Conceito</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                O "Gender Reveal Tea Party" foi uma experiência de puro requinte e originalidade desenvolvida em estreita colaboração com a <strong>Aereonow</strong>. Afastando-se dos formatos convencionais, o evento decorreu na envolvência de um hangar privado de alta gama, fundindo a intimidade de um requintado chá das cinco de inspiração britânica com o elemento cativante e surpresa proporcionado pelo setor aeronáutico.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">Sobre a Aereonow</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                A <strong>Aereonow</strong> é sinónimo de prestígio, rigor e excelência na aviação executiva e privada em Portugal. O seu portfólio de serviços abrange viagens de negócios personalizadas, charter corporativo, manutenção e assessoria aérea integrada com elevados níveis de segurança e sofisticação. 
              </p>
              <div className="mt-6">
                <a 
                  href="https://www.aereonow.com/site/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c9a84c] hover:text-white transition-colors"
                >
                  <Globe size={14} /> Visitar Site Oficial Aereonow
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8 border-t border-zinc-900/80">
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-4 font-bold">Aereonow nas Redes Sociais</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.instagram.com/AereoNowPT" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-xl transition-all hover:text-white text-zinc-400"
                >
                  <Instagram size={14} className="text-pink-500" />
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/AereoNowPT/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-xl transition-all hover:text-white text-zinc-400"
                >
                  <Facebook size={14} className="text-blue-500" />
                  Facebook
                </a>
                <a 
                  href="https://www.youtube.com/@AEREONOW" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-xl transition-all hover:text-white text-zinc-400"
                >
                  <Youtube size={14} className="text-red-500" />
                  YouTube
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-900/80 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2 font-bold">Role</p>
                <p className="text-sm uppercase tracking-wide text-zinc-300">Visual & Cinematic Production</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2 font-bold font-serif">Year</p>
                <p className="text-sm uppercase tracking-wide text-zinc-300">2026</p>
              </div>
            </div>
          </div>

          {/* Right: Video */}
          <div className="lg:col-span-7 space-y-12">
            {/* Visual Stills / Production */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 font-bold flex items-center">
                <Play size={14} className="mr-2" /> Filme do Evento
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Para este projeto singular de branding e live documentation, criámos uma atmosfera cinematográfica de corte minimalista, utilizando filtros quentes que realçam a opulência e ao mesmo tempo a simplicidade calorosa de um evento familiar no seio de um ecossistema aeronáutico sofisticado. Assista ao filme oficial do evento abaixo:
              </p>
              <div className="aspect-video w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                <iframe 
                  src="https://www.youtube.com/embed/3px9d_7RUDA" 
                  className="w-full h-full"
                  title="Gender Reveal Tea Party - Filme Oficial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-zinc-950 border-t border-zinc-900 text-center">
         <p className="font-serif italic text-zinc-500 mb-4">Project Media Inc. & Aereonow — Gender Reveal Tea Party</p>
         <Link to="/projects" className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 hover:text-white transition-colors">
           Voltar ao Catálogo
         </Link>
      </footer>
    </div>
  );
};
