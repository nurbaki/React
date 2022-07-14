import { useState } from "react";
import "./App.css";
import { Clock } from "./component/Clock";
import { OrnekUseEffect } from "./component/OrnekUseEffect";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [goster, setGoster] = useState(true);
  console.log(goster);

  return (
    <div className="container text-center mt-4">
      <button className="btn-lg btn-danger" onClick={() => setGoster(!goster)}>
        GOSTER
      </button>

      {/* {goster && <Clock />} */}

      {goster && <OrnekUseEffect />}

      {/* goster && <Clock /> goster true ise Clock componentini göster */}
    </div>
  );
}

export default App;
