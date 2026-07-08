
// Recommended Title Tag: Portfólio de Eventos · Project Media | Casamentos e Empresas
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../src/data/projects';

const Projects: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <header className="px-6 md:px-12 mb-24 max-w-5xl">
        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-6">Catalog</p>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter">Selected Works.</h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
          An editorial selection of cinematic endeavors. We treat every project as a piece of art, from strategic campaigns to documentary features.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
        {PROJECTS.map((project) => (
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
