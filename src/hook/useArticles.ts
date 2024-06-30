import {useEffect, useState} from 'react';

import {ArticleDb} from '../types/Article';
import {useFirestore} from './useFirestore';

type CategorisedArticles = {
  decouverte: ArticleDb[];
  intermediaire: ArticleDb[];
  expert: ArticleDb[];
};

type ArticleList = {data: string; category: string; id: string}[];

const formatArticleList = (dataList: ArticleList) => {
  const formatedList = dataList.map((data) => {
    const parsedData = JSON.parse(data.data);
    const formatedArticle: ArticleDb = {
      id: data.id,
      ...parsedData,
    };
    return formatedArticle;
  });

  return formatedList;
};

export const useArticles = () => {
  const articlesData = useFirestore('articles');

  const [categorisedArticles, setCategorisedArticles] =
    useState<CategorisedArticles>();

  useEffect(() => {
    if (!articlesData.loading) {
      const decouverteList = articlesData.docs.filter(
        (data) => data.category === 'decouverte',
      );
      const intermediaireList = articlesData.docs.filter(
        (data) => data.category === 'intermediaire',
      );
      const expertList = articlesData.docs.filter(
        (data) => data.category === 'expert',
      );

      const formatedDecouverteList = formatArticleList(
        decouverteList as unknown as ArticleList,
      );
      const formatedIntermediaireList = formatArticleList(
        intermediaireList as unknown as ArticleList,
      );
      const formatedExpertListList = formatArticleList(
        expertList as unknown as ArticleList,
      );

      setCategorisedArticles({
        decouverte: formatedDecouverteList,
        intermediaire: formatedIntermediaireList,
        expert: formatedExpertListList,
      });
    }
  }, [articlesData.docs, articlesData.loading]);

  return {
    categories: categorisedArticles,
    loading: articlesData.loading,
  };
};
