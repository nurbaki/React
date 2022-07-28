import React, { useState } from "react";
import { createContext } from "react";
import OgrenciList from "./components/OgrenciList";
import data from "./data";

//!ogrenci object i ve fonksiyon için  context create ediyoruz, dışarıdan kullanıma açıyoruz
export const OgrenciContext = createContext();

const App = () => {
  const [ogrenci, setOgrenci] = useState(data);

  const changeRenk = (id, newColor) => {
    setOgrenci(
      ogrenci.map((i) => (i.id === id ? { ...i, color: newColor } : i))
    );
  };

  return (
    <div>
      <OgrenciContext.Provider value={{ ogrenci, changeRenk }}>
        <OgrenciList />
      </OgrenciContext.Provider>
    </div>
  );
};

export default App;
