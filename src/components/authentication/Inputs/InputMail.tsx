import Image from 'next/image';

import {InputsProps} from './InputManager';
import styles from './styles/inputs.module.css';

export const Email: React.FC<InputsProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
  startIconUrl,
  endIconUrl,
}) => {
  return (
    <div className={styles.inputContainer}>
      {startIconUrl && (
        <Image
          src={startIconUrl}
          alt="icon"
          width={18}
          height={18}
          className={styles.icon}
        />
      )}
      <label htmlFor={name}>{label}</label>
      <input
        type="email"
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
      {endIconUrl && (
        <Image
          src={endIconUrl as string}
          alt="icon"
          width={18}
          height={18}
          className={styles.icon}
        />
      )}
    </div>
  );
};
