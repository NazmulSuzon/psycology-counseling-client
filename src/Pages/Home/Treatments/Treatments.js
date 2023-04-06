import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import "./Treatments.css";
import { Link } from "react-router-dom";
import img1 from "../../../images/carousel-card/disorders.png";
import img2 from "../../../images/carousel-card/child-counsel.png";
import img3 from "../../../images/carousel-card/counselor.png";
import img4 from "../../../images/carousel-card/couple-counseling.png";
import img5 from "../../../images/carousel-card//group.png";
import img6 from "../../../images/carousel-card/love.png";

const Treatments = () => {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-12 mx-auto mt-16">
        <div className="text-center">
          <p className="font-bold text-accent ">
            TYPES OF TREATMENTS AT ZENISTA
          </p>
          <h1 style={{ fontSize: "39px" }} className="font-bold text-secondary">
            Our psychology <span className="text-primary">Treatments</span>
          </h1>
        </div>
        <div className="font-bold text-center place-items-center text-accent">
          <p>
            Smile Pure always places patients at the center of our attention,
            and <br />
            concentrate on imprd of technologies skill.{" "}
            <Link>Check all services</Link>
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          loop={true}
          className="gap-8 mySwiper text-secondary"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="mx-2 drop-shadow-md carousel-card">
            <div>
              <img style={{ width: "55px" }} src={img1} alt="" />
              <h1 className="mt-4">Personality Disorders</h1>
              <p className="mt-4 font-bold text-accent">A personality disorder involves a lasting pattern of emotional unstable behavior that causes problems.</p>
              <div className="mt-4">
              <ul className="arrow-sign">
                  <li>
                    <a class="animated-arrow" href="https://google.com">
                      <span class="the-arrow -left">
                        <span class="shaft"></span>
                      </span>
                      <span class="main">
                        <span class="text">Read More</span>
                        <span class="the-arrow -right">
                          <span class="shaft"></span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-2 drop-shadow-md carousel-card">
            <div>
              <img style={{ width: "55px" }} src={img2} alt="" />
              <h1 className="mt-4">Child Counselling</h1>
              <p className="mt-4 font-bold text-accent">A personality disorder involves a lasting pattern of emotional unstable behavior that causes problems.</p>
              <div className="mt-4 ">
              <ul>
                  <li>
                    <a class="animated-arrow" href="https://google.com">
                      <span class="the-arrow -left">
                        <span class="shaft"></span>
                      </span>
                      <span class="main">
                        <span class="text">Read More</span>
                        <span class="the-arrow -right">
                          <span class="shaft"></span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-2 drop-shadow-md carousel-card">
            <div>
              <img style={{ width: "55px" }} src={img3} alt="" />
              <h1 className="mt-4">Individual Counselling</h1>
              <p className="mt-4 font-bold text-accent">A personality disorder involves a lasting pattern of emotional unstable behavior that causes problems.</p>
              <div className="mt-4 ">
              <ul>
                  <li>
                    <a class="animated-arrow" href="https://google.com">
                      <span class="the-arrow -left">
                        <span class="shaft"></span>
                      </span>
                      <span class="main">
                        <span class="text">Read More</span>
                        <span class="the-arrow -right">
                          <span class="shaft"></span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-2 drop-shadow-md carousel-card">
            <div>
              <img style={{ width: "55px" }} src={img4} alt="" />
              <h1 className="mt-4">Couple Counsellong</h1>
              <p className="mt-4 font-bold text-accent">A personality disorder involves a lasting pattern of emotional unstable behavior that causes problems.</p>
              <div className="mt-4 ">
              <ul>
                  <li>
                    <a class="animated-arrow" href="https://google.com">
                      <span class="the-arrow -left">
                        <span class="shaft"></span>
                      </span>
                      <span class="main">
                        <span class="text">Read More</span>
                        <span class="the-arrow -right">
                          <span class="shaft"></span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-2 drop-shadow-md carousel-card">
            <div>
              <img style={{ width: "55px" }} src={img5} alt="" />
              <h1 className="mt-4">Group Counselling</h1>
              <p className="mt-4 font-bold text-accent">A personality disorder involves a lasting pattern of emotional unstable behavior that causes problems.</p>
              <div className="mt-4 ">
              <ul>
                  <li>
                    <a class="animated-arrow" href="https://google.com">
                      <span class="the-arrow -left">
                        <span class="shaft"></span>
                      </span>
                      <span class="main">
                        <span class="text">Read More</span>
                        <span class="the-arrow -right">
                          <span class="shaft"></span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-2 drop-shadow-md carousel-card">
            <div>
              <img style={{ width: "55px" }} src={img6} alt="" />
              <h1 className="mt-4">Troubling Emotions</h1>
              <p className="mt-4 font-bold text-accent">A personality disorder involves a lasting pattern of emotional unstable behavior that causes problems.</p>
              <div className="mt-4 ">
              <ul>
                  <li>
                    <a class="animated-arrow" href="https://google.com">
                      <span class="the-arrow -left">
                        <span class="shaft"></span>
                      </span>
                      <span class="main">
                        <span class="text">Read More</span>
                        <span class="the-arrow -right">
                          <span class="shaft"></span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Treatments;
