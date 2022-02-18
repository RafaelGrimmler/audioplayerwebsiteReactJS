import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    html, body,  #root {
        height: 100%;
        font-family: 'Roboto Mono', monospace;
    }

    body {
        overflow-x: hidden;
    }
    
    ul {
        list-style: none;
    }
    
    #root {
        --color-text-special: #ff8c00;
        --color-general-background: #0d0c1a;
        --color-special-background: #070612;
        --color-navbar-background-list: #161429;
    }
    
`;