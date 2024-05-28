import {Email} from './InputMail';
import {Password} from './InputPassword';
import {Text} from './InputText';

type InputType = 'text' | 'password' | 'email';

export type InputsProps = {
  label?: string;
  name: string;
  placeholder?: string;
  value: string;
  required: boolean;
  startIconUrl?: string;
  endIconUrl?: string | string[];
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

type InputManagerProps = {
  type: InputType;
  label?: string;
  name: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  startIconUrl?: string;
  endIconUrl?: string | string[];
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export const Input: React.FC<InputManagerProps> = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  startIconUrl,
  endIconUrl,
}) => {
  switch (type) {
    case 'text':
      return (
        <Text
          name={name}
          label={label}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          startIconUrl={startIconUrl}
          endIconUrl={endIconUrl}
        />
      );
    case 'email':
      return (
        <Email
          name={name}
          label={label}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          startIconUrl={startIconUrl}
          endIconUrl={endIconUrl}
        />
      );
    case 'password':
      return (
        <Password
          name={name}
          label={label}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          startIconUrl={startIconUrl}
          endIconUrl={endIconUrl}
        />
      );
    default:
      return null;
  }
};
