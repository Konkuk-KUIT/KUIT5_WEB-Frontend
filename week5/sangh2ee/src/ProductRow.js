import React from 'react'
import Deleteproduct from './Deleteproduct';

const ProductRow = ({product, onDelete}) => {
// { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
  return (
    <tr>
        <td style={{color: product.stocked ? "black" : "red"}}>
            {product.name}
        </td>
        <td>{product.price}</td>
        <td>
        <Deleteproduct product={product} deleteProduct={onDelete} />
      </td>
    </tr>
  );
};

export default ProductRow;