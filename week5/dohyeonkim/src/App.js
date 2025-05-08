import FilterableProductTable from "./FilterableProductTable";
import React, { useState } from "react";

const App = () => {

  const [products,setProducts] = useState([
    {category : "Fruits", price: "$1", stocked : true, name : "Apple"},
    {category : "Fruits", price: "$1", stocked : true, name : "Dragonfruit"},
    {category : "Fruits", price: "$2", stocked : false, name : "Passionfruit"},
    {category : "Vegetables", price: "$2", stocked : true, name : "Spinach"},
    {category : "Vegetables", price: "$4", stocked : false, name : "Pumpkin"},
    {category : "Vegetables", price: "$1", stocked : true, name : "Peas"}
  ]);


  return <FilterableProductTable products = {products} setProducts = {setProducts}/>;
};

export default App;
