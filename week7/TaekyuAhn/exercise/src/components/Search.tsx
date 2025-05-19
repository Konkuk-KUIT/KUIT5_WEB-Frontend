import React from "react";

type Props = {
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBtn: () => void;
};

const Search = ({ search, handleSearch, handleBtn }: Props) => {
  return (
    <>
      <input value={search} onChange={handleSearch} />
      <button onClick={handleBtn}>검색</button>
    </>
  );
};

export default Search;
