import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

const Main = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <h1>Main Sayfasi</h1>
    </>
  );
};

export default Main;
