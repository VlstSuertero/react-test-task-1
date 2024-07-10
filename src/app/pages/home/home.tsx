import {useAppSelector} from '@app/hooks'
import {AddUserMetaForm, UserForm} from '@app/components/user/form'
import {LogoutButton} from '@app/components/authentication'
import __ from '@translation'

export default function Home() {
    const name = useAppSelector(({user}) => user.active?.name)

    return (
        <div className="p-2">
            <div className='flex pb-2'>
                <h3 className='!pr-7'>Welcome, {name}!</h3>
                <LogoutButton />
            </div>
            <hr />
            <UserForm />
            <hr />
            <div>
                <label>{__('Add meta:')}</label>
                <AddUserMetaForm />
            </div>
        </div>
    )
}
