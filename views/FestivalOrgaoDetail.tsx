
import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Music, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONCERTS = [
  {
    date: '2 MAI',
    time: '21:30',
    location: 'Sé Catedral de Braga',
    title: 'Sopros da Germânia',
    description: 'Música alemã para 2 Órgãos e instrumentos de sopro.',
    spaceInfo: 'A Sé de Braga é a catedral mais antiga de Portugal, um monumento de imenso valor histórico e religioso, abrigando órgãos barrocos monumentais que são verdadeiras obras de arte da engenharia sonora.'
  },
  {
    date: '3 MAI',
    time: '21:30',
    location: 'Igreja de São Lázaro',
    title: 'Sopros dos Alpes',
    description: 'Música suíça para Órgão e trompas alpinas.',
    spaceInfo: 'Uma igreja de charme singular em Braga, conhecida pela sua atmosfera íntima e interior ricamente decorado, proporcionando uma acústica acolhedora para instrumentos de sopro tradicionais.'
  },
  {
    date: '4 MAI',
    time: '16:00',
    location: 'Igreja Nova de Prado (Vila Verde)',
    title: 'O sopro da alma',
    description: 'Órgão e assobio.',
    spaceInfo: 'Um espaço religioso contemporâneo em Vila Verde, que se destaca pela sua arquitetura moderna e excelente claridade acústica, ideal para performances experimentais e clássicas.'
  },
  {
    date: '9 MAI',
    time: '21:00',
    location: 'Igreja de Santa Cruz',
    title: 'Quatro Ventos',
    description: 'Órgão e quarteto de sopros barrocos.',
    spaceInfo: 'Famosa pela sua fachada trabalhada e interior barroco deslumbrante, é um marco da arquitetura religiosa de Braga, onde a reverberação realça a sonoridade dos instrumentos de época.'
  },
  {
    date: '10 MAI',
    time: '11:00',
    location: 'Igreja de S. Pedro e S. Paulo',
    title: 'Um sopro do Oriente',
    description: 'Do Oriente à Europa: música para Órgão e sheng.',
    spaceInfo: 'Uma igreja histórica com um património rico, oferecendo um cenário solene e tradicional para o diálogo intercultural entre o órgão ocidental e instrumentos orientais.'
  },
  {
    date: '10 MAI',
    time: '15:30',
    location: 'Igreja de S. Lázaro',
    title: 'Pipe Poetics',
    description: 'Robert Aiki Aubrey Lowe.',
    spaceInfo: 'O regresso à Igreja de São Lázaro para uma exploração mais contemporânea e poética das capacidades sonoras dos tubos do órgão.'
  },
  {
    date: '10 MAI',
    time: '21:30',
    location: 'Igreja da Misericórdia',
    title: 'Brisa do passado',
    description: 'Música antiga para Órgão, corneta e canto.',
    spaceInfo: 'Anexa ao hospital da Misericórdia, esta igreja é uma joia da arte renascentista e barroca, cujas dimensões permitem uma clareza excecional para o canto e instrumentos antigos.'
  },
  {
    date: '11 MAI',
    time: '16:00',
    location: 'Igreja de Águas Santas (Póvoa de Lanhoso)',
    title: 'Sopro sereno',
    description: 'Órgão, flauta e coro feminino.',
    spaceInfo: 'Uma igreja românica na Póvoa de Lanhoso, que oferece um ambiente sereno e carregado de história, perfeito para a harmonia vocal e a delicadeza da flauta.'
  },
  {
    date: '16 MAI',
    time: '21:30',
    location: 'Igreja do Coração de Maria',
    title: 'Sopro harmónico',
    description: 'Órgão, harmónio e cravo.',
    spaceInfo: 'Uma igreja moderna com um interior amplo e versátil, capaz de acomodar diversos conjuntos instrumentais e proporcionar uma experiência sonora envolvente.'
  },
  {
    date: '17 MAI',
    time: '11:00',
    location: 'Teatro da Escola Sá de Miranda',
    title: 'Um sopro na floresta',
    description: 'Teatro musical sobre o conto de Sophia.',
    spaceInfo: 'O histórico teatro escolar, que funde a tradição académica com a performance cultural, servindo de palco para uma narrativa musical inspirada na literatura portuguesa.'
  },
  {
    date: '17 MAI',
    time: '21:30',
    location: 'Igreja de São Boaventura de Montariol',
    title: 'Sopros egrégios',
    description: 'Música para Órgão e Banda Sinfónica.',
    spaceInfo: 'Situada numa colina com vista sobre a cidade, esta igreja oferece um cenário grandioso e tranquilo, ideal para a potência sonora de uma banda sinfónica em diálogo com o órgão.'
  },
  {
    date: '18 MAI',
    time: '18:30',
    location: 'Igreja do Pópulo',
    title: 'Sopro brilhante',
    description: 'Música para Reais Fogos de Artifício.',
    spaceInfo: 'Uma igreja neoclássica no coração de Braga, conhecida pela sua elegância e clareza acústica, encerrando o festival com o brilho e a majestade da música de Handel.'
  }
];

