import React from 'react';

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
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        checked={defaultValue === value}
      />
      {label}
    </label>
  );
};
