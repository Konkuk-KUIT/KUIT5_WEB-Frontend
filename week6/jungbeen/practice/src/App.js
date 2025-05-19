import React from "react";
import Router from "./routes/Router";
import GlobalStyle from "./components/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