export const FestivalOrgaoDetail: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#c9a84c] selection:text-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src="https://photos.fife.usercontent.google.com/pw/AP1GczMocMm5vXKpkrj5K-i8kR2J1WBdiovrkWm8DOdPXAnVuDcUAe5DntdcPg=w1436-h957-s-no-gm?authuser=0" 
          className="w-full h-full object-cover opacity-60"
          alt="Festival Internacional de Órgão de Braga"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-12 max-w-4xl">
          <Link to="/projects" className="flex items-center text-xs uppercase tracking-widest text-zinc-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Back to Catalog
          </Link>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-4 font-bold"
          >
            11.º Festival Internacional — 2025
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif tracking-tighter mb-4"
          >
            FESTIVAL INTERNACIONAL <br /> DE ÓRGÃO DE BRAGA
          </motion.h1>
        </div>
      </section>

      {/* Introduction & Impact */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-8 flex items-center">
              <Info size={14} className="mr-2" /> O Impacto Cultural
            </h2>
            <p className="text-2xl font-light leading-relaxed text-zinc-300 italic">
              "O Festival Internacional de Órgão de Braga não é apenas um evento musical; é um ato de preservação do património imaterial e uma celebração da identidade sonora de uma cidade que respira história."
            </p>
            <div className="mt-12 space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Ao longo de onze edições, o festival consolidou-se como um dos eventos culturais mais prestigiados da região, atraindo virtuosos internacionais e públicos diversificados. O seu impacto vai além da música, promovendo a valorização dos espaços sagrados e dos instrumentos históricos que Braga orgulhosamente conserva.
              </p>
              <p>
                Em 2025, o festival explorou a temática do "Sopro", unindo o órgão a uma vasta gama de instrumentos de vento, desde as tradicionais trompas alpinas ao exótico sheng oriental, demonstrando a versatilidade infinita deste instrumento rei.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-8 flex items-center">
              <Music size={14} className="mr-2" /> Synopsis 2025
            </h2>
            <div className="bg-zinc-900/50 p-8 md:p-12 border border-zinc-800 rounded-sm">
              <p className="text-xl font-light leading-relaxed text-zinc-200">
                O Festival Internacional de Órgão de Braga celebra a grandiosidade de um instrumento que moldou a identidade sonora e espiritual da cidade. Ao longo de sete noites, sete espaços únicos — da Sé de Braga à Igreja de Santa Cruz — transformaram-se em palcos de excelência musical, unindo património arquitetónico, espiritualidade e virtuosismo internacional. Uma produção Project Media Inc., ao serviço da memória e da emoção.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Direção Artística</p>
                  <p className="text-sm font-medium">José Rodrigues</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Organização</p>
                  <p className="text-sm font-medium">Arquidiocese de Braga, Município de Braga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concert Catalog */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Catálogo de Concertos</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-xs">12 Espaços, 12 Experiências Únicas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
            {CONCERTS.map((concert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-black p-8 flex flex-col h-full group hover:bg-zinc-950 transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[#c9a84c] font-mono text-sm tracking-tighter">
                    {concert.date} — {concert.time}
                  </div>
                  <div className="text-zinc-800 font-serif text-4xl group-hover:text-zinc-700 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif mb-2 group-hover:text-[#c9a84c] transition-colors">
                  {concert.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
                  {concert.description}
                </p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-start text-sm text-zinc-400">
                    <MapPin size={14} className="mr-2 mt-1 shrink-0 text-[#c9a84c]" />
                    <span>{concert.location}</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-900">
                    <p className="text-[10px] leading-relaxed text-zinc-600 group-hover:text-zinc-500 transition-colors">
                      {concert.spaceInfo}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs uppercase tracking-widest text-zinc-600 mb-8">Produção Audiovisual</p>
        <h2 className="text-4xl md:text-6xl font-serif italic mb-12 max-w-3xl">
          Preservando a memória sonora de Braga através da lente cinematográfica.
        </h2>
        <Link to="/contact" className="px-12 py-4 border border-white/20 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs">
          Collaborate with us
        </Link>
      </section>
    </div>
  );
};

export default FestivalOrgaoDetail;
