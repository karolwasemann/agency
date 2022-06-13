import React from "react";
import "./Work.scss";
import Card from "./Card/Card";
import ocean from "../../assets/ocean.png";
import wastenot from "../../assets/wastnot1.png";
import guitar from "../../assets/guitar2.png";
import campa from "../../assets/campa.png";
export default function Work() {
  return (
    <div className="work-container" id="work">
      <div className="work-heading">
        <h2>Our Work</h2>
        <h3>We take your digital presence seriously and make it sustainable</h3>
      </div>

      <section className="work-cards">
        <Card
          title="BRAND DESIGN MARKETING CAMPAIGN"
          des="Their end-to-end solutions and cerifications are designed to help companies create meaningful impact today. All favourite brands should be a part of their global movement."
          img={ocean}
          company="RE PURPOSE NOW"
        />
        <Card
          title="Website developement and brand design."
          des="Connecting entities with a common powerful vision. 
Innovation and simplicity can go hand in hand and deliver significant tools for change. A database applicable to many sections of the market, from which we can all benefit.
 We are proud to have participated to this brave project."
          img={wastenot}
          company="WASTE NOT"
        />
        <Card
          title="Website developement and brand design."
          des="From the production to the distribution, every step is carefully planned for all of the company's products, in order to have the least impact on nature.
We were thrilled to support the company in the process of rebranding so that their mission would reflect in the website we realized for them."
          img={guitar}
          company="Martin & Co."
        />
        <Card
          title="Marketing campaign and promotion."
          des="A unison of loud voices celebrating conscious green living.
The city of London decided to speak up against the way environmental issues are being dealt with.The city council ,local social enterprises and music industry companies teamed up to create this festival for a good cause."
          img={campa}
          company="RAGE AGAINST THE POLUTION Music festival"
        />
      </section>
    </div>
  );
}
