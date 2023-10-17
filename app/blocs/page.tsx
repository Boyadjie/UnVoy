import {TextAndImg} from '../../src/components/blocs/withText/TextAndImg';
import {TextBloc} from '../../src/components/blocs/withText/TextBloc';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Liste des blocs</h1>

			<section className={styles.blocListContainer}>
				<div>
					<h3>Text Bloc</h3>
					<div>
						<TextBloc content="This is a text" />
						<TextBloc
							content={['This is text 1', 'This is text 2', 'This is text 3']}
						/>
					</div>
				</div>

				<div>
					<h3>Text And Image Bloc</h3>
					<div>
						<TextAndImg
							pictureDetails={{
								url: '/blocs/textAndImage.png',
								alt: 'Product picture',
							}}
							textContent="This is a text with a picture"
						/>
						<TextAndImg
							pictureDetails={{
								url: '/blocs/textAndImage.png',
								alt: 'Product picture',
							}}
							textContent="This is a text with a picture"
							title="This is a title"
							subtitle="This is a subtitle here to support the title"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
