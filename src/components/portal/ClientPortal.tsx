import React from 'react';
import { AnimatePresence } from 'motion/react';
import { LoginScreen } from './LoginScreen';
import { AdminDashboard } from './AdminDashboard';
import { ClientDashboard } from './ClientDashboard';
import { useClientAuth } from '../../hooks/useClientAuth';

export default function ClientPortal() {
  const { 
    client, 
    login, 
    logout, 
    error, 
    attempts, 
    isLoading, 
    lockoutUntil,
    adminAccess
  } = useClientAuth();

  if (isLoading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-12 h-12 border-t-2 border-white rounded-full animate-spin" />
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      {!client ? (
        <LoginScreen 
          key="login" 
          onLogin={login} 
          isVerifying={isLoading}
          error={error}
          lockoutUntil={lockoutUntil}
        />
      ) : client.isAdmin ? (
        <AdminDashboard 
          key="admin" 
          user={client} 
          onLogout={logout} 
          onAccessClient={adminAccess}
        />
      ) : (
        <ClientDashboard 
          key="client" 
          client={client} 
          onLogout={logout} 
        />
      )}
    </AnimatePresence>
  );
}
