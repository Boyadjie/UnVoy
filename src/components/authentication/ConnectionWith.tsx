'use client';
import {useState} from 'react';

import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import Image from 'next/image';

import {auth} from '../../firebase';
import RegisteredPopup from './RegisteredPopup';
import styles from './styles/connection-with.module.css';

const ConnectionWith: React.FC = () => {
  const provider = new GoogleAuthProvider();
  const [success, setSuccess] = useState<boolean>(false);
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      {success && <RegisteredPopup />}
      <p>Or connect with:</p>
      <div className={styles.authChoiceContainer}>
        <div className={styles.authChoice} onClick={() => handleGoogleSignIn()}>
          <Image
            src={`/icons/google.svg`}
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
