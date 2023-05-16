import React, { useContext } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../contexts/AuthProvider";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="p-4 text-xl font-bold text-black bg-base-100 menu w-80">
            <li>
              <Link to="/dashboard" className="text-white border-0 btn bg-primary">My Appointments</Link>
            </li>
            {isAdmin && <li>
              <Link to="/dashboard/allusers" className="text-white border-0 btn bg-primary">All Users</Link>
            </li>}
            {isAdmin && <li>
              <Link to="/dashboard/adddoctor" className="text-white border-0 btn bg-primary">Add Doctor</Link>
            </li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
