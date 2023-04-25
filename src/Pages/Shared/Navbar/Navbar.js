import React from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li tabIndex={0}>
        <Link>
          Services
          {/* <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg> */}
        </Link>
        {/* <ul >
          <li>
            <Link to="/">Personality Disorders</Link>
          </li>
          <li>
            <Link to="/">Troubling Emotions</Link>
          </li>
          <li>
            <Link to="/">Individual Counselling</Link>
          </li>
          <li>
            <Link to="/">Child Counselling</Link>
          </li>
          <li>
            <Link to="/">Group Counselling</Link>
          </li>
          <li>
            <Link to="/">Couple Counselling</Link>
          </li>
        </ul> */}
      </li>
      <li tabIndex={0}>
        <Link to="/">
          Research
          {/* <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg> */}
        </Link>
        {/* <ul>
          <li>
            <Link to="/">Research Style</Link>
          </li>
          <li>
            <Link to="/">Research Details</Link>
          </li>
        </ul> */}
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="px-12">
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
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="hidden text-white navbar-center lg:flex ">
        <ul className="px-1 menu menu-horizontal">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/appointment" className="text-white bg-[#5A5C82] border-white btn px-6">
          Appointment!
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
