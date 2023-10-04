'use client';
import React, {useEffect, useState} from 'react';

import {Concept} from './concept/Concept';
import {EstimatedKnowledges} from './estimatedKnowledges/EstimatedKnowledges';
import {NavigationButtons} from './navigateButtons/NavigationButtons';
import styles from './onboarding.module.css';
import {SkipButton} from './skipButton/SkipButton';
import {TravelingReason} from './travelingReason/TravelingReason';

export const Onboarding: React.FC = () => {
  const firstVisit = !Boolean(localStorage.getItem('displayOnboarding'));
  const [displayOnboarding, setDisplayOnboarding] = useState<boolean>(false);
  const [displayedSlide, setDisplayedSlide] = useState<number>(1);

  useEffect(() => {
    firstVisit ? setDisplayOnboarding(true) : setDisplayOnboarding(false);
  }, [displayOnboarding, firstVisit]);

  return (
    <>
      {displayOnboarding && (
        <div className={styles.container}>
          <NavigationButtons
            displayedSlide={displayedSlide}
            setDisplayedSlide={setDisplayedSlide}
          />
          {displayedSlide === 1 && (
            <div className={styles.card}>
              <div className={styles.heading}>UNCOVER</div>
              <Concept />
              <SkipButton setDisplayOnboarding={setDisplayOnboarding} />
            </div>
          )}
          {displayedSlide === 2 && (
            <div className={styles.card}>
              <div className={styles.heading}>UNCOVER 2</div>
              <TravelingReason />
              <SkipButton setDisplayOnboarding={setDisplayOnboarding} />
            </div>
          )}
          {displayedSlide === 3 && (
            <div className={styles.card}>
              <div className={styles.heading}>UNCOVER 3</div>
              <EstimatedKnowledges
                setDisplayOnboarding={setDisplayOnboarding}
              />
              <SkipButton setDisplayOnboarding={setDisplayOnboarding} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
