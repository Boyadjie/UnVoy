'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import {Navbar} from '../../src/components/navbar/Navbar';
import styles from './page.module.css';
const DynamicMapComponent = dynamic(
  () => import('../../src/components/map/MapComponent'),
  {ssr: false},
);

export default function Map() {
  return (
    <>
      <div id={styles.map}>
        <Navbar />
        <section className={styles.layout}>
          <div className={styles.layoutTop}>
            <div className={styles.layoutTitles}>
              <h3 className={styles.layoutTitle}>MAP</h3>
              <p className={styles.layoutSubTitle}>
                {'Logement vers aeroport'}
              </p>
            </div>
            <div className={styles.layoutMenu}>
              <button className={styles.layoutButton}>
                <Image
                  src="/icons/map/layout/map_filter.svg"
                  alt="Icône de filtre"
                  width={25}
                  height={20}
                />
              </button>
              <button className={styles.layoutButton}>
                <Image
                  src="/icons/map/layout/map_path.svg"
                  alt="Icône de chemin"
                  width={25}
                  height={20}
                />
              </button>
            </div>
          </div>
        </section>
        <div className={styles.mapContentContainer}>
          <DynamicMapComponent />
        </div>
      </div>
    </>
  );
}
