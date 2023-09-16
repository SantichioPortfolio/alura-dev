import ResetCss from "./ResetCss.js";
import { Inter } from 'next/font/google'

import { createGlobalStyle } from "styled-components";

const inter = Inter({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })

const GlobalStyle = createGlobalStyle`
    ${ResetCss}

    body {
        background-color: #051D3B;
        width: 100VW;
        min-width: 1440px;
        font-family: ${inter.style.fontFamily};
        color: #fff;
    }

    #__next {
        margin: 32px;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 56px auto;
        grid-template-areas: 
            "logo search profile"
            "aside main main";
        row-gap: 40px;
        column-gap: 40px;
    }
`

export default GlobalStyle