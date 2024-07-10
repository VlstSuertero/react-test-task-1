import {Outlet} from "@tanstack/react-router"
import {TanStackRouterDevtools} from "@tanstack/router-devtools"

import Navigation from "./navigation.tsx";

export default function Layout() {
    return (
        <>
            <Navigation/>
            <hr/>
            <Outlet/>
            <TanStackRouterDevtools/>
        </>
    )
}