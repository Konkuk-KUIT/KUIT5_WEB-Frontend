import React from "react";

const ProductRow=({product,setProducts})=>{

    const deleteItem=()=>{
        setProducts((previousItem)=>previousItem
        .filter((x)=>x!==product));
    };


    return (
       <tr>
            <td style={{color:product.stocked?"black":"red"}}>
                {product.name}
            </td>
            <td>{product.price}</td>
            <td>
                <button 
                    onClick={deleteItem}>
                        &#x274C;
                </button>
            </td>
       </tr>
    );
};

export default ProductRow;

