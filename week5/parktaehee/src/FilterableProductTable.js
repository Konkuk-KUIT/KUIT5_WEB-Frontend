import React, { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import InputBar from "./InputBar.js";

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleDeleteProduct = (productToDelete) => {
    setProducts((prev) => prev.filter((p) => p !== productToDelete));
  };

  const handleEditProduct = (productToEdit) => {
    setEditingProductId(productToEdit.id);
  };

  const handleFinishEditProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProductId(null);
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
        onDelete={handleDeleteProduct}
        onEdit={handleEditProduct}
        onFinishEdit={handleFinishEditProduct}
        editingProductId={editingProductId}
      />
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
