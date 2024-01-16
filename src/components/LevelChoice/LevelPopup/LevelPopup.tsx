import React, {useState} from 'react';

import {Goal, Level, useLevelChoice} from '../../../context/LevelChoiceContext';
import {InputRadio} from '../../Form/Inputs/InputRadio';
import styles from './LevelPopup.module.css';

const LEVELS: Level[] = ['Débutant', 'Intermédiaire', 'Avancé'];
const GOALS: Goal[] = ['Tourisme', 'Long-séjour', 'Expatrié'];

type LevelChoicePopupProps = {
  handleClose: () => void;
};

const LevelChoicePopup: React.FC<LevelChoicePopupProps> = ({handleClose}) => {
  const {setLevelChoice, setGoalChoice, levelChoice, goalChoice} =
    useLevelChoice();
  const [levelSelected, setLevelSelected] = useState<Level>(levelChoice);
  const [goalSelected, setGoalSelected] = useState<Goal>(goalChoice);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLevelChoice(levelSelected);
    setGoalChoice(goalSelected);
    handleClose();
  };

  return (
    <div className={styles.popup}>
      <button className={styles.closeButton} onClick={handleClose}>
        Fermer
      </button>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Niveau de connaissances</h2>
          {LEVELS.map((value) => (
            <InputRadio
              key={value}
              label={value}
              name="level"
              value={value}
              defaultValue={levelSelected}
              handleChange={() => setLevelSelected(value)}
            />
          ))}
        </div>
        <div>
          <h2>Objectif de voyage</h2>
          {GOALS.map((value) => (
            <InputRadio
              key={value}
              label={value}
              name="goal"
              value={value}
              defaultValue={goalSelected}
              handleChange={() => setGoalSelected(value)}
            />
          ))}
        </div>
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default LevelChoicePopup;
