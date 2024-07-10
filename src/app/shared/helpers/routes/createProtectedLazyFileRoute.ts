import {createLazyFileRoute, redirect, FileRoutesByPath} from "@tanstack/react-router";

export interface ContextType {
    context: {
        auth: {
            isAuthenticated: boolean
        }
    }
    location: {
        href: string,
        search: {
            redirect: string,
        } | null
    }
}

export function createProtectedLazyFileRoute(route: string, component: () => JSX.Element) {
    const options = {
        beforeLoad: ({context, location}: ContextType) => {
            if (!context.auth.isAuthenticated) {
                throw redirect({
                    to: '/login',
                    search: {
                        redirect: location.href,
                    },
                })
            }
        },
        component: component,
    }

    return createLazyFileRoute(route as keyof FileRoutesByPath)(options)
}