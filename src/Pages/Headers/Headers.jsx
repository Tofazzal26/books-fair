import { NavLink } from "react-router-dom";
const Headers = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/listedBook">Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="/pageRead">Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost lg:text-2xl text-xl font-bold"
          >
            Book Fair Central
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg text-[#595959] font-semibold px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-transparent border-2 border-green-500" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-transparent border-2 border-green-500" : ""
                }
                to="/listedBook"
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-transparent border-2 border-green-500" : ""
                }
                to="/pageRead"
              >
                Pages to Read
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-transparent border-2 border-green-500" : ""
                }
                to="/children"
              >
                Children Books
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn text-base mr-2 bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn hidden lg:flex text-base bg-[#59C6D2] text-white">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Headers;
