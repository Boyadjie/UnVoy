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

type FormErrors = {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  username?: string;
};

const validateForm = (formValues: FormValues): true | FormErrors => {
  const errors: FormErrors = {};

  if (formValues.email.length === 0) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (formValues.password.length < 1) {
    errors.password = 'Password is required';
  } else if (formValues.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  } else if (!/[0-9]/.test(formValues.password)) {
    errors.password = 'Password must contain at least 1 number';
  } else if (!/[a-zA-Z]/.test(formValues.password)) {
    errors.password = 'Password must contain at least 1 letter';
  }

  if (formValues.passwordConfirm.length < 1) {
    errors.passwordConfirm = 'Confirmation is required';
  } else if (formValues.password !== formValues.passwordConfirm) {
    errors.passwordConfirm = 'Passwords are not the same';
  }

  if (formValues.username.length === 0) {
    errors.username = 'Username is required';
  } else if (formValues.username.length < 4) {
    errors.username = 'Username must be at least 4 characters';
  }

  if (Object.keys(errors).length === 0) {
    return true;
  }

  return errors;
};

export const RegisterForm: React.FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

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

    const validationResult = validateForm(formValues);

    if (validationResult === true) {
      createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password,
      )
        .then(() => {
          setSuccess(true);
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setFormErrors({email: 'Email already in use'});
          }
          setFormValues({
            email: '',
            password: '',
            passwordConfirm: '',
            username: '',
          });
        });
    } else {
      setFormErrors(validationResult);
    }
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
            {formErrors.email && <li>{formErrors.email}</li>}
            {formErrors.password && <li>{formErrors.password}</li>}
            {formErrors.passwordConfirm && (
              <li>{formErrors.passwordConfirm}</li>
            )}
            {formErrors.username && <li>{formErrors.username}</li>}
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
