
import React, { useState } from 'react';
import { Package, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { ClientData } from '../../../../types';

interface DeliverablesTabProps {
  client: ClientData;
}

export const DeliverablesTab: React.FC<DeliverablesTabProps> = ({ client }) => {
  const [search, setSearch] = useState('');
  const filtered = client.deliverables.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div 
      key="deliverables"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-3xl font-serif">Assets Entregues</h2>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Procurar ficheiro..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 rounded-xl text-xs focus:outline-none focus:border-zinc-600 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filtered.map((item, idx) => (
          <div key={idx} className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl flex items-center justify-between group hover:border-zinc-800 transition-all">
            <div className="flex items-center gap-6">
              {item.thumbnail ? (
                <img src={item.thumbnail} alt={item.name}
                  className="w-12 h-12 rounded-xl object-cover border border-zinc-800" />
              ) : (
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-xl">
                  <Package size={18} className="text-zinc-500" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-bold">{item.name}</h4>
                  <Badge color={client.accentColor} variant="outline">{item.type}</Badge>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mt-1">{item.size} · {item.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(item.url);
                }}
                className="bg-zinc-900 hover:bg-zinc-800 px-3 py-2 rounded-xl text-[9px] uppercase tracking-widest font-bold text-zinc-500 hover:text-white transition-all"
              >
                Copiar Link
              </button>
              <a href={item.url} target="_blank" rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-white hover:text-black p-4 rounded-xl transition-all">
                <Download size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-zinc-900 text-center">
        <a href="mailto:geral@projectmediainc.com"
          className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors font-bold">
          Questões? Fala com o Rafael →
        </a>
      </div>
    </motion.div>
  );
};
