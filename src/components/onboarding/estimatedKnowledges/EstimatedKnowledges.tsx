import React from 'react';

import {Level, useLevelChoice} from '../../../context/LevelChoiceContext';
import {InputRadio} from '../../Form/Inputs/InputRadio';
import styles from '../onboarding.module.css';

const LEVELS: Level[] = ['Débutant', 'Intermédiaire', 'Avancé'];

export const EstimatedKnowledges: React.FC<{
  setDisplayOnboarding: (value: boolean) => void;
}> = ({setDisplayOnboarding}) => {
  const {setLevelChoice, levelChoice} = useLevelChoice();
  const handleSendKnowledges = () => {
    setDisplayOnboarding(false);
    localStorage.setItem('displayOnboarding', 'false');
  };

  return (
    <div>
      <h2>Connaissances</h2>
      <div className={styles.list}>
        {LEVELS.map((value) => (
          <InputRadio
            key={value}
            label={value}
            name="knowledges-lvl"
            value={value}
            defaultValue={levelChoice}
            handleChange={() => setLevelChoice(value)}
          />
        ))}
      </div>

      <input type="submit" value="C’est parti" onClick={handleSendKnowledges} />
    </div>
  );
};
