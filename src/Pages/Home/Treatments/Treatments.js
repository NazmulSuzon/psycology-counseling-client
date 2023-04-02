import React from "react";
import "./Treatments.css";
import { Link } from "react-router-dom";

const Treatments = () => {
  return (
    <div>
      <div className="flex flex-col w-full grid-cols-2 lg:flex-row">
        <div className="grid flex-grow h-32 card ">
          <p className="mt-16 font-bold text-accent">TYPES OF TREATMENTS AT ZENISTA</p>
          <h1 style={{ fontSize: "39px" }} className="font-bold text-secondary">Our psychology <span className="text-primary">Treatments</span></h1>
        </div>
        <div className="dividing"></div>
        <div className="grid flex-grow h-32 mt-16 font-bold card place-items-center text-accent">
        <p>Smile Pure always places patients at the center of our attention, and concentrate on imprd of technologies skill. <Link>Check all services</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
