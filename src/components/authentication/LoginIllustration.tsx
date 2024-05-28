import React from 'react';

import Image from 'next/image';

import styles from './styles/LoginIllustration.module.css';

const LoginIllustration = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/illustrations/auth/character.svg"
        alt="login illustration"
        width={245}
        height={213}
        className={styles.character}
      />
      <Image
        src="/illustrations/auth/orangeBase.svg"
        alt="login illustration"
        width={320}
        height={33}
        className={styles.base}
      />
    </div>
  );
};

export default LoginIllustration;
