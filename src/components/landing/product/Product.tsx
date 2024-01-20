import {Arguments} from './Arguments';
import {Mokup} from './Mokup';
import styles from './product.module.css';

export const Product = () => {
  return (
    <section className={styles.product} id="product">
      <h1>LE PRODUIT</h1>
      <div className={styles.productContent}>
        <Mokup />
        <Arguments />
      </div>
    </section>
  );
};
