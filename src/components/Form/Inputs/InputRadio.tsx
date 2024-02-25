import React from 'react';

import styles from './styles/inputs.module.css';

type InputRadioType = {
  label: string;
  name: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
};

export const InputRadio: React.FC<InputRadioType> = ({
  label,
  name,
  value,
  handleChange,
  defaultValue,
}) => {
  const isChecked = defaultValue === value;

  return (
    <label
      className={`${styles.radioLabel} ${isChecked ? styles.checked : ''}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        checked={isChecked}
      />
      {label}
    </label>
  );
};
