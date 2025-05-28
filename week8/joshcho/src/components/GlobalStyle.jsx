import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin:0;
    }
    button {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
