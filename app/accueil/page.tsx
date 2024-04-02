import Image from 'next/image';
import Link from 'next/link';

import {Slider} from '../../src/components/blocs/slider/Slider';
import {Onboarding} from '../../src/components/onboarding/Onboarding';
import {Profile} from '../../src/components/profile/Profile';
import styles from './page.module.css';

const tempData = [
  {
    title: 'Préparer son voyage en 5 étapes',
    date: new Date('2024-06-05'),
    pictureUrl: '/user.jpg',
  },
  {
    title: 'Vie locale : conseils pratiques',
    date: new Date('2024-11-09'),
    pictureUrl: '/user.jpg',
  },
  {
    title: 'Où manger local ?',
    date: new Date('2024-03-01'),
    pictureUrl: '/user.jpg',
  },
  {
    title: 'Transports et déplacements',
    date: new Date('2024-03-23'),
    pictureUrl: '/user.jpg',
  },
];

export default function Home() {
  return (
    <>
      <div id={styles.home}>
        <Onboarding />
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
            items={tempData}
            link="/accueil#"
          />
          <Slider title="Actualités" items={tempData} link="/accueil#" />
        </div>
      </div>
    </>
  );
}
