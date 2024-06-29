import {useEffect, useState} from 'react';

import {useFirestore} from './useFirestore';

type ArticleDb = {
  date: string;
  rate: number;
  title: string;
  content: {
    subtitle: string;
    content: string[];
  }[];
};

type CategorisedArticles = {
  decouverte: ArticleDb[];
  intermediaire: ArticleDb[];
  expert: ArticleDb[];
};

type ArticleList = {data: string; category: string; id: number}[];

const formatArticleList = (dataList: ArticleList) => {
  const formatedList = dataList.map((data) => {
    return JSON.parse(data.data) as ArticleDb;
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
