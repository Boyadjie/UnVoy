'use client';
import {useState} from 'react';

import {ArticlesList} from '../../src/components/articles/articlesList/ArticlesList';
import {Loader} from '../../src/components/decorations/Loader';
import {InputRadio} from '../../src/components/Form/Inputs/InputRadio';
import {Navbar} from '../../src/components/navbar/Navbar';
import {useArticles} from '../../src/hook/useArticles';
import styles from './page.module.css';

type CategoryName = 'decouverte' | 'intermediaire' | 'expert';
type CategoriesInput = {
  label: string;
  value: CategoryName;
}[];

export default function Articles() {
  const {categories, loading} = useArticles();
  const categoriesInput: CategoriesInput = [
    {label: 'Découverte', value: 'decouverte'},
    {label: 'Intermédiaire', value: 'intermediaire'},
    {label: 'Expert', value: 'expert'},
  ];
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryName>('decouverte');

  return (
    <>
      <Navbar />
      <div className={styles.articleListContainer}>
        <h1>ARTICLES</h1>
        <div className={styles.selectCategory}>
          {categoriesInput.map(({label, value}, index) => (
            <InputRadio
              key={index}
              label={label}
              name="category"
              value={value}
              defaultValue={selectedCategory}
              handleChange={() => setSelectedCategory(value)}
            />
          ))}
        </div>

        {loading && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}
        {!loading && categories && (
          <ArticlesList articles={categories[selectedCategory]} />
        )}
      </div>
    </>
  );
}
