import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-l font-bold text-primary">
                    Nauka Pływania 
                    </Link>
                </div>
                <div className="">
                </div>
            </div>
        </nav>
    )
}