import { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";

export const AuthContext = createContext();

const initialValues = { title: "", url: "", content: "" };

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [blog, setBlog] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState("SUBMIT");

  useEffect(() => {
    // setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, isSubmit, setIsSubmit, blog, setBlog }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
