'use client';

import {useState} from 'react';

import {sendPasswordResetEmail} from 'firebase/auth';

import {auth} from '../../firebase';
import {Input} from './Inputs/InputManager';
import styles from './styles/forgotPassword.module.css';

type FormValues = {
  email: string;
};

export const ForgotPassword: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
  });

  const [responseErr, setResponseErr] = useState<boolean>(false);
  const [responseSuccess, setResponseSuccess] = useState<boolean>(false);

  const isEmptyMail = formValues.email.length === 0;
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
    if (isEmptyMail) {
      return;
    }

    // move logic to back end file useing next.js api routes
    sendPasswordResetEmail(auth, formValues.email)
      .then(() => {
        setResponseSuccess(true);
      })
      .catch(() => {
        setResponseErr(true);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.gluedChilds}>
          <Input
            required={true}
            type="email"
            name="email"
            placeholder="Mail address"
            value={formValues.email}
            onChange={handleInputChange}
            startIconUrl="icons/mail.svg"
          />
        </div>
        <div id="info-area" className={styles.forgotPasswordText}>
          {responseErr && "Erreur lors de l'envoi du mail"}
          {responseSuccess
            ? 'If that user exist then link to reset your password has been sent to your mail address'
            : 'We will send you a recovery link by mail.'}
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={responseSuccess}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
