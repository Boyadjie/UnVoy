import React from 'react';

import Image from 'next/Image';
import {useRouter} from 'next/navigation';

import styles from './styles/title.module.css';

interface TitleProps {
  iconUrl: string;
  text: string;
  navigateTo?: string;
}

const Title: React.FC<TitleProps> = ({iconUrl, text, navigateTo = ''}) => {
  const router = useRouter();

  const handleIconClick = () => {
    router.push(navigateTo);
  };

  return (
    <div className={styles.titleContainer}>
      <div className={styles.icon} onClick={handleIconClick}>
        <Image src={iconUrl} alt="icon" height={18} width={18} />
      </div>
      <p className={styles.title}>{text}</p>
    </div>
  );
};

export default Title;
