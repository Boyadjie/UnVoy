'use client';
import React, {useState} from 'react';

import {useLevelChoice} from '../../context/LevelChoiceContext';
import LevelChoiceButton from './LevelButton/LevelChoiceButton';
import LevelChoicePopup from './LevelPopup/LevelPopup';

const LevelChoice = () => {
  const {levelChoice, goalChoice} = useLevelChoice();
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn(true);
  };

  const handleClose = () => {
    setIsOn(false);
  };

  return (
    <div>
      <h3>Connaissances : {levelChoice}</h3>
      <h3>Objectif: {goalChoice}</h3>
      <LevelChoiceButton onClick={handleClick} />
      {isOn && <LevelChoicePopup handleClose={handleClose} />}
    </div>
  );
};

export default LevelChoice;
