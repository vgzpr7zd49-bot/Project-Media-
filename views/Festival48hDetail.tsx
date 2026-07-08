import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const MAKING_OFF = [
  "https://lh3.googleusercontent.com/pw/AP1GczNkKrSijAF3fbLckb0QYx_pLpSUXxIl5BZJQfK8v4S-dmB8eWbjI-HOiMOQeG32bWIY1YcyrOv_Dgx95PQkbdxyTOOUTas0GT3jr34tJLI_WGcluahmtLt-RXlPa0LQHlckDqJEi73GFrzPp1fM2ht2oQ=w539-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNDqNJqCDMnI_wgsbul4PayPk8s48BRdth3kxvDFLFxp3m5QsM9eWdHBsBZ5B5d6umsLQK7LlQROWvmJ96eA7FhZTPtZcrx_GdePZp5RTUDM1d0iGLlt_Ni7eihzp8umIw0sAw-1w90_Fd9mOA877wUJw=w539-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMWJB9F2ee1cZBd3eQl3Kcx9DMeZ0Xclj_luwhpOOu5V8h29kfHlJ55YSP-aPscptkDYzyjEnEXVRik2Ts4UX9eqiy1zWciEH0CY92OG2SwmiTzBnMwSymk5IjUKgAHo5Ana9lMQLNO2hTUBnHcUC7-kw=w539-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOzczhPlQSgQu30GPOyb4s_AveqY5C8fsZSOlya-AZFw_A94ZBemtrZRK32kttIDYLBh2poBB7IY16lNnA61DeY8QUCVgxECbejyynWqqc4UCJzu9ZoP9nEjZw86mHsk3W4sul83TS0gI2R7HIVxsnLkA=w1700-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczO4-DK-Mb75sWBBVN1T13sy0yrUdBlOGeGhAbUinYvxbUszFTBMCVl3G678ao2FJEc_LrZBywfzphB5WSmJqm7Fs8CdUYWFKhkmrmnBLjzyXsCrNqzlIKnCsg7ibbRos0JRL0Xm0JuSMZtrgHgFTDloyw=w539-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP1UdRbMxpBubUJDAbdcHoZy-RQO56b6jl8zZhQ_pwUsilnIJpc4L8Qne6u4nqEJxxrIE-53-UM2tjCkiYeoXkQNp4Jzp16JqZW2VsabE1ElZNE3qvz8e6yCNwH8gdqdbEXvaFlU0Y_7n8zC857EMHGkw=w1700-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMCXANFNmMpN75N29VluJf-FxgfRK1VDkGc1T3dDyiobOUEDcsNXhIUuVaSaAhq2ec-77tkQ61hZFtysAQRlO_kseh1jt9le1vrHn3egLG2HBTHjQ-omc_5YTEpBBqgsWEPkefMJG5SCEvOFuCg2Can6Q=w1700-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczO6FuHjBNefPOvm7bvgXnj8B4Rxi1BbyVo-lEgBtklIT_RQzUWpF3lUMi-oL73Z355i-nXh8v08NgAb0LfmaQOeKud32egZ14O1gkIL9HKMuxbwrg9EYB9q6BhIM5cgHy7nqcoMteDfPJ4ql91T1iLsqg=w539-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOhSjmvHFoRl_HWXmX7M4mDlFaFXUx5pm3XrhMOVp7PtZIJu--94t8_KaUxU-Vy0DwxYGGvdLNKoRocDPPRB-tCcM0TqHPAqbRl4T0DKGuHcu7xa2lihlxCDluUmSam0wOT-TCEoE4Bo-PctLJLW7947A=w1700-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOwmd5WU7FoObeA76V-9he4a4E1EFvQIqdVGsdgr-ksbq-R48C5OBP4kZDtbBnSDs36_wDuYfBrLIjyKRNxFe24PC4lmbT24zG_O0EslT867k3gtgyLLty18Zd1Tp88g5gTNzti9QkSI6m4yaFVq9N2bw=w1700-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMyr4VcvE9COxYjEWjihE3HQPfwalfUw7tCFCrkC82p-cPkniUkMUqutgaHbUVK32kjiHWxAykQ8z5ozjAORcbsO5GW-HP0LW6babS_tY_xDfp_sH7joyEHpEagu3bsEgOKzGr5LggZnVu2RVBTHJoiFg=w1700-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPCFLflCUAIqjR0V6WexSVxOx3WdT5H-grUsRW4bIpGd4ldHpYry4rz6X_He7qz-arWX15RiEV08rO_nOdQXYfGCpNnsk5UmW7t9MxjB2a5-MENCGbcoYyWf6Tmz5-VsBIYC4wJxBRQv-mJpYZcLDTcqg=w539-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPxM09G5-PKliX1NJkHSLEi_X4efvXLtr1olL7CuM8-ie-6sZu84MaQTIgD7HO41v0pMMCMS9tLy12KZuhy92TJeY6VXjxmk4wLpTo7r5fQhQbtHlTrxeOqLJ_vFFy6B9Q4RVr7l9WPWT8PwnrJ6Yvx2g=w1700-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMfdvdp2z-hMOsWi7LtiYTrxQMHHUYiUqX55JNdMUypnL9nidTmV6ntSu3l9puFCXiof4_Wrb1GdiEnNLcN5MBgHEZfOiAZv-_Xj1VszXePfwijDqPxmH9ug2fkUlqenrxcm1TPp0QDlyGs1Kb1Lrf0Cw=w1700-h957-s-no-gm?authuser=0"
];

