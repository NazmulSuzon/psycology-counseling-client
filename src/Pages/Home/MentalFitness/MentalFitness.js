import React from "react";
import img1 from "../../../images/marriage-counselor-taking-notes-while-having-meeting-with-couple-office.jpg";
import "./MentalFitness.css";

const MentalFitness = () => {
  return (
    <div className="grid gap-8 mx-24 mt-20 lg:grid-cols-2 sm:grid-cols-1">
      <div className="layer-content">
        <img style={{minHeight:'100%'}} src={img1} alt="" />
      </div>
      <div className="py-4">
        <p className="font-bold text-accent ">STEPS TOWARDS MENTAL FITNESS</p>
        <h1 style={{ fontSize: "39px" }} className="font-bold text-secondary">
          Zenista don’t let you <span className="text-primary">Suffer</span>{" "}
          Suffer <br />
          in silence and alone
        </h1>
        <p className="my-5 font-bold text-accent">
          We understand the trauma you go through. Get help from counsellors{" "}
          <br /> or therapists for every kind of solutions & advices.
        </p>
        <p className="mb-3 font-bold text-accent">
          {" "}
          <span className="text-primary">✔</span> Schedule one on one sessions
          with your personal the therapist.
        </p>
        <p className="mb-3 font-bold text-accent">
          {" "}
          <span className="text-primary">✔</span> To assist the individual in
          recovering from the crisis & problems
        </p>
        <p className="mb-3 font-bold text-accent">
          {" "}
          <span className="text-primary">✔</span> 24/7 phone counseling services
          for students who’re in distress.
        </p>
        <p className="font-bold text-accent">
          {" "}
          <span className="text-primary">✔</span> Relaxation room offers
          meditation cushion, yoga mat, and reiky
        </p>

        <div style={{width:'75%'}} className="mt-4 shadow-xl card bg-base-100 image-full card-img">
          <div className="card-body">
            <h3 className="font-bold text-secondary">The Best Online Counseling & Therapy <br /> Website. <span className="text-primary">Feel Free</span> to Talk.</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MentalFitness;
