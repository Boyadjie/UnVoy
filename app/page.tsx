import {Onboarding} from '../src/components/onboarding/Onboarding';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Onboarding />
      <h1>Bienvenu sur Uncover Travel !</h1>
    </main>
  );
}
