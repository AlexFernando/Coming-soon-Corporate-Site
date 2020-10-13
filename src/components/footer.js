import React from 'react';
import styled from '@emotion/styled';
import Navegacion from './navFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.div`
    background-color: #0b071d;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #FFF;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    color: #fff;
    font-family: 'PT Sans', sans-serif;

    @media(min-width: 768px) {
        flex-direction: row
    }
`
const ElementFooter = styled.div`
    flex: 0 0 33.33%;
    text-align: center;
    
    &:last-child {
        margin-top: 2.5rem;
    }

    ul {
        display: flex;

        li {
            margin: 0 1rem;

            a {
                color: #FFF;
            }
        }
    }

    @media(min-width: 768px) {

        &:last-child {
            margin-top: 0rem;
        }
        
        ul {
            justify-content: center;
        }
    }
`

const Footer = ({title}) => {

    const year = new Date().getFullYear();

    return (
       
        <footer>   
            <FooterContainer>
                <ElementFooter>
                    <Navegacion />
                </ElementFooter>

                <ElementFooter>
                    &copy; {title} - {year} 
                </ElementFooter>

                <ElementFooter>
                    <ul>
                        <li><a href="#mailgo" alt="Send an Email" aria-label="Send Us an Email" data-address="info" data-domain="3allez.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
                        <li><a href="https://twitter.com/3Allez" alt="Share on Twitter" aria-label="Link to Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li><a href="/"><FontAwesomeIcon aria-label="Link to Linkedin" icon={faLinkedin}/></a></li>
                    </ul>
                </ElementFooter>
            </FooterContainer>
        </footer>

     );
}
 
export default Footer;