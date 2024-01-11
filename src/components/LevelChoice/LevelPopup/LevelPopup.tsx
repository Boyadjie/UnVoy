import React, {useState} from 'react';

import {Goal, Level, useLevelChoice} from '../../../context/LevelChoiceContext';
import styles from './LevelPopup.module.css';

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
      <button onClick={handleClose}>Fermer</button>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Niveau de connaissances</h2>
          <label>
            <input
              type="radio"
              name="level"
              value="Débutant"
              onChange={() => setLevelSelected('Débutant')}
            />
            Débutant
          </label>
          <label>
            <input
              type="radio"
              name="level"
              value="Intermédiaire"
              onChange={() => setLevelSelected('Intermédiaire')}
            />
            Intermédiaire
          </label>
          <label>
            <input
              type="radio"
              name="level"
              value="Avancé"
              onChange={() => setLevelSelected('Avancé')}
            />
            Avancé
          </label>
        </div>
        <div>
          <h2>Objectif de voyage</h2>
          <label>
            <input
              type="radio"
              name="goal"
              value="Tourisme"
              onChange={() => setGoalSelected('Tourisme')}
            />
            Tourisme
          </label>
          <label>
            <input
              type="radio"
              name="goal"
              value="Long-séjour"
              onChange={() => setGoalSelected('Long-séjour')}
            />
            Long-séjour
          </label>
          <label>
            <input
              type="radio"
              name="goal"
              value="Expatrié"
              onChange={() => setGoalSelected('Expatrié')}
            />
            Expatrié
          </label>
        </div>
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default LevelChoicePopup;
