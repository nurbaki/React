import React from "react";
import { data } from "../data";
import "./Cards.css";

function Cards() {
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="title">
              <h1>{item.title}</h1>
            </div>
            <img src={item.image} alt="" />
            <div className="textDesc">
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
