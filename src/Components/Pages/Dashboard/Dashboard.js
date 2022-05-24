import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import Footer from "../Footer/Footer"

const Dashboard = () => {
  const [admin, setAdmin] = useAdmin();

  return (
    
   
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content  p-3 bg-info">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
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
