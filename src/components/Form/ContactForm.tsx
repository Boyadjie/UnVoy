'use client'

import {useState} from 'react';

import {Input} from "./Inputs/InputManager";

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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Input required={true} type="text" name="name" label="name :" value={formValues.name}
                       onChange={handleInputChange}/>
            </div>
            <div>
                <Input required={true} type="email" name="email" label="email :" value={formValues.email}
                       onChange={handleInputChange}/>
            </div>
            <div>
                <Input type="textarea" name="message" label="message :" value={formValues.message}
                       onChange={handleInputChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
