import React from "react";
import "./Header.scss";
import mads from "../../assets/mads-w.jpg";
import header from "../../assets/header.jpeg";
export default function Header() {
  return (
    <>
      <div className="header-container">
        <h1>Rocking the the digital world with sustainability</h1>

        <div className="heading">
          <h2>M.A.D.S. </h2>
          <h3>Marketing and Data Solutions</h3>
        </div>

        {/* <figure>
          <img src={mads} alt="" />
        </figure> */}

        {/* <figure className="header">
        <img src={header} alt="" />
        <div className="header-bg"></div>
      </figure> */}
        <div className="project-btn-co">
          <button id="project-btn">Start Project</button>
        </div>
      </div>
    </>
  );
}
