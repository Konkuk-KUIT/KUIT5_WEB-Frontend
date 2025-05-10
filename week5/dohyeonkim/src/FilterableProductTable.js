import React, { useState } from "react"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = ({ products,setProducts }) => {

    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const addProduct = (product)=>{
        setProducts((prev)=>[...prev,product]);
    };

    const deleteProduct = (product)=>{
        setProducts((prev)=>prev.filter((p)=>p!==product));
    };

    const editProduct = (product)=>{
        setProducts((prev)=>prev.map((p)=>(p.name===product.name?product:p)))
    };



    return (<div>
        <SearchBar filterText={filterText}
        inStockOnly = {inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}/>
        <ProductTable
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
            deleteProduct = {deleteProduct} 
            editProduct={editProduct}/>

        <InputBar addProduct={addProduct} />
    </div>);
};

export default FilterableProductTable