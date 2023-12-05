import Image from 'next/image';
import Link from 'next/link';

import {PrimaryButton} from '../../buttons/PrimaryButton';
import {BubbleMini} from '../../decorations/BubbleMini';
import {BubbleSquare} from '../../decorations/BubbleSquare';
import styles from './header.module.css';
import {Nav} from './Nav';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Image
          src="/logo_unvoy.svg"
          alt="Unvoy's Logo"
          width={184}
          height={65}
        />
        <Nav />
      </nav>

      <section>
        <div>
          <BubbleSquare />
          <BubbleMini />

          <h1>
            <strong>Découvrez le monde</strong>
            <br />
            sous un meilleur angle
          </h1>
          <PrimaryButton url="/Acceuil">En savoir +</PrimaryButton>
        </div>

        <Image
          src="/illustrations/header.svg"
          alt="Deux voyageurs en quête de découvrir le monde"
          width={536}
          height={490}
        />
      </section>
    </header>
  );
};
