import React from "react";

export default function Search({ search, handleSearch, handleBtn }) {
  return (
    <>
      <input
        value={search}
        onChange={handleSearch}
        placeholder="이름을 입력하세요"
      />
      <button onClick={handleBtn}>검색</button>
    </>
  );
}
