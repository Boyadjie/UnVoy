import {Contact} from '../src/components/landing/contact/Contact';
import {Header} from '../src/components/landing/header/Header';
import {Partners} from '../src/components/landing/partners/Partners';
import {Product} from '../src/components/landing/product/Product';
import {Separator} from '../src/components/landing/separator/Separator';
import {Story} from '../src/components/landing/story/Story';
import {Team} from '../src/components/landing/team/Team';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Partners />
        <Product />
        <Separator />
        <Story />
        <Team />
        <Contact />
      </main>
    </>
  );
}
