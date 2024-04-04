import React from 'react';

import Image from 'next/image';

import styles from './styles/connection-with.module.css';

interface ConnectionWithProps {
  authNature: 'login' | 'register';
}

const ConnectionWith: React.FC<ConnectionWithProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  authNature = 'register',
}) => {
  return (
    <div className={styles.container}>
      <p>Or connect with:</p>
      <div className={styles.authChoiceContainer}>
        <div className={styles.authChoice}>
          <Image
            src={`/icons/google.svg`}
            alt={'google connexion'}
            height={24}
            width={24}
          />
        </div>
        <div className={styles.authChoice}>
          <Image
            src={`/icons/phone.svg`}
            alt={'google connexion'}
            height={24}
            width={24}
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectionWith;
