import React from 'react';

import styles from './LevelChoiceButton.module.css';

type LevelChoiceButtonProps = {
  onClick: () => void;
};

const LevelChoiceButton: React.FC<LevelChoiceButtonProps> = ({onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Choisissez votre niveau
    </button>
  );
};

export default LevelChoiceButton;
