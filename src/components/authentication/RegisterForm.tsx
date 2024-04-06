'use client';

import {useState} from 'react';

import {createUserWithEmailAndPassword} from 'firebase/auth';

import {auth} from '../../firebase';
import {Input} from './Inputs/InputManager';
import RegisteredPopup from './RegisteredPopup';
import styles from './styles/registerForm.module.css';

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
};

export const RegisterForm: React.FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  });

  const isEmptyMail = formValues.email.length === 0;
  const isEmptyPasswords =
    formValues.password.length < 1 || formValues.passwordConfirm.length < 1;
  const isEmptyUsername = formValues.username.length === 0;
  const isValideUsername = formValues.username.length > 3;
  const isValidMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);
  const isSamePassword =
    formValues.password === formValues.passwordConfirm && !isEmptyPasswords;
  const isValidPassword = formValues.password.length >= 8;

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !isValideUsername ||
      isEmptyUsername ||
      !isValidMail ||
      !isSamePassword ||
      !isValidPassword ||
      isEmptyPasswords ||
      isEmptyMail
    ) {
      return;
    }

    // move logic to back end file useing next.js api routes
    createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-console
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <Input
          required={true}
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleInputChange}
          startIconUrl="icons/user.svg"
        />
        <Input
          required={true}
          type="email"
          name="email"
          placeholder="Mail address"
          value={formValues.email}
          onChange={handleInputChange}
          startIconUrl="icons/mail.svg"
        />
        <Input
          type="password"
          name="password"
          value={formValues.password}
          placeholder="Password"
          onChange={handleInputChange}
          startIconUrl="icons/lock.svg"
          endIconUrl={['icons/eye.svg', 'icons/eye-slash.svg']}
        />
        <Input
          type="password"
          name="passwordConfirm"
          value={formValues.passwordConfirm}
          placeholder="Confirm password"
          onChange={handleInputChange}
          startIconUrl="icons/lock.svg"
          endIconUrl={['icons/eye.svg', 'icons/eye-slash.svg']}
        />
        <div id="formError">
          <ul>
            {!isValideUsername && !isEmptyUsername && (
              <li>Username must be at least 4 characters</li>
            )}
            {!isValidMail && !isEmptyMail && (
              <li>Please enter a valid email address</li>
            )}
            {!isSamePassword && !isEmptyPasswords && (
              <li>Passwords are not the same</li>
            )}
            {!isValidPassword && !isEmptyPasswords && (
              <li>
                password must be:
                <ul>at least 8 characters</ul>
                <ul>contain at least 1 number</ul>
                <ul>contain at least 1 letter</ul>
              </li>
            )}
          </ul>
        </div>
        <button className={styles.submitButton} type="submit">
          Register
        </button>
      </form>
      {success && <RegisteredPopup />}
    </div>
  );
};
