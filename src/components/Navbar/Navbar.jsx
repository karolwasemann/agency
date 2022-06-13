import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.scss";
import logo from "../../assets/LOGO-MADS-final.png";

export default function Navbar() {
  const [isNavbar, setIsNavbar] = useState(true);
  return (
    <>
      <nav className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-logo">
            <img src={logo} alt="" />
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#" className="navbar-icon">
              <FontAwesomeIcon
                style={{ color: "black" }}
                icon={faBarsStaggered}
                onClick={() => {
                  setIsNavbar(false);
                }}
              />
            </a>
          </li>
        </ul>
      </nav>

      <div className={isNavbar ? "nav-container" : "nav-container show"}>
        <div className="nav-logo">
          <span>
            <img src={logo} alt="" />
          </span>
          <a href="#">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => {
                setIsNavbar(true);
              }}
              style={{ color: "whitesmoke" }}
            />
          </a>
        </div>
        <nav className="nav-items">
          <ul
            onClick={() => {
              setIsNavbar(true);
            }}
          >
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <section className="nav-links">
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/m.a.d.s.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Madsuk-104594478955698"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="nav-project">
              <button>Start Project</button>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
