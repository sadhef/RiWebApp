import { Link } from "react-router-dom";
import ThemeSwitcher from "../common/ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Backdrop Blur Effect */}
      <div className="absolute inset-0 bg-base-100/80 backdrop-blur-md shadow-lg"></div>

      {/* Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="navbar container mx-auto relative">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden hover:bg-base-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52
                border border-base-200 backdrop-blur-md"
            >
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/turfs" className="hover:text-primary transition-colors">Turfs</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link 
            to="/" 
            className="btn btn-ghost normal-case text-xl hover:bg-transparent gap-2 pl-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
              <img
                src="/logo.png"
                alt="RiField"
                className="h-10 w-10 rounded-full relative border-2 border-base-content/5"
              />
            </div>
            <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              RiField
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <li>
              <Link 
                to="/" 
                className="rounded-lg hover:bg-primary/10 hover:text-primary transition-colors px-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/turfs" 
                className="rounded-lg hover:bg-primary/10 hover:text-primary transition-colors px-4"
              >
                Turfs
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end gap-2">
          <ThemeSwitcher />
          <div className="hidden sm:block h-8 w-[1px] bg-gradient-to-t from-transparent via-base-content/5 to-transparent"></div>
          <Link 
            to="/login" 
            className="btn btn-ghost btn-sm rounded-lg hover:bg-primary/10 hover:text-primary 
              transition-all duration-200 normal-case font-medium"
          >
            Sign In
          </Link>
          <Link 
            to="/signup" 
            className="btn btn-primary btn-sm rounded-lg normal-case font-medium
              shadow-md hover:shadow-lg transition-all duration-200
              bg-gradient-to-r from-primary to-accent hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;