import React from "react";
import ButtonSSS from "./styles/ButtonSSS";
import ContainerSSS from "./styles/ContainerSSS";
import HeaderSSS, { NavSSS, LogoSSS, ImageSSS } from "./styles/HeaderSSS";

const Header = () => {
  return (
    <HeaderSSS>
      <ContainerSSS>
        <NavSSS>
          <LogoSSS src="./images/logo.png"></LogoSSS>
          <div>
            <ButtonSSS>Apply Courses</ButtonSSS>
            <ButtonSSS>Talk To Adviser</ButtonSSS>
          </div>
        </NavSSS>
        <NavSSS>
          <div>
            <h1>The IT Career of Your Dreams Starts Here!</h1>
            <p>
              Clarusway is a leading international software Bootcamp. Join a
              micro class online with other trainees and learn coding skills
              with a highly-skilled instructor.
            </p>
            <ButtonSSS>Start Your New Carrier</ButtonSSS>
          </div>
          <ImageSSS src="./images/hero.jpg"></ImageSSS>
        </NavSSS>
      </ContainerSSS>
    </HeaderSSS>
  );
};

export default Header;
