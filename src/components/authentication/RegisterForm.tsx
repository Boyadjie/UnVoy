'use client';

import {useState} from 'react';

import {createUserWithEmailAndPassword} from 'firebase/auth';

import {auth} from '../../firebase';
import {Input} from './Inputs/InputManager';

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
};

export const RegisterForm: React.FC = () => {
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
  const isValidPassword =
    formValues.password.length > 8 &&
    formValues.password.match(/[a-z]/) &&
    formValues.password.match(/[0-9]/);

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
      isValideUsername ||
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
      .then((userCredential) => {
        const user = userCredential.user;
        // eslint-disable-next-line no-console
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-console
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div>
        {/* use image from next */}
        <h1>Inscription</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <Input
            required={true}
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Input
            required={true}
            type="email"
            name="email"
            placeholder="Mail address"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            value={formValues.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Input
            type="password"
            name="passwordConfirm"
            value={formValues.passwordConfirm}
            placeholder="Confirm password"
            onChange={handleInputChange}
          />
        </div>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
