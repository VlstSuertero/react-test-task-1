import {useEffect} from 'react'
import {Provider} from 'react-redux'
import {useAuth0} from '@auth0/auth0-react'
import {createRouter, RouterProvider} from '@tanstack/react-router'

import store from '@app/store'
import {actions} from '@app/store/user'
import {useAppDispatch} from '@app/hooks'
import {User} from '@entities'
import AuthProvider from '@infrastructure/auth0'

import './app.css'
import {routeTree} from './app.routes.ts'

const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    context: {
        auth: undefined!,
    },
})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

function InnerApp() {
    const auth = useAuth0()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(actions.fetch())
        dispatch(
            actions.update({
                email: auth.user?.email,
                name: auth.user?.name,
            } as User)
        )
    }, [auth, dispatch])

    return <RouterProvider router={router} context={{auth}} />
}

export default function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <InnerApp />
            </AuthProvider>
        </Provider>
    )
}
