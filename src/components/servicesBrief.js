import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import styled from '@emotion/styled';
import Service from './service';
import {Title, SubTitle, Separator} from './contenidoInicio';

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