import React from "react";
import Router from "./pages/Router";
import GlobalStyle from "./components/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
