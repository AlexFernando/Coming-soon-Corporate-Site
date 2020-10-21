import React from "react"
import styled from '@emotion/styled';
import { Link } from "gatsby"
import DropDown from "./dropDown";

const DropDownMobile = styled.div`

    @media (min-width: 768px) {
      display: none;
    }
`;

export const Border = styled.div`
  
  content : "";
  height  : 1px;
  width   : 100%;  /* or 100px */
  border-bottom: 1px solid #D3D3D3;
  margin: 1rem 0 1rem 0;
  
  @media (min-width: 768px) {
      display: none;
    }

`

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  padding: 1rem;
  font-weight: bold;
  
  @media (min-width: 768px) {
    background-color: #FFF;
    font-weight: normal;
    border-radius: 5px;
    font-size: 1.8rem;

    :hover {
      background-color: rgba(34,49,63, .7);
      color: #fff;
      transition: all 0.4s;
    }
  }
`
const NavbarLinks = ({navBarStateFromParent, dropDownControl, dropDownOpen}) => {

  return (
    <>      
        <Border></Border>
        <NavItem to="/" onClick={() => navBarStateFromParent(false)}>Home</NavItem>
        <Border></Border>
       
        <NavItem to="#about" onClick={() => navBarStateFromParent(false)}>About</NavItem>
        <Border></Border>
    
        <NavItem to=" " onClick={() => dropDownControl(!dropDownOpen)} >
          Services
            
        </NavItem>

        {dropDownOpen ?
              <DropDownMobile>
                  <DropDown dropDownControl = {dropDownControl}/> 
              </DropDownMobile>

            : null}

        <Border></Border>
        <NavItem to="#contact" onClick={() => navBarStateFromParent(false)}>Contact</NavItem>

        <Border></Border>
    </>
  )
}

export default NavbarLinks;