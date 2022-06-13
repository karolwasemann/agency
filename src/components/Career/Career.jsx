import React from "react";
import "./Career.scss";
import meeting from "../../assets/meeting.jpg";
import { Routes, Route, Link } from "react-router-dom";

export default function Career() {
  return (
    <div className="career-container" id="careers">
      <section className="career-heading">
        <figure>
          <img
            src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg"
            alt=""
          />
        </figure>
        <h2>
          <strong>Come as you are </strong>and the rest will follow.
        </h2>
        <h4>
          Whether you have years of experience or you are just starting out, we
          value your commitment and passion to our cause.
        </h4>

        <div className="values-container">
          <p className="values">Our values</p>
          <p>
            Bridging digital solutions to ecology is our drive. If you share our
            intent, than you are in the right place to start a new career and at
            the same time contribute to not infuriate nature any further.
          </p>
        </div>
      </section>

      <section className="career-present">
        <figure>
          <img src={meeting} alt="" />
        </figure>
        <h3>Why work with us?</h3>
        <article className="outline">
          <h4>Our Outline</h4>
          <p>
            We are mad about you and how your perspective can only enrich our
            diverse team of thinkers and creators. <br />
            We want to transform problems into valuable solutions. You can
            decide to do so in presence or remotely.
          </p>
        </article>
      </section>

      <section className="career-positions">
        <h3>Open Positions</h3>
        {/* <Link to="/job">
          <ul>
            <li>
              <a href="#">
                <p>Product Data Scientist</p>
                <p>Remote, UK</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Senior Product Designer</p>
                <p>London,UK</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Senior IT Support Specialists</p>
                <p>Remote, UK</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p> Content Manager & Content Strategists</p>
                <p>London, UK</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>UX Designer</p>
                <p>Remote</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Junior React Engineer</p>
                <p>London, UK</p>
              </a>
            </li>
          </ul>
        </Link> */}
      </section>
    </div>
  );
}
