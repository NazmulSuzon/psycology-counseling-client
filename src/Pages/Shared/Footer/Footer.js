import React from "react";
import email from "../../../images/mail.png";

const Footer = () => {
  return (
    <div className="mt-20 bg-neutral">
      <div className="container pt-20 mx-auto">
        <div className="flex items-center mb-8 border-2">
          <img src={email} style={{ width: "60px" }} alt="" />
          <h5 className="ml-8 text-xl font-bold text-white">
            Get Latest Updates Subscribe <br /> To Our Newsletter
          </h5>
          <form class=" ml-8" style={{backgroundColor:'rgba(0, 0, 0, 0.03)', width:'500px',}}>
            <div class="flex items-center border-b border-teal-500 py-2 ">
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
        
      </div>
    </div>
  );
};

export default Footer;
