import React, { useState } from "react";
import Search from "./components/Search";
import { KUIT_WEB } from "./data";
import Card from "./components/Card";
import useSearch from "./hooks/useSearch";

const App = () => {
  const { search, filter, handleSearch, handleBtn } = useSearch(KUIT_WEB);
  return (
    <>
      <Search
        search={search}
        handleSearch={handleSearch}
        handleBtn={handleBtn}
      />
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filter.map((member) => (
          <Card name={member.name} age={member.age} />
        ))}
      </section>
    </>
  );
};

export default App;
