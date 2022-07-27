import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  /* açık yeşil olan navbar */

  background: #e1f1dd;
 
`;



export const MenuLink = styled(Link)`
  /* navbardaki 3 kelime ... tek tek about vs yazanların özellikleri */





`;
export const Menu = styled.div`
  /* navbardaki 3 kelime about ...hepsini içine alan sarmalın (kutunun ) özellikleri*/
  background: #e1f1dd;
 

  
  
`;
export const Logo = styled(Link)`
  color: #393e46;
 

  i {
    font-family: "Girassol", sans-serif;
  }
  span {
    font-family: "Girassol", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #00adb5;
  }
`;


