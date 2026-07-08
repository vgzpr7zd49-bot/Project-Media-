import React, { useState, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { ClientData, Note } from '../../../../types';

interface NotesTabProps {
  client: ClientData;
}

export const NotesTab: React.FC<NotesTabProps> = ({ client }) => {
  const [localNotes, setLocalNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(`notes_${client.id}`);
    if (saved) {
      setLocalNotes(JSON.parse(saved));
    }
  }, [client.id]);

  const allNotes = [...client.notes, ...localNotes];

  const handleSend = () => {
    if (!newNote.trim()) return;
    
    const note: Note = {
      author: client.nomeCliente.split(' ')[0],
      text: newNote,
      timestamp: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [...localNotes, note];
    setLocalNotes(updated);
    localStorage.setItem(`notes_${client.id}`, JSON.stringify(updated));
    setNewNote('');
  };

  return (
    <div className="space-y-6">
      <motion.div 
        key="notes"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="h-[600px] flex flex-col bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden"
      >
        <div className="p-6 border-b border-zinc-900 bg-zinc-900/20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-full">
              <MessageSquare size={18} className="text-zinc-500" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Notas Colaborativas</h3>
              <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Feedback em tempo real</p>
            </div>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          {allNotes.map((nota, idx) => (
            <div key={idx} className={`flex gap-4 max-w-[80%] ${nota.author !== 'Rafael' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                nota.author === 'Rafael' ? 'bg-white text-black' : 'bg-zinc-800 text-white'
              }`}>
                {nota.author.charAt(0)}
              </div>
              <div className={`space-y-2 ${nota.author !== 'Rafael' ? 'text-right' : ''}`}>
                <div className="flex items-center gap-3 justify-end flex-row-reverse">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">{nota.author}</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-700 font-bold">{nota.timestamp}</span>
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  nota.author === 'Rafael' ? 'bg-zinc-900 text-zinc-300 rounded-tl-none' : 'bg-white text-black rounded-tr-none font-medium'
                }`}>
                  {nota.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-zinc-900 bg-zinc-900/20 flex items-center gap-4">
          <input 
            type="text" 
            placeholder="Adicionar uma nota ou feedback..."
            value={newNote}
            onChange={e => setNewNote(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            className="flex-grow bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:border-zinc-600 transition-colors"
          />
          <button 
            onClick={handleSend}
            className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-2xl hover:scale-105 transition-all"
          >
            <Send size={18} />
          </button>
        </div>
      </motion.div>

      <div className="text-center space-y-2">
        <p className="text-[9px] uppercase tracking-widest text-zinc-700 font-bold">
          Nota: Estas notas são guardadas localmente no teu navegador.
        </p>
        <a href="mailto:info@projectmedia.pt"
          className="block text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors font-bold">
          Dúvidas urgentes? Envia um email →
        </a>
      </div>
    </div>
  );
};
