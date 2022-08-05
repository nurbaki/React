import React, { useState } from "react";
import Header from "./components/Header";
import fs from "./assets/fs.png";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const [resim, setResim] = useState();
  return (
    <div>
      <Header resim={resim} />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setResim(fs)}>FS</button>
    </div>
  );
};

export default ReactMemo;
