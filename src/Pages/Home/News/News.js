import React from "react";
import Carousel from "better-react-carousel";
import img1 from "../../../images/blog/01.jpg";
import img2 from "../../../images/blog/02.jpg";
import img3 from "../../../images/blog/03.jpg";
import img4 from "../../../images/blog/04.jpg";
import img5 from "../../../images/blog/05.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="mt-20 text-center">
      <p>STEPS TOWARDS MENTAL FITNESS</p> <br />
      <h2 style={{ fontSize: "39px" }} className="font-bold text-secondary">
        Our latest news & articles!
      </h2>
      <div className="container mx-auto mt-8 text-left">
        <Carousel cols={3} rows={1} gap={20} loop>
          <Carousel.Item>
            <div className="p-8 border-2 shadow-xl card">
              <figure>
                <img
                  style={{ width: "326px", height: "274px" }}
                  src={img1}
                  alt="car!"
                />
              </figure>
              <div className="flex mt-4 text-neutral">
                <p>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faTag} />
                  </span>{" "}
                  Phobias & Anxiety
                </p>
                <p className="ml-4">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>{" "}
                  John Doe
                </p>
              </div>
              <Link
                style={{ fontSize: "20px" }}
                className="text-[#343c5c] my-4 font-bold"
              >
                Am I Depressed? 6 Signs You <br /> Should Know About
              </Link>
              <hr />
              <Link
                to="/blogs"
                className="mt-4 text-white border-0 hover:border hover:border-primary bg-primary btn hover:bg-white hover:text-accent"
              >
                Read More{" "}
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="p-8 border-2 shadow-xl card">
              <figure>
                <img
                  style={{ width: "326px", height: "274px" }}
                  src={img2}
                  alt="car!"
                />
              </figure>
              <div className="flex mt-4 text-neutral">
                <p>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faTag} />
                  </span>{" "}
                  Phobias & Anxiety
                </p>
                <p className="ml-4">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>{" "}
                  John Doe
                </p>
              </div>
              <Link
                style={{ fontSize: "20px" }}
                className="text-[#343c5c] my-4 font-bold"
              >
                Am I Depressed? 6 Signs You <br /> Should Know About
              </Link>
              <hr />
              <Link
                to="/blogs"
                className="mt-4 text-white border-0 hover:border hover:border-primary bg-primary btn hover:bg-white hover:text-accent"
              >
                Read More{" "}
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="p-8 border-2 shadow-xl card">
              <figure>
                <img
                  style={{ width: "326px", height: "274px" }}
                  src={img3}
                  alt="car!"
                />
              </figure>
              <div className="flex mt-4 text-neutral">
                <p>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faTag} />
                  </span>{" "}
                  Phobias & Anxiety
                </p>
                <p className="ml-4">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>{" "}
                  John Doe
                </p>
              </div>
              <Link
                style={{ fontSize: "20px" }}
                className="text-[#343c5c] my-4 font-bold"
              >
                Am I Depressed? 6 Signs You <br /> Should Know About
              </Link>
              <hr />
              <Link
                to="/blogs"
                className="mt-4 text-white border-0 hover:border hover:border-primary bg-primary btn hover:bg-white hover:text-accent"
              >
                Read More{" "}
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="p-8 border-2 shadow-xl card">
              <figure>
                <img
                  style={{ width: "326px", height: "274px" }}
                  src={img4}
                  alt="car!"
                />
              </figure>
              <div className="flex mt-4 text-neutral">
                <p>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faTag} />
                  </span>{" "}
                  Phobias & Anxiety
                </p>
                <p className="ml-4">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>{" "}
                  John Doe
                </p>
              </div>
              <Link
                style={{ fontSize: "20px" }}
                className="text-[#343c5c] my-4 font-bold"
              >
                Am I Depressed? 6 Signs You <br /> Should Know About
              </Link>
              <hr />
              <Link
                to="/blogs"
                className="mt-4 text-white border-0 hover:border hover:border-primary bg-primary btn hover:bg-white hover:text-accent"
              >
                Read More{" "}
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="p-8 border-2 shadow-xl card">
              <figure>
                <img
                  style={{ width: "326px", height: "274px" }}
                  src={img5}
                  alt="car!"
                />
              </figure>
              <div className="flex mt-4 text-neutral">
                <p>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faTag} />
                  </span>{" "}
                  Phobias & Anxiety
                </p>
                <p className="ml-4">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>{" "}
                  John Doe
                </p>
              </div>
              <Link
                style={{ fontSize: "20px" }}
                className="text-[#343c5c] my-4 font-bold"
              >
                Am I Depressed? 6 Signs You <br /> Should Know About
              </Link>
              <hr />
              <Link
                to="/blogs"
                className="mt-4 text-white border-0 hover:border hover:border-primary bg-primary btn hover:bg-white hover:text-accent"
              >
                Read More{" "}
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default News;
