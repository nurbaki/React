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
//! Ögrencilist burada context provider'in arasinda oldugu icin degiskenleri ögrenci liste direk kullanabilecegiz.
  return (
    <div> 
      <OgrenciContext.Provider value={{ ogrenci, changeRenk }}>
        <OgrenciList />
      </OgrenciContext.Provider>
    </div> //! Burada listelenmeyen componentlerde bu degiskemleri kullanmadan önce import etmemiz gerekecek.Örnegin: OgrenciItem componenti 
  );
};

export default App;
