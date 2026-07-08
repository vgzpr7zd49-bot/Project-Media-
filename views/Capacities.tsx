
// Recommended Title Tag: Serviços e Pacotes · Project Media | Cobertura de Eventos
import React from 'react';
import { CAPACITIES } from '../src/data/projects';

const Capacities: React.FC = () => {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <header className="px-6 md:px-12 mb-24 max-w-4xl">
        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-6">Capabilities</p>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter">Editorial Edge.</h1>
        <p className="text-xl text-zinc-400 font-light max-w-xl">
          We bring a feature-film mentality to every creative challenge. Our capacities are defined by narrative intention and strategic impact.
        </p>
      </header>

      <div className="space-y-32 px-6 md:px-12 pb-32">
        {CAPACITIES.map((capacity, idx) => (
          <div 
            key={capacity.id} 
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
          >
            <div className="w-full md:w-1/2 aspect-square md:aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <img src={capacity.image} alt={capacity.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-zinc-600 text-xs font-mono">0{idx + 1} //</span>
              <h2 className="text-4xl md:text-5xl font-serif">{capacity.title}</h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
                {capacity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capacities;
