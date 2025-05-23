import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import InputBar from "./InputBar";



const FilterableProductTable = ({products, setProducts}) => {
    
    const [filterText, setFilterText]=useState("");
    const [inStockOnly,setInStockOnly] =useState(false);
    
    const addProduct = (newProduct) => {
      setProducts((prev) => [...prev, newProduct]);
    };
    const deleteProduct = (productName) => {
      setProducts((prev) => prev.filter((p) => p.name !== productName));
    };
    const editProduct = (editedProduct, originalName) => {
      setProducts((prev) =>
        prev.map((p) => (p.name === originalName ? editedProduct : p))
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
        onDelete={deleteProduct}
        onEdit={editProduct}
        />
        <InputBar addProduct={addProduct}/>
    </div>
  );
};

export default FilterableProductTable;