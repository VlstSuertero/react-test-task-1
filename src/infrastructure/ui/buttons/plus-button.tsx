import {Button} from "@material-tailwind/react";

export function PlusButton({onClick, className, type, disabled = false}: {
    onClick?: () => void,
    className?: string,
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean,
}) {
    return (
        <Button type={type} className={className} disabled={disabled} onClick={onClick}>+</Button>
    )
}
