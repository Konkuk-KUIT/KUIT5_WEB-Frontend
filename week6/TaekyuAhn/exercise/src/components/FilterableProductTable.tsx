import React, { Dispatch, SetStateAction, useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { ProductType } from "../routes/Products";
import InputBar from "./ProductForm";

type Props = {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
};

const FilterableProductTable = ({ products, setProducts }: Props) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (product: ProductType) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (product: ProductType) => {
    setProducts((prev) => prev.filter((item) => item !== product));
  };

  const updateProduct = (prevProduct: ProductType, newProduct: ProductType) => {
    setProducts((prev) => prev.map((item) => (item === prevProduct ? newProduct : item)));
  };

  const filteredProducts = products.filter((product) => {
    const nameMatches = product.name.toLowerCase().includes(filterText.toLowerCase());
    const stockMatches = !inStockOnly || product.stocked;
    return nameMatches && stockMatches;
  });

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      ></SearchBar>
      <ProductTable
        products={filteredProducts}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      ></ProductTable>
      <InputBar addProduct={addProduct}></InputBar>
    </div>
  );
};

export default FilterableProductTable;
