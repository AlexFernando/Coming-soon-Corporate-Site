import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const LinkStyled = styled(Link)`
    color: #FFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }
    &:hover {
        border-bottom: 2px solid #FFF;
    }
`;

const Navegacion = () => {
  
    return ( 
      
        <Nav>
            <LinkStyled 
                to={`/`}
                activeClassName="pagina-actual"
            >Home</LinkStyled>
            
            <LinkStyled
                to="#about"
                activeClassName="pagina-actual"
            >About us</LinkStyled>

            <LinkStyled 
                to="#services"
                activeClassName="pagina-actual"
            >Services</LinkStyled>

            <LinkStyled 
                to="#contact"
                activeClassName="pagina-actual"
            >Contact</LinkStyled>
        </Nav> 
    
        
    );
}
 
export default Navegacion;