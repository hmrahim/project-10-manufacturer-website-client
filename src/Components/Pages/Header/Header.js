import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({children}) => {
  const menu = (
    <>
      <li>
        <NavLink className="rounded-lg ml-2" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg ml-2" to="/blog">Blogs</NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg ml-2" to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg ml-2" to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink className="btn btn-primary rounded-lg ml-2" to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div class="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar bg-base-300  ">
          <div className="md:w-11/12 lg:w-11/12 w-full mx-auto">
            <div class="flex-none lg:hidden"></div>
            <div class="flex-1 px-2 mx-2 ">Falcon-Electronics</div>
            <label
              for="my-drawer-3"
              class="btn btn-square btn-ghost flex md:hidden lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
               {menu}
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Page content here --> */}
       {
           children
       }
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
        {
            menu
        }
        </ul>
      </div>
    </div>
  );
};

export default Header;
