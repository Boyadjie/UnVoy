import {InputsProps} from "./InputManager";

export const Textarea: React.FC<InputsProps> = ({label, name, placeholder, value, onChange, required}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <textarea name={name} placeholder={placeholder} value={value} required={required} onChange={onChange}/>
        </>
    );
};
