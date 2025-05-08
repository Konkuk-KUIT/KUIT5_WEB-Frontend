import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [editingName, setEditingName] = useState(null);
  const [newProduct, setNewProduct] = useState({
    category: "",
    name: "",
    price: "",
    stocked: true,
  });

  if (!products || !Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  const addProduct = (newProduct) => {
    setProducts((prev) => {
      const isDuplicate = prev.some((p) => p.name === newProduct.name);
      if (isDuplicate) return prev;

      const updated = [...prev, newProduct];

      updated.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      });

      return updated;
    });

    setNewProduct({
      category: "",
      name: "",
      price: "",
      stocked: true,
    });
  };

  const categories = [...new Set(products.map((p) => p.category))];

  const handleDeleteProduct = (nameToDelete) => {
    setProducts((prev) => prev.filter((p) => p.name !== nameToDelete));
  };

  const handleEditProduct = (productName) => {
    const productToEdit = products.find((p) => p.name === productName);
    if (!productToEdit) return;
    setEditingName(productName);
    setNewProduct({ ...productToEdit });
  };

  const handleUpdateProduct = () => {
    const updated = products.map((p) =>
      p.name === editingName ? newProduct : p
    );
    setProducts(updated);
    setEditingName(null);
    setNewProduct({ category: "", price: "", name: "", stocked: true });
  };

  const handleAddNewProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ category: "", price: "", name: "", stocked: true });
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
      />
      <InputBar
        addProduct={addProduct}
        categories={categories}
        editingName={editingName}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        handleAddNewProduct={handleAddNewProduct}
        handleUpdateProduct={handleUpdateProduct}
        setEditingName={setEditingName}
        products={products}
        onEdit={handleUpdateProduct}
      />
      ;
    </div>
  );
};

export default FilterableProductTable;
