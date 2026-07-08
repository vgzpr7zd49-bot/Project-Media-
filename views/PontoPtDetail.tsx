import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const GALLERY = [
  "https://lh3.googleusercontent.com/pw/AP1GczMF5aKQSmFMu8mEy8hObUQh67x0xkfLznsdoQzgdvmyGjann_z6m0ShaSP7PvHYO1GqrR0dK0c0p3pWK9KhIaLU_Vm0Oc2U4J0HCVYvQ6mcMaZAadmRYvaYZjxZ5tWqTte9EUAXjIcoH653qGkdXOhtnQ=w638-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOWryWKhbODadK_jpDEAspjSDSDuFEkMzQLxtLo40TUPDOIApexmtuV-ktFGABb8fP8ZMFH8_zWvBH4XkwK3a6q4hK8NNKeODkcyFSXWfUT_ecmTzYBDwkJkeKw-v94gVEzXqjBY_jS8wm-q9vp-cHh0w=w638-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNSQGFRmt0weseawNzPPd419JCc9Pd2XQVNJjaanvNc2kjhG9MD6-PEJm6d6z461nrl_0g9tmYBDj4OeeJYyr6VisyHJeqHqbsEVPZ0hDfeT01LzEDZedt8g6D8owjOuXdZ_VzkU-APKFQ6mF4DPGzl2A=w633-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOCtLGdgflsezYSwO733_Wo0c7C3_xOQMSzcPn8ew9ysajCNGUJ1R2Jum1RS7TuqaFbGG0nsf5AzFvszx_Lp4bgAleKGf9yzeazNcTpb_YuTmpbl0Q4jX5a6QyVHrH0S2Xs89ZshnZnXnbqI7XndLfUHA=w633-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMhfj5efvHSuKxrQ1_CMIRt2mDdto2v7B79ry_yOJ2cSW_EpyR1nangeLV2w_-0w6vTGi7Y9qYZXUUYYI9Q51Arz-5Nh4TTyoeuYrJWPKw_9Dz0uISdNoXxnA0WwF57eOYZy_26wxHMKz0r8Po1l5JfaQ=w1435-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOz_DYL6pKOs5dJiSXrxiVSrW2wEI59YXobU5N5CcF_heWRbgkB4d5hMzUi5uFk7uKUFHNAiumDaVpIA5mamcg7P03k1VO2wTMGQw-awFOqr83m6b1eN32100Ax9YyH1RcRHeo54tqNVLQKG53HhyuBWg=w1435-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMKiaEAwrH-FCxR70E7cW51HFESGeqUuOwuN8gcG1iQHRYhRF_uuJyV2Ol-qJYOWfY3Rn09fjGPTlzfthpmXmIZCEnQBCvVldPvUVzRIFXATBnL5dnmi-mxyYUUphApKuX2HQM2s7VhOLieBkVKzv5CCA=w638-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPe0FstXfX0e_DLszerof9fsYD0Xu8dXkFvxdUcTMB1eDN54SLCX_eFjhBaIGVk6J7bzghpqfSlrBdroZY4ZtuvivCJlZt37iB4SZ3QhJ6R-ij3UjqkU9d9igbdnsBlVHsyjZOj4_U3KgyV1cMgxLO_Ig=w633-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPfeAO4-5cfOmKO6yNDKzhG24JkJXKPneifRuvgwWPNVPYsWFJe2m6Pnqb4-aEk5Tc5A5X5Nj05uVa8qkbRC-BeXvF2sDaAuntb31AjkqYf2Q5hI5Qt5xLQHhDBNYOMiTz1ea7X7o_5bSa6IAoU4A-4WA=w633-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOJhg9X_bhDSR2_JBfywY7hqh3ldDZI3D6q8EZ9i3brjKlTLStp6LWZB2N1mwloEIWBH9rgr1QNLwoNDG3BER_NvnGUd64IoVmLJ2ZWT66q2kf0iBGuQJ0gkzPbfGuKNfTBYiXeY9VaqIXp_HSv9ZRmEw=w633-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNeId1XOcyx1FL3zqeM-APIWA0JQj_LZ5o462MkilMxV36ZWM3awsdsuopCoPedKSfFtrSgZYMqTv8xkFzuK53MsevLQ8dJ9Iw-uidTsgKVNKFXgQjBVL0VKcdsdmAtzV_BdRW2vq8vvKvecwgMhvc-gw=w1435-h957-s-no-gm?authuser=0"
];

