import Image from 'next/image';
import Link from 'next/link';

import {AdressPreview} from '../blocs/preview/adress/AdressPreview';
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

const recommendations = [
  {
    title: 'Zerohachi Yakiniku restaurant OCAT',
    subTitle: 'La vraie viande grillée japonaise.',
    stars: 4.9,
    likes: '97%',
    imgUrl:
      '/images/map/recommendations/zerohachi_yakiniku_restaurant_ocat.jpg',
  },
  {
    title: 'Hanasato KOBE',
    subTitle: 'Dégustez du boeuf Hida.',
    stars: 4.6,
    likes: '92%',
    imgUrl: '/images/map/recommendations/hanasato_kobe.jpg',
  },
  {
    title: 'Neiro',
    subTitle: 'La vraie viande grillée japonaise.',
    stars: 4.1,
    likes: '95%',
    imgUrl: '/images/map/recommendations/neiro.jpg',
  },
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
      <div className={styles.recommendations}>
        <p>Recommendations</p>

        {recommendations.map(({title, subTitle, stars, likes, imgUrl}, id) => (
          <AdressPreview
            key={id}
            href="#"
            title={title}
            subTitle={subTitle}
            stars={stars}
            likes={likes}
            imgUrl={imgUrl}
          />
        ))}
      </div>
    </div>
  );
};
