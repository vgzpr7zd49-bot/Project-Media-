import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { ClientData } from '../../../../types';

interface FeedTabProps {
  client: ClientData;
}

export const FeedTab: React.FC<FeedTabProps> = ({ client }) => {
  return (
    <section className="space-y-12">
      <div className="flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold">Exclusive Feed</h3>
        <Badge color="#a855f7" variant="outline">Conteúdo Interno</Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {client.feed?.map((item, idx) => (
          <div key={idx} className="group cursor-pointer space-y-4">
            <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-900 group-hover:border-zinc-700 transition-all">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                {item.type === 'Video' ? <Play size={24} fill="white" /> : <ExternalLink size={24} />}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold tracking-wide group-hover:text-zinc-300 transition-colors">{item.title}</h4>
              <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">{item.type}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-zinc-900 text-center">
        <a href="mailto:info@projectmedia.pt"
          className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors font-bold">
          Questões? Fala com o Rafael →
        </a>
      </div>
    </section>
  );
};
