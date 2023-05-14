import {InputsProps} from "./InputManager";

export const Text: React.FC<InputsProps> = ({label, name, placeholder, value, onChange, required}) => {

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} placeholder={placeholder} value={value} required={required}
                   onChange={onChange}/>
        </>
    );
};
