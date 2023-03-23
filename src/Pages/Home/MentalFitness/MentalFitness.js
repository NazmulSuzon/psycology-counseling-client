import React from "react";
import img1 from '../../../images/single-img-01.png';
import './MentalFitness.css';

const MentalFitness = () => {
  return(
    <div className="grid mt-20 lg:grid-cols-2 sm:grid-cols-1">
        <div className="layer-content">
            <div>
                <img src={img1} alt="" />
            </div>
            <div className="featured-icon-bo">

            </div>
        </div>
        <div>
            <h2>Hello, everyone.</h2>
        </div>
    </div>
  );
};

export default MentalFitness;
