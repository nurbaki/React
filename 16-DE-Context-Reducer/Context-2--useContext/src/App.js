import { useState, useEffect, createContext } from "react";
import "./App.css";
import GosterUsers from "./pages/GosterUsers";

export const KullaniciContext = createContext();

function App() {
  const [kullanici, setKullanici] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setKullanici(data));
  }, []);

  console.log(kullanici);

  const degistirWidth = (id, newWidth) => {
    setKullanici(() =>
      kullanici.map((i) => (i.id === id ? { ...i, width: newWidth } : i))
    );
  };

  //! Verileri console da tabloda görmek icin
  // console.table(kullanici);

  return (
    <KullaniciContext.Provider value={{ kullanici, degistirWidth }}>
      <GosterUsers />
    </KullaniciContext.Provider>
  );
}

export default App;
