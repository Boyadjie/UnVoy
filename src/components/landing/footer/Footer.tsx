import Image from 'next/image';
import Link from 'next/link';

import {footerData} from '../../../data/landingPageFooter';
import styles from './footer.module.css';
import {Separator} from '../separator/Separator';

export const Footer = () => {
  const imgUrl = footerData.illustration.imgUrl;
  const instaDta = footerData.socialNetworks.instagram;
  return (
    <section className={styles.footer} id="footer">
      <div className={styles.logoContainer}>
        <Image
          src={imgUrl}
          alt={footerData.illustration.description}
          width={footerData.illustration.width}
          height={footerData.illustration.height}
        />
      </div>
      <div className={styles.rightSide}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#product">Le produit</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#team">L'équipe</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact">Nous contacter</Link>
            </li>
          </ul>
        </nav>
        <Separator />
        <Link href={instaDta.link} className={styles.socialMedia}>
          Nous suivre sur Instagram
          <Image
            src={instaDta.imgUrl}
            alt={instaDta.description}
            width={instaDta.width}
            height={instaDta.height}
          />
        </Link>
        <p className={styles.copyRight}> © Copyright 2023, UNVOY</p>
      </div>
    </section>
  );
};
