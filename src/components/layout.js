import React from 'react';
import Header from './header';
import {Global, css} from '@emotion/core';
import {Helmet} from 'react-helmet';
import Footer from './footer';

const Layout = (props) => {
    return (
        <>
            <Global 
                styles = {css`
                    html {
                        font-size: 62.5%;

                    }
                    body {
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5
                    }
                    h1, h2, h3 {
                        margin: 0 0 1.5rem 0;
                        line-height: 1;
                    }
                    h1, h2, h3 , h4, h5 {
                        font-family: 'Oswald', sans-serif;
                    }
                      
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />

            

            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Oswald:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"/> 
            </Helmet>   
            
            <Header />
            {props.children}
            <Footer title={"3Allez"}/>
        </>
    );
}
 
export default Layout;