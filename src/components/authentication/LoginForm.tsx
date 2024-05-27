'use client';

import {useState} from 'react';

import {signInWithEmailAndPassword} from 'firebase/auth';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

import {auth} from '../../firebase';
import {Input} from './Inputs/InputManager';

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  });

  const [responseErr, setResponseErr] = useState<boolean>(false);

  const isEmptyMail = formValues.email.length === 0;
  const isEmptyPasswords = formValues.password.length < 1;
  const router = useRouter();
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
    if (isEmptyPasswords || isEmptyMail) {
      return;
    }

    signInWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then(() => {
        router.push('/accueil', {scroll: false});
      })
      .catch(() => {
        setResponseErr(true);
      });
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
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
          <Link href="/forgotpassword">Forgot Password?</Link>
        </div>
        <div id="formError">
          {responseErr ? 'Email or Password Invalid' : ''}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
