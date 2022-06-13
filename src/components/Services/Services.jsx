import React from "react";
import { useState } from "react";
import "./Services.scss";
import food from "../../assets/food.gif";
import webdev from "../../assets/webdev.png";
import webdev2 from "../../assets/webdev2.png";
import webdev3 from "../../assets/webdev3.png";
import brand from "../../assets/bottles.png";
import brand2 from "../../assets/brand.png";
import brand3 from "../../assets/brand3.png";

export default function Services() {
  const [changeService, setChangeService] = useState("webdev");
  const services = [
    {
      name: "webdev",
      text: `Design and web development solutions!`,
      text2: "Backend and interface developers",
    },
    {
      name: "branding",
      text: "Social media advertising campaign.",
      text2: `Brand promotion with the latest techniques tailored to your needs.`,
    },
    {
      name: "marketing",
      text: `Campaigning for both government funded projects and NGOs. Marketing campaigns for large scale businesses and SME s using clean energy.`,
      text2: `B2B consulting and Digital marketing and video production team `,
    },
  ];
  return (
    <section className="services-container">
      <h2>Our Services</h2>
      <div className="services" id="services">
        <article>
          <h3
            className={changeService === "webdev" ? "active webdev" : "webdev"}
            onClick={() => setChangeService("webdev")}
          >
            Website Design & Development
          </h3>
        </article>

        <article>
          <h3
            className={
              changeService === "branding" ? "active branding" : "branding"
            }
            onClick={() => setChangeService("branding")}
          >
            Branding
          </h3>
        </article>

        <article className="marketing">
          <h3
            className={
              changeService === "marketing" ? "active marketing" : "marketing"
            }
            onClick={() => setChangeService("marketing")}
          >
            Digital Marketing
          </h3>
        </article>
      </div>
      <div className="service-desc">
        {changeService === "webdev" ? (
          <div className="service-example">
            <div className="webdev animation-text">
              <img src={webdev} alt="" />
            </div>
            <div id="special" className="webdev animation-text">
              <img src={webdev2} alt="" />
            </div>
            <div className="webdev animation-text">
              <img src={webdev3} alt="" />
            </div>
          </div>
        ) : null}

        {changeService === "marketing" ? (
          <div className="service-example">
            <div className="food animation-text">
              <img src={food} alt="" />
            </div>
          </div>
        ) : null}
        {changeService === "branding" ? (
          <div className="service-example">
            <div className="branding animation-text">
              <img src={brand} alt="" />
            </div>
          </div>
        ) : null}

        <article className="desc">
          {services.map((service) =>
            service.name === changeService ? (
              <div>
                <p className="animation-text">{service.text}</p>
                <p className="animation-text">{service.text2}</p>
              </div>
            ) : null
          )}
        </article>
      </div>
      <span className="service-btn">
        <button>View all services</button>
      </span>
    </section>
  );
}
