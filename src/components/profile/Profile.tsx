'use client';

import Image from 'next/image';

import {useLevelChoice} from '../../context/LevelChoiceContext';
import styles from './profile.module.css';

export const Profile = () => {
  const {levelChoice} = useLevelChoice();

  return (
    <div id={styles.profile}>
      <Image src="/user.jpg" alt="Current user" width={69} height={69} />
      <h3>Martin Adam</h3>
      <p>{levelChoice || 'Débutant'}</p>
    </div>
  );
};
