
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../src/data/projects';
import { ArrowLeft, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FestivalOrgaoDetail } from './FestivalOrgaoDetail';
import { Festival48hDetail } from './Festival48hDetail';
import { AereonowDetail } from './AereonowDetail';
import { GMArquiteturaDetail } from './GMArquiteturaDetail';
import { PontoPtDetail } from './PontoPtDetail';
import { BatizadoJorgeDetail } from './BatizadoJorgeDetail';
import { GenderRevealDetail } from './GenderRevealDetail';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (project?.slug === 'gender-reveal-tea-party') {
    return <GenderRevealDetail />;
  }

  if (project?.slug === 'festival-orgao-braga') {
    return <FestivalOrgaoDetail />;
  }

  if (project?.slug === 'festival-48h') {
    return <Festival48hDetail />;
  }

  if (project?.slug === 'aereonow') {
    return <AereonowDetail />;
  }

  if (project?.slug === 'gm-arquitetura') {
    return <GMArquiteturaDetail />;
  }

  if (project?.slug === 'ponto-pt') {
    return <PontoPtDetail />;
  }

  if (project?.slug === 'batizado-jorge') {
    return <BatizadoJorgeDetail />;
  }

  if (!project) return <div className="h-screen flex items-center justify-center font-serif text-3xl">Work Not Found.</div>;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % project.stills.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + project.stills.length) % project.stills.length);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Lightbox / Carousel Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>
          
          <div className="max-w-6xl max-h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img 
              src={project.stills[selectedImageIndex]} 
              className="w-full h-full object-contain select-none"
              alt={`Still ${selectedImageIndex + 1}`}
            />
          </div>

          <button 
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-8 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            {selectedImageIndex + 1} / {project.stills.length}
          </div>
        </div>
      )}

      {/* Hero Header */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src={project.coverImage} 
          className="w-full h-full object-cover opacity-70"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-12 max-w-4xl">
          <Link to="/projects" className="flex items-center text-xs uppercase tracking-widest text-zinc-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Back to Catalog
          </Link>
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4">{project.type} / {project.year}</p>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter mb-4">{project.title}</h1>
        </div>
      </section>

      {/* Information & Stills */}
      {project.slug === 'sao-jose-2026' ? (
        <>
          {/* Video First */}
          {project.videoUrl && (
            <section className="pt-16 pb-12 px-6 md:px-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <h3 className="text-xs uppercase tracking-widest text-zinc-600">Video Content</h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/10 px-3 py-1 rounded">Documentary Feature</span>
                </div>
                <div className="aspect-video w-full bg-zinc-950 overflow-hidden border border-zinc-800 rounded-xl shadow-2xl">
                  <iframe 
                    src={project.videoUrl} 
                    className="w-full h-full"
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </section>
          )}

          {/* Synopsis (Texto) Second */}
          <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-900">
            <div className="md:col-span-8">
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">The Synopsis</h3>
              <p className="text-xl font-light leading-relaxed text-zinc-300 whitespace-pre-line">
                {project.synopsis}
              </p>
            </div>
            <div className="md:col-span-4 space-y-8 pt-2">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Role</p>
                  <p className="text-sm uppercase tracking-wide">{project.role}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Released</p>
                  <p className="text-sm uppercase tracking-wide">{project.year}</p>
                </div>
              </div>
              {project.albumUrl && (
                <div className="pt-4 border-t border-zinc-900">
                  <a 
                    href={`mailto:geral@projectmediainc.com?subject=Solicitação de Acesso ao Álbum: ${project.title}&body=Gostaria de solicitar o acesso para visualizar o álbum completo do projeto ${project.title}.`}
                    className="flex items-center justify-center space-x-4 bg-[#c9a84c] text-black px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-[#b0913b] transition-colors w-full"
                  >
                    <span>Solicitar Acesso ao Álbum</span>
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* Stills (Fotos) Third */}
          {project.stills && project.stills.length > 0 && (
            <section className="py-12 pb-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-zinc-900">
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-8 font-bold">Still Frames</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.stills.map((still, idx) => (
                  <div 
                    key={idx} 
                    className="group relative bg-zinc-900 aspect-video overflow-hidden cursor-pointer rounded-lg border border-zinc-900"
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img 
                      src={still} 
                      alt={`${project.title} Still ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="py-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6">The Synopsis</h3>
              <p className="text-xl font-light leading-relaxed text-zinc-300 whitespace-pre-line">
                {project.synopsis}
              </p>
            </div>
            
            <div className="pt-8 border-t border-zinc-900 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Role</p>
                <p className="text-sm uppercase tracking-wide">{project.role}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Released</p>
                <p className="text-sm uppercase tracking-wide">{project.year}</p>
              </div>
            </div>

            <div className="pt-12">
              {project.albumUrl && (
                <div className="mb-8">
                  <a 
                    href={`mailto:geral@projectmediainc.com?subject=Solicitação de Acesso ao Álbum: ${project.title}&body=Gostaria de solicitar o acesso para visualizar o álbum completo do projeto ${project.title}.`}
                    className="flex items-center justify-center space-x-4 bg-[#c9a84c] text-black px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#b0913b] transition-colors w-full md:w-auto"
                  >
                    <span>Solicitar Acesso ao Álbum</span>
                  </a>
                </div>
              )}
              {project.stills && project.stills.length > 0 ? (
                project.videoUrl ? (
                  <div className="space-y-6">
                    <h3 className="text-xs uppercase tracking-widest text-zinc-600">Video Content</h3>
                    <div className="aspect-video w-full bg-zinc-900 overflow-hidden border border-zinc-800">
                      <iframe 
                        src={project.videoUrl} 
                        className="w-full h-full"
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ) : (
                  <button className="flex items-center space-x-4 bg-white text-black px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-zinc-200 transition-colors">
                    <Play size={16} fill="black" />
                    <span>Request Preview</span>
                  </button>
                )
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {project.stills && project.stills.length > 0 ? (
              <>
                <h3 className="text-xs uppercase tracking-widest text-zinc-600">Still Frames</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.stills.map((still, idx) => (
                    <div 
                      key={idx} 
                      className="group relative bg-zinc-900 aspect-video overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImageIndex(idx)}
                    >
                      <img 
                        src={still} 
                        alt={`${project.title} Still ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              project.videoUrl && (
                <div className="space-y-6">
                  <h3 className="text-xs uppercase tracking-widest text-zinc-600">Project Video</h3>
                  <div className="aspect-video w-full bg-zinc-950 overflow-hidden border border-zinc-800 rounded-xl shadow-2xl">
                    <iframe 
                      src={project.videoUrl} 
                      className="w-full h-full"
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* Up Next */}
      <section className="py-32 bg-zinc-950 border-t border-zinc-900 flex flex-col items-center justify-center text-center">
        <p className="text-xs uppercase tracking-widest text-zinc-600 mb-8">Next Piece</p>
        <Link 
          to={`/project/${PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].slug}`}
          className="group"
        >
          <h2 className="text-4xl md:text-7xl font-serif italic group-hover:text-zinc-500 transition-colors duration-500">
            {PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].title}
          </h2>
          <div className="mt-8 overflow-hidden h-px w-0 group-hover:w-full bg-white transition-all duration-700 mx-auto"></div>
        </Link>
      </section>
    </div>
  );
};

export default ProjectDetail;
