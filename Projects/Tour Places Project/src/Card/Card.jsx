import React from "react";
import { data } from "../data";

function Card(data) {
  const { id, title, desc, image } = data;
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img src={image} alt="" />
      <p>{desc}</p>
    </div>
  );
}

export default Card;
