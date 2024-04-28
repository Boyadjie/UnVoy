import Image from 'next/image';
import Link from 'next/link';

import styles from './mapPreview.module.css';

export const MapPreview = () => {
  return (
    <div className={styles.previewContainer}>
      <h4>Se repérer au Japon</h4>

      <Link href="#" className={styles.mapContainer}>
        <Image
          src="/illustrations/map.svg"
          width={315}
          height={200}
          alt="Carte"
        />
        <div className={styles.filters}>
          <Image
            src="/icons/map/filter/map_restaurant.svg"
            alt="filtre"
            width={25}
            height={25}
          />
          <Image
            src="/icons/map/filter/map_cle.svg"
            alt="filtre"
            width={25}
            height={25}
          />
          <Image
            src="/icons/map/filter/map_coeur.svg"
            alt="filtre"
            width={25}
            height={25}
          />
          <Image
            src="/icons/map/filter/map_point_interrogation.svg"
            alt="filtre"
            width={25}
            height={25}
          />
          <Image
            src="/icons/map/filter/map_localisation.svg"
            alt="filtre"
            width={25}
            height={25}
          />
          <Image
            src="/icons/map/filter/map_appareil_photo.svg"
            alt="filtre"
            width={25}
            height={25}
          />
          <Image
            src="/icons/map/filter/map_supermarche.svg"
            alt="filtre"
            width={25}
            height={25}
          />
        </div>
      </Link>
    </div>
  );
};
