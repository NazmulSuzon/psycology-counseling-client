import React from "react";
import img1 from "../../../images/single-img-03.png";
import img2 from "../../../images/single-img-04.png";
import img3 from "../../../images/mental-health.png";

const Services = () => {
  return (
    <div className="container grid grid-cols-2 gap-10 mx-auto mt-20 font-semibold text-black">
      <div>
        <p>STEPS TOWARDS MENTAL FITNESS</p>
        <h2 style={{ fontSize: "39px" }} className="my-4 font-bold text-secondary">
          Leader in online <span className="text-primary">Counselling</span>{" "}
          <br /> and therapy services
        </h2>
        <p>
          The Best Online Counseling & Therapy website. Feel Free to Talk with{" "}
          <br /> the best online Psychologist & Counsellor for Depression,
          Anxiety, <br /> Relationship Issues, Stress, Career via
          Chat/Call/Video affordable
        </p>

        <div className="flex justify-between mt-4">
          <p>Best Online Psychologists</p>
          <p>90%</p>
        </div>
        <progress
          className="w-90 progress progress-primary"
          value="90"
          max="100"
        ></progress>

        <div className="flex justify-between mt-4">
          <p>Quality Therapy Services</p>
          <p>80%</p>
        </div>
        <progress
          className="w-90 progress progress-primary"
          value="80"
          max="100"
        ></progress>

        <div className="flex justify-between mt-4">
          <p>The most Safe And Secure</p>
          <p>70%</p>
        </div>
        <progress
          className="mt-4 w-90 progress progress-primary"
          value="70"
          max="100"
        ></progress>

        <div className="flex justify-between mt-4">
          <p>A Matching Expert</p>
          <p>85%</p>
        </div>
        <progress
          className="w-90 progress progress-primary"
          value="85"
          max="100"
        ></progress>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border-2">
          <img src={img1} style={{ maxWidth: "100%", height: "auto", float:'right' }} alt="" />
        </div>
        <div className="grid grid-flow-col grid-rows-2">
          <div>
            <img
              src={img2}
              style={{ width: "272px", height: "258px" }}
              alt=""
            />
          </div>
          <div className="shadow-xl card bg-neutral" style={{width:'273px'}}>
            <figure className="px-10 pt-10">
              <img
                src={img3}
                style={{width:'55px'}}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="items-center text-center card-body">
              <h2 className=" card-title">We Are Trusted By <br /> More Than 4580 <br /> Patients.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
