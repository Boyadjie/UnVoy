import React from 'react';
import styles from './LevelPopup.module.css';
import { useLevelChoice } from '../../../context/LevelChoiceContext';

interface LevelChoicePopupProps {
    onClose: () => void;
  }

  

const LevelChoicePopup: React.FC<LevelChoicePopupProps> = ({ onClose }) => {
    const { levelChoice, setLevelChoice } = useLevelChoice();
    // fonction quand on selectione un niveau
    const onLevelSelect = (value:any) => {
        console.log("J'ai choisi !");
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
