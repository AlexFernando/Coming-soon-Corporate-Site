import React from "react"
import styled from '@emotion/styled';
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  
  :hover {
    background-color: rgba(34,49,63, .7);
    padding: 1rem;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    transition: all 0.4s;
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {

  return (
    <>
        <NavItem to="/">Home</NavItem>
        <NavItem to="#about">About</NavItem>
        <NavItem to="#services">Services</NavItem>
        <NavItem to="#contact">Contact</NavItem>
    </>
  )
}

export default NavbarLinks