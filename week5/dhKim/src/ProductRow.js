import React from "react";

const ProductRow=({product,setProducts})=>{

    const deleteItem=()=>{
        setProducts((previousItem)=>previousItem
        .filter((x)=>x!==product));
        //previousItem은 이전의 products 배열을 의미한다.
        //filter는 조건에 맞는 요소만 남기고 배열을 새로 만든다.
        //product와 값이 다른 항목만 남긴다.
        //여기서 x는 previousItem배열의 각요소를 의미
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

//부모 컴포넌트에서 productrow를 반복호출하고 있기 때문에 product가 화면에 하나씩 렌더링된다.
