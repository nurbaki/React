import React, { useContext } from "react";
import { OgrenciContext } from "../App";

const OgrenciItem = () => {
  const { ogrenci, changeRenk } = useContext(OgrenciContext);

  //   const { changeRenk } = useContext(OgrenciContext);

  return (
    <div>
      {ogrenci.map((i) => {
        return (
          <div
            key={i.id}
            style={{
              backgroundColor: i.color,
              paddingBottom: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Name: {i.name}</h3>
            <h4>Email: {i.email}</h4>
            <h4>Age: {i.age}</h4>
            Color:{" "}
            <input
              type="text"
              name="color"
              value={i.color}
              onChange={(e) => changeRenk(i.id, e.target.value)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OgrenciItem;
