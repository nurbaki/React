import React from "react";
import AnaUser from "./AnaUser";
import { KullaniciContext } from "../App";
import { useContext } from "react";

const Isimler = () => {
  const { kullanici } = useContext(KullaniciContext);
  return (
    <div>
      {kullanici.map((i) => (
        <h4>{i.login}</h4>
      ))}
      <AnaUser kullanici={kullanici} />
    </div>
  );
};

export default Isimler;