const VIDEOS = [
  { url: "https://www.youtube.com/embed/YiE8aO24R28", title: "Short 1", isShort: true },
  { url: "https://www.youtube.com/embed/sJu0Sds2C00", title: "Short 2", isShort: true },
  { url: "https://www.youtube.com/embed/9pU6dHaL_IM", title: "Main Video", isShort: false }
];

export const PontoPtDetail: React.FC = () => {
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
          src="https://lh3.googleusercontent.com/pw/AP1GczPvADTENov25fn9gBKn84Xjln_UtAFCdoBvXzj4MgBiijI71-iNfEOc3hQ_ALCe5LfZTaDVtYSjd_tjaqcB7LiADGMJleEKp3dl9SfgFBais914ogJVxnEshtpxcAp-R4Oh6COnfDv9JVWAyxlobb_DWg=w1436-h957-s-no-gm?authuser=0" 
          className="w-full h-full object-cover opacity-60"
          alt="Ponto.pt"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-12 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4">Journalism / 2023</p>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter mb-4">Ponto.pt</h1>
          <div className="w-16 h-px bg-white/30 mt-6"></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Descriptions */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">O Projeto</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                O Ponto.pt é um projeto de jornalismo independente que se destaca pela sua abordagem inovadora e compromisso com a verdade. Focado em contar histórias que importam, o projeto utiliza as novas linguagens digitais para alcançar um público diversificado, promovendo o debate e a reflexão sobre os temas mais relevantes da atualidade portuguesa.
              </p>
              <div className="mt-8 flex space-x-6">
                <a 
                  href="https://www.instagram.com/pontopt.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                >
                  <Instagram size={16} className="mr-2" /> Instagram
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">Estratégia Visual</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                A nossa colaboração com o Ponto.pt foca-se na criação de uma identidade visual forte e coerente, capaz de transmitir a seriedade e a modernidade do projeto. Através de fotografia documental e conteúdos em vídeo otimizados para redes sociais, ajudamos a construir uma narrativa que valoriza a imagem como ferramenta essencial do jornalismo contemporâneo.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-900 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Role</p>
                <p className="text-sm uppercase tracking-wide">Visual Identity & Strategy</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Year</p>
                <p className="text-sm uppercase tracking-wide">2023</p>
              </div>
            </div>
          </div>

          {/* Right: Media */}
          <div className="lg:col-span-7 space-y-16">
            {/* Videos */}
            <div className="space-y-8">
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 font-bold flex items-center">
                <Play size={14} className="mr-2" /> Conteúdo Audiovisual
              </h3>
              
              {/* Main Video */}
              <div className="aspect-video w-full bg-zinc-900 overflow-hidden border border-zinc-800 shadow-2xl">
                <iframe 
                  src={VIDEOS[2].url} 
                  className="w-full h-full"
                  title={VIDEOS[2].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Shorts */}
              <div className="grid grid-cols-2 gap-4">
                {VIDEOS.filter(v => v.isShort).map((video, idx) => (
                  <div key={idx} className="aspect-[9/16] w-full bg-zinc-900 overflow-hidden border border-zinc-800">
                    <iframe 
                      src={video.url} 
                      className="w-full h-full"
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="space-y-8">
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 font-bold">Portfólio Fotográfico</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {GALLERY.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedPhoto(idx)}
                    className="aspect-square bg-zinc-900 overflow-hidden cursor-pointer group"
                  >
                    <img 
                      src={img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                      alt={`Ponto.pt ${idx}`} 
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
            <img src={GALLERY[selectedPhoto]} className="w-full h-full object-contain" alt="Ponto.pt Gallery" />
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
         <p className="font-serif italic text-zinc-500 mb-4">Project Media Inc. & Ponto.pt</p>
         <Link to="/projects" className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 hover:text-white transition-colors">
           Voltar ao Catálogo
         </Link>
      </footer>
    </div>
  );
};
