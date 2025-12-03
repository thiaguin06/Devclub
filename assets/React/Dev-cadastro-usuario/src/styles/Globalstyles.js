import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    font-family: Arial, Helvetica, sans-serif;
  
}

/* Ensure the app root and base elements can grow to viewport height
   so components using 100% or min-height:100vh behave consistently. */
html, body, #root {
    height: 100%;
}
`
