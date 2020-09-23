import React from "react";
import Layout from '../components/layout';
import BackgroundImage from '../components/backgroundImage';
import ContenidoInicio from '../components/contenidoInicio';
import ServicesBrief from '../components/servicesBrief';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <BackgroundImage />
    <ContenidoInicio />
    <ServicesBrief />
    <Contact />
  </Layout>
)

export default IndexPage;
