'use client';
import {ForgotPassword} from '../../src/components/authentication/ForgotPassword';
import Title from '../../src/components/authentication/Title';
import styles from './forgotPassword.module.css';

export default function register() {
  return (
    <div className={styles.container}>
      <Title
        iconUrl="icons/arrow-left.svg"
        text="FORGOT PASSWORD"
        navigateTo="/login"
      />
      <ForgotPassword />
    </div>
  );
}
