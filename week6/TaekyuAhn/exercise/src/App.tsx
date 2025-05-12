import React, { useState } from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import Router from "./routes/Router";
import GlobalStyle from "./components/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
