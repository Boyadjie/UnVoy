import Link from 'next/link';

import {ArticleDb} from '../../../types/Article';
import {ArticlePreview} from '../../blocs/preview/article/ArticlePreview';
import styles from './articlesList.module.css';

export const ArticlesList: React.FC<{articles: ArticleDb[]}> = ({articles}) => {
  return (
    <section>
      <p className={styles.length}>{articles.length} articles</p>

      <div className={styles.articlesList}>
        {articles.map(({title, date, rate, id}, index) => {
          const formatedDate = new Date(date);
          const formatedTitleImg = title
            .toLowerCase()
            .replaceAll(': ', '')
            .replaceAll(' ?', '')
            .replaceAll('’', '_')
            .replaceAll('&', 'et')
            .replaceAll(' ', '_');

          return (
            <Link href={`/articles/${id}`} key={index} className={styles.card}>
              <ArticlePreview
                title={title}
                date={formatedDate}
                rate={rate}
                pictureUrl={`/images/articles/${formatedTitleImg}.webp`}
                fullWidth={true}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
