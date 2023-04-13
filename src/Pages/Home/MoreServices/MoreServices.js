import React from "react";
import "./MoreServices.css";
import { Link } from "react-router-dom";

const MoreServices = () => {
  return (
    <div className="service-banner text-[#FFFFFF]">
        <div className="image-overlay">
      <div className="container py-20 mx-auto mt-20 ">
        <div>
          <video width="480" height="240" controls>
            <source
              src="http://zenista.themetechmount.net/wp-content/uploads/2020/10/istockphoto-1149405202-640_adpp_is.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="pl-8">
          <p className="font-semibold">WE MAKE A DIFFERENCE!</p>
          <h2 style={{ fontSize: "38px" }} className="font-bold">
            Our Clinic Largest Private Mental <br /> Health Partner, With a
            Carefully <br /> Selected Nationwide Team
          </h2>
          <Link
            to="/services"
            className="px-6 border-white text-[FFFFFF] btn-ghost hover:text-neutral hover:bg-white btn"
          >
            MORE SERVICES!
          </Link>
          <Link className="ml-6 font-semibold" >Contact Us</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MoreServices;
