import Image from 'next/image';

import {productData} from '../../../data/landingPageProduct';
import {BubbleMiniBlue} from '../../decorations/BubbleMiniBlue';
import {BubbleNineSquare} from '../../decorations/BubbleNineSquare';
import styles from './mokup.module.css';

export const Mokup = () => {
  const imgUrl = productData.mokup.imgUrl;

  return (
    // image from public folder
    <div className={styles.container}>
      <div className={styles.bubbleSquare}>
        <BubbleNineSquare />
      </div>
      <div className={styles.bubbleMiniBlue}>
        <BubbleMiniBlue />
      </div>
      <Image
        src={imgUrl}
        alt="mokup"
        width={400} // 1 because width is required
        height={640} // 1 because height is required
        className={styles.mokupImage}
      />
    </div>
  );
};
