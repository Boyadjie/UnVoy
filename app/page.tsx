import {Header} from '../src/components/landing/header/Header';
import {Story} from '../src/components/landing/story/Story';
import {Contact} from '../src/components/landing/contact/Contact';
import { Team } from '../src/components/landing/team/Team';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Story />
        <Team />
        <Contact />
      </main>
    </>
  );
}
