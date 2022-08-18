import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";
import ClaruswayLogo from "../assets/cw.jpeg";

const Navbar = () => {
  const navigate = useNavigate();

  const { currentUser, blog, setBlog, setIsSubmit } = useContext(AuthContext);

  const newblog = () => {
    setBlog({ ...blog, title: "", url: "", content: "" });
    setIsSubmit("SUBMIT");
    navigate("/newblog");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand text-white myBrand d-flex  align-items-center m-3"
          >
            <img src={ClaruswayLogo} alt="Clarusway Logo" />
            <h4 className="m-3">Nurbaki's Blog App</h4>
          </Link>

          <div className="d-flex text-white align-items-center ">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize">
                  {currentUser?.displayName}
                </h5>
                <button
                  onClick={() => navigate("/about")}
                  className="ms-2 btn btn-outline-light"
                >
                  About
                </button>
                <button
                  onClick={() => navigate("/profile")}
                  className="ms-2 btn btn-outline-light"
                >
                  Profile
                </button>
                <button
                  onClick={newblog}
                  className="ms-2 btn btn-outline-light"
                >
                  New Blog
                </button>
                <button
                  onClick={() => logOut(navigate)}
                  className="ms-2 btn btn-outline-light"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/about")}
                  className="ms-2 btn btn-outline-light"
                >
                  About
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="ms-2 btn btn-outline-light"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="ms-2 btn btn-outline-light"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
