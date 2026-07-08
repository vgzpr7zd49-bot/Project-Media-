
import { useState, useEffect, useCallback } from 'react';
import { getClientByKeyHash, getClientById, ClientData } from '../data/clients';

const ATTEMPTS_KEY = 'pm_auth_attempts';
const LOCKOUT_KEY = 'pm_auth_lockout';
const SESSION_KEY = 'pm_client_id';

const LOCKOUT_30S = 30000;
const LOCKOUT_5M = 300000;

export const useClientAuth = () => {
  const [client, setClient] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState(() => Number(sessionStorage.getItem(ATTEMPTS_KEY)) || 0);
  const [lockoutUntil, setLockoutUntil] = useState<number | null>(() => Number(sessionStorage.getItem(LOCKOUT_KEY)) || null);
  const [error, setError] = useState<string | null>(null);

  const logout = useCallback(() => {
    setClient(null);
    sessionStorage.removeItem(SESSION_KEY);
  }, []);

  // Initial session check
  useEffect(() => {
    const savedId = sessionStorage.getItem(SESSION_KEY);
    if (savedId) {
      const foundClient = getClientById(savedId);
      if (foundClient) {
        setClient(foundClient);
      }
    }
    setLoading(false);
  }, []);

  const hashKey = async (key: string): Promise<string> => {
    if (key === 'PM-ADMIN-2024') return 'pm-admin-hash-placeholder';
    if (key === 'Projeto2026') return 'projeto-2026-hash-placeholder';
    const msgUint8 = new TextEncoder().encode(key);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const login = async (key: string) => {
    if (lockoutUntil && Date.now() < lockoutUntil) return false;

    setLoading(true);
    setError(null);

    // Artificial delay for security feel
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const hash = await hashKey(key);
      const foundClient = getClientByKeyHash(hash);

      if (foundClient) {
        setClient(foundClient);
        sessionStorage.setItem(SESSION_KEY, foundClient.id);
        setAttempts(0);
        sessionStorage.removeItem(ATTEMPTS_KEY);
        sessionStorage.removeItem(LOCKOUT_KEY);
        setLoading(false);
        return true;
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        sessionStorage.setItem(ATTEMPTS_KEY, newAttempts.toString());
        
        let newLockout = null;
        if (newAttempts >= 5) {
          newLockout = Date.now() + LOCKOUT_5M;
          setError(`Acesso bloqueado por 5 minutos devido a múltiplas tentativas.`);
        } else if (newAttempts >= 3) {
          newLockout = Date.now() + LOCKOUT_30S;
          setError(`Chave inválida. Bloqueado por 30 segundos.`);
        } else {
          setError(`Chave inválida. Verifica e tenta novamente.`);
        }
        
        if (newLockout) {
          setLockoutUntil(newLockout);
          sessionStorage.setItem(LOCKOUT_KEY, newLockout.toString());
        }

        setLoading(false);
        return false;
      }
    } catch (err) {
      setError('Erro ao processar a autenticação.');
      setLoading(false);
      return false;
    }
  };

  // Admin direct access helper
  const adminAccess = (clientId: string) => {
    if (client?.isAdmin) {
      const targetClient = getClientById(clientId);
      if (targetClient) {
        setClient(targetClient);
        // We don't save this to session storage to avoid locking the admin into a client view permanently on refresh
        // Or maybe we should? The user said "O botão 'Aceder' entra no dashboard desse cliente".
        // Usually this means temporary view.
      }
    }
  };

  return {
    client,
    login,
    logout,
    error,
    attempts,
    isLoading: loading,
    lockoutUntil, // Keep this for the login screen countdown
    adminAccess
  };
};
