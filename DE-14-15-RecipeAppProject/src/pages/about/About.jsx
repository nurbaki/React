import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          Software Developer <span>Nurbaki Bayansal </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Nurbaki</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known HTML, CSS, SASS, Bootstrap, JS, ReactJS, Python.
        </h4>
        <h2>
          <a href="mailto:nurbakibayansal11@gmail.com">Send email</a> :
          nurbakibayansal11@gmail.com
        </h2>
        {/* whatsapp://tel:000 111 222 */}
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
