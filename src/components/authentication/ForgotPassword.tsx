'use client';

import {useState} from 'react';

import {sendPasswordResetEmail} from 'firebase/auth';

import {auth} from '../../firebase';
import {Input} from './Inputs/InputManager';

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
    <div>
      <div>
        {/* use image from next */}
        <h1>MDP oublié</h1>
      </div>

      <form onSubmit={handleSubmit}>
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
        <div id="info-area">
          {responseErr && "Erreur lors de l'envoi du mail"}
          {responseSuccess &&
            'A link to reset your password has been sent to your mail address'}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
