import React from "react";
import ContainerSSS from "./styles/ContainerSSS";
import HeaderSSS from "./styles/HeaderSSS";
import ButtonSSS, { DomatesButon } from "./styles/ButtonSSS";
import LinkSSS from "./styles/LinkSSS";

const Home = () => {
  return (
    <ContainerSSS>
      <HeaderSSS>STYLED COMPONENTS</HeaderSSS>

      <ButtonSSS enes>CLICK</ButtonSSS>
      <ButtonSSS>CLICK</ButtonSSS>
      <DomatesButon>CLICK</DomatesButon>
      <DomatesButon nurbaki>CLICK</DomatesButon>

      <HeaderSSS renk="red">STYLED COMPONENTS</HeaderSSS>

      <LinkSSS target="_blank" href="https://www.hepsiburada.com/">
        CLARUSWAY
      </LinkSSS>
      <LinkSSS href="https://www.hepsiburada.com/">CLARUSWAY</LinkSSS>
    </ContainerSSS>
  );
};

export default Home;
