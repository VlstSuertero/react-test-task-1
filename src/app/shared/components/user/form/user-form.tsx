import {FormEvent} from 'react'

import {useActiveUser} from '@app/hooks/user'
import {Form} from '@ui/forms'
import {Input} from '@ui/forms/inputs'
import {MinusButton, SubmitButton} from '@ui/buttons'
import __ from '@translation'
import {UserMeta} from '@entities'
import {useAppDispatch} from '@app/hooks'
import {actions} from '@app/store/user'

export function UserForm() {
    const dispatch = useAppDispatch()

    const user = useActiveUser()
    if (null === user) {
        return null
    }

    const removeMeta = (key: string) => {
        dispatch(actions.removeMeta(key))
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        event.stopPropagation()

        const data: { [key: string]: FormDataEntryValue } = {}
        for (const [field, value] of new FormData(event.target as HTMLFormElement).entries()) {
            data[field] = value
        }

        console.log(data)
    }

    const renderMeta = (meta: UserMeta) => (
        <>
            {meta && Object.keys(meta).map(key => (
                <div key={key}>
                    <label className='flex justify-between h-12 items-center gap-4'>
                        <div className='flex-1 w-2/5'>
                            {key}:
                        </div>
                        <div className='flex-1 w-3/5'>
                            <Input
                                name={key}
                                value={meta[key]}
                                placeholder={__(key)}
                            />
                        </div>
                        <div className='flex-1 w-1/5'>
                            <MinusButton onClick={() => removeMeta(key)}/>
                        </div>
                    </label>
                </div>
            ))}
        </>
    )

    return (
        <Form
            onSubmit={onSubmit}
            classname='flex flex-col'
        >
            <Input name="email" value={user.email} placeholder={__('Email')} disabled /><br />
            <Input name="name" value={user.name} placeholder={__('Name')} disabled /><br />
            <hr />
            <label>{__('Meta')}:</label><br />
            {renderMeta(user.meta)}
            <hr />
            <SubmitButton
                className={'ml-[30%] my-1'}
                size={'md'}
            />
        </Form>
    )
}