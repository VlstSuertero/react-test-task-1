import {Button} from "@material-tailwind/react";

export function MinusButton({onClick, className, type = 'button', disabled = false}: {
    onClick?: (e: never) => void,
    className?: string,
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean,
}) {
    return (
        <Button
            type={type}
            className={className}
            disabled={disabled}
            onClick={onClick}
            size={'sm'}
        >
            -
        </Button>
    )
}
