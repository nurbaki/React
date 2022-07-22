import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons

const GorevleriGoster = ({ gorevler, setGorevler }) => {
  return (
    <div>
      {gorevler.map((x) => {
        const { id, text, day, bitti } = x;
        const deleteGorev = (id) => {
          setGorevler(gorevler.filter((i) => i.id !== id));
        };

        return (
          <div className={bitti ? "done" : "gorev"} key={id}>
            <h3>
              {text}
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => deleteGorev(id)}
              />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
