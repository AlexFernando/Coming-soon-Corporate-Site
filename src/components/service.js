import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIconStyled} from './contenidoInicio'

const ServiceInfo = styled.div`
    display:flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 2rem;
    
    @media (min-width: 768px) {
        padding: 0 2rem;
        
        &:first-of-type {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
        }
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: #FFF;

        h3 {
            margin-top: 2rem;
            font-size: 2rem;
        }

        small {
            font-size: 1.2rem;
            font-style: normal;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #878787;
        }

    }

    ul {
        margin-top: 1rem;
    }

    p {
        font-weight: 400;
        line-height: 1.6;
    }
`


const Service = ({service}) => {

    const {title, description, category, image, alt} = service

    let descriptionSplitted = description.split('-');

    return ( 
        
        <ServiceInfo>
            <a href="/" >
                <Image css= {css`
                    @media (min-width: 801px) {
                        width: 220px;
                        height: 150px;
                    }
                `}  
                fluid = {image.sharp.fluid} 
                alt = {alt}
                />
                <h3>{title}</h3>
                <small>{category}</small>
            </a>

            <ul> {descriptionSplitted.map( itemService => (
                   <li css={css`
                       list-style: none;
                   `}
                    key = {itemService}
                   ><FontAwesomeIconStyled icon={faArrowAltCircleRight}/>{itemService}</li>
           ))}</ul>
        </ServiceInfo>
     );
}
 
export default Service;