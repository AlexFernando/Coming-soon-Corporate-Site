import React, {useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import { Link } from "gatsby";
import { Border } from './navBarLinks';

const DropDownStyle = styled.div`
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 4rem 4rem 2rem 4rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding : 0rem 1rem;
    }
`;

const LinkDropDown = styled(Link)`
    
    font-family: 'Montserrat',sans-serif;
    text-transform: none;
    margin: 1rem 0 0 2rem;
    text-decoration: none;
    color: #000;
    font-size: 1.3rem;

    @media (min-width: 768px) {
        margin-top: 0;
        color: #004dff;
        font-size: 1.6rem;
    }
`;

const DropDown = ({dropDownControl}) => {

    const node = useRef();

    const handleClick = (e) => {
        if (node.current.contains(e.target)){
            //inside click
            dropDownControl(true);
            return;
        }
        // outside click
        dropDownControl(false);
    }

    useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
    }, []);
    
    return ( 
    
    <DropDownStyle ref={node} onClick={() => dropDownControl(true)}>
            
            <LinkDropDown to=" ">IT Consulting</LinkDropDown>
           
            <LinkDropDown to=" " >Infraestructure Service</LinkDropDown>
           
            <LinkDropDown to=" ">Application Service</LinkDropDown>
           
            <LinkDropDown to =" ">System's Integration</LinkDropDown>
    
    </DropDownStyle> 

    );
}
 
export default DropDown;