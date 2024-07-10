import {Link} from "@tanstack/react-router"

export default function Navigation() {
    return (
        <div className="p-2 flex gap-2 justify-between flex-1 right-1 w-full">
            <Link to="/" className="[&.active]:font-bold">
                Home
            </Link>{' '}
            <Link to="/about" className="[&.active]:font-bold">
                About
            </Link>{' '}
            <Link to="/login" className="[&.active]:font-bold">
                Login
            </Link>
        </div>
    )
}