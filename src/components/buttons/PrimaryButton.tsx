import Link from 'next/link';

import buttonStyle from './buttons.module.css';
import styles from './styles/primary.module.css';

type buttonTypes = {
  children: React.ReactNode;
  url?: string;
  handleClick?: () => void;
};

export const PrimaryButton: React.FC<buttonTypes> = ({
  children,
  url,
  handleClick,
}) => {
  if (url) {
    return (
      <Link href={url} className={`${buttonStyle.buttons} ${styles.primary}`}>
        {children}
      </Link>
    );
  }

  if (handleClick) {
    return (
      <button
        onClick={handleClick}
        className={`${buttonStyle.buttons} ${styles.primary}`}
      >
        {children}
      </button>
    );
  }

  return null;
};
