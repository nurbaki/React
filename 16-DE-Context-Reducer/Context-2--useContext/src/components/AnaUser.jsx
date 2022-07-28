import React, { useContext } from "react";
import { KullaniciContext } from "../App";

const AnaUser = ({ kullanici }) => {
  const { degistirWidth } = useContext(KullaniciContext);
  //! const degistirWidth = (id, newWidth) => {
  //!   setKullanici(() =>
  //!     kullanici.map((i) => (i.id === id ? { ...i, width: newWidth } : i))
  //   );
  // };

  return (
    <div>
      {kullanici.map((i) => (
        <div key={i.id}>
          <h3>{i.login}</h3>
          <img src={i.avatar_url} alt="" width={i.width} />
          <div>
            <label htmlFor="width">Image width(px)</label>
            <input
              className="width"
              type="number"
              value={i.width}
              onChange={(e) => degistirWidth(i.id, e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnaUser;
