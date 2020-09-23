import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    background-color: #005a87;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const NavLink = styled(Link)`
    color: #FFF;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1.5rem;
    margin-left: 2rem;
`;

const NavInfo = () => {
    return ( 
        <Nav>
            <NavLink 
                to={`/`}
            >987654321</NavLink>
            <NavLink 
                to={`/`}
            >consultingTech@gmail.com</NavLink>
        </Nav>
     );
}
 
export default NavInfo;