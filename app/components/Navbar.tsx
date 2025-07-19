import { Link } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
    const { auth } = usePuterStore();

    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            
            <div className="flex gap-4 items-center">
                {auth.isAuthenticated ? (
                    <>
                        <Link to="/upload" className="primary-button w-fit">
                            Upload Resume
                        </Link>
                        <button 
                            onClick={auth.signOut}
                            className="px-4 py-2 text-gray-600 hover:text-white hover:bg-[#8E97C5] rounded-full transition-all duration-300 ease-in-out"
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <Link to="/auth" className="primary-button w-fit">
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar