import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h4>Fire Blog App</h4>
          </Link>
          <div className="d-flex text-white align-items-center ">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize">
                  {currentUser?.displayName}
                </h5>
                <button
                  onClick={() => navigate("/profile")}
                  className="ms-2 btn btn-outline-light"
                >
                  Profile
                </button>
                <button
                  onClick={() => navigate("/newblog")}
                  className="ms-2 btn btn-outline-light"
                >
                  New Blog
                </button>
                <button
                  onClick={() => logOut()}
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
