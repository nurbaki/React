import React from "react";
import { useState } from "react";

const GorevEkle = ({ gorevler, setGorevler }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const [buton, setButon] = useState({
    renk: "red",
    yazi: "CLOSE ADD TASK BAR",
  });

  const butonClick = () => {
    if (buton.renk === "red") {
      setButon({
        renk: "purple",
        yazi: "SHOW ADD TASK BAR",
      });
    } else {
      setButon({
        renk: "red",
        yazi: "CLOSE ADD TASK BAR",
      });
    }
  };

  const yapSubmit = (e) => {
    e.preventDefault();
    const id = gorevler.lenght + 1;
    setGorevler([...gorevler, { id: id, text: text, day: day, bitti: false }]);
  };

  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          style={{ backgroundColor: buton.renk }}
          onClick={butonClick}
        >
          {buton.yazi}
        </button>
      </header>

      {buton.renk === "red" && (
        <form onSubmit={yapSubmit}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              type="text"
              id="text"
              value={gorevler.text}
              name="text"
              placeholder="Add Task"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              type="date"
              id="day"
              value={gorevler.text}
              name="day"
              placeholder="gg.aa.yyyy"
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GorevEkle;
