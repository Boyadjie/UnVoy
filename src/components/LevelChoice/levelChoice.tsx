'use client';
import LevelChoiceButton from './LevelButton/LevelChoiceButton';
import LevelChoicePopup from './LevelPopup/LevelPopup';
import React, { useState } from 'react';

const LevelChoice = () => {
    const [isOn, setIsOn] = useState(false);
    const handleClick = () => {
        setIsOn(true);
        console.log("Bouton cliqué !");
        };

    const handleClose = () => {
        setIsOn(false);
    console.log("Ferme moi ça!");
    };

  return (
    <div>
      <h1>Voici le bouton de la popup!</h1>
      <LevelChoiceButton onClick={handleClick} />
      { isOn && <LevelChoicePopup onClose={handleClose} />}
    </div>
  );
}

export default LevelChoice;
