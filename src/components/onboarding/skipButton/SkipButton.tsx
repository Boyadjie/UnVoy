import styles from "../onboarding.module.css";
import React from "react";

export const SkipButton: React.FC<{ setDisplayOnboarding: (value: boolean) => void }> = ({setDisplayOnboarding}) => {
    const handleClickSkip = () => {
        localStorage.setItem('displayOnboarding', 'false');
        setDisplayOnboarding(false);
    }

    return (
        <button type="button" className={styles.skipButton} onClick={handleClickSkip}>Passer
        </button>
    );
};
