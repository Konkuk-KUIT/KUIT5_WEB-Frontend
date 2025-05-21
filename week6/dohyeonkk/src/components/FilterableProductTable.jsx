import React, { useState } from "react"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

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

    const filteredProducts  = products.filter((product)=>{
        const nameMatches = product.name.toLowerCase().includes(filterText.toLowerCase());
        const stockMatches = !inStockOnly || product.stocked;
        return nameMatches && stockMatches;
    });



    return (<div>
        <SearchBar filterText={filterText}
        inStockOnly = {inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}/>
        <ProductTable
            products={filteredProducts}
            deleteProduct = {deleteProduct} 
            editProduct={editProduct}/>

        <ProductForm addProduct={addProduct} />
    </div>);
};

export default FilterableProductTable