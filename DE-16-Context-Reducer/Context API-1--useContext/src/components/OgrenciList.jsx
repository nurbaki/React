import React from "react";
import OgrenciItem from "./OgrenciItem";

const OgrenciList = () => {
  return (
    <div>
      <h1> Ögrenci Listesi</h1>
      <h2>Color inputu degistiginde, icinde bulundugu div 'in rengini degistiren program</h2>
      <OgrenciItem />
    </div>
  );
};

export default OgrenciList;
