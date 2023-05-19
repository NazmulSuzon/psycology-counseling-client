import React, { useContext } from "react";
import logo from "../../../images/logo.png";
// import {  Link, } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(err => console.log(err));
  }

  const menuItems = (
    <React.Fragment>
      <li>
        <NavLink className="text-white hover:bg-primary" to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/services" className="ml-2 hover:bg-primary">
          SERVICES
        </NavLink>
      </li>
      <li>
      <Link activeClass="active-class" spy={true} offset={-55} exact to="blogs" className="hover:bg-primary" smooth={true} duration={800}>BLOG</Link>
      </li>
      <li>
        <NavLink className="hover:bg-primary" to="/contact">CONTACT</NavLink>
      </li>
      { user?.uid ? 
      <>
        <li>
        <NavLink className="hover:bg-primary" to="/dashboard">DASHBOARD</NavLink>
      </li>
        <li>
          <button onClick={handleLogOut}>SIGN OUT</button>
        </li>
      </>
      :
      <li>
        <NavLink className=" hover:bg-primary" to="/login">LOG IN</NavLink>
      </li>}
    </React.Fragment>
  );

  return (
    <div className="font-bold ">
      <div className="px-16 navbar bg-neutral">
      <div className=" navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            className="p-2 mt-3 text-black bg-white shadow menu menu-compact dropdown-content rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="hidden text-white navbar-center lg:flex ">
        <ul className="px-1 menu menu-horizontal">{menuItems}</ul>
      </div>
      
      <div className="navbar-end">
        <NavLink to="/appointment" className="text-white bg-[#5A5C82] border-white btn px-6">
          Appointment!
        </NavLink>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
    </div>
    </div>
  );
};

export default Navbar;
