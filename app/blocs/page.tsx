import styles from './page.module.css'
import {TextBloc} from "../../src/components/Blocs/WithText/TextBloc";
import {TextAndImg} from "../../src/components/Blocs/WithText/TextAndImg";

export default function Home() {

    return (
        <main className={styles.main}>
            <h1>Liste des blocs</h1>

            <div>
                <TextBloc content="This is a text"/>
                <TextBloc content={["This is text 1", "This is text 2", "This is text 3"]}/>
            </div>

            <div>
                <TextAndImg pictureDetails={{
                    url: '/blocs/textAndImage.png',
                    alt: 'Product picture'
                }} textContent="This is a text with a picture"/>
            </div>
        </main>
    )
}
