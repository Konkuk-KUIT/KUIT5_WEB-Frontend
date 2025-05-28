import React from 'react'
import Deleteproduct from './Deleteproduct';
import EditProduct from './EditProduct';

const ProductRow = ({product, onDelete, onEdit}) => {
// { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
  return (
    <tr>
        <td style={{color: product.stocked ? "black" : "red"}}>
            {product.name}
        </td>
        <td>{product.price}</td>
        <td>
        <Deleteproduct product={product} deleteProduct={onDelete} />
        <EditProduct product={product} onEdit={onEdit} />
      </td>
    </tr>
  );
};

export default ProductRow;