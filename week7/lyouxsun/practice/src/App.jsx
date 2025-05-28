import React from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import { KUIT_WEB } from "./data";
import useSearch from "./hooks/useSearch";

function App() {
  const {search, filter, handleSearch, handleBtn} = useSearch(KUIT_WEB)

  return (
    <>
      <Search search={search} handleSearch={handleSearch} handleBtn={handleBtn}/>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filter.map((member) => 
          <Card name={member.name} age={member.age} />
        )}
      </section>
    </>
  );
}

export default App;
