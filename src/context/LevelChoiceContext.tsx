'use client';
import React, {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from 'react';

export type Level = 'Débutant' | 'Intermédiaire' | 'Avancé';
export type Goal = 'Tourisme' | 'Long-séjour' | 'Expatrié';

type LevelChoiceContextType = {
  levelChoice: Level | undefined;
  goalChoice: Goal | undefined;
  setLevelChoice: Dispatch<SetStateAction<Level | undefined>>;
  setGoalChoice: Dispatch<SetStateAction<Goal | undefined>>;
};

export const LevelChoiceContext = createContext<LevelChoiceContextType>({
  levelChoice: undefined,
  goalChoice: undefined,
  setLevelChoice: () => {},
  setGoalChoice: () => {},
});

export const useLevelChoice = () => useContext(LevelChoiceContext);

type LevelChoiceProviderProps = {
  children: React.ReactNode;
};

export const LevelChoiceProvider: React.FC<LevelChoiceProviderProps> = ({
  children,
}) => {
  const [levelChoice, setLevelChoice] = useState<Level | undefined>();
  const [goalChoice, setGoalChoice] = useState<Goal | undefined>();

  return (
    <LevelChoiceContext.Provider
      value={{levelChoice, setLevelChoice, goalChoice, setGoalChoice}}
    >
      {children}
    </LevelChoiceContext.Provider>
  );
};
