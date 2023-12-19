'use client';
import React, { createContext, useState, useContext } from 'react';

export type Level = 'Débutant' | 'Intermédiaire' | 'Avancé';

export const LevelChoiceContext = createContext({
  levelChoice: 'Débutant' as Level, // Valeur initiale
  setLevelChoice: (levelChoice: Level) => {}
});

export const useLevelChoice = () => useContext(LevelChoiceContext);

type LevelChoiceProviderProps = {
  children: React.ReactNode;
}

export const LevelChoiceProvider: React.FC<LevelChoiceProviderProps> = ({ children }) => {
  const [levelChoice, setLevelChoice] = useState<Level>('Débutant'); // Specify the type as Level

  return (
    <LevelChoiceContext.Provider value={{ levelChoice, setLevelChoice }}>
      {children}
    </LevelChoiceContext.Provider>
  );
};
