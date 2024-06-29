'use client';
import {useArticles} from '../../src/hook/useArticles';

export default function Articles() {
  const {categories, loading} = useArticles();

  return (
    <>
      <h1>Articles</h1>
      {loading && 'Loading ...'}
      {!loading && <pre>{JSON.stringify(categories)}</pre>}
    </>
  );
}
