import styles from './contact.module.css';
import Image from 'next/image';
import {contactData} from '../../../data/landingPageContact';
import {PrimaryButton} from '../../buttons/PrimaryButton';

export const Contact = () => {
  const imgUrl = contactData.illustration.imgUrl;
  return (
    <section className={styles.contact} id="contact">
      <h1>NOUS CONTACTER</h1>
      <div className={styles.contactContent}>
        <Image
          src={imgUrl}
          alt="illustration"
          width={675} // 1 because width is required
          height={450} // 1 because height is required
        />
        <div className={styles.textContainer}>
          <p>
            A terme, nous souhaitons permettre à tous nos utilisateurs de
            voyager partout dans le monde avec notre application.
          </p>
          <br />
          <p>
            Chez Uncover, nous sommes à votre écoute ! Une suggestion, une
            remarque, un avis ? Contactez nous !
          </p>
          <br />
          <p>
            L’application UnVoy bientôt disponible pour tous vos voyages au
            Japon.
          </p>
          <br />
          <PrimaryButton url="/Acceuil">En savoir +</PrimaryButton>
        </div>
      </div>
    </section>
  );
};
