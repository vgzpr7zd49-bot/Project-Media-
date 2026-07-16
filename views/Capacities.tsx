
// Recommended Title Tag: Serviços e Pacotes · Project Media | Cobertura de Eventos
import React from 'react';
import { CAPACITIES } from '../src/data/projects';
import { Sparkles, DollarSign, Calendar, ArrowUpRight } from 'lucide-react';

const Capacities: React.FC = () => {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <header className="px-6 md:px-12 mb-24 max-w-4xl">
        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-6">Capabilities</p>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter">Serviços.</h1>
        <p className="text-xl text-zinc-400 font-light max-w-xl">
          Trazemos uma visão cinematográfica e de autor a cada desafio criativo. As nossas competências adaptam-se aos seus objetivos estéticos e de comunicação.
        </p>
      </header>

      {/* Collaboration / Retainer Section */}
      <section className="px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        <div className="border border-zinc-900 bg-zinc-950/40 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-3xl mb-16 relative z-10">
            <div className="inline-flex items-center space-x-2 text-[#c9a84c] text-xs uppercase tracking-widest mb-6 font-mono">
              <Sparkles size={14} />
              <span>Parceria & Consistência</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-8">
              O Impacto de um Grande Negócio Começa com uma Presença Visual de Excelência
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Diga adeus a produções esporádicas. Eleve o valor da sua empresa através de conteúdos de vídeo profissionais e constantes de alta fidelidade. O nosso modelo de colaboração mensal fornece uma parceria de produção perfeita e integrada para alimentar as suas redes e canais com regularidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-colors space-y-6">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#c9a84c]">
                <DollarSign size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-3">Eficiência Audiovisual</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Aceda a um serviço completo de direção de fotografia e edição profissional sob um investimento mensal fixo e altamente competitivo, protegendo a estabilidade do seu orçamento.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-colors space-y-6">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#c9a84c]">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-3">Presença Ativa: 2 a 6 Vídeos/Mês</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Garante o fornecimento regular de vídeos de alta qualidade para as suas plataformas, fortalecendo a confiança dos seus clientes e consolidando a autoridade da sua marca.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-colors space-y-6">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#c9a84c]">
                <ArrowUpRight size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-3">Crescimento Dinâmico</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Adapte a escala e o ritmo de entrega audiovisual conforme o seu negócio avança, assegurando que o seu material promocional acompanha a expansão das suas ambições.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-32 px-6 md:px-12 pb-32">
        {CAPACITIES.map((capacity, idx) => (
          <div 
            key={capacity.id} 
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
          >
            <div className="w-full md:w-1/2 aspect-square md:aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-zinc-900 rounded-lg">
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
