import Image from 'next/image';
import Link from 'next/link';

import styles from './mapPreview.module.css';

const filtersImageUrls = [
  '/icons/map/filter/map_restaurant.svg',
  '/icons/map/filter/map_cle.svg',
  '/icons/map/filter/map_coeur.svg',
  '/icons/map/filter/map_point_interrogation.svg',
  '/icons/map/filter/map_localisation.svg',
  '/icons/map/filter/map_appareil_photo.svg',
  '/icons/map/filter/map_supermarche.svg',
];

export const MapPreview = () => {
  return (
    <div className={styles.previewContainer}>
      <h4>Se repérer au Japon</h4>

      <div className={styles.mapContainer}>
        <Link href="#">
          <Image
            src="/illustrations/map.svg"
            width={315}
            height={200}
            alt="Carte"
          />
        </Link>
        <div className={styles.filters}>
          {filtersImageUrls.map((url, id) => (
            <Image
              key={id}
              className={styles.filter}
              src={url}
              alt="filtre"
              width={25}
              height={25}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
