import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const deleteProduct = (product) => {
    setProducts(
      (prev) =>
        prev.filter((p) => p.name !== product.name || p.price !== product.price)
      // 이름이 다르거나 가격이 다른 물품만 남김
      //즉, 이름이 같고 가격이 같은 물품 삭제
    );
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText} //상태함수 전달
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        deleteProduct={deleteProduct}
      />
      <InputBar
        addProduct={addProduct}
        // deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default FilterableProductTable;
