import styles from './page.module.css'
import {Onboarding} from "../src/components/onboarding/Onboarding";

export default function Home() {

    return (
        <main className={styles.main}>
            <Onboarding/>
            <h1>Bienvenu sur Uncover Travel !</h1>
        </main>
    )
}
