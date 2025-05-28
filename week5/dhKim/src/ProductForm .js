import React,{useState} from "react";

import * as S from './ProductForm.styles';
import Input from "./Input";


const ProductForm =({addProduct})=>{
    const [newProduct, setNewProduct]=useState({
       category: "",
       price: "",
       stocked: true,
       name:"", 
    });

    const handleChange=(value,label)=>{
        setNewProduct({...newProduct,  [label]:value})
    };
    const handleAddNewProduct=()=>{
        addProduct(newProduct);
    };
 
    return(
        <S.Form>

            <Input
                type={"text"}
                value={newProduct.category}
                onChange={(e)=>    
                handleChange(e.target.value,"category")}    
                placeholder="category..."
            />

            <Input
                type={"text"} 
                value={newProduct.price}
                onChange={(e)=>handleChange(e.target.value,"price")}
                placeholder="price..."
            />

            <label>Is Stocked</label>
            <Input
                type={"checkbox"}
                checked={newProduct.stocked}
                onChange={(e)=>handleChange(e.target.checked,"stocked")}
            />
            <Input
                type={"text"}
                value={newProduct.name}
                onChange={(e)=>handleChange(e.target.value,"name")}
                placeholder="name..."
            />
            <button onClick={handleAddNewProduct} type={"button"}>
                add new product
            </button>
        </S.Form>
    );
};
 


export default ProductForm ;
  