import { createGlobalStyle } from "styled-components";

// AQUI É COLOCADO AS CONFIGURAÇÕES GLOBAIS DE CSS
const GlobalStyle = createGlobalStyle`
  *, 
  *:after,
  *:before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
  }

  :root {
    font-size: 62.5%; // 62.5% = 10px
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
