import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbars">
      <div className="header">
        <NavLink
          className="nav-link"
          style={({ isActive }) => ({ color: isActive && "red" })}
          to="/main"
        >
          React Movie App
        </NavLink>
      </div>

      <div className="links">
        <NavLink
          className="nav-link"
          style={({ isActive }) => ({ color: isActive && "red" })}
          to="/"
        >
          Login
        </NavLink>
        <NavLink
          className="nav-link"
          style={({ isActive }) => ({ color: isActive && "red" })}
          to="/register"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
