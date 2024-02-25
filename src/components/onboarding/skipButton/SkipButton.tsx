import React from 'react';

import styles from '../onboarding.module.css';

export const SkipButton: React.FC<{
  setDisplayOnboarding: (value: boolean) => void;
}> = ({setDisplayOnboarding}) => {
  const handleClickSkip = () => {
    localStorage.setItem('displayOnboarding', 'false');
    setDisplayOnboarding(false);
  };

  return (
    <p className={styles.skipButtonContainer}>
      Tu connais déjà UnVoy ?
      <button
        type="button"
        className={styles.skipButton}
        onClick={handleClickSkip}
      >
        Passer
      </button>
    </p>
  );
};
