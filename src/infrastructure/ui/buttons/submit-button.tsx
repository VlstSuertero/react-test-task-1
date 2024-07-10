import __ from '@translation'
import {Button} from "@material-tailwind/react";

export function SubmitButton({onClick, className, size, disabled}: {
    onClick?: () => void,
    className?: string,
    size:string,
    disabled?: boolean,
}) {
    return (
        <Button
            type='submit'
            className={className}
            disabled={disabled}
            onClick={onClick}
            size={size}
        >
            {__('Submit')}
        </Button>
    )
}
