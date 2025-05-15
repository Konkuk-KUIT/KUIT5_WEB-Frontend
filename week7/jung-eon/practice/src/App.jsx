import React from "react";
import { RIIZE } from "./data";
import useSearch from "./hooks/useSearch";
import Search from "./components/Search";
import Card from "./components/Card";

const App = () => {
  const { search, filtered, handleSearch, handleBtn } = useSearch(RIIZE);

  return (
    <div style={{ padding: 20 }}>
      <Search
        search={search}
        handleSearch={handleSearch}
        handleBtn={handleBtn}
      />
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
        {filtered.map((member) => {
          return <Card name={member.name} age={member.age} />;
        })}
      </div>
    </div>
  );
};

export default App;
