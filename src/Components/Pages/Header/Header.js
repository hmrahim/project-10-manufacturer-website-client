import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import Footer from "../Footer/Footer";
const Header = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("token");
    navigate("/login");
  };
  const menu = (
    <>
      <li>
        <NavLink className="rounded-lg ml-2" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg ml-2" to="/blog">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg ml-2" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg ml-2" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
      {user ? (
        <li>
          <button onClick={logout} className="btn  rounded-lg ml-2 btn-primary">
            Logout
          </button>
        </li>
      ) : (
        <li>
          <NavLink className="btn btn-primary rounded-lg ml-2" to="/login">
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  const { pathname } = useLocation();

  return (
    <div className="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300  ">
          <div className="md:w-11/12 lg:w-11/12 w-full mx-auto">
            <div className="flex-none lg:hidden"></div>
            {
              pathname == "/dashboard" &&  <label
              for="my-drawer-2"
              tabindex="0"
              class="btn btn-ghost btn-circle md:hidden lg:hidden flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            }
           
            <div className="flex-1 px-2 mx-2 ">Falcon-Electronics</div>
            <label
              for="my-drawer-3"
              className="btn btn-square btn-ghost flex md:hidden lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                {menu}
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
        
      </div>
      <div className="drawer-side">
        <label for="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Header;
