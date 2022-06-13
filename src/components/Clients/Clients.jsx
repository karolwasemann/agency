import React from "react";
import "./Clients.scss";
import logo from "../../assets/comp1.png";
import logo2 from "../../assets/comp2.jpg";
import logo3 from "../../assets/comp3.jpg";
import logo4 from "../../assets/comp4.png";
import logo5 from "../../assets/comp5.png";
import logo6 from "../../assets/comp6.png";
import logo7 from "../../assets/comp7.png";

export default function Clients() {
  return (
    <div className="clients-container">
      <div className="clients-top"></div>
      <ul>
        <li>
          <img src={logo} alt="" />
        </li>
        <li>
          <img src={logo2} alt="" />
        </li>
        <li>
          <img src={logo3} alt="" />
        </li>
        <li>
          <img src={logo4} alt="" />
        </li>
        <li>
          <img src={logo5} alt="" />
        </li>
        <li>
          <img src={logo6} alt="" />
        </li>
        <li>
          <img src={logo7} alt="" />
        </li>
      </ul>
      <div className="clients-bottom"></div>
    </div>
  );
}
