import React from "react";
import Input from "./Input";
import * as S from "./SearchBar.styles";

type Props = {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (text: string) => void;
  onInStockOnlyChange: (checked: boolean) => void;
};

const SearchBar = ({ onFilterTextChange, onInStockOnlyChange, filterText, inStockOnly }: Props) => {
  return (
    <S.SearchForm>
      <Input
        type="text"
        value={filterText}
        placeholder="Search..."
        onValueChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label htmlFor="">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </S.SearchForm>
  );
};

export default SearchBar;
