import React from 'react'

const ProductRow = ({ product, onDelete, onEdit }) => {
    return (
      <tr>
        <td style={{color:product.stocked ? "black" : "red"}}>{product.name}</td>
        <td>{product.price}</td>

    
        <td>
          <button onClick={() => onEdit(product)}>수정</button>
          <button onClick={() => onDelete(product)}>삭제</button>
        </td>
      </tr>
    );
  };

  

export default ProductRow