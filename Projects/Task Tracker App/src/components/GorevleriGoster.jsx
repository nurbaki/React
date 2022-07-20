import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons

const GorevleriGoster = ({ gorevler, setGorevler }) => {
  return (
    <div>
      {gorevler.map((x) => {
        const { id, text, day, bitti } = x;
        return (
          <div className="gorev" key={id}>
            <h3>
              {text}
              <FaTimesCircle style={{ color: "red" }} />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
