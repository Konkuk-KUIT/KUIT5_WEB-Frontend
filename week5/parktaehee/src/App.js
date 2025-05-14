import React, { useState } from "react";
import FilterableProductTable from "./FilterableProductTable";

const App = () => {
  const [products, setProducts] = useState([
    { category: "Fruits", price: "$1", stocked: true, name: "Apple", id: 1 },
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Dragonfruit",
      id: 2,
    },
    {
      category: "Fruits",
      price: "$2",
      stocked: false,
      name: "Passionfruit",
      id: 3,
    },
    {
      category: "Vegetables",
      price: "$2",
      stocked: true,
      name: "Spinach",
      id: 4,
    },
    {
      category: "Vegetables",
      price: "$4",
      stocked: false,
      name: "Pumpkin",
      id: 5,
    },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas", id: 6 },
  ]);

  return (
    <FilterableProductTable products={products} setProducts={setProducts} />
  );
};

export default App;
