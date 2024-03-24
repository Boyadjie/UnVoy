import {format} from 'date-fns';
import Image from 'next/image';

import {ArticleProps} from '../../../../types/Article';
import styles from './articlePreview.module.css';

export const ArticlePreview: React.FC<ArticleProps> = ({
  pictureUrl,
  title,
  date,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={pictureUrl} alt={title} width={125} height={125} />
        <button>
          <Image src="/icons/coeur.svg" alt="coeur" width={17} height={17} />
        </button>
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{format(date, 'yyyy-MM-dd')}</p>
      </div>
    </div>
  );
};
