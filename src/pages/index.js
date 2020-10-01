import React from "react";
import Layout from '../components/layout';
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from '../components/backgroundImage';
import ContenidoInicio from '../components/contenidoInicio';
import ServicesBrief from '../components/servicesBrief';
import Contact from '../components/contact';
import SEO from "../components/seo"

const IndexPage = () => {

  const { image } = useStaticQuery(graphql`
    query {
        image:file(name: {eq: "nice-laptop"}) {
          sharp: childImageSharp {
            resize {
                    src
                    width
                    height
                  }
                }
        }
    }
`);

    const metaImage =  image.sharp.resize;

    return(
      <Layout>
        <SEO title="3 Allez" image={metaImage}/>
        <BackgroundImage />
        <ContenidoInicio />
        <ServicesBrief />
        <Contact />
      </Layout>
    )
}

export default IndexPage;
