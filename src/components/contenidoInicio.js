import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

export const MainContainer = styled.div`
    border-bottom: 1px solid #22165b;
    background-color: #0b071d;
    padding: 25% 10%;

    @media(min-width: 768px) {
        padding: 15% 10%;
    }

    div {
        display: flex;
        flex-direction: column;

        @media(min-width: 768px) {
            flex-direction: row;
        }
    }
`

export const Title = styled.span`
    font-size: 2rem;
    text-transform: uppercase;
    color:#fff;
    line-height: 2;
    font-family: 'Oswald', sans-serif;

    @media(min-width: 768px) {
        font-size: 2.5rem;
    }
`

export const SubTitle = styled.h2 `
    color : #fff;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;   
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 3px;
 
    @media(min-width: 768px) {
        font-size: 5rem;
    }
`

export const Separator = styled.span`
    display: block;
    width: 10rem;
    height: 12px;
    margin-top: 3rem;
    margin-bottom: 5rem;
    border-radius: 20px;
    background: linear-gradient(to right, #636BFF, #1b9dff);
`

export const TextContent = styled.div`

    line-height: 2;
    color: #fff;

    @media(min-width: 768px) {
        flex: 0 0 50%;
        margin-right: 2rem;

        &:last-of-type {
            margin-left: 2rem;
            flex-direction: column;
        }
    }

    p {
        line-height: 1.6;
        letter-spacing: 0;
        margin-bottom: 2rem; 
        font-size: 1.8rem;
        font-family: 'PT Sans', sans-serif;
    
        @media(min-width: 768px) {
            text-align: justify;
            font-size: 1.8rem;
        }
    }
`

export const List =  styled.ul`
    letter-spacing: 0;

    li {
        font-family: 'PT Sans', sans-serif;
        font-weight: bold;
    }
`

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
        font-family: 'Font Awesome\ 5 Free';
        margin-right: 5px;
        color: #1b9dff;
`

const ContenidoInicio = () => {

    return (

        <MainContainer id="about">
            <Title>About us</Title>
            
            <SubTitle>We are here to kick off <br/>
            your project</SubTitle>

            <Separator></Separator>

            <div>
                <TextContent>
                    <p> Our proposal seeks to bring your business to automation based on the right combination of business, processes, and technology. We believe that these three aspects are the pillars that must be chosen properly for the business to achieve its business objectives and successfully position itself in the digital age.
                        Our proposal to approaching projects incorporates and is based on these three visions of your organization's activity. In this way, first of all, we seek to incorporate the ideal stuff who understand your business and its processes, to finally choose the right techniques and technologies for the project objectives.    
                    </p>
                </TextContent>
                
                <TextContent>

                    <p> Our services can be applied in different sectors of the economy. 
                    Those includes: </p>

                    <List>
                        <li><FontAwesomeIconStyled icon={faArrowAltCircleRight}/>Agriculture</li>
                        <li><FontAwesomeIconStyled icon={faArrowAltCircleRight}/>Banking</li>
                        <li><FontAwesomeIconStyled icon={faArrowAltCircleRight}/>Education</li>
                        <li><FontAwesomeIconStyled icon={faArrowAltCircleRight}/>Mining Sector</li>
                        <li><FontAwesomeIconStyled icon={faArrowAltCircleRight}/>Oil Sector</li>
                        <li><FontAwesomeIconStyled icon={faArrowAltCircleRight}/>Supply Chain</li>
                    </List>        
               
                </TextContent>
            </div>
        </MainContainer>
     );
}
 
export default ContenidoInicio;