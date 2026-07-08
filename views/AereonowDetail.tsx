import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY = [
  "https://lh3.googleusercontent.com/pw/AP1GczN6LoOaqSBsQLhUIw2wAl1i5i6bOMWyTJE_l_6Smjcm4nlPVPStpm7tuBUavkPSwAPXAbJ8hyEjgaLXaJxDXKVOemEzqi2CfLrQYKgl4h6t5Q88jy98ipKQ08WLvWmVAyO9XAmmPqHDOO7nHDuT8jDkMg=w1436-h957-s-no-gm?authuser=0",
  "https://photos.fife.usercontent.google.com/pw/AP1GczN9rJbTNJF6q3_6VnMKd__7yOTZQD-FSd-KAP9VS4fAmCIJxxPTfjBKkA=w638-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMZY3Ync8lpg5zTJStgEJjbaNWly5STxbIyiqO9_Ga5uwmP-D4tWelTejtjmds3ikZ7pptj8No-EtcDvo4WVm_zPcP7LCoKxefuGRGXu7Q0_T3J6H0Gp5vLppAKAo4BPnbnfnF7NPiUqYgXscfGAV2dZQ=w1436-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMYto_xnRk9WZ80xV7tNSvelZ3f6YVPJgsWv175pqXQIRNlsnMIjWSCgR5CDopzRWuiVYLFd0D8bDVnUr4UqCbPkAT2eKomB1tTyEqnQpJ29lejZpNsH8spSfg3yxZ3EmFYlNptTBlm1blekNmnsHzBLA=w1436-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPe8fFWUf3f1-Xqc6QWHubKwOE5CID_fao_4te-FfWSk5uxYWk0Y3tyaw_QfFtKAFJdkxzyhtSKmiEgjoYL1TVdvfFRpkeVNY2PhftTUQQezFZ9LMjb7nQhybpn5z6xY09vZmXdz2iMqT52HEM2iS5w9g=w638-h957-s-no-gm?authuser=0"
];

export const AereonowDetail: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % GALLERY.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + GALLERY.length) % GALLERY.length);
    }
  };

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
          src={GALLERY[0]} 
          className="w-full h-full object-cover opacity-60"
          alt="Aereonow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-12 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4">Commercial / 2023</p>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter mb-4">Aereonow</h1>
          <div className="w-16 h-px bg-white/30 mt-6"></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Descriptions */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">A Empresa</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                A Aereonow é uma referência no setor da aviação privada, oferecendo serviços premium que incluem gestão de aeronaves, charter e consultoria. Com um foco inabalável na segurança, eficiência e personalização, a empresa proporciona experiências de viagem exclusivas para clientes que valorizam o seu tempo e o máximo conforto.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">A Parceria</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                A Project Media Inc. desenvolve uma campanha publicitária contínua para a Aereonow, capturando todos os momentos e detalhes que definem o serviço de excelência da marca. O nosso objetivo é traduzir a experiência de voar com a Aereonow em conteúdos visuais de alto impacto, reforçando o posicionamento de luxo e sofisticação da empresa no mercado global.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-900 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Role</p>
                <p className="text-sm uppercase tracking-wide">Continuous Advertising Campaign</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Year</p>
                <p className="text-sm uppercase tracking-wide">2023</p>
              </div>
            </div>
          </div>

          {/* Right: Video & Gallery */}
          <div className="lg:col-span-7 space-y-12">
            {/* Video Section */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 font-bold flex items-center">
                <Play size={14} className="mr-2" /> Campanha Publicitária
              </h3>
              <div className="aspect-video w-full bg-zinc-900 overflow-hidden border border-zinc-800 shadow-2xl">
                <iframe 
                  src="https://www.youtube.com/embed/OelRFDDDF8c" 
                  className="w-full h-full"
                  title="Aereonow Campaign"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Gallery */}
            <div className="pt-12">
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-8 font-bold">Galeria de Imagens</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {GALLERY.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedPhoto(idx)}
                    className="aspect-[4/3] bg-zinc-900 overflow-hidden cursor-pointer group"
                  >
                    <img 
                      src={img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                      alt={`Aereonow ${idx}`} 
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors" onClick={() => setSelectedPhoto(null)}>
            <X size={32} />
          </button>
          
          <button className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors" onClick={prevPhoto}>
            <ChevronLeft size={48} />
          </button>
          
          <div className="max-w-6xl max-h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[selectedPhoto]} className="w-full h-full object-contain" alt="Aereonow Gallery" />
          </div>

          <button className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors" onClick={nextPhoto}>
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-8 text-[10px] uppercase tracking-widest text-zinc-500">
            {selectedPhoto + 1} / {GALLERY.length}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-24 bg-zinc-950 border-t border-zinc-900 text-center">
         <p className="font-serif italic text-zinc-500 mb-4">Project Media Inc. & Aereonow</p>
         <Link to="/projects" className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 hover:text-white transition-colors">
           Voltar ao Catálogo
         </Link>
      </footer>
    </div>
  );
};
