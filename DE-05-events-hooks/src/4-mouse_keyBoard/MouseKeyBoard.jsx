import React from "react";
import { useState } from "react";

function MouseKeyBoard() {
  const [eksenX, setEksenX] = useState();
  const [eksenY, setEksenY] = useState();

  const mouse = (e) => {
    setEksenX(e.pageX);
    setEksenY(e.pageY);
  };

  return (
    <div className="container text-center mt-4 d-flex flex-column align-items-center">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <p>X ve Y</p>
      <p className="text-danger fw-bold">
        {eksenX}
        {eksenY}
      </p>
      <div
        id="coord"
        className="bg-success text-light w-50 p-4"
        onMouseMove={mouse}
      >
        KOORDINATLAR
      </div>
    </div>
  );
}

export default MouseKeyBoard;
