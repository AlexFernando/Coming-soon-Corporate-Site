import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const ServiceInfo = styled.div`
    display:flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 2rem;
    
    @media (min-width: 768px) {
        padding: 0 2rem;
        
        &:first-child {
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

    return ( 
        
        <ServiceInfo>
            <a href="/" >
                <Image fluid = {image.sharp.fluid} />
                <h3>{title}</h3>
                <small>{category}</small>
            </a>

            <p>{description}</p>
        </ServiceInfo>
     );
}
 
export default Service;