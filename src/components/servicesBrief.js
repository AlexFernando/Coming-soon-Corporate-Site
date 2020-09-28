import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import styled from '@emotion/styled';
import Service from './service';
import {Title, SubTitle, Separator, TextContent} from './contenidoInicio';
import { css } from '@emotion/core';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #22165b;
    background-color: #0b071d;
    padding: 25% 10%;

    @media(min-width: 768px) {
        padding: 15% 10%;
    }
    
`
const ListOfServices = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 30.33%;
    color: #FFF;
    margin-top: 5rem;
    
    @media(min-width: 768px) {
        flex-direction: row;
    }
`;

const ServicesBrief = () => {

    const services = useStaticQuery(graphql`
        query {
            services : allServices {
                nodes {
                    image {
                        sharp: childImageSharp {
                            fluid (maxWidth: 1200) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                
                    title
                    category
                    description
                    alt
                }
            }
        }    
    `);

    const listOfServices = services.services.nodes;

    return (        
        <Container id="services">
            <Title> One great product</Title>
            <SubTitle>What you need now</SubTitle>

            <Separator></Separator>

            <div css={css`
                display: flex;
                flex-direction: column;
                    @media (min-width: 768px) {
                        flex-direction: row;
                    }
                `}
                >
                <TextContent>
                    <h2>Foundations</h2>
                    <p>
                        The digitally competent organization must be base on a proper foundation, this means 
                        not only having the hardware infrastructure, but also the proper software infrastructure. 
                        Currently, much of the latter is supported by the use of cloud computing services.    
                    </p>
                </TextContent>
                
                <TextContent css={css`
                    margin-top: 3rem;
                    @media (min-width: 768px) {
                        margin-top: 0;
                    }
                `}>
                     <h2>Processes</h2>
                    <p> 
                        The organization that is already founded on an adequate digital base or platform seeks to bring 
                        its processes to this environment. This requires not only using office automation or electronic messaging tools, 
                        but also incorporating specialized tools according to your industry and the business areas that are most relevant to your case. 
                    </p>
                </TextContent>
            </div>
            
            <ListOfServices>
                {listOfServices.map( service => (
                   
                        <Service 
                            key = {service.title}
                            service = {service}
                        />
                   
                ))}
            </ListOfServices>              
        </Container>
    );
}
 
export default ServicesBrief;