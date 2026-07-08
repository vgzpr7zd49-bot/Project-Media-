
// Recommended Title Tag: A Nossa Visão · Project Media | Produtora Audiovisual Norte
import React from 'react';

const Vision: React.FC = () => {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-12">Manifesto</p>
        <h1 className="text-4xl md:text-7xl font-serif mb-16 leading-tight">
          Image as Intention.<br />
          Silence as Force.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8 text-lg font-light leading-relaxed text-zinc-300">
            <p>
              Project Media Inc exists at the intersection of cinematic auteurism and strategic foundation. We believe that modern communication shouldn't just be heard—it should be felt, curated, and remembered.
            </p>
            <p>
              Like the great independent film labels, we treat every project as an editorial piece. We don't chase trends; we establish rhythms.
            </p>
          </div>
          <div className="space-y-8 text-lg font-light leading-relaxed text-zinc-300">
            <p>
              Our process is rooted in the belief that cinema is the ultimate language. Whether we are producing a feature documentary or a strategic visual campaign, the core remains the same: Narrative is the only currency that matters.
            </p>
            <p className="font-serif italic text-2xl text-white">
              "We don't explain. We show. We don't ask for attention. We command it through quality."
            </p>
          </div>
        </div>
      </section>

      <section className="h-[60vh] relative overflow-hidden my-24 grayscale">
         <img 
            src="https://images.unsplash.com/photo-1524511751214-bbad450c9307?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Cinematic Vision"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40"></div>
      </section>

      <section className="px-6 md:px-12 pb-32 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-8">The Strategy of Silence</h2>
        <p className="text-zinc-500 tracking-widest uppercase text-xs leading-loose">
          Our brand is built on trust and curatorship. We are the silent partners of the most ambitious projects in the world. We let the work do the loud lifting.
        </p>
      </section>
    </div>
  );
};

export default Vision;
