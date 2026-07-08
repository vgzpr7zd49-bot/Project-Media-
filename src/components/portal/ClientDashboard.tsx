import React, { useState, Suspense } from 'react';
import { LogOut, LayoutDashboard, FileText, MessageSquare, Play, ChevronRight, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ClientData } from '../../../types';

const PipelineTab = React.lazy(() => import('./tabs/PipelineTab').then(m => ({ default: m.PipelineTab })));
const DeliverablesTab = React.lazy(() => import('./tabs/DeliverablesTab').then(m => ({ default: m.DeliverablesTab })));
const DocumentsTab = React.lazy(() => import('./tabs/DocumentsTab').then(m => ({ default: m.DocumentsTab })));
const NotesTab = React.lazy(() => import('./tabs/NotesTab').then(m => ({ default: m.NotesTab })));
const FeedTab = React.lazy(() => import('./tabs/FeedTab').then(m => ({ default: m.FeedTab })));
const RentalTab = React.lazy(() => import('./tabs/RentalTab').then(m => ({ default: m.RentalTab })));

interface ClientDashboardProps {
  client: ClientData;
  onLogout: () => void;
}

export const ClientDashboard: React.FC<ClientDashboardProps> = ({ client, onLogout }) => {
  const isRentalOnly = client.id === 'rental-client';
  const [activeTab, setActiveTab] = useState(isRentalOnly ? 'rental' : 'pipeline');
  const [rentalUnlocked, setRentalUnlocked] = useState(isRentalOnly);

  const tabs = [
    ...(isRentalOnly ? [] : [
      { id: 'pipeline', label: 'Pipeline', icon: LayoutDashboard },
      { id: 'deliverables', label: 'Entregas', icon: Play, notify: client.deliverables?.some(d => d.status === 'available') },
      { id: 'documents', label: 'Documentos', icon: FileText },
      { id: 'notes', label: 'Notas', icon: MessageSquare, notify: client.notes?.length > 0 },
      { id: 'feed', label: 'Feed', icon: Play },
    ]),
    { id: 'rental', label: 'Aluguer', icon: Package, notify: false },
  ];

  const renderTab = () => {
    return (
      <Suspense fallback={
        <div className="h-64 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-zinc-800 border-t-white rounded-full animate-spin" />
        </div>
      }>
        {activeTab === 'pipeline' && <PipelineTab client={client} />}
        {activeTab === 'deliverables' && <DeliverablesTab client={client} />}
        {activeTab === 'documents' && <DocumentsTab client={client} />}
        {activeTab === 'notes' && <NotesTab client={client} />}
        {activeTab === 'feed' && <FeedTab client={client} />}
        {activeTab === 'rental' && (
          rentalUnlocked ? (
            <RentalTab client={client} />
          ) : (
            <div className="max-w-md mx-auto bg-zinc-950 p-8 rounded-3xl border border-zinc-900 text-center space-y-6 my-12">
              <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-3xl mx-auto">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif">Catálogo Restrito</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Insere a palavra-passe para visualizar o inventário completo de equipamento para aluguer.
                </p>
              </div>
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Palavra-passe de acesso"
                  id="rental-password-input"
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      const input = e.currentTarget.value;
                      if (input === 'Projeto2026') {
                        setRentalUnlocked(true);
                      } else {
                        alert('Palavra-passe incorreta.');
                      }
                    }
                  }}
                  className="w-full bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-2xl text-center text-sm text-white focus:outline-none focus:border-zinc-700 transition-colors uppercase tracking-widest font-mono"
                />
                <button
                  onClick={() => {
                    const inputEl = document.getElementById('rental-password-input') as HTMLInputElement | null;
                    if (inputEl) {
                      if (inputEl.value === 'Projeto2026') {
                        setRentalUnlocked(true);
                      } else {
                        alert('Palavra-passe incorreta.');
                      }
                    }
                  }}
                  className="w-full bg-white text-black py-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-zinc-200 transition-colors"
                >
                  Confirmar Acesso
                </button>
              </div>
            </div>
          )
        )}
      </Suspense>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/10">
      {/* Sidebar Navigation - Desktop */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 bg-zinc-950 border-r border-zinc-900 hidden md:flex flex-col items-center py-8 gap-8 z-50">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-black">PM</div>
        <nav className="flex-grow flex flex-col gap-6">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all relative group ${
                activeTab === tab.id ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:text-white'
              }`}
              style={activeTab === tab.id ? { backgroundColor: `${client.accentColor}20`, color: client.accentColor } : {}}
            >
              <tab.icon size={20} />
              {tab.notify && (
                <span className="absolute top-3 right-3 w-2 h-2 bg-orange-500 rounded-full border-2 border-zinc-950" />
              )}
              <span className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                {tab.label}
              </span>
            </button>
          ))}
        </nav>
        <button 
          onClick={onLogout}
          className="w-12 h-12 text-zinc-600 hover:text-white transition-colors"
        >
          <LogOut size={20} />
        </button>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-zinc-950 border-t border-zinc-900 flex items-center justify-around md:hidden z-50 px-4">
        {tabs.map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === tab.id ? 'text-white' : 'text-zinc-600'
            }`}
            style={activeTab === tab.id ? { color: client.accentColor } : {}}
          >
            <tab.icon size={18} />
            <span className="text-[8px] uppercase tracking-widest font-bold">{tab.label}</span>
          </button>
        ))}
      </nav>

      <main className="md:pl-20 pb-20 md:pb-0">
        {/* Header */}
        <header className="h-20 border-b border-zinc-900 flex items-center justify-between px-6 md:px-12 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <h1 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Portal</h1>
            <ChevronRight size={14} className="text-zinc-800" />
            <span className="text-xs md:text-sm font-bold truncate max-w-[150px] md:max-w-none">{client.nomeCliente}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Sessão Ativa</div>
              <div className="text-xs font-bold text-green-500">Seguro & Encriptado</div>
            </div>
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border border-white/10"
              style={{ backgroundColor: `${client.accentColor}20`, color: client.accentColor }}
            >
              {client.nomeCliente.charAt(0)}
            </div>
          </div>
        </header>

        <div className="p-6 md:p-12 max-w-7xl mx-auto">
          {/* Quick Metrics */}
          {!isRentalOnly && (
            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                { label: 'Entregas', value: client.deliverables?.length || 0, icon: Package },
                { label: 'Documentos', value: client.documents?.length || 0, icon: FileText },
                { label: 'Notas', value: (client.notes?.length || 0) + (JSON.parse(localStorage.getItem(`notes_${client.id}`) || '[]').length), icon: MessageSquare },
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-950 border border-zinc-900 p-4 rounded-2xl">
                  <div className="flex items-center gap-3 mb-1">
                    <stat.icon size={12} className="text-zinc-600" />
                    <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">{stat.label}</span>
                  </div>
                  <div className="text-xl font-serif italic">{stat.value}</div>
                </div>
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderTab()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};
