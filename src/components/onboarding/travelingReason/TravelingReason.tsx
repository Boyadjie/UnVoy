import React from 'react';

import {Goal, useLevelChoice} from '../../../context/LevelChoiceContext';
import {InputRadio} from '../../Form/Inputs/InputRadio';
import styles from '../onboarding.module.css';

const GOALS: Goal[] = ['Tourisme', 'Long-séjour', 'Expatrié'];

export const TravelingReason: React.FC<{
  setDisplayedSlide: (slide: number) => void;
}> = ({setDisplayedSlide}) => {
  const {setGoalChoice, goalChoice} = useLevelChoice();

  return (
    <div>
      <h2>OBJECTIF</h2>
      <div className={styles.list}>
        {GOALS.map((value) => (
          <InputRadio
            key={value}
            label={value}
            name="traveling-reason"
            value={value}
            defaultValue={goalChoice}
            handleChange={() => setGoalChoice(value)}
            handleClick={() => setDisplayedSlide(3)}
          />
        ))}
      </div>
    </div>
  );
};
