import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {Title, SubTitle, Separator} from './contenidoInicio';
import {Container} from './servicesBrief';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;

    h3 {
        font-size: 1.8rem;
        margin-bottom: .5rem;
        text-transform: uppercase;
        color: #636BFF;

        @media(min-width: 768px) {
            font-size: 2.2rem;
        }
    }

    p {
        margin-bottom: 2.5rem;
        margin-top: 0;
        color: #FFF;
        font-family: 'PT Sans', sans-serif;

        @media(min-width: 768px) {
            font-size: 1.8rem;
        }

        a {
            text-decoration: none;
            color: #fff;
            font-weight: bold;
        }
    }
`;

const Contact = () => {

    return ( 
        <Container id="contact">
        
            <Title>Contact us</Title>
            <SubTitle>Get in touch</SubTitle>
            <Separator></Separator>

            <div css={css`
                display: flex;
                flex-direction: column;

                @media (min-width: 768px) {
                        flex-direction: row;
                        justify-content: space-between;
                    }
            `}>

                <div css={css`
                    @media (min-width: 768px) {
                        text-align: center;
                    }
                `}    
                >
                    <ContactContainer>
                        
                        <h3>Let's build something together</h3>
                        <p>We'd like to hear from you
                            <br></br>
                                Send us a message
                            <br></br>
                            <a href="#mailgo" data-address="info" data-domain="3allez.com">info@3allez.com</a>
                        </p>

                    </ContactContainer>
                    
                </div>

                <div css={css`
                    @media (min-width: 768px) {
                        display: flex;
                        flex: 0 0 50%;
                    }
                `}    
                >
                    <ContactContainer>
                        
                        <h3>Peru</h3>
                        <p>Lima
                            <br></br>
                                Call us at:
                            <br></br>
                                <a href="/" alt="Phone Number Peru">(+51) 992 807 020</a>
                        </p>

                    </ContactContainer>
                    
                    <ContactContainer>
                        <h3>Canada</h3>
                        <p>Montreal
                            <br></br>
                                Call us at:
                            <br></br>
                                <a href="/" alt="Phone Number Canada" >+1 438 320-9499</a>
                        </p>
                    </ContactContainer>
                </div>
            </div>
            
        </Container>

    );
}
 
export default Contact;