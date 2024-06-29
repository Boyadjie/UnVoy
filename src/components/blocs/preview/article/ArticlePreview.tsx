import {format} from 'date-fns';
import Image from 'next/image';

import {ArticleProps} from '../../../../types/Article';
import styles from './articlePreview.module.css';

export const ArticlePreview: React.FC<ArticleProps> = ({
  pictureUrl,
  title,
  date,
  fullWidth,
  rate,
}) => {
  return (
    <div className={`${styles.card} ${fullWidth ? styles.fullWidth : ''}`}>
      <div className={styles.imageContainer}>
        <Image src={pictureUrl} alt={title} width={125} height={125} />
        {rate && (
          <span className={styles.rate}>
            <Image
              src="/icons/map/recommendations/like_noir.svg"
              alt="note"
              width={10}
              height={10}
            />{' '}
            {rate * 100}%
          </span>
        )}
        <button>
          <Image src="/icons/coeur.svg" alt="coeur" width={17} height={17} />
        </button>
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{format(date, 'd MMM. yyyy')}</p>
      </div>
    </div>
  );
};
