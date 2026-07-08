import React, { useState, useEffect } from 'react';
import { LogOut, Users, Plus, Search, Filter, MoreVertical, ExternalLink, ChevronRight, Copy, Check, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLIENTS } from '../../data/clients';
import { ClientData } from '../../../types';

interface AdminDashboardProps {
  user: ClientData;
  onLogout: () => void;
  onAccessClient: (clientId: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout, onAccessClient }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdminViewing, setIsAdminViewing] = useState(false);

  useEffect(() => {
    setIsAdminViewing(sessionStorage.getItem('admin_viewing') === 'true');
  }, []);

  const clientsList = CLIENTS as ClientData[];

  const filteredClients = clientsList.filter(c => 
    !c.isAdmin && 
    (c.nomeCliente.toLowerCase().includes(searchQuery.toLowerCase()) || 
     c.nomeProjeto.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const stats = {
    active: clientsList.filter(c => !c.isAdmin).length,
    pending: clientsList.reduce((acc, c) => acc + c.deliverables.filter(d => d.status === 'pending').length, 0),
    notes: clientsList.reduce((acc, c) => acc + c.notes.length, 0)
  };

  const handleAccess = (clientId: string) => {
    sessionStorage.setItem('admin_viewing', 'true');
    onAccessClient(clientId);
  };

  const handleReturnToAdmin = () => {
    sessionStorage.removeItem('admin_viewing');
    window.location.reload();
  };

  const handleCopyKey = (clientId: string, key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedId(clientId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 bg-zinc-950 border-r border-zinc-900 flex flex-col items-center py-8 gap-8 z-50">
        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center font-bold text-black">PM</div>
        <nav className="flex-grow flex flex-col gap-6">
          <button className="w-12 h-12 bg-zinc-900 text-orange-500 flex items-center justify-center rounded-xl"><Users size={20} /></button>
        </nav>
        <button 
          onClick={onLogout}
          className="w-12 h-12 text-zinc-600 hover:text-white transition-colors"
        >
          <LogOut size={20} />
        </button>
      </aside>

      <main className="pl-20">
        {/* Header */}
        <header className="h-20 border-b border-zinc-900 flex items-center justify-between px-12 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Admin Panel</h1>
            <ChevronRight size={14} className="text-zinc-800" />
            <span className="text-sm font-bold">Gestão de Clientes</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-orange-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Procurar cliente..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-900/50 border border-zinc-800 pl-12 pr-6 py-2.5 rounded-full text-xs focus:outline-none focus:border-orange-500/50 w-64 transition-all"
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all hover:scale-105">
              <Plus size={16} /> Novo Cliente
            </button>
          </div>
        </header>

        <div className="p-12 max-w-7xl mx-auto space-y-12">
          {isAdminViewing && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-orange-500 p-4 rounded-2xl flex items-center justify-between text-black"
            >
              <div className="flex items-center gap-3">
                <Users size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Modo de Visualização: Estás a ver o portal como cliente</span>
              </div>
              <button 
                onClick={handleReturnToAdmin}
                className="bg-black text-white px-6 py-2 rounded-xl text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-all"
              >
                <ArrowLeft size={14} /> Voltar ao Admin
              </button>
            </motion.div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Projetos Ativos', value: stats.active.toString().padStart(2, '0'), trend: 'Total' },
              { label: 'Entregas Pendentes', value: stats.pending.toString().padStart(2, '0'), trend: 'Próximas 48h' },
              { label: 'Feedback Novo', value: stats.notes.toString().padStart(2, '0'), trend: 'Não lido' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-900 p-8 rounded-3xl space-y-4 hover:border-zinc-800 transition-all group">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-5xl font-serif italic">{stat.value}</h3>
                  <span className="text-[10px] text-orange-500 font-bold">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Clients List */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Clientes Recentes</h2>
              <button className="text-xs text-zinc-500 hover:text-white flex items-center gap-2">
                <Filter size={14} /> Filtrar por Fase
              </button>
            </div>

            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-900 bg-zinc-900/20">
                    <th className="p-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Cliente / Projeto</th>
                    <th className="p-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Pipeline</th>
                    <th className="p-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Acesso</th>
                    <th className="p-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="hover:bg-zinc-900/20 transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border border-zinc-800"
                            style={{ backgroundColor: `${client.accentColor}20`, color: client.accentColor }}
                          >
                            {client.nomeCliente.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-sm flex items-center gap-2">
                              {client.nomeCliente}
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: client.accentColor }} />
                            </div>
                            <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mt-1">{client.nomeProjeto}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="w-48 space-y-2">
                          <div className="flex justify-between text-[9px] uppercase tracking-widest font-bold">
                            <span className="text-orange-500">{client.pipeline.currentPhase}</span>
                            <span className="text-zinc-600">{client.pipeline.progress}%</span>
                          </div>
                          <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500" style={{ width: `${client.pipeline.progress}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                          <code className="text-[10px] bg-zinc-900 px-3 py-1 rounded-full text-zinc-400">
                            {client.id === 'admin' ? '********' : 'KEY-PROTECTED'}
                          </code>
                          <button 
                            onClick={() => handleCopyKey(client.id, client.key || '')}
                            className="p-1.5 hover:bg-zinc-800 rounded-md transition-colors text-zinc-500 hover:text-white"
                            title="Copiar Key"
                          >
                            {copiedId === client.id ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                          </button>
                        </div>
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => handleAccess(client.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all"
                          >
                            <ExternalLink size={14} /> Aceder
                          </button>
                          <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"><MoreVertical size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
