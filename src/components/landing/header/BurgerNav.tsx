'use client';
import {useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {smoothScroll} from '../../../utils/smothScrollAction';
import styles from './header.module.css';

export const BurgerNav = () => {
  const [open, setOpen] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickHandler = async (e: any) => {
    if (open) {
      e.target.style.transform = 'rotate(180deg)';
      e.target.style.transition = 'transform 0.3s';
    } else {
      e.target.style.transform = 'rotate(0deg)';
      e.target.style.transition = 'transform 0.3s';
    }
    await setOpen(!open);
  };
  return (
    <div className={styles.burgerLinks}>
      <Image
        src={!open ? '/closeBurgerMenu.svg' : '/burgerMenu.svg'}
        alt="Burger Menu Icon"
        width={65}
        height={65}
        onClick={(e) => onClickHandler(e)}
      />
      {!open ? (
        <div className={styles.burgerPopup}>
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
      ) : null}
    </div>
  );
};
