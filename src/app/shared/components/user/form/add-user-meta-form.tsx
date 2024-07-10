import {FormEvent, useState} from 'react'

import {Form} from '@ui/forms'
import {Input} from '@ui/forms/inputs'
import {PlusButton} from '@ui/buttons'
import __ from '@translation'
import {useAppDispatch} from '@app/hooks'
import {actions} from '@app/store/user'

export function AddUserMetaForm() {
    const dispatch = useAppDispatch()

    const [key, setKey] = useState('')
    const [value, setValue] = useState('')

    const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        event.stopPropagation()

        dispatch(actions.addMeta([key, value]))
    }

    return (
        <Form onSubmit={onSubmit}>
            <label className='flex'>
                <span>Key:</span>
                <Input name="key" placeholder={__('Key')} onChange={({target}) => setKey(target.value)} />
            </label>
            <label className='flex'>
                <span>Value:</span>
                <Input name="value" placeholder={__('Value')} onChange={({target}) => setValue(target.value)} />
            </label>
            <PlusButton type='submit' />
        </Form>
    )
}