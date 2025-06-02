import React from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import useSearch from "./hooks/useSearch";
import { KUIT_WEB } from "./data";

export type dataType = {
  name: string;
  age: number;
};

const App = () => {
  const { search, filter, handleSearch, handleBtn } = useSearch({ initial: KUIT_WEB });
  return (
    <>
      <Search search={search} handleSearch={handleSearch} handleBtn={handleBtn} />
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
