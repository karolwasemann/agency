import React from "react";
import "./Footer.scss";
import footer from "../../assets/footer-1.png";

export default function Footer() {
  return (
    <div className="footer-con">
      <h3>M.A.D.S.</h3>
      <ul>
        <li>Contact Us</li>
        <li>Careers</li>
        <li>FAQ</li>
        <li>Our Services</li>
        <li>Privacy Policy</li>
      </ul>
      <figure>
        <img src={footer} alt="" />
      </figure>
    </div>
  );
}
