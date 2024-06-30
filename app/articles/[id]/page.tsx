'use client';
import {useEffect, useState} from 'react';

import {format} from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import {Loader} from '../../../src/components/decorations/Loader';
import {Navbar} from '../../../src/components/navbar/Navbar';
import {useArticleContent} from '../../../src/hook/useArticleContent';
import styles from './page.module.css';

type PageParameters = {
  params: {
    id: string;
  };
};

export default function Articles({params}: PageParameters) {
  const {id} = params;
  const {loading, article} = useArticleContent(id);
  const [formatedTitleImg, setFormatedTitleImg] = useState<string>('');

  useEffect(() => {
    if (!loading && article) {
      setFormatedTitleImg(
        article.title
          .toLowerCase()
          .replaceAll(': ', '')
          .replaceAll(' ?', '')
          .replaceAll('’', '_')
          .replaceAll('&', 'et')
          .replaceAll(' ', '_'),
      );
    }
  }, [loading, article]);

  return (
    <>
      <Navbar />
      <div className={styles.actions}>
        <Link href="/articles">
          <Image src="/longArrow.svg" alt="note" width={24} height={18} />
        </Link>
        <Image src="/icons/coeur.svg" alt="coeur" width={24} height={24} />
      </div>
      {loading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {!loading && article && (
        <article className={styles.article}>
          <Image
            src={`/images/articles/${formatedTitleImg}.webp`}
            alt={article.title}
            width={360}
            height={185}
          />

          <div className={styles.content}>
            <h1>{article.title.toUpperCase()}</h1>

            <div className={styles.details}>
              <p>{format(article.date, 'd MMM. yyyy')}</p>
              <span className={styles.rate}>
                <Image
                  src="/icons/map/recommendations/like_blanc.svg"
                  alt="note"
                  width={10}
                  height={10}
                />{' '}
                {article.rate * 100}%
              </span>
            </div>

            <section>
              {article.content.map(({subtitle, content}, index) => (
                <div key={index} className={styles.infoBloc}>
                  <div className={styles.blocHeader}>
                    <p>{index + 1}</p>
                    <h3>{subtitle}</h3>
                    <button>
                      <Image
                        src="/icons/coeur.svg"
                        alt="coeur"
                        width={17}
                        height={17}
                      />
                    </button>
                  </div>
                  <ul>
                    {content.map((info, index) => (
                      <li key={index}>{info}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </article>
      )}
    </>
  );
}
