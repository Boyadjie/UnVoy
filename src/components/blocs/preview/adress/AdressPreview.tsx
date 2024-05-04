import Image from 'next/image';
import Link from 'next/link';

import styles from './adressPreview.module.css';

type AdressProps = {
  href: string;
  title: string;
  subTitle: string;
  stars: number;
  likes: string;
  imgUrl: string;
};

export const AdressPreview: React.FC<AdressProps> = ({
  href,
  title,
  subTitle,
  stars,
  likes,
  imgUrl,
}) => {
  return (
    <Link href={href}>
      <div className={styles.card}>
        <div className={styles.img}>
          <Image src={imgUrl} alt={title} width={85} height={85} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <div className={styles.ratings}>
            <span>⭐ {stars}</span>
            <span>👍 {likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
