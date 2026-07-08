import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';

const GALLERY = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=1200"
];

export const BatizadoJorgeDetail: React.FC = () => {
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
          src={GALLERY[0]} 
          className="w-full h-full object-cover opacity-60"
          alt="O Meu Batizado - Jorge"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-12 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4">Event / 2024</p>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter mb-4">O Meu Batizado — Jorge</h1>
          <div className="w-16 h-px bg-white/30 mt-6"></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Descriptions */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">A Celebração</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                O batismo do Jorge foi um momento de profunda espiritualidade e união familiar. A cerimónia, realizada num ambiente de serenidade e luz, marcou o início de uma nova jornada, celebrada com amor por todos os presentes. Cada gesto, cada olhar e cada detalhe foram capturados para preservar a pureza deste dia inesquecível.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">Documentação Cinematográfica</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                A nossa abordagem foca-se na naturalidade e na emoção genuína. Através de uma linguagem cinematográfica, transformamos a documentação do evento numa narrativa visual que respira a atmosfera sagrada da igreja e a alegria da receção, garantindo que as memórias deste batizado sejam guardadas com a dignidade e a beleza que merecem.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-900 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Role</p>
                <p className="text-sm uppercase tracking-wide">Cinematography & Photography</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Year</p>
                <p className="text-sm uppercase tracking-wide">2024</p>
              </div>
            </div>
          </div>

          {/* Right: Video */}
          <div className="lg:col-span-7 space-y-12">
            {/* Video Section */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 font-bold flex items-center">
                <Play size={14} className="mr-2" /> Filme do Batizado
              </h3>
              <div className="aspect-video w-full bg-zinc-900 overflow-hidden border border-zinc-800 shadow-2xl">
                <iframe 
                  src="https://www.youtube.com/embed/K0voKVqD7Ys" 
                  className="w-full h-full"
                  title="O Meu Batizado - Jorge"
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
         <p className="font-serif italic text-zinc-500 mb-4">Project Media Inc. — O Meu Batizado</p>
         <Link to="/projects" className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 hover:text-white transition-colors">
           Voltar ao Catálogo
         </Link>
      </footer>
    </div>
  );
};
