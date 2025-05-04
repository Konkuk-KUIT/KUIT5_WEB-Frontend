import React, { useState } from "react";
import SearchBar from "./SearchBar";
import InputBar from "./InputBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (product) => {
    setProducts((products) => [...products, product]);    // products 배열 데이터 변경 (데이터 추가)
  };

  const deleteProduct = (deleted) => {
    console.log(deleted);
    setProducts(products.filter(product => product !== deleted));    // products 배열 데이터 변경 (데이터 추가)
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        deleteProduct={deleteProduct}
      />
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
