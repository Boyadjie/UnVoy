import styles from './partners.module.css';
import {partnersLogoData} from '../../../data/landingPagePartners';
import Image from 'next/image';
import Link from 'next/link';

export const Partners = () => {
  return (
    <section className={styles.partners} id="partners">
      <h2>NOS PARTNENAIRES</h2>
      <div className={styles.partnersList}>
        {partnersLogoData.map(({imgUrl, width, height, href}, id) => {
          return (
            <div key={`partners-${id + 1}`}>
              <Link href={href || ''}>
                <Image
                  src={imgUrl}
                  alt="Logo partenaire"
                  height={height || 150}
                  width={width || 150}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
