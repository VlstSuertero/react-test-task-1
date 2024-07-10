import {FormEvent, ReactNode} from 'react'

export function Form({onSubmit, classname, children}: {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void,
    classname?: string,
    children?: ReactNode,
}) {
    return (
        <form
            className={classname}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}
