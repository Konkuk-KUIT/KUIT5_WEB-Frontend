import { createGlobalStyle } from "styled-components";
import "../fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Pretendard', sans-serif;
    color: "#333D4B";
  }

  body {
  margin: 0;
  padding: 0;
  width: 390px;
  }
`;

export default GlobalStyle;
