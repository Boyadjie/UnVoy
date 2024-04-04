'use client';
import ConnectionWith from '../../src/components/authentication/ConnectionWith';
import {RegisterForm} from '../../src/components/authentication/RegisterForm';
import TextAndRoute from '../../src/components/authentication/TextAndRoute';
import Title from '../../src/components/authentication/Title';
import styles from './register.module.css';

export default function register() {
  return (
    <div className={styles.container}>
      <Title iconUrl="icons/register.svg" text="REGISTER" />
      <RegisterForm />
      <ConnectionWith authNature="register" />
      <TextAndRoute
        text="Already have an account?"
        route="/login"
        routeText="Login"
      />
    </div>
  );
}
