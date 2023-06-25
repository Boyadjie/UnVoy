import styles from './travelingReason.module.css'

export const TravelingReason = () => {
    return (
        <div className={styles.reason}>
            <h2>Objectifs</h2>
            <div className={styles.list}>
                <label htmlFor="short">
                    <input type="radio" id="short" value="short" name="traveling-reason"/>
                    Court séjour
                </label>
                <label htmlFor="long">
                    <input type="radio" id="long" value="long" name="traveling-reason"/>
                    Long séjour
                </label>
                <label htmlFor="expat">
                    <input type="radio" id="expat" value="expat" name="traveling-reason"/>
                    Expatrié
                </label>
            </div>
        </div>
    );
};
