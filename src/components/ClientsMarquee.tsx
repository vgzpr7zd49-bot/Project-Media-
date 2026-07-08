import React from 'react';

const row1Clients = [
  'Banda de Arnoso',
  'Câmara Municipal de Famalicão',
  'Porto Fashion Week',
  'NOS Primavera Sound',
  'Vodafone Portugal',
  'EDP Comercial',
  'Super Bock Group',
  'Fundação Serralves',
];

const row2Clients = [
  'Casa da Música',
  'Teatro Nacional São João',
  'RTP',
  'SIC Notícias',
  'TVI',
  'Público',
  'Expresso',
  'Observador',
];

export const ClientsMarquee: React.FC = () => {
  return (
    <section className="bg-[#0f0f10] py-16 overflow-hidden relative font-['Poppins']">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-[#9c9c9c] text-[11px] uppercase tracking-[0.3em] font-medium">
          Entidades que confiam em nós
        </h2>
      </div>

      <div className="relative space-y-6">
        {/* Row 1: Right to Left */}
        <div className="marquee-container flex overflow-hidden select-none">
          <div 
            className="marquee-content flex gap-6 animate-[marquee-left_30s_linear_infinite]"
            style={{ width: 'max-content' }}
          >
            {[...row1Clients, ...row1Clients].map((client, index) => (
              <div 
                key={index}
                className="w-[180px] h-[72px] flex items-center justify-center border border-[#2a2a2a] rounded-[10px] bg-transparent transition-all duration-300 hover:border-[#FAE8BB] group cursor-default"
              >
                <span className="text-[#9c9c9c] text-[13px] font-medium group-hover:text-white transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="marquee-container flex overflow-hidden select-none">
          <div 
            className="marquee-content flex gap-6 animate-[marquee-right_35s_linear_infinite]"
            style={{ width: 'max-content' }}
          >
            {[...row2Clients, ...row2Clients].map((client, index) => (
              <div 
                key={index}
                className="w-[180px] h-[72px] flex items-center justify-center border border-[#2a2a2a] rounded-[10px] bg-transparent transition-all duration-300 hover:border-[#FAE8BB] group cursor-default"
              >
                <span className="text-[#9c9c9c] text-[13px] font-medium group-hover:text-white transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0f0f10] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0f0f10] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};
