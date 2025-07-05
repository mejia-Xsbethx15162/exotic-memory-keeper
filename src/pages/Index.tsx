import React, { useState } from 'react';
import { AuthForm } from '@/components/AuthForm';
import { TravelMemoryCard } from '@/components/TravelMemoryCard';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name: string) => {
    setIsAuthenticated(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
  };

  if (!isAuthenticated) {
    return <AuthForm onLogin={handleLogin} />;
  }

  return <TravelMemoryCard userName={userName} onLogout={handleLogout} />;
};

export default Index;
