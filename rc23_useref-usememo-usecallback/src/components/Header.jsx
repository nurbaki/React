import React, { memo } from "react";
import cw from "../assets/cw_logo.png";

//* React.memo componentleri hafızaya almak için kullanılır, child ların fazladan render'ını önler

const Header = ({ resim }) => {
  console.log("HEADER COMPONENT RENDERED");
  return (
    <div className="header">
      <img
        src={resim ? resim : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};

export default memo(Header);
