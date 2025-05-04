import React from "react";

const SearchBar = ({
  filterText, //props 로 전달된 상태값과 상태 함수
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  //사용자 입력 받고 이를 부모(FilterablrProductTable 에 넘김)
  const handleTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    onInStockOnlyChange(e.target.checked);
  };
  return (
    <form>
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
    </form>
  );
};

export default SearchBar;
