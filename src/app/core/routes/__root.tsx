import {createRootRouteWithContext} from '@tanstack/react-router'
import {Auth0ContextInterface} from '@auth0/auth0-react'

import Layout from '@app/core/layout'

export interface RouterContext {
    auth: Auth0ContextInterface
}

export const Route = createRootRouteWithContext<RouterContext>()({
    component: Layout,
})