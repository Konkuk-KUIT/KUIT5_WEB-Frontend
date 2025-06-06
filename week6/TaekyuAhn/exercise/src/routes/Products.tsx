import React, { useState } from "react";
import FilterableProductTable from "../components/FilterableProductTable";

export type ProductType = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: true, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ]);
  return <FilterableProductTable products={products} setProducts={setProducts} />;
};

export default Products;
