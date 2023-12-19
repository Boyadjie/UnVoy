import React from 'react';
import styles from './LevelPopup.module.css';
import { useLevelChoice } from '../../../context/LevelChoiceContext';

type LevelChoicePopupProps = {
    onClose: () => void;
  }

type Level = 'Débutant' | 'Intermédiaire' | 'Avancé';

const LevelChoicePopup: React.FC<LevelChoicePopupProps> = ({ onClose }) => {
    const { levelChoice, setLevelChoice } = useLevelChoice();
    // fontion triggered when a level is selected
    const onLevelSelect = (value:Level) => {
        setLevelChoice(value);
      };

  return (
    <div className={styles.popup} >
      <div className="popup">
        <h2>Choisissez le niveau</h2>
        <button onClick={() => onLevelSelect('Débutant')}>Débutant</button>
        <button onClick={() => onLevelSelect('Intermédiaire')}>Intermédiaire</button>
        <button onClick={() => onLevelSelect('Avancé')}>Avancé</button>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default LevelChoicePopup;
