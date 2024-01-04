import {Header} from '../src/components/landing/header/Header';
import {Partners} from '../src/components/landing/partners/Partners';
import {Story} from '../src/components/landing/story/Story';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Partners />
        <Story />
      </main>
    </>
  );
}
