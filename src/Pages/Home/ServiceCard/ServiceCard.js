import React from "react";
import adults from "../../../images/ServiceCard/psychologist.png";
import child from "../../../images/ServiceCard/depression.png";
import business from "../../../images/ServiceCard/conversation.png";
import couple from "../../../images/ServiceCard/couple.png";
import "./serviceCard.css";

const ServiceCard = () => {
  const servviceCardData = [
    {
      id: 1,
      title: "For Adults",
      details: "Highly experienced team if you are going through difficulties.",
      icon: adults,
    },
    {
      id: 2,
      title: "For Children",
      details: "Highly experienced team if you are going through difficulties.",
      icon: child,
    },
    {
      id: 3,
      title: "For Business",
      details: "Highly experienced team if you are going through difficulties.",
      icon: business,
    },
    {
      id: 4,
      title: "For Couple",
      details: "Highly experienced team if you are going through difficulties.",
      icon: couple,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 mx-12 mt-40 drop-shadow-md md:grid-cols-2 lg:grid-cols-4">
      {servviceCardData.map((card) => (
        <div
          key={card.id}
          style={{ minWidth: "420px" }}
          className="px-5 bg-white shadow-xl card lg:card-side"
        >
          <figure>
            <img style={{ width: "55px" }} src={card.icon} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"><span className="text-[#B07AB4]">{card.id}</span> {card.title}</h2>
            <p>{card.details}</p>
            <div className="justify-end card-actions wrapper">
              <div className="px-5">
                <ul>
                  <li>
                    <a class="animated-arrow" href="https://google.com">
                      <span class="the-arrow -left">
                        <span class="shaft"></span>
                      </span>
                      <span class="main">
                        <span class="text">Explore More</span>
                        <span class="the-arrow -right">
                          <span class="shaft"></span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
