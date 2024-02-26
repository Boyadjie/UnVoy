import styles from './concept.module.css';

export const Concept: React.FC<{
  setDisplayedSlide: (slide: number) => void;
}> = ({setDisplayedSlide}) => {
  return (
    <div className={styles.concept}>
      <h2>CONCEPT</h2>
      <p>
        <span className="colored">UnVoy</span>, c’est la web app
        <br />
        qui t’emmènera au bout du monde,
        <br />à commencer par le <span className="colored">Japon</span>.
      </p>
      <input
        type="submit"
        value="J’ai compris"
        onClick={() => setDisplayedSlide(2)}
      />
    </div>
  );
};
