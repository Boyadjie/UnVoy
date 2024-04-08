import React from 'react';

import Image from 'next/image';
import {useRouter} from 'next/navigation';

import styles from './styles/registeredPopup.module.css';

const RegisteredPopup = () => {
  const router = useRouter();

  const handleClick = (skip = false) => {
    if (skip && !localStorage.getItem('displayOnboarding')) {
      localStorage.setItem('displayOnboarding', 'true');
    }
    router.push('/accueil', {scroll: false});
  };

  return (
    <div className={styles.registeredPopupContainer}>
      <div className={styles.illustrationsContainer}>
        <Image
          src="/illustrations/auth/owl.svg"
          width={150}
          height={180}
          alt="Owl logo."
          className={styles.owl}
        />
        <Image
          src="/illustrations/auth/orangeDot.svg"
          width={30}
          height={30}
          alt="orange dot."
          className={styles.orangeDot}
        />
        <Image
          src="/illustrations/auth/blueWave.svg"
          width={80}
          height={80}
          alt="blue wave."
          className={styles.blueWave}
        />
        <Image
          src="/illustrations/auth/decoDots.svg"
          width={60}
          height={60}
          alt="deco dots."
          className={styles.decoDots}
        />
        <Image
          src="/illustrations/auth/yellowDOt.svg"
          width={17}
          height={17}
          alt="yellow dot."
          className={styles.yellowDot}
        />
      </div>
      <h1>REGISTRATION VALIDATED</h1>
      <h3>
        {' '}
        UnVoy is in your pocket!
        <br /> Are you ready to discover Japan?
      </h3>
      <button onClick={() => handleClick(false)} className={styles.button}>
        Get started
      </button>
      <p>
        You already know Japan UnVoy?{' '}
        <b onClick={() => handleClick(true)}>Skip</b>
      </p>
    </div>
  );
};

export default RegisteredPopup;
