import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY = [
  "https://lh3.googleusercontent.com/pw/AP1GczP7JBzOLWbn-zJssEuJPfCILMJZU6jXBMQV3hGxbsO1CTYecNFbSRGooMshaN8E2V468mp0bTNgCe02KFSyBQ5fpEjpu3WhrSuV7vker7BuD1SbBiOJVneN6nSQ5cav8aPlRb2b7WVh71mArOm-EM1CXw=w1701-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMugWPLHv_cAVrrPeEXKo1WpIE64SoWc8Pc-ULgkNTvvLcQBDfvlFc46HJuAIQwb0IfMo0aucA0ZUooVocSImjvjOwOkzI4AZG-oEo550IIbRfSqcMfGpWqH_oi3L5lBRfLMujqZST7KPF8bv9QcuIr_g=w1701-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPOJH5MgC0-isvz1-eu6pPHUI1YiF5lyjvqeYmxMnn_r3_d_Deqq5_jJfb9B7HtoPPhHvqkWPa5CW63Pi001afkoN5Ssi3YifYeAYXAVcG6tVuVuVkHgCpspHG8IjzA174x8tOx6xC1Iqn46LdrEajXEw=w1436-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMkgN33Kn3m6-PaSjcxEZpDuMaAUfSnaZoF6UFVnAMmC6laJufivVl1xzfN9RbwZpmAgOC0cD5hY-nrZBAYjefrJ2V2WFANO69l8M2xtiIRKf-NnHFiHaDKg_dcLv6YUcimpLTWynTelG4-9i8fVgKtMg=w1436-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP8aff7W1pRDY63_ly9mLqQSmgo3fuUjFIY7HktLtQKHdEfnHJPc-HcUALH1670z2Y1mAT86APDcWs_SxneJu3Di6SUb9oLKew4YBf5dSR99tMxfaXh7PmSM1mmdYx8dQkab9G0IP40XnY2tYyWZamOHQ=w1435-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNjDZbnNlPqBFo_s3VtA3F7yby_DeZhMFfxD0C9_TXp4Qxt8zqO4vSsYkREatmnu-Hb8qcoLJQZCQvRbUnGd4yS-w-w-Q53QgvZp66Yd5utkonOYQAMgIN-PNwy__opxP_VhWbnzmDiVY_HaLolguLMsw=w1436-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNHhpXrh9ZEUVTNJZ-XAXbAQaOaW_tyg-nW9WqlCaf5kcnIWAGH_eaIwmJqHbUsAGRzSAgSV4m6m_4zrBLNTcuUH3_6n7dVFf5bd5kD9ZVp3QlPcSuj7KAcaLRGnof4xo5DfaFcsmazaHbyX3apGKw-Iw=w809-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNYAqN89sRhChsDFLsPaRGtuuXG6rIsZN5-5HNVKGmJY3zgZOTEPOZZDGtyBBig1b6BNhBbyy1zNdozJWhCp7e-M_yuefmQ1gTHLXPcSw-Ky-x8vGaW95Sh3DoVhgu3XkaSPlJfCUo37eKzHG5Qdg0QCQ=w1701-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOa7SDs8f3ZXt5uDueDxCJLPjTS_7-IF6DXjkWdYkFntKRUP8cLJc1U298m4UccIVvriAhIw9LvpClW639D1vfiLP7wn-oXcb28OdF-xvPocEI3kfr6XkyhVV1YAgsLTP5Tqbb6jPwN9jWG5zVBJhD9Ug=w1225-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNcS0ykNNhPS7HeSf4ZfXHMj4m0XpwZQMILIs5NzNZGgIJEm2fqJWNMf7Onvrs2ZRA3-uXacRJh29MJ_N59D65btIdmBzJXdP4Pq2Y3_gKgSmZegtnyHqPjVMBHWKX4deaOKO83mQklU4N99K06OmQ=w1701-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNWlUsG0jfjQ_eTf_cu65y86NaOKoLxd5KoOieuuwXL6l3g1JG2jufGCYgZrNsAbi0iAe-T147tuyBE9SjfgtBGYLqSNU1qmDgl4weatviR6MAwb18vmNqiAPUVN6A3sZp-UZ1xvbMSbBxk0mz14VdW8Q=w969-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczM9VpBmkD1oHTjVCXNfNObN4xoOIQuex76T85CwklGzn2KZBko-FCISnhgaK6UG1YEzu9aip2pqfif_M-IfOAOMEzBYsOv8K_yjH5HQ3SQxR5LgaWcE5l6Bc-ODeIirzE3DsAlJywpydUkVxdt7VYN2Ag=w1701-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPMnXbe-QDLQajiQKJKSubateTZLXENGPMvbCbsvC6GGoO9eSa-bOpH-p0WUztKWqaJQZ7UKOkJ2gUUeTYJz0J6AGT7njN4yH_-LsdWt_xhWTUt3SVlGaWoptwjdLC0lbT-GA4fQLieRd4DmdD3GW7rDQ=w1701-h957-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPbPiDwJzcQfbDUfyiWBdrSWHgh33xfUlIY5eRcafS-WtWer-BTXltHRMbqPuX3Dmz8E5pQT08bsGq-qLPYwlLkrgendagYITYKdSFc0vpkwpS5GKTr876AT_EGzgx4O08A8HLR_yAfFwQ6dpfpxkctog=w1397-h957-s-no-gm?authuser=0"
];

export const GMArquiteturaDetail: React.FC = () => {
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
          alt="GM Arquitetura e Construção"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-12 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4">Documentary / 2024</p>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter mb-4 leading-tight">GM Arquitetura e Construção</h1>
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
                A GM Arquitetura e Construção é uma empresa de referência no setor do imobiliário e construção civil. Com uma equipa multidisciplinar, a empresa foca-se na criação de projetos arquitetónicos inovadores e na execução de obras com elevados padrões de qualidade, transformando visões em estruturas sólidas e esteticamente irrepreensíveis.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-bold">Conteúdos Digitais</h3>
              <p className="text-lg font-light leading-relaxed text-zinc-300">
                A Project Media Inc. colabora com a GM Arquitetura e Construção na criação de conteúdos digitais especializados para o setor imobiliário. Através de fotografia e vídeo de alta qualidade, capturamos o detalhe, a luz e a funcionalidade de cada projeto, permitindo que a empresa comunique o seu valor de forma clara e impactante no mercado digital.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-900 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Role</p>
                <p className="text-sm uppercase tracking-wide">Real Estate Digital Content</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Year</p>
                <p className="text-sm uppercase tracking-wide">2024</p>
              </div>
            </div>
          </div>

          {/* Right: Gallery */}
          <div className="lg:col-span-7">
            <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-8 font-bold">Portfólio Visual</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {GALLERY.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedPhoto(idx)}
                  className="aspect-[4/3] bg-zinc-900 overflow-hidden cursor-pointer group"
                >
                  <img 
                    src={img} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                    alt={`GM Arquitetura ${idx}`} 
                    loading="lazy"
                  />
                </div>
              ))}
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
            <img src={GALLERY[selectedPhoto]} className="w-full h-full object-contain" alt="GM Arquitetura Gallery" />
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
         <p className="font-serif italic text-zinc-500 mb-4">Project Media Inc. & GM Arquitetura</p>
         <Link to="/projects" className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 hover:text-white transition-colors">
           Voltar ao Catálogo
         </Link>
      </footer>
    </div>
  );
};
