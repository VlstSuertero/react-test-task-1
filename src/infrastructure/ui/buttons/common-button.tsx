import {Button} from "@material-tailwind/react";

export function CommonButton({label, onClick, className, disabled, size}: {
    label: string,
    onClick: () => void,
    className?: string,
    size: string,
    disabled?: boolean,
}) {
    return (
        <Button
            className={className}
            disabled={disabled}
            onClick={onClick}
            size={size}
        >{label}</Button>
    )
}
