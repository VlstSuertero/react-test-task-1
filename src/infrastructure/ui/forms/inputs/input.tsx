import {Input as BaseInput} from "@material-tailwind/react";


export function Input({name, value, onChange, classname, placeholder, readOnly = false, disabled = false}: {
    name: string,
    value?: string,
    onChange?: (event: {target: {value: string}}) => void,
    classname?: string,
    placeholder?: string,
    readOnly?: boolean,
    disabled?: boolean,
}) {
    return (
        <BaseInput
            name={name}
            defaultValue={value}
            onChange={onChange}
            className={classname}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
        />
    )
}
