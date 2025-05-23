import React,{useState} from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import InputBar from "./InputBar";

const FilterableProductTable=({products,setProducts})=>{
   
    const[filterText, setFilterText]=useState("");
    const[inStockOnly,setInStockOnly]=useState(false);

    const addProduct=(newProduct)=>{

        setProducts((previousData)=>[...previousData, newProduct]);
        //products=[{},{},{},...,{}]
        //배열 데이터 수정 idea
        //newProducts=[...products,{newProduct}]
        
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
            setProducts={setProducts}
            />
            {/* 프롭스를 한번 더 내림림 */}
            <InputBar addProduct={addProduct}/>
        </div>
    );
};

export default FilterableProductTable;
