import styles from './estimatedKnowledges.module.css';

export const EstimatedKnowledges: React.FC<{
	setDisplayOnboarding: (value: boolean) => void;
}> = ({setDisplayOnboarding}) => {
	const handleSendKnowledges = () => {
		setDisplayOnboarding(false);
		localStorage.setItem('displayOnboarding', 'false');
	};

	return (
		<div className={styles.knowledges}>
			<h2>Connaissances</h2>
			<div className={styles.list}>
				<label htmlFor="novice">
					<input
						type="radio"
						id="novice"
						value="novice"
						name="knowledges-lvl"
					/>
					Novice
				</label>
				<label htmlFor="medium">
					<input
						type="radio"
						id="medium"
						value="intermediaire"
						name="knowledges-lvl"
					/>
					Intermediaire
				</label>
				<label htmlFor="expert">
					<input
						type="radio"
						id="expert"
						value="expert"
						name="knowledges-lvl"
					/>
					Expert
				</label>
			</div>

			<input type="submit" value="GO" onClick={handleSendKnowledges} />
		</div>
	);
};
