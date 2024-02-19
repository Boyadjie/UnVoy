'use client';
import React, {createContext, useState, useContext} from 'react';

export type Level = 'Débutant' | 'Intermédiaire' | 'Avancé';
export type Goal = 'Tourisme' | 'Long-séjour' | 'Expatrié';

export const LevelChoiceContext = createContext({
  levelChoice: 'Débutant' as Level,
  goalChoice: 'Tourisme' as Goal,
  setLevelChoice: (levelChoice: Level) => {},
  setGoalChoice: (goalChoice: Goal) => {},
});

export const useLevelChoice = () => useContext(LevelChoiceContext);

type LevelChoiceProviderProps = {
  children: React.ReactNode;
};

export const LevelChoiceProvider: React.FC<LevelChoiceProviderProps> = ({
  children,
}) => {
  const [levelChoice, setLevelChoice] = useState<Level>('Débutant'); // Specify the type as Level
  const [goalChoice, setGoalChoice] = useState<Goal>('Tourisme'); // Specify the type as Goal

  return (
    <LevelChoiceContext.Provider
      value={{levelChoice, setLevelChoice, goalChoice, setGoalChoice}}
    >
      {children}
    </LevelChoiceContext.Provider>
  );
};
