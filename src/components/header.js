import React from 'react';
import {css} from '@emotion/core';
import NavInfo from './navInfo';
import NavBar from './navBar';

const Header = () => {
    return ( 
        <header
            css={css`
                background-color: #FFF;
                padding: 0rem;
            `}
        >
           

            <NavBar />
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    
                `}
            >

            </div>

        </header>
     );
}
 
export default Header;