import React from "react";
import "./About.scss";
import signs from "../../assets/about-signs.jpeg";
import mads from "../../assets/mads.png";
import video from "../../assets/video.gif";
import greenRobot from "../../assets/green-robot.jpeg";
import { Routes, Route, Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-blur">
        <div className="about-heading">
          <div>
            <h2>Our</h2>
            <h4>Mission</h4>
          </div>

          {/* <figure>
            <img src={mads} alt="" />
          </figure> */}
        </div>
        <div className="about-gif">
          <img src={video}></img>
        </div>
        <span className="about-text">ABOUT</span>

        <div className="about-slogan">
          <h2>We are mad for problems and finding solutions.</h2>
          <p>
            We are mad about environmental issues and make it our priority to
            support enterprises that keep these causes at heart.
          </p>
        </div>

        <div>
          <h2>About Us</h2>
          <h4>Marketing and Data Solutions</h4>
        </div>
        <div className="green">
          <figure>
            <img src={greenRobot} alt="" />
            <div className="bgc"></div>
          </figure>
        </div>

        <div className="desc">
          <h4>Based in the pulsing heart of London,</h4>
          <p>
            our team is made of multicultural and multidisciplinary individuals
            working in an inclusive, edgy, informed, creative and ever evolving
            work envirorment.
          </p>
        </div>

        {/* <Link to="/contact">
          <div className="contact">
            <button>
              <a href="">Contact Us</a>
            </button>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
