import Image from 'next/image';

import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <a href="/accueil">
          <li>
            <Image
              src="/icons/nav/home.svg"
              alt="Accueil"
              width={24}
              height={24}
            />
          </li>
        </a>
        <a href="/articles">
          <li>
            <Image
              src="/icons/nav/articles.svg"
              alt="Articles"
              width={24}
              height={24}
            />
          </li>
        </a>
        <a href="" className={styles.centerLink}>
          <li>
            <Image
              src="/icons/nav/map.svg"
              alt="Carte"
              width={60}
              height={60}
            />
          </li>
        </a>
        <a href="">
          <li>
            <Image
              src="/icons/nav/favoris.svg"
              alt="Favoris"
              width={24}
              height={24}
            />
          </li>
        </a>
        <a href="">
          <li>
            <Image
              src="/icons/nav/recherche.svg"
              alt="Recherche"
              width={24}
              height={24}
            />
          </li>
        </a>
      </ul>
    </nav>
  );
};