export const Festival48hDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'film' | 'makingoff'>('film');
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
      setSelectedPhoto((selectedPhoto + 1) % MAKING_OFF.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + MAKING_OFF.length) % MAKING_OFF.length);
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
          src="https://lh3.googleusercontent.com/pw/AP1GczMumXTG02FJNHI7framT3X6q-rlB2U-aquYl1LLFKhYrqfUP1q0q8iw2jL7xmmok-MzJAbueDyJMRCA7Yp7h2wkklFbi9bpi8L4HuqP3jV9pnUOCyroPTOVEJ36PD6Hl3B14v7dsvtpopT9vP8BFOqf-Q=w1920-h640-s-no-gm?authuser=0" 
          className="w-full h-full object-cover opacity-60"
          alt="Festival 48h - A Prova"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-12 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4">Short Film / 2024</p>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter mb-4">Festival 48h — "A Prova"</h1>
          <div className="w-16 h-px bg-white/30 mt-6"></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Descriptions */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">O Festival</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                O 48 Hour Film Project é a maior competição de cinema cronometrada do mundo. O desafio é vertiginoso: as equipas têm apenas 48 horas para escrever, filmar e editar uma curta-metragem completa, baseada em elementos obrigatórios (género, personagem, acessório e linha de diálogo) revelados apenas no início do prazo. É um teste supremo de criatividade, gestão de recursos e resistência sob pressão extrema.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">A Produção: "A Prova"</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                "A Prova" é o resultado desta maratona criativa. Produzida pela Project Media Inc., a curta mergulha numa narrativa intensa onde cada decisão técnica e artística teve de ser tomada em segundos. Desde a escolha das localizações à iluminação dramática, o projeto foi um exercício de rigor cinematográfico, provando que a limitação de tempo pode ser o maior catalisador para a inovação visual.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-900 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Role</p>
                <p className="text-sm uppercase tracking-wide">Full Production</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Year</p>
                <p className="text-sm uppercase tracking-wide">2024</p>
              </div>
            </div>
          </div>

          {/* Right: Video & Tabs */}
          <div className="lg:col-span-7 space-y-12">
            {/* Video Section */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 font-bold flex items-center">
                <Play size={14} className="mr-2" /> Assiste à Curta
              </h3>
              <div className="aspect-video w-full bg-zinc-900 overflow-hidden border border-zinc-800 shadow-2xl">
                <iframe 
                  src="https://www.youtube.com/embed/pR4tU7A8qpg" 
                  className="w-full h-full"
                  title="A Prova - Festival 48h"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Tabs */}
            <div className="pt-12">
              <div className="flex space-x-8 border-b border-zinc-900 mb-8">
                <button 
                  onClick={() => setActiveTab('film')}
                  className={`pb-4 text-xs uppercase tracking-widest transition-all ${activeTab === 'film' ? 'text-white border-b border-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  O Filme
                </button>
                <button 
                  onClick={() => setActiveTab('makingoff')}
                  className={`pb-4 text-xs uppercase tracking-widest transition-all ${activeTab === 'makingoff' ? 'text-white border-b border-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  Making Of
                </button>
              </div>

              {activeTab === 'film' ? (
                <div className="space-y-8">
                   <p className="text-zinc-500 italic text-sm">Stills do filme e material promocional.</p>
                   <div className="grid grid-cols-1 gap-4">
                      {[MAKING_OFF[3], MAKING_OFF[5], MAKING_OFF[6]].map((img, idx) => (
                        <div key={idx} className="bg-zinc-900 aspect-video overflow-hidden">
                          <img src={img} className="w-full h-full object-cover" alt={`Still ${idx}`} />
                        </div>
                      ))}
                   </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {MAKING_OFF.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedPhoto(idx)}
                      className="aspect-square bg-zinc-900 overflow-hidden cursor-pointer group"
                    >
                      <img 
                        src={img} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                        alt={`Making Of ${idx}`} 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
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
            <img src={MAKING_OFF[selectedPhoto]} className="w-full h-full object-contain" alt="Making Of" />
          </div>

          <button className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors" onClick={nextPhoto}>
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-8 text-[10px] uppercase tracking-widest text-zinc-500">
            {selectedPhoto + 1} / {MAKING_OFF.length}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-24 bg-zinc-950 border-t border-zinc-900 text-center">
         <p className="font-serif italic text-zinc-500 mb-4">Project Media Inc. @ 48 Hour Film Project</p>
         <Link to="/projects" className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 hover:text-white transition-colors">
           Voltar ao Catálogo
         </Link>
      </footer>
    </div>
  );
};
