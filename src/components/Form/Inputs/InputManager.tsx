import {Text} from "./InputText";
import {Email} from "./InputMail";
import {Textarea} from "./InputTextArea";

type InputType = 'text' | 'email' | 'textarea';

export interface InputsProps {
    label: string;
    name: string;
    placeholder?: string;
    value: string;
    required: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface InputManagerProps {
    type: InputType;
    label: string
    name: string;
    placeholder?: string;
    value: string;
    required?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Input: React.FC<InputManagerProps> = ({
                                                       label,
                                                       type,
                                                       name,
                                                       placeholder,
                                                       value,
                                                       onChange,
                                                       required = false
                                                   }) => {
    switch (type) {
        case 'text':
            return <Text name={name} label={label} placeholder={placeholder} value={value} required={required}
                         onChange={onChange}/>;
        case 'email':
            return <Email name={name} label={label} placeholder={placeholder} value={value} required={required}
                          onChange={onChange}/>;
        case 'textarea':
            return <Textarea name={name} label={label} placeholder={placeholder} value={value} required={required}
                             onChange={onChange}/>;
        default:
            return null;
    }
};
