import styles from './navigationButtons.module.css';

export const NavigationButtons: React.FC<{
	displayedSlide: number;
	setDisplayedSlide: (slide: number) => void;
}> = ({displayedSlide, setDisplayedSlide}) => {
	const hideFirst = displayedSlide === 1;
	const hideLast = displayedSlide === 3;

	const handleClickPrevious = () => {
		setDisplayedSlide(displayedSlide - 1);
	};

	const handleClickNext = () => {
		setDisplayedSlide(displayedSlide + 1);
	};

	return (
		<div className={styles.navigateButtons}>
			<button
				type="button"
				value="previous"
				className={hideFirst ? styles.hide : ''}
				disabled={hideFirst}
				onClick={handleClickPrevious}
			/>
			<button
				type="button"
				value="next"
				className={hideLast ? styles.hide : ''}
				disabled={hideLast}
				onClick={handleClickNext}
			/>
		</div>
	);
};
