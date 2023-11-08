import styles from './styles/title.module.css';

export const Title: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <h1 className={styles.title}>{children}</h1>;
};
