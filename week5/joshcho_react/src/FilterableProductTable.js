import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
    // products = [{}, {}, {}, ..., {}]
    // newProducts = [...products, {newProduct}]
  };

  const deleteProduct = (name) => {
    setProducts((prev) => prev.filter((p) => p.name !== name));
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.name === updatedProduct.name ? updatedProduct : product
      )
    );
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
        updateProduct={updateProduct}
      />

      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
