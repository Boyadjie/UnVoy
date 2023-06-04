'use client'
import React, {useEffect, useState} from "react";
import {Concept} from "./concept/Concept";
import styles from './onboarding.module.css'

export const Onboarding: React.FC = () => {
    const firstVisit = !Boolean(localStorage.getItem('displayOnboarding'));
    const [displayOnboarding, setDisplayOnboarding] = useState<boolean>(false);
    const [displayedSlide, setDisplayedSlide] = useState<number>(1);

    useEffect(() => {
        firstVisit ? setDisplayOnboarding(true) : setDisplayOnboarding(false)
    }, [displayOnboarding])

    const handleClickSkip = () => {
        localStorage.setItem('displayOnboarding', 'false');
        setDisplayOnboarding(false);
    }

    return (
        <>
            {displayOnboarding && (
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.heading}>
                            UNCOVER
                        </div>
                        {displayedSlide === 1 && (
                            <Concept/>
                        )}
                        <button type="button" className={styles.skipButton} onClick={handleClickSkip}>Passer</button>
                    </div>
                </div>
            )}
        </>
    );
};
