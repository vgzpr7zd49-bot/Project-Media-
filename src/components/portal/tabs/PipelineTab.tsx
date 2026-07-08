
import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { ClientData } from '../../../../types';

interface PipelineTabProps {
  client: ClientData;
}

export const PipelineTab: React.FC<PipelineTabProps> = ({ client }) => {
  const hoje = new Date().toLocaleDateString('pt-PT', {
    weekday: 'long', day: 'numeric', month: 'long'
  });

  return (
    <motion.div 
      key="pipeline"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12"
    >
      <div className="mb-8 space-y-1">
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold">{hoje}</p>
        <h3 className="text-xl font-serif">
          Olá, {client.nomeCliente.split(' ')[0]}. O teu projeto está em{' '}
          <span style={{ color: client.accentColor }}>{client.pipeline.currentPhase}</span>.
        </h3>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-4">{client.nomeProjeto}</h2>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-zinc-500">Estado Actual:</span>
            <Badge color={client.accentColor}>{client.pipeline.currentPhase}</Badge>
          </div>
        </div>
        
        <div className="w-full md:w-64 space-y-2">
          <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-1000 ease-out" 
              style={{ width: `${client.pipeline.progress}%`, backgroundColor: client.accentColor }}
            />
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
            <span>{client.pipeline.progress}%</span>
            <span>Entrega Final</span>
          </div>
          {client.pipeline.deliveryDate && (
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-2">
              Entrega estimada:{' '}
              <span style={{ color: client.accentColor }}>{client.pipeline.deliveryDate}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-zinc-900">
        <div className="space-y-8">
          <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Timeline do Projeto</h3>
          <div className="relative space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-zinc-900">
            {client.pipeline.phases?.map((phase: any, idx: number) => (
              <div key={idx} className="relative pl-10 group">
                <div className="absolute left-0 top-1 z-10">
                  {phase.status === 'completed' ? (
                    <CheckCircle2 size={24} className="text-green-500 bg-black" />
                  ) : phase.status === 'in-progress' ? (
                    <div className="relative">
                      <Circle size={24} className="text-orange-500 bg-black animate-pulse" />
                      <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" />
                    </div>
                  ) : (
                    <Circle size={24} className="text-zinc-800 bg-black" />
                  )}
                </div>
                <div>
                  <h4 className={`text-sm uppercase tracking-widest font-bold ${phase.status === 'pending' ? 'text-zinc-700' : 'text-white'}`}>
                    {phase.name}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">{phase.label}</p>
                  {phase.status === 'in-progress' && (
                    <button
                      onClick={() => {
                        const key = `approval_${client.id}_${phase.name}`;
                        localStorage.setItem(key, 'approved');
                        alert('Fase aprovada. O Rafael será notificado.');
                      }}
                      className="mt-2 text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border transition-all"
                      style={{ borderColor: `${client.accentColor}60`, color: client.accentColor }}
                    >
                      ✓ Aprovar esta fase
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
