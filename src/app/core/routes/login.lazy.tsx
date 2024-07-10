import {createLazyFileRoute, redirect} from '@tanstack/react-router'

import {ContextType} from '@app/helpers/routes'
import Login from '@app/pages/login'

const options = {
    beforeLoad: ({context, location: {search}}: ContextType) => {
        if (context.auth.isAuthenticated) {
            throw redirect({
                to: search?.redirect || '/',
            })
        }
    },
    component: Login,
}

export const Route = createLazyFileRoute('/login')(options)
