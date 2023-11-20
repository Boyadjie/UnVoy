'use client';
import React, { createContext, useState, useContext } from 'react';

export const LevelChoiceContext = createContext({
  levelChoice: 'Débutant', // Valeur initiale
  setLevelChoice: (levelChoice: string) => {}
});

export const useLevelChoice = () => useContext(LevelChoiceContext);

interface LevelChoiceProviderProps {
  children: React.ReactNode;
}

export const LevelChoiceProvider: React.FC<LevelChoiceProviderProps> = ({ children }) => {
  const [levelChoice, setLevelChoice] = useState('Débutant');

  return (
    <LevelChoiceContext.Provider value={{ levelChoice, setLevelChoice }}>
      {children}
    </LevelChoiceContext.Provider>
  );
};
