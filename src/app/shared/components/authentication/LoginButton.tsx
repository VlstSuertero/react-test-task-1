import {useAuth0} from '@auth0/auth0-react'

import {CommonButton} from '@ui/buttons'
import __ from '@translation'

export function LoginButton() {
    const { loginWithRedirect } = useAuth0()

    return (
        <CommonButton label={__('Log In')} onClick={() => loginWithRedirect()} />
    )
}