import Image from 'next/image';
import styles from './member.module.css';

type MemberTypes = {
  name?: string;
  post?: string;
  profilePicture: string;
};

// Utilisation d'une fonction fléchée avec des props
export const Member = ({name, post, profilePicture}: MemberTypes) => {
  return (
    <div className={styles.member}>
      <div className={styles.textOverlay}>
        <p className={styles.name}>{name}</p>
        <p>{post}</p>
      </div>
      <Image
        src={profilePicture}
        alt={`${name} profile picture`}
        width={300}
        height={300}
      />
    </div>
  );
};
