import {useAuth0} from '@auth0/auth0-react'

import {CommonButton} from '@ui/buttons'
import __ from '@translation'

export function LogoutButton() {
    const {logout} = useAuth0()

    return (
        <CommonButton
            label={__('Log Out')}
            onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}
        />
    )
}