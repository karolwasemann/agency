import React from "react";
import "./Testimonials.scss";
import amourlogo from "../../assets/amourlogo.png";
import solarlogo from "../../assets/solar-together.png";

export default function Testimonials() {
  return (
    <div className="testi-container">
      <div className="testi-card">
        <figure>
          <img src={amourlogo} alt="amour-logo" />
        </figure>

        <article>
          <h5>
            "M.A.D.S. agency showed me potential in my business i couldn t see
            myself.
          </h5>
        </article>
        <p>
          When i reached out to them to achieve brand awarenss for my fast
          growing up-cycled clothing webshop, they worked extremely fast in
          envisioning a strategy and creating a video that reached 100,000
          thousand views in little over 4 days."
        </p>
      </div>
      <div className="testi-card">
        <figure>
          <img src={solarlogo} alt="Solar logo" />
        </figure>

        <article>
          <h5>
            "Talking about product placement!? The M.A.D.S. team has a one of a
            kind approach to entering a new market segment!
          </h5>
        </article>
        <p>
          They implemented our solar panels directly on their own headquarters
          and are sharing with the world the benefits of clean energy. Now that
          is commitment!"
        </p>
      </div>
    </div>
  );
}
