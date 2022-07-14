import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
//!!!!https://momentjs.com/

export const Clock = () => {
  const [zaman, setZaman] = useState(moment());

  //! componentDidMount=component ilk render edildiğinde []

  // useEffect(()=>{
  //  setInterval(() => {
  //   setZaman(moment());

  //   console.log("merhaba");
  // }, 1000)}, [])

  useEffect(() => {
    const time = setInterval(() => {
      setZaman(moment());
      console.log("merhaba");
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div>
      <div>
        {zaman.format("HH")}
        {zaman.format("ss") % 2 === 0 ? ":" : " "}
        {zaman.format("mm")}
        {zaman.format("ss") % 2 === 0 ? ":" : " "}
        {zaman.format("ss")}
      </div>
    </div>
  );
};
