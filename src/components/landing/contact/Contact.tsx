import Image from 'next/image';

import {contactData} from '../../../data/landingPageContact';
import {PrimaryButton} from '../../buttons/PrimaryButton';
import styles from './contact.module.css';

export const Contact = () => {
  const imgUrl = contactData.illustration.imgUrl;
  const textData = contactData.text;
  return (
    <section className={styles.contact} id="contact">
      <h1>{textData.title}</h1>
      <div className={styles.contactContent}>
        <Image src={imgUrl} alt="illustration" width={675} height={450} />
        <div className={styles.textContainer}>
          {textData.content.map(({text}, id) => {
            return (
              <>
                <p key={`contact-${id + 1}`}>{text}</p>
                <br />
              </>
            );
          })}
          <PrimaryButton url="/Acceuil">Je veux l'application</PrimaryButton>
        </div>
      </div>
    </section>
  );
};
