import React, { useState } from 'react';
import { FileText, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { ClientData } from '../../../../types';

interface DocumentsTabProps {
  client: ClientData;
}

export const DocumentsTab: React.FC<DocumentsTabProps> = ({ client }) => {
  const [search, setSearch] = useState('');
  const filtered = client.documents.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div 
      key="documents"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-3xl font-serif">Documentação</h2>
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
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">Propostas & Contratos</h3>
          <div className="grid grid-cols-1 gap-4">
            {filtered.filter(d => d.type === 'proposal').map((doc, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FileText size={18} className="text-zinc-500" />
                  <span className="text-sm font-bold">{doc.name}</span>
                </div>
                <button className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-white">Ver Documento</button>
              </div>
            ))}
            {filtered.filter(d => d.type === 'contract').map((doc, idx) => (
              <div key={idx} className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <ShieldCheck size={18} className="text-green-500" />
                  <span className="text-sm font-bold">{doc.name}</span>
                </div>
                <Badge color="#22c55e">{doc.signed ? "Assinado" : "Pendente"}</Badge>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">Atas de Reunião</h3>
          <div className="grid grid-cols-1 gap-4">
            {filtered.filter(d => d.type === 'meeting').map((doc, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Users size={18} className="text-zinc-500" />
                  <span className="text-sm font-bold">{doc.name}</span>
                </div>
                <span className="text-[10px] text-zinc-600 font-bold">{doc.date}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="pt-8 border-t border-zinc-900 text-center">
        <a href="mailto:info@projectmedia.pt"
          className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors font-bold">
          Questões? Fala com o Rafael →
        </a>
      </div>
    </motion.div>
  );
};
