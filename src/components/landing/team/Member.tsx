'use client';
import {useEffect, useState} from 'react';

import Image from 'next/image';

import styles from './member.module.css';

type MemberTypes = {
  name: string;
  post: string;
  profilePicture: string;
};

export const Member = ({name, post, profilePicture}: MemberTypes) => {
  const [, setVw] = useState(0);
  const [memberSideLenght, setMemberSideLenght] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newVw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
      );
      setVw(newVw);
      if (newVw < 768) {
        setMemberSideLenght(newVw / 2);
      } else {
        setMemberSideLenght(newVw / 5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className={styles.member}
      style={{width: `${memberSideLenght}px`, height: `${memberSideLenght}px`}}
    >
      <div className={styles.textOverlay}>
        <p className={styles.name}>{name}</p>
        <p>{post}</p>
      </div>
      <Image
        src={profilePicture}
        alt={`${name} profile picture`}
        fill={true}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
};
