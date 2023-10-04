import {InputsProps} from './InputManager';

export const Email: React.FC<InputsProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}) => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="email"
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
      {!isValid && <span>Please enter a valid email address</span>}
    </>
  );
};
