'use client';
import ConnectionWith from '../../src/components/authentication/ConnectionWith';
import {LoginForm} from '../../src/components/authentication/LoginForm';
import LoginIllustration from '../../src/components/authentication/LoginIllustration';
import TextAndRoute from '../../src/components/authentication/TextAndRoute';
import Title from '../../src/components/authentication/Title';
import styles from './login.module.css';

export default function register() {
  return (
    <div className={styles.container}>
      <Title iconUrl="icons/user.svg" text="LOGIN" />
      <LoginIllustration />
      <LoginForm />
      <ConnectionWith authNature="login" />
      <TextAndRoute
        text="Don't have an account?"
        route="/register"
        routeText="Register"
      />
    </div>
  );
}
