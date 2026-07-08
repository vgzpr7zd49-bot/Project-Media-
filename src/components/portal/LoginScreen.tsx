
import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LoginScreenProps {
  onLogin: (key: string) => Promise<void>;
  isVerifying: boolean;
  error: string | null;
  lockoutUntil: number | null;
}

const LoadingSpinner = () => <Loader2 className="animate-spin" size={16} />;

export const LoginScreen: React.FC<LoginScreenProps> = ({ 
  onLogin, 
  isVerifying, 
  error, 
  lockoutUntil
}) => {
  const [inputKey, setInputKey] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localCountdown, setLocalCountdown] = useState(0);

  useEffect(() => {
    if (!lockoutUntil) {
      setLocalCountdown(0);
      return;
    }

    const update = () => {
      const remaining = Math.max(0, Math.ceil((lockoutUntil - Date.now()) / 1000));
      setLocalCountdown(remaining);
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [lockoutUntil]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(inputKey);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-serif tracking-tighter">PROJECT MEDIA <span className="text-[10px] uppercase font-sans tracking-[0.4em] text-zinc-600">INC.</span></h1>
          <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Acesso Privado · Client Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-zinc-600">
              <Lock size={16} />
            </div>
            <input 
              type={showPassword ? "text" : "password"}
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && inputKey && !lockoutUntil && !isVerifying) {
                  onLogin(inputKey);
                }
              }}
              placeholder="PM-XXXX-XXXX"
              autoComplete="off"
              autoCorrect="off"
              disabled={!!lockoutUntil || isVerifying}
              className="w-full bg-zinc-900/30 border border-zinc-900 focus:border-zinc-700 text-white px-14 py-5 rounded-2xl text-sm tracking-widest focus:outline-none transition-all placeholder:text-zinc-800"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-6 flex items-center text-zinc-600 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-[10px] uppercase tracking-widest text-red-500 font-bold text-center"
              >
                {error}
              </motion.p>
            )}
            {lockoutUntil && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-[10px] uppercase tracking-widest text-orange-500 font-bold text-center"
              >
                Demasiadas tentativas. Aguarda {localCountdown} segundos.
              </motion.p>
            )}
          </AnimatePresence>

          <button 
            type="submit"
            disabled={!inputKey || !!lockoutUntil || isVerifying}
            className="w-full bg-white text-black py-5 rounded-2xl text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-200 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {isVerifying ? <LoadingSpinner /> : "Autenticar"}
          </button>
        </form>

        <div className="text-center">
          <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-700 font-bold">
            Perdeste a tua chave? Contacta o Rafael.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
