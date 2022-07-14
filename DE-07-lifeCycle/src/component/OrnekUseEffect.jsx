//?==================================================================
//?                       USEEFFECT HOOK
//?==================================================================
//! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
//! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..
//setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (istediğim bişeyi yap) demek için kullanılır

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const OrnekUseEffect = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("ilk render");
  //     console.log(count);

  //     // setTimeout(() => {
  //     //   alert("veri getirildi");
  //     // }, 3000);
  //!   }, [count]);

  useEffect(() => {
    console.log(count);

    const time = setInterval(() => {
      console.log("INTERVAL");
    }, 1000);
    return () => {
      clearInterval(time);
      console.log("baska sayfaya gecildi, interval durdu");
    };
  }, [count]);

  return (
    <div className="mt-4">
      <h3>COUNT : {count}</h3>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        ARTIR
      </button>
    </div>
  );
};
