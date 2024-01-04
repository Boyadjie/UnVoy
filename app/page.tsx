import {Header} from '../src/components/landing/header/Header';
import {Story} from '../src/components/landing/story/Story';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Story />
      </main>
    </>
  );
}
