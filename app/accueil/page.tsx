import Image from 'next/image';
import Link from 'next/link';

import {Onboarding} from '../../src/components/onboarding/Onboarding';
import {Profile} from '../../src/components/profile/Profile';
import styles from './page.module.css';

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
        <div className={styles.homeContentContainer}></div>
      </div>
    </>
  );
}
