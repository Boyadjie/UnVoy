import React from 'react';

import {useRouter} from 'next/navigation';

import styles from './styles/textAndRoute.module.css';

interface TextAndRouteProps {
  text: string;
  route: string;
  routeText: string;
}

const TextAndRoute: React.FC<TextAndRouteProps> = ({
  text,
  route,
  routeText,
}) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      &nbsp;
      <button
        className={styles.route}
        onClick={() => {
          router.push(route);
        }}
      >
        {routeText}
      </button>
    </div>
  );
};

export default TextAndRoute;
