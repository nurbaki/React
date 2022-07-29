import React from "react";
import { Logo, Menu, MenuLink, Nav, Hamburger } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [acik, setAcik] = useState(false);
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Nurbaki>"}</i>
        <span>recipe</span>{" "}
      </Logo>
      <Hamburger onClick={() => setAcik(!acik)}>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu onClick={() => setAcik(!acik)} osman={acik}>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com" target="blank">
          Github
        </a>
        <MenuLink to="/">Login</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
