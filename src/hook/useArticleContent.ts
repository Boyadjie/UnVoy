import {useEffect, useState} from 'react';

import {ArticleDb} from '../types/Article';
import {useArticles} from './useArticles';

export const useArticleContent = (id: string) => {
  const {loading, categories} = useArticles();
  const [loadingArticle, setLoadingArticle] = useState<boolean>(false);
  const [article, setArticle] = useState<ArticleDb>();

  useEffect(() => {
    setLoadingArticle(true);

    if (!loading && categories) {
      const allArticles: ArticleDb[] = Object.values(categories).flat();
      const foundArticle = allArticles.find(
        (article: ArticleDb) => article.id === id,
      );
      setArticle(foundArticle);
      setLoadingArticle(false);
    }
  }, [loading, categories, id]);

  return {loading: loadingArticle, article};
};
