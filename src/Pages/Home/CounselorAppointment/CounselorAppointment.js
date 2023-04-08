import React from "react";
import img1 from "../../../images/single-img-02.jpg";
import img2 from "../../../images/science-book.png";
import img3 from "../../../images/newtons-cradle.png";
import img4 from '../../../images/author.png';
import { Link } from "react-router-dom";
import './CounselorAppointment.css';

const CounselorAppointment = () => {
  return (
    <div className="grid my-20 ml-64 bg-neutral lg:grid-cols-2 md:grid-cols-1">
      <div className="py-16 -ml-64">
        <img style={{ width: "936px", height: "668px" }} src={img1} alt="" />
      </div>
      <div className="pt-32">
        <p className="font-bold text-white">STEPS TOWARDS MENTAL FITNESS</p>
        <h1 style={{ fontSize: "39px" }} className="font-bold text-white">
          We help to build <span className="text-primary">Mental</span> <br />{" "}
          Peace & prepare better you!
        </h1>
        <p className="pb-8 font-semibold text-white">
          Zenista the team of professionals who understand and guide you with
          the <br /> rich and deep life awareness throughout the process of
          guidance and <br /> healing. We strongly believe that there must be an
          exchange.
        </p>
        <hr style={{ width: "80%" }} />
        <div className="grid grid-cols-2 pt-8">
          <div>
            <div className="flex ">
              <img src={img2} style={{ width: "52px" }} alt="" />
              <h4 className="pl-5 text-xl text-white text-bold">
                A Reiky Therapy <br /> Is A Form
              </h4>
            </div>
            <p className="pt-4 text-white">
              The Japanese technique for stress <br /> reduction and relaxation.
            </p>
          </div>
          <div>
            <div className="flex">
              <img src={img3} style={{ width: "52px" }} alt="" />
              <h4 className="pl-5 text-xl text-white text-bold">
                Mental Capacity <br /> Staffing.
              </h4>
            </div>
            <p className="pt-4 pb-8 text-white">
              Caring behavioral health staffing <br /> for our patient.
            </p>
          </div>
        </div>
        <hr style={{ width: "80%" }} />
        <div className="flex pt-8">
        <Link
          to="/appointment"
          className="px-6 text-white border-0 border-white bg-primary btn hover:bg-white hover:text-accent"
        >
          Appointments!
        </Link>
        <img src={img4} className="mx-4" style={{ width: "54px", borderRadius:'40%' }} alt="" />
        <div className="flex-col">
        <h5 style={{fontSize:'24px', fontWeight:'bold'}}>Alex Sam Martin</h5>
        <p>Professional Counselor</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CounselorAppointment;
