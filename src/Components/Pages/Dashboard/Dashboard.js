import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content  p-3 bg-info">
    {/* <!-- Page content here --> */}
    <Outlet/>
    
  </div> 
  <div class="drawer-side ">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><NavLink className="mt-2" to="/dashboard/users" >Users</NavLink></li>
      <li><NavLink className="mt-2" to="" >Sidebar Item 2</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;