import { createGlobalStyle } from 'styled-components';
import './App.css'

export default createGlobalStyle`
        html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: ${({ theme }) => theme.font};
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    
    :root {
        --white: #EFEFEF;
        --black: #282E31;
        --red: #A44A3F;
        --font-white: #F5F5F5;
    }
    
    .App {
        min-height: 100vh;
        font-family: 'Roboto Mono', monospace;
        transition: .5s;
        background-color: ${({ theme }) => theme.primary};
    }
    
    .body {
        padding: 4rem 2rem;
        max-width: 1520px;
        margin: 0 auto;
    }

    h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 2rem;
    letter-spacing: 4px;
    }


    h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 1rem;
    letter-spacing: 4px;
    }



    p {
    font-size: 20px;
    margin-bottom: 1rem;
    line-height: 2rem;
    }

    section {
    margin-bottom: 6rem;
    }

    @media screen and (max-width: 800px) {
    h1 {
        font-size: 32px;
    }
    h2 {
        font-size: 28px;
    }

    section {
        margin-bottom: 4rem;
    }
    }


    @media screen and (max-width: 550px) {
    .body {
        padding: 1rem;
    }


    h1 {
        line-height: 2rem;
        font-size: 24px;
    }

    h2 {
        font-size: 18px;
        font-weight: bold;
    }

    p, span {
        font-size: 14px;
    }

    }

`