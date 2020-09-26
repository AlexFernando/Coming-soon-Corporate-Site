import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {Title, SubTitle, Separator} from './contenidoInicio';
import {Container} from './servicesBrief';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;

    h4 {
        font-size: 1.8rem;
        margin-bottom: .5rem;
        text-transform: uppercase;
        color: #636BFF;
    }

    p {
        margin-bottom: 2.5rem;
        margin-top: 0;
        color: #FFF;

        a {
            text-decoration: none;
            color: #fff;
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
                        
                        <h4>Let's build something together</h4>
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
                        
                        <h4>Peru</h4>
                        <p>Lima
                            <br></br>
                                Call us at:
                            <br></br>
                                <a href="/">(+51) 992 807 020</a>
                        </p>

                    </ContactContainer>
                    
                    <ContactContainer>
                        <h4>Canada</h4>
                        <p>Montreal
                            <br></br>
                                Call us at:
                            <br></br>
                                <a href="/" >+1 438 320-9499</a>
                        </p>
                    </ContactContainer>
                </div>
            </div>
            
        </Container>

    );
}
 
export default Contact;