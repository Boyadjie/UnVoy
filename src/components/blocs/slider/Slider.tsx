import Image from 'next/image';
import Link from 'next/link';

import {ArticleProps} from '../../../types/Article';
import {ArticlePreview} from '../preview/article/ArticlePreview';
import styles from './slider.module.css';

type SliderProps = {
  title: string;
  items: ArticleProps[];
  link: string;
};

export const Slider: React.FC<SliderProps> = ({title, items, link}) => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.header}>
        <Link href={link}>
          <h4>{title}</h4>
          <Image src="/long_arrow.svg" alt="Flèche" width={17} height={12} />
        </Link>
      </div>
      <div className={styles.scrollArea}>
        <div className={styles.slider}>
          {items.map((item, key) => (
            <ArticlePreview
              title={item.title}
              date={item.date}
              pictureUrl={item.pictureUrl}
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
