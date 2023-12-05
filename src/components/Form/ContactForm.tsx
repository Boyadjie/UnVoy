'use client';

import {useState} from 'react';

import {Input} from './Inputs/InputManager';

// styles
import './contactForm.css';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });

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
    console.log(formValues);
    let data = {
      name: formValues.name,
      email: formValues.email,
      message: formValues.message,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        // setSubmitted(true)
        // setName('')
        // setEmail('')
        // setBody('')
      }
    })
    // reset form
    setFormValues({
      name: '',
      email: '',
      message: '',
    });

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          required={true}
          type="text"
          name="name"
          label="name :"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Input
          required={true}
          type="email"
          name="email"
          label="email :"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Input
          type="textarea"
          name="message"
          label="message :"
          value={formValues.message}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
