import ResetCss from "./ResetCss.js";
import { Inter } from 'next/font/google'

const { default: styled, createGlobalStyle } = require("styled-components");

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
        box-sizing: border-box;
        font-family: ${inter.style.fontFamily};
    }
`

export default GlobalStyle

