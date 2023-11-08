import Image from 'next/image';

import styles from './styles/textAndImg.module.css';
import {TextBloc} from './TextBloc';

type TextAndImgTypes = {
  pictureDetails: {
    url: string;
    alt: string;
    position?: 'left' | 'right';
  };
  title?: string;
  subtitle?: string;
  id?: string;
  textContent: string | string[];
};

export const TextAndImg: React.FC<TextAndImgTypes> = ({
  pictureDetails,
  title,
  subtitle,
  id,
  textContent,
}) => {
  const picturePosition =
    pictureDetails.position === 'right' ? styles.pictureRight : '';

  return (
    <section id={id} className={`${styles.textAndPicture} ${picturePosition}`}>
      <div className={styles.picture}>
        <Image
          src={pictureDetails.url}
          alt={pictureDetails.alt}
          width={720}
          height={735}
        />
      </div>
      <div className={styles.textContent}>
        <div>
          {subtitle && <h3>{title}</h3>}
          {subtitle && <h2>{subtitle}</h2>}
          <div className={styles.mainContent}>
            <TextBloc content={textContent} />
          </div>
        </div>
      </div>
    </section>
  );
};
