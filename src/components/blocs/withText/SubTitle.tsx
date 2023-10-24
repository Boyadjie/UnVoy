import styles from './styles/title.module.css';

export const SubTitle: React.FC<{children: React.ReactNode}> = ({children}) => {
	return <h2 className={styles.subTitle}>{children}</h2>;
};
