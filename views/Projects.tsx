
// Recommended Title Tag: Portfólio de Eventos · Project Media | Casamentos e Empresas
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../src/data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'cinema', label: 'Cinema' },
    { id: 'documental', label: 'Documental' },
    { id: 'corporativo', label: 'Corporativo' },
    { id: 'fotografia', label: 'Fotografia' },
    { id: 'social', label: 'Social/Conteúdo' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'cinema') return project.type === 'Feature' || project.type === 'Short Film';
    if (activeFilter === 'documental') return project.type === 'Documentary';
    if (activeFilter === 'corporativo') return project.type === 'Commercial' || project.type === 'Strategic Campaign';
    if (activeFilter === 'fotografia') return project.type === 'Photography';
    if (activeFilter === 'social') return project.category === 'social' || project.type === 'Social/Conteúdo';
    return true;
  });

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <header className="px-6 md:px-12 mb-16 max-w-5xl">
        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-6">Catalog</p>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter">Selected Works.</h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
          An editorial selection of cinematic endeavors. We treat every project as a piece of art, from strategic campaigns to documentary features.
        </p>
      </header>

      {/* Filters Bar */}
      <div className="px-6 md:px-12 mb-16 flex flex-wrap gap-2.5 font-sans text-[10px] tracking-widest uppercase">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-3 border transition-all duration-300 font-bold ${
              activeFilter === filter.id
                ? 'bg-white text-black border-white'
                : 'border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-700'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
        {filteredProjects.map((project) => (
          <Link 
            key={project.id} 
            to={`/project/${project.slug}`}
            className="group relative aspect-[3/4] overflow-hidden bg-zinc-900"
          >
            <img 
              src={project.coverImage} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              alt={project.title}
              loading="lazy"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2">{project.type}</p>
              <h3 className="text-2xl font-serif">{project.title}</h3>
              <p className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">{project.year}</p>
            </div>
            
            {/* Visual labels style NEON/A24 */}
            <div className="absolute top-6 right-6 border border-white/20 px-3 py-1 text-[9px] uppercase tracking-widest backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
              {project.type}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
