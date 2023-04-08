import React from "react";
import img1 from "../../../images/slider/slider-mainbg-01.jpg";
import img2 from "../../../images/slider/slider-mainbg-02.jpg";
import video from '../../../images/video-btn.png';
import './Banner.css';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mx-12 banner" style={{height:'630px'}}>
      <div className=" carousel max-w-[1500px] banner-image mx-auto pt-4">
        <div id="slide1" style={{height:'700px'}} className="relative w-full carousel-item">
          <img src={img1} alt="" className="w-full" />
          <div className="centered">
            <h1 className="text-6xl font-bold text-[#4B4D75]">The Best <span className="text-[#B07AB4]">PSY.D.</span> </h1><br />
            <h1 className="text-6xl font-bold text-[#4B4D75]">Programs in</h1><br />
            <h1 className="text-6xl font-bold text-[#4B4D75]">Clinical Psychology</h1><br />
            <div className="flex pt-5">
            <Link to="/appointment" className="btn border-0 text-white bg-[#B07AB4]">
          Find My Program
        </Link>
        <img src={video} style={{width:'50px', height:'50px', marginLeft:'18px'}} alt="" />
        <p className="font-bold place-self-center text-[#4B4D75]" style={{marginLeft:'18px'}}>WATCH VIDEO</p>
            </div>
          </div>
          <div className="absolute flex flex-col transform -translate-y-1/2 place-items-end left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="text-xl text-white hover:text-2xl btn-circle"
            >
              ⦿
            </a>
            <a
              href="#slide2"
              className="text-xl text-white hover:text-2xl btn-circle"
            >
              ⦿
            </a>
          </div>
        </div>
        <div id="slide2" className="relative w-full carousel-item">
          <img src={img2} alt="" className="w-full" />
          <div className="img2-text">
          <p className="btn border-0 text-white bg-[#B07AB4]">
          11 YEARS OF EXPERIENCE
        </p>
            <h1 className="text-6xl font-bold text-[#4B4D75]">We Provide</h1><br />
            <h1 className="text-6xl font-bold text-[#4B4D75]"><span className="text-[#B07AB4]">Psychology Programs</span></h1>
            <p className="text-xl pt-8 font-bold text-[#4B4D75]">Clinical Psychologist <span> <span className="text-[#B07AB4]">🟌</span> Unlimited Revisions</span> <span> <span className="text-[#B07AB4]">🟌</span> 24/7 support</span></p><br />
            <Link to="/about" className="px-8 text-black bg-white btn hover:text-white hover:bg-[#5A5C82]">
          About Us!
        </Link>
        <Link to="/services" className="btn px-8 border-0 ml-6 text-white bg-[#B07AB4]">
          Our Services
        </Link>
          </div>
          <div className="absolute flex flex-col transform -translate-y-1/2 place-items-end left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="text-xl text-white hover:text-2xl btn-circle"
            >
              ⦿
            </a>
            <a
              href="#slide3"
              className="text-xl text-white hover:text-2xl btn-circle"
            >
              ⦿
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
