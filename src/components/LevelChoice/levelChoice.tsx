'use client';
import React, {useState} from 'react';

import LevelChoiceButton from './LevelButton/LevelChoiceButton';
import LevelChoicePopup from './LevelPopup/LevelPopup';

const LevelChoice = () => {
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn(true);
  };

  const handleClose = () => {
    setIsOn(false);
  };

  return (
    <div>
      <h1>Choisi tes objectifs!</h1>
      <LevelChoiceButton onClick={handleClick} />
      {isOn && <LevelChoicePopup onClose={handleClose} />}
    </div>
  );
};

export default LevelChoice;
