import React,{useState} from "react";

//  {category : "Fruits", price: "$1", stocked : true, name : "Apple"},


const ProductRow = ({ product,deleteProduct,editProduct }) => {

    const [isEdit,setIsEdit]=useState(false);


    const HandleDeleteProduct = () =>{
        deleteProduct(product);
    };
    const HandleEditProduct = () =>{
        setIsEdit(true);
    };
    const HandleKeyDown=(e)=>{
        if(e.key==='Enter'){
            editProduct({...product,price:e.target.value});
            setIsEdit(false);
        }
    }

    
    return (
        <tr>
            <td style={{ color: product.stocked ? "black" : "red" }}>
                {product.name}
                </td>
            <td>
            {isEdit?(<input type="text" defaultValue={product.price} onKeyDown={HandleKeyDown}/>):(product.price)}
            </td>

            <td>
                <button type={"button"} onClick={HandleDeleteProduct}>❌</button>
            </td>
            <td>
                <button type={"button"} onClick={HandleEditProduct}>✏️</button>
            </td>
       
        </tr>
    );
};

export default ProductRow;
