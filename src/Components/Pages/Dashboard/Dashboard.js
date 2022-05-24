import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import Footer from "../Footer/Footer"

const Dashboard = () => {
  const [admin, setAdmin] = useAdmin();

  return (
    
   
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  p-3 bg-info">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {admin?.role === "admin" && (
            <>
              <li>
                <NavLink className="mt-2" to="/dashboard/users">
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink className="mt-2" to="/dashboard/additems">
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink className="mt-2" to="/dashboard/allproducts">
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink className="mt-2" to="/dashboard/manageorder">
                  Manage Orders
                </NavLink>
              </li>
              <li>
                <NavLink className="mt-2" to="/dashboard/allreview">
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink className="mt-2" to="/dashboard/messages">
                  Messages
                </NavLink>
              </li>
            </>
          )}
{
  admin?.role !== "admin" &&

          <>
          <li>
            <NavLink className="mt-2" to="/dashboard/myorders">
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink className="mt-2" to="/dashboard/reviews">
             Add a review
            </NavLink>
          </li>
          </>
          }


          <li>
            <NavLink className="mt-2" to="/dashboard/profile">
             My Profile
            </NavLink>
          </li>
        </ul>
      </div>
      
    </div>
    
    
  );
};

export default Dashboard;
