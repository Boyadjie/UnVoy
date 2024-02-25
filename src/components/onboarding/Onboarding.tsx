'use client';
import React, {useEffect, useState} from 'react';

import Image from 'next/image';

import {Concept} from './concept/Concept';
import {EstimatedKnowledges} from './estimatedKnowledges/EstimatedKnowledges';
import {NavigationButtons} from './navigateButtons/NavigationButtons';
import styles from './onboarding.module.css';
import {SkipButton} from './skipButton/SkipButton';
import {TravelingReason} from './travelingReason/TravelingReason';

export const Onboarding: React.FC = () => {
  const firstVisit =
    typeof window !== 'undefined'
      ? !Boolean(localStorage.getItem('displayOnboarding'))
      : true;
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
              <div className={styles.heading}>
                <Image
                  src="/illustrations/onboarding/concept.svg"
                  width={317}
                  height={329}
                  alt="Une personne qui réfléchis à son futur voyage."
                />
              </div>
              <Concept />
              <SkipButton setDisplayOnboarding={setDisplayOnboarding} />
            </div>
          )}
          {displayedSlide === 2 && (
            <div className={styles.card}>
              <div className={styles.heading}>
                <Image
                  src="/illustrations/onboarding/objectif.svg"
                  width={317}
                  height={329}
                  alt="Une personne qui réfléchis à son futur voyage."
                />
              </div>
              <TravelingReason />
              <SkipButton setDisplayOnboarding={setDisplayOnboarding} />
            </div>
          )}
          {displayedSlide === 3 && (
            <div className={styles.card}>
              <div className={styles.heading}>
                <div className={styles.knowledges}>
                  <p>
                    Voyage sans inquiétudes et profite d’une{' '}
                    <span className="colored">expérience personnalisée</span>
                    .
                    <br />
                    Tout va bien,
                    <br /> UnVoy est dans ta poche !
                  </p>
                </div>
              </div>
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
