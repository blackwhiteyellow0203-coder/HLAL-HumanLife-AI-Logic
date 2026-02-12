import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LegalPage from './components/LegalPage';
import ProfilePage from './components/ProfilePage';
import DesignSelector from './components/DesignSelector';
import { DESIGN_SYSTEMS } from './constants';
import { DesignSystem } from './types';

const App: React.FC = () => {
  // Default to Sovereign Gold (index 0)
  const [currentSystem, setCurrentSystem] = useState<DesignSystem>(DESIGN_SYSTEMS[0]);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [page, setPage] = useState<'home' | 'legal' | 'profile'>('home');

  const handleSystemSelect = (system: DesignSystem) => {
    setCurrentSystem(system);
  };

  return (
    <div className="relative">
      {page === 'home' ? (
        <LandingPage system={currentSystem} onNavigate={setPage} />
      ) : page === 'legal' ? (
        <LegalPage system={currentSystem} onNavigate={setPage} />
      ) : (
        <ProfilePage system={currentSystem} onNavigate={setPage} />
      )}
      
      <DesignSelector 
        currentSystem={currentSystem} 
        onSelect={handleSystemSelect} 
        isOpen={isSelectorOpen}
        setIsOpen={setIsSelectorOpen}
      />
    </div>
  );
};

export default App;