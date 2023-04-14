import React from "react";
import email from "../../../images/mail.png";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <div className="container mx-auto">
        <div className="flex">
          <img src={email} style={{ width: "60px" }} alt="" />
          <h5 className="text-xl font-bold text-white">
            Get Latest Updates Subscribe <br /> To Our Newsletter
          </h5>
          <form class="w-full max-w-sm">
            <div class="flex items-center border-b border-teal-500 py-2">
              <input
                class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 font-bold px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Your Email Adress"
                aria-label="Your Email"
              />
              <button
                class="flex-shrink-0 bg-primary hover:bg-neutral  text-sm  text-white py-1 px-2 rounded"
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
