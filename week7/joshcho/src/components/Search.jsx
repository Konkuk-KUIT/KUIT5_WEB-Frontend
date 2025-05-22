import React from "react";

export default function Search({ search, handleSearch, handleBtn }) {
  return (
    <>
      <input value={search} onChange={handleSearch} />
      <button onClick={handleBtn}>검색</button>
    </>
  );
}
