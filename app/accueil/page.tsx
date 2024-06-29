import Image from 'next/image';
import Link from 'next/link';

import {Slider} from '../../src/components/blocs/slider/Slider';
import {MapPreview} from '../../src/components/map/MapPreview';
import {Navbar} from '../../src/components/navbar/Navbar';
import {Onboarding} from '../../src/components/onboarding/Onboarding';
import {Profile} from '../../src/components/profile/Profile';
import {actus, articles} from '../../src/data/homePage';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div id={styles.home}>
        <Onboarding />
        <Navbar />
        <section className={styles.header}>
          <div className={styles.navigation}>
            <div>
              <Image
                src="/icons/notifications.svg"
                alt="Icône de notification"
                width={24}
                height={24}
              />
            </div>
            <Link href="/settings">
              <Image
                src="/icons/setting.svg"
                alt="Icône de paramètre"
                width={28}
                height={28}
              />
            </Link>
          </div>
          <Profile />
        </section>
        <div className={styles.homeContentContainer}>
          <Slider
            title="Articles conseillés"
            items={articles}
            link="/articles"
          />
          <Slider title="Actualités" items={actus} link="/accueil#" />
          <MapPreview />
        </div>
      </div>
    </>
  );
}
