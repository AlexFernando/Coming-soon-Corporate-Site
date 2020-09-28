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
        font-weight: 700;
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
                <Image fluid = {image.sharp.fluid} />
                <h3>{title}</h3>
                <small>{category}</small>
            </a>

            <p> {descriptionSplitted.map( itemService => (
                   <li css={css`
                       list-style: none;
                   `}
                    key = {itemService}
                   ><FontAwesomeIconStyled icon={faArrowAltCircleRight}/>{itemService}</li>
           ))}</p>
        </ServiceInfo>
     );
}
 
export default Service;