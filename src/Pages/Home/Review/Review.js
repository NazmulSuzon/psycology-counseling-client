import React from "react";
import "./Review.css";
import Carousel from "better-react-carousel";
import img1 from "../../../images/New folder/01.png";
import img2 from "../../../images/New folder/02.png";
import img3 from "../../../images/New folder/03.png";

const Review = () => {
  return (
    <div className="py-20 text-center background">
      <p className="font-semibold text-accent">STEPS TOWARDS MENTAL FITNESS</p>
      <h2 style={{ fontSize: "39px" }} className="font-bold text-secondary">
        Resources & recovered <span className="text-primary">Patients</span>{" "}
        <br /> over the globe!
      </h2>
      <div className="container mx-auto">
        <Carousel cols={3} rows={1} gap={20} loop autoplay={1500}>
          <Carousel.Item>
            <div className="card card-compact bg-base-100">
              <div className="flex pt-8 pl-8 mb-4">
                <img
                  style={{ width: "73px", borderRadius: "50%" }}
                  src={img1}
                  alt=""
                />
                <div className="flex-col pl-5 text-secondary">
                  <h5 style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Alex Sam Martin
                  </h5>
                  <p className="text-left">Professional Counselor</p>
                </div>
              </div>
              <hr />
              <p className="pl-8 mt-4 font-semibold text-left text-black pe-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt ut alias error laborum magni obcaecati voluptatum
                provident pariatur, explicabo dolorum!
              </p>
              <div className="pl-8 card-body">
                <div className="pl-4 rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="drop-shadow-2xl card card-compact bg-base-100">
              <div className="flex pt-8 pl-8 mb-4">
                <img
                  style={{ width: "73px", borderRadius: "50%" }}
                  src={img2}
                  alt=""
                />
                <div className="flex-col pl-5 text-secondary">
                  <h5 style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Alex Sam Martin
                  </h5>
                  <p className="text-left">Professional Counselor</p>
                </div>
              </div>
              <hr />
              <p className="pl-8 mt-4 font-semibold text-left text-black pe-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt ut alias error laborum magni obcaecati voluptatum
                provident pariatur, explicabo dolorum!
              </p>
              <div className="pl-8 card-body">
                <div className="pl-4 rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="drop-shadow-2xl card card-compact bg-base-100">
              <div className="flex pt-8 pl-8 mb-4">
                <img
                  style={{ width: "73px", borderRadius: "50%" }}
                  src={img3}
                  alt=""
                />
                <div className="flex-col pl-5 text-secondary">
                  <h5 style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Alex Sam Martin
                  </h5>
                  <p className="text-left">Professional Counselor</p>
                </div>
              </div>
              <hr />
              <p className="pl-8 mt-4 font-semibold text-left text-black pe-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt ut alias error laborum magni obcaecati voluptatum
                provident pariatur, explicabo dolorum!
              </p>
              <div className="pl-8 card-body">
                <div className="pl-4 rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="drop-shadow-2xl card card-compact bg-base-100">
              <div className="flex pt-8 pl-8 mb-4">
                <img
                  style={{ width: "73px", borderRadius: "50%" }}
                  src={img1}
                  alt=""
                />
                <div className="flex-col pl-5 text-secondary">
                  <h5 style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Alex Sam Martin
                  </h5>
                  <p className="text-left">Professional Counselor</p>
                </div>
              </div>
              <hr />
              <p className="pl-8 mt-4 font-semibold text-left text-black pe-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt ut alias error laborum magni obcaecati voluptatum
                provident pariatur, explicabo dolorum!
              </p>
              <div className="pl-8 card-body">
                <div className="pl-4 rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="drop-shadow-2xl card card-compact bg-base-100">
              <div className="flex pt-8 pl-8 mb-4">
                <img
                  style={{ width: "73px", borderRadius: "50%" }}
                  src={img1}
                  alt=""
                />
                <div className="flex-col pl-5 text-secondary">
                  <h5 style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Alex Sam Martin
                  </h5>
                  <p className="text-left">Professional Counselor</p>
                </div>
              </div>
              <hr />
              <p className="pl-8 mt-4 font-semibold text-left text-black pe-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt ut alias error laborum magni obcaecati voluptatum
                provident pariatur, explicabo dolorum!
              </p>
              <div className="pl-8 card-body">
                <div className="pl-4 rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="drop-shadow-2xl card card-compact bg-base-100">
              <div className="flex pt-8 pl-8 mb-4">
                <img
                  style={{ width: "73px", borderRadius: "50%" }}
                  src={img1}
                  alt=""
                />
                <div className="flex-col pl-5 text-secondary">
                  <h5 style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Alex Sam Martin
                  </h5>
                  <p className="text-left">Professional Counselor</p>
                </div>
              </div>
              <hr />
              <p className="pl-8 mt-4 font-semibold text-left text-black pe-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt ut alias error laborum magni obcaecati voluptatum
                provident pariatur, explicabo dolorum!
              </p>
              <div className="pl-8 card-body">
                <div className="pl-4 rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-primary mask mask-star-2"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
