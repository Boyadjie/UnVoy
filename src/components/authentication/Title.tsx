'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './styles/title.module.css';

interface TitleProps {
  iconUrl: string;
  text: string;
  navigateTo?: string;
}

const Title: React.FC<TitleProps> = ({iconUrl, text, navigateTo = ''}) => {
  return (
    <div className={styles.titleContainer}>
      <Link href={navigateTo}>
        <Image src={iconUrl} alt="icon" height={18} width={18} />
      </Link>
      <p className={styles.title}>{text}</p>
    </div>
  );
};

export default Title;
