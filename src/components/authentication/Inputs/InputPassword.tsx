import {InputsProps} from './InputManager';

export const Password: React.FC<InputsProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="password"
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
    </>
  );
};
