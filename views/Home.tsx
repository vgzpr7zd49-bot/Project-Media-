
// Recommended Title Tag: Project Media · Cinema as Language | Fotografia e Vídeo Porto
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../src/data/projects';
import { ArrowDown } from 'lucide-react';
import { InstagramFeed } from '../src/components/InstagramFeed';
import { ClientsMarquee } from '../src/components/ClientsMarquee';

const Home: React.FC = () => {
  const featured = PROJECTS.filter(p => p.isFeatured);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
            alt="Cinema Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif mb-8 tracking-tighter animate-in fade-in duration-1000">
            Cinema as Language.
          </h1>
          <p className="text-lg md:text-2xl font-light text-zinc-300 uppercase tracking-[0.3em] animate-in slide-in-from-bottom duration-1000 delay-300">
            Strategy as Foundation.
          </p>
        </div>

        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <ArrowDown className="animate-bounce text-zinc-500" />
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-serif text-white">5+</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">Anos de Experiência</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-serif text-white">200+</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">Projetos Realizados</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-serif text-white">1M+</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">Visualizações</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-serif text-white">10+</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">Prémios Internacionais</p>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 px-6 md:px-12 bg-black flex justify-center">
        <div className="max-w-4xl text-center space-y-12">
          <p className="text-zinc-500 text-xs uppercase tracking-widest">A Project Media Inc Vision</p>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            We don't build commercials. We construct culture. Our works speak first, our brand sustains, and our strategy converts.
          </h2>
          <div className="pt-8">
            <Link to="/vision" className="text-xs uppercase tracking-[0.2em] border-b border-white pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-all">
              Discover our DNA
            </Link>
          </div>
        </div>
      </section>

      <ClientsMarquee />

      {/* Featured Works */}
      <section className="py-32 bg-zinc-950">
        <div className="px-6 md:px-12 mb-16 flex justify-between items-end">
          <div>
            <p className="text-zinc-600 text-xs uppercase tracking-widest mb-4">Featured Projects</p>
            <h3 className="text-4xl font-serif italic">Recent Works</h3>
          </div>
          <Link to="/projects" className="text-xs uppercase tracking-widest hover:text-zinc-400 transition-colors">
            View Catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {featured.map((project) => (
            <Link 
              key={project.id} 
              to={`/project/${project.slug}`}
              className="group relative h-[70vh] overflow-hidden"
            >
              <img 
                src={project.coverImage} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                alt={project.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex flex-col justify-end p-8 md:p-12">
                <p className="text-xs uppercase tracking-widest text-zinc-300 mb-2">{project.type} — {project.year}</p>
                <h4 className="text-4xl md:text-6xl font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h4>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="text-xs uppercase tracking-[0.2em] border-b border-white pb-1">See Work</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-16">
          <p className="text-zinc-600 text-xs uppercase tracking-widest">Testemunhos</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            <div className="space-y-6">
              <p className="text-xl font-light leading-relaxed text-zinc-300 italic">
                "A Project Media não apenas grava vídeos, eles capturam a alma do evento. A estratégia visual foi fundamental para o sucesso da nossa campanha."
              </p>
              <div>
                <p className="text-sm font-semibold text-white">Diretor de Marketing</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Banda de Arnoso</p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-xl font-light leading-relaxed text-zinc-300 italic">
                "Trabalhar com esta equipa é garantia de excelência. O olhar cinematográfico que trazem para projetos corporativos é inigualável."
              </p>
              <div>
                <p className="text-sm font-semibold text-white">CEO</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Porto Fashion Week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstagramFeed />
    </div>
  );
};

export default Home;

