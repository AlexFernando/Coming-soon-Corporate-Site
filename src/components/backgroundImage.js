import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const ImageBgTech = styled(BackgroundImage)`
    height: 700px;
`;

const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63, .7), rgba(34, 49, 63, .7));
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    
    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        margin: 0%;
        text-transform: uppercase;
        font-size: 3.5rem;
        text-align: center;

        @media(min-width: 768px) {
            font-size: 8rem;
        }
    }

    p {
        font-size: 1.6rem;
        line-height: 1.8;
        text-align: center;

        @media(min-width: 768px) {
            font-size: 2rem;
        }
    }
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;

    @media(min-width: 768px) {
        display: flex;
        flex-direction: row;
    }
`;

const Button = styled.a`
    display: flex;
    padding: 5px;
    margin-top: 2rem;
    height: 50px;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    background: transparent;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;

    @media(min-width: 768px) {
        display: flex;
        flex: 0 0 60%;
        margin: 4rem 2rem 0 2rem;
        font-size: 2rem;
    }

    &:hover {
        background-color: #FFF;
        color: #000;
        transition: all 0.4s;
    }

`;



const ImageBackground = () => {

    //get the image background using a graphql query    
    const { image } = useStaticQuery(graphql`
        query {
            image:file(relativePath: { eq: "bg-multiple-lightbulbes.jpg"} ) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    
    return (

        <ImageBgTech tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <TextoImagen>
                <div>
                    <h1>We're Coming Soon!</h1>
                    <p>We are working hard to bring the right technology services <br></br>  to the global market!. You will soon hear from us.</p>
                </div>
    
                <ButtonContainer>
                    <Button css = {css`  
                        background: linear-gradient(45deg, #051dff 0, #b500ff 100%);
                        
                        &:hover {
                             color: #FFF;
                        }
                    `} 
                         href="#mailgo" data-address="info" data-domain="3allez.com" >Notify Us</Button>
                    <Button href="#about">Explore</Button>
                </ButtonContainer>
            </TextoImagen>
        </ImageBgTech>    
    );
}

export default ImageBackground;