import Image from 'next/image';

import {productData} from '../../../data/landingPageProduct';
import styles from './arguments.module.css';

export const Arguments = () => {
  const cardsData = productData.cards;
  return (
    // icons from public folder
    <div className={styles.argumentsList}>
      {cardsData.map(({title, description, iconUrl, color}, id) => {
        return (
          <div className={styles.argument} key={`arguments-${id + 1}`}>
            <div
              style={{backgroundColor: color}}
              className={styles.iconContainer}
            >
              <Image
                src={iconUrl}
                alt={`icon-${id + 1}`}
                width={50}
                height={50}
              />
            </div>
            <h3 style={{color: color}}>{title}</h3>
            {description}
          </div>
        );
      })}
    </div>
  );
};
