import { createGlobalStyle } from "styled-components";

import CreatoDisplayRegular from '../assets/fonts/CreatoDisplay-Regular.otf';
import CreatoDisplayMedium from '../assets/fonts/CreatoDisplay-Medium.otf';
import CreatoDisplayBold from '../assets/fonts/CreatoDisplay-Bold.otf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'CreatoDisplay';
        src: url(${CreatoDisplayRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'CreatoDisplay';
        src: url(${CreatoDisplayMedium}) format('opentype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'CreatoDisplay';
        src: url(${CreatoDisplayBold}) format('opentype');
        font-weight: 700;
        font-style: normal;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        background-color: transparent;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;