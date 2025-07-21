import { Link } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
    const { auth } = usePuterStore();

    return (
        <nav className="flex flex-row justify-between items-center bg-white rounded-full p-2 sm:p-4 w-full px-3 sm:px-10 max-w-[1200px] mx-auto">
            <Link to="/">
                <p className="text-xl sm:text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            
            <div className="flex gap-2 sm:gap-4 items-center">
                {auth.isAuthenticated ? (
                    <>
                        <Link to="/upload" className="primary-gradient text-white rounded-full px-3 py-2 sm:px-4 cursor-pointer w-fit text-sm sm:text-base">
                            Upload Resume
                        </Link>
                        <button 
                            onClick={auth.signOut}
                            className="px-3 py-2 sm:px-4 text-gray-600 hover:text-white hover:bg-[#8E97C5] rounded-full transition-all duration-300 ease-in-out text-sm sm:text-base"
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <Link to="/auth" className="primary-gradient text-white rounded-full px-3 py-2 sm:px-4 cursor-pointer w-fit text-sm sm:text-base">
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar