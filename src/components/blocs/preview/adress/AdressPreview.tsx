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
            <span>
              <Image
                src="/icons/map/recommendations/etoile.svg"
                alt="note"
                width={15}
                height={15}
              />{' '}
              {stars}
            </span>
            <span>
              <Image
                src="/icons/map/recommendations/like_noir.svg"
                alt="note"
                width={10}
                height={10}
              />{' '}
              {likes}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
