import React from "react";
import "./Services.css";
import img1 from "../../images/carousel-card/disorders.png";
import img2 from "../../images/carousel-card/child-counsel.png";
import img3 from "../../images/carousel-card/counselor.png";
import img4 from "../../images/carousel-card/couple-counseling.png";
import img5 from "../../images/carousel-card/love.png";
import img6 from "../../images/carousel-card/group.png";

const Services = () => {
  return (
    <div className="mt-16 font-bold">
      <p className="font-bold text-center">
        NATIONALWIDE SERVICES LOCAL EXPERTISE.
      </p>
      <h3 className="mt-4 text-4xl font-bold text-center text-secondary">
        Thing in Psychology <span className="text-primary">Treatment</span>{" "}
      </h3>
      <div className="container grid grid-cols-3 gap-4 mx-auto my-12">
        <div className="p-6 shadow-xl card w-96">
          <img style={{ width: "55px" }} src={img1} alt="" />
          <h1 className="mt-4">Personality Disorders</h1>
          <p className="mt-4 font-bold text-accent">
            A personality disorder involves a lasting pattern of emotional
            unstable behavior that causes problems.
          </p>
          <div className="mt-4">
            <ul className="arrow-sign">
              <li>
                <a className="animated-arrow"  target="_blank" rel="noreferrer" href="https://medium.com/@nazmulsuzon100/personality-disorders-4cef246e9889">
                  <span className="the-arrow -left">
                    <span className="shaft"></span>
                  </span>
                  <span className="main">
                    <span className="text">Read More</span>
                    <span className="the-arrow -right">
                      <span className="shaft"></span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 shadow-xl card w-96">
          <img style={{ width: "55px" }} src={img2} alt="" />
          <h1 className="mt-4">Child Counselling</h1>
          <p className="mt-4 font-bold text-accent">
            A personality disorder involves a lasting pattern of emotional
            unstable behavior that causes problems.
          </p>
          <div className="mt-4 ">
            <ul>
              <li>
                <a className="animated-arrow" target="_blank" rel="noreferrer" href="https://medium.com/@nazmulsuzon100/child-counselling-8868925f12ca">
                  <span className="the-arrow -left">
                    <span className="shaft"></span>
                  </span>
                  <span className="main">
                    <span className="text">Read More</span>
                    <span className="the-arrow -right">
                      <span className="shaft"></span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-6 shadow-xl card w-96">
        <img style={{ width: "55px" }} src={img3} alt="" />
        <h1 className="mt-4">Individual Counselling</h1>
        <p className="mt-4 font-bold text-accent">
          A personality disorder involves a lasting pattern of emotional
          unstable behavior that causes problems.
        </p>
        <div className="mt-4 ">
          <ul>
            <li>
              <a className="animated-arrow" target="_blank" rel="noreferrer" href="https://medium.com/@nazmulsuzon100/individual-counselling-454568e8506d">
                <span className="the-arrow -left">
                  <span className="shaft"></span>
                </span>
                <span className="main">
                  <span className="text">Read More</span>
                  <span className="the-arrow -right">
                    <span className="shaft"></span>
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

      <div className="container grid grid-cols-3 gap-4 mx-auto">
      <div className="p-6 shadow-xl card w-96">
        <img style={{ width: "55px" }} src={img4} alt="" />
        <h1 className="mt-4">Couple Counsellong</h1>
        <p className="mt-4 font-bold text-accent">
          A personality disorder involves a lasting pattern of emotional
          unstable behavior that causes problems.
        </p>
        <div className="mt-4 ">
          <ul>
            <li>
              <a className="animated-arrow" target="_blank" rel="noreferrer" href="https://medium.com/@nazmulsuzon100/what-is-couples-counseling-62a74e65711d">
                <span className="the-arrow -left">
                  <span className="shaft"></span>
                </span>
                <span className="main">
                  <span className="text">Read More</span>
                  <span className="the-arrow -right">
                    <span className="shaft"></span>
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6 shadow-xl card w-96">
        <img style={{ width: "55px" }} src={img5} alt="" />
        <h1 className="mt-4">Group Counselling</h1>
        <p className="mt-4 font-bold text-accent">
          A personality disorder involves a lasting pattern of emotional
          unstable behavior that causes problems.
        </p>
        <div className="mt-4 ">
          <ul>
            <li>
              <a className="animated-arrow" target="_blank" rel="noreferrer" href="https://medium.com/@nazmulsuzon100/what-is-group-therapy-12d1a1f0c35b">
                <span className="the-arrow -left">
                  <span className="shaft"></span>
                </span>
                <span className="main">
                  <span className="text">Read More</span>
                  <span className="the-arrow -right">
                    <span className="shaft"></span>
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6 shadow-xl card w-96">
        <img style={{ width: "55px" }} src={img6} alt="" />
        <h1 className="mt-4">Troubling Emotions</h1>
        <p className="mt-4 font-bold text-accent">
          A personality disorder involves a lasting pattern of emotional
          unstable behavior that causes problems.
        </p>
        <div className="mt-4 ">
          <ul>
            <li>
              <a className="animated-arrow" target="_blank" rel="noreferrer" href="https://medium.com/@nazmulsuzon100/troubling-emotions-3760f75d5981">
                <span className="the-arrow -left">
                  <span className="shaft"></span>
                </span>
                <span className="main">
                  <span className="text">Read More</span>
                  <span className="the-arrow -right">
                    <span className="shaft"></span>
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
