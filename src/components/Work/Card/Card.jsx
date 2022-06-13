import React from "react";
import "./Card.scss";

export default function Card({ title, des, img, company }) {
  return (
    <div className="card">
      <figure>
        <img src={img} alt="" />
        <div className="card-bgc"></div>
      </figure>
      <h4>{company}</h4>
      <h3>{title}</h3>
      <p>{des}</p>
    </div>
  );
}
