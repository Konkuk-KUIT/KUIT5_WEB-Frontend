import React from "react";
import * as S from "./SearchBar.styles";
import Input from "./Input";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  const handleTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    onInStockOnlyChange(e.target.checked);
  };

  return (
    <S.SearchForm>
      <input
        type={"text"}
        value={filterText}
        placeholder="Search..."
        onChange={handleTextChange}
      />
      <label>
        <input
          type={"checkbox"}
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </S.SearchForm>
  );
};

export default SearchBar;
