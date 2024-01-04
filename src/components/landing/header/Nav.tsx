'use client';
import Link from 'next/link';

import {smoothScroll} from '../../../utils/smothScrollAction';
import styles from './header.module.css';

export const Nav = () => {
  return (
    <div className={styles.links}>
      <Link href="/#product" onClick={(e) => smoothScroll(e, 'product')}>
        Le produit
      </Link>
      <Link href="/#team" onClick={(e) => smoothScroll(e, 'team')}>
        L'équipe
      </Link>
      <Link href="/#contact" onClick={(e) => smoothScroll(e, 'contact')}>
        Nous contacter
      </Link>
      <Link href="/Accueil">Découvrir</Link> {/* button */}
    </div>
  );
};
