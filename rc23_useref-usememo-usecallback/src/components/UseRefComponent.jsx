import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  //*1. kullanım
  const [deger, setDeger] = useState(0);
  const valueRef = useRef(0);

  console.log("deger", deger);
  console.log("valueRef", valueRef.current);

  //*2.kullanım DOM elemanlarına erişme
  const inputRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    // document.querySelector("input").focus();
    // console.log(document.querySelector("input"));
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  const arttir = () => {
    setDeger(deger + 1);
    valueRef.current++;
  };

  const renkDegistir = () => {
    divRef.current.style.backgroundColor = inputRef.current.value;
  };

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component </h2>
      <input ref={inputRef} type="text" placeholder="Enter text..." />
      <button onClick={renkDegistir}>ChangeBGColor</button>
      <button onClick={arttir}>increase Value</button>
    </div>
  );
};

export default UseRefComponent;
