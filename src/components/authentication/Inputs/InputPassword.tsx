'use client';
import {useState} from 'react';

import Image from 'next/image';

import {InputsProps} from './InputManager';
import styles from './styles/inputs.module.css';

export const Password: React.FC<InputsProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
  startIconUrl,
  endIconUrl,
}) => {
  const [showPassword, setShowPassword] = useState(false);

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
        type={showPassword ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
      {endIconUrl && (
        <Image
          src={
            showPassword ? (endIconUrl[0] as string) : (endIconUrl[1] as string)
          }
          alt="icon"
          width={18}
          height={18}
          className={styles.icon}
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
};
