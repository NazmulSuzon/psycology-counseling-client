import React from "react";
import email from "../../../images/mail.png";
import { Link } from "react-router-dom";
import logo from '../../../images/footer-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="mt-20 border-primary bg-neutral footer-img">
      <div className="container pt-20 mx-auto">
        <div>
          <div className="flex items-center mb-8">
            <img src={email} style={{ width: "60px" }} alt="" />
            <h5 className="ml-8 text-xl font-bold text-white">
              Get Latest Updates Subscribe <br /> To Our Newsletter
            </h5>
            <form
              class=" ml-20"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.03)", width: "700px" }}
            >
              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 font-bold px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your Email Adress"
                  aria-label="Your Email"
                />
                <button
                  class="flex-shrink-0 bg-primary hover:bg-neutral font-bold text-sm  text-white px-5 py-3 rounded"
                  type="button"
                >
                  SUBSCRIBE NOW!
                </button>
              </div>
            </form>
          </div>
          <hr />
          <div className="grid grid-cols-3 gap-4 my-8">
            <div>
              <h3 style={{ fontSize: "20px" }} className="mb-4 font-semibold">
                About Us
              </h3>
              <p className="mb-4">
                We are on the mission to promote <br /> the advancement,
                communication of <br /> psychological science & knowledge <br />{" "}
                to benefit society.
              </p>
              <h3 style={{ fontSize: "20px" }} className="mb-3 font-semibold">
                Phone: +8801824876735
              </h3>
              <h3 style={{ fontSize: "20px" }} className="font-semibold">
                Mail ID: nazmulsuzon100@gmail.com
              </h3>
            </div>
            <div className="pl-8">
              <h3 style={{ fontSize: "20px" }} className="mb-4 font-semibold">
                Useful Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-2 hover:text-primary">- <Link>About Us</Link></p>
                  <p className="mb-2 hover:text-primary">- <Link>Our Solutions</Link> </p>
                  <p className="mb-2 hover:text-primary">- <Link>Employers</Link></p>
                  <p className="mb-2 hover:text-primary">- <Link>Work Job</Link></p>
                  <p className="mb-2 hover:text-primary">- <Link>Industries</Link></p>
                  <p className=" hover:text-primary">- <Link>Contact Us</Link></p>
                </div>
                <div>
                  <p className="mb-2 hover:text-primary">- <Link>Programs</Link></p>
                  <p className="mb-2 hover:text-primary">- <Link>Testimonials</Link></p>
                  <p className="mb-2 hover:text-primary">- <Link>How It’s</Link></p>
                  <p className="mb-2 hover:text-primary">- <Link>Seekers</Link></p>
                  <p className="mb-2 hover:text-primary">- <Link>Leadership</Link></p>
                </div>
              </div>
            </div>
            <div >
              <h3 style={{ fontSize: "20px" }} className="mb-4 font-semibold">
                Our Time Schedule
              </h3>
              <div className="flex justify-between mb-3">
                <p>Mon to Wed</p>
                <p>10:00 am to 2:30 pm</p>
              </div>
              <hr />
              <div className="flex justify-between my-3">
                <p>Thu to Fri</p>
                <p>11:00 am to 4:30 pm</p>
              </div>
              <hr />
              <div className="flex justify-between my-3">
                <p>Saturday</p>
                <p>10:00 am to 1:00 pm</p>
              </div>
              <hr />
              <div className="flex justify-between my-3">
                <p>Sunday</p>
                <p>Closed</p>
              </div>
              <hr />
            </div>
          </div>
          <hr />
          <div className="flex justify-between my-8 font-semibold">
            <p> Copyright © 2020  Zenista All rights reserved.</p>
            <img src={logo} style={{width:'231px'}} alt="" />
            <p><Link className="pr-2 hover:text-primary">About Us</Link> <Link>| <span className="px-2 hover:text-primary">Services</span> | </Link> <Link className="pl-2 hover:text-primary">Privacy</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
