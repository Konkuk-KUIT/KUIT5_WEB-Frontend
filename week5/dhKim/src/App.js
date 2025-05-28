import React, {useState} from "react";
import FilterableProductTable from "./FilterableProductTable";
import GlobalStyles from "./GlobalStyles";




const App=()=>{
  const [products, setProducts]=useState([
    {category:"Fruits", price:"$1",stocked:true, name:"Apple"},
    {category:"Fruits", price:"$1",stocked:true, name:"Dragonfruit"},
    {category:"Fruits", price:"$2",stocked:false, name:"Passionfruit"},
    {category:"Vegetables", price:"$2",stocked:true, name:"Spinach"},
    {category:"Vegetables", price:"$4",stocked:false, name:"Pumpkin"},
    {category:"Vegetables", price:"$1",stocked:true, name:"Peas"},
    
  ]);//products를 props로 내리고, setProducts는 products(state)를 업데이트 하는 방법법 

  return(
  <>
  <GlobalStyles/> 
  <FilterableProductTable products={products} setProducts={setProducts}/>
  </>
  );
};

export default App;

