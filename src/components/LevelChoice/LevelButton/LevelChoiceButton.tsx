import React from 'react';
import styles from './LevelChoiceButton.module.css';

type LevelChoiceButtonProps = {
  onClick: () => void; // Supposons que onClick est une fonction qui ne prend pas de paramètres et ne retourne rien
};

const LevelChoiceButton: React.FC<LevelChoiceButtonProps> = ({onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Choisissez votre niveau
    </button>
  );
};

export default LevelChoiceButton;
